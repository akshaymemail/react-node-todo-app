const express = require('express')
const Items = require('../config/db')

const router = express.Router()


router.get('/items', function(req, res){
    // fetching all the items in the db
    Items.find({}, function(err, foundItems){
        if(!err){
            // items was found successfully. now send them
            res.send(foundItems)
        }else{
            // there was an error
            console.log(err)
        }
    })
})

module.exports = router