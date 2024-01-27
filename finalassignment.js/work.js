/* describe the different elements of a card */
class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
    }
}
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs'];

// Create a deck of cards
let deck = [];
for (let suit of suits) {
  for (let rank of ranks) {
    deck.push(rank + suit);
  }
}

/* I found a shuffle algothrim online 
it is called Fisher-Yates algorithm 
(Not sure if this is necessary) */
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

// Shuffle the deck
shuffleDeck(deck);
console.log(deck);        

// Deal cards to players
function dealCard() {
    return deck.pop();
  }
  
  
  let player1 = [];
  let player2 = [];
  
  
  for (let i = 0; i < 26; i++) {
    player1.push(dealCard());
    player2.push(dealCard());
  }
  
  console.log(player1);
  console.log(player2);    


  /*figure out the winner by comparing */
function compareCards(card1, card2) {
    const rank1 = ranks.indexOf(card1.slice(0, -1));
    const rank2 = ranks.indexOf(card2.slice(0, -1));
    if (rank1 > rank2) {
      return 'player1';
    } else if (rank1 < rank2) {
      return 'player2';
    } else {
      return 'tie';
    }
  }
  
  /*deal cards */
  for (let i = 0; i < 26; i++) {
    const card1 = player1[i];
    const card2 = player2[i];
    console.log(`Player 1: ${card1} | Player 2: ${card2}`);
    const winner = compareCards(card1, card2);
    if (winner === 'player1') {
      console.log('Player 1 wins!');
    } else if (winner === 'player2') {
      console.log('Player 2 wins!');
    } else {
      console.log('It\'s a tie!');
    }
  }