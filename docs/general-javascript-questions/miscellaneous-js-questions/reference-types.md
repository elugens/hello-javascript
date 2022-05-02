---
title: Reference Types
description: Reference Type is an internal type of the language in JavaScript. They are used to store data. - JavaScript Interview Questions & Answers
sidebar_position: 4
sidebar_label: Reference Types
keywords:
  - reference types
  - javascript reference types
  - internal types in javascript
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - reference types
  - javascript reference types
  - internal types in javascript
  - interview answers
  - interview questions
---

<head>
  <title>Reference Types | JavaScript Frontend Phone Interview Answer</title>
</head>

**Miscellaneous: Reference Types**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

Please Read more about reference types here: <https://javascript.info/reference-type>

<details>
  <summary><strong>View Code Example:</strong></summary>
  <div>
  <div><strong className="codeExample">Code Example:</strong> Reference Type error and solution<br /><br />

  <div></div>

```js
// Problem: Losing this // reference type error
let user = {
  name: 'John',
  hi() {
    console.log(this.name);
  },
  bye() {
    console.log('Bye');
  },
};

user.hi(); // works

// now let's call user.hi or user.bye depending on the name
(user.name == 'John' ? user.hi : user.bye)(); // Error!

////////////////////////////////////////

// Solution: Losing this
let user = {
  name: 'John',
  hi() {
    console.log('Hi, ' + this.name);
  },
  bye() {
    console.log('Bye');
  },
};

let f = user.hi.bind(user)(
  // now let's call user.hi or user.bye depending on the name
  user.name == 'John' ? user.hi : f.bye
); // returns Hi, John
```

  </div>
  </div>
</details>
