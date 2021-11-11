---
title: Anchors
sidebar_position: 4
---

# Anchors

**Regular Expressions: Anchors**

<head>
  <title>RegExp Anchors - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What do the caret ^ and dollar sign $ represent in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”. The caret ^ matches at the beginning of the text, and the dollar $ represents the end. It should be noted, we could use the startsWith and endsWith methods to perform the same task, which is recommended. Regular expressions should be used for more complex tests.
    </div>
  </div>
</details>

Code Example:

```js
let str1 = 'Mary had a little lamb';

alert(/^Mary/.test(str1)); // true
let str2 = "it's fleece was white as snow";

alert(/snow$/.test(str2)); // true
```

Source: <https://javascript.info/regexp-anchors>

### What approach should we use to test for full match in RegExp?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both anchors, caret, and dollar sign, together ^...$ are often used to test whether a string fully matches the pattern. For instance, to check if the user input is in the right format.
    </div>
  </div>
</details>

Code Example:

```js
let goodInput = '12:34';

let badInput = '12:345';

let regexp = /^\d\d:\d\d$/;

alert(regexp.test(goodInput)); // true
alert(regexp.test(badInput)); // false
```

Source: <https://javascript.info/regexp-anchors>

### What does it mean by Anchors (caret/dollar sign) have zero width?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It means they do not match a character, but rather force the regexp engine to check the condition (text start/end).
    </div>
  </div>
</details>

Source: <https://javascript.info/regexp-anchors>
