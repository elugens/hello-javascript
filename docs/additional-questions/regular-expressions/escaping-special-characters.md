---
title: Escaping Characters
sidebar_position: 7
---

# Escaping Special Characters

**Regular expressions: Escaping, special characters.**

### How do you escape a special character in a regular expression?

**Interview Answer:** To match a character having special meaning in regex, you need to use a escape sequence prefix with a backslash (\). E.g., \. matches "."; regex \+ matches "+"; and regex \( matches "(". You also need to use regex \\ to match "\" (back-slash). Regex recognizes common escape sequences such as \n for newline, \t for tab, \r for carriage-return, \nnn for a up to 3-digit octal number, \xhh for a two-digit hex code, \uhhhh for a 4-digit Unicode, \uhhhhhhhh for a 8-digit Unicode.

Source: <https://javascript.info/regexp-escaping>

### Is a forward slash “/” a special character in regular expressions?

**Interview Answer:** A slash symbol `/` is not a special character, but in JavaScript it is used to open and close the regexp: /...pattern.../, so we should escape it too when we are attempting to match it. On the other hand, if we are not using /.../, but create a regexp using new RegExp, then we do not need to escape it.

Code Example:

```js
alert('/'.match(/\//)); // '/'
// Using the RegExp Object

alert('/'.match(new RegExp('/'))); // finds /
```

Source: <https://javascript.info/regexp-escaping#a-slash>

### When are calling the new RegExp object, do we have to use the escape character in our regular expressions?

**Interview Answer:** If we are creating a regular expression with new RegExp, then we do not have to escape `/`, but need to do some other escaping like the `\d` flag. The reason that this happens is that strings consume backslashes when we use the RegExp object constructor. The approach we should use is an additional backslash to escape special flags like \d. Instead of `\d`, we need to use `\\d`.

Code Example:

```js
// Wrong Approach

let regexp = new RegExp('d.d');

alert('Chapter 5.1'.match(regexp)); // null, when we ant 5.1
// Correct Approach

let regexp = new RegExp('\\d.\\d');

alert('Chapter 5.1'.match(regexp)); // returns 5.1
```

Source: <https://javascript.info/regexp-escaping#a-slash>
