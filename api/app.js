const express = require('express')
const app = express()
const port = 3000

// var TweenLite = require("gsap")
// import Tweenlite from 'gsap';

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render("home")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})