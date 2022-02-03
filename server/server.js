const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


////////////////////////////////////////////
// MONGOOSE
const creds = require('./creds')
const mongoUri = `mongodb+srv://${creds.mongoUsername}:${creds.mongoPass}@cluster0.hicjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
////////////////////////////////////////////


////////////////////////////////////////////
// SCHEMA SETUP Pro stuff (Just watch)
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number,
    avail: Boolean
})

const Car = mongoose.model('Car', carSchema)
////////////////////////////////////////////


////////////////////////////////////////////
// MIDDLEWARES
app.use(bodyParser.json())
////////////////////////////////////////////


////////////////////////////////////////////
// END-POINTS
app.post('/api/addcar', (req, res)=>{
    
    const addCar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year,
        avail: req.body.avail
    })
    
    addCar.save((err, doc)=>{
        if(err) return console.log(err)
        console.log(doc)
    })
})
////////////////////////////////////////////


const port = process.env.PORT || 8080
app.listen(port)
