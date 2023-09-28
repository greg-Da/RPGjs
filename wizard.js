class Wizard extends Character {
    constructor(name, hp = 10, dmg = 2, mana = 200){
        super(name, hp, dmg, mana);
        this.specialAttack = "Fireball"
        this.manaCost = 25
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Fireball`)
        this.mana -= this.manaCost
        this.chooseVictim(foes, 7)
    }
}