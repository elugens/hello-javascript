---
title: Multiline Mode
sidebar_position: 5
---

# Multiline Mode

**Regular Expressions: Multiline Mode**

<head>
  <title>Multiline Mode - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the function of the regular expression m flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The m flag is used to specify that a multiline input string should be treated as multiple lines. If the m flag is used, ^ and $ match at the start or end of any line within the input string instead of the start or end of the entire string.
    </div>
  </div>
</details>

---

### How do Anchors (caret ^/ dollar sign $) behave in multiline mode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the multiline mode they match not only at the beginning and the end of the string, but also at start/end of line. If we do not the m flag, we will only be searching the first line. Each additional line will be missed. That is because by default a caret ^ only matches at the beginning of the text, and in the multiline mode at the start of any line.<br />
  It should be noted, “Start of a line” formally means “immediately after a line break”: the test ^ in multiline mode matches at all positions preceded by a newline character \n. And at the text start.<br />
When we are dealing with the dollar sign $, it behaves in a similar fashion. The regular expression \d$ finds the last digit in all lines.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

alert(str.match(/^\d/gm)); // 1, 2, 3
```

  </div>
  </div>
</details>

---

### What is the difference between the \n and ^$ in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To find a newline, we can use not only anchors ^ and $, but we can also use the newline character \n.  The most notable behavior between the \n and ^$ is that the new line only returns values in new lines. This can lead to odd behaviors where a value is not returned when it exists at the end of a line. So, a \n in the pattern is used when we need newline characters in the result, while anchors are used to find something at the beginning/end of a line. Yes, this can be confusing but we should be aware of it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = `Winnie: 1
Piglet: 2
Eeyore: 3`;

alert(str.match(/\d\n/gm)); // alerts 1\n,2\n
```

  </div>
  </div>
</details>

---
