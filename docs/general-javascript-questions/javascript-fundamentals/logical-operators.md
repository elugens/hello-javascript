---
title: Logical Operators
sidebar_position: 11
---

# Logical Operators

**JavaScript Fundamentals: Logical Operators**

<head>
  <title>Logical Operators - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What makes the logical || (OR), && (AND), ! (NOT) operators unique?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical operators can be applied to values of any type; they are not limited to a Boolean type.</div>
  </div>
</details>

Source: <https://javascript.info/logical-operators>

### If an operand is not a Boolean, what does the logical || OR do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an operand is not a Boolean, it is converted to a Boolean for the evaluation. For instance, the number 1 is treated as true, the number 0 is false.</div>
  </div>
</details>

Code Example:

```js
//Logical OR returns the first truthy value,

// or the last value if there are none

console.log('1' || '0'); // returns 1
console.log(1 || 0); // returns 1
console.log(0 || 0); // returns 0
```

Source: <https://javascript.info/logical-operators#or>

### How does logical OR “||” function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The OR || operator does the following: <br /><br />
  <ol>
    <li>Evaluates operands from left to right.</li>
    <li>For each operand, converts it to Boolean. If the result is true, stops and returns the original value of that operand.</li>
    <li>If all operands have been evaluated (i.e., all were false), returns the last operand.</li>
  </ol>

</div>
  </div>
</details>

Code Example:

```js
alert(1 || 0); // 1 (1 is truthy)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy, returns the last value)
```

:::note
Logical OR “||” finds the first truthy value or the last value if there are none.
:::

Source: <https://javascript.info/logical-operators#or-finds-the-first-truthy-value>

### What is the definition of a short-circuit evaluation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  When JavaScript evaluates an OR expression, if the first operand is true, JavaScript will short-circuit by not proceeding to the second operand.</div>
  </div>
</details>

Code Example:

```js
true || alert('not printed');

false || alert('printed');
```

Source: <https://javascript.info/logical-operators#or-finds-the-first-truthy-value>

### What does the Logical && (AND) return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  Logical && (AND) returns true if both operands are truthy and false otherwise.</div>
  </div>
</details>

Code Example:

```js
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

Source: <https://javascript.info/logical-operators#and>

### What type of conversion does the Logical && (AND) perform?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  Logical && (AND) converts all operands to Boolean values, true or false.</div>
  </div>
</details>

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

### What steps are performed in the use of the Logical && (AND) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The AND && operator does the following:<br /><br />
  <ol>
    <li>Evaluates operands from left to right.</li>
    <li>For each operand, converts it to a Boolean. If the result is false, stops and returns the original value of that operand.</li>
    <li>If all operands have been evaluated (i.e. all were truthy), returns the last operand.</li>
  </ol>
</div>
  </div>
</details>

Code Example:

```js
// if the first operand is truthy,

// AND returns the second operand:

alert(1 && 0); // 0
alert(1 && 5); // 5
// if the first operand is falsie,

// AND returns it. The second operand is ignored

alert(null && 5); // null
alert(0 && 'no matter what'); // 0
```

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

### What are the differences between Logical || (OR) and && (AND) operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The difference is that AND returns the first falsie value while OR returns the first truthy.</div>
  </div>
</details>

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

### Which of the two, Logical || `(OR)` and && `(AND)` operators have the higher operator precedence?

**Interview Answer:** The AND operator has a higher precedence than the OR operator.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The AND operator has a higher precedence than the OR operator.</div><br />
  <div><strong>Technical Response:</strong> The precedence of AND && operator is higher than OR ||. So, the code a && b || c && d is essentially the same as if the && expressions were in parentheses: `(a && b) || (c && d)`.
  </div>
  </div>
</details>

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

### Can you replace conditional if with OR (||) or && (AND)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically Yes, but it is not recommended because it reduces readability.</div><br />
  <div><strong>Technical Response:</strong> Technically it can be done, but it is not recommended. Although, the variant with && appears shorter, an if statement is more obvious and tends to be a little bit more readable.
  </div>
  </div>
</details>

Code Example:

```js
let x = 1;

x > 0 && alert('Greater than zero!');

// the if example is cleaner and obvious

let x = 1;

if (x > 0) alert('Greater than zero!');
```

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

### What steps are performed in the use of the Logical ! (NOT) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The operator accepts a single argument, converts it to a boolean, and returns the inverse value.</div><br />
  <div><strong>Technical Response:</strong> The operator accepts a single argument and does the following:<br /><br />
  <ol>
    <li>Converts the operand to a Boolean type: true/false.</li>
    <li>Returns the inverse value.</li>
  </ol>
  </div>
  </div>
</details>

Code Example:

```js
alert(!true); // false
alert(!0); // true
```

Source: <https://javascript.info/logical-operators#not>

### What happens when we apply the !! (DOUBLE NOT) to a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The value is inverted twice returning it to its original boolean value.</div><br />
  <div><strong>Technical Response:</strong> The first NOT converts the value to Boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain Value-to-Boolean conversion.
  </div>
  </div>
</details>

Code Example:

```js
alert(!!'non-empty string'); // true
alert(!!null); // false
```

Source: <https://javascript.info/logical-operators#not>

### Is there a built-in object that performs in the same fashion as the !! (DOUBLE NOT) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Boolean object produces the same result as the double not.</div><br />
  <div><strong>Technical Response:</strong> The built-in Boolean object performs this in the same fashion as the !! (DOUBLE NOT) operator.
  </div>
  </div>
</details>

Code Example:

```js
alert(!!'non-empty string'); // true
alert(!!null); // false

// Example of the Boolean method

alert(Boolean('non-empty string')); // true
alert(Boolean(null)); // false
```

Source: <https://javascript.info/logical-operators#not>

### What has the highest operator precedence over all the logical operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical NOT is the highest of all logical operators, it always executes first.</div><br />
  <div><strong>Technical Response:</strong> The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && (AND) or || (OR).
  </div>
  </div>
</details>

Source: <https://javascript.info/logical-operators#not>
