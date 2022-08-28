const cors = require('cors')
const express = require('express')
const app = express()

const { Hero } = require('./entities/Hero.js')
const { Knight } = require('./entities/Knight.js')
const { Wizard } = require('./entities/Wizard.js')

const hero = new Hero(false, "hero", 15, 2, 2, 3, 3, 4)
const knight = new Knight(false, "knight", 19, 0, 0, 0, 4, 5)
const wizard = new Wizard(false, "wizard", 24, 3, 3, 4, 1, 1)
// const boss = new Boss(true, "boss", 18, 60, 4, 2, 4, 3, 5)

app.use(cors())

app.listen('3000', function () {
    console.log('server is running')
})

app.get('/combat/:id', function (req, res) {
    const { id } = req.params

    const attack = id => {
        if (id == 1) {
            return hero.usePhysicalAttack()
        }
        else if (id == 2) {
            return knight.usePhysicalAttack()
        }
        else if (id == 3) {
            return wizard.usePhysicalAttack()
        }
    }
    res.send(attack(id))
})

app.get('/choice/:id', function (req, res) {
    const { id } = req.params

    if (id == 0) res.send(hero)
    else if (id == 1) res.send(knight)
    else if (id == 2) res.send(wizard)
})