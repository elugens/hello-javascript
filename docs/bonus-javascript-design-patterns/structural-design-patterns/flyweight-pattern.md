---
title: Flyweight Design Pattern
description: Can you explain the flyweight design pattern? The Flyweight pattern gets classified as a Structural design pattern. JavaScript interview questions.
sidebar_position: 6
sidebar_label: Flyweight
keywords:
  - flyweight pattern
  - flyweight design pattern
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
  - flyweight pattern
  - flyweight design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FlyweightSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Flyweight Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Flyweight Pattern**

<CloseAllAnswers />

---

### What is the Flyweight Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The flyweight design pattern is a structural pattern that optimizes memory usage by sharing common data between similar objects, reducing overall object creation.<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> It allows you to fit more objects into the available RAM by sharing parts of state between multiple objects rather than keeping all of the data in each object.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-flyweight.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Client** -- Example code: _Computer_

- calls into FlyweightFactory to obtain flyweight objects

**FlyweightFactory** -- In example code: _FlyweightFactory_

- creates and manages flyweight objects
- If a flyweight is required and one does not exist, it constructs one.
- stores newly created flyweights for future requests

**Flyweight** -- In example code: _Flyweight_

- preserves intrinsic data for use throughout the application

```js
function Flyweight(make, model, processor) {
  this.make = make;
  this.model = model;
  this.processor = processor;
}

let FlyWeightFactory = (function () {
  let flyweights = {};

  return {
    get: function (make, model, processor) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor);
      }
      return flyweights[make + model];
    },

    getCount: function () {
      let count = 0;
      for (let f in flyweights) count++;
      return count;
    },
  };
})();

function ComputerCollection() {
  let computers = {};
  let count = 0;

  return {
    add: function (make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag);
      count++;
    },

    get: function (tag) {
      return computers[tag];
    },

    getCount: function () {
      return count;
    },
  };
}

let Computer = function (make, model, processor, memory, tag) {
  this.flyweight = FlyWeightFactory.get(make, model, processor);
  this.memory = memory;
  this.tag = tag;
  this.getMake = function () {
    return this.flyweight.make;
  };
  // ...
};

function run() {
  let computers = new ComputerCollection();

  computers.add('Dell', 'Studio XPS', 'Intel', '5G', 'Y755P');
  computers.add('Dell', 'Studio XPS', 'Intel', '6G', 'X997T');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'U8U80');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', 'NT777');
  computers.add('Dell', 'Studio XPS', 'Intel', '2G', '0J88A');
  computers.add('HP', 'Envy', 'Intel', '4G', 'CNU883701');
  computers.add('HP', 'Envy', 'Intel', '2G', 'TXU003283');

  console.log('Computers: ' + computers.getCount());
  console.log('Flyweights: ' + FlyWeightFactory.getCount());
}

run();

/*

OUTPUT:

Computers: 7
Flyweights: 2

*/
```

</div>
 </div>

</details>

---

### The Flyweight pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Flyweight pattern belongs to the structural pattern family, which is concerned with the composition of classes and objects to form larger structures.
    </div>
  </div>
</details>

---

### What types of objects are involved in the Flyweight Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> In the Flyweight pattern, two types of objects are involved: the flyweight objects, which are shared among multiple contexts, and the context objects, which contain unique state.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> The Client, FlyweightFactory, and Flyweight are all part of the Flyweight pattern.
    </div>
    <br />
    <div></div>

- **Client** – To obtain flyweight objects, the Client invokes FlyweightFactory.
- **FlyweightFactory** – If a flyweight object is requested but does not exist, the FlyweightFactory generates and manages it. It spawns one and saves newly generated flyweights for future use.
- **Flyweight** – stores intrinsic data that gets shared throughout the program.

<br />
  </div>
</details>

---

### When should the Flyweight Pattern be used?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Flyweight pattern should be used when there is a large number of objects with similar characteristics, and memory usage needs to be optimized by sharing common data.
    </div>
<br />
    <div>
      <strong>Technical Response:</strong> We should use this pattern when our application has many objects that consume the same data or when memory storage costs are high. JavaScript uses this pattern to distribute a list of immutable strings throughout the program.<br/><br/>
      This pattern most commonly gets found in network programs or word processors, and it can be used in internet browsers to prevent the same images from loading. The flyweight pattern enables image caching. As a result, only new images are loaded from the Web when a web page loads, while existing ones get extracted from the cache.
    </div>
<br />
  </div>
</details>

---

### What are some of the advantages of employing the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Advantages of using the Flyweight pattern in JavaScript include reduced memory usage, improved performance, and increased scalability and flexibility in managing large sets of similar objects.
    </div>

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It can increase complexity by splitting state and may lead to more complicated and error-prone code.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> Disadvantages of using the Flyweight pattern in JavaScript include increased complexity due to separation of intrinsic and extrinsic state, and reduced security due to shared state.<br/><br/> Drawbacks of the Flyweight Pattern.
    </div><br/>

- When certain context data needs to be regenerated each time a flyweight method gets called, you may be sacrificing RAM for CPU cycles.
- The code becomes noticeably more complex with the Flyweight Pattern.
- New colleagues get perplexed as to why an entity's state gets partitioned.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, there are alternative patterns to the Flyweight pattern in JavaScript, including the Singleton pattern, the Prototype pattern, and the Factory pattern.
    </div>
    <br/>
  </div>
</details>

---

### In what cases is the Flyweight Design Pattern most beneficial?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's beneficial when dealing with a large number of objects which have common, repeated state that can be externalized.
  </div>
  </div>
</details>

---

### How does the Flyweight Pattern reduce memory usage?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It reduces memory by sharing common data among objects instead of each object storing identical data.
  </div>
  </div>
</details>

---

### What are the two states in a Flyweight pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are 'intrinsic' states (inside the Flyweight) and 'extrinsic' states (outside the Flyweight and passed in).

  </div>
  </div>
</details>

---

### How does Flyweight handle intrinsic and extrinsic states?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Intrinsic states are shared and stored inside the Flyweight; extrinsic states are stored or computed by client objects.
  </div>
  </div>
</details>

---

### What's a Flyweight Factory and its role in the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It creates and manages Flyweight objects, ensuring they're adequately shared to minimize memory use.
  </div>
  </div>
</details>

---

### Does the Flyweight Pattern affect performance? How?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it can improve memory usage and potentially improve performance but might increase complexity due to separating intrinsic and extrinsic states.
  </div>
  </div>
</details>

---

### How does the Flyweight Pattern affect scalability?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It increases scalability by reducing memory usage when dealing with a large number of objects.
  </div>
  </div>
</details>

---

### What is a real-world example of the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's often used in game development, where many similar objects, like trees or NPCs, share common properties.
  </div>
  </div>
</details>

---

### What are the downsides of the Flyweight Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It can increase complexity by splitting state and may lead to more complicated and error-prone code.
  </div>
  </div>
</details>

---
