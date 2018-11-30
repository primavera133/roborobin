const norvigSpellChecker = require('./intellisearch')

class Corrector {
  constructor (dictionary) {
    this.intelliSearch = norvigSpellChecker()
    this.intelliSearch.train(dictionary.join(' ').toLowerCase())

    this.getCorrected = this.getCorrected.bind(this)
  }

  getCorrected (str) {
    return this.intelliSearch.correct(str)
  }
}

module.exports = Corrector
