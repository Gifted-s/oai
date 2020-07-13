const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PSchema = new Schema({

  title: String,
  note: String,
  fileUrl: String

})

module.exports = mongoose.model('ProductS', PSchema)
