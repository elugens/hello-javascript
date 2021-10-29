---
title: Class Checking
sidebar_position: 6
---

# Class checking: "instanceof" - Q&A

**Classes: CLASS CHECKING: “instanceof”**

**Question:** **What does the instanceof operator do in JavaScript?**

**Answer:** The instanceof operator allows us to check whether an object belongs to a certain class. It also takes inheritance into account. Such a check may be necessary in many cases, it can be used for building a polymorphic function, the one that treats arguments differently depending on their type.

```js
Code Example:

class Rabbit {}

let rabbit = new Rabbit();

// is it an object of Rabbit class?

alert( rabbit instanceof Rabbit ); // true

// It also works with constructor functions:

// instead of class

function Rabbit() {}

alert( new Rabbit() instanceof Rabbit ); // true

// And with built-in classes like Array:

let arr = [1, 2, 3];

alert( arr instanceof Array ); // true

alert( arr instanceof Object ); // true
```

Source: <https://javascript.info/instanceof#ref-instanceof>

**Question:** **Is an Array an instance of an Object, in JavaScript?**

**Answer:** Yes, an Array belongs to the Object class, because Array prototypically inherits from Object. At the base of JavaScript, all native objects like Array and even Function inherit from the Object class. The instanceof operator examines the prototype chain to render a result as true or false.

Example:

```js
console.log(Array instanceof Object); // true
console.log(Function instanceof Object); // true
```

Source: <https://javascript.info/instanceof#ref-instanceof>

**Question:** **Is there a way to create a custom obj instanceof Class algorithm?**

**Answer:** Yes, you can create a rough representation of the algorithm using a static method of Symbol.hasInstance, then just call it. It should return true or false as a result, by default it should be set to true. Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain.

Example:

```js
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called
```

Source: <https://javascript.info/instanceof#ref-instanceof>

**Question:** **In plain words, explain what happens with an instanceof class check.**

**Interview Answer:** The obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain. If any answer is true, return true. If it does not reach true as a result and reaches the end of the chain, return false. The Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.

Example:

```js
class Rabbit extends Animal {}

let rabbit = new Rabbit();

alert(rabbit instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype

// rabbit.__proto__.__proto__ === Animal.prototype (match! return true)
```

Source: <https://javascript.info/instanceof#ref-instanceof>

**Question:** **We already know that plain objects are converted to string as [object Object]. Is there a way to create a custom toString result for our own custom objects?**

**Answer:** Yes, the behavior of Object toString can be customized using a special object property Symbol.toStringTag. The Symbol.toStringTag also works for environment-specific objects like the window and XMLHttpRequest objects.

Example:

```js
let user = {
  [Symbol.toStringTag]: 'User',
};

alert({}.toString.call(user)); // [object User]
// toStringTag for the environment-specific object and class:

alert(window[Symbol.toStringTag]); // Window
alert(XMLHttpRequest.prototype[Symbol.toStringTag]); // XMLHttpRequest
alert({}.toString.call(window)); // [object Window]
alert({}.toString.call(new XMLHttpRequest())); // [object XMLHttpRequest]
```

Source: <https://javascript.info/instanceof#symbol-tostringtag>
