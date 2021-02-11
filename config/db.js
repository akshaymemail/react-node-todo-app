const mongoose = require('mongoose')

// connecting to the database
const url = process.env.DB_STRING
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url, options)

// Creating schema
const schema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    }
})

// creating the model
const Items = mongoose.model('item', schema)

module.exports = Items