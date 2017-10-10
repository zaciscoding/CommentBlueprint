const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const morgan = require('morgan')
const morganDev = morgan('dev')

const app = express()

// connect mongoose to db
mongoose.connect('mongodb://localhost/CommentDb')

// set mongoose promise value to global promise
mongoose.Promise = global.Promise

// set table ( variable, value)

app.set('port', process.env.PORT || 3000)
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

// use stack for middleware

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(morganDev)
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(require('./routes/index.js'))

app.use(function (err, req, res, next) {
  res.status(404).json({Error: err.message})
})

const server = app.listen(app.get('port'), function () {
  console.log(' you are now listening to port: ' + app.get('port'))
})
