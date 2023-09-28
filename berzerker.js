class Berzerker extends Character {
    constructor(name, hp = 8, dmg = 4, mana = 0){
        super(name, hp, dmg, mana);
        this.specialAttack = "Rage"
        this.manaCost = 0
    }
    
    useSpecial(){
        console.log(`${this.name} use Rage`)
        this.hp -= 1
        this.dmg += 1
    }
}