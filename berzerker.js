class Berzerker extends Character {
    constructor(hp = 8, dmg = 4, mana = 0){
        super(hp, dmg, mana);
        this.name = "Draven"
        this.specialAttack = "Rage"
    }
    
    useSpecial(){
        console.log(`${this.name} use Rage`)
        this.hp -= 1
        this.dmg += 1
    }
}