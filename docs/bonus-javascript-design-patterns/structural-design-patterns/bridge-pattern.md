---
title: Bridge Design Pattern
description: Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.
sidebar_position: 1
sidebar_label: Bridge
---

**Structural: Bridge Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the bridge design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Bridge pattern allows two components, a client, and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern, and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

  <div><strong className="codeExample">Code Example #1:</strong> ES2015+ Modern Implementation<br /><br />

<img src="/img/bridge-pattern.png" /><br /><br />

</div><br />

  <div></div>

```js
'use strict';

class Abstraction {
  constructor() {}

  Operation() {
    this.imp.OperationImp();
  }
}

class RefinedAbstraction extends Abstraction {
  constructor() {
    super();
    console.log('RefinedAbstraction created');
  }

  setImp(imp) {
    this.imp = imp;
  }
}

class Implementor {
  constructor() {}

  OperationImp() {}
}

class ConcreteImplementorA extends Implementor {
  constructor() {
    super();
    console.log('ConcreteImplementorA created');
  }

  OperationImp() {
    console.log('ConcreteImplementorA OperationImp');
  }
}

class ConcreteImplementorB extends Implementor {
  constructor() {
    super();
    console.log('ConcreteImplementorB created');
  }

  OperationImp() {
    console.log('ConcreteImplementorB OperationImp');
  }
}

function run() {
  var abstraction = new RefinedAbstraction();
  var state = Math.floor(Math.random() * 2);
  if (state) abstraction.setImp(new ConcreteImplementorA());
  else abstraction.setImp(new ConcreteImplementorB());

  abstraction.Operation();
}

run();

/*

output:

RefinedAbstraction created
ConcreteImplementorB created
ConcreteImplementorB OperationImp

*/
```

  </div>

  <br />
  <div><strong className="codeExample">Code Example #2:</strong> ES5 Classical Implementation<br /><br />

<img src="/img/javascript-bridge-pattern.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- calls into Abstraction to request an operation

**Abstraction** -- _not used in JavaScript_

- declares an interface for first level abstraction
- maintains a reference to the Implementor

**RefinedAbstraction** -- In example code: _Gestures, Mouse_

- implements and extends the interface defined by Abstraction

**Implementor** -- _not used in JavaScript_

- declares an interface for second level or implementor abstraction

**ConcreteImplementor** -- In example code: _Screen, Audio_

- implements the Implementor interface and defines its effects

  <div></div>

```js
// input devices
let Gestures = function (output) {
  this.output = output;

  this.tap = function () {
    this.output.click();
  };
  this.swipe = function () {
    this.output.move();
  };
  this.pan = function () {
    this.output.drag();
  };
  this.pinch = function () {
    this.output.zoom();
  };
};

let Mouse = function (output) {
  this.output = output;

  this.click = function () {
    this.output.click();
  };
  this.move = function () {
    this.output.move();
  };
  this.down = function () {
    this.output.drag();
  };
  this.wheel = function () {
    this.output.zoom();
  };
};

// output devices

let Screen = function () {
  this.click = function () {
    console.log('Screen select');
  };
  this.move = function () {
    console.log('Screen move');
  };
  this.drag = function () {
    console.log('Screen drag');
  };
  this.zoom = function () {
    console.log('Screen zoom in');
  };
};

let Audio = function () {
  this.click = function () {
    console.log('Sound oink');
  };
  this.move = function () {
    console.log('Sound waves');
  };
  this.drag = function () {
    console.log('Sound screetch');
  };
  this.zoom = function () {
    console.log('Sound volume up');
  };
};

function run() {
  let screen = new Screen();
  let audio = new Audio();

  let hand = new Gestures(screen);
  let mouse = new Mouse(audio);

  hand.tap();
  hand.swipe();
  hand.pinch();

  mouse.click();
  mouse.move();
  mouse.wheel();
}

run();

/*

OUTPUT:

Screen select
Screen move
Screen zoom in
Sound oink
Sound waves
Sound volume up

*/
```

  </div>

  </div>
</details>

---

### In what pattern category does the Bridge pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Bridge pattern belongs to the Structural design pattern category. It is used to separate an abstraction from its implementation so that the two can vary independently.
    </div>
  </div>
</details>

---

### What is the use case for the Bridge Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Bridge pattern is a great pattern for driver development, but it is rarely seen in JavaScript.
    </div>

  </div>
</details>

---

### What are the objects that participate in the Bridge Pattern.

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The objects that participate in the Bridge Pattern include the Client, Abstraction, Refined Abstraction, Implementor, and ConcreteImplementor.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> The objects that participate in the Bridge Pattern include the Client, Abstraction, Refined Abstraction, Implementor, and ConcreteImplementor.
    </div>
    <br />
    <div></div>

- **Client** – The Client makes a call to the Abstraction to request an operation.
- **Abstraction** – The Abstraction, not commonly used in JavaScript, declares an interface for the first level of abstraction and maintains a reference to the Implementor.
- **RefinedAbstraction** – The RefinedAbstraction implements and extends the interface defined by Abstraction.
- **Implementor** – The implementor, not used in JavaScript, declares an interface for second level or implementor abstraction.
- **ConcreteImplementor** – The ConcreteImplementor implements the Implementor interface and defines its effects.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Bridge Pattern
    </div>
    <br />
    <div></div>

- Loosely coupled code - As bridge pattern decouple abstraction from its implementation reason the implementation can be changed without affecting the client code and the client code need not be compiled when the implementation changes.
- Increases the code maintainability, reusability, and reduces code duplication.
- Platform independent classes and applications can be developed.
- Helps to promote the Open-Closed principle, new abstractions and implementations can be developed independently.
- Decoupling abstraction from implementation - bridge pattern can be used to avoid the binding between abstraction and implementation and to select the implementation at run time.
- Improved Extensibility – Abstraction and implementation can be extended independently.

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the Bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Bridge Pattern
    </div>
    <br />
    <div></div>

- Bridge pattern implementation increases code complexity.
- Interfaces with only single implementation
- Multiple indirection - A level of indirection is introduced as the request is passed from the Abstraction to the actual implementor.
- You might make the code more complicated by applying the pattern to a highly cohesive class.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
