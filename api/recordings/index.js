const { parse } = require('url')
const fetch = require('isomorphic-fetch')
const mcache = require('memory-cache')

const XENO_CANTO_BASE_URL = 'https://www.xeno-canto.org/api/2'
const cacheDuration = 60 * 60 * 24 * 1000

module.exports = async (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json')

    const { query } = parse(req.url, true)
    const { searchQuery } = query
    const url = `${XENO_CANTO_BASE_URL}/recordings?query=${searchQuery}`

    let key = '__cached_request__' + url
    let cachedBody = mcache.get(key)
    if (cachedBody) {
      console.log('from cache', key)
      res.end(cachedBody)
    } else {
      const options = {}
      let response = await fetch(url, options)
      let responseJson = await response.json()
      const body = JSON.stringify(responseJson)
      console.log('caching', key)
      mcache.put(key, body, cacheDuration)

      res.end(body)
    }
  } catch (err) {
    console.log(err)
  }
}
