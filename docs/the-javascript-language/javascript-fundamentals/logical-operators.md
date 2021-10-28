---
title: Logical Operators
sidebar_position: 11
---

# Logical Operators - Q&A

**JavaScript Fundamentals: LOGICAL OPERATORS**

**Question:** **What makes the logical || (OR), && (AND), ! (NOT) operators unique?**

**Interview Answer:** Logical operators can be applied to values of any type; they are not limited to a Boolean type.

Source: <https://javascript.info/logical-operators>

**Question:** **If an operand is not a Boolean, what does the logical || OR do?**

**Technical Answer:** If an operand is not a Boolean, it is converted to a Boolean for the evaluation. For instance, the number 1 is treated as true, the number 0 is false.

Code Example:

```js
//Logical OR returns the first truthy value,

// or the last value if there are none

console.log('1' || '0'); // returns 1
console.log(1 || 0); // returns 1
console.log(0 || 0); // returns 0
```

Source: <https://javascript.info/logical-operators#or>

**Question:** **How does logical OR “||” function?**

**Technical Answer:** The OR || operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to Boolean. If the result is true, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e., all were false), returns the last operand.

Example:

```js
alert(1 || 0); // 1 (1 is truthy)
alert(null || 1); // 1 (1 is the first truthy value)
alert(null || 0 || 1); // 1 (the first truthy value)
alert(undefined || null || 0); // 0 (all falsy, returns the last value)
```

**Note:** Logical OR “||” finds the first truthy value or the last value if there are none.

Source: <https://javascript.info/logical-operators#or-finds-the-first-truthy-value>

**Question:** **What is the definition of a short-circuit evaluation in JavaScript?**

**Interview Answer:** When JavaScript evaluates an OR expression, if the first operand is true, JavaScript will short-circuit by not proceeding to the second operand.

Example:

```js
true || alert('not printed');

false || alert('printed');
```

Source: <https://javascript.info/logical-operators#or-finds-the-first-truthy-value>

**Question:** **What does the Logical && (AND) return?**

**Answer:** Logical && (AND) returns true if both operands are truthy and false otherwise.

Example:

```js
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
```

Source: <https://javascript.info/logical-operators#and>

**Question:** **What type of conversion does the Logical && (AND) perform?**

**Interview Answer:** Logical && (AND) converts all operands to Boolean values, true or false.

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

**Question:** **What steps are performed in the use of the Logical && (AND) operator?**

**Technical Answer:** The AND && operator does the following:

- Evaluates operands from left to right.
- For each operand, converts it to a Boolean. If the result is false, stops and returns the original value of that operand.
- If all operands have been evaluated (i.e. all were truthy), returns the last operand.

Examples:

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

**Question:** **What are the differences between Logical || (OR) and && (AND) operators?**

**Interview Answer:** The difference is that AND returns the first falsie value while OR returns the first truthy.

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

**Question:** **Which of the two, Logical || `(OR)` and && `(AND)` operators have the higher operator precedence?**

**Interview Answer:** The AND operator has a higher precedence than the OR operator.

**Technical Answer:** The precedence of AND && operator is higher than OR ||. So, the code a && b || c && d is essentially the same as if the && expressions were in parentheses: `(a && b) || (c && d)`.

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

**Question:** **Can you replace conditional if with OR (||) or && (AND)?**

**Interview Answer:** Technically Yes, but it is not recommended because it reduces readability.

**Technical Answer:** Technically it can be done, but it is not recommended. Although, the variant with && appears shorter, an if statement is more obvious and tends to be a little bit more readable.

Example:

```js
let x = 1;

x > 0 && alert('Greater than zero!');

// the if example is cleaner and obvious

let x = 1;

if (x > 0) alert('Greater than zero!');
```

Source: <https://javascript.info/logical-operators#and-finds-the-first-falsy-value>

**Question:** **What steps are performed in the use of the Logical ! (NOT) operator?**

**Interview Answer:** The operator accepts a single argument, converts it to a boolean, and returns the inverse value.

**Technical Answer:** The operator accepts a single argument and does the following:

- Converts the operand to a Boolean type: true/false.
- Returns the inverse value.

Examples:

```js
alert(!true); // false
alert(!0); // true
```

Source: <https://javascript.info/logical-operators#not>

**Question:** **What happens when we apply the !! (DOUBLE NOT) to a value?**

**Interview Answer:** The value is inverted twice returning it to its original boolean value.

**Technical Answer:** The first NOT converts the value to Boolean and returns the inverse, and the second NOT inverses it again. In the end, we have a plain Value-to-Boolean conversion.

Examples:

```js
alert(!!'non-empty string'); // true
alert(!!null); // false
```

Source: <https://javascript.info/logical-operators#not>

**Question:** **Is there a built-in object that performs in the same fashion as the !! (DOUBLE NOT) operator?**

**Interview Answer:** The Boolean object produces the same result as the double not.

**Technical Answer:** The built-in Boolean object performs this in the same fashion as the !! (DOUBLE NOT) operator.

Examples:

```js
alert(!!'non-empty string'); // true
alert(!!null); // false

// Example of the Boolean method

alert(Boolean('non-empty string')); // true
alert(Boolean(null)); // false
```

Source: <https://javascript.info/logical-operators#not>

**Question:** **What has the highest operator precedence over all the logical operators?**

**Interview Answer:** Logical NOT is the highest of all logical operators, it always executes first.

**Technical Answer:** The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && (AND) or || (OR).

Source: <https://javascript.info/logical-operators#not>
