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

### Can you explain the factory design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/structure-factory-method.png" /><br /><br />

**The objects participating in this pattern are:**

**Creator** -- In example code: _Factory_

- the 'factory' object that creates new products
- implements 'factoryMethod' which returns newly created products

**AbstractProduct** -- _not used in JavaScript_

- declares an interface for products

**ConcreteProduct** -- In example code: _Employees_

- the product being created
- all products support the same interface (properties and methods)

<br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in JavaScript. Therefore, we must implement it in a way that JavaScript translates into an interface.

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

### In what pattern category does the factory pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The factory pattern belongs to the Creational design pattern category.
    </div>
  </div>
</details>

---

### What is the main purpose of the factory method/function?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common.
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
      <strong>Interview Response:</strong> There are three participants the factory pattern including the Creator, AbstractProduct, and ConcreteProduct.
    </div><br />
    <div>
      <strong>Technical Response:</strong> There are three participants the factory pattern including the Creator, AbstractProduct, and ConcreteProduct. The Creator is the factory object that creates new products and implements ‘factoryMethod’ which returns newly created products. The AbstractProduct declares an interface for the products, but this is not used in JavaScript. The ConcreteProduct is the product being created. All ConcreteProducts support the same interface.
    </div><br />

:::note

Though the definition particularly mentions that an interface needs to be defined, we don’t have interfaces in JavaScript. Therefore, we must implement it in a way that JavaScript translates into an interface.

:::

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

- You should use the Factory Method when you don’t know beforehand the exact types and dependencies of the objects your code should work with.

- You can use the Factory Method when you want to provide users of your library or framework with a way to extend its internal components.

- You can use the Factory Method when you want to save system resources by reusing existing objects instead of rebuilding them each time.

<br />

  </div>
</details>

---

### What are some of the benefits of using the factory method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Factory Pattern
    </div>
    <br />
    <div></div>

- You avoid tight coupling between the creator and the concrete products.
- Single Responsibility Principle. You can move the product creation code into one place in the program, making the code easier to support.
- Open/Closed Principle. You can introduce new types of products into the program without breaking existing client code.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the factory pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Factory Pattern<br /><br />
      The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best-case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.<br /><br />
    </div>
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
