---
title: Facade Design Pattern
description: The Façade design pattern creates an interface that protects clients from complex functionality in one or more subsystems.
sidebar_position: 5
sidebar_label: Facade
---

**Structural: Facade Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please explain the facade design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Façade design pattern creates an interface that protects clients from complex functionality in one or more subsystems. It's a simple pattern that may appear insignificant, but it's powerful and advantageous. It is frequently found in systems based on a multi-layer architecture.<br/>
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
- Client requests are routed to the appropriate subsystem objects.

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

### Which pattern category does the Facade pattern fall under?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Facade pattern is a type of structural design pattern.
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
      <strong>Interview Response:</strong> The facade pattern makes it easier for a client to interact with a system. As a result, it can be used when an application's underlying code is large and complex and the client does not need to see it.<br/><br/>It can also be used to communicate with methods in a library while without understanding what is happening behind the scenes. JavaScript libraries, such as jQuery, are an example.
    </div>
  </div>
</details>

---

### Can you elaborate on the Façade Pattern's object participants?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> There are two types of objects represented in the Façade Pattern. They consist of the Façade and the Sub Systems (There can be multiple sub-system objects in this pattern).
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
      <strong>Interview Response:</strong> You can isolate your code from the complexity of a sub-system.
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
      <strong>Interview Response:</strong> A facade can be a god object that is tightly linked to all classes in an app.
    </div>

<br />
  </div>
</details>

---
