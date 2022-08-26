const cors = require('cors')
const express = require('express')
const app = express()
const { Hero } = require('./entities/Hero.js')

app.use(cors())
const hero = new Hero(false, "hero", 9, 15, 2, 2, 3, 3, 4)
hero.UsePhysicalAttack()

app.listen('3000', function () {
    console.log('server is running')
})

app.get('/', function (req, res) {
    res.send("ok")
})

