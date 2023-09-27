class Monk extends Character {
    constructor(hp = 8, dmg = 2, mana = 200){
        super(hp, dmg, mana);
        this.name = "Moana"
        this.specialAttack = "Heal"
    }
    
    useSpecial(){
        console.log(`${this.name} use Heal`)
        this.mana -= 25
        this.hp += 8
    }
}