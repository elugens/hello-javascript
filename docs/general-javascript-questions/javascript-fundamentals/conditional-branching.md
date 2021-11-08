---
title: Conditional Branching
sidebar_position: 10
---

# Conditional Branching

**JavaScript Fundamentals: Conditional Branching**

<head>
  <title>Conditional Branching - Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you execute more than one statement in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but they will have to be wrapped in curly braces {}. This improves readability and is recommended, even if there is only one statement to execute.</div>
  </div>
</details>

Code Example:

```js
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}
```

Source: <https://javascript.info/ifelse#the-if-statement>

### What type of conversion does the JavaScript “if” statement used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The if (…) statement evaluates the expression in its parentheses and converts the result to a Boolean value of true or false.</div>
  </div>
</details>

Source: <https://javascript.info/ifelse#boolean-conversion>

### Can you pre-evaluate a condition for use in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can pass a pre-evaluated condition in a value to an if statement.</div>
  </div>
</details>

Code Example:

```js
let cond = year == 2015; // equality evaluates to true or false
if (cond) {
  alert('Hello, World'); // returns Hello, World
}
```

Source: <https://javascript.info/ifelse#boolean-conversion>

### Is there a way to handle falsie conditions in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use an if else statement to handle false conditions.</div><br />
  <div><strong>Technical Response:</strong> Yes, the “if” statement may contain an optional “else” block. It executes when the condition is falsie.
  </div>
  </div>
</details>

Code Example:

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

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To test several conditions in an if statement you will have to add an “else if” statement. There can be more than one else if block. The final else is optional.</div>
  </div>
</details>

Code Example:

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

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can assign a variable depending on a condition in an if statement.</div>
  </div>
</details>

Code Example:

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

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the ternary operator shorthand syntax.</div><br />
  <div><strong>Technical Response:</strong> Yes, the condition/ternary (?) operator can be used to shorten the implementation of a conditional statement.
  </div>
  </div>
</details>

Code Example:

```js
// the comparison operator "age > 18" executes first anyway

// (no need to wrap it into parentheses)

let accessAllowed = age > 18 ? true : false;

In the example above, you can avoid using the question mark operator because the comparison itself returns true/false:

// the same

let accessAllowed = age > 18;
```

Source: <https://javascript.info/ifelse#conditional-operator>
