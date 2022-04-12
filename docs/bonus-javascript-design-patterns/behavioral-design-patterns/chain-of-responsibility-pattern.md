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
      <strong>Interview Response:</strong> This behavioral JavaScript design pattern generates a series of receiver objects in response to a request. This approach encourages loose coupling, allowing us to avoid coupling the sender of a request to a receiver, and allowing other receivers to handle the request.<br/><br/>
      The receiving objects will be coupled together, and they'll be able to act on the request before passing it over to the next receiver object. It's also simple to add additional recipient objects to the chain.
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

- initiates the request to a chain of handler objects.

**Handler** -- In example code: _Request.get() method_

- defines an interface for handling the requests.
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
      <strong>Interview Response:</strong> The Chain of Responsibility pattern is a type of behavioral design pattern.
    </div>
  </div>
</details>

---

### Can you provide an example of a Chain of Responsibility Pattern use case?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can use it if your program handles various requests in different ways without knowing the sequence and type of requests beforehand. It allows you to chain several handlers, thus, allowing all of them a chance to process the request.<br/><br/>An illustration of the chain of responsibility pattern is in event bubbling in the DOM, where the event propagates through the nested elements, one of which may choose to handle the event.
    </div>

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Chain of Responsibility design pattern?

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

- You have control over the sequence in which requests are handled.
- The principle of single responsibility. Classes that invoke operations can be separated from classes that perform tasks.
- The principle of open/closed. New handlers can be added to the app without disrupting the old client code.

<br />
  </div>
</details>

---

### What are the disadvantages of the Chain of Responsibility pattern?

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