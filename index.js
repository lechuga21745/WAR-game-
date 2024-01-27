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
        const numbers = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];
    
    for (let suit of suits) {
        for (let number of numbers) 
    
    this.cards.push(new Card(suit, number));
            }
       
            function dealCard();
            return this.cards.pop();

        }
       
        }



        



const fullDeck = new Deck();
    const playerOne = [];
    const playerTwo = [];
    
    
    for (let i = 0; i < 26; i++) {
        playerOne.push(fullDeck.dealCard());

        playerTwo.push(fullDeck.dealCard());
        
        console.log(playerOne);

        console.log(playerTwo);

        console.log(fullDeck);

    }

