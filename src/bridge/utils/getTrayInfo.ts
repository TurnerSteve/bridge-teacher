import { Dealer, Vulnerability } from "@/bridge/types/enums";
  
  // Define the lookup table entry type
  type LookupEntry = {
    vulnerability: Vulnerability;
    dealer: Dealer;
  };
  
  // Create the lookup table
  const lookupTable: LookupEntry[] = [
    { vulnerability: Vulnerability.None, dealer: Dealer.North }, // Board 1
    { vulnerability: Vulnerability.NS, dealer: Dealer.East },    // Board 2
    { vulnerability: Vulnerability.EW, dealer: Dealer.South },   // Board 3
    { vulnerability: Vulnerability.Both, dealer: Dealer.West },  // Board 4
    { vulnerability: Vulnerability.NS, dealer: Dealer.North }, // Board 5
    { vulnerability: Vulnerability.EW, dealer: Dealer.East },    // Board 6
    { vulnerability: Vulnerability.Both, dealer: Dealer.South },   // Board 7
    { vulnerability: Vulnerability.None, dealer: Dealer.West },  // Board 8
    { vulnerability: Vulnerability.EW, dealer: Dealer.North }, // Board 9
    { vulnerability: Vulnerability.Both, dealer: Dealer.East },    // Board 10
    { vulnerability: Vulnerability.None, dealer: Dealer.South },   // Board 11
    { vulnerability: Vulnerability.NS, dealer: Dealer.West },  // Board 12
    { vulnerability: Vulnerability.Both, dealer: Dealer.North }, // Board 13
    { vulnerability: Vulnerability.None, dealer: Dealer.East },    // Board 14
    { vulnerability: Vulnerability.NS, dealer: Dealer.South },   // Board 15
    { vulnerability: Vulnerability.EW, dealer: Dealer.West },  // Board 16
  ];
  
  // Function to get the information for a given board index
  function getTrayInfo(boardNumber: number): LookupEntry {
    // Ensure the index is valid (1 to 16)
 
    
    if (boardNumber < 1 ) {
      if (boardNumber != 0 ) 
        throw new RangeError (`Cannot have board number [${boardNumber}]. Must be between 1 and 16.`);
      console.log(`Board [${boardNumber}] does not have an associated Vul and Dealer`)
    }
    
    // Return the corresponding entry (adjust for 0-based array indexing)
    return lookupTable[(boardNumber - 1) % 16];
  }

  export default getTrayInfo
  export type { LookupEntry }
  
