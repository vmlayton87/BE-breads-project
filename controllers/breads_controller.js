const express = require(`express`)
const breads = express.Router()
const Bread = require(`../models/bread.js`)

// INDEX
breads.get(`/`, (req, res)=>{
    // find helper method on bread model (mongoose/mongoDB)
    Bread.find()
      .then((foundBreads)=>{
        // render:to render the html on the page
        res.render(`index`, 
        {
            breads: foundBreads,
            title: `Index Page`
        })
      })
    // send: to send exactly what you see as text
    //res.send(Bread)
})

// NEW
breads.get('/new', (req, res) => {
    res.render('new')
})

//EDIT a bread item
// EDIT
breads.get('/:indexArray/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.indexArray],
    index: req.params.indexArray
  })
})


// SHOW a page that shows the individual info of one bread type
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
      res.render('Show', {
        bread:Bread[req.params.arrayIndex],
        index: req.params.arrayIndex,
      })
    } else {
      res.render('404')
    }
  })


// CREATE because the form method is post, it uses this route to create a new bread item in the model. it uses the variable named above and .push to add a new item. the redirect takes you back to the main index page.
breads.post('/', (req, res) => {
    if (!req.body.image) {
      req.body.image = undefined
    }
    if(req.body.hasGluten === 'on') {
      req.body.hasGluten = true
    } else {
      req.body.hasGluten = false
    }
    Bread.create(req.body)
    res.redirect('/breads')
  })

  // UPDATE a bread item
breads.put(`/:arrayIndex`, (req, res)=>{
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex]=req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

  // DELETE a bread object
  breads.delete(`/:indexArray`, (req, res)=>{
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect(`/breads`)
  })

module.exports = breads


  