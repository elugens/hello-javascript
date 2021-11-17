---
title: Alternation
sidebar_position: 13
---

# Alternation (OR) |

**Regular Expressions: Alternation (OR) |**

<head>
  <title>Alternation - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is Alternation in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Alternation is the term in regular expression that is a simple “OR”. In a regular expression it “OR” is denoted with a vertical line character |.
    </div>
  </div>
</details>

Code Example:

```js
let regexp = /html|php|css|java(script)?/gi; // Alternation |
let str = 'First HTML appeared, then CSS, then JavaScript';

alert(str.match(regexp)); // 'HTML', 'CSS', 'JavaScript'
```

---
