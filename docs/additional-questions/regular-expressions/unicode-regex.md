---
title: Unicode Regex
description: Unicode Regex is used to match text against regular expressions. It is used to match text against regular expressions.
sidebar_position: 3
sidebar_label: Unicode Regex
---

**Regular Expressions: Unicode Regex**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How many bytes are Unicode characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript uses Unicode encoding for strings. Most characters get encoded with 2 bytes, but that allows them to represent at most 65536 characters. That range is not big enough to encode all possible characters, so some rare characters are encoded with 4 bytes, for instance, like 𝒳 (mathematical X) or 😄 (a smile), some hieroglyphs. So, the simple answer is 2 bytes for regular “old” characters and 4 bytes for special “surrogate pairs or new” characters. When the JavaScript language got created a long time ago, Unicode encoding was more straightforward; there were no 4-byte characters. So, some language features still mishandle them. By default, regular expressions also treat 4-byte “long characters” as a pair of 2-byte ones. And, as it happens with strings, that may lead to odd results.
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
  <div><strong>Interview Response:</strong> In simple terms, Unicode properties are denoted or expressed as \p&#123;…&#125;. When we need to use \p&#123;…&#125;, a regular expression must have flag u. For instance, \p&#123;Letter&#125; denotes a letter in any language. We can also use \p&#123;L&#125;, as L is an alias of Letter. There are shorter aliases for almost every property.
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

### Is there a way to denote Hexadecimal numbers in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, A hex digit gets denoted as \p&#123;Hex_Digit&#125; Unicode property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;

alert('number: xAF'.match(regexp)); // xAF
```

  </div>
  </div>
</details>

---

### What approach should we use to handle script-based languages, like Chinese, in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we are handling script-based languages like Cyrillic, Greek, Arabic, or Han (Chinese). We should use the Unicode property for the Scriptwriting system, which can get achieved using the Script=&#8249;value&#8250; syntax.
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
  <div><strong>Interview Response:</strong> Characters that denote a currency, such as $, €, ¥, have Unicode property \p&#123;Currency_Symbol&#125;, the short alias: \p&#123;Sc&#125;, that we should use.
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
