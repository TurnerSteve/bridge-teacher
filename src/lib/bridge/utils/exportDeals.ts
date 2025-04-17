import { Direction, Suit } from "@/lib/enums";
import { StoredDeal } from "@/lib/types";
import getTrayInfo, { LookupEntry } from "./getTrayInfo";

export const exportDeals = {
  toJSON: (deals: StoredDeal[]) => {
    // Export as JSON
    return JSON.stringify(deals, null, 2);
  },

  toCSV: (deals: StoredDeal[]) => {
    const headers = [
      "dealId",
      "algo",
      "description",
      "North",
      "",
      "",
      "",
      "East",
      "",
      "",
      "",
      "South",
      "",
      "",
      "",
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

  toBRI: (deals: StoredDeal[]) => { // Basic - space separated without Board no.
    return deals
      .map((deal) => `${formatDeal(deal, " ")}`)
      .join("\n");
  },

  toDGE: (deals: StoredDeal[]) => { // Board no. and "space" separated 
    return deals
      .map((deal) => `${deal.dealId} ${formatDeal(deal, " ")}`)
      .join("\n");
  },

  toDUP: (deals: StoredDeal[]) => { // Board no. and "Pipe" separated 
    return deals
      .map((deal) => `${deal.dealId} ${formatDeal(deal, " ")}`)
      .join("\n");
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
    // Export as PBN
    return deals
      .map((deal) => {
        const hands = Object.entries(deal.deal)
          .map(
            ([direction, hand]) =>
              `${direction}` + // Should not be here
              Object.entries(hand)
                .map(([suit, ranks]) => `${suit}(${ranks.join("")})`)
                .join(" ")
          )
          .join("; ");
        return `[Deal "${deal.dealId}"]\n[Algo "${deal.algo}"]\n[Description "${deal.description}"]\n${hands}`;
      })
      .join("\n\n");
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

/**
 * Formats a single deal into a string with Dealer and Vulnerability at the front.
 * @param deal The single deal to format.
 * @param separator The separator to use between fields (" " or "|").
 * @returns A formatted string for the deal.
 */

const formatDeal = (deal: StoredDeal, separator: " " | "|"): string => {
  const entry: LookupEntry = getTrayInfo(deal.dealId); // Gets the dealer and vul
  const dealer = entry.dealer; 
  const vulnerability = entry.vulnerability; 

  // Format hands: Spades, Hearts, Diamonds, Clubs concatenated with "."
  const hands = Object.entries(deal.deal)
    .map(
      ([, hand]) =>
        Object.values(hand)
          .map((suit) => suit.join("")) // Join ranks for each suit
          .join(".") // Separate suits with "."
    )
    .join(separator); // Separate hands with the provided separator

  // Combine dealer, vulnerability, and hands into a single string
  return `${dealer}${separator}${vulnerability}${separator}${hands}`;
};
