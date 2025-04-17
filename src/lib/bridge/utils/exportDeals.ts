import { Hand, Suit } from "@/lib/enums";
import { StoredDeal } from "@/lib/types";

export const exportDeals = {
  toJSON: (deals: StoredDeal[]) => {
    // Export as JSON
    return JSON.stringify(deals, null, 2);
  },

  toCSV: (deals: StoredDeal[]) => {
    const headers = [
      'dealId',
      'algo',
      'description',
      'North',
      'North',
      'North',
      'North',
      'East',
      'East',
      'East',
      'East',
      'South',
      'South',
      'South',
      'South',
      'West',
      'West',
      'West',
      'West',
    ];

    const rows = deals.map(deal => {
      const handsData = [
        `${Suit.Spades} ${deal.deal[Hand.North][Suit.Spades].join(' ')}`,
        `${Suit.Hearts} ${deal.deal[Hand.North][Suit.Hearts].join(' ')}`,
        `${Suit.Diamonds} ${deal.deal[Hand.North][Suit.Diamonds].join(' ')}`,
        `${Suit.Clubs} ${deal.deal[Hand.North][Suit.Clubs].join(' ')}`,
        `${Suit.Spades} ${deal.deal[Hand.East][Suit.Spades].join(' ')}`,
        `${Suit.Hearts} ${deal.deal[Hand.East][Suit.Hearts].join(' ')}`,
        `${Suit.Diamonds} ${deal.deal[Hand.East][Suit.Diamonds].join(' ')}`,
        `${Suit.Clubs} ${deal.deal[Hand.East][Suit.Clubs].join(' ')}`,
        `${Suit.Spades} ${deal.deal[Hand.South][Suit.Spades].join(' ')}`,
        `${Suit.Hearts} ${deal.deal[Hand.South][Suit.Hearts].join(' ')}`,
        `${Suit.Diamonds} ${deal.deal[Hand.South][Suit.Diamonds].join(' ')}`,
        `${Suit.Clubs} ${deal.deal[Hand.South][Suit.Clubs].join(' ')}`,
        `${Suit.Spades} ${deal.deal[Hand.West][Suit.Spades].join(' ')}`,
        `${Suit.Hearts} ${deal.deal[Hand.West][Suit.Hearts].join(' ')}`,
        `${Suit.Diamonds} ${deal.deal[Hand.West][Suit.Diamonds].join(' ')}`,
        `${Suit.Clubs} ${deal.deal[Hand.West][Suit.Clubs].join(' ')}`,
      ];
      return [
        deal.dealId,
        deal.algo,
        deal.description,
        ...handsData,
      ]
        .map(field => `"${field}"`) // Quote each field
        .join(',');
    });

    return [headers.join(','), ...rows].join('\n');
  },

  toTEXT: (deals: StoredDeal[]) => {  // Outputs suits using a suit symbol 
    // Export as readable text
    return deals
      .map(
        deal =>
          `Deal ID: ${deal.dealId}\nAlgo: ${deal.algo}\nDescription: ${deal.description}\n` +
          Object.entries(deal.deal)
            .map(
              ([direction, hand]) =>
                `${direction}:\n` +
                Object.entries(hand)
                  .map(([suit, ranks]) => `  ${suit}: ${ranks.join(' ')}`)
                  .join('\n')
            )
            .join('\n')
      )
      .join('\n\n');
  },

  toXML: (deals: StoredDeal[]) => {
    // Export as XML
    const escapeXml = (unsafe: string) =>
      unsafe.replace(/[<>&'"]/g, c => {
        switch (c) {
          case '<':
            return '&lt;';
          case '>':
            return '&gt;';
          case '&':
            return '&amp;';
          case "'":
            return '&apos;';
          case '"':
            return '&quot;';
          default:
            return c;
        }
      });

    return `<Deals>\n${deals
      .map(
        deal =>
          `  <Deal id="${deal.dealId}" algo="${escapeXml(
            deal.algo
          )}" description="${escapeXml(deal.description)}">\n` +
          Object.entries(deal.deal)
            .map(
              ([direction, hand]) =>
                `    <Hand direction="${direction}">\n` +
                Object.entries(hand)
                  .map(
                    ([suit, ranks]) =>
                      `      <Suit name="${suit}">${ranks.join(' ')}</Suit>`
                  )
                  .join('\n') +
                `\n    </Hand>`
            )
            .join('\n') +
          `\n  </Deal>`
      )
      .join('\n')}\n</Deals>`;
  },

  toPBN: (deals: StoredDeal[]) => {
    // Export as PBN
    return deals
      .map(deal => {
        const hands = Object.entries(deal.deal)
          .map(([direction, hand]) =>
            `${direction}` +  // Should not be here
            Object.entries(hand)
              .map(([suit, ranks]) => `${suit}(${ranks.join('')})`)
              .join(' ')
          )
          .join('; ');
        return `[Deal "${deal.dealId}"]\n[Algo "${deal.algo}"]\n[Description "${deal.description}"]\n${hands}`;
      })
      .join('\n\n');
  },

  toLIN: (deals: StoredDeal[]) => {
    // Export as LIN (assuming a LIN-like format)
    return deals
      .map(deal => {
        const hands = Object.entries(deal.deal)
          .map(([direction, hand]) =>
            `${direction}: ` +  // Should not be here
            Object.entries(hand)
              .map(([suit, ranks]) => `${suit}(${ranks.join('')})`)
              .join(' ')
          )
          .join('; ');
        return `Deal#${deal.dealId}|Algo:${deal.algo}|Desc:${deal.description}|Hands:${hands}`;
      })
      .join('\n');
  }
};