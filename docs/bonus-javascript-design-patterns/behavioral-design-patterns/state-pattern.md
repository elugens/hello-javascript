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
      <strong>Interview Response:</strong> The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. The State pattern is commonly used in JavaScript to convert massive switch-base state machines into objects.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-state.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Context** -- example code: _TrafficLight_

- exposes an interface that supports clients of the service
- keeps a reference to a state object that defines the current state.
- Allows State objects to change their current state to another state.

**State** -- example code: _Red, Yellow, Green_

- captures the state's values and associated behavior

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

### The State pattern belongs to which pattern category?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The State pattern is a type of behavioral design pattern.
    </div>
  </div>
</details>

---

### When should you utilize the JavaScript State Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In a real-world application, the State pattern could be handy for introducing new states that we haven't yet considered, possibly more simply than a switch case. Each state is contained and has its own set of internal functions.
    </div>
    <br />
  </div>
</details>

---

### What are some of the advantages of employing the State pattern?

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

- Singular Responsibility Principle -- Separate the code related to each state into separate classes.
- The Open/Closed Principle - Add new states without modifying existing state classes or the context.
- Simplify the contextual code by removing bulky state machine conditionals.

<br />
  </div>
</details>

---

### What are some of the State pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Applying the pattern may be excessive if a state machine has only a few states or infrequently changes.
    </div>
<br />
  </div>
</details>

---
