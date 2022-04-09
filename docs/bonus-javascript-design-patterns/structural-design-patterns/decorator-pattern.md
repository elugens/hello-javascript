---
title: Decorator Design Pattern
description: Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
sidebar_position: 4
sidebar_label: Decorator
---

**Structural: Decorator Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the decorator design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Structurally the Composite Pattern lets you compose objects into a tree-like structure giving us the ability to work with them as individual objects. This is also known as partitioning. The Composite pattern allows the creation of objects with properties that are primitive items or a collection of objects. Each item in the collection can hold other collections themselves, creating deeply nested structures.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong> Decorating Objects with New Functionality<br /><br />

```js
// ES2015+ Keywords/syntax used: class, constructor, const

// A vehicle constructor
class Vehicle {
  constructor(vehicleType) {
    // some sane defaults
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
  }
}

// Test instance for a basic vehicle
const testInstance = new Vehicle('car');
console.log(testInstance);

// Outputs:
// vehicle: car, model:default, license: 00000-000

// Lets create a new instance of vehicle, to be decorated
const truck = new Vehicle('truck');

// New functionality we're decorating vehicle with
truck.setModel = function (modelName) {
  this.model = modelName;
};

truck.setColor = function (color) {
  this.color = color;
};

// Test the value setters and value assignment works correctly
truck.setModel('CAT');
truck.setColor('blue');

console.log(truck);

// Outputs:
// vehicle:truck, model:CAT, color: blue

// Demonstrate "vehicle" is still unaltered
const secondInstance = new Vehicle('car');
console.log(secondInstance);

// Outputs:
// vehicle: car, model:default, license: 00000-000
```

</div><br />
  <div><strong className="codeExample">Code Example #2:</strong> Decorating Objects with Multiple Decorators<br /><br />

```js
// ES2015+ Keywords/syntax used: class, constructor, const, let, extends, super

// The constructor to decorate
class MacBook {
  constructor() {
    this.cost = 997;
    this.screenSize = 11.6;
  }
  getCost() {
    return this.cost;
  }
  getScreenSize() {
    return this.screenSize;
  }
}

// Decorator 1
class Memory extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }

  getCost() {
    return this.macBook.getCost() + 75;
  }
}

// Decorator 2
class Engraving extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }

  getCost() {
    return this.macBook.getCost() + 200;
  }
}

// Decorator 3
class Insurance extends MacBook {
  constructor(macBook) {
    super();
    this.macBook = macBook;
  }

  getCost() {
    return this.macBook.getCost() + 250;
  }
}

// init main object
let mb = new MacBook();

// init decorators
mb = new Memory(mb);
mb = new Engraving(mb);
mb = new Insurance(mb);

// Outputs: 1522
console.log(mb.getCost());

// Outputs: 11.6
console.log(mb.getScreenSize());
```

</div><br />
  <div><strong className="codeExample">Code Example #3:</strong><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- maintains a reference to the decorated Component

**Component** -- In example code: _User_

- object to which additional functionality is added

**Decorator** -- In example code: _DecoratedUser_

- 'wraps around' Component by maintaining a reference to it
- defines an interface that conforms to Component's interface
- implements the additional functionality (addedMembers in diagram)

```js
let User = function (name) {
  this.name = name;

  this.say = function () {
    console.log('User: ' + this.name);
  };
};

let DecoratedUser = function (user, street, city) {
  this.user = user;
  this.name = user.name; // ensures interface stays the same
  this.street = street;
  this.city = city;

  this.say = function () {
    console.log(
      'Decorated User: ' + this.name + ', ' + this.street + ', ' + this.city
    );
  };
};

function run() {
  let user = new User('Kelly');
  user.say();

  let decorated = new DecoratedUser(user, 'Broadway', 'New York');
  decorated.say();
}

run();

/*

OUTPUT:

User: Kelly
Decorated User: Kelly, Broadway, New York

*/
```

</div>
 </div>

</details>

---

### In what pattern category does the Decorator pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Decorator pattern belongs to the Structural design pattern category.
    </div>
  </div>
</details>

---

### What are the object participants in the Decorator Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The object participants in the Decorator Pattern include the Client, Component, and Decorator.
    </div>
    <br />
    <div></div>

- **Client** – The Client object participant maintains a reference to the decorated Component.
- **Component** – The Component is the object to which additional functionality is added.
- **Decorator** – The Decorator acts a wrapper around the Component by maintaining a reference to it, defines an interface that conforms to the Component’s interface, and implements the additional functionality. There can be more than one decorator in an application.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Decorator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Decorator Pattern include:
    </div>
    <br />
    <div></div>

- You can extend an object’s behavior without making a new subclass.
- You can add or remove responsibilities from an object at runtime.
- You can combine several behaviors by wrapping an object into multiple decorators.
- Single Responsibility Principle. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the Decorator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Decorator Pattern include:
    </div>
    <br />
    <div></div>

- It’s hard to remove a specific wrapper from the wrappers stack.
- It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.
- The initial configuration code of layers might look pretty ugly.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
