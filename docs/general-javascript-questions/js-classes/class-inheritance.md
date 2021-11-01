---
title: Class inheritance
sidebar_position: 2
---

# Class inheritance - Q&A

**Classes: CLASS INHERITANCE**

### What is the extends keyword used for in JavaScript classes?

**Interview Answer:** The extends keyword is used in class declarations or class expressions to create a class that is a child of another class. The extends keyword can be used to subclass custom classes as well as built-in objects like the Date object or functions that are intended to return a class.

**Syntax:** class ChildClass extends ParentClass { ... }

Example:

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // call the super class constructor and pass in the name parameter
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog('Mitzie');

d.speak(); // Mitzie barks.
```

Source: <https://javascript.info/class-inheritance#the-extends-keyword>

### Can you use any expression after extends in JavaScript?

**Interview Answer:** Yes, we can use any expression after extends in JavaScript. The extends keyword can be used to subclass custom classes as well as built-in objects like the Date object or functions that are intended to return a class.

Example:

```js
function f(phrase) {
  return class {
    sayHi() {
      alert(phrase);
    }
  };
}

class User extends f('Hello') {}

new User().sayHi(); // Hello
```

Source: <https://javascript.info/class-inheritance#the-extends-keyword>

### Is there a way to override a method in a subclass in JavaScript?

**Interview Answer:** Yes, we can override a method in a subclass by calling super on the method inside of the method we want to override. This gives use access to the parent method, but we are still able to apply additional methods in conjunction with super.method.

Example:

```js
class Animal {
  constructor(name) {
    this.speed = 0;

    this.name = name;
  }

  run(speed) {
    this.speed = speed;

    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;

    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }

  stop() {
    super.stop(); // call parent stop method
    this.hide(); // and then the hide method
  }
}

let rabbit = new Rabbit('White Rabbit');

rabbit.run(5); // White Rabbit runs with speed 5.
rabbit.stop(); // White Rabbit stands still. White Rabbit hides!
```

Source: <https://javascript.info/class-inheritance#overriding-a-method>

### How does super behave inside of arrow functions JavaScript?

**Interview Answer:** Arrow functions have no super, if it is accessed, it is taken from the outer function context.

Example:

```js
class Animal {
  constructor() {
    // ...
  }

  stop() {
    console.log('stop what you are doing with super');
  }
}

class Rabbit extends Animal {
  stop() {
    setTimeout(() => super.stop(), 1000); // called from the parent stop after 1 sec
  }
}

let rabbit = new Rabbit();

rabbit.stop();

setTimeout(() => {
  super.stop();
}, 1000);

// Syntax Error: 'super' outside of function or class
```

Source: <https://javascript.info/class-inheritance#overriding-a-method>

### What happens if a class extends another class without an explicit constructor in the child class?

**Interview Answer:** According to the specification, if a class extends another class and has no constructor, then the parent class constructor is generated in the child class passing it all the arguments. That happens if we do not write a constructor of our own.

Example:

```js
class Rabbit extends Animal {
  // generated for extending classes without their own constructors

  constructor(...args) {
    super(...args);
  }
}
```

Source: <https://javascript.info/class-inheritance#overriding-constructor>

### How do you override a parent constructor in an inheriting class?

**Interview Answer:** Inheriting classes must call super in their constructor before using this or it will result in an error. The super keyword is used to access and call functions on an object's parent. When used in a constructor, the super keyword appears alone and must be used before this keyword is used. The super keyword can also be used to call functions on a parent object.

Example:

```js
class Animal {
  constructor(name) {
    this.speed = 0;

    this.name = name;
  }

  // ...
}

class Rabbit extends Animal {
  constructor(name, earLength) {
    super(name);

    this.earLength = earLength;
  }

  // ...
}

// now fine

let rabbit = new Rabbit('White Rabbit', 10);

alert(rabbit.name); // White Rabbit
alert(rabbit.earLength); // 10
```

Source: <https://javascript.info/class-inheritance#overriding-constructor>

### In JavaScript, is there a way to override class fields in parent classes?

**Interview Answer:** We can override not only methods, but also class fields. The main thing to remember is that the parent constructor always uses its own field value, not the overridden one. To fix issues with overriding class fields, we can create a method to display the information that is needed in the inheriting class.

Example:

```js
class Animal {
  showName() {
    // instead of this.name = 'animal'

    console.log('animal');
  }

  constructor() {
    this.showName(); // instead of console.log(this.name);
  }
}

class Rabbit extends Animal {
  showName() {
    console.log('rabbit');
  }
}

new Animal(); // animal
new Rabbit(); // rabbit
```

Source: <https://javascript.info/class-inheritance#overriding-class-fields-a-tricky-note>

### Can you explain how super works under the hood as [[HomeObject]]?

**Interview Answer:** While one might expect Obj.method() will reach up and call into Obj.prototype.method, this is not the case. In order to find super.method(), the called function uses its home object, a value created when it was originally defined and one that will not change when the method is reassigned. When a function is specified as a class or object method, its [[HomeObject]] property becomes that object. Then super uses it to resolve the parent prototype and its methods.

Example:

**Note:** You should never call proto in your code… In this case, just call super

```js
let animal = {
  name: 'Animal',

  eat() {
    // animal.eat.[[HomeObject]] == animal

    alert(`${this.name} eats.`);
  },
};

let rabbit = {
  __proto__: animal,

  name: 'Rabbit',

  eat() {
    // rabbit.eat.[[HomeObject]] == rabbit

    super.eat();
  },
};

let longEar = {
  __proto__: rabbit,

  name: 'Long Ear',

  eat() {
    // longEar.eat.[[HomeObject]] == longEar

    super.eat();
  },
};

// works correctly

longEar.eat(); // Long Ear eats.
```

Source: <https://javascript.info/class-inheritance#homeobject>
