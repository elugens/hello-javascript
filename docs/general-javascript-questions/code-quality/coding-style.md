---
title: Coding Style
description: Coding style is a set of rules for writing code. This guide helps you to
  understand coding styles and how to follow them in JavaScript. - Interview
  Responses
sidebar_position: 2
sidebar_label: Coding Style
keywords:
  - coding style
  - style guide
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - guide
  - interview questions
  - interview answers
  - js
tags:
  - coding style
  - style guide
  - interview answers
  - interview questions
lastmod: 2022-05-01T18:11:50.564Z
---

<head>
  <title>Code Styling | JavaScript Frontend Phone Interview Responses</title>
</head>

**Code Quality: Coding Style**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### When it comes to coding style and application development, what is the goal?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div>
  <strong>Interview Response:</strong> The goal is to take a complex task and code it correctly and in a human-readable manner.
</div>

<div></div><br />

:::note
Several code styling guides help programmers reach this goal.
:::

  </div>
</details>

---

### Should you always use curly braces with conditional if statements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is a best practice and makes code more readable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// conditional if statement
if (n < 0) {
  alert(`Power ${n} is not supported`);
} else {
  alert(`Power ${n} is supported`);
}
```

  </div>
  </div>
</details>

---

### Is it okay to use long horizontal code lines or split them into separate lines? Give a reason why you choose your answer?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Professional JavaScript developers prefer separate lines because they are more readable than not. It is also a best practice.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Proper Implementation<br /><br />

  <div></div>

```js
// backtick quotes (`) allow splitting the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;

// Conditional If statement variable conditions split in multiple lines
if (id === 123 && moonPhase === 'Waning Gibbous' && zodiacSign === 'Libra') {
  letTheSorceryBegin();
}
```

  </div>

:::note

A great example would be long paragraphs longer than 120 characters. We can use backticks to handle lines longer than 120 characters.

:::

  </div>
</details>

---

### What do development teams typically agree to for the maximum character length?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The maximum length typically agreed upon by dev teams is between 80 to 120 characters.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Proper Implementation<br /><br />

  <div></div>

```js
// backtick quotes (`) allow splitting the string into multiple lines
let str = `
  ECMA International's TC39 is a group of JavaScript developers,
  implementers, academics, and more collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;
```

  </div>
  </div>
</details>

---

### What is a best practice for vertical space of code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A best practice is to divide each code action by a line space to keep your code readable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function pow(x, n) {
  let result = 1;
  //              <--
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  //              <--
  return result;
}
```

  </div>
  </div>
</details>

---

### What is one way to reduce nesting levels in your code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A great way to reduce nesting levels is handling minimum conditions early. The goal is to reduce nested code blocks that isolate variable access. The benefits of writing code in this fashion are increased readability and faster code because of early conditional error checks. If the code fails early, then it is handled without continuity.<br /><br />
  <strong>Here are some rules of thumb for reducing nesting in your code:</strong><br /><br />
  <ol>
    <li>Keep your conditional blocks brief. Keeping things local improves readability.</li>
    <li>Think about restructuring if your loops and branches are more than two layers deep.</li>
    <li>Consider separating layered logic into distinct functions. For example, you may write a function to handle each item instead of using a double nested loop to cycle through a list of objects containing a list (such as a protocol buffer with repeated fields).</li>
  </ol>
</div><br />
  <div><strong className="codeExample">The two constructs below are identical:</strong><br /><br />

  <div></div>

```js
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }
}
```

  </div><br />
  <div><strong className="codeExample">This is proper way to avoid nesting:</strong><br /><br />

  <div></div>

```js
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

  </div>
  </div>
</details>

---

### What is a Linter, and why should you use it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Linters are tools that can automatically check the style of your code and make improvement suggestions. The great thing about linters is that style-checking can also find bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you do not want to stick to one particular code style.
</div>
  </div>
</details>

---
