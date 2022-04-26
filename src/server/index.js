const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockApi = require('./mockAPI.js')


console.log(mockApi)
// Start up an instance of app
const app = express()

// Cors allows the browser and server to communicate without any security interruptions
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))


console.log(__dirname)

// API
const apiKey = process.env.API_KEY
const meaningUrl = 'https://api.meaningcloud.com/sentiment-2.1?'
console.log(`Your API Key is ${process.env.API_KEY}`);



app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockApi)
})

// POST Route
let userInputData = [] 
app.post('/api', async function(req, res) {
    userInputData = req.body.url;
    const apiURL = `${meaningUrl}key=${apiKey}&url=${userInputData}&lang=en`
    const response = await fetch(apiURL)
    const dataPacket = await response.json()
    console.log("This is data from meaning cloud",dataPacket)
    res.send(dataPacket)
})

//app port number 8081
app.listen(8081, function () {
    console.log('App running on port 8081')
})