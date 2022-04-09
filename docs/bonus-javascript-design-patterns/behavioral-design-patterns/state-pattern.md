---
title: State Design Pattern
description: State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
sidebar_position: 9
sidebar_label: State
---

**Structural: State Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the state design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. The State pattern is commonly used in JavaScript to convert massive switch-base state machines into the objects.<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-state.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Context** -- In example code: _TrafficLight_

- exposes an interface that supports clients of the service
- maintains a reference to a state object that defines the current state
- allows State objects to change its current state to a different state

**State** -- In example code: _Red, Yellow, Green_

- encapsulates the state values and associated behavior of the state

<br/>

```js
let TrafficLight = function () {
  let count = 0;
  let currentState = new Red(this);

  this.change = function (state) {
    // limits number of changes
    if (count++ >= 10) return;
    currentState = state;
    currentState.go();
  };

  this.start = function () {
    currentState.go();
  };
};

let Red = function (light) {
  this.light = light;

  this.go = function () {
    console.log('Red --> for 1 minute');
    light.change(new Green(light));
  };
};

let Yellow = function (light) {
  this.light = light;

  this.go = function () {
    console.log('Yellow --> for 10 seconds');
    light.change(new Red(light));
  };
};

let Green = function (light) {
  this.light = light;

  this.go = function () {
    console.log('Green --> for 1 minute');
    light.change(new Yellow(light));
  };
};

function run() {
  let light = new TrafficLight();
  light.start();
}

run();

/*

OUTPUT:

Red --> for 1 minute
Green --> for 1 minute
Yellow --> for 10 seconds
Red --> for 1 minute
Green --> for 1 minute
Yellow --> for 10 seconds
Red --> for 1 minute
Green --> for 1 minute
Yellow --> for 10 seconds
Red --> for 1 minute
Green --> for 1 minute

*/
```

</div>
 </div>

</details>

---

### In what pattern category does the State pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The State pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### When should you use the State Pattern in JavaScript

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In a real-world application, the State pattern would be useful for adding new states that we might not have conceptualized yet, potentially more easily than with a switch case. Each state is encapsulated and can have its own unique internal operations.
    </div>
    <br />
  </div>
</details>

---

### What are some of the benefits of using the State pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the State Pattern
    </div>
    <br />
    <div></div>

- Single Responsibility Principle. Organize the code related to a particular state into separate classes.
- Open/Closed Principle. Introduce new states without changing existing state classes or the context.
- Simplify the code of the context by eliminating bulky state machine conditionals.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the State pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Applying the pattern can be overkill if a state machine has only a few states or rarely changes.
    </div>
<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
