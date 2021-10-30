---
title: Conditional Branching
sidebar_position: 10
---

# Conditional Branching - Q&A

**JavaScript Fundamentals: Conditional branching: if, '?'**

### Can you execute more than one statement in an if statement?

**Interview Answer:** Yes, but they will have to be wrapped in curly braces {}. This improves readability and is recommended, even if there is only one statement to execute.

Example:

```js
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}
```

Source: <https://javascript.info/ifelse#the-if-statement>

### What type of conversion does the JavaScript “if” statement used?

**Answer:** The if (…) statement evaluates the expression in its parentheses and converts the result to a Boolean value of true or false.

Source: <https://javascript.info/ifelse#boolean-conversion>

### Can you pre-evaluate a condition for use in an if statement?

**Interview Answer:** Yes, we can pass a pre-evaluated condition in a value to an if statement.

Example:

```js
let cond = year == 2015; // equality evaluates to true or false
if (cond) {
  alert('Hello, World'); // returns Hello, World
}
```

Source: <https://javascript.info/ifelse#boolean-conversion>

### Is there a way to handle falsie conditions in an if statement?

**Interview Answer:** We can use an if else statement to handle false conditions.

**Technical Answer:** Yes, the “if” statement may contain an optional “else” block. It executes when the condition is falsie.

Example:

```js
let year = prompt('In which year was the ECMAScript-2015 published?', '');

if (year == 2015) {
  alert('You guessed it right!');
} else {
  alert('How can you be so wrong?'); // any value except 2015
}
```

Source: <https://javascript.info/ifelse#the-else-clause>

### If, you have several conditions you would like to test. What conditional statement do you have to use with an if statement?

**Interview Answer:** To test several conditions in an if statement you will have to add an “else if” statement. There can be more than one else if block. The final else is optional.

Example:

```js
let year = prompt('In which year was the ECMAScript-2015  published?', '');

if (year < 2015) {
  alert('Too early...');
} else if (year > 2015) {
  alert('Too late');
} else {
  alert('Exactly!');
}
```

Source: <https://javascript.info/ifelse#several-conditions-else-if>

### Can you assign a variable depending on a condition in an if statement?

**Answer:** Yes, you can assign a variable depending on a condition in an if statement.

Example:

```js
let accessAllowed;

let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

Source: <https://javascript.info/ifelse#conditional-operator>

### Is there a shorthand version of the if statement that you can use in JavaScript?

**Interview Answer:** We can use the ternary operator shorthand syntax.

**Technical Answer:** Yes, the condition/ternary (?) operator can be used to shorten the implementation of a conditional statement.

Example:

```js
// the comparison operator "age > 18" executes first anyway

// (no need to wrap it into parentheses)

let accessAllowed = age > 18 ? true : false;

In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same

let accessAllowed = age > 18;
```

Source: <https://javascript.info/ifelse#conditional-operator>
