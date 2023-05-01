---
title: While & For Loops - JavaScript Interview
description: Learn how to use while loops and for loops in JavaScript. Loops are a way to repeat the same code multiple times in a iteration. Frontend Interview Questions.
sidebar_position: 15
sidebar_label: While & For Loops
keywords:
  - while loop
  - while loop iteration
  - for loop
  - for loop iteration
  - javascript
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
  - while loop
  - while loop iteration
  - for loop
  - for loop iteration
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WhileForSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>While & For Loops | JavaScript Frontend Interview Questions</title>
</head>

**JavaScript Fundamentals: While & For Loops**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/Pw1KU5PiD2g"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### In Simple terms, what are loops used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Loops are a way to repeat or iterate over the same code multiple times.</div>
  </div>
</details>

---

### Explain how a while loop works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The while loop iterates if a given condition is met and exits the loop when the condition no longer exists.</div><br />
  <div><strong>Technical Response:</strong> A while loop is an iterative body that loops while a specified condition remains true.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}
```

  </div>
  </div>
</details>

---

### What is the definition of an iteration in a JavaScript loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A single execution of the loop body is called an iteration in software engineering.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Below, we see three iterations in the while loop body.<br /><br />

  <div></div>

```js
let i = 1;
while (i < 3) {
  // shows 1, then 2, then 3
  alert(i);
  i++;
}
```

  </div>
  </div>
</details>

---

### Does a while loop require an explicit incrementor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a while loop requires an explicit incrementor to maintain a controlled iteration.</div><br />
  <div><strong>Technical Response:</strong> Yes, the incrementor is required to continue the iterations. If it is missing, then the process is killed immediately after the first iteration or can result in an endless loop. This process all depends on whether you are incrementing or decrementing the loop.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let i = 3;
while (i) {
  // shows 0, then 1, then 2
  alert(i);
  i--; // if the incrementor (i--) is missing then it results in an endless loop.
}
```

  </div>
  </div>
</details>

---

### Are curly brackets required in a single-line loop body?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, If the loop body has a single statement, we can omit the curly braces.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let i = 3;
while (i) alert(i--);
```

  </div>
  </div>
</details>

---

### What is the difference between Do-While and While Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The do-while loop conditional check is at the end of the loop. In a while loop, the condition is at the beginning of the loop.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
do {
  // loop body
} while (condition);
```

  </div>
  </div>
</details>

---

### Explain, How the Do-While loop works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The loop first executes the body, checks the condition, and executes it again while it is truthy.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);
```

  </div>
  </div>
</details>

---

### Explain, How the For-Loop works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The for loop sets a starting point, condition, and steps. The starting point executes once upon entering the loop. The condition gets checked before every loop iteration. The loop body runs again and again while the condition is truthy. If false, the loop terminates.<br /><br />
  <strong>The general loop algorithm works like this:</strong><br /><br />Run begin<br /><br />
  <ul>
    <li>(if condition → run body and run step)</li>
    <li>(if condition → run body and run step)</li>
    <li>(if condition → run body and run step)</li>
    <li> ... </li>
  </ul>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// for (let i = 0; i < 3; i++) alert(i)

// run begin
let i = 0;
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// if condition → run body and run step
if (i < 3) {
  alert(i);
  i++;
}
// ...finish, because now i == 3
```

  </div>
  </div>
</details>

---

### What is a For-Loop inline variable declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, an inline variable declaration is made inside a for loop, leaving it within the loop's scope.</div><br />
  <div><strong>Technical Response:</strong> Inline variable declaration is the process of declaring a variable starting point inside of the for-loop. The variable is only visible inside the loop and cannot be accessed globally.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
for (let i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}

alert(i); // error, no such variable
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Variable declaration outside of the loop<br /><br />

  <div></div>

```js
let i = 0;

for (i = 0; i < 3; i++) {
  // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop
```

  </div>
  </div>
</details>

---

### Is it possible to skip or omit parts of the for-loop settings?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can omit any or all of the parts of the for-loop. If we omit all parts, it results in an endless loop. The semi-colons must remain, or it results in a syntax error.</div><br />
  <div><strong>Technical Response:</strong> Yes, it is possible to omit parts or all the for-loop settings. If you remove all the parts, it results in an endless loop. Please note that the two semicolons (;) must be present, and otherwise, there would be a syntax error.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let i = 0; // we have i already declared and assigned

for (; i < 3; i++) {
  // no need for "start"
  alert(i); // 0, 1, 2
}
```

  </div>
  </div>
</details>

---

### Can you stop a loop based on a specific condition?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can call the break directive to stop the loop based on a specific condition.</div><br />
  <div><strong>Technical Response:</strong> Yes, You can achieve this by using the break directive or statement to stop the loop at any time. This approach is ideal for cases when you need to pause the loop in the middle or at various points along its length. The break directive works with all traditional looping structures. (It does not work with forEach).<br /><br />
  </div><br />
  
  <div><strong className="codeExample">Code Example:</strong> While Loop - Stopping the Loop when a number does not get entered.<br /><br />

  <div></div>

```js
let sum = 0;

while (true) {
  let value = +prompt('Enter a number', '');

  if (!value) break; // (*)

  sum += value;
}

alert('Sum: ' + sum);
```

  </div>
  <div><strong className="codeExample">Code Example:</strong> For Loop<br /><br />

  <div></div>

```js
let text = '';
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  text += 'The number is ' + i + '<br>';
}

document.getElementById('demo').innerHTML = text;

// Output:
// A loop with a break statement.

// The number is 0
// The number is 1
// The number is 2
```

  </div>
  </div>
</details>

---

### How does the continue directive (statement) work in a loop? Does it stop the whole loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The continue directive does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one if a specific condition exists.</div><br />
  <div><strong>Technical Response:</strong> The continue directive is a "lighter version" of the break statement. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> The Loop uses the continue statement to output odd values.<br /><br />

  <div></div>

```js
for (let i = 0; i < 10; i++) {
  // if true, skip the remaining part of the body
  if (i % 2 == 0) continue;

  alert(i); // 1, then 3, 5, 7, 9
}
```

  </div>
  </div>
</details>

---

### What is the difference between the break statement and the continue directive?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a specific condition exists, the break statement ends the loop and the continue directive stops the loop and forces to start over.</div><br />
  <div><strong>Technical Response:</strong> The break statement stops the loop in the middle or several places of its body. The continue directive is a “lighter version” of break. It does not stop the whole loop; instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).<br /><br />
  </div>
  </div>
</details>

---

### What is a potential benefit of using the continue directive?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The continue directive helps decrease nesting and increases code readability.
</div>
  </div>
</details>

---

### Can the continue or break directives be used with the shorthand ternary (?) expression?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  No, You cannot use the continue or break directives in a ternary operator.</div><br />
  <div><strong>Technical Response:</strong> No, the continue or break directives on a ternary operator's right side (?) results in a syntax error.<br /><br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
if (i > 5) {
  alert(i);
} else {
  continue; // continue is allowed here
}

// continue is not allowed on the right side of the question mark operator (?)
(i > 5) ? alert(i) : continue;
```

  </div>
  </div>
</details>

---

### How do you break out of two nested for loops?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use a label to break out of two nested for loops, and the break directive targets the label to ensure that both loops halt.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coordinates (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');
```

  </div>
  </div>
</details>

---

### Can labels jump to an arbitrary place in the code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Labels do not allow us to jump into an arbitrary place in the code.</div><br />
  <div><strong>Technical Response:</strong> No, Labels do not allow us to jump into an arbitrary place in the code. A call to break/continue is only possible from inside a loop, and the label must be somewhere above the directive.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
break label; // doesn't jump to the label below

label: for (...)
```

  </div>
  </div>
</details>

---
