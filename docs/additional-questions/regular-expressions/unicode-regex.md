---
title: Unicode Regex
sidebar_position: 3
---

# Unicode: flag "u" and class \p{...}

**Regular expressions: Unicode: flag "u" and class \p{...}**

**Question:** **How many bytes are Unicode characters?**

**Interview Answer:** JavaScript uses Unicode encoding for strings. Most characters are encoded with 2 bytes, but that allows to represent at most 65536 characters. That range is not big enough to encode all possible characters, that is why some rare characters are encoded with 4 bytes, for instance like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs and so on. So, the simple answer is 2 bytes for regular “old” characters and 4 bytes for special “surrogate pairs or new” characters. A long time ago, when JavaScript language was created, Unicode encoding was simpler, there were no 4-byte characters. So, some language features still handle them incorrectly. By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results.

Code Example:

```js
// Both characters return a length of 2,

// it should be 1, but these are special characters

alert('😄'.length); // 2
alert('𝒳'.length); // 2
```

Source: <https://javascript.info/regexp-unicode>

**Question:** **How are Unicode properties expressed in regular expressions?**

**Interview Answer:** In simple terms, Unicode properties are denoted or expressed as \p{…}. To use \p{…}, a regular expression must have flag u. For instance, \p{Letter} denotes a letter in any language. We can also use \p{L}, as L is an alias of Letter. There are shorter aliases for almost every property.

Code Example:

```js
let str = 'A ბ ㄱ';

alert(str.match(/\p{L}/gu)); // A,ბ,ㄱ
alert(str.match(/\p{L}/g));

// null (no matches, \p does not work without the flag "u")
```

Source: <https://javascript.info/regexp-unicode#unicode-properties-p>

**Question:** **Is there a way to denote Hexadecimal numbers in a regular expression?**

**Interview Answer:** Yes, A hex digit can be denoted as \p{Hex_Digit} Unicode property.

Code Example:

```js
let regexp = /x\p{Hex\_Digit}\p{Hex\_Digit}/u;

alert('number: xAF'.match(regexp)); // xAF
```

Source: <https://javascript.info/regexp-unicode#example-hexadecimal-numbers>

**Question:** **What approach should we use to handle script-based languages, like Chinese, in regular expressions?**

**Interview Answer:** When we are handling script-based languages like Cyrillic, Greek, Arabic, or Han (Chinese). We should use the Unicode property for the Script writing system. This can be achieved by using the `Script=<value>` syntax.

Code Example:

```js
let regexp = /\p{sc=Han}/gu; // returns Chinese hieroglyphs
let str = `Hello Привет 你好 123\_456`;

alert(str.match(regexp)); // 你,好
```

Source: <https://javascript.info/regexp-unicode#example-chinese-hieroglyphs>

**Question:** **What Unicode property should we use in regular expressions?**

**Interview Answer:** Characters that denote a currency, such as $, €, ¥, have Unicode property \p{Currency_Symbol}, the short alias: \p{Sc}, that we should use.

Code Example:

```js
let regexp = /\p{Sc}\d/gu;

let str = `Prices: $2, €1, ¥9`;

alert(str.match(regexp)); // $2,€1,¥9
```

Source: <https://javascript.info/regexp-unicode#example-chinese-hieroglyphs>
