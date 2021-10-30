---
title: Multiline Mode
sidebar_position: 5
---

# Multiline Mode

**Regular expressions: Multiline mode of anchors ^ $, flag "m"**

### What is the function of the regular expression m flag?

**Interview Answer:** The m flag is used to specify that a multiline input string should be treated as multiple lines. If the m flag is used, ^ and $ match at the start or end of any line within the input string instead of the start or end of the entire string.

Source: <https://javascript.info/regexp-multiline-mode>

### How do Anchors (caret ^/ dollar sign $) behave in multiline mode?

**Interview Answer:** In the multiline mode they match not only at the beginning and the end of the string, but also at start/end of line. If we do not the m flag, we will only be searching the first line. Each additional line will be missed. That is because by default a caret ^ only matches at the beginning of the text, and in the multiline mode at the start of any line.

It should be noted, “Start of a line” formally means “immediately after a line break”: the test ^ in multiline mode matches at all positions preceded by a newline character \n. And at the text start.

When we are dealing with the dollar sign $, it behaves in a similar fashion. The regular expression \d$ finds the last digit in all lines.

Code Example:

```js
let str = `1st place: Winnie

2nd place: Piglet

3rd place: Eeyore`;

alert(str.match(/^\d/gm)); // 1, 2, 3
```

Source: <https://javascript.info/regexp-multiline-mode>

### What is the difference between the \n and ^$ in regular expressions?

**Interview Answer:** To find a newline, we can use not only anchors ^ and $, but we can also use the newline character \n.  The most notable behavior between the \n and ^$ is that the new line only returns values in new lines. This can lead to odd behaviors where a value is not returned when it exists at the end of a line. So, a \n in the pattern is used when we need newline characters in the result, while anchors are used to find something at the beginning/end of a line. Yes, this can be confusing but we should be aware of it.

Code Example:

```js
let str = `Winnie: 1

Piglet: 2

Eeyore: 3`;

alert(str.match(/\d\n/gm)); // alerts 1\n,2\n
```

Source: <https://javascript.info/regexp-multiline-mode#searching-for-n-instead-of>
