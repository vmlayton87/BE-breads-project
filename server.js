// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views') // explicit dependency
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static(`public`))
app.use(express.urlencoded({extended: true}))


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
