---
title: Class Inheritance
description: Class Inheritance in JavaScript is a syntax for creating a class in JavaScript.
sidebar_position: 2
sidebar_label: Class Inheritance
---

**Classes: Class Inheritance**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is the “extends” keyword used in JavaScript classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The extends keyword is used in class declarations or class expressions to create a class that is a child of another class. The "extends" keyword may get used to subclass bespoke classes and built-in objects such as the Date object and methods that return a class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> class ChildClass extends ParentClass &#123;...&#125;<br /><br />

  <div></div>

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');

d.speak(); // Mitzie barks.
```

  </div>
  </div>
</details>

---

### Can you use an expression after the extends keyword in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use an expression after the extends keyword. The extends keyword gets used to subclass custom classes and built-in objects such as the Date object and procedures meant to yield a class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function f(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

class User extends f('Hello') {}

new User().sayHi(); // Hello
```

  </div>
  </div>
</details>

---

### In JavaScript, is it possible to override a method in a subclass?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can override a method in a subclass by calling super on the method inside the method we want to override. This approach gives us access to the parent method, but we can still apply additional methods in conjunction with the `super.method` syntax.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop method
    this.hide(); // and then the hide method
  }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
```

  </div>
  </div>
</details>

---

### How does super behave inside of arrow functions JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions have no super; if it is accessed, it gets taken from the outer function context.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  constructor() {
    // ...
  }
  stop() {
    console.log('stop what you are doing with super');
  }
}
class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // called from the parent stop after 1 sec
  }
}

let rabbit = new Rabbit();

rabbit.stop();

setTimeout(() => {
  super.stop();
}, 1000);
// Syntax Error: 'super' outside of function or class
```

  </div>
  </div>
</details>

---

### What happens if a class extends another class without an explicit constructor in the child class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> According to the specification, if a class extends another class and has no constructor, then the parent class constructor is generated in the child class, passing the child all the arguments in the parent. This behavior happens if we do not write a constructor of our own.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Rabbit extends Animal {
  // generated for extending classes without their own constructors
  constructor(...args) {
    super(...args);
  }
}
```

  </div>
  </div>
</details>

---

### How do you override a parent constructor in an inheriting class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inheriting classes must call super in their constructor before using this, or it results in an error. The super keyword gets used to access and call functions on an object's parent. When used in a constructor, the super keyword appears alone and must get used before this keyword gets used. The super keyword gets used to call functions on a parent object.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);
    this.earLength = earLength;
  }
  // ...
}

// now fine
let rabbit = new Rabbit('White Rabbit', 10);
alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```

  </div>
  </div>
</details>

---

### In JavaScript, is there a way to override class fields in parent classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can override not only methods but also class fields. The main thing to remember is that the parent constructor always uses its field value, not the overridden one. To fix issues with overriding class fields, we can create a method to display the information needed in the inheriting class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  showName() {
    // instead of this.name = 'animal'
    console.log('animal');
  }

  constructor() {
    this.showName(); // instead of console.log(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    console.log('rabbit');
  }
}

new Animal(); // animal
new Rabbit(); // rabbit
```

  </div>
  </div>
</details>

---

### Can you explain how super works under the hood as `[[HomeObject]]`?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> While one might expect Obj.method() to reach up and call into Obj.prototype.method, this is not the case. To find super.method(), the called function uses its home object, a value created when it was initially defined and one that does not get changed when the method gets reassigned. When a function gets specified as a class or object method, its [[HomeObject]] property becomes that object. Then super uses it to resolve the parent prototype and its methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let animal = {
  name: 'Animal',
  eat() {
    // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  },
};

let rabbit = {
  __proto__: animal,
  name: 'Rabbit',
  eat() {
    // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  },
};

let longEar = {
  __proto__: rabbit,
  name: 'Long Ear',
  eat() {
    // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  },
};

// works correctly
longEar.eat(); // Long Ear eats.
```

:::note
You should never call **proto** in your code… In this case, just call super.
:::

  </div>
  </div>
</details>

---
