To view the file, you can use the following command in your termi# Portable Bridge Notation (PBN) Format

The Portable Bridge Notation (PBN) is a file format designed to store and exchange bridge game information in a structured way. It is widely used in bridge software applications, as it allows for the easy sharing and analysis of bridge games. Below is a guide to the PBN format:

---

## General Structure

A PBN file consists of a series of records, each containing attributes and possibly a body. Each record starts with a tag enclosed in square brackets `[ ]`, followed by the attribute value. Optional metadata or game-specific data may follow in the body section.

### Example:
```
[Event "Club Championship"]
[Site "City Bridge Club"]
[Date "2025.04.16"]
[Board "1"]
[West "John Smith"]
[North "Alice Brown"]
[East "Charlie White"]
[South "Diana Green"]
[Dealer "N"]
[Vulnerable "None"]
[Deal "N:AKQJ.T987.65432.A AKJ6.QJ65.T987.54"]
[Scoring "IMP"]
```

---

## Tags and Attributes

### **1. Metadata Tags**
- **Event**: The name of the event (e.g., "Club Championship").
- **Site**: The location or name of the hosting club or organization.
- **Date**: Date of the game in `YYYY.MM.DD` format.
- **Board**: The board number.

### **2. Player Tags**
- **West, North, East, South**: Names of the players in each seat.

### **3. Game-Specific Tags**
- **Dealer**: The player who dealt the hand (`N`, `E`, `S`, or `W`).
- **Vulnerable**: Vulnerability for the hand (e.g., "None", "EW", "NS", "All").
- **Deal**: The distribution of cards in the format `N:... E:... S:... W:...`.
  - Example: `N:AKQJ.T987.65432.A AKJ6`.
- **Scoring**: The scoring method used (e.g., "IMP", "Matchpoints").

---

## Body Section

The body section is optional and may contain:
- Auction
- Play sequences
- Comments
- Results

### Example Body:
```
[Auction "N"]
1C Pass 1H Pass
1NT Pass 3NT Pass
Pass Pass

[Play "N"]
1C: AH
2H: 3D
```

---

## Comments and Annotations

- Comments are added with a semicolon (`;`) at the beginning of the line.
- Example:
  ```
  ; This is a comment explaining the deal.
  ```

---

## Encoding

- PBN files are plain text and should use UTF-8 encoding.
- Carriage returns (`\r\n`) are commonly used as line delimiters.

---

## Validation

- Ensure all mandatory tags are included for a complete and valid PBN file.
- The format should strictly follow the syntax to ensure compatibility with bridge software.

---

## Resources

- [Official PBN Documentation](https://www.worldbridge.org)
- [PBN Example Files](https://bridgeexamples.org)

---

This document serves as a quick reference to the PBN format. For detailed rules and examples, refer to the official documentation or bridge-specific software manuals.