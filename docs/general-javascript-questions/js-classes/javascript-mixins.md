---
title: JavaScript Mixins
description: JavaScript Mixins is a syntax for creating a mixin in JavaScript. A mixin is a class that is designed to be used as a mixin.
sidebar_position: 7
sidebar_label: Mixins
---

**Classes: Mixins**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is a Mixin in JavaScript and why do you use them instead of a class inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A mixin is a object containing methods that can be used by other classes without a need to inherit from it. In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.</div><br />
  <div><strong>Technical Response:</strong> In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object. And a class may extend only one other class. That is a limiting factor in class inheritance that may require the use of a mixin. A mixin is a class containing methods that can be used by other classes without a need to inherit from it. In other words, a mixin provides methods that implement a certain behavior, but we do not use it alone, we use it to add the behavior to other classes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User('Dude').sayHi(); // Hello Dude!
```

:::note
In JavaScript we can only inherit from a single object. There can be only one `[[Prototype]]` for an object. And a class may extend only one other class. That is a limiting factor in class inheritance that may require the use of a mixin.
:::

  </div>
  </div>
</details>

---

### What is the simplest way to create a mixin in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The simplest way to implement a mixin in JavaScript is to make an object with useful methods, so that we can easily merge them into a prototype of any class. There is no inheritance, but a simple method copying.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let sayMixin = {
  say(phrase) {
    console.log(phrase);
  },
};

let sayHiMixin = {
  sayHi() {
    // call parent method
    sayMixin.say(`Hello, ${this.name}!`); // (*)
  },
  sayBye() {
    sayMixin.say(`Bye, ${this.name}!`); // (*)
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User('Dude').sayHi(); // Hello, Dude!
new User('Jane').sayBye(); // Bye, Jane!
```

  </div>
  </div>
</details>

---

If you are interested in learning event mixins go to: <https://javascript.info/mixins#eventmixin>
