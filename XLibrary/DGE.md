# DGE File Format for Bridge Games

The DGE (Dealer Game Export) file format is used to represent bridge hands and game information in a structured text-based format. It is often utilized by bridge dealing software, tournament organizers, and duplication machines to store game data for duplication and analysis.

---

## General Structure

A DGE file typically contains multiple lines, with each line representing a single board. The structure includes key details like the board number, dealer, vulnerability, and hands for all four players (North, East, South, and West).

### Example Line:
```
<Board Number> <Dealer> <Vulnerability> <North Hand> <East Hand> <South Hand> <West Hand>
```

---

## Key Components of a DGE File

### **1. Board Information**
- **Board Number**: The number of the board, typically starting at `1`.
  - Example: `1`.

### **2. Dealer**
- **Dealer**: Specifies the player who dealt the cards. Options are:
  - `N` for North
  - `E` for East
  - `S` for South
  - `W` for West

### **3. Vulnerability**
- Indicates the vulnerability for the board. Options are:
  - `None` (no players vulnerable)
  - `NS` (North-South vulnerable)
  - `EW` (East-West vulnerable)
  - `All` (all players vulnerable)

### **4. Hands**
- Each player's hand is represented as a series of cards grouped by suits in the order:
  - **Spades**, **Hearts**, **Diamonds**, **Clubs**
- Suits are separated by a period (`.`).
- Example: `AKQJ.T987.65432.A`
  - Spades: A, K, Q, J
  - Hearts: 10, 9, 8, 7
  - Diamonds: 6, 5, 4, 3, 2
  - Clubs: A

---

## Example DGE File

```
1 N None AKQJ.T987.65432.A 5432.QJ65.T987.54 876.K432.QJ.T987 T987.AKQJ.AKQJ.K
2 E NS 5432.AKQJ.AKQJ.54 AKQJ.T987.65432.A T987.5432.QJ65.T 876.K432.QJ.T987
3 S EW AKQJ.5432.T987.54 T987.AKQJ.AKQJ.K 5432.QJ65.T987.54 876.K432.QJ.T987
4 W All T987.AKQJ.AKQJ.K 876.K432.QJ.T987 AKQJ.5432.T987.54 5432.AKQJ.AKQJ.54
```

---

## Notes on Usage

- **Compact Representation**: The DGE format is compact and efficient for storing multiple boards in a single file.
- **Duplication**: Commonly used with dealing machines to duplicate boards for tournament play.
- **Compatibility**: Ensure the file is saved with UTF-8 encoding for compatibility with bridge software.

---

## Comparison with Other Formats

| Feature            | DGE Format         | DUP Format         | BRI Format         | PBN Format        |
|--------------------|--------------------|--------------------|--------------------|-------------------|
| Encoding           | Compact            | Compact            | Compact            | Readable          |
| Primary Use Case   | Duplication        | Duplication        | Duplication        | Analysis          |
| Human Readability  | Medium             | Medium             | Medium             | High              |
| Annotation Support | Minimal            | Minimal            | Minimal            | Extensive         |

---

This document provides an overview of the DGE file format for bridge games. For additional details or specific implementation, consult the documentation provided with your dealing software or duplication machine.
