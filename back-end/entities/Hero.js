const { Characters } = require('./Characters')

class Hero extends Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
    }
    UsePhysicalAttack() {
        if (this.healPoints < 7)
            return this.physicalAttack + 1
        else
            return this.physicalAttack
    }
}

module.exports = { Hero }