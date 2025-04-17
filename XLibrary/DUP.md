# DUP File Format for Bridge Games

The DUP file format is primarily used for bridge hand duplication machines and related software. It provides a structured way to store and transfer bridge hand information for duplication and play.

---

## General Structure

A DUP file is a plain text file, where each line represents a specific piece of information about the game, such as the board number, dealer, vulnerability, and the hands of the four players. Typically, the DUP format uses a consistent layout but may vary slightly depending on the software or duplication machine.

### Example:
```
<Board Number>|<Dealer>|<Vulnerability>|<North>|<East>|<South>|<West>
```

### Detailed Example:
```
1|N|None|AKQJ.T987.65432.A|5432.QJ65.T987.54|876.K432.QJ.T987|T987.AKQJ.AKQJ.K
```

---

## Key Sections of a DUP Line

### **1. Board Information**
- **Board Number**: The board number of the hand. Example: `1`.

### **2. Dealer**
- **Dealer**: Specifies who is the dealer for the board. Options are:
  - `N`: North
  - `E`: East
  - `S`: South
  - `W`: West

### **3. Vulnerability**
- **Vulnerability**: Indicates the vulnerability for the hand. Options are:
  - `None`: No vulnerability.
  - `NS`: North-South are vulnerable.
  - `EW`: East-West are vulnerable.
  - `All`: All players are vulnerable.

### **4. Hands**
- **North, East, South, West**: Each player's hand is represented in the format `<Suits>`:
  - Suits are listed in the order: Spades, Hearts, Diamonds, Clubs.
  - Each suit is separated by a period (`.`).
  - Example: `AKQJ.T987.65432.A`.

---

## Example DUP File

```
1|N|None|AKQJ.T987.65432.A|5432.QJ65.T987.54|876.K432.QJ.T987|T987.AKQJ.AKQJ.K
2|E|NS|5432.AKQJ.AKQJ.54|AKQJ.T987.65432.A|T987.5432.QJ65.T|876.K432.QJ.T987
3|S|EW|AKQJ.5432.T987.54|T987.AKQJ.AKQJ.K|5432.QJ65.T987.54|876.K432.QJ.T987
```

---

## Notes on Usage

- DUP files are especially useful for bridge duplication machines that deal cards for bridge tournaments.
- The format allows for easy duplication of boards across multiple tables in a tournament setting.
- Ensure that the file is saved with the `.dup` extension and uses UTF-8 encoding for compatibility.

---

## Comparison with Other Formats

| Feature            | DUP Format         | PBN Format        | LIN Format        |
|--------------------|--------------------|-------------------|-------------------|
| Encoding           | Compact            | Readable          | Compact           |
| Primary Use Case   | Duplication        | Analysis          | Online Play       |
| Human Readability  | Medium             | High              | Medium            |
| Annotation Support | Minimal            | Extensive         | Limited           |

---

This document provides the basic structure and usage of the DUP file format for bridge games. For more advanced features, consult the documentation specific to the duplication machine or software being used.