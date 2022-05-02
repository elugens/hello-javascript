---
title: Patterns and Flags
description: Patterns and Flags are used to match text against regular expressions. They are used to match text against regular expressions. Interview Questions
sidebar_position: 1
sidebar_label: Patterns and Flags
keywords:
  - regexp pattern
  - regexp flags
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
  - regexp pattern
  - regexp flags
  - regular expressions
  - interview answers
  - interview questions
---

<head>
  <title>Patterns and Flags | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Patterns and Flags**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular expressions are patterns with optional flags that allow powerful text search and replacement. They are available in JavaScript via the RegExp object, and we can embed them into string functions and string methods combined with regular expressions.
    </div>
  </div>
</details>

---

### What are the two syntaxes used to create a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use two syntaxes when creating a regular expression object, including the long and short syntaxes. The extended syntax uses the RegExp object with optional flags, and the short syntax uses forward slashes with optional flags. Slashes /.../ tell JavaScript that we are creating a regular expression, and they play the same role as quotes for strings. In both cases, regexp becomes an instance of the built-in RegExp class.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Long Syntax
regexp = new RegExp('pattern', 'flags');

// Short Syntax
regexp = /pattern/; // no flags
regexp = /pattern/gim; // with flags g,i and m (to be covered soon)
```

  </div>
  </div>
</details>

---

### Can you name the six flags used in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular expressions may have flags that affect the search. There are only 6 of them in JavaScript, including the i, g, m, s, u, and y regular expression flags:<br /><br />
  <strong>Flag Descriptions:</strong><br />
  <ul>
    <li>With the <strong>i</strong> flag the search is set to case insensitive.</li>
    <li>The <strong>g</strong> flag the search is set to global and looks for all matches, without it only the first search match is returned.</li>
    <li>The <strong>m</strong> flag represents a query in multiline mode.</li>
    <li>The <strong>s</strong> flag enables dot all mode allows a dot to match the newline character.</li>
    <li>The <strong>u</strong> enables full Unicode support, the flag enables correct processing of surrogate pairs.</li>
    <li>Sticky flag <strong>y</strong> sets the stick mode that allows search for the exact position of the text.</li>
  </ul>
</div>
  </div>
</details>

---

### How does the match method work with Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method myString.match(regexp) finds all matches of regexp in the string myString.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let myString = 'We will, we will rock you';

alert(myString.match(/we/gi)); // We,we (an array of 2 substrings that match)
```

  </div>
  </div>
</details>

---

### Can you explain the three regex modes of the match method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The match method has three working regex modes. First, if a regular expression has flag g, it returns an array of all matches. Second, if there is no such flag, it returns only the first match in the form of an array, with the whole match at index 0 and some additional details in properties. The array may have other indexes besides 0 if a part of the regular expression gets enclosed in parentheses. And finally, if there are no matches, null is returned (it does not matter if there’s flag g or not). This behavior is an essential nuance. If there are no matches, we do not receive an empty array but instead receive null. Forgetting about that may lead to errors, e.g.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// First Mode: Example
let myString = 'We will, we will rock you';

alert(myString.match(/we/gi)); // We,we (an array of 2 substrings that match)

// Second Mode: Example
let str = 'We will, we will rock you';

let result = str.match(/we/i); // without flag g

alert(result[0]); // We (1st match)
alert(result.length); // 1

// Details:
alert(result.index); // 0 (position of the match)
alert(result.input); // We will, we will rock you (source string)

// Third Mode: Example
let matches = 'JavaScript'.match(/HTML/) || [];

if (!matches.length) {
  alert('No matches'); // now it works
}
```

  </div>
  </div>
</details>

---

### Is there a way to handle empty or null values in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, when the result contains an empty or null value. We should subscribe to the match method by adding an empty array. If the length is empty or null, we should do a condition check and return a value.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Wrong Approach
let matches = 'JavaScript'.match(/HTML/); // = null

if (!matches.length) {
  // Error: Cannot read property 'length' of null
  alert('Error in the line above');
}

// Correct Approach
let matches = 'JavaScript'.match(/HTML/) || [];

if (!matches.length) {
  alert('No matches'); // now it works
}
```

  </div>
  </div>
</details>

---

### How does the string replace method work with Regular Expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The method str.replace(regexp, replacement) replaces regexp matches in string str with replacement (all matches if flag g is present; otherwise, only the first one). The replacement string is the second parameter. We can utilize specific character combinations in it to insert match pieces.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// no flag g
alert('We will, we will'.replace(/we/i, 'I')); // I will, we will

// with flag g
alert('We will, we will'.replace(/we/gi, 'I')); // I will, I will
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> An example with $& symbol<br /><br />

  <div></div>

```js
alert('I love HTML'.replace(/HTML/, '$& and JavaScript'));
// returns - I love HTML and JavaScript
```

  </div>
  </div>
</details>

---

### Is there a way to test for a string fragment using a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Basically, we should use the method regexp.test(str), which looks for at least one match, if found, returns true, otherwise false.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'I love JavaScript';
let regexp = /LOVE/i;

alert(regexp.test(str)); // true
```

  </div>
  </div>
</details>

---
