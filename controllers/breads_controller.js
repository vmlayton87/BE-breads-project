const express = require(`express`)
const breads = express.Router()
const Bread = require(`../models/bread.js`)

// INDEX show's a list of each bread name
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

// NEW add places form
breads.get('/new', (req, res) => {
    res.render('new')
})

//EDIT a bread item.  takes you to a form to edit the info
// EDIT
breads.get('/:id/edit', (req, res) => {
  res.render('edit', {
    bread: Bread[req.params.id],
    index: req.params.id
  })
})


// SHOW a page that shows the individual info of one bread type
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
      .then((foundBread)=>{
        res.render('show', {
              bread:foundBread
            })
      })
      .catch(err=>{res.render(`404`)})  

    // before moongoose
    // if (Bread[req.params.arrayIndex]) {
    //   res.render('Show', {
    //     bread:Bread[req.params.arrayIndex],
    //     index: req.params.arrayIndex,
    //   })
    // } else {
    //   res.render('404')
    // }
  })


// CREATE because the form method is post, it uses this route to create a new bread item in the model. it uses the variable named above and .push to add a new item. the redirect takes you back to the main index page. refrences the post method from the new form.
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

  // UPDATE a bread item same idea as the create, but instead, it takes changed information instead.
breads.put(`/:id`, (req, res)=>{
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.id]=req.body
  res.redirect(`/breads/${req.params.id}`)
})

  // DELETE a bread object
  breads.delete(`/:id`, (req, res)=>{
    Bread.findByIdAndDelete(req.params.id)
    .then(res.status(303).redirect(`/breads`))
    .catch(err=>{res.render(`404`)}) 
    
  })

module.exports = breads


  