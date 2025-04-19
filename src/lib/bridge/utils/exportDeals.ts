import { Char, Direction, FileType, Suit } from "@/lib/enums";
import { StoredDeal } from "@/lib/types";
import getTrayInfo, { LookupEntry } from "./getTrayInfo";
import { stringifyDeal } from "./stringifyDeal";
import { Cardinal, SuitSymbol } from "@/lib/constants";

export const exportDeals = {
  toJSON: (deals: StoredDeal[]) => {
    return deals
      .map((deal) => {
        const hands = Object.entries(deal.deal)
          .map(([direction, hand]) => `"${direction}": ${JSON.stringify(hand)}`)
          .join("\n"); // Each hand is on its own line

        return `{"dealId": ${deal.dealId}, "algo": "${deal.algo}", "description": "${deal.description}",\n${hands}\n}`;
      })
      .join("\n\n"); // Separate each deal with a blank line
  },

  toCSV: (deals: StoredDeal[]) => {
    const headers = [
      "dealId",
      "algo",
      "description",
      "North",
      ,
      ,
      ,
      "East",
      ,
      ,
      ,
      "South",
      ,
      ,
      ,
      "West",
      ,
      ,
      ,
    ];

    const rows = deals.map((deal) => {
      const handsData = [
        `${SuitSymbol[Suit.SPADES]} ${deal.deal[Direction.NORTH][
          Suit.SPADES
        ].join(" ")}`,
        `${SuitSymbol[Suit.HEARTS]} ${deal.deal[Direction.NORTH][
          Suit.HEARTS
        ].join(" ")}`,
        `${SuitSymbol[Suit.DIAMONDS]} ${deal.deal[Direction.NORTH][
          Suit.DIAMONDS
        ].join(" ")}`,
        `${SuitSymbol[Suit.CLUBS]} ${deal.deal[Direction.NORTH][
          Suit.CLUBS
        ].join(" ")}`,
        `${SuitSymbol[Suit.SPADES]} ${deal.deal[Direction.EAST][
          Suit.SPADES
        ].join(" ")}`,
        `${SuitSymbol[Suit.HEARTS]} ${deal.deal[Direction.EAST][
          Suit.HEARTS
        ].join(" ")}`,
        `${SuitSymbol[Suit.DIAMONDS]} ${deal.deal[Direction.EAST][
          Suit.DIAMONDS
        ].join(" ")}`,
        `${SuitSymbol[Suit.CLUBS]} ${deal.deal[Direction.EAST][Suit.CLUBS].join(
          " "
        )}`,
        `${SuitSymbol[Suit.SPADES]} ${deal.deal[Direction.SOUTH][
          Suit.SPADES
        ].join(" ")}`,
        `${SuitSymbol[Suit.HEARTS]} ${deal.deal[Direction.SOUTH][
          Suit.HEARTS
        ].join(" ")}`,
        `${SuitSymbol[Suit.DIAMONDS]} ${deal.deal[Direction.SOUTH][
          Suit.DIAMONDS
        ].join(" ")}`,
        `${SuitSymbol[Suit.CLUBS]} ${deal.deal[Direction.SOUTH][
          Suit.CLUBS
        ].join(" ")}`,
        `${SuitSymbol[Suit.SPADES]} ${deal.deal[Direction.WEST][
          Suit.SPADES
        ].join(" ")}`,
        `${SuitSymbol[Suit.HEARTS]} ${deal.deal[Direction.WEST][
          Suit.HEARTS
        ].join(" ")}`,
        `${SuitSymbol[Suit.DIAMONDS]} ${deal.deal[Direction.WEST][
          Suit.DIAMONDS
        ].join(" ")}`,
        `${SuitSymbol[Suit.CLUBS]} ${deal.deal[Direction.WEST][Suit.CLUBS].join(
          " "
        )}`,
      ];
      return [deal.dealId, deal.algo, deal.description, ...handsData]
        .map((field) => `"${field}"`) // Quote each field
        .join(",");
    });

    return [headers.join(","), ...rows].join("\n");
  },

  toTEXT: (deals: StoredDeal[]) => {
    // Outputs suits using a suit symbol
    // Export as readable text
    return deals
      .map(
        (deal) =>
          `Deal ID: ${deal.dealId}\nAlgo: ${deal.algo}\nDescription: ${deal.description}\n` +
          Object.entries(deal.deal)
            .map(
              ([direction, hand]) =>
                `${direction}:\n` +
                Object.entries(hand)
                  .map(
                    ([suit, ranks]) =>
                      `  ${
                        SuitSymbol[suit as keyof typeof SuitSymbol]
                      }: ${ranks.join(" ")}`
                  )
                  .join("\n")
            )
            .join("\n")
      )
      .join("\n\n");
  },

  toBRI: (deals: StoredDeal[]) => {
    return deals.map((deal) => formatBRIDeal(deal)).join("\n");
  },

  toDGE: (deals: StoredDeal[]) => {
    return deals.map((deal) => formatDGEDeal(deal)).join("\n");
  },

  toDUP: (deals: StoredDeal[]) => {
    return deals.map((deal) => formatDUPDeal(deal)).join("\n");
  },

  toXML: (deals: StoredDeal[]) => {
    // Export as XML
    const escapeXml = (unsafe: string) =>
      unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case "&":
            return "&amp;";
          case "'":
            return "&apos;";
          case '"':
            return "&quot;";
          default:
            return c;
        }
      });

    return `<Deals>\n${deals
      .map(
        (deal) =>
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
                      `      <Suit name="${suit}">${ranks.join(" ")}</Suit>`
                  )
                  .join("\n") +
                `\n    </Hand>`
            )
            .join("\n") +
          `\n  </Deal>`
      )
      .join("\n")}\n</Deals>`;
  },

  toPBN: (deals: StoredDeal[]) => {
    return deals
      .map((deal) => {
        const entry: LookupEntry = getTrayInfo(deal.dealId); // Gets the dealer and vul
        const separators = {
          cardSeparator: Char.NONE,
          suitSeparator: Char.DOT,
          handSeparator: Char.SPACE,
        };
        const dealString = stringifyDeal(deal.deal, separators, FileType.PBN);

        const dealer = Cardinal[entry.dealer as keyof typeof Cardinal];
        const vul = entry.vulnerability;
        const board = deal.dealId;

        // Metadata for the deal (customize as needed)
        const metadata = [
          `[Event "Sample Event"]`,
          `[Site "Sample Site"]`,
          `[Date "2025.04.17"]`,
          `[Board "${board}"]`,
          `[Dealer "${dealer}"]`, // Assign dealer (modify if dynamically set)
          `[Vulnerable "${vul}"]`, // Assign vulnerability (modify if dynamically set)
          `[Deal "${dealer}:${dealString}"]`,
          `[Scoring "IMP"]`,
          `[Declarer ""]`,
          `[Contract ""]`,
          `[Result ""]`,
        ];

        return metadata.join("\n") + "\n";
      })
      .join("\n"); // Separate deals with a blank line
  },

  toLIN: (deals: StoredDeal[]) => {
    return deals.map((deal) => {
      // Export as LIN (assuming a LIN-like format)
      const entry: LookupEntry = getTrayInfo(deal.dealId); // Gets the dealer and vul
      const vul: string = getLINvul(entry.vulnerability); // o,n,e,b
      const dealer: number = getLINdealer(entry.dealer); // 0,1,2,3
      const board: number = deal.dealId;

      const separators = {
        cardSeparator: Char.NONE,
        suitSeparator: Char.NONE,
        handSeparator: Char.COMMA,
      };

      const dealString = stringifyDeal(deal.deal, separators, FileType.PBN);

      const players = "Northwind;Western;Easteregg;outhron";

      // DEaler has format |1S...H...D...C |

      // Metadata for the deal (customize as needed)
      const metadata = [
        `vg|Generated by Steve|`, // For ecxample
        `st|Bridge quarter |`, // Status or addditional content (optional)
        `ah|Board ${board}|`, // Board Annotation
        `md|${dealer}${dealString}`, // The format is md|<dealer><card distribution>|
        `pn|${players}|`,
        `sv|${vul} |`,
        `mb||`, // Bid in the auction
        `rh||`, // Auction header
        `pg||`, // End of auction or placeholder
        `pc||`, // Played Card
        `mc||`, //Contract result
        `mn||`, // Match Number
      ];
      return metadata.join("\n") + "\n";
    })
    .join("\n"); // Separate deals with a blank line
  },
};

// DUP has no board number - a raw deal
// DUP ... Dealer Vul + PIPE separated hands
export function formatDUPDeal(storedDeal: StoredDeal): string {
  const separators = {
    cardSeparator: Char.NONE,
    suitSeparator: Char.DOT,
    handSeparator: Char.PIPE,
  };

  const { dealId, deal } = storedDeal;
  const entry: LookupEntry = getTrayInfo(dealId); // Gets the dealer and vul
  const dealer = Cardinal[entry.dealer as keyof typeof Cardinal];

  // Start with dealId, algo, and description
  const parts: string[] = [];
  parts.push(dealer);
  parts.push(entry.vulnerability);
  parts.push(stringifyDeal(deal, separators));

  // Join all parts with the provided delimiter
  return parts.join("|");
}

// DGE and BRI both have a board number
// DGE ... Board Dealer Vul + SPACE separated hands
export function formatDGEDeal(storedDeal: StoredDeal): string {
  const separators = {
    cardSeparator: Char.NONE,
    suitSeparator: Char.DOT,
    handSeparator: Char.SPACE,
  };

  const { dealId, deal } = storedDeal;
  const entry: LookupEntry = getTrayInfo(dealId); // Gets the dealer and vul
  const dealer = Cardinal[entry.dealer as keyof typeof Cardinal];

  // Start with dealId, algo, and description
  const parts: string[] = [dealId.toString()];
  parts.push(dealer);
  parts.push(entry.vulnerability);
  parts.push(stringifyDeal(deal, separators));

  // Join all parts with the provided delimiter
  return parts.join(" ");
}

// BRI ... Board Dealer Vul + PIPE separated hands
export function formatBRIDeal(storedDeal: StoredDeal): string {
  const separators = {
    cardSeparator: Char.NONE,
    suitSeparator: Char.DOT,
    handSeparator: Char.PIPE,
  };

  const { dealId, deal } = storedDeal;
  const entry: LookupEntry = getTrayInfo(dealId); // Gets the dealer and vul
  const dealer = Cardinal[entry.dealer as keyof typeof Cardinal];

  // Start with dealId, algo, and description
  const parts: string[] = [dealId.toString()];
  parts.push(dealer);
  parts.push(entry.vulnerability);
  parts.push(stringifyDeal(deal, separators));

  // Join all parts with the provided delimiter
  return parts.join("|");
}

function getLINvul(vul: string): string {
  switch (vul) {
    case "None":
      return "o";
    case "NS":
      return "n";
    case "EW":
      return "e";
    case "ALL":
      return "b";
    default:
      return "b";

      break;
  }
}

function getLINdealer(vul: Direction): number {
  switch (vul) {
    case Direction.NORTH:
      return 1;
    case Direction.EAST:
      return 2;
    case Direction.SOUTH:
      return 3;
    case Direction.WEST:
      return 4;
    default:
      return 0;

      break;
  }
}
