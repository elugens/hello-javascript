---
title: Logical Operators
description: Logical operators are used to combine conditional statements. Logical operators can be applied to values of any type; they are not limited to a Boolean type.
sidebar_position: 13
sidbar_label: Logical Operators
keywords:
  - logical operators
  - logical operator
  - logical not
  - logical conversion
  - logical or operator
  - interview
  - questions
  - answers
  - response
  - technical
  - object
  - interview questions
  - interview answers
  - js
tags:
  - logical operators
  - logical operator
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/LogicalOpSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Logical Operators | JavaScript Frontend Interview Answers</title>
</head>

**JavaScript Fundamentals: Logical Operators**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/XI0ao2YPb_0"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<AdSense />

---

<CloseAllAnswers />

### Can you name the logical operators in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The logical operators in JavaScript are: AND (&&), OR (||), and NOT (!). They are used to perform logical operations on values or expressions.
  </div>
  </div>
</details>

---

### What makes the logical || (OR), && (AND), ! (NOT) operators unique?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical operators in JavaScript work with any data type, not just Booleans. They assess operands based on truthiness and utilize short-circuiting for efficient, compact conditional expressions.
  </div>
  </div>
</details>

---

### If an operand is not a Boolean, what does the logical || OR do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an operand is not a Boolean, the logical || OR operator will coerce the operands to Boolean values, then return the first truthy operand encountered or the last falsy one.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
/* Logical OR returns the first truthy value,
 *  or the last value if there are none
 */

console.log('1' || '0'); // returns 1

console.log(1 || 0); // returns 1

console.log(0 || 0); // returns 0
```

  </div>
  </div>
</details>

---

### How does logical OR “||” function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the logical OR operator "||" returns the first truthy value it encounters when evaluating multiple operands, or the last operand if all are falsy. The OR || operator does the following:
  <br/><br/>
  <ol>
    <li>Operands evaluate from left to right.</li>
    <li>Converts each operand to a Boolean value, and if the result is true, the program terminates and returns the operand's original value.</li>
    <li>Returns the final operand if all operands get evaluated (i.e., all were false).</li>
  </ol>

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(1 || 0); // 1 (1 is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)

console.log(undefined || null || 0); // 0 (all falsy, returns the last value)
```

---

:::note
Logical OR “||” finds the first truthy value or the last value if there are none.
:::

  </div>
  </div>
</details>

---

### What is the definition of a short-circuit evaluation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Short-circuit evaluation is a behavior of logical operators where subsequent operands are not evaluated if the previous operands are sufficient to determine the expression's value.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
true || console.log('not printed');
false || console.log('printed');
```

  </div>
  </div>
</details>

---

### What does the Logical && (AND) return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical && (AND) returns true if both operands are truthy and false otherwise.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
```

  </div>
  </div>
</details>

---

### What type of conversion does the Logical && (AND) perform?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The logical && (AND) performs a Boolean conversion. It evaluates two operands and returns true if both operands are true, and false otherwise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let x = 5;
let y = 10;

if (x > 0 && y < 20) {
  console.log("Both conditions are true!");
} else {
  console.log("At least one condition is false.");
}
```

In this example, the logical AND operator (`&&`) is used to check if both `x` is greater than 0 and `y` is less than 20. If both conditions are true, it will print "Both conditions are true!" to the console. Otherwise, it will print "At least one condition is false."

  </div>
  </div>
</details>

---

### What steps does JavaScript perform when using the Logical && (AND) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Operands evaluate from left to right, then it converts each operand to a boolean value, and if the result is false, the program terminates and returns the operand's original value. It returns the final operand if all operands evaluate to true.<br /><br />
  <ol>
    <li>Operands evaluate from left to right.</li>
    <li>Converts each operand to a Boolean value, and if the result is false, the program terminates and returns the operand's original value.</li>
    <li>It returns the final operand if all operands get evaluated (i.e., all were true).</li>
  </ol>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsie,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && 'no matter what'); // 0
```

  </div>
  </div>
</details>

---

### What are the differences between Logical || (OR) and Logical && (AND) operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The logical || (OR) returns true if at least one operand is true. The logical && (AND) returns true only if both operands are true.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let x = 5;
let y = 10;

// Logical OR (||) example
if (x > 0 || y > 20) {
  console.log("At least one condition is true!"); // Logs "At least one condition is true!"
} else {
  console.log("Both conditions are false.");
}

// Logical AND (&&) example
if (x > 0 && y > 20) {
  console.log("Both conditions are true!");
} else {
  console.log("At least one condition is false."); // "At least one condition is false."
}
```

  </div>
  </div>
</details>

---

### Between Logical || (OR) and && (AND) operators which has higher operator precedence?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The '&&' (AND) operator has higher operator precedence than the '||' (OR) operator in most programming languages.</div><br />
  <div><strong>Technical Response:</strong> The precedence of the AND && operator is greater than that of the OR || operator. As a result, the code a && b || c && d is effectively the same as if the && expressions were enclosed in parentheses: (a && b) || (c && d).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let a = true;
let b = false;
let c = true;

// Due to precedence, '&&' operation will be performed before '||' operation
let result = a || b && c; 

console.log(result);  // Outputs: true
```

In this case, the `b && c` operation happens first due to `&&` having higher precedence, returning `false`. Then, `a || false` is evaluated, which results in `true`.

  </div>
  </div>
</details>

---

### Can you replace conditional if with OR (||) or && (AND)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Technically, Yes, but it is not recommended because it reduces readability.</div><br />
  <div><strong>Technical Response:</strong> Technically, we can do it, which goes against recommendations. Although the variant with && appears shorter, an if statement is more prominent and tends to be more readable.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let x = 1;

x > 0 && console.log('Greater than zero!');

// the if example is cleaner and obvious

let x = 1;

if (x > 0) console.log('Greater than zero!');
```

  </div>
  </div>
</details>

---

### What steps does JavaScript perform when implementing the Logical! (NOT) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The NOT operator accepts a single argument, converts it to a Boolean, and returns the inverse value.</div><br />
  <div><strong>Technical Response:</strong> The operator accepts a single argument and does the following:<br /><br />
  <ol>
    <li>Converts the operand to a Boolean type: true/false.</li>
    <li>Returns the inverse value.</li>
  </ol>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(!true); // false
console.log(!0); // true
```

  </div>
  </div>
</details>

---

### What happens when we apply the !! (DOUBLE NOT) to a value?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The value is inverted twice, returning it to its original Boolean value.</div><br />
  <div><strong>Technical Response:</strong> The first NOT changes the value to Boolean and returns the inverse, whereas the second NOT reverses the process. Finally, we have a simple Value-to-Boolean translation (Boolean conversion).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(!!'non-empty string'); // true
console.log(!!null); // false
```

  </div>
  </div>
</details>

---

### Is there a built-in object that performs in the same fashion as the !! (DOUBLE NOT) operator?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the built-in Boolean() function performs similarly to the double NOT (!!) operator, converting values to their respective Boolean representations.
  </div><br />
  <div><strong>Technical Response:</strong> The built-in Boolean object performs this in the same fashion as the !! (DOUBLE NOT) operator.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
console.log(!!'non-empty string'); // true
console.log(!!null); // false

// Example of the Boolean method
console.log(Boolean('non-empty string')); // true
console.log(Boolean(null)); // false
```

  </div>
  </div>
</details>

---

### What has the highest operator precedence over all the logical operators?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The logical NOT (!) operator has the highest precedence among all logical operators in JavaScript. It always executes first.
  </div><br />
  <div><strong>Technical Response:</strong> The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && (AND) or || (OR).
  </div>
  </div>
</details>

---

### What values are considered falsy in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the following values are considered falsy: false, null, undefined, 0, NaN, and "" (empty string).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});
```

This code will output that each value in the `falsyValues` array is falsy.

  </div>
  </div>
</details>

---

### What is operator precedence in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Operator precedence determines the order in which operators are evaluated in expressions involving multiple operators. Operators with higher precedence are evaluated first.
  </div>
  </div>
</details>

---

### How can you use Logical Operators to simplify complex conditions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Logical operators (`&&`, `||`, `!`) can simplify complex conditions by chaining or negating boolean expressions, enhancing code readability and reducing redundancy in conditions.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's consider this JavaScript example where you need to check if a user is valid.

*Without logical operators:*

```javascript
let userName = "John";
let userAge = 20;

if (userName !== "") {
    if (userAge >= 18) {
        console.log("User is valid");
    } else {
        console.log("User is not valid");
    }
} else {
    console.log("User is not valid");
}
```

*Now, the same thing with logical operators:*

```javascript
let userName = "John";
let userAge = 20;

if (userName !== "" && userAge >= 18) {
    console.log("User is valid");
} else {
    console.log("User is not valid");
}
```

As you can see, the code is more simplified and readable when using logical operators.

  </div>
  </div>
</details>

---

### What is the order of precedence for Logical Operators in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The order of precedence for Logical Operators in JavaScript is NOT (!), AND (&&), and then OR (||).
  </div>
  </div>
</details>

---
