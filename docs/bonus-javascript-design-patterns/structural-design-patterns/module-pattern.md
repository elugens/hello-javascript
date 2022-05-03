---
title: Module Design Pattern
description: Another popular JavaScript design pattern for keeping our code tidy, segregated, and organized is the Module Pattern.
sidebar_position: 8
sidebar_label: Module
keywords:
  - module pattern
  - module design pattern
  - design patterns
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
  - module pattern
  - module design pattern
  - design patterns
  - interview answers
  - interview questions
---

<head>
  <title>Module Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Module Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the Module design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Another popular JavaScript design pattern for keeping our code tidy, segregated, and organized is the Module Pattern. A module is a standalone code that may modify objects without impacting other components. In JavaScript does not support the concept of an access modifier, the aid of the module in mimicking the behavior of private/public access, thereby ensures encapsulation.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Modern Implementation<br /><br />

<img src="/img/module-pattern.png" /><br /><br/>

```js
//*******************************************************//
// The Module Pattern
//*******************************************************//

// ES2015+ keywords used: import, export, let, const

let counter = 0;

const testModule = {
  incrementCounter() {
    return counter++;
  },
  resetCounter() {
    console.log(`counter value prior to reset: ${counter}`);
    counter = 0;
  },
};

// Default export module, without name
export default testModule;

// Usage:

// Import module from path
import testModule from './testModule';

// Increment our counter
testModule.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter();
```

</div>
<br />
  </div>
</details>

---
