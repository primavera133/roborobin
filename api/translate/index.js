const Corrector = require('./Corrector')
const Translator = require('./Translator')

const { parse } = require('url')

const species = require('./species')
const dictionary = species.map(specie => {
  return specie.sv.toLowerCase()
})
const corrector = new Corrector(dictionary)

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
