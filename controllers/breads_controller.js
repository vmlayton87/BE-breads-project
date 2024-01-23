const express = require(`express`)
const breads = express.Router()
const Bread = require(`../models/bread.js`)

// INDEX
breads.get(`/`, (req, res)=>{
    // render:to render the html on the page
    res.render(`index`, 
        {
            breads:Bread,
            title: `Index Page`

        }
    )
    // send: to send exactly what you see as text
    //res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex]
      })
    } else {
      res.send('404')
    }
  })
  
module.exports = breads