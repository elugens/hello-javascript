---
title: Revealing Design Pattern
description: The Revealing Module pattern's basic tenet is that all functionality and variables should be concealed unless explicitly disclosed. All of our functions and variables may be defined in the private scope. We can return an anonymous object containing references to the private functionality we want to make public.
sidebar_position: 1
sidebar_label: Revealing Pattern
---

**Additional Patterns: Revealing Design Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the revealing design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Revealing Module pattern's basic tenet is that all functions and variables should get concealed unless explicitly disclosed. All of our functions and variables may get defined in the private scope. We can return an anonymous object containing references to the private functionality we want to make public.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

```js
// ES2015+ keywords/syntax used: let, const, method declaration, arrow function
//              template literals for string interpolation, import, export

let privateVar = 'Ben Cherry';
const publicVar = 'Hey there!';

const privateFunction = () => {
  console.log(`Name:${privateVar}`);
};

const publicSetName = (strName) => {
  privateVar = strName;
};

const publicGetName = () => {
  privateFunction();
};

// Reveal public pointers to
// private functions and properties
const myRevealingModule = {
  setName: publicSetName,
  greeting: publicVar,
  getName: publicGetName,
};

export default myRevealingModule;

// Usage:
import myRevealingModule from './myRevealingModule';

myRevealingModule.setName('Paul Kinlan');
```

</div>
<br />
  </div>
</details>

---
