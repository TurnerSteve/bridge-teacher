export class Suited {
    private constructor(
        public readonly name: string,
        private readonly singleLetter: string,
        public readonly symbol: string,
        public readonly icon: string
    ) {}

    static readonly SPADES = new Suited('Spades', 'S', '♠', '🂡'); // Example icon for Spades
    static readonly HEARTS = new Suited('Hearts', 'H', '♥', '🂱'); // Example icon for Hearts
    static readonly DIAMONDS = new Suited('Diamonds', 'D', '♦', '🃁'); // Example icon for Diamonds
    static readonly CLUBS = new Suited('Clubs', 'C', '♣', '🃑'); // Example icon for Clubs

    static values(): Suited[] {
        return [Suited.SPADES, Suited.HEARTS, Suited.DIAMONDS, Suited.CLUBS];
    }

    toString(): string {
        return this.name;
    }

    toSingleLetter(): string {
        return this.singleLetter;
    }

    toSymbol(): string {
        return this.symbol;
    }

    toIcon(): string {
        return this.icon;
    }

    toImage(): string {
        // Assuming you want to return an HTML <img> tag or similar
        return `<img alt="${this.name}" src="/path/to/${this.name.toLowerCase()}.png" />`;
    }
}

// Example usage
const suits = Suited.values();
suits.forEach(suit => {
    console.log(suit.toString()); // Full name
    console.log(suit.toSingleLetter()); // Single letter
    console.log(suit.toSymbol()); // Unicode symbol
    console.log(suit.toIcon()); // Icon representation
    console.log(suit.toImage()); // HTML image tag
});


