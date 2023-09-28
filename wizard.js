class Wizard extends Character {
    constructor(name, hp = 10, dmg = 2, mana = 200){
        super(name, hp, dmg, mana);
        this.specialAttack = "Fireball"
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Fireball`)
        this.mana -= 25
        this.chooseVictim(foes, 7)
    }
}