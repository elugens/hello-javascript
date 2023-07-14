---
title: State Design Pattern
description: State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.
sidebar_position: 9
sidebar_label: State
keywords:
  - state pattern
  - state design pattern
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
  - state pattern
  - state design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/StateSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>State Pattern | JavaScript Interview Questions</title>
</head>

**Structural: State Pattern**

<CloseAllAnswers />

---

### What is the State Design Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The State Design Pattern allows an object to alter its behavior when its internal state changes, seemingly changing its class. It promotes loose coupling and increases manageability.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The State pattern provides state-specific logic to a limited set of objects in which each object represents a particular state. The State pattern is commonly used in JavaScript to convert massive switch-base state machines into objects.<br/>
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

Here's an example of a Traffic Light system using the State Design Pattern.

```javascript
class TrafficLight {
  constructor() {
    this.states = [new GreenLight(), new YellowLight(), new RedLight()];
    this.current = this.states[0];
  }

  change() {
    const totalStates = this.states.length;
    let currentIndex = this.states.findIndex(light => light === this.current);

    if (currentIndex + 1 < totalStates) this.current = this.states[currentIndex + 1];
    else this.current = this.states[0];
  }

  sign() {
    return this.current.sign();
  }
}

class Light {
  constructor(light) {
    this.light = light;
  }
}

class GreenLight extends Light {
  constructor() {
    super('green');
  }

  sign() {
    return 'Go';
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow');
  }

  sign() {
    return 'Caution';
  }
}

class RedLight extends Light {
  constructor() {
    super('red');
  }

  sign() {
    return 'Stop';
  }
}

// usage
const trafficLight = new TrafficLight();

console.log(trafficLight.sign()); // Green: Go
trafficLight.change();

console.log(trafficLight.sign()); // Yellow: Caution
trafficLight.change();

console.log(trafficLight.sign()); // Red: Stop
trafficLight.change();

// Example output:
// Go
// Caution
// Stop
```

In this example, the `TrafficLight` class represents the Context, and it maintains a reference to a state object (`current`) which serves as the Current State. `GreenLight`, `YellowLight`, and `RedLight` classes represent Concrete States, each with different behaviors encapsulated in the `sign()` method.

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
      <strong>Interview Response:</strong> The State pattern belongs to the behavioral pattern category in JavaScript. It focuses on the behavior of objects and how they respond to changes in their internal state.
    </div>
  </div>
</details>

---

### When should you utilize the State Design Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> You should utilize the JavaScript State Pattern when you have an object with multiple behaviors that depend on its internal state, leading to complex conditional statements.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> In a real-world application, the State pattern could be handy for introducing new states that we haven't yet considered, possibly more simply than a switch case. Each state is contained and has its own set of internal functions.
    </div>
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
      <strong>Interview Response:</strong> Advantages of employing the State pattern in JavaScript include improved code organization, flexibility, maintainability, and reduced conditional statements. It also enables easier testing.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the State Pattern
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

### What are some drawbacks of using the State Design Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> It might increase complexity due to the creation of multiple new classes and also involve additional memory costs. Applying the pattern may be excessive if a state machine has only a few states or infrequently changes.
    </div>
  </div>
</details>

---

### Are there any alternatives to using the State pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, alternatives to using the State pattern in JavaScript include using conditional statements, using the Strategy pattern, or using polymorphism to represent different states.
    </div>
  </div>
</details>

---

### Why use the State Design Pattern in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's used to manage complexity in code by allowing objects to change their behavior according to their current state, improving readability and maintainability.
  </div>
  </div>
</details>

---

### What kind of problems does the State Design Pattern solve?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It solves problems where an object's behavior needs to change based on its state, avoiding long conditionals and making state transitions explicit.
  </div>
  </div>
</details>

---

### How does the State Design Pattern differ from the Strategy Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> While both involve encapsulated behaviors, State Pattern changes behavior based on internal state, while Strategy Pattern does so based on external control.
  </div>
  </div>
</details>

---

### Can you explain the concept of 'Context' and 'State' in the State Design Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'Context' is the entity having varying behavior, while 'State' encapsulates the behavior associated with a particular state of 'Context'.
  </div><br/>
  <div><strong>Technical Response:</strong> In the State Design Pattern, "Context" is an object that can exhibit a variety of behaviors based on its current "State". The "State" is an interface that defines a common set of methods that Concrete States will implement.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example with a `Water` object that changes state between `Solid`, `Liquid`, and `Gas`.

```javascript
class Water {
  constructor() {
    this.state = new SolidState(this);
  }

  heat() {
    this.state.heat();
  }

  cool() {
    this.state.cool();
  }

  changeState(state) {
    this.state = state;
  }

  printState() {
    this.state.printState();
  }
}

class State {
  constructor(water) {
    this.water = water;
  }

  heat() {
    throw new Error('This method must be overwritten!');
  }

  cool() {
    throw new Error('This method must be overwritten!');
  }

  printState() {
    throw new Error('This method must be overwritten!');
  }
}

class SolidState extends State {
  heat() {
    console.log('Heating ice. Turning to water.');
    this.water.changeState(new LiquidState(this.water));
  }

  cool() {
    console.log('Ice is already cool.');
  }

  printState() {
    console.log('The water is solid.');
  }
}

class LiquidState extends State {
  heat() {
    console.log('Heating water. Turning to gas.');
    this.water.changeState(new GasState(this.water));
  }

  cool() {
    console.log('Cooling water. Turning to ice.');
    this.water.changeState(new SolidState(this.water));
  }

  printState() {
    console.log('The water is liquid.');
  }
}

class GasState extends State {
  heat() {
    console.log('Gas is already hot.');
  }

  cool() {
    console.log('Cooling gas. Turning to water.');
    this.water.changeState(new LiquidState(this.water));
  }

  printState() {
    console.log('The water is gas.');
  }
}

const water = new Water();
water.printState(); // The water is solid.
water.heat(); // Heating ice. Turning to water.
water.printState(); // The water is liquid.
water.heat(); // Heating water. Turning to gas.
water.printState(); // The water is gas.
water.cool(); // Cooling gas. Turning to water.
water.printState(); // The water is liquid.
```

In this example, `Water` is the "Context". The "State" is an interface represented by the `State` class, and `SolidState`, `LiquidState`, and `GasState` are the "Concrete States". The `heat()` and `cool()` methods in the `Water` class delegate to the current state's corresponding methods.

  </div>
  </div>
</details>

---

### What's the benefit of encapsulating state-specific behavior in a State Design Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It makes the code more organized, easier to understand, and the states are easier to manage or extend in the future.
  </div>
  </div>
</details>

---

### When is the State Design Pattern not suitable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When there are only a few states or transitions, or the complexity of different states doesn't justify the overhead of the pattern.
  </div>
  </div>
</details>

---

### Can State Design Pattern lead to performance issues?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Generally not, but if there are numerous complex states, it might potentially lead to performance considerations.
  </div>
  </div>
</details>

---
