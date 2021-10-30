---
title: Alternation
sidebar_position: 13
---

# Alternation (OR) |

### What is Alternation in a regular expression?

**Interview Answer:** Alternation is the term in regular expression that is a simple “OR”. In a regular expression it “OR” is denoted with a vertical line character |.

Code Example:

```js
let regexp = /html|php|css|java(script)?/gi; // Alternation |
let str = 'First HTML appeared, then CSS, then JavaScript';

alert(str.match(regexp)); // 'HTML', 'CSS', 'JavaScript'
```

Source: <https://javascript.info/regexp-alternation>
