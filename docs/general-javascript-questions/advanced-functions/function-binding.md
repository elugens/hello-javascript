---
title: Function Binding
description: Function Binding is a very common interview question. Binding is a process in
  which a function is bound to a value.
sidebar_position: 10
sidebar_label: Function Binding
keywords:
  - function binding
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - binding
  - interview questions
  - interview answers
  - js
tags:
  - function binding
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FuncBindSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Function Binding | Frontend Phone Interview - JavaScript</title>
</head>

**Advanced Functions: Function Binding**

---

<AdSense />

---

<CloseAllAnswers />

### What is function binding in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Function binding in JavaScript is the process of tying a function to an object context, ensuring it uses that context as its 'this' value when called.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let dog = {
  name: "Rover",
  sound: "Woof",
  makeSound: function() {
    console.log(this.sound);
  }
};

let cat = {
  name: "Whiskers",
  sound: "Meow"
};

// Bind makeSound function from dog to cat
let catSound = dog.makeSound.bind(cat);

catSound(); // Output: Meow
```

  </div>
  </div>
</details>

---

### What are the three types of function binding techniques?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> IThree function binding techniques are implicit binding (using object method), explicit binding (with call, apply, or bind), and constructor binding (new keyword for creating objects).
</div><br />
<div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**1. Default Binding:**

```javascript
function sayHello() {
  console.log(this.message);
}

// A global variable
message = "Hello, World!";

sayHello(); // Output: "Hello, World!"
```

**2. Implicit Binding:**

```javascript
let obj = {
  message: "Hello, Object!",
  sayHello: function() {
    console.log(this.message);
  }
}

obj.sayHello(); // Output: "Hello, Object!"
```

**3. Explicit Binding (using call()):**

```javascript
function sayHello() {
  console.log(this.message);
}

let obj = {
  message: "Hello, Explicit!"
}

sayHello.call(obj); // Output: "Hello, Explicit!"
```

  </div>
  </div>
</details>

---

### How does the bind() method work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bind() method creates a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any others.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let person1 = {
  name: 'John',
  hello: function() {
    console.log(`Hello, my name is ${this.name}.`);
  }
};

let person2 = {
  name: 'Sarah'
};

let sarahSayHello = person1.hello.bind(person2);

sarahSayHello();  // outputs: "Hello, my name is Sarah."
```

  </div>
  </div>
</details>

---

### What are the advantages of using the bind() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bind() method allows for explicit function context setting, function reuse with different objects, and partial application (pre-setting some arguments), improving code flexibility and reusability.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let car1 = {
    brand: 'Tesla',
    getBrand: function(){
        console.log(this.brand);
    }
};

let car2 = {
    brand: 'Ford'
};

// Create a new function with 'this' set to car2
let getCar2Brand = car1.getBrand.bind(car2);

getCar2Brand(); // Output: 'Ford'

// Partial application
function multiply(x, y) {
    return x * y;
}

let double = multiply.bind(null, 2); // 'this' is irrelevant here, so set to null

console.log(double(5)); // Output: 10
```

  </div>
  </div>
</details>

---

### What is constructor binding in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Constructor binding is when a function is used as a constructor with the 'new' keyword, causing 'this' to refer to the newly created object.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function Car(brand) {
    this.brand = brand;
    this.getBrand = function() {
        console.log(this.brand);
    };
}

let car = new Car('Tesla');
car.getBrand(); // Output: 'Tesla'
```

  </div>
  </div>
</details>

---

### Can you explain what explicit function binding is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Explicit function binding in JavaScript lets you set "this" value for a function using call, apply, or bind, allowing greater control over function execution context.
</div><br />
  <div><strong>Technical Response:</strong> Window, Implicit, and Explicit function binding are JavaScript's three types of binding strategies. Explicit binding compels a function call to bind to a specific context object by utilizing call, apply, or bind. These predefined JavaScript methods get passed down to all functions via the function prototype. Functions have a method bind that allows us to fix "this." Binding is the ideal option for tying the context to the correct object and preventing "this" from being lost.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  firstName: 'John',
};

function func() {
  console.log(this.firstName);
}

let funcUser = func.bind(user);
funcUser(); // John
```

  </div>
  </div>
</details>

---

### Can you explain what implicit function binding is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Implicit binding occurs when a function is called as a method of an object, and "this" automatically refers to the object before the dot.
  </div><br />
  <div><strong className="codeExample">Here's a simple code example:</strong><br /><br />

  <div></div>

```javascript
let obj = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};

obj.sayHello(); // outputs: "Hello, John"
```

In this example, when `sayHello()` is invoked as a method of `obj` (`obj.sayHello()`), the `this` inside `sayHello` implicitly binds to `obj`.

  </div>
  </div>
</details>

---

### Can you explain the function of the bind() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bind() method creates a new function with a specific "this" value, allowing you to control the context in which the original function is executed.
</div><br />
  <div><strong>Technical Response:</strong> The bind method generates a new function that, when called, sets the "this" keyword to the provided value, with a specified sequence of arguments preceding any arguments provided when the new function gets invoked. Bind creates a new function that may be called later in the code while keeping the desired context binding.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]]);<br /><br />

  <div></div>

```js
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42
```

---

:::note
This is useful for passing functions into other functions, like setTimeout(), which later invokes and won't necessarily bind the invoked function to the correct object without being coerced. The first parameter is the context object, and all other parameters are individually listed, like the call method.
:::

  </div>
  </div>
</details>

---

### What is a partial function application?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Partial function application means predefining some of a function's arguments, creating a new function that requires fewer arguments to execute the original logic.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function mul(a, b) {
  return a * b;
}

let triple = mul.bind(null, 3);

console.log(triple(3)); // = mul(3, 3) = 9
console.log(triple(4)); // = mul(3, 4) = 12
console.log(triple(5)); // = mul(3, 5) = 15
```

  </div>
  </div>
</details>

---
