---
title: Character Classes
description: Character Classes are used to match text against regular expressions. A character class is a special notation that matches any symbol from a set. Questions
sidebar_position: 2
sidebar_label: Character Classes
keywords:
  - character classes
  - character class
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
  - character classes
  - character class
  - regular expressions
  - interview answers
  - interview questions
---

<head>
  <title>Character Classes | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Character Classes**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a character class used for in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A character class is a special notation that matches any symbol from a particular set. The most common character classes are \d, \s, and \w used to add additional parameters for regular expressions to manipulate strings. A RegExp may contain both regular symbols and character classes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = 'Is there CSS4?';
let regexp = /CSS\d/;

alert(str.match(regexp)); // alerts CSS4
```

  </div>
  </div>
</details>

---

### Is it possible to use multiple character classes in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use multiple character classes in regular expressions to manipulate string queries.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('I love HTML5!'.match(/\s\w\w\w\w\d/)); // alerts ' HTML5'
```

  </div>
  </div>
</details>

---

### In the context of regular expressions, what is an inverse class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There is a "inverse class" for each character class, represented by the same letter but in uppercase. We may use \D as the inverse class for \d, which has certain advantages in reducing reliance on methods like str.match(/\d/g).join('').
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// When we use \d we have to use the join method.
let str = '+7(903)-123-45-67';

alert(str.match(/\d/g).join('')); // 79031234567

// When we use \D we do not have to use the join method.
let str = '+7(903)-123-45-67';

alert(str.replace(/\D/g, '')); // 79031234567
```

  </div>
  </div>
</details>

---

### What does the dot represent in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A dot (.) is a unique character class that matches any character except a new line. We should note that a dot means “any character”, but not the “absence of a character”. There must be a character to match it. By default, a dot does not match the newline character \n.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('Z'.match(/./)); // Z

let regexp = /CS.4/;

alert('CSS4'.match(regexp)); // CSS4
alert('CS-4'.match(regexp)); // CS-4
alert('CS 4'.match(regexp)); // CS 4 (space is also a character)\

alert('CS4'.match(/CS.4/)); // null
// no match because there is no character for the dot
```

  </div>
  </div>
</details>

---

### What character class should you use with dot to accept all characters, like the (\n) newline character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, a dot does not match the newline character \n. There are many situations when we would like a dot to mean literally “any character”, newline included. To include all characters, we must use the "s" flag. We should note that Internet Explorer does not support the “s” flag.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Without the "s" flag
alert('A\nB'.match(/A.B/)); // null (no match)

// With the "s" flag
alert('A\nB'.match(/A.B/s)); // A\nB (match!)
```

  </div>
  </div>
</details>

---

### When we need to use the “s” flag, is there a way to ensure it works in all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Because IE does not support the s flag. We can use a regular expression [\s\S] to match any character as an alternative that works everywhere. [\s\S]  means "a space character OR not a space character." In other words, "everything." It doesn't matter whether we use another pair of complimentary classes, such as [\d\D]. Or even [^] - which means "match any character except nothing." Also, we may use this approach if we want two types of "dots" in the same pattern: the usual dot acting normally ("without containing a newline") and a way to match "any character" with [\s\S] or something similar.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
alert('A\nB'.match(/A[\s\S]B/)); // A\nB (match!)
```

  </div>
  </div>
</details>

---

### Why is it important to pay attention to spaces for regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a regular expression does not take spaces into account, it may fail to work. We can fix it by adding spaces into the regular expression. Space is a character and equal in importance to any other character. We cannot add or remove spaces from a regular expression and expect it to work the same. In other words, all characters matter spaces in a regular expression.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Wrong Approach
alert('1 - 5'.match(/\d-\d/)); // null, no match!

// Correct Approach
alert('1 - 5'.match(/\d - \d/)); // 1 - 5, now it works

// or we can use \s class:
alert('1 - 5'.match(/\d\s-\s\d/)); // 1 - 5, also works
```

  </div>
  </div>
</details>

---
