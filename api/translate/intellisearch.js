/*
JS-Spell - Spellchecker
Description: a JavaScript based spelling corrector based on and inspired by google search engine
Author: Shine Xavier (original python: Peter Norvig, http://norvig.com/spell-correct.html)
Source code: https://jspell.codeplex.com/
Article: https://stoi.wordpress.com/2012/12/31/jspell/
Original article: http://norvig.com/spell-correct.html
*/
const norvigSpellChecker = () => {
  let that = {}
  let nWords = {}
  const filter = /([a-ö]+)/g
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'å', 'ä', 'ö']

  // Receives all known words which will be used as dictionary on search
  const train = (trainingText) => {
    const features = trainingText.match(filter)
    for (let f in features) {
      let feature = features[f]
      if (nWords.hasOwnProperty(feature)) {
        nWords[feature] += 1
      } else {
        nWords[feature] = 1
      }
    }
  }

  const edits1 = (words) => {
    let edits1Set = []

    for (let w = 0; w < words.length; w++) {
      let word = words[w]

      for (let i = 0; i <= word.length; i++) {
        // splits (a & b)
        let a = word.slice(0, i)
        let b = word.slice(i)
        let c = b.slice(1)
        let d = b.slice(2)

        if (b !== '') {
          // deletes
          edits1Set.push(a + c)
          // transposes
          if (b.length > 1) {
            edits1Set.push(a + b.charAt(1) + b.charAt(0) + d)
          }
          // replaces & inserts
          for (let j = 0; j < alphabets.length; j++) {
            edits1Set.push(a + alphabets[j] + c) // replaces
            edits1Set.push(a + alphabets[j] + b) // inserts
          }
        } else {
          // inserts (remaining set for b == '')
          for (let j = 0; j < alphabets.length; j++) {
            edits1Set.push(a + alphabets[j] + b)
          }
        }
      }
    }

    return edits1Set
  }

  const edits2 = (words) => edits1(edits1(words))

  const isEmpty = (object) => {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        return false
      }
    }

    return true
  }

  const known = function () {
    let knownSet = {}

    for (let i = 0; isEmpty(knownSet) && i < arguments.length; i++) {
      let words = arguments[i]

      for (let j = 0; j < words.length; j++) {
        let word = words[j]

        if (!knownSet.hasOwnProperty(word) && nWords.hasOwnProperty(word)) {
          knownSet[word] = nWords[word]
        }
      }
    }

    return knownSet
  }

  const max = (candidates) => {
    let maxCandidateKey = null
    let maxCandidateVal = 0
    let currentCandidateVal

    for (let candidate in candidates) {
      currentCandidateVal = candidates[candidate]

      if (candidates.hasOwnProperty(candidate) && currentCandidateVal > maxCandidateVal) {
        maxCandidateKey = candidate
        maxCandidateVal = currentCandidateVal
      }
    }

    return maxCandidateKey
  }

  // Corrects if search phrase can be related to any known word in dictionary
  const correct = function (...args) {
    let corrections = {}

    for (let i = 0; i < args.length; i++) {
      let word = args[i]
      let candidates = known([word], edits1([word]), edits2([word]))
      corrections[word] = isEmpty(candidates) ? word : max(candidates)
    }
    return corrections
  }

  that.train = train
  that.correct = correct

  return that
}

module.exports = norvigSpellChecker
