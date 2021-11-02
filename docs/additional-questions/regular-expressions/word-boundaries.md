---
title: Word Boundary
sidebar_position: 6
---

# Word Boundary

**Regular Expressions: Word Boundary**

<head>
  <title>Word Boundaries - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is a word boundary \b in regular expressions (regexp)?

**Interview Answer:** A word boundary \b is a test, just like ^ and $. When the regexp engine (program module that implements searching for regexps) comes across \b, it checks that the position in the string is a word boundary. There are three different positions that qualify as word boundaries. For instance, at string start, if the first string character is a word character \w. Also, between two characters in the string, where one is a word character \w and the other is notm and at string end, if the last string character is a word character \w. We can use \b not only with words, but with digits as well.

Code Example:

```js
alert('Hello, Java!'.match(/\bJava\b/)); // Java
alert('Hello, JavaScript!'.match(/\bJava\b/)); // null
// More Examples

alert('Hello, Java!'.match(/\bHello\b/)); // Hello
alert('Hello, Java!'.match(/\bJava\b/)); // Java
alert('Hello, Java!'.match(/\bHell\b/)); // null (no match)
alert('Hello, Java!'.match(/\bJava!\b/)); // null (no match)
// Digit Boundaries

alert('1 23 456 78'.match(/\b\d\d\b/g)); // returns 23,78
alert('12,34,56'.match(/\b\d\d\b/g)); // returns 12,34,56
```

Source: <https://javascript.info/regexp-boundary>

### Does a word boundary work on Non-Latin alphabets?

**Interview Answer:** The word boundary test \b checks that there should be \w on the one side from the position and "not \w" – on the other side. But \w means a Latin letter a-z (or a digit or an underscore), so the test does not work for other characters, e.g., Cyrillic letters or Hieroglyphs.

Source: <https://javascript.info/regexp-boundary>
