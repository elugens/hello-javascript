---
title: Patterns and Flags
sidebar_position: 1
---

# Patterns and Flags

**Regular expression**

**Regular expressions: Patterns and flags**

### What is a regular expression?

**Interview Answer:** Regular expressions are patterns with optional flags that provide a powerful way to search and replace in text. In JavaScript, they are available via the RegExp object, as well as being integrated in methods of strings. Regular expressions are integrated with string methods.

Source: <https://javascript.info/regexp-introduction>

### What are the two syntaxes used to create a regular expression?

**Interview Answer:** There are two syntaxes that can be used to create a regular expression object including the long and short syntaxes. The long syntax uses the RegExp object with optional flags and the short syntax uses forward slashes with optional flags. Slashes /.../ tell JavaScript that we are creating a regular expression. They play the same role as quotes for strings. In both cases regexp becomes an instance of the built-in RegExp class.

**Syntax Examples:**

```js
// Long Syntax

regexp = new RegExp('pattern', 'flags');

// Short Syntax

regexp = /pattern/; // no flags
regexp = /pattern/gim; // with flags g,m and i (to be covered soon)
```

Source: <https://javascript.info/regexp-introduction#regular-expressions>

### Can you name the six flags used in regular expressions?

**Interview Answer:** Regular expressions may have flags that affect the search. There are only 6 of them in JavaScript including the i, g, m, s, u, and y regular expression flags:

- With the **i** flag the search is set to case insensitive.
- The **g** flag the search is set to global and looks for all matches, without it only the first search match is returned.
- The **m** flag represents a query in multiline mode.
- The **s** flag enables dot all mode allows a dot to match the newline character.
- The **u** enables full Unicode support, the flag enables correct processing of surrogate pairs.
- Sticky flag **y** sets the stick mode that allows search for the exact position of the text.

Source: <https://javascript.info/regexp-introduction#flags>

### How does the match method work with Regular Expressions?

**Interview Answer:** The method myString.match(regexp) finds all matches of regexp in the string myString.

Code Example:

```js
let myString = 'We will, we will rock you';

alert(myString.match(/we/gi)); // We,we (an array of 2 substrings that match)
```

Source: <https://javascript.info/regexp-introduction#searching-str-match>

### Can you explain the three regex modes of the match method?

**Interview Answer:** The match method has three working regex modes. First, if a regular expression has flag g, it returns an array of all matches. Second, if there is no such flag it returns only the first match in the form of an array, with the full match at index 0 and some additional details in properties. The array may have other indexes, besides 0 if a part of the regular expression is enclosed in parentheses. And, finally, if there are no matches, null is returned (does not matter if there’s flag g or not). This an especially important nuance. If there are no matches, we do not receive an empty array, but instead receive null. Forgetting about that may lead to errors, e.g.

Code Example:

```js
// First Mode: Example

let myString = 'We will, we will rock you';

alert(myString.match(/we/gi)); // We,we (an array of 2 substrings that match)
// Second Mode: Example

let str = 'We will, we will rock you';

let result = str.match(/we/i); // without flag g
alert(result[0]); // We (1st match)
alert(result.length); // 1
// Details:

alert(result.index); // 0 (position of the match)
alert(result.input); // We will, we will rock you (source string)
// Third Mode: Example

let matches = 'JavaScript'.match(/HTML/) || [];

if (!matches.length) {
  alert('No matches'); // now it works
}
```

Source: <https://javascript.info/regexp-introduction#searching-str-match>

### Is there a way to handle empty or null values in regular expressions?

**Interview Answer:** Yes, when a there is an empty or null value in the result. We should add an empty array to the match method that we are subscribing to. We should also run a condition check and return a value if the length is empty or null.

Code Example:

```js
// Wrong Approach

let matches = 'JavaScript'.match(/HTML/); // = null
if (!matches.length) {
  // Error: Cannot read property 'length' of null

  alert('Error in the line above');
}

// Correct Approach

let matches = 'JavaScript'.match(/HTML/) || [];

if (!matches.length) {
  alert('No matches'); // now it works
}
```

Source: <https://javascript.info/regexp-introduction#searching-str-match>

### How does the string replace method work with Regular Expressions?

**Interview Answer:** The method str.replace(regexp, replacement) replaces matches found using regexp in string str with replacement (all matches if there’s flag g, otherwise, only the first one). The second argument is the replacement string. We can use special character combinations in it to insert fragments of the match.

Code Example:

```js
// no flag g

alert( "We will, we will".replace(/we/i, "I") ); // I will, we will

// with flag g

alert( "We will, we will".replace(/we/ig, "I") ); // I will, I will


An example with $& symbol:

alert( "I love HTML".replace(/HTML/, "$& and JavaScript") ); 

// returns - I love HTML and JavaScript
```

Source: <https://javascript.info/regexp-introduction#replacing-str-replace>

### Is there a way to test for a string fragment using a regular expression?

**Interview Answer:** Basically, we should use the method regexp.test(str), which looks for at least one match, if found, returns true, otherwise false.

Code Example:

```js
let str = 'I love JavaScript';

let regexp = /LOVE/i;

alert(regexp.test(str)); // true
```

Source: <https://javascript.info/regexp-introduction#testing-regexp-test>
