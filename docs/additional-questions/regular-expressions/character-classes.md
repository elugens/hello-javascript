---
title: Character Classes
sidebar_position: 2
---

# Character Classes

**Regular Expressions: Character Classes**

<head>
  <title>Character Classes - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is a character class used for in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A character class is a special notation that matches any symbol from a certain set. The most common character classes is \d, \s, and \w used to add additional parameters for regular expressions to manipulate strings. A RegExp may contain both regular symbols and character classes.
    </div>
  </div>
</details>

Code Example:

```js
let str = 'Is there CSS4?';

let regexp = /CSS\d/;

alert(str.match(regexp)); // alerts CSS4
```

---

### Is it possible to use multiple character classes in regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use multiple character classes in regular expressions to manipulate string queries.
    </div>
  </div>
</details>

Code Example:

```js
alert('I love HTML5!'.match(/\s\w\w\w\w\d/)); // alerts ' HTML5'
```

---

### What is an inverse class in relation to regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For every character class there exists an “inverse class”, denoted with the same letter, but uppercased. An example of this is \D which finds a match for any character except \d, for instance a letter.
    </div>
  </div>
</details>

Code Example:

```js
// When we use \d we have to use the join method.

let str = '+7(903)-123-45-67';

alert(str.match(/\d/g).join('')); // 79031234567
// When we use \D we do not have to use the join method.

let str = '+7(903)-123-45-67';

alert(str.replace(/\D/g, '')); // 79031234567
```

---

### What does the dot represent in a regular expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A dot (.) is a special character class that matches any character except a new line. It should be noted that a dot means “any character”, but not the “absence of a character”. There must be a character to match it. By default, a dot does not match the new line character \n.
    </div>
  </div>
</details>

Code Example:

```js
alert('Z'.match(/./)); // Z
let regexp = /CS.4/;

alert('CSS4'.match(regexp)); // CSS4
alert('CS-4'.match(regexp)); // CS-4
alert('CS 4'.match(regexp)); // CS 4 (space is also a character)\
alert('CS4'.match(/CS.4/)); // null

// no match because there is no character for the dot
```

---

### What character class should you use with dot to accept all characters, like the (\n) new line character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, a dot does not match the newline character \n. There are many situations when we would like a dot to mean literally “any character”, newline included. To include all characters, we must use the "s" flag. It should be noted, the “s” flag is not supported in Internet Explorer.
    </div>
  </div>
</details>

Code Example:

```js
// Without the "s" flag

alert('A\nB'.match(/A.B/)); // null (no match)
// With the "s" flag

alert('A\nB'.match(/A.B/s)); // A\nB (match!)
```

---

### When we need to use the “s” flag, is there a way to ensure it works in all browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Since, the s flag is not supported in IE. There is an alternative, that works everywhere, We can use a regular expression [\s\S] to match any character. The pattern [\s\S] literally says: “a space character OR not a space character”. In other words, “anything”. We could use another pair of complementary classes, such as [\d\D], that doesn’t matter. Or even the [^] – as it means match any character except nothing. Also we can use this trick if we want both kind of “dots” in the same pattern: the actual dot . behaving the regular way (“not including a newline”), and also a way to match “any character” with [\s\S] or alike.
    </div>
  </div>
</details>

Code Example:

```js
alert('A\nB'.match(/A[\s\S]B/)); // A\nB (match!)
```

---

### Why is it important to pay attention to spaces for regular expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a regular expression does not take spaces into account, it may fail to work. We can fix it by adding spaces into the regular expression. A space is a character. Equal in importance with any other character. We cannot add or remove spaces from a regular expression and expect it to work the same. In other words, in a regular expression all character’s matter, spaces too.
    </div>
  </div>
</details>

Code Example:

```js
// Wrong Approach

alert('1 - 5'.match(/\d-\d/)); // null, no match!
// Correct Approach

alert('1 - 5'.match(/\d - \d/)); // 1 - 5, now it works
// or we can use \s class:

alert('1 - 5'.match(/\d\s-\s\d/)); // 1 - 5, also works
```

---
