---
title: Function Prototype
sidebar_position: 2
---

# Function Prototype

**Prototypes / Inheritance: Function Prototype**

<head>
  <title>Function Prototype - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the function.prototype property, in JavaScript?

**Interview Answer:** In simple terms, the function.prototype mean a regular property on a function. Every Object in JavaScript contains the prototype meaning a regular property with the prototype name.

Example:

```js
let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal; // references animal

let rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal
alert(rabbit.eats); // true
```

Source: <https://javascript.info/function-prototype>

### Can you explain how the function.prototype property works in JavaScript?

**Interview Answer:** Every function has the "prototype” property even if we do not supply it. The prototype object is special type of enumerable object to which additional properties can be attached to and be shared across all the instances of its constructor function. A function prototype property is only used when new Function is called, it assigns the prototype of the new object.

**Technical Answer:** Every function has the "prototype" property even if we do not supply it. A function prototype property is only used when new Function is called, it assigns [[Prototype]] of the new object. After creation, the function prototype property changes (func.prototype = {another object}), then new objects created by new Function will have another object as [[Prototype]], but already existing objects keep the old one. The default "prototype" is an object with the only property constructor that points back to the function itself.

Example:

```js
function Rabbit() {}

// by default:

// Rabbit.prototype = { constructor: Rabbit }

let rabbit = new Rabbit(); // inherits from {constructor: Rabbit}
alert(rabbit.constructor == Rabbit); // true (from prototype)
```

Source: <https://javascript.info/function-prototype>

### What happens when you replace the default function prototype in JavaScript?

**Interview Answer:** When you override the default prototype in an object. We lose access to the function constructor property of the prototype.

Example:

```js
function Rabbit() {}

Rabbit.prototype = {
  jumps: true,
};

let rabbit = new Rabbit();

alert(rabbit.constructor === Rabbit); // false
```

Source: <https://javascript.info/function-prototype#default-f-prototype-constructor-property>
