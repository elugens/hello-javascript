---
title: Greedy / Lazy Quantifiers
description: By default, quantifiers are Greedy. Greedy quantifiers try to match the longest text that matches given pattern. Regular Expressions Interview Questions
sidebar_position: 10
sidebar_label: Greedy / Lazy Quants
keywords:
  - greedy quantifiers
  - lazy quantifiers
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
  - greedy quantifiers
  - lazy quantifiers
  - regular expressions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/GreedyLazySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Greedy / Lazy Quantifiers | HelloJavaScript.info</title>
</head>

**Regular Expressions: Greedy / Lazy Quantifiers**

<CloseAllAnswers />

---

### What is a lazy quantifier in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A lazy quantifier in regex, symbolized as '?' following a quantifier, tries to match as little text as possible. For example, '.*?' will match the shortest possible string, contrary to the greedy '.*'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of using lazy and greedy quantifiers in JavaScript:

```javascript
let str = '<div>hello</div><div>world</div>';

// greedy
let greedyResult = str.match(/<div>.*<\/div>/)[0];
console.log(greedyResult); // '<div>hello</div><div>world</div>'

// lazy
let lazyResult = str.match(/<div>.*?<\/div>/)[0];
console.log(lazyResult); // '<div>hello</div>'
```

In the greedy example, the '.&#x2217;' matches as much as it can, including the closing '&#60;/div&#62;' of the first div and the opening '&#60;div&#62;' of the second. In contrast, the lazy '.&#x2217;?' in the second example stops matching as soon as it encounters the first '&#60;/div&#62;'.

  </div>
  </div>
</details>

---

### Can you explain the difference between greedy and lazy quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Greedy quantifiers match as much as possible, while lazy quantifiers match as little as possible. They control how many instances a regular expression matches in a given input.
    </div><br />
  <div><strong>Technical Response:</strong> Quantifiers are Greedy by default. Greedy quantifiers seek the longest text that meets a particular pattern. Greedy quantifiers scan the whole string before attempting any match. If the full text does not match, delete the last character and try again until a match gets discovered. A lazy (also known as non-greedy or hesitant) quantifier always tries to repeat the sub-pattern as few times as feasible before expanding to longer matches. In general, a lazy pattern matches the smallest feasible string. To make quantifiers lazy, attach (?) to the current quantifier, for example, +?, &#123;0,5&#125;? We should emphasize that lazy quantifiers are capable of failing.<br /><br />The notion of greedy/lazy quantifiers only exists in backtracking regex engines. In non-backtracking regex engines or POSIX-compliant regex engines, quantifiers only specify the repetition's upper and lower bound without specifying how to find the match.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Greedy Quantifier
let regexp = /".+"/g;
let str = 'a "witch" and her "broom" is one';
console.log(str.match(regexp)); // "witch" and her "broom"

// Lazy Quantifier
let regexp = /".+?"/g;
let str = 'a "witch" and her "broom" is one';

console.log(str.match(regexp)); // "witch", "broom"
```

  </div>
  </div>
</details>

---

### How do you make a greedy quantifier lazy?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You make a greedy quantifier lazy in a regular expression by appending a question mark (?) to it. For example, '*' becomes '*?', '+' becomes '+?', and '&#123;n,&#125;' becomes '&#123;n&#125;?'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here is a JavaScript code example illustrating the difference between greedy and lazy quantifiers:

```javascript
let str = '1234567890';

// greedy
let greedyResult = str.match(/\d{3,}/)[0];
console.log(greedyResult); // '1234567890'

// lazy
let lazyResult = str.match(/\d{3,}?/)[0];
console.log(lazyResult); // '123'
```

In the greedy example, '\d{3,}' matches as many digit characters as possible (3 or more), so it returns the entire string. In contrast, the lazy '\d{3,}?' returns as soon as it finds the minimum number of matches (3 digits).

  </div>
  </div>
</details>

---

### What are the effects of a lazy quantifier on regex performance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lazy quantifiers can negatively affect regex performance as they often require more backtracking, especially with complex patterns or long strings, compared to their greedy counterparts.
  </div>
  </div>
</details>

---

### How does a greedy quantifier behave when there's a match conflict?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A greedy quantifier tries to match as much as possible. In case of a match conflict, it takes the longest possible match, potentially overriding smaller, valid matches.
  </div>
  </div>
</details>

---

### In what scenario would you prefer a lazy quantifier over a greedy one?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You'd prefer a lazy quantifier when you want to capture the smallest match possible, such as extracting data between specific characters, without consuming the entire subsequent similar patterns.
  </div>
  </div>
</details>

---

### How does a lazy quantifier behave when there's a match conflict?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In case of a match conflict, a lazy quantifier takes the shortest possible match. It stops as soon as it meets the minimum requirements, avoiding larger potential matches.
  </div>
  </div>
</details>

---

### How does the "&#123;n,&#125;?" quantifier function in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regex, "&#123;n,&#125;?" is a lazy quantifier that matches at least 'n' occurrences of a pattern, but tries to match as few as possible, stopping at the first valid match.
  </div>
  </div>
</details>

---

### Why might we use greedy quantifiers in regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We might use greedy quantifiers in regex when we want to match as much text as possible, such as extracting the entire content between specific delimiters or capturing the longest patterns.
  </div>
  </div>
</details>

---

### How can lazy quantifiers influence match results?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lazy quantifiers influence match results by capturing the smallest possible match. This can yield different results compared to greedy quantifiers, especially with multiple potential matches.
  </div>
  </div>
</details>

---

### How does the engine decide between a greedy and lazy match in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The engine doesn't decide between a greedy and lazy match; it's determined by the pattern. Greedy quantifiers (like *, +, &#123;&#125;) match as much as possible while adding "?" (like*?, +?, &#123;&#125;?) makes them lazy.
  </div>
  </div>
</details>

---

### Can you switch a lazy quantifier to a greedy one?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can switch a lazy quantifier to a greedy one in regex by removing the trailing question mark (?). For instance, '*?' (lazy) becomes '*' (greedy), '+?' becomes '+', and '&#123;n,&#125;?' becomes '&#123;n,&#125;'.
  </div>
  </div>
</details>

---

### What's the difference between "+" and "+?" in Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In regex, "+" is a greedy quantifier that matches 1 or more occurrences of the preceding element. "+?" is its lazy version, matching the fewest occurrences necessary to allow the overall match.
  </div>
  </div>
</details>

---
