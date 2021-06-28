new Vue({
  el: '#app',
  data: {
    show: true,
    history: [],
    viewMessage: false,
    winnerMessage: '',

    lifePlayer: 100,
    damagePlayer: 0,
    messagePlayer: '',

    lifeMonster: 100,
    damageMonster: 0,
    messageMonster: ''
  },
  methods: {
    clearHistory(){
      this.history = []
    },
    startNewGame(){
      this.clearHistory()

      this.lifePlayer = 100
      this.lifeMonster = 100

      this.viewMessage = false
      this.show = !this.show
    },
    resetLife(){
      this.lifePlayer = 100
      this.lifeMonster = 100
    },
    quit(){
      this.show = !this.show
      this.resetLife()
    },
    attack(){
      this.playerAttack()
      this.monsterAttack()
    },
    specialAttack(){
      let bonus = 3
      this.playerAttack(bonus)
      this.monsterAttack()
    },
    heal(){
      let lifeHeal = this.getRandomInt(1,12)
      this.lifePlayer = this.lifePlayer > 0 ? this.lifePlayer += lifeHeal : this.lifePlayer

      let healMessage = 'Player heal with ' + lifeHeal

      this.monsterAttack()
      this.history.push(healMessage)
      console.log(this.lifeMonster)
    },
    playerAttack(bonus){
      this.damagePlayer = bonus > 1 ? this.getRandomInt(5, 9) * bonus : this.getRandomInt(5, 9)
      this.lifeMonster -= this.damagePlayer
      this.messagePlayer = `player hit monster whit ${this.damagePlayer}`

      this.history.push(this.messagePlayer)
      
      if(this.lifeMonster <= 0){
        this.lifeMonster = 0
        this.winner()
        return
      }
    },
    monsterAttack(){
      this.damageMonster = this.getRandomInt(8, 12)
      this.lifePlayer -= this.damageMonster
      this.messageMonster = `monster hit player whit ${this.damageMonster}`

      this.history.push(this.messageMonster)

      if(this.lifePlayer <= 0){
        this.lifePlayer = 0
        this.winner()
        return
      }
    },
    winner(){
      if(this.lifeMonster == 0){
        this.viewMessage = true
        this.winnerMessage = 'You win!'
        return
      }else if(this.lifePlayer == 0){
        this.viewMessage = true
        this.winnerMessage = 'You lose!'
        return
      }
    },
    getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
})