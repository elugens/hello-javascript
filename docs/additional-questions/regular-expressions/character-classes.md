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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CharClassesSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Character Classes | Regular Expressions Interview Questions</title>
</head>

**Regular Expressions: Character Classes**

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

console.log(str.match(regexp)); // logs CSS4
```

  </div>
  </div>
</details>

---

### What does the character class \d represent in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \d character class represents any digit from 0 to 9.
  </div><br />
  </div>
</details>

---

### How would you describe the \w character class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \w character class stands for any alphanumeric character, including underscore.
  </div><br />
  </div>
</details>

---

### Can you explain what \s character class signifies in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \s character class corresponds to any whitespace character, such as spaces, tabs, or line breaks.
  </div><br />
  </div>
</details>

---

### What is the meaning of the shorthand \D?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \D represents any non-digit character.
  </div><br />
  </div>
</details>

---

### What does the \W character class refer to in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \W character class refers to any non-alphanumeric character, excluding underscore.
  </div><br />
  </div>
</details>

---

### How would you describe the \S character class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \S character class denotes any non-whitespace character.
  </div><br />
  </div>
</details>

---

### What is the use of the '.' shorthand character class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '.' character class matches any character except newline.
  </div><br />
  </div>
</details>

---

### If you want to match a digit or whitespace, what class combination would you use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For a digit or whitespace, use the combination \d or \s.
  </div><br />
  </div>
</details>

---

### What character class would you use to match only non-alphanumeric characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match non-alphanumeric characters, you can use the \W character class.
  </div><br />
  </div>
</details>

---

### How would you match anything other than a digit or whitespace?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match anything other than a digit or whitespace, use the combination \D or \S.
  </div><br />
  </div>
</details>

---

### How can you match only digits and letters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match only digits and letters, you can use the \w character class.
  </div><br />
  </div>
</details>

---

### If you want to match either digits or alphanumeric characters, which classes would you use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match either digits or alphanumeric characters, you can use \d or \w.
  </div><br />
  </div>
</details>

---

### How can we use shorthand character classes within a character set?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can include shorthand character classes within brackets like [abc\w] to match 'a', 'b', 'c', or any alphanumeric character.
  </div><br />
  </div>
</details>

---

### What shorthand character would you use to match only non-whitespace characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match non-whitespace characters, you would use the \S shorthand character class.
  </div><br />
  </div>
</details>

---

### Can we use shorthand character classes in combination with quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use them with quantifiers. For instance, \d{2,4} will match between 2 and 4 digits.
  </div><br />
  </div>
</details>

---

### What's the difference between '.' and \w in JavaScript regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '.' matches any character except newline, while \w matches only alphanumeric characters and underscore.
  </div><br />
  </div>
</details>

---

### If I want to match only non-digits and non-alphanumeric characters, what combination should I use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For non-digits and non-alphanumeric characters, use the combination \D or \W.
  </div><br />
  </div>
</details>

---

### Is it possible to use multiple character classes in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's possible to use multiple shorthand character classes in JavaScript regular expressions. For example, \d\s\w would match a digit followed by a whitespace and then an alphanumeric character.
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
  <div><strong>Interview Response:</strong> In regular expressions, an inverse class matches any character that's not in a defined set. Shorthand for inverse classes include `\D` (non-digits), `\W` (non-word characters), and `\S` (non-whitespace).
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
  <div><strong>Interview Response:</strong> The dot (.) in JavaScript regular expressions matches any character except newline (\n). To make it match all characters including newline, use the 's' (dotAll) flag, like /./s.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example demonstrating the usage of the 's' flag to match newline characters:

```javascript
let regex = /./s;
console.log(regex.test('\n')); // This will log 'true'
```

In this code, the `test()` method checks if the string (in this case, a newline character) matches the regular expression (any character, including newline due to the 's' flag), and logs the result.

  </div>
  </div>
</details>

---

### When we need to use the “s” flag, is there a way to ensure it works in all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Since the "s" flag is not supported in all browsers. To ensure cross-browser compatibility, consider using a workaround like [\s\S] to match any character, including newlines.
    </div><br />
  <div><strong>Technical Response:</strong> Because IE does not support the s flag. We can use a regular expression [\s\S] to match any character as an alternative that works everywhere. [\s\S]  means "a space character OR not a space character." In other words, "everything." It doesn't matter whether we use another pair of complimentary classes, such as [\d\D]. Or even [^] - which means "match any character except nothing." Also, we may use this approach if we want two types of "dots" in the same pattern: the usual dot acting normally ("without containing a newline") and a way to match "any character" with [\s\S] or something similar.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log('A\nB'.match(/A[\s\S]B/)); // A\nB (match!)
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
