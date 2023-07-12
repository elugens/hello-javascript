---
title: Class Inheritance
description: Class Inheritance in JavaScript is a syntax for creating a class in JavaScript. What is the extends keyword used in JavaScript classes? Interview Questions
sidebar_position: 2
sidebar_label: Class Inheritance
keywords:
  - class inheritance
  - javascript inheritance
  - class prototype
  - classes
  - extends keyword
  - class declaration
  - class expression
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
  - function object
  - functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ClassInheritSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Class Inheritance | Frontend Phone Interview Questions</title>
</head>

**Classes: Class Inheritance**

<CloseAllAnswers />

---

### What is class inheritance in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Class inheritance in JavaScript allows a subclass to inherit properties and methods from a parent class, enabling code reuse and reducing redundancy.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() {
    console.log(`${this.name} barks!`);
  }
  
  fetch() {
    console.log(`${this.name} fetches the ball.`);
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: "Buddy barks!"
myDog.fetch(); // Output: "Buddy fetches the ball."
```

  </div>
  </div>
</details>

---

### How does the ‘extends’ keyword work in JavaScript class inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "extends" keyword in JavaScript class inheritance creates a subclass that inherits properties and methods from a parent class, and can also define new properties and methods.
  </div>
  </div>
</details>

---

### What is a superclass and a subclass?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A superclass is a class that is inherited from by other classes, while a subclass is a class that inherits properties and methods from a superclass.
  </div>
  </div>
</details>

---

### How do you call a superclass's constructor from a subclass?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To call a superclass's constructor from a subclass in JavaScript, use the "super()" method within the subclass's constructor, passing any necessary arguments.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call superclass's constructor
    this.breed = breed;
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
console.log(myDog.name); // Output: "Buddy"
```

  </div>
  </div>
</details>

---

### How do you override a superclass method in a subclass?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To override a superclass method in a subclass in JavaScript, define a new method with the same name in the subclass, which will replace the superclass method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Animal {
  speak() {
    console.log("Animal makes a sound.");
  }
}

class Dog extends Animal {
  speak() {               // overriding Animal Class
    console.log("Dog barks!");
  }
}

const myDog = new Dog();
myDog.speak(); // Output: "Dog barks!"
```

  </div>
  </div>
</details>

---

### Can you explain the role of the super keyword in inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "super" keyword in JavaScript refers to the parent class and is used to call the parent's constructor or methods from a subclass.
  </div>
  </div>
</details>

---

### How do you prevent a class from being inherited in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To prevent a class from being inherited in JavaScript, create a private constructor using a Symbol and throw an error if the constructor is invoked by a subclass during inheritance.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Explicit Prevention using Symbol():

```js
const FinalClassSymbol = Symbol('FinalClass');

class FinalClass {
    constructor() {
        if (this[FinalClassSymbol] !== FinalClassSymbol) {
            throw new Error('This class cannot be extended');
        }
        // The rest of your constructor code goes here...
    }
}

class ChildClass extends FinalClass {
    constructor() {
        super();
        this[FinalClassSymbol] = FinalClassSymbol;
    }
}

try {
    const child = new ChildClass();
} catch (e) {
    console.error(e.message);
}

```

  </div>
  </div>
</details>

---

### How does JavaScript handle multiple inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript doesn't support multiple inheritance directly. However, you can achieve similar functionality using mixins, where you can extend and combine properties and methods from multiple objects.
  </div><br />
  <div><strong className="codeExample">Here's a simple example of a mixin:</strong><br /><br />

  <div></div>

```js
let mixin = {
    sayHi() {
        console.log(`Hello ${this.name}`);
    },
    sayBye() {
        console.log(`Bye ${this.name}`);
    },
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, mixin);

// now User can say hi and bye
let user = new User("John");
user.sayHi(); // Hello John
user.sayBye(); // Bye John
```

  </div>
  </div>
</details>

---

### What are the advantages and disadvantages of using class inheritance in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Advantages include code reusability, well-structured, easier maintenance, and encapsulation. Disadvantages include tight coupling, the potential for complexity, inflexibility, unintended side effects, and difficulty managing multiple inheritances (requires mixins).
  </div>
  </div>
</details>

---

### What is the “extends” keyword used in JavaScript classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The extends keyword is used in class declarations or class expressions to create a class of a child of another class. We can use the "extends" keyword for subclassing bespoke classes and built-in objects such as the Date object and methods that return a class.
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
  <div><strong>Interview Response:</strong> Yes, you can use an expression after the extends keyword in JavaScript. The expression must evaluate to a class or a constructor function, which will be used as the parent class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function f(phrase) {
  return class {
    sayHi() {
      console.log(phrase);
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
  <div><strong>Interview Response:</strong> Yes, in JavaScript, we can override a method in a subclass by redefining the method with the same name in the subclass. Use the ‘super’ keyword to call the parent class's method if needed.</div><br />
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
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
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

### How does super behave inside of class based arrow functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In classes, the super keyword isn't available inside arrow functions. This is because arrow functions don't have their own this context, and super is closely related to this. You should use super inside traditional class methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Parent {
  greet() {
    return "Hello from Parent";
  }
}

class Child extends Parent {
  greet() {
    let arrowFunc = () => {
      console.log(super.greet()); // Accesses parent's greet method
    };
    arrowFunc();
  }
}

let child = new Child();
child.greet(); // Output: "Hello from Parent"
```

In this example, the `Child` class extends the `Parent` class. Inside the `greet` method of `Child`, we define an arrow function `arrowFunc` that accesses `super.greet()` to call the `greet` method of the parent class. The output will be "Hello from Parent" as it successfully accesses the parent's `greet` method using `super`.

  </div>
  </div>
</details>

---

### What happens if a class extends another class without an explicit constructor in the child class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a class extends another class without an explicit constructor in the child class, JavaScript automatically adds a default constructor that calls the parent class's constructor with the super keyword.
</div><br />
  <div><strong>Technical Response:</strong> According to the specification, if a class extends another class and has no constructor, then the parent class constructor is generated in the child class, passing the child all the arguments in the parent. This behavior happens if we do not write a constructor of our own.
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
  <div><strong>Interview Response:</strong> To override a parent constructor in an inheriting class, define a constructor in the child class with the same name, and use the super keyword to call the parent constructor with required arguments.</div><br />
  <div><strong>Technical Response:</strong> Inheriting classes must call super in their constructor before using this, or it results in an error. We use the super keyword to access and call functions on an object's parent. When used in a constructor, the super keyword appears alone, and we must use it before this keyword. The super keyword gets used to call functions on a parent object.
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
console.log(rabbit.name); // White Rabbit
console.log(rabbit.earLength); // 10
```

  </div>
  </div>
</details>

---

### In JavaScript, is there a way to override class fields in parent classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can override class fields in parent classes by declaring fields with the same name in the child class. The child class field value will take precedence over the parent class field value.
</div><br />
  <div><strong>Technical Response:</strong> We can override not only methods but also class fields. The main thing to remember is that the parent constructor always uses its field value, not the overridden one. To fix issues with overriding class fields, we can create a method to display the information needed in the inheriting class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Parent {
  // this is a class field
  greeting = "Hello from Parent";
}

class Child extends Parent {
  // overriding class field in parent
  greeting = "Hello from Child";
}

let child = new Child();
console.log(child.greeting); // Output: "Hello from Child"
```

  </div>
  </div>
</details>

---

### Can you explain how super works under the hood as the [[HomeObject]]?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, super relies on the internal [[HomeObject]] property, which is set to the class prototype where the method is defined. It helps to find and call the parent class's method or constructor.
</div><br />
  <div><strong>Technical Response:</strong> While one might expect Obj.method() to reach up and call into Obj.prototype.method, this is not the case. To find super.method(), the called function uses its home object, a value created when it was initially defined and one that does not get changed when the method gets reassigned. When a function gets specified as a class or object method, its [[HomeObject]] property becomes that object. Then super uses it to resolve the parent prototype and its methods.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let animal = {
  name: 'Animal',
  eat() {
    // animal.eat.[[HomeObject]] == animal
    console.log(`${this.name} eats.`);
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
You should never call **proto** in your code. In this case, just call super.
:::

  </div>
  </div>
</details>

---
