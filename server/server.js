const creds = require('./creds')
const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')

mongoUsername = creds.mongoUsername
mongoPass = creds.mongoPass

const mongoUri = `mongodb+srv://${mongoUsername}:${mongoPass}@cluster0.hicjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.get('/api/users', (req, res)=>{
    res.json([
        {
            id: 1,
            username: 'soundarzozm'
        },
        {
            id: 2,
            username: 'yasha_026'
        }
    ])
})

MongoClient.connect(mongoUri, {useUnifiedTopology: true}, (err, client)=>{
    if(err){
        throw err
    }
    console.log('Connected to the database.')
})

const port = process.env.PORT || 8080
app.listen(port)
