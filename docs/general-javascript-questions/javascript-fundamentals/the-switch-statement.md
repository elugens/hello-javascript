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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What are the benefits of using a Switch statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A switch statement can replace multiple if checks, it is more descriptive, and easier to read.</div><br />
  <div><strong>Technical Response:</strong> A switch statement can replace multiple if checks. It gives a more descriptive way to compare a value with multiple variants and it is easier to read.<br /><br />
  </div>
  </div>
</details>

---

### How does the Switch statement work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The switch statement works by checking the initial value against the case values. If the initial value equals one of the case values, then it stops. A default value is used if the case is not found to equal the initial value.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Syntax<br /><br />

  <div></div>

```js
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

  </div>
  </div>
</details>

---

### Do you have to use the break directive in the Switch statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, but caution should be used because the execution continues with the next case without any checks. It is recommended that we use a break statement.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> An example without break<br /><br />

  <div></div>

```js
let a = 2 + 2;

switch (a) {
  case 3:
    alert('Too small');
  case 4:
    alert('Exactly!');
  case 5:
    alert('Too big');
  default:
    alert("I don't know such values");
}

// Output:
// 'Exactly'
// 'Too Big'
// 'I don't know such values'
```

  </div>
  </div>
</details>

---

### Can you use expressions in switch/case arguments?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, both switch and case allow arbitrary expressions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let a = '1';
let b = 0;

switch (+a) {
  case b + 1:
    console.log('this runs, because +a is 1, exactly equals b+1');
    break;
  default:
    console.log("this doesn't run");
}
// Output: this runs, because +a is 1, exactly equals b+1

//////////////////////////////////////

let a = 10;
let b = 0;

switch (a * 10) {
  case 100:
    console.log('this runs, because +a is 1, exactly equals b+1');
    break;
  default:
    console.log("this doesn't run");
}
// Output: this runs, because a * 10 = 100
```

  </div>
  </div>
</details>

---

### Can you group switch cases as variant options?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, several variants of the case which share the same return code can be grouped.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> If we want the same code to run for case 3 and case 5.<br /><br />

  <div></div>

```js
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```

  </div>
  </div>
</details>

---

### Does a switch statement have a strict equality check on value matching?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the values must be of the same data type to match. The case value that does not, will not execute.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arg = prompt('Enter a value?');
switch (arg) {
  case '0':
  case '1':
    alert('One or zero');
    break;

  case '2':
    alert('Two');
    break;

  case 3:
    alert('Never executes!');
    break;
  default:
    alert('An unknown value');
}
```

  </div>
  </div>
</details>

---
