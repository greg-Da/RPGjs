class Assassin extends Character {
    constructor(hp = 6, dmg = 6, mana = 20){
        super(hp, dmg, mana);
        this.name = "Carl"
        this.specialAttack = "Shadow hit"
        this.boostTurn = -1
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Shadow hit`)
        this.mana -= 20
        this.boostTurn = game.turnLeft - 1
        
        this.chooseVictimSpecial(foes, 7)
    }
    
    takeDamage(dmg){
        this.hp -= dmg
        if (this.hp <= 0){
            this.status = "loser"
            console.log(`${this.name} is dead`)
        }
    }
    
    chooseVictimSpecial(foes, dmg = this.dmg){
        let text = "Who do you want to attack? \n"
        foes.forEach((elem, index) => text = text.concat(" ", `${index} - ${elem.name} \n`))
        const victim = prompt(text)
        if (parseInt(victim) >= 0 && parseInt(victim) <= foes.length){
            this.dealDamage(foes[parseInt(victim)], dmg)
            if(foes[parseInt(victim)].hp > 0){
                this.hp -= 7
                console.log(`${this.name} didn't kill ${foes[parseInt(victim)].name}, and suffered 7 damages of drawback`)
                this.hp <= 0 ? console.log(`${this.name} is dead`) : ''
            }
        }else{
            console.log('wrong action')
            this.chooseVictimSpecial(foes, 7)
        }
    }
}