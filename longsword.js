class Longsword extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 45){
        super(name, hp, dmg, mana);
        this.specialAttack = "Swipe"
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Swipe`)
        this.mana -= 15
        foes.forEach(element => {
            this.dealDamage(elem, 3)
        });
    }
}