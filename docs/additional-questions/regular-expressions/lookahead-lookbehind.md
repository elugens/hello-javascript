---
title: Lookahead / Lookbehind
sidebar_position: 14
---

# Lookahead / Lookbehind

**Regular expressions: Lookahead and lookbehind**

### Can you explain the Lookahead approach in a regular expression?

**Interview Answer:** Sometimes we need to find only those matches for a pattern that are followed or preceded by another pattern. The lookahead approach involves in catching a match based on a proceeding character or digit. For example, the syntax is: X(?=Y), it means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y. It should be noted, the lookahead is merely a test, the contents of the parentheses is not included in the result.

Code Example:

```js
let str = '1 turkey costs 30€';

alert(str.match(/\d+(?=€)/));
// 30, the number 1 is ignored, as it is not followed by €

// EXAMPLE: Negative Lookahead

let str = '2 turkeys cost 60€';

alert(str.match(/\d+\b(?!€)/g));

// 2 (the price is not matched)
```

Source: <https://javascript.info/regexp-lookahead-lookbehind#lookahead>

Additional Information: Negative Lookahead

Source: <https://javascript.info/regexp-lookahead-lookbehind#negative-lookahead>

### What is the difference between regex Lookahead and Lookbehind?

**Interview Answer:** Lookahead allows us to add a condition for “what follows”. Lookbehind is similar, but it looks behind to find the target.

Source: <https://javascript.info/regexp-lookahead-lookbehind#lookahead>

### Can you explain the Lookbehind approach in a regular expression?

**Interview Answer:** Lookbehind is like the lookahead approach. The difference is that they are the opposite of each other. Where lookahead value matches a value that proceeds it. While the lookbehind value matches the value proceeds it. Basically, it allows us to match a pattern only if the target value is before it. We can also use the negative lookbehind approach. The negative lookbehind approach allows us to set a test, where the target should not behind the pattern value. It should be noted, the contents inside lookbehind parentheses does not become a part of the result.

Code Example:

```js
let str = '1 turkey costs $30';

// the dollar sign is escaped \$

alert(str.match(/(?<=\$)\d+/)); // 30 (skipped the sole number)
let str = '2 turkeys cost $60';

alert(str.match(/(?<!\$)\b\d+/g)); // 2 (the price is not matched)
```

Source: <https://javascript.info/regexp-lookahead-lookbehind#lookbehind>

### Can you apply a capturing group to a lookaround in a regular expression?

**Interview Answer:** Yes, this is possible for both the lookahead and lookbehind (They are lookarounds) to apply the lookaround approach. The lookaround is zero-length making it Atomic. As soon as the lookaround condition is satisfied, the regex engine forgets about everything inside the lookaround. It will not backtrack inside the lookaround to try different permutations.

The only situation in which this makes any difference is when you use capturing groups inside the lookaround. Since the regex engine does not backtrack into the lookaround, it will not try different permutations of the capturing groups.

Code Example:

```js
let str = '1 turkey costs 30€';

let regexp = /\d+(?=(€|kr))/; // extra parentheses around €|kr
alert(str.match(regexp)); // 30, €
```

Source: <https://javascript.info/regexp-lookahead-lookbehind#capturing-groups>
