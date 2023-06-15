---
title: Regex Sets / Ranges
description: In simple terms, a range in a regular is denoted or expression inside of square brackets. For instance, [a-z] denotes a range of lowercase letters.
sidebar_position: 8
sidebar_label: Sets / Ranges
keywords:
  - regex sets
  - regex ranges
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
  - regex sets
  - regex ranges
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/SetsRangesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Regex Sets / Ranges | Regular Expression Interview Questions</title>
</head>

**Regular Expressions: Regex Sets / Ranges**

<CloseAllAnswers />

---

### What is a set in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A set is a group of characters inside square brackets [], indicating that any of those characters can match.
  </div><br />
  </div>
</details>

---

### Can a set include a range in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a range can be indicated using hyphen. E.g., [a-z] matches any lowercase letter.
  </div><br />
  </div>
</details>

---

### How do you specify multiple ranges in a Regex set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiple ranges can be included within one set, e.g., [A-Za-z0-9] matches any alphanumeric character.
  </div><br />
  </div>
</details>

---

### What does a caret (^) inside a Regex set indicate?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A caret in a set negates the set, matching anything not included in the set.
  </div><br />
  </div>
</details>

---

### Can Regex sets contain special characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, It is crucial to keep in mind that when special characters are used in sets, they lose their intended function. This means that the special character will no longer function as it typically would, potentially causing errors or misunderstandings in the output. Therefore, it is important to be aware of the impact of special characters when utilizing them in sets.
  </div><br />
  </div>
</details>

---

### How would you specify a regex set to match only lowercase vowels?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To specify a regex set to match only lowercase vowels, you can use the following pattern'[aeiou]' which will match any lowercase vowel.
  </div><br />
  </div>
</details>

---

### How do square brackets […] perform in regular expression sets?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions, square brackets [...] define a character set, matching any single character enclosed. For example, [abc] matches 'a', 'b', or 'c'. Ranges can be specified like [a-z] or [0-9].
    </div><br />
  <div><strong>Technical Response:</strong> Several characters or character classes inside square brackets […] mean to “search for any character among given”. For example, [eao] means any of the 3 characters: 'a', 'e', or 'o'. That is called a set in regex terminology. We use sets in a regular expressions along with recurring characters. We should note that although there are multiple characters in the set, they correspond to exactly one character in the match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// find [t or m], and then "op"
alert('Mop top'.match(/[tm]op/gi)); // "Mop", "top"

// Return null or no matches
// find "V", then [o or i], then "la"
alert('Voila'.match(/V[oi]la/)); // null, no matches
```

  </div>
  </div>
</details>

---

### Can you explain how range is set in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions, a range is set using square brackets and a hyphen. For example, [a-z] matches any lowercase letter, [A-Z] matches any uppercase letter, and [0-9] matches any digit.
    </div><br />
  <div><strong>Technical Response:</strong> In simple terms, a range in a regular expression is denoted or expressed inside of square brackets. A range may be from [a-z] or [1-100]. These settings can be set based on your needs. We can also use character classes inside […]. For example, if we would like to look for a wordy character \w or a hyphen -, then the set is [\w-]. Combining multiple classes is also possible, e.g. [\s\d] means “a space character or a digit”.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Exception 0xAF'.match(/x[0-9A-F][0-9A-F]/g)); // xAF
```

  </div>
  </div>
</details>

---

### Is there a way to handle Han (Chinese) or Cyrillic in regexp ranges?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Technical Response:</strong> Yes, Unicode range can be used in JavaScript regex. Unicode property escapes `\p&#123;...&#125;` can also be used to match characters that have certain general categories, scripts, or other properties.
    </div><br />
  <div><strong className="codeExample">Unicode Range Code Example:</strong><br /><br />

  <div></div>

Here's a code example of using Unicode ranges in JavaScript regex:

```javascript
let hanRegex = /[\u4E00-\u9FFF]+/u;
console.log(hanRegex.test('汉字')); // true

let cyrillicRegex = /[\u0400-\u04FF]+/u;
console.log(cyrillicRegex.test('русский')); // true
```

In this example, the `test()` function will return `true` if the string contains at least one Han or Cyrillic character.

**Unicode Property Escapes Example:**

In JavaScript, Unicode property escapes `\p{...}` can also be used to match characters that have certain general categories, scripts, or other properties. Here is how you might match Han (Chinese) or Cyrillic characters using properties:

```javascript
let hanRegex = /\p{Script=Han}+/u;
console.log(hanRegex.test('汉字')); // true

let cyrillicRegex = /\p{Script=Cyrillic}+/u;
console.log(cyrillicRegex.test('русский')); // true
```

In these examples, `\p{Script=Han}` matches any character in the Han (Chinese) script, and `\p{Script=Cyrillic}` matches any character in the Cyrillic script. Note that the `u` flag is necessary to enable this feature.

  </div>
  </div>
</details>

---

### How do you exclude a range of characters in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want to exclude a range of characters in a regular expression. We can place the caret ^ character at the start and match any character except the ones we are trying to match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('alice15@gmail.com'.match(/[^\d\sA-Z]/gi)); // returns @ and .
```

  </div>
  </div>
</details>

---

### Do we have to escape special characters in regex sets or ranges?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regex sets or ranges, you only need to escape the hyphen (-), caret (^), and the closing bracket ( ] ). For instance, to include a literal hyphen, place it as the first/last character in the set, or escape it with a backslash (-).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// No need to escape
let regexp = /[-().^+]/g;

alert('1 + 2 - 3'.match(regexp)); // Matches +, -

// Escaped everything
let regexp = /[\-\(\)\.\^\+]/g;

alert('1 + 2 - 3'.match(regexp)); // also works: +, -
```

  </div>
  </div>
</details>

---

### What is the recommended way to match against surrogate pairs in a set or range?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The recommended way to match surrogate pairs in a set or range is using Unicode property escapes with the /u flag. For instance, to match any emoji: /\p&#123;Emoji&#125;/u. Traditional set or range doesn't handle surrogate pairs well.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Certainly! Here's a code example demonstrating how to use Unicode property escapes to match surrogate pairs, specifically for emojis, in JavaScript regex:

```javascript
let emojiRegex = /\p{Emoji}/u;
console.log(emojiRegex.test('❤️')); // true

let nonEmojiRegex = /[^\p{Emoji}]/u;
console.log(nonEmojiRegex.test('Hello!')); // true
```

In this example, the `test()` function is used to check if a string contains any emojis using the `\p{Emoji}` property escape. The `/u` flag is necessary to enable full Unicode matching.

  </div>
  </div>
</details>

---
