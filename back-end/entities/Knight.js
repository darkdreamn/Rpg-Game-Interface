const { Characters } = require('./Characters')

class Knight extends Characters {
    constructor(active, name, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
        this.hability1 = "Caso leve um dano que zere os pontos de vida, desfere um contra ataque físico +2"
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