class Paladin extends Character {
    constructor(hp = 16, dmg = 3, mana = 160){
        super(hp, dmg, mana);
        this.name = "Ulder"
        this.specialAttack = "Healing Lighting"
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Healing Lighting`)
        this.mana -= 40
        this.hp += 5
        this.chooseVictim(foes, 4)
    }
}