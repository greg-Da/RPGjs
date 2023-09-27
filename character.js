class Character {
    constructor(hp, dmg, mana){
        this.hp = hp
        this.dmg = dmg
        this.mana = mana
        this.status = "playing"
    }
    
    takeDamage(dmg){
        this.hp -= dmg
        if (this.hp <= 0){
            this.status = "loser"
            console.log(`${this.name} is dead`)
        }
    }
    
    dealDamage(victim, dmg){
        if(victim.boostTurn === game.turnLeft){
            if(victim.specialAttack === "Shadow hit"){
                console.log(`${this.name} is attacking ${victim.name}. But ${victim.name} is hiding`)
            }else{
                console.log(`${this.name} is attacking ${victim.name}. He deals him ${dmg - 2} damages. ${victim.name} got ${victim.hp > 0 ? victim.hp : "0"} lifepoints left`)
            }
        }else{
            victim.takeDamage(dmg)
            console.log(`${this.name} is attacking ${victim.name}. He deals him ${dmg} damages. ${victim.name} got ${victim.hp > 0 ? victim.hp : "0"} lifepoints left`)
        }
        if(victim.hp <= 0){
            this.mana += 20
        }
    }
    
    chooseVictim(foes, dmg = this.dmg){
        let text = "Who do you want to attack? \n"
        foes.forEach((elem, index) => text = text.concat(" ", `${index} - ${elem.name} \n`))
        const victim = prompt(text)
        if (parseInt(victim) >= 0 && parseInt(victim) <= foes.length){
            this.dealDamage(foes[parseInt(victim)], dmg)
        }else{
            console.log('wrong action')
            this.chooseVictim(foes)
        }
    }
}