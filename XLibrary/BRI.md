# BRI File Format for Bridge Games

The BRI (Bridge Random Interface) file format is commonly used for bridge hand dealing and duplication software. It is a compact and structured format designed to represent bridge deals, including hands, dealer, vulnerability, and optionally the results.

---

## General Structure

A BRI file typically consists of lines with specific fields separated by spaces. Each line represents a single board and contains key details about the board, such as dealer, vulnerability, and the hands of the four players.

### Example:
```
<Dealer> <Vulnerability> <North Hand> <East Hand> <South Hand> <West Hand>
```

---

## Key Components

### **1. Dealer**
- Indicates the dealer for the board.
- Options:
  - `N`: North
  - `E`: East
  - `S`: South
  - `W`: West

### **2. Vulnerability**
- Indicates the vulnerability for the board.
- Options:
  - `None`: No vulnerability.
  - `NS`: North-South are vulnerable.
  - `EW`: East-West are vulnerable.
  - `All`: All players are vulnerable.

### **3. Hands**
- The hands for each player are listed in the following order: North, East, South, West.
- Each hand is represented as a string of 13 cards, grouped by suit in descending rank order (Spades, Hearts, Diamonds, Clubs).
- Suit boundaries are indicated by dots (`.`), and suits are listed in the order: Spades, Hearts, Diamonds, Clubs.

### **4. Example Hands**
- `AKQJ.T987.65432.A`: Represents a hand with:
  - Spades: A, K, Q, J
  - Hearts: 10, 9, 8, 7
  - Diamonds: 6, 5, 4, 3, 2
  - Clubs: A

---

## Example BRI File

```
N None AKQJ.T987.65432.A 5432.QJ65.T987.54 876.K432.QJ.T987 T987.AKQJ.AKQJ.K
E NS 5432.AKQJ.AKQJ.54 AKQJ.T987.65432.A T987.5432.QJ65.T 876.K432.QJ.T987
S EW AKQJ.5432.T987.54 T987.AKQJ.AKQJ.K 5432.QJ65.T987.54 876.K432.QJ.T987
W All T987.AKQJ.AKQJ.K 876.K432.QJ.T987 AKQJ.5432.T987.54 5432.AKQJ.AKQJ.54
```

---

## Notes on Usage

- BRI files are used primarily for bridge dealing software and duplication machines.
- They are ideal for storing and transferring large numbers of bridge hands efficiently.
- Ensure that the file uses UTF-8 encoding for compatibility.

---

## Comparison with Other Formats

| Feature            | BRI Format         | DUP Format         | PBN Format        | LIN Format        |
|--------------------|--------------------|--------------------|-------------------|-------------------|
| Encoding           | Compact            | Compact            | Readable          | Compact           |
| Primary Use Case   | Duplication        | Duplication        | Analysis          | Online Play       |
| Human Readability  | Medium             | Medium             | High              | Medium            |
| Annotation Support | Minimal            | Minimal            | Extensive         | Limited           |

---

This document provides an overview of the BRI file format for bridge games. For further details, consult the documentation provided with your dealing software or duplication machine.
