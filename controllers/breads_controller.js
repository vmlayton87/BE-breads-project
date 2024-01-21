const express = require(`express`)
const breads = express.Router()
const Bread = require(`../models/bread.js`)

// INDEX
breads.get(`/`, (req, res)=>{
    // render says to render the html on the page
    res.render(`index`, 
        {
            breads:Bread,
            title: `Index Page`

        }
    )
    // send says to send exactly what you see as text
    //res.send(Bread)
})

// SHOW
breads.get(`/:arrayIndex`, (req, res)=>{
    res.send(Bread[req.params.arrayIndex])
})

module.exports = breads