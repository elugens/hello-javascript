---
title: Unicode Regex
description: Unicode Regex is used to match text against regular expressions. It is used to match text against regular expressions. Regular Expressions Interview Questions
sidebar_position: 3
sidebar_label: Unicode Regex
keywords:
  - unicode regex
  - unicode regular expression
  - regular expressions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - unicode regex
  - unicode regular expression
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/UnicodeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Unicode Regex | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Unicode Regex**

<CloseAllAnswers />

---

### What is Unicode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unicode is a standard for representing a wide range of characters from different languages and symbols in JavaScript and other programming languages.
  </div><br />
  </div>
</details>

---

### How does JavaScript handle Unicode in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript uses the "u" flag in Regex to enable full Unicode matching, allowing it to match any character in the Unicode database.
  </div><br />
  </div>
</details>

---

### What are the implications of the "u" flag in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "u" flag causes some escape sequences to be treated differently, it enables the correct processing of surrogate pairs and implements complete Unicode matching.
  </div><br />
  </div>
</details>

---

### What does the \p&#123;&#125; notation in JavaScript Regex do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \p&#123;&#125; notation is used in Unicode property escapes to match any character that has the specified Unicode property.
  </div><br />
  </div>
</details>

---

### What is a surrogate pair in JavaScript Unicode handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A surrogate pair is a pair of 16-bit values that JavaScript uses to represent a single Unicode character outside the Basic Multilingual Plane.
  </div><br />
  </div>
</details>

---

### What is a Unicode property escape in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Unicode property escape (\p&#123;&#125;) is a type of escape sequence in a regular expression that matches characters based on their general category, script, or other properties in the Unicode standard.
  </div><br />
  </div>
</details>

---

### Can you use the Unicode range in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use Unicode ranges in JavaScript regex by using the property escape \u&#123;&#125; notation with the "u" flag.
  </div><br />
  </div>
</details>

---

### How does the "u" flag change the behavior of \b in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the "u" flag is used, \b only considers the underscore and alphanumeric characters from the ASCII range as word characters.
  </div><br />
  </div>
</details>

---

### What is an astral symbol in relation to Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the "u" flag is used, \b only considers the underscore and alphanumeric characters from the ASCII range as word characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple JavaScript code example illustrating how the 'u' flag in regex allows astral symbols to be matched as single characters:

```javascript
let str = "𝌆"; // This is an astral symbol

let regexWithoutU = /.+/; // Regex without 'u' flag
let matchWithoutU = str.match(regexWithoutU);

console.log(matchWithoutU[0].length); // Outputs: 2, because it treats astral symbol as two separate characters

let regexWithU = /.+/u; // Regex with 'u' flag
let matchWithU = str.match(regexWithU);

console.log(matchWithU[0].length); // Outputs: 1, because it treats astral symbol as a single character

```

In this example, you can see how the 'u' flag enables the regex to treat the astral symbol as a single character instead of two separate characters.

  </div>
  </div>
</details>

---

### How does JavaScript handle astral symbols in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Astral symbols are matched as a single unit in JavaScript Regex when the "u" flag is set, rather than being interpreted as two separate code units.
  </div><br />
  </div>
</details>

---

### How can you match any Unicode letter in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can match any Unicode letter in JavaScript Regex using Unicode property escapes: \p&#123;Letter&#125;, with the "u" flag set.
  </div><br />
  </div>
</details>

---

### What does JavaScript's \p&#123;Script=&#125; do in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \p&#123;Script=&#125; in JavaScript Regex is a Unicode property escape that matches any character that is a part of the specified script, such as Latin, Greek, etc.
  </div><br />
  </div>
</details>

---

### Can JavaScript regex match emoji using Unicode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript regex can match emoji using the Unicode property escape \p&#123;Emoji&#125;, when the "u" flag is set.
  </div><br />
  </div>
</details>

---

### How can you match all whitespace characters, including Unicode spaces, in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can match all whitespace characters, including Unicode spaces, using the \p&#123;White_Space&#123; Unicode property escape with the "u" flag set.
  </div><br />
  </div>
</details>

---

### Can you perform Unicode case-insensitive matching in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by using both the "u" and "i" flags, JavaScript regex can perform Unicode case-insensitive matching.
  </div><br />
  </div>
</details>

---

### What's the impact of using the dot (.) in a JavaScript regex with the "u" flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the "u" flag is used, the dot (.) in a JavaScript regex matches any single character, including Unicode characters beyond the Basic Multilingual Plane.
  </div><br />
  </div>
</details>

---

### What's the significance of Unicode normalization in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unicode normalization in JavaScript allows for the standardization of Unicode strings, which is important for string comparison and searching in various languages and scripts.
  </div><br />
  </div>
</details>

---

### How many bytes are Unicode characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unicode characters can be 1 to 4 bytes long, depending on the specific character and encoding method used (UTF-8, UTF-16, or UTF-32).
    </div><br />
  <div><strong>Technical Response:</strong> JavaScript uses Unicode encoding for strings. Most characters encode with 2 bytes, but that allows them to represent at most 65536 characters. That range is not big enough to encode all possible characters, so some rare characters are encoded with 4 bytes, for instance, like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs. So, the simple answer is 2 bytes for regular “old” characters and 4 bytes for special “surrogate pairs or new” characters. When the JavaScript language got created a long time ago, Unicode encoding was more straightforward; there were no 4-byte characters. So, some language features still mishandle them. By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Both characters return a length of 2,
// it should be 1, but these are special characters
alert('😄'.length); // 2
alert('𝒳'.length); // 2
```

  </div>
  </div>
</details>

---

### How are Unicode properties expressed in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unicode properties are expressed in regular expressions using the \p&#123;Property&#125; notation, provided the "u" flag is set.
    </div><br />
  <div><strong>Technical Response:</strong> In simple terms, Unicode properties are denoted or expressed as \p&#123;…&#125;. When we need to use \p&#123;…&#125;, a regular expression must have flag u. For instance, \p&#123;Letter&#125; denotes a letter in any language. We can also use \p&#123;L&#125;, as L is an alias of Letter. There are shorter aliases for almost every property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'A ბ ㄱ';

alert(str.match(/\p{L}/gu)); // A,ბ,ㄱ
alert(str.match(/\p{L}/g));
// null (no matches, \p does not work without the flag "u")
```

  </div>
  </div>
</details>

---

### Is there a way to find or match a Hexadecimal number using Unicode properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, using Unicode properties in a regular expression allows you to match hexadecimal numbers. The Unicode property \p&#123;Hex_Digit&#125; can be used to match any hex digit, which includes 0-9 and A-F in both cases.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

console.log('number: xAF'.match(regexp)); // xAF
```

  </div>
  </div>
</details>

---

### What approach should we use to handle script-based languages, like Chinese, in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When handling script-based languages like Cyrillic, Greek, Arabic, or Han (Chinese), we should use the Unicode property for the Scriptwriting system, which we achieve by using the Script=&#8249;value&#8250; syntax.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /\p{sc=Han}/gu; // returns Chinese hieroglyphs

let str = `Hello Привет 你好 123_456`;

alert(str.match(regexp)); // 你,好
```

  </div>
  </div>
</details>

---

### What Unicode property should we use in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Unicode property to use in regex depends on the specific requirement; options include categories like \p&#123;Letter&#125;, \p&#123;Number&#125;, \p&#123;Punctuation&#125;, \p&#123;Emoji&#125;, and more. Characters that denote a currency, such as $, €, ¥, have Unicode property \p&#123;Currency_Symbol&#125;, the short alias: \p&#123;Sc&#125;, that we should use.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /\p{Sc}\d/gu;

let str = `Prices: $2, €1, ¥9`;

alert(str.match(regexp)); // $2,€1,¥9
```

  </div>
  </div>
</details>

---
