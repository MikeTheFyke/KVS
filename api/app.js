const express = require('express')
const app = express()
const port = 3000
// const fs = require('fs');

// var TweenLite = require("gsap")
// import Tweenlite from 'gsap';

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

const KVSData = require ('./public/data/kvs.json');

app.get('/', (req, res) => {
  res.render("home")
})

// app.get('/api/data', (req, res) => {
//     fs.readFile('./data/kvs.json', (err, json) => {
//         let data = JSON.parse(json)
//         re.json(data)
//     })
// })

app.get('/data', (req, res) => {
  res.json(KVSData);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})