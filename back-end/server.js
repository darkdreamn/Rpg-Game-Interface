const cors = require('cors')
const express = require('express')
const app = express()
const { Hero } = require('./entities/Hero.js')

app.use(cors())
const hero = new Hero(false, "hero", 9, 15, 2, 2, 3, 3, 4)


app.listen('3000', function () {
    console.log('server is running')
})

app.get('/combat/:id', function (req, res) {
    const { id } = req.params

    const attack = id => {
        if (id == 1) {
            return hero.UsePhysicalAttack()
        }
    }

    res.send(String(attack(id)))
})

