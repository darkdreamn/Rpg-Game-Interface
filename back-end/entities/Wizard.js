const { Characters } = require('./Characters')

class Wizard extends Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
    }
    usePhysicalAttack() {
        let attackReturn = {
            powerUsed: "Golpe de Cajado",
            point: this.physicalAttack
        }
        return attackReturn
    }
    useMagicalPower() {
        return this.magicalAttack
    }
    useMagicalCure() {
        this.magicalPoints
        return 4
    }
}

module.exports = { Wizard }