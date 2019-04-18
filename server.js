const fs = require('fs')
const https = require("https")
const express = require("express")

const app = express()
app.use(express.static(__dirname + '/public'))

const privateKey = fs.readFileSync('privatekey.pem').toString()
const certificate = fs.readFileSync('certificate.pem').toString()

let httpOptions = {key: privateKey, cert: certificate}
https.createServer(httpOptions, app).listen(8000, () => {
    console.log(">> Serving on " + 8000)
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})