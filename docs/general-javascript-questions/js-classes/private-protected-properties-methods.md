---
title: Private, Protected Props / Methods
sidebar_position: 4
---

# Private and protected properties and methods - Q&A

**Classes: PRIVATE AND PROTECTED PROPERTIES AND METHODS**

### Can you explain one of the most important principles of object-oriented programming (OOP)?

**Interview Answer:** One of the most important principles of object-oriented programming is delimiting (separating) internal interface from the external one.

Source: <https://javascript.info/private-protected-properties-methods>

### What are the two groups that properties and methods are split into in OOP programming?

**Interview Answer:** In object-oriented programming properties and methods are split into the internal and external interfaces. The internal interface is methods and properties inside of a class that are accessible within the class, but not outside of it. The external interface are properties and methods that are outside of the class, but still accessible.

Source: <https://javascript.info/private-protected-properties-methods#internal-and-external-interface>

### What is the difference between private and protected fields in JavaScript?

**Interview Answer:** The main difference between private and protected fields is that private fields are supported at the language level and protected fields are not. Protected properties are usually prefixed with an underscore "\_". That is not enforced on the language level, but there is a well-known convention between programmers that such properties and methods should not be accessed from the outside. Privates should start with #. They are only accessible from inside the class and currently have language level support (almost a standard). On the language level, # is a special sign that the field is private. We cannot access it from outside or from inheriting classes. It should be noted that private fields may require a Polyfill to account for older browsers.

Examples:

// Example 1: Private Fields

```js
class CoffeeMachine {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;

    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

new CoffeeMachine().setWaterAmount(100);

//////////////////////////////////////////////////

// Example 2: Protected Fields #

class CoffeeMachine {
  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) value = 0;

    this.#waterAmount = value;
  }
}
```

Source: <https://javascript.info/private-protected-properties-methods>

[](https://javascript.info/private-protected-properties-methods#internal-and-external-interface)

### Is there a way to make a class property read only in JavaScript?

**Interview Answer:** Yes, this is possible by creating a getter and withdrawing the setter from the equation. This allows access to the value that was created at creation time, but it cannot be overridden after that point.

Example:

```js
class CoffeeMachine {
  // ...

  constructor(power) {
    this._power = power;
  }

  get power() {
    return this._power;
  }
}

// create the coffee machine

let coffeeMachine = new CoffeeMachine(100);

alert(`Power is: ${coffeeMachine.power}W`); // Power is: 100W
coffeeMachine.power = 25; // Error (no setter)
```

Source: <https://javascript.info/private-protected-properties-methods#read-only-power>

### Are protected fields inherited by sub-classes in JavaScript?

**Interview Answer:** Yes, if we inherit from a parent classes then the inheriting class has access to protected fields. The same rules apply in the inheriting class as they do in the parent.

Source: <https://javascript.info/private-protected-properties-methods#internal-and-external-interface>

### Can you give a brief overview of private properties and methods?

**Interview Answer:** Private methods and properties with the private # indicator is only accessible within a class. On the language level, # is a special sign that the field is private. We cannot access it from outside or from inheriting classes. Private fields do not conflict with public ones. We can have both private and public fields at the same time. Unlike protected ones, private fields are enforced by the language itself.

Example:

```js
class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;

    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }
}

let coffeeMachine = new CoffeeMachine();

// cannot access privates from outside of the class

coffeeMachine.#fixWaterAmount(123); // Error
coffeeMachine.#waterLimit = 1000; // Error
```

Source: <https://javascript.info/private-protected-properties-methods#internal-and-external-interface>
