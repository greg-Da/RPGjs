class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160){
        super(name, hp, dmg, mana);
        this.specialAttack = "Healing Lighting"
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Healing Lighting`)
        this.mana -= 40
        this.hp += 5
        this.chooseVictim(foes, 4)
    }
}