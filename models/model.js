var mongoose = require('mongoose')
var schema = mongoose.Schema

var commentSchema = schema({

  name: String,
  title: String,
  message: String,
  published: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
},
  { timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
  })

var Comment = mongoose.model('comments', commentSchema)

module.exports = Comment
