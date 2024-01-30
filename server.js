// DEPENDENCIES
const express = require('express')
const methodOverride = require(`method-override`)
const mongoose = require('mongoose')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

//WORKS WITHOUT THE OPTIONS

// mongoose.connect(process.env.MONGO_URI)
// console.log(`connected to mongo: `, process.env.MONGO_URI)

//maps multiple databases within the one connection
// mongoose.createConnection(process.env.MONGO_URI,).asPromise(console.log(`connected to mongo: `, process.env.MONGO_URI))

// I do believe this is the best practice for our assignment. but this will work for one database. the createconnection and as promise will work for multiple databases. 
mongoose.connect(process.env.MONGO_URI).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))

//WORKS WITH THE OPTIONS
// maps a single database within a connection. this was in zoom chat, still getting deprecated warning
// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('connected to mongo: ', process.env.MONGO_URI))



// MIDDLEWARE
app.set('views', __dirname + '/views') // explicit dependency
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static(`public`))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride(`_method`))


// ROUTES
app.get('/', (req, res) => {
  res.render('layouts/default')
})

// BREADS
const breadsController = require(`./controllers/breads_controller.js`)
app.use(`/breads`, breadsController)

// 404 Page
app.get('*', (req, res) => {
  res.render('404')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
