---
title: Alternation (OR) |
description: Alternation is the term in regular expression that is a simple “OR”. In a regular expression an “OR” is denoted with a vertical line character. Questions
sidebar_position: 13
sidebar_label: Alternation
keywords:
  - alternation
  - javascript alternation
  - regexp alternation
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
  - alternation
  - javascript alternation
  - regular expressions
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/AlternationSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Alternation | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Alternation (OR) |**

---

<AdSense />

---

<CloseAllAnswers />

### What is Alternation in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Alternation in a regular expression, represented by the pipe symbol (|), allows for matching one pattern or another, similar to a logical "OR" operation. It provides flexibility in searching for different patterns.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let regexp = /html|php|css|java(script)?/gi; // Alternation |

let str = 'First HTML appeared, then CSS, then JavaScript';

console.log(str.match(regexp)); // 'HTML', 'CSS', 'JavaScript'
```

  </div>
  </div>
</details>

---

### How is alternation denoted in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regular expressions, alternation is denoted by the pipe symbol (|), which functions similarly to a logical "OR". For instance, in the regex "a|b", it matches either "a" or "b".
  </div>
  </div>
</details>

---

### Can you explain how Regex processes alternation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regex processes alternation from left to right. It attempts to match the pattern before the pipe (|) first. If that fails, it attempts the pattern after the pipe.
  </div>
  </div>
</details>

---

### Can Regex alternation match multiple patterns simultaneously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Regex alternation doesn't match multiple patterns simultaneously. It works on an "OR" basis, matching the first pattern that fits from left to right.
  </div>
  </div>
</details>

---

### What's the difference between character classes and alternation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Character classes, denoted by brackets [], match any single character within them, while alternation, denoted by |, matches any one of the complete patterns it separates.
  </div><br />
  <div><strong className="codeExample">Here are some JavaScript code examples demonstrating the use of character classes and alternation in regular expressions:</strong><br /><br />

  <div></div>

**Character Classes**:

```javascript
let str1 = "gray";
let str2 = "grey";
let regex = /gr[ae]y/;

console.log(regex.test(str1)); // true
console.log(regex.test(str2)); // true
```

In this example, `gr[ae]y` is a regular expression that matches either "gray" or "grey". The character class `[ae]` matches either 'a' or 'e'.

**Alternation**:

```javascript
let str1 = "I have a cat";
let str2 = "I have a dog";
let regex = /cat|dog/;

console.log(regex.test(str1)); // true
console.log(regex.test(str2)); // true
```

In this example, `cat|dog` is a regular expression that matches either "cat" or "dog". The alternation operator `|` allows to match either the pattern on its left or the pattern on its right.

Remember, while both character classes and alternation can be used to match one of multiple patterns, character classes are limited to matching one character out of several possibilities, while alternation can be used to match one of multiple more complex patterns.

---

:::note
It's worth noting that alternation has a higher computational cost than character classes because it requires more processing power to check each alternative, especially if there are multiple options. So, it's more efficient to use character classes for single characters, and alternation for longer or more complex patterns.
:::

  </div>
  </div>
</details>

---

### Can alternation be used in combination with other Regex operations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, alternation can be combined with other regex operations like grouping (parentheses), quantifiers (*, +, ?, &#123;&#125;), character classes ([]), and anchors (^, $).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "I have 4 cats and 3 dogs";
let regex = /\b(cats|dogs)\b/g;

let match;
while ((match = regex.exec(str)) != null) {
    console.log(`Matched: ${match[0]}`); // prints 'cats', then 'dogs'
}
```

In this regex, `(cats|dogs)` is a group that matches either 'cats' or 'dogs'. The `\b` on either side of the group is a word boundary, ensuring that we match 'cats' or 'dogs' as whole words rather than parts of other words.

Here's another example that uses alternation within a group, combined with a quantifier:

```javascript
let str = "123-456-7890";
let regex = /^(\d{3}-){2}\d{4}$/;

console.log(regex.test(str)); // true
```

In this regex, `(\d{3}-){2}` matches a sequence of three digits followed by a hyphen, repeated exactly twice. This is combined with `\d{4}` to match a sequence of four digits. This regular expression is designed to match a phone number in the format '123-456-7890'. The `^` and `$` are anchors indicating the start and end of the string, ensuring that the whole string conforms to the pattern.

  </div>
  </div>
</details>

---

### Is there any downside to using alternation excessively in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Excessive use of alternation in regex can lead to complex, hard-to-read patterns and potentially slower performance due to backtracking, especially with long strings.
  </div>
  </div>
</details>

---

### How does Regex handle non-matching alternatives?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a regex pattern includes non-matching alternatives, it simply ignores them and proceeds to the next alternative. If all alternatives fail, the entire pattern match fails.
  </div>
  </div>
</details>

---

### How is precedence determined in Regex alternation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regex alternation, precedence is determined by the order from left to right. It first tries to match the pattern on the left of the pipe (|), then proceeds to the right.
  </div>
  </div>
</details>

---

### Can you have an alternation with no alternatives?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, An alternation without any alternatives, represented as just a pipe symbol (|) in regex, matches nothing before and nothing after, effectively matching an empty string.
  </div>
  </div>
</details>

---

### How does alternation behave with empty strings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An empty string as an alternative in a regex alternation (|) will match at every position in the input string, effectively making it a successful, but zero-width, match.
  </div>
  </div>
</details>

---

### Can alternation be nested within a Regex pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, alternation can be nested within a regular expression pattern using parentheses for grouping. For example, in the regex "(a|(b|c))", alternation is nested.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "I love cats";
let regex = /I love (cats|dogs|(small|big) birds)/;

console.log(regex.test(str)); // true
```

In this example, the regular expression `I love (cats|dogs|(small|big) birds)` matches the string "I love " followed by either "cats", "dogs", or "small birds" or "big birds". The expression `(small|big) birds` is a nested alternation.

---

:::tip
It's important to note that when nesting alternations like this, you should be aware of how the regular expression engine processes the pattern. The engine will attempt to match the alternates from left to right. Once it finds a match, it stops and doesn't check the remaining alternates. So the order can sometimes matter, especially when dealing with more complex patterns.
:::

  </div>
  </div>
</details>

---

### What's the impact of using grouping with alternation in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using grouping with alternation in regex allows the alternation to apply to a sequence of characters, rather than just single characters. It enhances pattern flexibility and precision.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example to illustrate:

```javascript
let str = "I love cats";
let regex = /(I love cats)|(I love dogs)/;

console.log(regex.test(str)); // true
```

In this example, `(I love cats)|(I love dogs)` matches either the entire string "I love cats" or the entire string "I love dogs". If a match is found, you can also retrieve the matched string:

```javascript
let match = regex.exec(str);

if (match != null) {
    console.log(`Matched: ${match[0]}`); // Matched: I love cats
}
```

In this case, `match[0]` contains the entire matched string, while `match[1]` and `match[2]` contain the matched strings for the first and second groups, respectively. If the match for a group is not found, the corresponding entry in the match array will be `undefined`.

  </div>
  </div>
</details>

---

### How does quantification work with alternation in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found. When used with alternation, quantifiers can define how many times any of the alternation patterns should be matched.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "cataaaa";
let regex = /(cat|caaaa)t/;

console.log(regex.test(str)); // false
```

In this example, we might expect the regex to match the string "cataaaa", because "caaaa" is one of the alternatives in the group. However, the match fails because the regex engine is greedy. It first matches "cat", leaving only "aaaa", which does not match the "t" at the end of the regex.

If you want to match either "cat" or "caaaa", followed by a "t", you need to adjust the regular expression to avoid the greediness. One option is to make the alternatives mutually exclusive:

```javascript
let regex = /(caaaa|cat)t/;

console.log(regex.test(str)); // true
```

In this example, "caaaa" is checked before "cat", so the regex engine matches "caaaa", leaving "t", which matches the "t" at the end of the regex.

Remember that the order of alternatives can be important when using quantifiers with alternation, due to the greediness of the regex engine.

---

:::note
An important thing to note is that quantifiers in JavaScript regular expressions are greedy by default. This means that they will match as many instances of the pattern as possible. This behavior can sometimes lead to unexpected results when used with alternation.
:::

  </div>
  </div>
</details>

---

### Is Regex alternation greedy or lazy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regex alternation is neither greedy nor lazy. It simply tries to match the patterns from left to right and stops when it finds the first match. Greediness and laziness apply to quantifiers.
  </div>
  </div>
</details>

---
