---
title: Facade Design Pattern
description: The Façade design pattern creates an interface that protects clients from complex functionality in one or more subsystems.
sidebar_position: 5
sidebar_label: Facade
keywords:
  - facade pattern
  - façade pattern
  - facade design pattern
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
  - facade pattern
  - façade pattern
  - facade design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FacadeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Facade Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Facade Pattern**

<CloseAllAnswers />

---

### Could you please explain the facade design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Facade pattern in JavaScript provides a simplified interface for accessing a complex system or set of objects, hiding its underlying complexity and making it easier to use.<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Façade design pattern creates an interface that protects clients from complex functionality in one or more sub-systems. It's a simple pattern that may appear insignificant, but it's powerful and advantageous. We commonly find it in systems based on a multi-layer architecture.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

```js
let orderNumber = 0;

// Facade
class PlaceFoodOrder {
  placeOrder(orderDetails) {
    const orderId = PlaceFoodOrder.generateId();
    let chef;
    if (orderDetails.foodType === 'Main Course') {
      chef = new MainCourseChef();
    } else if (orderDetails.foodType == 'Dessert') {
      chef = new DessertChef();
    }
    return chef.addFoodOrder({ orderId, orderDetails });
  }

  static generateId() {
    return ++orderNumber;
  }
}

// Sub Systems
class FoodOrders {
  constructor() {
    this.orders = [];
  }

  addFoodOrder(order) {
    this.orders.push(order);
    return this.conveyOrder(order);
  }

  timetoMakeOrder() {}
  conveyOrder(order) {}
}

class MainCourseChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }

  timetoMakeOrder() {
    return Math.floor(Math.random() * 50) + 10;
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder();
    console.log(
      `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`
    );
  }
}

class DessertChef extends FoodOrders {
  constructor() {
    super();
    this.assigned = true;
    return this;
  }

  timetoMakeOrder() {
    return Math.floor(Math.random() * 30) + 10;
  }

  conveyOrder({ orderId, orderDetails }) {
    const time = this.timetoMakeOrder();
    console.log(
      `Order number ${orderId}: ${orderDetails.foodDetails} will be served in ${time} minutes.`
    );
  }
}

const customer = new PlaceFoodOrder();

const order1 = customer.placeOrder({
  foodType: 'Main Course',
  foodDetails: 'Pasta with Shrimps',
});

const order2 = customer.placeOrder({
  foodType: 'Dessert',
  foodDetails: 'Molten Lava Cake',
});

/*

output:

Order number 1: Pasta with Shrimps will be served in 40 minutes.
Order number 2: Molten Lava Cake will be served in 34 minutes.

*/
```

</div><br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

<img src="/img/javascript-facade.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Façade** -- Example code: _Mortgage_

- knows which sub-systems are responsible for a request
- Client requests are routed to the appropriate sub-system objects.

**Sub Systems** -- Example code: _Bank, Credit, Background_

- carries out and implements specialized sub-system functionality
- have no knowledge of or connection to the façade

<br/>

```js
let Mortgage = function (name) {
  this.name = name;
};

Mortgage.prototype = {
  applyFor: function (amount) {
    // access multiple subsystems...
    let result = 'approved';
    if (!new Bank().verify(this.name, amount)) {
      result = 'denied';
    } else if (!new Credit().get(this.name)) {
      result = 'denied';
    } else if (!new Background().check(this.name)) {
      result = 'denied';
    }
    return this.name + ' has been ' + result + ' for a ' + amount + ' mortgage';
  },
};

let Bank = function () {
  this.verify = function (name, amount) {
    // complex logic ...
    return true;
  };
};

let Credit = function () {
  this.get = function (name) {
    // complex logic ...
    return true;
  };
};

let Background = function () {
  this.check = function (name) {
    // complex logic ...
    return true;
  };
};

function run() {
  let mortgage = new Mortgage('Joan Templeton');
  let result = mortgage.applyFor('$100,000');

  console.log(result);
}

run();

/*

OUTPUT:

Joan Templeton has been approved for a $100,000 mortgage

*/
```

</div>
 </div>

</details>

---

### The Facade pattern belongs to which pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Facade pattern in JavaScript belongs to the Structural pattern family, which focuses on organizing objects and classes to form larger structures and functionalities.
    </div>
  </div>
</details>

---

### When should you employ the Façade Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> In JavaScript, you should employ the Facade pattern when you need to provide a simpler and more unified interface to a complex system or set of objects, reducing complexity and improving usability.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The facade pattern makes it easier for a client to interact with a system. As a result, it gets used when an application's underlying code is large and complex, and the client does not need to see it.<br/><br/>It gets used in communicating with methods in a library without understanding what is happening behind the scenes. JavaScript libraries, such as jQuery, are an example.
    </div>
  </div>
</details>

---

### Can you explain, What are the Façade Pattern's object participants?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> In the Facade pattern in JavaScript, the object participants include a Facade class, which provides a simplified interface, and a set of complex subsystem classes or objects that it hides from clients.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> There are two types of objects represented in the Façade Pattern. They consist of the Façade and the Sub Systems (There can be multiple sub-system objects in this pattern).
    </div>
    <br />
    <div></div>

- **Facade** – The Façade understands which sub-systems are in charge of a request and routes client requests to the appropriate sub-system objects.
- **Sub Systems** – A sub-system implements and executes specialized sub-system activities, but it has no cohesive knowledge or connection to the Façade itself.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Facade pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some benefits of using the Facade pattern in JavaScript include its ability to simplify complex systems for clients, improve code readability and maintainability, and reduce coupling between clients and subsystems.
    </div>

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Facade pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some disadvantages of using the Facade pattern in JavaScript include the potential for introducing a single point of failure, limiting flexibility, and increasing the complexity of the Facade itself.
    </div>
<br />
  </div>
</details>

---

### Are there any alternatives to using the facade pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, there are alternative patterns that can simplify complex systems in JavaScript, such as using dependency injection, adapters, or proxies.
    </div>
<br />
  </div>
</details>

---
