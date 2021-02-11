// requiring the npm packages
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// creating express app
const app = express()

// let app user body-parser
app.use(bodyParser.urlencoded({extended : true}))

// routes
app.use('/', require('./routes/items'))
app.use('/', require('./routes/add'))
app.use('/', require('./routes/delete'))

// listning the home routes
app.get('/', function(req, res){
    res.send("Server is running  properly")
})

// spinning the server at port 3001
app.listen(process.env.PORT || 3001, function(){
    console.log('server is running at port: 3001')
})