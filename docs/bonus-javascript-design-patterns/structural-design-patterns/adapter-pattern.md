---
title: Adapter Design Pattern
description: Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.
sidebar_position: 1
sidebar_label: Adapter
---

**Structural: Adapter Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please explain the adapter design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Adapters are JS design patterns that allow objects or classes with incompatible interfaces to work together. Despite incompatible interfaces, interfaces from different classes or objects are matched to work together. The Wrapper pattern is another name for it.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-adapter.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- alls into Adapter to request a service

**Adapter** -- In example code: _ShippingAdapter_

- implements the interface that the client expects or knows

**Adaptee** -- In example code: _AdvancedShipping_

- the object being adapted
- has a different interface from what the client expects or knows

</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```js
class SimpleEarphones {
  constructor() {
    this.attach = function () {
      console.log('Use Earphones with Type C phone');
    };
  }
}

// Adapter
class EarPhoneAdapter extends SimpleEarphones {
  constructor(typeCphone) {
    super();
    this.attach = function () {
      typeCphone.attach();
    };
  }
}

class TypeCPhone {
  constructor() {
    this.attach = function () {
      console.log('Earphones attached to Type C phone');
    };
  }
}

let typeCphone = new TypeCPhone();
let adapter = new EarPhoneAdapter(typeCphone);
adapter.attach();

/*

Output:

Earphones attached to Type C phone

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong> ES5 Classical Implementation<br /><br />

<img src="/img/javascript-adapter.jpg" /><br /><br />

  <div></div>

```js
// old interface

function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    // ...
    return '$49.75';
  };
}

// new interface

function AdvancedShipping() {
  this.login = function (credentials) {
    /* ... */
  };
  this.setStart = function (start) {
    /* ... */
  };
  this.setDestination = function (destination) {
    /* ... */
  };
  this.calculate = function (weight) {
    return '$39.50';
  };
}

// adapter interface

function ShippingAdapter(credentials) {
  var shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}

function run() {
  var shipping = new Shipping();
  var credentials = { token: '30a8-6ee1' };
  var adapter = new ShippingAdapter(credentials);

  // original shipping object and interface

  var cost = shipping.request('78701', '10010', '2 lbs');
  console.log('Old cost: ' + cost);

  // new shipping object with adapted interface

  cost = adapter.request('78701', '10010', '2 lbs');

  console.log('New cost: ' + cost);
}

run();

/*
OUTPUT:

Old cost: $49.75
New cost: $39.50

*/
```

  </div>

  </div>
</details>

---

### The Adapter pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Adapter pattern is a type of structural design pattern.
    </div>
  </div>
</details>

---

### What is the most distinguishing feature of the Adapter Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The main characteristic of the Adapter Pattern is the adapter interface required to intersect with interfaces that are not compatible.
    </div>

  </div>
</details>

---

### What are the Benefits and Drawbacks of the Adapter Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits vs. Drawbacks
    </div>
    <br />
    <div></div>

**Benefits**

- It is based on SOLID principles.
- New adapters can be added without breaking existing code.
- The code is both reusable and adaptable.
- Clean code — because the client/context does not use a different interface in each concrete class and can switch between additional adapters using polymorphism.
- Single Responsibility Principle - The principle of single responsibility. You can separate the interface or data conversion code from the main business logic of the program.
- Open/Closed Principle. If they interact with the adapters via the client interface, you can start introducing new kinds of adapters into the application without having to break the existing client code.

**Drawbacks**

- The overall complexity of the code rises as a result of the addition of new interfaces and classes. Changing the service class to match the rest of your code is sometimes easier.

<br />
  </div>
</details>

---

### When should the Adapter Pattern be used?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Use Case
    </div>
    <br />
    <div></div>

- There is a class whose interfaces do not match the one you need.
- There are several subclasses but it’s impractical to adapt their interface by subclassing every single one.

<br />
  </div>
</details>

---
