class Game {
    constructor(turnLeft = 10){
        this.turnLeft = turnLeft
        this.players = []
        
    }
    
    startGame(){
        const type = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, Longsword]
        let name = ["Grace", "Ulder", "Moana", "Draven", "Carl", "Greg", "Jin", "Ally", "Jim", "Dan", "Uldrick", "John", "Val", "Axel"]

        for (let index = 0; index < 5; index++) {
            let randName = name[Math.floor(Math.random() * type.length)]
            this.players.push(new type[Math.floor(Math.random() * type.length)](randName))
            
            name.splice(name.indexOf(randName), 1)
        }

        this.alivePLayers = this.players
        this.startTurn()
    }
    
    startTurn(){
        console.log(`It's turn ${this.turnLeft}`)
        const shuffled = this.shuffle()
        shuffled.forEach(function(elem){
            if (elem.hp > 0){
                console.log(`It's time for ${elem.name} to play`)
                while(true){
                    let input = prompt("What do you want to do? \n 0 - Attack \n 1 - Special Attack")
                    if (input === "0"){
                        elem.chooseVictim(shuffled.filter(e => e !== elem && e.hp > 0).sort())
                        break
                    }else if(input === "1"){
                        if (elem.specialAttack === "Heal" || elem.specialAttack === "Rage"){
                            elem.useSpecial()
                        }else{
                            elem.useSpecial(shuffled.filter(e => e !== elem && e.hp > 0).sort())
                        }
                        break
                    }else{
                        console.log('wrong action')
                    }
                }
            }
        })
        this.alivePLayers = this.players.filter(e => e.hp > 0) 
        this.alivePLayers.forEach(elem => console.log(`${elem.name} is still alive`))
        this.skipTurn()
    }
    
    skipTurn(){
        this.turnLeft--
        if (this.turnLeft === 0){
            this.players.forEach(elem => elem.hp > 0 ? elem.status = "winner" : "")
            this.endGame()
        }else{
            this.players.filter(e => e.hp > 0) === 1 ? this.endGame() : this.startTurn()
        }
    }
    
    endGame(){
        this.alivePLayers.forEach(elem => console.log(`${elem.name} won`))
    }
    
    watchStats(){
        this.players.forEach((elem) => elem.hp > 0 ? console.log(`${elem.name} has ${elem.hp} HP left, ${elem.mana} mana points and deals ${elem.dmg} damages`) : `${elem.name} is dead`)
    }
    
    shuffle(){
        let arr = this.alivePLayers
        
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        return arr
    }
}

let game = new Game