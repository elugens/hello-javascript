---
title: Code Structure
sidebar_position: 2
---

# Code Structure

**JavaScript Fundamentals: Code Structure**

<head>
  <title>Code Structure - JavaScript Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Define what a statement is in JavaScript code structure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Statements are syntax constructs and commands that perform actions. Usually, statements are written on separate lines to make the code more readable.
  </div><br />
  <div><strong>Technical Response:</strong> Statements are used in JavaScript to control its program flow. Unlike properties, methods, and events, which are fundamentally tied to the object that owns them, statements are designed to work independently of any JavaScript object.
  </div>
  </div>
</details>

Code Example:

```js
// This is a single statement

alert('Hello');

// This is a set of statements

alert('Hello');
alert('World');

// Set of statements on separate lines (recommended)

alert('Hello');

alert('World');
```

Source: <https://javascript.info/structure#statements>

### How are statements separated in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  Statements are separated in JavaScript with the implementation of a semi-colon.</div>
  </div>
</details>

Code Example:

```js
alert('Hello');
alert('World');
```

Source: <https://javascript.info/structure#semicolon>

### Can semi-colons be omitted in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but it is not recommended.</div><br />
  <div><strong>Technical Response:</strong> Yes, but it is not considered good code etiquette and should not be done. JavaScript interprets the line break as an “implicit” semicolon. In the JavaScript community, we call this an automatic semicolon insertion.
  </div>
  </div>
</details>

Code Example:

```js
alert('Hello');
alert('World');
```

Source: <https://javascript.info/structure#semicolon>

### Does JavaScript always interpret line breaks as the end of a statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are cases when a newline does not mean a semicolon and may result in an error.</div><br />
  <div><strong>Technical Response:</strong> There are cases when a newline does not mean a semicolon and may result in an error. The recommendation is to put semicolons between statements even if they are separated by newlines. This rule is widely adopted by the JavaScript community.
  </div>
  </div>
</details>

Code Example:

```js
// This will work…

alert(3 + 1 + 2);

// This will result in an error…

alert('There will be an error') // No semi-colon
  [(1, 2)].forEach(alert); // results in an error
// But everything is fine again if we add a semicolon after alert:

alert('All fine now'); // uses a semi-colon alerts All fine now
[1, 2].forEach(alert); // alerts 1 and then 2
```

Source: <https://javascript.info/structure#semicolon>

### How are single-line comments created in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Single-line comments start with two forward slash characters `//`.</div>
  </div>
</details>

Code Example:

```js
// This comment occupies a line of its own.

alert('Hello');

alert('World'); // This comment follows the statement
```

Source: <https://javascript.info/structure#code-comments>

### How are multi-line comments created in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Multiline comments start with a forward slash and an asterisk <strong>/*</strong> and end with an asterisk and a forward slash <strong>*/</strong>.</div>
  </div>
</details>

Code Example:

```js
/*
An example with two messages.
This is a multiline comment.
*/

alert('Hello');

alert('World');
```

Source: <https://javascript.info/structure#code-comments>

### Are nested comments supported in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, nested comments are not supported in JavaScript comments. It will result in a syntax error.</div>
  </div>
</details>

Example:

```js
/* nested comment ?!? */

// results in an error

alert('World');
```

Source: <https://javascript.info/structure#code-comments>
