const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  approved: {
    default: false,
    type: Boolean,
    required: false
  },

  password: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: false
  },
  profile: {
    type: String,
    required: false
  },
  country: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  validMail: {
    type: Boolean,
    default: false,
    required: false
  },
  dob: {
    type: String,
    required: false
  }

})

UserSchema.methods.hashPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}
UserSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model('User', UserSchema)
