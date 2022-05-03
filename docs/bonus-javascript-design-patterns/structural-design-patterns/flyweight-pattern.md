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

<head>
  <title>Flyweight Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Flyweight Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the flyweight design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> It allows you to fit more objects into the available RAM by sharing parts of state between multiple objects rather than keeping all of the data in each object.<br/>
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

### The Flyweight pattern belongs to which pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Flyweight pattern gets classified as a Structural design pattern.
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
      <strong>Interview Response:</strong> The Client, FlyweightFactory, and Flyweight are all part of the Flyweight pattern.
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
      <strong>Interview Response:</strong> We should use this pattern when our application has many objects that consume the same data or when memory storage costs are high. JavaScript uses this pattern to distribute a list of immutable strings throughout the program.<br/><br/>
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
      <strong>Interview Response:</strong> If your software has a lot of similar objects, you can save much memory.
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
      <strong>Interview Response:</strong> Drawbacks of the Flyweight Pattern.
    </div><br/>

- When certain context data needs to be regenerated each time a flyweight method gets called, you may be sacrificing RAM for CPU cycles.
- The code becomes noticeably more complex with the Flyweight Pattern.
- New colleagues get perplexed as to why an entity's state gets partitioned.

<br />
  </div>
</details>

---
