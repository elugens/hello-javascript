---
title: Factory Method - Design Pattern
description: Factory Method is a Creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.
sidebar_position: 1
sidebar_label: Factory Method
---

**Creational: Factory Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the factory method/design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A Factory Method creates new objects as instructed by the client. One way to create new objects in JavaScript is by invoking a constructor function with the new operator. There are times when the client should not or does not know which of numerous candidates objects to instantiate. The Factory Method enables the client to delegate object creation while maintaining control over the type to be instantiated.<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/structure-factory-method.png" /><br /><br />

**The objects participating in this pattern are:**

**Creator** -- In example code: _Factory_

- the Factory object that creates new products
- implements factory method which returns newly created products

**AbstractProduct** -- _not used in JavaScript_

- declares an interface for products

**ConcreteProduct** -- In example code: _Employees_

- the manufactured product
- All products support the same interface (properties and methods)

<br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we do not have interfaces in JavaScript. Therefore, we must implement it so that JavaScript translates into an interface.

:::

</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

  <div></div>

```js
let Factory = function () {
  this.createEmployee = function (type) {
    let employee;

    if (type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'temporary') {
      employee = new Temporary();
    } else if (type === 'contractor') {
      employee = new Contractor();
    }

    employee.type = type;

    employee.say = function () {
      console.log(this.type + ': rate ' + this.hourly + '/hour');
    };

    return employee;
  };
};

let FullTime = function () {
  this.hourly = '$12';
};

let PartTime = function () {
  this.hourly = '$11';
};

let Temporary = function () {
  this.hourly = '$10';
};

let Contractor = function () {
  this.hourly = '$15';
};

function run() {
  let employees = [];
  let factory = new Factory();

  employees.push(factory.createEmployee('fulltime'));
  employees.push(factory.createEmployee('parttime'));
  employees.push(factory.createEmployee('temporary'));
  employees.push(factory.createEmployee('contractor'));

  for (let i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }
}

run();

/*

OUTPUT:

fulltime: rate $12/hour
parttime: rate $11/hour
temporary: rate $10/hour
contractor: rate $15/hour

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

  <div></div>

```js
//Factory method for creating new shape instances
function shapeFactory() {
  this.createShape = function (shapeType) {
    var shape;
    switch (shapeType) {
      case 'rectangle':
        shape = new Rectangle();
        break;
      case 'square':
        shape = new Square();
        break;
      case 'circle':
        shape = new Circle();
        break;
      default:
        shape = new Rectangle();
        break;
    }
    return shape;
  };
}

// Constructor for defining new Rectangle
var Rectangle = function () {
  this.draw = function () {
    console.log('This is a Rectangle');
  };
};

// Constructor for defining new Square
var Square = function () {
  this.draw = function () {
    console.log('This is a Square');
  };
};

// Constructor for defining new Circle
var Circle = function () {
  this.draw = function () {
    console.log('This is a Circle');
  };
};

var factory = new shapeFactory();
//Creating instance of factory that makes rectangle,square,circle respectively
var rectangle = factory.createShape('rectangle');
var square = factory.createShape('square');
var circle = factory.createShape('circle');

rectangle.draw();
square.draw();
circle.draw();

/*
  OUTPUT
  
  This is a Rectangle
  This is a Square
  This is a Circle
 
*/
```

  </div>

  </div>
</details>

---

### In what pattern category does the factory pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The factory pattern belongs to the creational design pattern group.
    </div>
  </div>
</details>

---

### What is the primary goal of the factory method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Factory Method's primary goal is extensibility. Factory Methods commonly get used in applications that manage, maintain, or manipulate groups of distinct but similar objects (i.e., methods and properties).
    </div>
  </div>
</details>

---

### What are the object participants in the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> There are three participants in the factory pattern, including the Creator, AbstractProduct, and ConcreteProduct.
    </div><br />
    <div>
      <strong>Technical Response:</strong> There are three participants in the factory pattern, including the Creator, AbstractProduct, and ConcreteProduct. The Creator is the factory object that creates new products and implements “factoryMethod” which returns newly manufactured products. The AbstractProduct declares an interface for the products, except in JavaScript. The ConcreteProduct is the product getting created, and all ConcreteProducts support the same interface.
    </div><br />

  </div>
</details>

---

### Can you name a use case for the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Use Cases and Applicability of the Factory Pattern
      </div>

<div></div>

- You should use the Factory Method when you don’t know the exact types and dependencies of the objects your code should work within your application.

- When you want to give users of your library or framework the ability to extend its internal components, we use the Factory Method to meet this specification.

- The Factory Method may be used to save system resources by reusing existing objects rather than constructing them each time.

<br />

  </div>
</details>

---

### What are some of the benefits of using the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Factory Pattern.
    </div>
    <br />
    <div></div>

- You avoid a close relationship between the Creator and the concrete products.
- **Single Responsibility Principle (S.R.P.):** The principle of single responsibility. You can consolidate the product creation code into a single location in the program, making it easier to support.
- **Open/Closed Principle:** You can integrate new products into the system without busting the current client code.

<br />
  </div>
</details>

---

### What are some of the factory pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Factory Pattern.<br /><br />
      The code may become more complicated as you introduce large numbers of new subclasses to implement the pattern. The best-case scenario is incorporating the design into an existing creator class hierarchy.<br /><br />
    </div>
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
