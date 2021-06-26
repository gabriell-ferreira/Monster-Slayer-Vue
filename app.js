new Vue({
  el: '#app',
  data: {
    show: true,
    lifePlayer: 100,
    lifeMonster: 100,
    history: [],
    damageMonster: 0,
    damagePlayer: 0,
    messagePlayer: '',
    messageMonster: '',
  },
  methods: {
    clearHistory(){
      this.history = []
    },
    startNewGame(){
      this.show = !this.show
    },
    quit(){
      this.clearHistory()
      this.show = !this.show

      this.lifePlayer = 100
      this.lifeMonster = 100
    },
    attack(){
      this.damageMonster = this.getRandomInt(8, 12)
      this.damagePlayer = this.getRandomInt(5, 9)

      this.lifeMonster -= this.damagePlayer
      this.lifePlayer -= this.damageMonster

      this.messagePlayer = `player hit monster whit ${this.damagePlayer}`
      this.messageMonster = `monster hit player whit ${this.damageMonster}`

      this.history.push(this.messagePlayer)
      this.history.push(this.messageMonster)

      if(this.lifeMonster <= 0){
        this.lifeMonster = 0
        this.winner()
        return
      }

      if(this.lifePlayer <= 0){
        this.lifePlayer = 0
        this.winner()
        return
      }
    },
    winner(){
      if(this.lifeMonster == 0){
        alert('player venceu')

        setTimeout(this.quit, 1000)
      }

      if(this.lifePlayer == 0){
        alert('monstro venceu')

        setTimeout(this.quit, 1000)
      }
    },
    getRandomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  }
})