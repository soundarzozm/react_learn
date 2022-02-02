const express = require('express')
const app = express()
const fs = require('fs') //module for file-sharing
const bodyParser = require('body-parser')

let HTML = fs.readFileSync(`${__dirname}/index.html`)

//middleware
app.use('/css', express.static(__dirname + '/public/css'))

//middleware2
app.use('/', (req, res, next)=>{
    
    //console.log('Someone made a request' + req.url)
    
    res.cookie('CookieName', 'cookieValue')
    
    //need next because this wont be resolved otherwise
    next()
})

//middleware3
const mw3 = (req, res, next) => {
    console.log('MW3')
    next()
}

const jsonParser = bodyParser.json()

app.get('/web', (req, res)=>{
    res.end(HTML) //cannot do res.send as it'll download the html file
})

//no need to specify head and end and other stuff
app.get('/', mw3, (req, res)=>{
    res.send('Hello World!')
})

//:whatever is read as params
app.get('/api/:username/:id', (req, res)=>{
    
    let id = req.params.id
    let user = req.params.username
    
    res.send(`
        <html>
            <body>
                <h2>The user ID is ${id}</h2>
                <h2>The username is ${user}</h2>
            </body>
        </html>
    `)

    // res.send({
    //     name: 'francis',
    //     lastname: 'jones'
    // })
})

//?whatever=whatever&whatever2=whatever2 is query format
app.get('/api/car', (req, res)=>{
    let brand = req.query.brand
    let model = req.query.model

    res.send({
        brand,
        model
    })
})

//if we obtain a POST request
app.post('/ifpost', jsonParser, (req, res)=>{
    const firstName = req.body.firstName
    const lastName = req.body.lastName

    console.log(firstName, lastName)
    res.sendStatus(200)
})


const port = process.env.PORT || 8080
app.listen(port)
