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
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, the character class `\d` represents any digit from 0 to 9. It's equivalent to the character set `[0-9]`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = '123 abc';
let match = str.match(/\d/g); // match is now ["1", "2", "3"]
```

  </div>
  </div>
</details>

---

### How would you describe the \w character class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, the character class `\w` represents any alphanumeric character including the underscore. It's equivalent to the character set `[A-Za-z0-9_]`.
  </div><br />
  <div><strong className="codeExample">Technical Details:</strong><br /><br />

  <div></div>

It includes:

- Uppercase letters (A-Z)
- Lowercase letters (a-z)
- Digits (0-9)
- The underscore (_)

Here's an example of how you might use it:

```javascript
let str = 'abc123_ def';
let match = str.match(/\w/g); // match is now ["a", "b", "c", "1", "2", "3", "_", "d", "e", "f"]
```

  </div>
  </div>
</details>

---

### Can you explain what \s character class signifies in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The \s character class corresponds to any whitespace character, such as spaces, tabs, or line breaks.
  </div><br />
  <div><strong className="codeExample">Technical Details:</strong><br /><br />

  <div></div>

This includes:

- Spaces
- Tabs (`\t`)
- Carriage returns (`\r`)
- New lines (`\n`)
- Form feeds (`\f`)
- Vertical tabs (`\v`)

It's a convenient way to match any kind of space, regardless of what kind it is.

Here's an example of how you might use it:

```javascript
let str = 'Hello World';
let match = str.match(/\s/g); 
console.log(match); // match is now [" "]
```

  </div>
  </div>
</details>

---

### What is the meaning of the shorthand \D?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, `\D` is a shorthand character class that matches any character that's not a digit (0-9). It's equivalent to the character class `[^0-9]`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "hello123";
let match = str.match(/\D/g);  // match will be ['h', 'e', 'l', 'l', 'o']
console.log(match);
```

Remember that JavaScript's regular expressions are case-sensitive, so `\D` and `\d` are not the same. While `\D` matches any non-digit character, `\d` matches any digit character.

  </div>
  </div>
</details>

---

### What does the \W character class refer to in JavaScript Regex?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, the \W (uppercase W) character class is used to find non-word characters. It's essentially the inverse of \w.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello world!";
let match = str.match(/\W/g);  // match will be [' ', '!']
console.log(match);
```

  </div>
  </div>
</details>

---

### How would you describe the \S character class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `\S` (uppercase S) character class is used to find any non-whitespace character. It is essentially the inverse of `\s` (lowercase s).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "hello world!";
let match = str.match(/\S/g);  
// match will be ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', '!']
```

---

:::note
The \s character class matches any whitespace character, including space ( ), tab (\t), carriage return (\r), new line (\n), vertical tab (\v), or form feed (\f).
:::

  </div>
  </div>
</details>

---

### What is the use of the '.' shorthand character class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, the `.` (dot) is a special character class that matches almost any character except for the newline character (`\n`), unless the `s` flag (dotAll flag) is used.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "hello world!";
let match = str.match(/./g);  
// match will be ['h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd', '!']
```

In this example, the regex `./g` matches every character in the string. The `g` at the end of the regex is a flag that makes the regex match globally, i.e., find all matches in the string instead of stopping after the first match. Here, it matches all the letters, the exclamation point, and the space.

However, it will not match the newline character. For example:

```javascript
let str = "hello\nworld!";
let match = str.match(/./g);  
// match will be ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd', '!']
```

Here, the newline character (`\n`) between "hello" and "world!" is not included in the match result. If you want to include newline characters in the `.` match, you can use the `s` flag:

```javascript
let str = "hello\nworld!";
let match = str.match(/./gs);  
// match will be ['h', 'e', 'l', 'l', 'o', '\n', 'w', 'o', 'r', 'l', 'd', '!']
```

In this example, the `s` flag makes the `.` match any character including newlines.

  </div>
  </div>
</details>

---

### If you want to match a digit and whitespace, what class combination would you use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you want to match a digit or a whitespace character, you would use the character classes for digits (`\d`) and whitespace (`\s`) inside a set of square brackets `[]`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's how you could do it:

```javascript
let str = "hello world123!";
let match = str.match(/[\d\s]/g);  
// match will be [' ', '1', '2', '3', ' ']
```

---

:::note
Note that inside a set of square brackets, you do not need to separate the character classes with a pipe `|` or anything else. The square brackets signify a character set and will match any single character that is represented inside the brackets. In this case, any digit or whitespace character will be matched.
:::

  </div>
  </div>
</details>

---

### What character class would you use to match only non-alphanumeric word characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, if you want to match non-alphanumeric word characters, you would use the `\W` (uppercase W) character class. This will match any character that is not included in the set `[A-Za-z0-9_]`.

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let str = "hello world123!";
let match = str.match(/\W/g);  
console.log(match); // match will be [" ", "!"]
```

  </div>
  </div>
</details>

---

### How would you match anything other than a digit or whitespace?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript regular expressions, if you want to match anything other than a digit or a whitespace character, you can combine the shorthand character classes for digits (\d) and whitespace (\s) inside a set of square brackets [] and precede it with the caret (^) symbol to negate the set.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello world123!";
let match = str.match(/[^\d\s]/g); 
console.log(match); // output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d", "!"]
```

  </div>
  </div>
</details>

---

### How can you match only digits and letters in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can match only digits and letters by using the \w (lowercase w) character class which matches any alphanumeric character (letters or digits) and the underscore. However, if you want to exclude the underscore, you'll have to define a custom character set using the square brackets [A-Za-z0-9].
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello_world123!";
let match = str.match(/[A-Za-z0-9]/g);  
console.log(match);

//////////////////////////////////////////

let str = "hello_world123!";
let match = str.match(/\w/g);
// ["h", "e", "l", "l", "o", "_", "w", "o", "r", "l", "d", "1", "2", "3"]
console.log(match);
```

  </div>
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
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "abcdef";
let match = str.match(/[abc\W]/g);  
// match will be ["a", "b", "c"]
console.log(match);
```

  </div>
  </div>
</details>

---

### What shorthand character would you use to match only non-whitespace characters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To match non-whitespace characters, you would use the \S shorthand character class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "Hello JavaScript!";
let match = str.match(/\S/g); 
// match will be "H", "e", "l", "l", "o", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t", "!"]
console.log(match);
```

  </div>
  </div>
</details>

---

### Can we use shorthand character classes in combination with quantifiers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use shorthand character classes in combination with quantifiers in JavaScript regular expressions. Quantifiers specify how many instances of a character, group, or character class must be present in the input for a match to be found.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello world123! 345";
let match = str.match(/\d+/g);  
// match will be ['123', '345']
console.log(match);
```

In this example, the regex /\d+/g matches one or more digits in the string. The g at the end of the regex is a flag that makes the regex match globally, or in other words, find all matches in the string instead of stopping after the first match. The plus sign + is a quantifier that matches one or more of the preceding character or character class. Here, it matches each group of digits as a whole string, rather than individual digits.

  </div>
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
  <div><strong>Interview Response:</strong> If you want to match only non-digits and non-alphanumeric characters, you would use a combination of the shorthand character classes for non-digits (\D) and non-alphanumeric characters (\W). However, these two classes overlap, as \D includes all non-digit characters, and \W includes all non-word characters (which includes all non-digits). Therefore, you only need to use \W.<br/><br/>The \W character class matches any character that is not included in the set [A-Za-z0-9_], including all non-alphanumeric characters such as punctuation and symbols, as well as whitespace.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let str = "hello world123!";
let match = str.match(/\W/g);  
// match will be [' ', , '!']
console.log(match);
```

  </div>
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
console.log('I love HTML5!'.match(/\s\w\w\w\w\d/)); // console.logs ' HTML5'
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

console.log(str.match(/\d/g).join('')); // 79031234567

// When we use \D we do not have to use the join method.
let str = '+7(903)-123-45-67';

console.log(str.replace(/\D/g, '')); // 79031234567
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
console.log('Z'.match(/./)); // Z

let regexp = /CS.4/;

console.log('CSS4'.match(regexp)); // CSS4
console.log('CS-4'.match(regexp)); // CS-4
console.log('CS 4'.match(regexp)); // CS 4 (space is also a character)\

console.log('CS4'.match(/CS.4/)); // null
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
console.log('1 - 5'.match(/\d-\d/)); // null, no match!

// Correct Approach
console.log('1 - 5'.match(/\d - \d/)); // 1 - 5, now it works

// or we can use \s class:
console.log('1 - 5'.match(/\d\s-\s\d/)); // 1 - 5, also works
```

  </div>
  </div>
</details>

---
