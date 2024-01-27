// Define the Card class
class Card {
    constructor(suit, value) {
      this.suit = suit;
      this.value = value;
    }
  
    toString() {
      return `${this.value} of ${this.suit}`;
    }
  }
  
  // Define the Deck class
  class Deck {
    constructor() {
      this.cards = [];
      this.createDeck();
      this.shuffle();
    }
  
    createDeck() {
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  
      for (const suit of suits) {
        for (const value of values) {
          this.cards.push(new Card(suit, value));
        }
      }
    }
  /* shuffle using Fisher-Yates algorithm (found online) */

    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal() {
      return this.cards.pop();
    }
  }
  
  // Define the WarGame class
  class WarGame {
    constructor() {
      this.deck = new Deck();
      this.player1Deck = [];
      this.player2Deck = [];
      this.player1Points = 0;
      this.player2Points = 0;
    }
  /* deals carsd */
    dealCards() {
      for (let i = 0; i < 26; i++) {
        this.player1Deck.push(this.deck.deal());
        this.player2Deck.push(this.deck.deal());
      }
    }
  /* the pop mehtod is used so it can remove an element and there wont be repeats. */
    playRound() {
      const player1Card = this.player1Deck.pop();
      const player2Card = this.player2Deck.pop();
  
      console.log(`Player 1 card: ${player1Card.toString()}`);
      console.log(`Player 2 card: ${player2Card.toString()}`);
  /* this is where we find out who won by comparing and declares a winner */
      if (this.compareCards(player1Card, player2Card) > 0) {
        console.log('Player 1 wins the round!');
        this.player1Points++;
      } else if (this.compareCards(player1Card, player2Card) < 0) {
        console.log('Player 2 wins the round!');
        this.player2Points++;
      } else {
        console.log('It\'s a tie!');
      }
    }
  /* this is how we compare the two cards and figure out who won */
    compareCards(card1, card2) {
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      return values.indexOf(card1.value) - values.indexOf(card2.value);
    }
  /* final score board and declaration of who won */
    playGame() {
      this.dealCards();
  
      while (this.player1Deck.length > 0 && this.player2Deck.length > 0) {
        this.playRound();
      }
  
      console.log(`Game Over!\nPlayer 1 Points: ${this.player1Points}\nPlayer 2 Points: ${this.player2Points}`);
    }
  }
  
  // Example usage
  const warGame = new WarGame();
  warGame.playGame();