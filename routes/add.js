const express = require('express')
const Items = require('../config/db')

const router = express.Router()

router.post('/add', function(req,res){

    // creating new item in the db
    const item = new Items({
        item : req.body.item
    })
    item.save(function(err){
        // cheking the condition
        if(!err){
            // items was saved successfully in the db
            res.redirect('/')
        }else{
            // there was an error
            res.send(err)
        }
    })
})

module.exports = router