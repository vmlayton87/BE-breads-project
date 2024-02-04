// dependencies
const express = require('express')
const baker = express.Router()
const Baker = require('../models/baker.js')
const bakerSeedData = require('../models/baker-seed.js')


baker.get('/data/seed', (req, res) => {
    Baker.insertMany(bakerSeedData)
        .then(res.redirect('/breads'))
})

// INDEX
baker.get(`/`, (req, res)=>{
    Baker.find()
    .populate(`breads`)
        .then(foundBakers => {
            res.send(foundBakers)
        })
})

// SHOW
baker.get('/:id', (req, res) => {
        
    Baker.findById(req.params.id)
      .populate(`breads`)
      .then((foundBaker)=>{
        res.render('bakerShow', { //can repopulate the original show page (should look into that)
            baker: foundBaker
        })
      })
    })

// export
module.exports = baker                    
