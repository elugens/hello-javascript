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

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/UnicodeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Unicode Regex | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Unicode Regex**

---

<AdSense />

---

<CloseAllAnswers />

### What is Unicode in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unicode is a standard for representing a wide range of characters from different languages and symbols in JavaScript and other programming languages.
  </div>
  </div>
</details>

---

### How does JavaScript handle Unicode in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript uses the "u" flag in Regex to enable full Unicode matching, allowing it to match any character in the Unicode database.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello js!";
let match = str.match(/\p{L}/gu);  
// match will be ["h", "e", "l", "l", "o", "j", "s"]
console.log(match);
```

  </div>
  </div>
</details>

---

### What are the implications of the "u" flag in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "u" flag in JavaScript Regex enables Unicode matching, but can cause unexpected results with quantifiers, ranges in character sets, and the dot operator, due to differences in how Unicode and non-Unicode patterns interpret characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "😊";

console.log(str.length); // Outputs: 2 (without "u" flag)
console.log([...str].length); // Outputs: 1 (with "u" flag)

let regexWithoutU = /^.$/; 
console.log(regexWithoutU.test(str)); // Outputs: false (without "u" flag)

let regexWithU = /^.$/u; 
console.log(regexWithU.test(str)); // Outputs: true (with "u" flag)
```

In this example, the string contains a single emoji, which is represented as a Unicode surrogate pair. Without the "u" flag, JavaScript treats the surrogate pair as two separate characters, hence the regex ^.$ (which matches a string of exactly one character) fails to match the string. However, with the "u" flag, the surrogate pair is treated as a single character, so the regex ^.$/u matches the string.

  </div>
  </div>
</details>

---

### What does the \p&#123;&#125; notation in JavaScript Regex do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `\p&#123;&#125;` notation in JavaScript regular expressions, used with the "u" flag, matches characters based on their Unicode properties, such as `Script`, `General_Category`, `Script_Extensions`, etc.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello 123! 你好 नमस्ते";
let match = str.match(/\p{Script=Latin}/gu); 
console.log(match); 
// Outputs: ["h", "e", "l", "l", "o"]
```

  </div>
  </div>
</details>

---

### What is a surrogate pair in JavaScript Unicode handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A surrogate pair is a pair of 16-bit values that JavaScript uses to represent a single Unicode character outside the Basic Multilingual Plane.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "\uD83D\uDE00"; // This is a surrogate pair for 😄
console.log(str); // Outputs: 😄

let regex = /\uD83D\uDE00/u;
console.log(regex.test(str)); // Outputs: true
```

In this example, the string str uses a surrogate pair to represent the grinning face emoji 😄. The regular expression /\uD83D\uDE00/u uses the same surrogate pair to match this emoji. The u flag enables full Unicode matching, which treats the surrogate pair as a single character.

  </div>
  </div>
</details>

---

### What is a Unicode property escape in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A Unicode property escape (\p&#123;&#125;) is a type of escape sequence in a regular expression that matches characters based on their general category, script, or other properties in the Unicode standard.
  </div>
  </div>
</details>

---

### Can you use the Unicode range in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use Unicode ranges in JavaScript regex by using the property escape \u&#123;&#125; notation with the "u" flag.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello, 你好, नमस्ते!";
let match = str.match(/[\u4e00-\u9fff]+/gu); 
console.log(match);
// Outputs: [ '你好' ]
```

In this example, the regex [\u4e00-\u9fff]+/gu matches any sequence of characters that are in the Unicode range from 4E00 to 9FFF, which includes most common Chinese characters. The g flag makes the regex match globally, and the u flag enables full Unicode matching.

  </div>
  </div>
</details>

---

### How does the "u" flag change the behavior of \b in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the "u" flag is used, \b only considers the underscore and alphanumeric characters from the ASCII range as word characters. The "u" flag changes the behavior of \b (word boundary) in JavaScript by allowing it to correctly handle Unicode characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "café";
let regexWithoutU = /\bcafé\b/;
console.log(regexWithoutU.test(str)); // Outputs: false (without "u" flag)

let regexWithU = /\bcafé\b/u;
console.log(regexWithU.test(str)); // Outputs: true (with "u" flag)
```

  </div>
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
  <div><strong>Interview Response:</strong> Astral symbols are matched as a single unit in JavaScript Regex when the "u" flag is set, rather than being interpreted as two separate code units. Astral symbols are Unicode characters that are outside of the Basic Multilingual Plane (BMP), requiring two 16-bit code units in UTF-16.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "I love 🍕!";
let regexWithoutU = /🍕/;
console.log(regexWithoutU.test(str)); // Outputs: false (without "u" flag)

let regexWithU = /🍕/u;
console.log(regexWithU.test(str)); // Outputs: true (with "u" flag)
```

Without the "u" flag, the astral symbol (pizza emoji) is treated as two separate characters, so the regex fails to match. With the "u" flag, the astral symbol is correctly treated as a single character, and the regex successfully matches the string.

  </div>
  </div>
</details>

---

### How can you match any Unicode letter in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can match any Unicode letter in JavaScript Regex using Unicode property escapes: \p&#123;Letter&#125;, with the "u" flag set.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello, 你好, नमस्ते!";
let match = str.match(/\p{L}/gu); 
console.log(match);
// Outputs: ['h', 'e', 'l', 'l', 'o', '你', '好', 'न', 'म', 'स', 'त', 'े']
```

  </div>
  </div>
</details>

---

### What does JavaScript's \p&#123;Script=&#125; do in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \p&#123;Script=&#125; in JavaScript Regex is a Unicode property escape that matches any character that is a part of the specified script, such as Latin, Greek, etc.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "こんにちは (Hello in Japanese Hiragana)";
let match = str.match(/\p{Script=Hiragana}/gu); 
console.log(match);
// Outputs: [ 'こ', 'ん', 'に', 'ち', 'は' ]
```

In this example, the regex `/\p{Script=Hiragana}/gu` matches any character from the Hiragana script. The `g` flag makes the regex match globally, and the `u` flag enables full Unicode matching. It matches all the Hiragana letters in the string.

  </div>
  </div>
</details>

---

### Can JavaScript regex match emoji using Unicode?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript regex can match emoji using the Unicode property escape \p&#123;Emoji&#125;, when the "u" flag is set. Optionaly, you can use the emoji inline regex /🍕/u;
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "I love 🍕!";
let regex = /\p{Emoji}/u;
console.log(regex.test(str)); // Outputs: true

////////////////////////////////

let str = "I love 🍕!";
let regex = /🍕/u;
console.log(regex.test(str)); // Outputs: true
```

  </div>
  </div>
</details>

---

### How can you match all whitespace characters, including Unicode spaces, in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match all whitespace characters, including Unicode spaces, in JavaScript regex using property escapes, you can use the `\p&#123;White_Space&#125;` Unicode property escape with the `u` (Unicode) flag.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "Hello\t\n\u{2003}World!"; // Normal space, tab, newline, and em space characters
let match = str.match(/\p{White_Space}/gu); 
console.log(match);
// Outputs: [' ', '\t', '\n', ' ']
```

In this example, the regex `/\p{White_Space}/gu` matches any Unicode whitespace character in the string. The `\p{White_Space}` is a Unicode property escape that matches any kind of whitespace character as defined by Unicode, including regular spaces, tabs, newlines, and other types of spaces like the em space. The `g` flag makes the regex match globally, and the `u` flag enables full Unicode matching. It matches all the different types of spaces in the string.

  </div>
  </div>
</details>

---

### Can you perform Unicode case-insensitive matching in JavaScript regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by using both the "u" and "i" flags, JavaScript regex can perform Unicode case-insensitive matching.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "Hello hElLo HELLO";
let regex = /hello/giu;
console.log(str.match(regex));
// Outputs: ['Hello', 'hElLo', 'HELLO']
```

In this example, the regular expression `/hello/giu` matches the word "hello" in any case. The `i` flag makes the regex case-insensitive, the `g` flag makes it match globally, and the `u` flag enables full Unicode matching. It matches all variations of "hello" in the string, regardless of their case.

  </div>
  </div>
</details>

---

### What's the impact of using the dot (.) in a JavaScript regex with the "u" flag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The dot . matches any single character except line terminators (like newline). When used with the "u" (Unicode) flag, it can also match any Unicode astral symbol, which would otherwise be seen as two characters.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "😄"; // An astral symbol
let regexWithoutU = /^.$/;
console.log(regexWithoutU.test(str)); // Outputs: false (without "u" flag)

let regexWithU = /^.$/u;
console.log(regexWithU.test(str)); // Outputs: true (with "u" flag)
```

In this example, the emoji is a Unicode astral symbol represented by a surrogate pair in JavaScript. Without the "u" flag, JavaScript treats the surrogate pair as two separate characters, so the regex `^.$` fails to match. However, with the "u" flag, JavaScript treats the surrogate pair as a single character, so the regex `^.$/u` matches successfully.

  </div>
  </div>
</details>

---

### What's the significance of Unicode normalization in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Unicode normalization is significant in JavaScript because it helps ensure that text is in a standard, consistent form, even when there are multiple valid sequences of Unicode code points that could produce the same text.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str1 = "café"; // Composed form (é is one Unicode character)
let str2 = "café"; // Decomposed form (e and ´ are two separate Unicode characters)

console.log(str1 === str2); // Outputs: false (not normalized)

// Normalize to composed form (NFC)
console.log(str1.normalize("NFC") === str2.normalize("NFC")); // Outputs: true
```

In this example, `str1` and `str2` look identical but are represented differently at the Unicode level. Without normalization, JavaScript considers them different strings. However, by normalizing to the same form ("NFC" for composed form), they are recognized as the same string. This is particularly important for string comparisons and when working with international text.

  </div>
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
console.log('😄'.length); // 2
console.log('𝒳'.length); // 2
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

console.log(str.match(/\p{L}/gu)); // output: A,ბ,ㄱ
console.log(str.match(/\p{L}/g)); // output: null
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

console.log('number: xAF'.match(regexp)); // ["xAF"]
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

console.log(str.match(regexp)); // 你,好
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

console.log(str.match(regexp)); // $2,€1,¥9
```

  </div>
  </div>
</details>

---
