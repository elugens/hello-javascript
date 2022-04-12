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
      <strong>Interview Response:</strong> Another popular JavaScript design pattern for keeping our code tidy, segregated, and organized is the Module Pattern. A module is a standalone code that may be modified without impacting other components. Because the concept of an access modifier is not supported in JavaScript, the aid of the module in mimicking the behavior of private/public access, thereby ensuring encapsulation.<br/>
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
