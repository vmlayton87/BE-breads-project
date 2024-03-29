const express = require(`express`)
const breads = express.Router()
const Bread = require(`../models/bread.js`)
const Seed = require(`../models/seed.js`)
const Baker = require(`../models/baker.js`)

// INDEX show's a list of each baker and bread name
breads.get(`/`, async (req, res)=>{
  const foundBakers = await Baker.find()
  const foundBreads = await Bread.find().populate(`baker`).limit(2).lean()
  console.log(foundBreads)
  res.render(`index`, 
        {
            breads: foundBreads,
            bakers: foundBakers,
            title: `Index Page`
        })
    
    // send: to send exactly what you see as text
    //res.send(Bread)
})

// NEW add new bread form
breads.get('/new', (req, res) => {
  Baker.find()
  .then(foundBakers => {
    res.render('new', {
      bakers: foundBakers
    })
  })
})

// inserts many breads at a time from a file
breads.get('/data/seed', (req, res) => {
  Bread.insertMany(Seed)
  .then(createdBreads=>{
    res.redirect(`/breads`)
  })
  
})


//EDIT a bread item.  takes you to a form to edit the info
// EDIT
breads.get('/:id/edit', (req, res) => {
  Baker.find()
    .then(foundBakers=>{
      Bread.findById(req.params.id)
      .then((foundBread)=>{
        res.render('edit', {
          bread: foundBread,
          bakers: foundBakers
        })
      })
    })
  
})


// SHOW a page that shows the individual info of one bread type
breads.get('/:id', (req, res) => {
        
        Bread.findById(req.params.id)
          .populate(`baker`)
          .then((foundBread)=>{
            const bakedBy = foundBread.getBakedBy()
            console.log(bakedBy)
            res.render('show', {
                  bread:foundBread
                })
          })
        })
      

    // before moongoose
    // if (Bread[req.params.arrayIndex]) {
    //   res.render('Show', {
    //     bread:Bread[req.params.arrayIndex],
    //     index: req.params.arrayIndex,
    //   })
    // } else {
    //   res.render('404')
    // }



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
    .then(res.redirect('/breads'))
    .catch(err=>{
      console.log(err)
      res.render(`404`)})  
  })

  // UPDATE a bread item same idea as the create, but instead, it takes changed information instead.
breads.put(`/:id`, (req, res)=>{
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  // the new option helps to make sure it returns the changed information and not the original information
  Bread.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then((updatedBread)=>{
    res.redirect(`/breads/${req.params.id}`)
  })
  .catch(err=>{
    console.log(err)
    res.render(`404`)})  
  
})

  // DELETE a bread object
  breads.delete(`/:id`, (req, res)=>{
    Bread.findByIdAndDelete(req.params.id)
    .then(res.status(303).redirect(`/breads`))
    .catch(err=>{
      console.log(err)
      res.render(`404`)})  
    
  })

module.exports = breads


  