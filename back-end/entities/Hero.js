const { Characters } = require('./Characters')

class Hero extends Characters {
    constructor(active, name, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
        this.hability1 = "Ataque mágico Espada da Aurora pode ganhar até +2 aleatoriamente (consome 2 manas)"
        this.hability2 = "Ataque físico ganha +1 com pontos de vida menor que 6"
        this.hability3 = "Defender com até 10 pontos de vida ganha +1 de vida"
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