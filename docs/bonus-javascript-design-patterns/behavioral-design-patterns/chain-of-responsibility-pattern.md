---
title: Chain of Responsibility Pattern
description: The chain of responsibility pattern allows a request sent by a client to be received by more than one object.
sidebar_position: 3
sidebar_label: Chain of Responsibility
---

**Structural: Chain of Responsibility**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the chain of responsibility design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> This is a behavioral JavaScript design pattern that creates a chain of receiver objects for a request. This pattern promotes loose coupling. We can avoid coupling the sender of a request to a receiver, and more than one receiver can handle the request.<br/><br/>
      The receiving objects will be linked together, and they can choose to act on the request and/or pass it to the next receiver object. It is also easy to add new receiver objects to the chain.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong> ES6 Implementation<br /><br />

<img src="/img/javascript-chain-of-responsibility.jpg" /><br /><br />

<img src="/img/chain_of_responsibility_atm.png
" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _Request_

- initiates the request to a chain of handler objects

**Handler** -- In example code: _Request.get() method_

- defines an interface for handling the requests
- implements the successor link (returning 'this')

<br/>

```js
class Request {
  constructor(amount) {
    this.amount = amount;
    console.log('Request Amount: ' + this.amount);
  }

  get(bill) {
    let count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log('Dispense ' + count + ' $' + bill + ' bills');
    return this;
  }
}

function run() {
  let request = new Request(378); //Requesting amount
  request.get(100).get(50).get(20).get(10).get(5).get(1);
}

run();

/*
 
OUTPUT

Request Amount:378
Dispense 3 $100 bills
Dispense 1 $50 bills
Dispense 1 $20 bills
Dispense 0 $10 bills
Dispense 1 $5 bills
Dispense 3 $1 bills
 
*/
```

<strong className="codeExample">Code Example:</strong> ES5 Implementation<br /><br />

```js
let Request = function (amount) {
  this.amount = amount;
  console.log('Request Amount:' + this.amount);
};

Request.prototype = {
  get: function (bill) {
    let count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log('Dispense ' + count + ' $' + bill + ' bills');
    return this;
  },
};

function run() {
  let request = new Request(378); //Requesting amount
  request.get(100).get(50).get(20).get(10).get(5).get(1);
}

run();

/*
 
OUTPUT

Request Amount:378
Dispense 3 $100 bills
Dispense 1 $50 bills
Dispense 1 $20 bills
Dispense 0 $10 bills
Dispense 1 $5 bills
Dispense 3 $1 bills
 
*/
```

</div>
 </div>

</details>

---

### In what pattern category does the Chain of Responsibility pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Chain of Responsibility pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### Can you describe a use case for the Chain of Responsibility Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can use it if your program is to handle various requests in different ways without knowing the sequence and type of requests beforehand. It allows you to chain several handlers, thus, allowing all of them a chance to process the request.<br/><br/>A good example of the use of the chain of responsibility pattern is in the process of event bubbling in the DOM where the event propagates through the nested elements, one of which may choose to handle the event.
    </div>

<br />
  </div>
</details>

---

### What are some of the benefits of using the Chain of Responsibility pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Chain of Responsibility Pattern
    </div>
    <br />
    <div></div>

- You can control the order of request handling.
- Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform operations.
- Open/Closed Principle. You can introduce new handlers into the app without breaking the existing client code.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Chain of Responsibility pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Chain of Responsibility Pattern.
    </div>
    <br />
    <div></div>

- Some requests may end up unhandled.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
