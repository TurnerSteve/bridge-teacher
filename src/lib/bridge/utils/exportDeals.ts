import { Direction, Suit } from "@/lib/enums";
import { StoredDeal } from "@/lib/types";
import getTrayInfo, { LookupEntry } from "./getTrayInfo";
import { stringifyDeal } from "./stringifyDeal";

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
        `${Suit.Spades} ${deal.deal[Direction.North][Suit.Spades].join(" ")}`,
        `${Suit.Hearts} ${deal.deal[Direction.North][Suit.Hearts].join(" ")}`,
        `${Suit.Diamonds} ${deal.deal[Direction.North][Suit.Diamonds].join(
          " "
        )}`,
        `${Suit.Clubs} ${deal.deal[Direction.North][Suit.Clubs].join(" ")}`,
        `${Suit.Spades} ${deal.deal[Direction.East][Suit.Spades].join(" ")}`,
        `${Suit.Hearts} ${deal.deal[Direction.East][Suit.Hearts].join(" ")}`,
        `${Suit.Diamonds} ${deal.deal[Direction.East][Suit.Diamonds].join(
          " "
        )}`,
        `${Suit.Clubs} ${deal.deal[Direction.East][Suit.Clubs].join(" ")}`,
        `${Suit.Spades} ${deal.deal[Direction.South][Suit.Spades].join(" ")}`,
        `${Suit.Hearts} ${deal.deal[Direction.South][Suit.Hearts].join(" ")}`,
        `${Suit.Diamonds} ${deal.deal[Direction.South][Suit.Diamonds].join(
          " "
        )}`,
        `${Suit.Clubs} ${deal.deal[Direction.South][Suit.Clubs].join(" ")}`,
        `${Suit.Spades} ${deal.deal[Direction.West][Suit.Spades].join(" ")}`,
        `${Suit.Hearts} ${deal.deal[Direction.West][Suit.Hearts].join(" ")}`,
        `${Suit.Diamonds} ${deal.deal[Direction.West][Suit.Diamonds].join(
          " "
        )}`,
        `${Suit.Clubs} ${deal.deal[Direction.West][Suit.Clubs].join(" ")}`,
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
                  .map(([suit, ranks]) => `  ${suit}: ${ranks.join(" ")}`)
                  .join("\n")
            )
            .join("\n")
      )
      .join("\n\n");
  },

  toBRI: (deals: StoredDeal[]) => {
    return  deals.map((deal) => formatBRIDeal(deal)).join('\n')
  },

  toDGE: (deals: StoredDeal[]) => {
    return  deals.map((deal) => formatDGEDeal(deal)).join('\n')
  },

  toDUP: (deals: StoredDeal[]) => {
    return  deals.map((deal) => formatDUPDeal(deal)).join('\n')
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
      .map(deal => {
        const entry: LookupEntry = getTrayInfo(deal.dealId); // Gets the dealer and vul
        const separators = {cardSeparator: '', suitSeparator: '.', handSeparator: ' '};
        const dealString = stringifyDeal(deal.deal, separators, "PBN");

        // Metadata for the deal (customize as needed)
        const metadata = [
          `[Event "Sample Event"]`,
          `[Site "Sample Site"]`,
          `[Date "2025.04.17"]`,
          `[Board "${deal.dealId}"]`,
          `[Dealer ${entry.dealer}]`, // Assign dealer (modify if dynamically set)
          `[Vulnerable ${entry.vulnerability}]`, // Assign vulnerability (modify if dynamically set)
          `[Deal "${entry.dealer}:${dealString}"]`,
          `[Scoring "IMP"]`,
          `[Declarer ""]`,
          `[Contract ""]`,
          `[Result ""]`
        ];

        return metadata.join('\n') + '\n';
      })
      .join('\n'); // Separate deals with a blank line
  },

  toLIN: (deals: StoredDeal[]) => {
    // Export as LIN (assuming a LIN-like format)
    return deals
      .map((deal) => {
        const hands = Object.entries(deal.deal)
          .map(
            ([direction, hand]) =>
              `${direction}: ` + // Should not be here
              Object.entries(hand)
                .map(([suit, ranks]) => `${suit}(${ranks.join("")})`)
                .join(" ")
          )
          .join("; ");
        return `Deal#${deal.dealId}|Algo:${deal.algo}|Desc:${deal.description}|Hands:${hands}`;
      })
      .join("\n");
  },

};


// DUP has no board number - a raw deal
// DUP ... Dealer Vul + PIPE separated hands
export function formatDUPDeal(storedDeal: StoredDeal) : string {

  const separators = {cardSeparator: '', suitSeparator: '.', handSeparator: '|'};

  const { dealId, deal} = storedDeal;
  const entry: LookupEntry = getTrayInfo(dealId); // Gets the dealer and vul

  // Start with dealId, algo, and description
  const parts: string[] = [];
  parts.push(entry.dealer);
  parts.push(entry.vulnerability);
  parts.push(stringifyDeal(deal, separators));

  // Join all parts with the provided delimiter
  return parts.join('|');
}

// DGE and BRI both have a board number
// DGE ... Board Dealer Vul + SPACE separated hands
export function formatDGEDeal(storedDeal: StoredDeal) : string {

  const separators = {cardSeparator: '', suitSeparator: '.', handSeparator: ' '};

  const { dealId, deal} = storedDeal;
  const entry: LookupEntry = getTrayInfo(dealId); // Gets the dealer and vul

  // Start with dealId, algo, and description
  const parts: string[] = [dealId.toString()];
  parts.push(entry.dealer);
  parts.push(entry.vulnerability);
  parts.push(stringifyDeal(deal, separators));

  // Join all parts with the provided delimiter
  return parts.join(' ');
}

// BRI ... Board Dealer Vul + PIPE separated hands
export function formatBRIDeal(storedDeal: StoredDeal) : string {

  const separators = {cardSeparator: '', suitSeparator: '.', handSeparator: '|'};

  const { dealId, deal} = storedDeal;
  const entry: LookupEntry = getTrayInfo(dealId); // Gets the dealer and vul

  // Start with dealId, algo, and description
  const parts: string[] = [dealId.toString()];
  parts.push(entry.dealer);
  parts.push(entry.vulnerability);
  parts.push(stringifyDeal(deal, separators));

  // Join all parts with the provided delimiter
  return parts.join('|');
}