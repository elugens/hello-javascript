---
title: The "Switch" Statement
sidebar_position: 14
---

# The "Switch" Statement

**JavaScript Fundamentals: The "Switch" Statement**

<head>
  <title>The "Switch" Statement - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the benefits of using a Switch statement?

**Interview Answer:** A switch statement can replace multiple if checks, it is more descriptive, and easier to read.

**Technical Answer:** A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants and it is easier to read.

Source: <https://javascript.info/switch>

### How does the Switch statement work?

**Interview Answer:** The switch statement works by checking the initial value against the case values. If the initial value equals one of the case values, then it stops. A default value is used if the case is not found to equal the initial value.

Syntax:

```js
switch(x) {

  case 'value1':  // if (x === 'value1')

  ...

  break;

  case 'value2':  // if (x === 'value2')

  ...

  break;

  default:

  ...

  break;

}
```

Source: <https://javascript.info/switch#the-syntax>

### Do you have to use the break directive in the Switch statement?

**Interview Answer:** No, but caution should be used because the execution continues with the next case without any checks. It is recommended that we use a break statement.

An example without break:

```js
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Too small');

  case 4:
    alert('Exactly!');

  case 5:
    alert('Too big');

  default:
    alert("I don't know such values");
}

// Output:

// Exactly

// Too Big

// I don't know such values
```

Source: <https://javascript.info/switch#an-example>

### Can you use expressions in switch/case arguments?

**Interview Answer:** Yes, both switch and case allow arbitrary expressions.

Example:

```js
let a = '1';

let b = 0;

switch (+a) {

case b + 1:

console.log('this runs, because +a is 1, exactly equals b+1');

break;

default:

console.log("this doesn't run");

}

// Output: this runs, because +a is 1, exactly equals b+1

//////////////////////////////////////

let a = 10;

let b = 0;

switch (a \* 10) {

case 100:

console.log('this runs, because +a is 1, exactly equals b+1');

break;

default:

console.log("this doesn't run");

}

// Output: this runs, because a * 10 = 100
```

Source: <https://javascript.info/switch#an-example>

### Can you group switch cases as variant options?

**Interview Answer:** Yes, several variants of the case which share the same return code can be grouped.

For example, if we want the same code to run for case 3 and case 5:

```js
let a = 3;

switch (a) {
  case 4:
    alert('Right!');

    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');

    alert("Why don't you take a math class?");

    break;

  default:
    alert('The result is strange. Really.');
}
```

Source: <https://javascript.info/switch#grouping-of-case>

### Does a switch statement have a strict equality check on value matching?

**Interview Answer:** Yes, the values must be of the same data type to match. The case value that does not, will not execute.

Example:

```js
let arg = prompt('Enter a value?');

switch (arg) {
  case '0':

  case '1':
    alert('One or zero');

    break;

  case '2':
    alert('Two');

    break;

  case 3:
    alert('Never executes!');

    break;

  default:
    alert('An unknown value');
}
```

Source: <https://javascript.info/switch#type-matters>
