const { Characters } = require('./Characters')

class Hero extends Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
    }
    usePhysicalAttack() {
        if (this.healPoints < 7) {
            let attackReturn = {
                powerUsed: "Ataque de Espada +1",
                point: this.physicalAttack + 1
            }
            return attackReturn
        }
        else {
            let attackReturn = {
                powerUsed: "Ataque de Espada",
                point: this.physicalAttack
            }
            return attackReturn
        }
    }
    useMagicalPower() {
        this.magicalPoints = 0
        let power = Math.floor(Math.random() * (4 - 0) + 0)
        return this.magicalAttack + power
    }
}

module.exports = { Hero }