const { Characters } = require('./Characters')

class Wizard extends Characters {
    constructor(active, name, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        super(active, name, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack)
        this.hability1 = "Cura 4 pontos de vida para o personagem escolhido (consome 3 manas)"
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