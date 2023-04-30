---
title: Bridge Design Pattern
description: The bridge pattern is a structural pattern used in web development to decouple an abstraction from its implementation so that the two can vary independently.
sidebar_position: 1
sidebar_label: Bridge
keywords:
  - bridge pattern
  - bridge design pattern
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
  - bridge pattern
  - bridge design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BridgeSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Bridge Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Bridge Pattern**

<CloseAllAnswers />

---

### Could you please explain, What is the bridge design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Bridge pattern in JavaScript is a structural pattern that enables decoupling of an abstraction and its implementation, allowing them to vary independently. It promotes flexibility, extensibility, and code reuse.
    </div><br />
    <div>
      <strong>Technical Response:</strong> The Bridge pattern allows two components, a client, and a service, to work together, with each element having it's own interface. The Bridge Pattern is a high-level architectural pattern, and its primary goal is to write better code through two levels of abstraction. It facilitates the very loose coupling of objects and sometimes referred to as a double Adapter pattern.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

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
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

<img src="/img/javascript-bridge-pattern.jpg" /><br /><br />

**This pattern's objects are as follows**

**Client** -- Example code: _the run() function_

- To request an operation, we make a call into abstraction.

**Abstraction** -- _not used in JavaScript_

- declares a first-level abstraction interface
- manages a reference/pointer to the Implementor

**RefinedAbstraction** -- Example code: _Gestures, Mouse_

- implements and expands on the abstraction-defined interface

**Implementor** -- _not used in JavaScript_

- declares an interface for second-level or implementor abstraction

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

### The Bridge pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In software engineering, we define the bridge pattern as a structural design pattern.
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
      <strong>Interview Response:</strong> The Bridge pattern in JavaScript is often used in situations where you need to separate an abstraction from its implementation, allowing for greater flexibility and extensibility in development.
    </div>
  </div>
</details>

---

### What are the objects that participate in the Bridge Pattern?

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
      <strong>Technical Response:</strong> The Bridge Pattern objects include the Client, Abstraction, Refined Abstraction, Implementor, and ConcreteImplementor.
    </div>
    <br />
    <div></div>

- **Client** – To request an operation, the Client makes a call to the abstraction.
- **Abstraction** – The Abstraction, which is uncommon in JavaScript, declares an interface for the first level of abstraction and keeps a reference to the Implementor.
- **RefinedAbstraction** – The RefinedAbstraction implements and extends the abstraction-defined interface.
- **Implementor** – The Implementor interface provides an interface for the second level of implementor abstraction.
- **ConcreteImplementor** – The ConcreteImplementor is responsible for implementing the Implementor interface and defining its effects.

:::note

JavaScript does not support abstract classes, and as a result, Abstraction and Implementor get excluded.

:::

<br />
  </div>
</details>

---

### What are some of the advantages of employing the Bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Some advantages of using the Bridge pattern in JavaScript include increased flexibility, extensibility, and code reuse, as well as improved maintainability and reduced complexity.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Bridge Pattern
    </div>
    <br />
    <div></div>

- Loosely coupled code - Because the bridge pattern decouples an abstraction from its implementation, changes to the implementation do not affect the client code. The client code does not need to be compiled when the implementation changes.
- Reduces code duplication while increasing code maintainability and reusability.
- Classes and applications that are platform agnostic can be created.
- Helps to promote the Open-Closed principle, new abstractions and implementations can be developed independently.
- Decoupling abstraction from implementation: bridge pattern can avoid the binding between abstraction and implementation and select the implementation at run time.
- Improved Extensibility – Abstraction and implementation can be extended independently.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Some disadvantages of using the Bridge pattern in JavaScript include increased complexity due to additional layers of abstraction, potential performance overhead, and added development time.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Bridge Pattern
    </div>
    <br />
    <div></div>

- Bridge pattern implementation increases code complexity.
- Interfaces with only a single implementation.
- Using the technique in a highly cohesive class may cause the code to become more complicated.

<br />
  </div>
</details>

### Are there any alternatives to using the bridge pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some alternatives to using the Bridge pattern in JavaScript include the Strategy pattern, the Decorator pattern, and the Adapter pattern, depending on the specific requirements of the project.
    </div>
  </div>
</details>

---
