---
title: Module Design Pattern
description: Modules are an integral piece of any robust application’s architecture and typically help in keeping the units of code for a project both cleanly separated and organized.
sidebar_position: 8
sidebar_label: Module
---

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
      <strong>Interview Response:</strong> Module Pattern is another prevalent JavaScript design pattern for keeping our code clean, separated, and organized. A module is a piece of self-contained code that can be updated without affecting other components. As the concept of access modifier is not supported in JavaScript, the modules help in mimicking the behavior of private/public access hence providing encapsulation.<br/>
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

> Written with [StackEdit](https://stackedit.io/).

---
