const Corrector = require('./Corrector')
const Translator = require('./Translator')

const { parse } = require('url')

const dictionary = require('./dictionary.json')
const corrector = new Corrector(dictionary)

const species = require('./species')
const translator = new Translator(species)

module.exports = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    const { query } = parse(req.url, true)
    const { input } = query

    const corrected = corrector.getCorrected(input)

    const translated = translator.translate(corrected[input], 'sv')
    if (!translated) {
      res.writeHead(422, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ err: 'No translation found' }))
    }

    res.end(JSON.stringify(translated))
  } catch (err) {
    console.log(err)
    res.end(err)
  }
}
