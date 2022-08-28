const { Characters } = require('./Characters')

class Knight extends Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
    }
    usePhysicalAttack() {
        let attackReturn = {
            powerUsed: "Ataque de Lança",
            point: this.physicalAttack
        }
        return attackReturn
    }
    useSpecialAttack() {
        return this.physicalAttack + 2
    }
    useMagicalPower() {
        return this.magicalAttack
    }
}

module.exports = { Knight }