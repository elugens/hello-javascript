---
title: Revealing Design Pattern
description: The basic tenet of the Revealing Module pattern is that all functions and variables should be hidden unless explicitly revealed.
sidebar_position: 1
sidebar_label: Revealing Pattern
keywords:
  - revealing pattern
  - revealing design pattern
  - revealing module pattern
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
  - revealing pattern
  - revealing design pattern
  - revealing module pattern
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/RevealingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Revealing Design Pattern | JavaScript Interview Questions</title>
</head>

**Additional Patterns: Revealing Design Pattern**

<CloseAllAnswers />

---

### Can you explain the revealing design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The basic tenet of the Revealing Module pattern is that all functions and variables should be hidden unless explicitly revealed. All of our functions and variables may be defined in the private scope. We can return an anonymous object containing references to the private functionality we want to make public.<br/>
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
