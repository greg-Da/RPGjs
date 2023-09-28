class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160){
        super(name, hp, dmg, mana);
        this.specialAttack = "Healing Lighting"
        this.manaCost = 40
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Healing Lighting`)
        this.mana -= this.manaCost
        this.hp += 5
        this.chooseVictim(foes, 4)
    }
}