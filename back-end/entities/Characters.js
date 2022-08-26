class Characters {
    constructor(active, name, level, healPoints, magicalPoints, madicalDefense, magicalAttack, physicalDefense, physicalAttack) {
        this.active = active
        this.name = name
        this.level = level
        this.healPoints = healPoints
        this.magicalPoints = magicalPoints
        this.madicalDefense = madicalDefense
        this.magicalAttack = magicalAttack
        this.physicalDefense = physicalDefense
        this.physicalAttack = physicalAttack
    }
}

module.exports = { Characters }