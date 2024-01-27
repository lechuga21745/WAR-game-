class Card {
    constructor(suit, rank) {
        this.suit = suit;
        this.rank = rank;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const suits = ["Clubs", "Hearts", "Spades", "Diamonds"];
        const rank = [2,3,4,5,6,7,8,9,10, "J", "Q", "K", "A"];
        for (let suit of suits) {
            for (let number of rank) {
                this.cards.push(new Card(suit, number));
            }
        }
    }

    dealCard() {
        return this.cards.pop();
    }
}

const fullDeck = new Deck();
const playerOne = [];
const playerTwo = [];

for (let i = 0; i < 26; i++) {
    playerOne.push(fullDeck.dealCard());
    playerTwo.push(fullDeck.dealCard());
}

console.log(playerOne);
console.log(playerTwo);
console.log(fullDeck);


function compareCards (card1, card2) {
    const rank1 = rank.indexOf(card1.slice(0, -1));
    const rank2 = rank.indexOf(card2.slice(0, -1));
    if (number1 > number2) {
        return 'playerOne';
    } else if (number1 < number2) {
        return 'player2';
    } else {
        return 'tie';
    }
}

for (let i = 0; i < 26; i++) {
    const card1 = playerOne[i];
    const card2 = playerTwo[i];
    console.log(`Player One: ${card1} | Player 2: ${card2}`);
    const winner = compareCards(card1, card2);
    if (winner === 'playerOne') {
    console.log('Player One wins!!');
} else if (winner === 'playerTwo') {
    console.log('Player Two is the winner!!');
} else {
    console.log('It is a tie.');
}

}