class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200){
        super(name, hp, dmg, mana);
        this.specialAttack = "Heal"
        this.manaCost = 25
    }
    
    useSpecial(){
        console.log(`${this.name} use Heal`)
        this.mana -= this.manaCost
        this.hp += 8
    }
}