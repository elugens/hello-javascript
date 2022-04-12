---
title: Flyweight Design Pattern
description: Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.
sidebar_position: 6
sidebar_label: Flyweight
---

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
      <strong>Interview Response:</strong> By efficiently sharing a large number of fine-grained objects, the Flyweight pattern helps to conserve memory. Shared flyweight objects are immutable; they cannot be altered because they reflect properties shared by other objects.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-flyweight.jpg" /><br /><br />

The objects participating in this pattern are:

**Client** -- Example code: _Computer_

- calls into FlyweightFactory to obtain flyweight objects

**FlyweightFactory** -- In example code: _FlyweightFactory_

- creates and manages flyweight objects
- If a flyweight is required and one does not exist, it will construct one.
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

### In what pattern category does the Flyweight pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Flyweight pattern is classified as a Structural design pattern.
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
- **FlyweightFactory** – If a flyweight object is requested but does not exist, the FlyweightFactory generates and manages it. It will spawn one and save newly generated flyweights for future use.
- **Flyweight** – stores intrinsic data that can be shared throughout the program.

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
      <strong>Interview Response:</strong> This pattern should be utilized when your application has a large number of objects that consume the same data or when memory storage costs are high. JavaScript uses this pattern to distribute a list of immutable strings throughout the program.<br/><br/>
      This pattern is most commonly found in network programs or word processors, and it can be used in internet browsers to prevent the same images from loading. The flyweight pattern enables image caching. As a result, only new images are loaded from the Web when a web page loads, while existing ones are retrieved from the cache.
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
      <strong>Interview Response:</strong> If your software has a lot of similar objects, you can save a lot of memory.
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

- When certain context data needs to be regenerated each time a flyweight method is called, you may be sacrificing RAM for CPU cycles.
- The code becomes noticeably more complex with the Flyweight Pattern.
- New colleagues will be perplexed as to why an entity's state was partitioned.

<br />
  </div>
</details>

---
