---
title: Sticky Flag
sidebar_position: 16
---

# Sticky Flag

**Regular expressions: Sticky flag "y", searching at position**

**Question:** **What does the regex flag ‘Y’ do in regular expressions?**

**Interview Answer:** The flag y allows us to perform the search at the given position in the source string. The flag y makes regexp.exec to search exactly at position lastIndex, not “starting from” it. There is an important performance gain when using flag y.

Code Example:

```js
let str = 'let varName = "value"';

let regexp = /\w+/y;

regexp.lastIndex = 3;

alert(regexp.exec(str)); // null (there's a space at position 3, not a word)
regexp.lastIndex = 4;

alert(regexp.exec(str)); // varName (word at position 4)
```

Source: <https://www.regular-expressions.info/catastrophic.html>
