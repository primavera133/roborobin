const healthCheckApi = require('../api/healthcheck')
const recordingsApi = require('../api/recordings')
const translateApi = require('../api/translate')
const dotenv = require('dotenv')
dotenv.load()

const createError = require('http-errors')
const express = require('express')

const apiRouter = express.Router()
apiRouter.get('/healthcheck', healthCheckApi)
apiRouter.get('/recordings', recordingsApi)
apiRouter.get('/translate', translateApi)

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
