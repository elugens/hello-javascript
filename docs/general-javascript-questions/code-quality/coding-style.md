---
title: Coding Style
description: Coding style is a set of rules for writing code. This guide will help you to understand coding styles.
sidebar_position: 2
sidebar_label: Coding Style
---

**Code Quality: Coding Style**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the goal when it comes to coding style in relation to programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The goal is to take a complex task and code it in a way that is both correct and human-readable.
</div>

<div></div><br />

:::note
There are several styling guides that help programmers reach this goal.
:::

  </div>
</details>

---

### Should you always use curly braces with conditional if statements?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is a best practice and makes code more readable if there is more than actionable statement.
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

### Is it okay to use long horizontal lines of code or to split them into separate lines? Give a reason why you choose your answer.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Professional JavaScript developers prefer separate lines because they are more readable.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

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

A great example would be long paragraphs that are longer than 120 characters. We can use back ticks to handle lines longer than 120 characters.

:::

  </div>
</details>

---

### What is the maximum length typically agreed upon by development teams?

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
  <div><strong>Interview Response:</strong> A great way to reduce nesting levels is handling minimum conditions early. The goal is to reduce nested code blocks that isolate variable access. The benefits of writing code in this fashion are increased readability and faster code because of early conditional error checks. If, the code fails early then it is handled without continuity.<br /><br />
  <strong>Here are some rules of thumb for reducing nesting in your code:</strong><br /><br />
  <ol>
    <li>Keep conditional blocks short. It increases readability by keeping things local.</li>
    <li>Consider refactoring when your loops and branches that are more than 2 levels deep.</li>
    <li>Think about moving nested logic into separate functions. For example, if you need to loop through a list of objects that each contain a list (such as a protocol buffer with repeated fields), you can define a function to process each object instead of using a double nested loop.</li>
  </ol>
</div><br />
  <div><strong className="codeExample">The two constructs have the same output:</strong><br /><br />

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

### What is a Linter and why should you use it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Linters are tools that can automatically check the style of your code and make improving suggestions. The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you do not want to stick to one particular “code style”.
</div>
  </div>
</details>

---
