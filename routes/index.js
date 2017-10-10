var express = require('express')
var router = express.Router()
var Comment = require('../models/model.js')

router.get('/index', function (req, res, next) {
  Comment.find().sort({'created_at': -1})
  .then(function (comments) {
    console.log(comments)
    res.render('index', {
      comments: comments,
      pageTitle: 'Page',
      pageId: 'page'
    })
  })
  .catch(function (err) {
    console.log(err)
    next(err)
  })
})

router.post('/index', function (req, res, next) {
  Comment.create(req.body)
  .then(function (c) {
    res.redirect('/index')
  })
  .catch(function (err) {
    res.status(404).send(err)
  })
})

module.exports = router

/* dont show right when they post it aprove with published or unpublished

comments should be an array

created at

MONGOOSE COMMAND FETCH ( FIND )

use find sort by date

validator express

hapi joi  express joi plugin  *

json schema

*/
