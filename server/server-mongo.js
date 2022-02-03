const creds = require('./creds')
const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')

const mongoUri = `mongodb+srv://${creds.mongoUsername}:${creds.mongoPass}@cluster0.hicjz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(mongoUri)

app.get('/api/users', async(req, res)=>{
    
    try{
        await client.connect()
        const database = client.db('myApp')
        const collection = database.collection('users')

        await collection.insertOne({
            firstName: "Yasha",
            lastName: "Chittora"
        })

        res.status(200).json({awesome: 'YES'})

    }catch(error){
        throw error

    }finally{
        await client.close()
        console.log('Done DB work.')
    }

})

// MongoClient.connect(mongoUri, {useUnifiedTopology: true}, (err, client)=>{
//     if(err){
//         throw err
//     }
//     console.log('Connected to the database.')
// })

const port = process.env.PORT || 8080
app.listen(port)
