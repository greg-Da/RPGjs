class Fighter extends Character {
    constructor(hp = 12, dmg = 4, mana = 40){
        super(hp, dmg, mana);
        this.name = "Grace"
        this.specialAttack = "Dark Vision"
        this.boostTurn = -1
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Dark Vision`)
        this.mana -= 20
        this.boostTurn = game.turnLeft - 1
        this.chooseVictim(foes, 5)
    }
    
    takeDamage(dmg){
        if (this.boostTurn === game.turnLeft){
            this.hp -= dmg -2
            console.log(`${this.name} is protecting himself for 2 damages`)
        }else{
            this.hp -= dmg
        }
        if (this.hp <= 0){
            this.status = "loser"
            console.log(`${this.name} is dead`)
        }
    }
}