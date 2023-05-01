---
title: Conditional Branching - JavaScript Interview
description: Learn how to use conditional branching in JavaScript. Can you execute more than one statement in an if statement? | Frontend Interview Questions & Answers
sidebar_position: 12
sidebar_label: Conditional Branching
keywords:
  - conditional branching
  - conditional statements
  - branching
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - if statement
  - ternary operator
  - interview questions
  - interview answers
  - js
tags:
  - conditional branching
  - conditional statements
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CondBranchingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Conditional Branching | JavaScript Frontend Phone Interview</title>
</head>

**JavaScript Fundamentals: Conditional Branching**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/bNuJk2HRLnE"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### Can you execute more than one statement in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but they must be encased in curly brackets {}. Even if just one sentence has to run, this improves readability and is encouraged.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
if (year == 2015) {
  alert("That's correct!");
  alert("You're so smart!");
}
```

  </div>
  </div>
</details>

---

### What type of conversion does the JavaScript “if” statement use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The if (_) statement evaluates the expression in its parentheses and converts it to a true or false Boolean value.</div>
  </div>
</details>

---

### Can you pre-evaluate a condition for use in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can pass a pre-evaluated condition in a value to an if statement.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let cond = year == 2015; // equality evaluates to true or false
if (cond) {
  alert('Hello, World'); // returns Hello, World
}
```

  </div>
  </div>
</details>

---

### Is there a way to handle falsie conditions in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use an if-else statement to handle false conditions.</div><br />
  <div><strong>Technical Response:</strong> Yes, the “if” statement may contain an optional “else” block. It executes when the condition is false.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let year = prompt('In which year was the ECMAScript-2015 published?', '');

if (year == 2015) {
  alert('You guessed it right!');
} else {
  alert('How can you be so wrong?'); // any value except 2015
}
```

  </div>
  </div>
</details>

---

### If you want to test a variety of circumstances. What kind of conditional statement can you use with an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To test several conditions in an if statement, you must add an “else if” statement. There can be more than one else if block and the final else is optional.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let year = prompt('In which year was the ECMAScript-2015  published?', '');

if (year < 2015) {
  alert('Too early...');
} else if (year > 2015) {
  alert('Too late');
} else {
  alert('Exactly!');
}
```

  </div>
  </div>
</details>

---

### Can you assign a variable depending on a condition in an if statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can assign a variable depending on a condition in an if statement.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
```

  </div>
  </div>
</details>

---

### Is there a shorthand version of the if statement that you can use in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the ternary operator shorthand syntax.</div><br />
  <div><strong>Technical Response:</strong> Yes, the condition/ternary (?) operator can be used to shorten the implementation of a conditional statement.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
let accessAllowed = age > 18 ? true : false;
```

  </div><br />
  <div><strong className="codeExample">Note:</strong> Because the comparison itself gives true/false, you may eliminate using the question mark operator in the above example:<br /><br />

  <div></div>

```js
// the same
let accessAllowed = age > 18;
```

  </div>
  </div>
</details>

---
