---
title: Decorator Design Pattern
description: Decorators are a structural JS design pattern that aims to promote code reuse. Like Mixins, they can be considered another viable alternative to object sub-classing.
sidebar_position: 4
sidebar_label: Decorator
---

**Structural: Decorator Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please explain the decorator design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Decorators are a structural JS design pattern that aims to promote code reuse. Like Mixins, they get considered as another viable alternative to object sub-classing. This pattern enables behavior that gets dynamically added to an individual object without affecting the behavior of other objects in the same class. Decorators can increase functionality in a more flexible way than sub-classing.<br/>
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

**Client** -- Example code: _the run() function_

- maintains a reference to the decorated Component

**Component** -- In example code: _User_

- object to which additional functionality gets added

**Decorator** -- In example code: _DecoratedUser_

- wraps around -- Component by maintaining a reference to it
- defines an interface that is compatible with the interface of the Component
- implements the additional functionality (addedMembers in the diagram)

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

### The Decorator pattern belongs to which pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Decorator pattern is part of the Structural design pattern family.
    </div>
  </div>
</details>

---

### What are the Decorator Pattern's object participants?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Client, Component, and Decorator are the object participants in the Decorator Pattern.
    </div>
    <br />
    <div></div>

- **Client** – The Client object participant references the decorated Component.
- **Component** – The object to which additional functionality gets added is a Component.
- **Decorator** – By keeping a reference to the Component, defining an interface that conforms to the Component's interface, and implementing the additional functionality, the Decorator acts as a wrapper around it. In an application, there can be more than one Decorator.

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Decorator pattern?

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

- You can change the behavior of an object without creating a new subclass.
- At runtime, you can add or remove responsibilities from an object.
- Wrapping an object in multiple decorators allows you to combine several behaviors.
- Single Responsibility Principle - The principle of single responsibility. A monolithic class that implements many possible behavior variants can get divided into several smaller classes.
  .

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Decorator pattern?

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

- It’s hard to remove a specific wrapper from the wrapper's stack.
- It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the Decorator's stack.
- The initial configuration code of layers might look pretty ugly.

<br />
  </div>
</details>

---
