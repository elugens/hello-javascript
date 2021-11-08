---
title: While & For Loops
sidebar_position: 13
---

# LOOPS: WHILE and FOR

**JavaScript Fundamentals: While & For Loops (??)**

<head>
  <title>While & For Loops - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### In Simple terms, what are loops used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Loops are a way to repeat the same code multiple times.</div>
  </div>
</details>

Source: <https://javascript.info/while-for>

### Explain, how a while loop works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A while loop iterates if a specific condition exists and breaks out of the loop when it does not.</div><br />
  <div><strong>Technical Response:</strong> A while loop is an iterative body that loops while a specified condition remains true.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let i = 0;

while (i < 3) {
  // shows 0, then 1, then 2
  console.log(i);
  i++;
}
```

Source: <https://javascript.info/while-for#the-while-loop>

### What is the definition of an iteration in a JavaScript loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A single execution of the loop body is called an iteration.</div>
  </div>
</details>

Code Example: Below we see three iterations in the while loop body.

```js
let i = 0;

while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}
```

Source: <https://javascript.info/while-for#the-while-loop>

### Does a while loop require an explicit incrementor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a while loop requires an explicit incrementor to maintain a controlled iteration.</div><br />
  <div><strong>Technical Response:</strong> Yes, the incrementor is required to continue the iterations. If it is missing, then the process is killed immediately after the first iteration or can result in an endless loop. This all depends on whether you are incrementing or decrementing the loop.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
let i = 3;

while (i) {
  // shows 0, then 1, then 2

  alert(i);

  i--; // if the incrementor (i--) is missing then it results in an endless loop.
}
```

Source: <https://javascript.info/while-for#the-while-loop>

### Are curly brackets required in a single line loop body?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, If the loop body has a single statement, we can omit the curly braces.</div>
  </div>
</details>

Code Example:

```js
let i = 3;

while (i) alert(i--);
```

Source: <https://javascript.info/while-for#the-while-loop>

### What is the difference between Do-While and While Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The do-while loop conditional check is at the end of the loop. In a while loop, the condition is at the beginning of the loop.</div>
  </div>
</details>

Code Example:

```js
do {
  // loop body
} while (condition);
```

Source: <https://javascript.info/while-for#the-do-while-loop>

### Explain, How the Do-While loop works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The loop will first execute the body, check the condition, and, while it is truthy, execute it again.</div>
  </div>
</details>

Code Example:

```js
let i = 0;

do {
  alert(i);
  i++;
} while (i < 3);
```

Source: <https://javascript.info/while-for#the-do-while-loop>

### Explain, How the For-Loop works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The for loop sets a starting point, condition, and steps. The starting point executes once upon entering the loop. The condition is checked before every loop iteration. The loop body runs again and again while the condition is truthy. If false, the loop stops.<br /><br />
  <strong>The general loop algorithm works like this:</strong><br /><br />Run begin<br /><br />
  <ul>
    <li>(if condition → run body and run step)</li>
    <li>(if condition → run body and run step)</li>
    <li>(if condition → run body and run step)</li>
    <li> ... </li>
  </ul>
</div>
  </div>
</details>

Code Example:

```js
// for (let i = 0; i < 3; i++) alert(i)

// run begin

let i = 0;

// if condition → run body and run step

if (i < 3) {
  alert(i);
  i++;
}

// if condition → run body and run step

if (i < 3) {
  alert(i);
  i++;
}

// if condition → run body and run step

if (i < 3) {
  alert(i);
  i++;
}

// ...finish, because now i == 3
```

Source: <https://javascript.info/while-for#the-for-loop>

### What is a For-Loop inline variable declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, an inline variable declaration is done inside of a for loop leaving it within the scope of the loop.</div><br />
  <div><strong>Technical Response:</strong> Inline variable declaration is the process of declaring a variable starting point inside of the for-loop. The variable is only visible inside of the loop and cannot be accessed globally.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}

console.log(i); // error, no such variable
```

Code Example: Variable declaration outside of the loop

```js
let i = 0;

for (i = 0; i < 3; i++) {
  // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop
```

Source: <https://javascript.info/while-for#the-for-loop>

### Is it possible to skip or omit parts of the for-loop settings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can omit any or all the parts of the for-loop. If all are removed it will result in an endless loop. The semi-colons must remain, or it will result in a syntax error.</div><br />
  <div><strong>Technical Response:</strong> Yes, it is possible to omit parts or all the for-loop settings. If you remove all the parts, then it will result in an endless loop. Please note, the two for semicolons (;) must be present. Otherwise, there would be a syntax error.<br /><br />
  </div>
  </div>
</details>

Code Example: Omitting the starting point

```js
let i = 0; // we have i already declared and assigned
for (; i < 3; i++) {
  // no need for "start"
  alert(i); // 0, 1, 2
}
```

Source: <https://javascript.info/while-for#skipping-parts>

### Can you stop a loop based on a specific condition?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can call the break directive to stop the loop based on a specific condition.</div><br />
  <div><strong>Technical Response:</strong> Yes, this can be achieved by using the break directive or statement to stop the loop at any time. This is perfect for situations that require you to stop the loop in the middle or even in several places of its body. The break directive works with all traditional looping structures. (It does not work with forEach).<br /><br />
  </div>
  </div>
</details>

Code Example: Stopping the Loop when a number is not entered

```js
let sum = 0;

while (true) {
  let value = +prompt('Enter a number', '');

  if (!value) break; // (*)
  sum += value;
}

alert('Sum: ' + sum);
```

Source: <https://javascript.info/while-for#breaking-the-loop>

### How does the continue directive (statement) work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It does not stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one if a specific condition exists.</div><br />
  <div><strong>Technical Response:</strong> The continue directive is a “lighter version” of break. It does not stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).<br /><br />
  </div>
  </div>
</details>

Example: Loop uses the continue statement to output odd values

```js
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;
  alert(i); // 1, then 3, 5, 7, 9
}
```

Source: <https://javascript.info/while-for#continue>

### What is the difference between the break statement and the continue directive?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a specific condition exists, the break statement ends the loop and the continue directive stops the loop and forces to start over.</div><br />
  <div><strong>Technical Response:</strong> The break statement stops the loop in the middle or several places of its body. The continue directive is a “lighter version” of break. It does not stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).<br /><br />
  </div>
  </div>
</details>

Source: <https://javascript.info/while-for#continue>

### What is a potential benefit of using the continue directive?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The continue directive helps decrease nesting and increases code readability.
</div>
  </div>
</details>

Source: <https://javascript.info/while-for#continue>

### Can the continue or break directives be used with the shorthand ternary (?) expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  No, the continue or break directives cannot be used in a ternary operator.</div><br />
  <div><strong>Technical Response:</strong> No, the continue or break directives cannot be used on the right side of a ternary operator (?). It will result in a syntax error.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
if (i > 5) {
    alert(i);
} else {
    continue; // continue is allowed here
}

// continue is not allowed on the right side of the question mark operator (?)

(i > 5) ? alert(i) : continue;
```

Source: <https://javascript.info/while-for#continue>

### How do you break out of two nested for loops?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use a label to break out of two nested for loops. The label is targeted by the break directive to ensure that both loops are halted.
</div>
  </div>
</details>

Code Example:

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops

    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
```

Source: <https://javascript.info/while-for#labels-for-break-continue>

### Can labels jump to an arbitrary place in the code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Labels do not allow us to jump into an arbitrary place in the code.</div><br />
  <div><strong>Technical Response:</strong> No, Labels do not allow us to jump into an arbitrary place in the code. A call to break/continue is only possible from inside a loop and the label must be somewhere above the directive.<br /><br />
  </div>
  </div>
</details>

Code Example:

```js
break label; // doesn't jump to the label below

label: for (...)
```

Source: <https://javascript.info/while-for#labels-for-break-continue>
