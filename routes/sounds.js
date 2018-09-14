const express = require('express')
const fetch = require('isomorphic-fetch')
const router = express.Router()
const cacheHelper = require('../helpers/responseCache')

const durationInSeconds = 60 * 60 * 24
router.get('/recordings/:searchQuery', cacheHelper.cache(durationInSeconds), async function (req, res, next) {
  try {
    const { searchQuery } = req.params
    const url = `${process.env.XENO_CANTO_BASE_URL}/recordings?query=${searchQuery}`
    const options = {}
    let response = await fetch(url, options)
    let responseJson = await response.json()
    res.json(responseJson)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
