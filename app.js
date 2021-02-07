// requiring the npm packages
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// creating express app
const app = express()

// let app user body-parser
app.use(bodyParser.urlencoded({extended : true}))

// connecting to the database
mongoose.connect('mongodb+srv://admin-akshay:'+process.env.DB_PASSWORD+'@akshay.vlzrm.mongodb.net/todoDB', {useNewUrlParser : true, useUnifiedTopology : true})

// Creating schema
const schema = new mongoose.Schema({
    item : {
        type : String,
        required : true
    }
})

// creating the model
const Items = mongoose.model('item', schema)

// listning the home routes
app.get('/', function(req, res){
    res.send("Server is running  properly")
})

// sending the items list on items routes
app.get('/items', function(req, res){
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

// listining post add route to add an item
app.post('/add', function(req,res){

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

// listining post delete route to delete an item
app.post('/delete', function(req, res){
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

// spinning the server at port 3001
app.listen(process.env.PORT || 3001, function(){
    console.log('server is running at port: 3001')
})