import { Suit } from "@/types/cards";

export class SuitHelper {
    private static readonly suitDetails = {
        [Suit.SPADES]: {
            letter: 'S',
            string: 'Spades',
            icon: '🂡', // Example icon, replace with your preferred representation
            image: '/path/to/spades.png', // Path to image
            symbol: '♠'
        },
        [Suit.HEARTS]: {
            letter: 'H',
            string: 'Hearts',
            icon: '🂱',
            image: '/path/to/hearts.png',
            symbol: '♥'
        },
        [Suit.DIAMONDS]: {
            letter: 'D',
            string: 'Diamonds',
            icon: '🃁',
            image: '/path/to/diamonds.png',
            symbol: '♦'
        },
        [Suit.CLUBS]: {
            letter: 'C',
            string: 'Clubs',
            icon: '🃑',
            image: '/path/to/clubs.png',
            symbol: '♣'
        }
    };

    static getLetter(suit: Suit): string {
        return this.suitDetails[suit].letter;
    }

    static getString(suit: Suit): string {
        return this.suitDetails[suit].string;
    }

    static getIcon(suit: Suit): string {
        return this.suitDetails[suit].icon;
    }

    static getImage(suit: Suit): string {
        return `<img src="${this.suitDetails[suit].image}" alt="${this.suitDetails[suit].string}" />`;
    }

    static getSymbol(suit: Suit): string {
        return this.suitDetails[suit].symbol;
    }
}

// Example usage
const suit: Suit = Suit.SPADES;

console.log(`${SuitHelper.getLetter(suit)} ${SuitHelper.getString(suit)} ${SuitHelper.getIcon(suit)} ${SuitHelper.getImage(suit)} ${SuitHelper.getSymbol(suit)}`);
