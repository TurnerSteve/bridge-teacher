# Simplified Formats for DUP, BRI, and DGE Files

This document describes simplified formats for DUP, BRI, and DGE bridge game files. These formats do not include suit symbols, and suits are represented as sequences of characters (with `T` for the 10). Suits are separated by periods (`.`), and the formats differ in their structure and delimiters.

---

## 1. DUP Format

### Structure
- Starts with **Dealer** and **Vulnerability**.
- Followed by the four hands: North, East, South, and West.
- Fields are separated by a vertical bar (`|`).

### Example:
```
Dealer|Vulnerability|North Hand|East Hand|South Hand|West Hand
```

### Example File:
```
N|None|AKQJ.T987.65432.A|5432.QJ65.T987.54|876.K432.QJ.T987|T987.AKQJ.AKQJ.K
E|NS|5432.AKQJ.AKQJ.54|AKQJ.T987.65432.A|T987.5432.QJ65.T|876.K432.QJ.T987
S|EW|AKQJ.5432.T987.54|T987.AKQJ.AKQJ.K|5432.QJ65.T987.54|876.K432.QJ.T987
W|All|T987.AKQJ.AKQJ.K|876.K432.QJ.T987|AKQJ.5432.T987.54|5432.AKQJ.AKQJ.54
```

---

## 2. BRI Format

### Structure
- Starts with **Board ID**, **Dealer**, and **Vulnerability**.
- Followed by the four hands: North, East, South, and West.
- Fields are separated by a vertical bar (`|`).

### Example:
```
BoardID|Dealer|Vulnerability|North Hand|East Hand|South Hand|West Hand
```

### Example File:
```
1|N|None|AKQJ.T987.65432.A|5432.QJ65.T987.54|876.K432.QJ.T987|T987.AKQJ.AKQJ.K
2|E|NS|5432.AKQJ.AKQJ.54|AKQJ.T987.65432.A|T987.5432.QJ65.T|876.K432.QJ.T987
3|S|EW|AKQJ.5432.T987.54|T987.AKQJ.AKQJ.K|5432.QJ65.T987.54|876.K432.QJ.T987
4|W|All|T987.AKQJ.AKQJ.K|876.K432.QJ.T987|AKQJ.5432.T987.54|5432.AKQJ.AKQJ.54
```

---

## 3. DGE Format

### Structure
- Starts with **Board ID**, **Dealer**, and **Vulnerability**.
- Followed by the four hands: North, East, South, and West.
- Fields are separated by a space (` `).

### Example:
```
BoardID Dealer Vulnerability North Hand East Hand South Hand West Hand
```

### Example File:
```
1 N None AKQJ.T987.65432.A 5432.QJ65.T987.54 876.K432.QJ.T987 T987.AKQJ.AKQJ.K
2 E NS 5432.AKQJ.AKQJ.54 AKQJ.T987.65432.A T987.5432.QJ65.T 876.K432.QJ.T987
3 S EW AKQJ.5432.T987.54 T987.AKQJ.AKQJ.K 5432.QJ65.T987.54 876.K432.QJ.T987
4 W All T987.AKQJ.AKQJ.K 876.K432.QJ.T987 AKQJ.5432.T987.54 5432.AKQJ.AKQJ.54
```

---

## Summary of Formats

| Feature            | DUP Format         | BRI Format         | DGE Format         |
|--------------------|--------------------|--------------------|--------------------|
| Starts with        | Dealer, Vulnerability | BoardID, Dealer, Vulnerability | BoardID, Dealer, Vulnerability |
| Field Separator    | `|`                | `|`                | ` `                |
| Hands Format       | Suits separated by `.` | Suits separated by `.` | Suits separated by `.` |
| Use Case           | Duplication        | Duplication        | Duplication        |

---

These simplified formats are designed for efficient storage and processing of bridge game data.