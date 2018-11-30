module.exports = class Translator {
  constructor (dictionary) {
    this.dictionary = this.normalize(dictionary)

    this.normalize = this.normalize.bind(this)
    this.translate = this.translate.bind(this)
  }

  normalize (arr) {
    return arr.map(obj => {
      Object.keys(obj).forEach(key => {
        obj[key] = obj[key].toLowerCase()
      })
      return obj
    })
  }

  translate (str, lang) {
    try {
      str = str.toLowerCase()
      return this.dictionary.find(obj => obj[lang] === str)
    } catch (err) {
      return err
    }
  }
}
