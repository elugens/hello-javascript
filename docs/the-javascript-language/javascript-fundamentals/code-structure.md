---
title: Code Structure
sidebar_position: 2
---

# Code Structure

## JavaScript Code Structure - Q&A

**JavaScript Fundamentals: CODE STRUCTURE**

**Question:** **Define what a statement is in JavaScript code structure?**

**Interview Answer:** Statements are syntax constructs and commands that perform actions. Usually, statements are written on separate lines to make the code more readable.

**Technical Answer:** Statements are used in JavaScript to control its program flow. Unlike properties, methods, and events, which are fundamentally tied to the object that owns them, statements are designed to work independently of any JavaScript object.

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

**Question:** **How are statements separated in JavaScript?**

**Answer:** Statements are separated in JavaScript with the implementation of a semi-colon.

Example:

```js
alert('Hello');
alert('World');
```

Source: <https://javascript.info/structure#semicolon>

**Question:** **Can semi-colons be omitted in JavaScript?**

**Interview Answer:** Yes, but it is not recommended.

**Answer:** Yes, but it is not considered good code etiquette and should not be done. JavaScript interprets the line break as an “implicit” semicolon. This is called an automatic semicolon insertion.

Code Example:

```js
alert('Hello');
alert('World');
```

Source: <https://javascript.info/structure#semicolon>

**Question:** **Does JavaScript always interpret line breaks as the end of a statement?**

**Interview Answer:** There are cases when a newline does not mean a semicolon and may result in an error.

**Technical Answer:** There are cases when a newline does not mean a semicolon and may result in an error. The recommendation is to put semicolons between statements even if they are separated by newlines. This rule is widely adopted by the JavaScript community.

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

**Question:** **How are single-line comments created in JavaScript?**

**Interview Answer:** Single-line comments start with two forward slash characters //.

Example:

```js
// This comment occupies a line of its own.

alert('Hello');

alert('World'); // This comment follows the statement
```

Source: <https://javascript.info/structure#code-comments>

**Question:** **How are multi-line comments created in JavaScript?**

**Interview Answer:** Multiline comments start with a forward slash and an asterisk /\* and end with an asterisk and a forward slash \*/.

Example:

```js
\*
An example with two messages.
This is a multiline comment.
*/

alert('Hello');

alert('World');
```

Source: <https://javascript.info/structure#code-comments>

**Question:** **Are nested comments supported in JavaScript?**

**Interview Answer:** No, nested comments are not supported. It will result in a syntax error.

Example:

```js
\*

  \* nested comment ?!? */

*/ // results in an error

alert( 'World' );
```

Source: <https://javascript.info/structure#code-comments>
