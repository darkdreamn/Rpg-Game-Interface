const { Characters } = require('./Characters')

class Hero extends Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
    }
    UsePhysicalAttack() {
        console.log("ataque feito")


        // if (this.healPoints < 7) {

        // }
    }
}

module.exports = { Hero }