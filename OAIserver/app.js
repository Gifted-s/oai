const os = require('os')
const cluster = require('cluster')
const handleSignup = require('./src/handleUserSignup/signup')
const handleValidation = require('./src/handleEmailValidation/validation')
const handleUserAuth = require('./src/handleUserAuth/auth')
const handleSignin = require('./src/handleSignin/handleSignin')
const serverless = require('serverless-http')
const addProduct = require('./src/handleAddProduct/addProduct')
const handleFetchProducts = require('./src/handleFetchProducts/handleFetchProducts')
const handleMessage = require('./src/handleMessage/handleMessage')
const handleGetUser = require('./src/handleGetUser/handleGetUser')
const handleEditProfile = require('./src/handleEditProfile/handleEditProfile')
const handleForgotPassword = require('./src/handleForgotPassword/handleForgotPassword')

// const numOfCpus = os.cpus().length
// if (cluster.isMaster) {
//   console.log(`Master worker with pid ${process.pid} started successfully`)
//   for (let i = 0; i < numOfCpus; i++) {
//     cluster.fork()
//   }
// }
// else {
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const socket = require('socket.io')
const User = require('./src/models/User')
const Material = require('./src/models/Product')
// const router = express.Router()
const bcrypt = require('bcryptjs')
console.log(process.pid + ' is active')
// const { v4: uuidv4 } = require('uuid')
const cors = require('cors')
const helmet = require('helmet')
const handleGetUsers = require('./src/handlegetUsers/getUsers')
const handleDeleteUser = require('./src/handleDelete/handleDeleteUser')
const port = process.env.PORT || 4000
let server = app.listen(port, () => {
  console.log('On the track')
})
const io = socket(server)
io.on('connection', (socket) => {
  console.log('socket connected')
  socket.on('chat-message', (message) => {
    socket.broadcast.emit('msg', message)
  })
  socket.on('upload', (data) => {
    console.log(data)
  })
})

global.Promise = mongoose.Promise
mongoose.connect(process.env.MONGODB_CONN, { useNewUrlParser: true, useUnifiedTopology: true, keepAlive: true }, () => {
})
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))
// prevent all cross site error and all web vulnurabilities
app.use(helmet())
// use router

app.post('/signup', (req, res, next) => {
  handleSignup(req, res, User)
})
app.post('/edit-user', (req, res, next) => {
  handleEditProfile(req, res, next, User, bcrypt)
})
app.post('/signin', (req, res, next) => {
  handleSignin(req, res, User)
})
app.get('/validate-email/:id', (req, res) => {
  handleValidation(req, res, User)
})
app.get('/validate-user/:id', (req, res) => {
  handleUserAuth(req, res, User)
})
app.post('/addmaterial', (req, res, next) => {
  addProduct(req, res, Material)
})
app.get('/getmaterials', (req, res, next) => {
  handleFetchProducts(req, res, Material)
})
app.post('/send-message', (req, res, next) => {
  handleMessage(req, res, User)
})
app.get('/get-user/:id', (req, res, next) => {
  handleGetUser(req, res, User)
})
app.post('/forgot', (req, res) => {
  handleForgotPassword(req, res, User, bcrypt)
})
app.get('/getusers', (req, res, next) => {
  handleGetUsers(req, res, User)
})
app.get('/delete-user/:id', (req, res, next) => {
  handleDeleteUser(req, res, User)
})
module.exports = app
// }
