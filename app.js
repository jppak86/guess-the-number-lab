const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
      while(this.prevGuesses[this.prevGuesses.length -1] !== this.secretNum) {
        this.prevGuesses.push(this.getGuess());
        this.render();
      } 
      
      
  },
  getGuess: function(){
    let guessNum = 0 
    while (isNaN(guessNum) || guessNum < this.smallestNum || guessNum > this.biggestNum){
      guessNum = parseInt(prompt(`Enter ${this.smallestNum} and ${this.biggestNum}`))
    }
    return guessNum
  },

  render: function(){
    let guessLength = this.prevGuesses.length
    if(this.prevGuesses[guessLength -1] === this.secretNum){
      alert (`Congrats! You guessed the number in ${this.prevGuesses.length}!`);
    } else if (this.prevGuesses[guessLength -1] < this.secretNum) {
      alert (`Your guess is too low previous guesses: ${this.prevGuesses.join()}`);
    } else if (this.prevGuesses[guessLength -1] > this.secretNum){
      alert (`Your guess is too high previous guesses: ${this.prevGuesses.join()}`);
    }
  },

}

game.play()



