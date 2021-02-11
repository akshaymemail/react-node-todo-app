const express = require('express');
const Items = require('../config/db')

const router = express.Router();

router.post('/delete', function(req, res){
    // fetching the specific item of matched item and deleting
    Items.findByIdAndRemove({_id : req.body.item_id}, function(err){
        if(!err){
            // item deleted successfully
            res.redirect('/')
        }else{
            // there was an error
            res.send("There was an error")
        }
    })
})

module.exports = router