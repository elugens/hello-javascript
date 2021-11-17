---
title: Unicode Regex
sidebar_position: 3
---

# Unicode Regex

**Regular Expressions: Unicode Regex**

<head>
  <title>Unicode Regex - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How many bytes are Unicode characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript uses Unicode encoding for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters. That range is not big enough to encode all possible characters, that is why some rare characters are encoded with 4 bytes, for instance like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs and so on. So, the simple answer is 2 bytes for regular “old” characters and 4 bytes for special “surrogate pairs or new” characters. A long time ago, when JavaScript language was created, Unicode encoding was simpler, there were no 4-byte characters. So, some language features still handle them incorrectly. By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results.
    </div>
  </div>
</details>

Code Example:

```js
// Both characters return a length of 2,

// it should be 1, but these are special characters

alert('😄'.length); // 2
alert('𝒳'.length); // 2
```

---

### How are Unicode properties expressed in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, Unicode properties are denoted or expressed as \p&#123;…&#125;. To use \p&#123;…&#125;, a regular expression must have flag u. For instance, \p&#123;Letter&#125; denotes a letter in any language. We can also use \p&#123;L&#125;, as L is an alias of Letter. There are shorter aliases for almost every property.
    </div>
  </div>
</details>

Code Example:

```js
let str = 'A ბ ㄱ';

alert(str.match(/\p{L}/gu)); // A,ბ,ㄱ
alert(str.match(/\p{L}/g));

// null (no matches, \p does not work without the flag "u")
```

---

### Is there a way to denote Hexadecimal numbers in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, A hex digit can be denoted as \p&#123;Hex_Digit&#125; Unicode property.
    </div>
  </div>
</details>

Code Example:

```js
let regexp = /x\p{Hex\_Digit}\p{Hex\_Digit}/u;

alert('number: xAF'.match(regexp)); // xAF
```

---

### What approach should we use to handle script-based languages, like Chinese, in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we are handling script-based languages like Cyrillic, Greek, Arabic, or Han (Chinese). We should use the Unicode property for the Script writing system. This can be achieved by using the Script=&#8249;value&#8250; syntax.
    </div>
  </div>
</details>

Code Example:

```js
let regexp = /\p{sc=Han}/gu; // returns Chinese hieroglyphs
let str = `Hello Привет 你好 123\_456`;

alert(str.match(regexp)); // 你,好
```

---

### What Unicode property should we use in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Characters that denote a currency, such as $, €, ¥, have Unicode property \p&#123;Currency_Symbol&#125;, the short alias: \p&#123;Sc&#125;, that we should use.
    </div>
  </div>
</details>

Code Example:

```js
let regexp = /\p{Sc}\d/gu;

let str = `Prices: $2, €1, ¥9`;

alert(str.match(regexp)); // $2,€1,¥9
```

---
