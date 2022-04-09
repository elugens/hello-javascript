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
      <strong>Interview Response:</strong> The Flyweight pattern conserves memory by sharing large numbers of fine-grained objects efficiently. Shared flyweight objects are immutable, that is, they cannot be changed as they represent the characteristics that are shared with other objects.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong> Modern ES2015+<br /><br />

<img src="/img/javascript-flyweight.jpg" /><br /><br />

The objects participating in this pattern are:

**Client** -- In example code: _Computer_

- calls into FlyweightFactory to obtain flyweight objects

**FlyweightFactory** -- In example code: _FlyweightFactory_

- creates and manages flyweight objects
- if requested, and a flyweight does not exist, it will create one
- stores newly created flyweights for future requests

**Flyweight** -- In example code: _Flyweight_

- maintains intrinsic data to be shared across the application

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
      <strong>Interview Response:</strong> The Flyweight pattern belongs to the Structural design pattern category.
    </div>
  </div>
</details>

---

### What objects that participate in the Flyweight Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Flyweight pattern includes the Client, FlyweightFactory, and Flyweight.
    </div>
    <br />
    <div></div>

- **Client** – The Client calls into FlyweightFactory to obtain flyweight objects
- **FlyweightFactory** – The FlyweightFactory creates and manages flyweight objects, if requested, and a flyweight does not exist, it will create one, and stores newly created flyweights for future requests.
- **Flyweight** – The Flyweight maintains intrinsic data to be shared across the application.

<br />
  </div>
</details>

---

### When should you use the Flyweight Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> This pattern should be used when your application has plenty of objects using similar data or when memory storage cost is high. JavaScript uses this pattern to share a list of immutable strings across the application.<br/><br/>
      This pattern is mostly used in applications such as network apps or word processors. It can also be used in web browsers to prevent loading the same images twice. The flyweight pattern allows caching of the images. Hence, when a web page loads, only the new images are loaded from the Internet, the already existing ones are fetched from the cache.
    </div>

<br />
  </div>
</details>

---

### What are some of the benefits of using the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can save lots of memory, assuming your program has tons of similar objects.
    </div>

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the Flyweight pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Flyweight Pattern.
    </div><br/>

- You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.
- The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
