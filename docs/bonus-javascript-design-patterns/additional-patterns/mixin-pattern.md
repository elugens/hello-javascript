---
title: Mixin Design Pattern
description: A mixin is a JavaScript object that contains methods that other classes can use without inheriting from it. JavaScript Frontend Phone Interview Questions
sidebar_position: 2
sidebar_label: Mixin Pattern
keywords:
  - mixin design pattern
  - mixin pattern
  - mixin
  - design pattern
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - mixin design pattern
  - mixin pattern
  - mixin
  - interview answers
  - interview questions
---

<head>
  <title>Mixin Design Pattern | JavaScript Interview Questions</title>
</head>

**Additional Patterns: Mixin Design Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please describe the mixin design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A mixin is a JavaScript object with methods that other classes can use without inheriting it. In other words, a mixin provides methods for implementing a specific behavior, but we don't use it on its own; instead, we use it to add the behavior to other classes.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/mixin-pattern.png" /><br /><br/>

```js
// ES2015+ keywords/syntax used: class, constructor, const

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = 'male';
  }
}

// a new instance of Person can then easily be created as follows:
const clark = new Person('Clark', 'Kent');

// ES2015+ keywords/syntax used: class, constructor, extends super, const
class Superhero extends Person {
  constructor(firstName, lastName, powers) {
    // Invoke the superclass constructor
    super(firstName, lastName);
    this.powers = powers;
  }
}

// A new instance of Superher gets created as follows

const SuperMan = new Superhero('Clark', 'Kent', ['flight', 'heat-vision']);
console.log(SuperMan);

/* Outputs Person attributes as well as powers

Superhero {
  firstName: 'Clark',
  lastName: 'Kent',
  gender: 'male',
  powers: [ 'flight', 'heat-vision' ]
}

*/
```

<strong className="codeExample">Code Example:</strong>Mixins<br /><br />

<div>In JavaScript, we can look at inheriting from Mixins to collect functionality through extension. Each new class we define can have a superclass from which it can inherit methods and properties. Classes can also determine their properties and methods, and we can leverage this fact to promote function re-use.<br /><br /></div>

```js
// ES2015+ keywords/syntax used: class, constructor, extends, const, arrow functions

// Define a simple Car constructor
class Car {
  constructor({ model, color }) {
    this.model = model || 'no model provided';
    this.color = color || 'no colour provided';
  }
}

// Mixin
const Mixin = (superclass) =>
  class extends superclass {
    driveForward() {
      console.log('drive forward');
    }
    driveBackward() {
      console.log('drive backward');
    }
    driveSideways() {
      console.log('drive sideways');
    }
  };

class MyCar extends Mixin(Car) {}

// Create a new Car
const myCar = new MyCar({
  model: 'Ford Escort',
  color: 'blue',
});

// Test to make sure we now have access to the methods
myCar.driveForward();
myCar.driveBackward();

// Outputs:
// drive forward
// drive backward

const mySportsCar = new MyCar({
  model: 'Porsche',
  color: 'red',
});

mySportsCar.driveSideways();

// Outputs:
// drive sideways
```

</div>
<br />
  </div>
</details>

---
