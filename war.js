class Card {
    constructor(suit, number) {
        this.suit = suit;
        this.number = number;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
        const rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
        
        let deck = [];
        for (let suit of suits) {
            for (let rank of ranks) {
                deck.push(rank + suit);
            }
        }
        function shuffleDeck(deck) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];

        }
        
        shuffleDeck(deck);
        console.log(deck);
        
    }
}
    
        function dealCard() {
            return deck.pop();
    }

    let playerOne= [];
    let playerTwo = [];

    for (let i = 0; i < 26; i++) {
        playerOne.push(dealCard());
        playerTwo.push(dealCard());
      }
      
      console.log(playerOne);
      console.log(playerTwo);     


      function compareCards(card1, card2) {
        const rank1 = rank.indexOf(card1.slice(0, -1));
        const rank2 = rank.indexOf(card2.slice(0, -1));
        if (rank1 > rank2) {
          return 'playerOne';
        } else if (rank1 < rank2) {
          return 'playerTwo';
        } else {
          return 'tie';
        }
      }


      for (let i = 0; i < 26; i++) {
        const card1 = playerOne[i];
        const card2 = playerTwo[i];
        console.log(`Player One: ${card1} | Player Two: ${card2}`);
        const winner = compareCards(card1, card2);
        if (winner === 'playerOne') {
          console.log('Player One wins!');
        } else if (winner === 'playerTwo') {
          console.log('Player One is the winner!');
        } else {
          console.log('It is a tie!');
        }
      }        