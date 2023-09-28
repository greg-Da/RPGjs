class Longsword extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 45){
        super(name, hp, dmg, mana);
        this.specialAttack = "Swipe"
        this.manaCost = 15
    }
    
    useSpecial(foes){
        console.log(`${this.name} use Swipe`)
        this.mana -= this.manaCost
        foes.forEach(elem => {
            this.dealDamage(elem, 3)
        });
    }
}