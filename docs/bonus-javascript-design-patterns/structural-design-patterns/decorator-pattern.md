---
title: Decorator Design Pattern
description: The decorator pattern is a JS structural pattern that promotes code reusability. They, like Mixins, can be viewed as a replacement for object sub-classing.
sidebar_position: 4
sidebar_label: Decorator
keywords:
  - decorator pattern
  - decorator design pattern
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
  - decorator pattern
  - decorator design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DecoratorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Decorator Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Decorator Pattern**

<CloseAllAnswers />

---

### What is the Decorator Pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Decorator Pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Coffee {
  cost() {
    return 5;
  }
}

const withMilk = coffee => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 1;
};

const withSugar = coffee => {
  const cost = coffee.cost();
  coffee.cost = () => cost + 2;
};

// Example usage:
const coffee = new Coffee();
withMilk(coffee);
withSugar(coffee);
console.log(coffee.cost());  // Outputs: 8
```

In this example, `Coffee` is the object we're decorating. The `withMilk` and `withSugar` decorators add additional functionality to the `Coffee` object's `cost` method. We can call these decorators on any `Coffee` object, and they modify only the object they're called on without changing the `Coffee` class or affecting other `Coffee` objects.

  </div>
  </div>
</details>

---

### Can you explain the Decorator design pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Decorator Pattern in JavaScript allows you to dynamically add behavior or modify the behavior of an object at runtime, without affecting other objects of the same class.<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> Decorators are a structural JS design pattern that aims to promote code reuse. Like Mixins, we can consider them as another viable alternative to object sub-classing. This pattern enables behavior that gets dynamically added to an individual object without affecting the behavior of other objects in the same class. Decorators can increase functionality in a more flexible way than sub-classing.<br/>
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

### Why use the Decorator Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It promotes code flexibility, allowing dynamic addition of responsibilities to objects and avoids sub-classing clutter.
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
      <strong>Interview Response:</strong> The Decorator pattern in JavaScript belongs to the Structural pattern family, which focuses on organizing objects and classes to form larger structures and functionalities.
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
      <strong>Interview Response:</strong> In the Decorator pattern in JavaScript, the object participants include the Component interface or class, ConcreteComponent, and Decorator interface or class. Additionally, there are ConcreteDecorator classes.
    </div>
    <div></div>

- **Component**: An interface defining the default behavior objects.
- **ConcreteComponent**: An object to be decorated.
- **Decorator**: An abstract class that implements the component interface and holds an instance of a component.
- **ConcreteDecorator**: A class that adds responsibilities to the component.

<br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's illustrate these with a modern JavaScript code:

```javascript
// Component
class Car {
  constructor() {
    this.cost = function() {
      return 0;
    };
  }
}

// ConcreteComponent
class ModelS extends Car {
  constructor() {
    super();
    this.cost = function() {
      return 50000;
    };
  }
}

// Decorator
class CarOptions extends Car {
  constructor(car) {
    super();
    this.decoratedCar = car;
  }

  cost() {
    return this.decoratedCar.cost();
  }
}

// ConcreteDecorator
class EnhancedAutopilot extends CarOptions {
  constructor(car) {
    super(car);
  }

  cost() {
    return this.decoratedCar.cost() + 5000;
  }
}

// Example usage
let myCar = new ModelS();
myCar = new EnhancedAutopilot(myCar);
console.log(myCar.cost());  // Outputs: 55000
```

In this example, `Car` is the Component, `ModelS` is the ConcreteComponent, `CarOptions` is the Decorator, and `EnhancedAutopilot` is the ConcreteDecorator. Each ConcreteDecorator enhances the behavior of the ConcreteComponent it wraps.

  </div>
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
      <strong>Interview Response:</strong> Some advantages of using the Decorator pattern in JavaScript include its ability to add new functionality to objects dynamically, its flexibility, and its ability to allow for easy customization of object behavior.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Decorator Pattern include:
    </div>
    <br />
    <div></div>

- You can change the behavior of an object without creating a new subclass.
- At runtime, you can add or remove responsibilities from an object.
- Wrapping an object in multiple decorators allows you to combine several behaviors.
- Single Responsibility Principle - The principle of single responsibility. A monolithic class that implements many possible behavior variants can get divided into several smaller classes.

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
      <strong>Interview Response:</strong> Some disadvantages of using the Decorator pattern in JavaScript include the potential for an excessive number of small objects, increased complexity, and potential performance impacts due to the added layers of abstraction.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Decorator Pattern include:
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

### Are there any alternatives to using the decorator pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, there are alternative patterns to achieve similar functionality as the Decorator pattern in JavaScript, such as using mixins, composition, or inheritance.
    </div>
    <br />
  </div>
</details>

---

### Can Decorators Affect the underlying object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Decorators can modify behavior, but the object itself remains unaltered.
  </div>
  </div>
</details>

---

### How does the Decorator Pattern affect code maintenance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It enhances code maintenance by allowing isolated changes to individual objects without impacting the object class.
  </div>
  </div>
</details>

---

### Can you describe a typical use case for the Decorator Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A common use case of the Decorator Pattern is when you need to add new responsibilities or behaviors to an object dynamically without affecting other instances of the same class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Consider an example where we're building a pizza ordering system. Different types of pizzas have different base costs, and toppings like cheese, tomatoes, and bacon can be added to any pizza. Here's how this could be achieved with the Decorator Pattern:

```javascript
// Component
class Pizza {
  cost() {
    return 0;
  }
}

// ConcreteComponent
class MargheritaPizza extends Pizza {
  cost() {
    return 10;
  }
}

// Decorator
class ToppingDecorator extends Pizza {
  constructor(pizza) {
    super();
    this.decoratedPizza = pizza;
  }

  cost() {
    return this.decoratedPizza.cost();
  }
}

// ConcreteDecorator
class CheeseTopping extends ToppingDecorator {
  constructor(pizza) {
    super(pizza);
  }

  cost() {
    return this.decoratedPizza.cost() + 2;
  }
}

// ConcreteDecorator
class TomatoTopping extends ToppingDecorator {
  constructor(pizza) {
    super(pizza);
  }

  cost() {
    return this.decoratedPizza.cost() + 1;
  }
}

// Example usage
let myPizza = new MargheritaPizza();
myPizza = new CheeseTopping(myPizza);
myPizza = new TomatoTopping(myPizza);
console.log(myPizza.cost());  // Outputs: 13
```

In this example, we define the `cost` methods inside the classes, not inside the constructor. This allows us to create a `MargheritaPizza` object, then decorate it with additional toppings, each affecting the final cost of the pizza.

  </div>
  </div>
</details>

---

### Does the Decorator Pattern impact the object's identity?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it doesn't impact the object’s identity as it encapsulates the original object rather than replacing it.
  </div>
  </div>
</details>

---

### What principle does the Decorator Pattern support?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It supports the Open/Closed principle, classes should be open for extension but closed for modification.
  </div>
  </div>
</details>

---

### How does the Decorator Pattern differ from Inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, the Decorator Pattern enhances or alters an object's functionality at runtime, while inheritance involves a new object inheriting properties from a parent class at the creation time, implying a static relationship.
  </div>
  </div>
</details>

---

### Can multiple Decorators be applied to a single object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, multiple Decorators can be "stacked" on an object to add combined behaviors.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Yes, multiple decorators can be applied to a single object in modern JavaScript.

Here is an example using a coffee order system where we decorate a base coffee with multiple add-ons:

```javascript
class Coffee {
  cost() {
    return 5;
  }
}

class Milk {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 1;
  }
}

class Sugar {
  constructor(coffee) {
    this.coffee = coffee;
  }
  
  cost() {
    return this.coffee.cost() + 2;
  }
}

// Example usage
let coffee = new Coffee();
coffee = new Milk(coffee);
coffee = new Sugar(coffee);

console.log(coffee.cost());  // Outputs: 8
```

In this example, we start with a base coffee object. Then we wrap (or "decorate") that base coffee with a `Milk` object, and then wrap the `Milk` object with a `Sugar` object. Each decorator adds its own cost to the total, resulting in a final cost of 8.

  </div>
  </div>
</details>

---

### Is the Decorator Pattern similar to the Adapter Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Decorator extends functionality while Adapter changes the interface of an existing object.
  </div>
  </div>
</details>

---
