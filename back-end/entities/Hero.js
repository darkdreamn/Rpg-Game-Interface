const { Characters } = require('./Characters')

class Hero extends Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
    }
    usePhysicalAttack() {
        if (this.healPoints < 7)
            return this.physicalAttack + 1
        else
            return this.physicalAttack
    }
    useMagicalPower() {
        this.magicalPoints = 0
        let power = Math.floor(Math.random() * (4 - 0) + 0)
        return this.magicalAttack + power
    }
}

module.exports = { Hero }