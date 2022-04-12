---
title: Function Prototype
description: Function Prototype in JavaScript is a property of the function object. It is used to store the function's properties and methods.
sidebar_position: 2
sidebar_label: Function Prototype
---

**Prototypes / Inheritance: Function Prototype**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the function.prototype property, in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In simple terms, the function.prototype mean a regular property on a function. Every Object in JavaScript contains the prototype meaning a regular property with the prototype name.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal; // references animal

let rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

alert(rabbit.eats); // true
```

  </div>
  </div>
</details>

---

### Can you explain how the function.prototype property works in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Every function has the "prototype” property even if we do not supply it. The prototype object is special type of enumerable object to which additional properties can be attached to and be shared across all the instances of its constructor function. A function prototype property is only used when new Function is called, it assigns the prototype of the new object.</div><br />
  <div><strong>Technical Response:</strong> Every function has the "prototype" property even if we do not supply it. A function prototype property is only used when new Function is called, it assigns [[Prototype]] of the new object. After creation, the function prototype property changes (func.prototype = &#123;another object&#125;), then new objects created by new Function will have another object as [[Prototype]], but already existing objects keep the old one. The default "prototype" is an object with the only property constructor that points back to the function itself.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Rabbit() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}

alert(rabbit.constructor == Rabbit); // true (from prototype)
```

  </div>
  </div>
</details>

---

### What happens when you replace the default function prototype in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When you override the default prototype in an object. We lose access to the function constructor property of the prototype.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Rabbit() {}
Rabbit.prototype = {
  jumps: true,
};

let rabbit = new Rabbit();
alert(rabbit.constructor === Rabbit); // false
```

  </div>
  </div>
</details>

---