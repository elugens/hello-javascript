---
title: Catastrophic Backtracking
sidebar_position: 15
---

# Catastrophic Backtracking

**Regular Expressions: Catastrophic Backtracking**

<head>
  <title>Catastrophic Backtracking - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is catastrophic backtracking in relation to regular expressions?

**Interview Answer:** Catastrophic backtracking is a condition that can occur if you are checking a (usually long) string against a complex regular expression. The problem usually occurs if something towards the end of the string causes the string to not match. This is common in some browsers like Firefox and can happen on the server-side as well. It should be noted, catastrophic backtracking is also known as a runaway regular expression.

Code Example:

```js
// Example: Catastrophic Backtracking

let regexp = /^(\d+)\*$/;

let str = '012345678901234567890123456789z';

// will take a very long time (careful!)

alert(regexp.test(str));
```

Source: <https://javascript.info/regexp-catastrophic-backtracking>

### How do you prevent catastrophic backtracking in the regex engine?

**Interview Answer:** The solution is simple. When nesting repetition operators, make sure that there is only one way to match the same match and prevent backtracking in these cases. The performance can sometimes be improved by changing the greedy quantifiers into lazy ones, but that is not always the case. Another important step is to attempt to debug your pattern to ensure it is written correctly.

Source: <https://www.regular-expressions.info/catastrophic.html>
