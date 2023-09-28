class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200){
        super(name, hp, dmg, mana);
        this.specialAttack = "Heal"
    }
    
    useSpecial(){
        console.log(`${this.name} use Heal`)
        this.mana -= 25
        this.hp += 8
    }
}