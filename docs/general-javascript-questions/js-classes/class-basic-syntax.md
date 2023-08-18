---
title: JavaScript Classes the Basics
description: Basic Class Syntax in JavaScript is a syntax for creating a class in JavaScript. Classes are a template for creating objects.
sidebar_position: 1
sidebar_label: Basic Syntax
keywords:
  - basic class syntax
  - javascript classes
  - classes in javascript
  - classes
  - class
  - functions
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
  - basic class syntax
  - javascript classes
  - classes in javascript
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ClassBasicSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Basic Class Syntax | JavaScript Frontend Phone Interview</title>
</head>

**Classes: Basic Class Syntax**

---

<AdSense />

---

<CloseAllAnswers />

### What is a class in JavaScript and why is it important?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A class in JavaScript is a blueprint for creating objects with shared properties and methods. It provides a convenient way to encapsulate related code, enabling inheritance, promoting code reuse, and improving readability.
</div><br />
  <div><strong>Technical Response:</strong> Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes and have the same syntax and semantics that do not get shared with ES5 class-like semantics. Classes are, in fact, "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

  </div>
  </div>
</details>

---

### Can you briefly explain the ES6 class syntax in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> ES6 class syntax is a cleaner, more concise way to create classes in JavaScript, using the 'class' keyword, constructors, and methods. It simplifies inheritance and improves code readability.
  </div>
  </div>
</details>

---

### How do you create a class in JavaScript using the ES6 class syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a class in JavaScript using ES6 syntax, use the 'class' keyword, followed by the class name, and then define a constructor and methods inside the class body using curly braces.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {
  // constructor
  constructor() {
    // do something
  }

  // methods
  method1() {
    // do something
  }

  method2() {
    // do something
  }
}
```

  </div>
  </div>
</details>

---

### What is a constructor method in a JavaScript class and what is its purpose?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A constructor method in a JavaScript class is a special function that initializes new objects. It sets default properties and behaviors for instances created from the class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js

class UserClass {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hello, ${this.name}`);
  }

}

// Usage:
let user = new UserClass("Javascript!");
user.sayHi(); // Hello, JavaScript!
```

  </div>
  </div>
</details>

---

### How do you define a method inside a JavaScript class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To define a method inside a JavaScript class, write the method name followed by parentheses and curly braces, containing the method's logic, within the class body. There is no need for the 'function' keyword in classes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MyClass {
  constructor() {
    this.name = "JavaScript!";
  }

  // This is a Class method
  sayHello() {
    return "Hello, my name is " + this.name; // Hello, my name is JavaScript!
  }
}
```

  </div>
  </div>
</details>

---

### What is the 'super' keyword in JavaScript and when do you use it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'super' keyword in JavaScript refers to the parent class, used within a subclass constructor to call the parent constructor, ensuring proper inheritance of properties and methods.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand); // calling super
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

mycar = new Model("Ford", "Mustang");
console.log(mycar.present()); // I have a Ford
console.log(mycar.show()); // I have a Ford, it is a Mustang
```

  </div>
  </div>
</details>

---

### How do you create a static method in a JavaScript class, and what are its use cases?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a static method in a JavaScript class, you use the 'static' keyword before the method definition. Static methods are called on the class itself, not instances, often used for utility functions or factory methods.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class MathUtils {
  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.multiply(2, 3)); // Output: 6
```

  </div>
  </div>
</details>

---

### How do you create a getter and setter method within a JavaScript class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a JavaScript class, you create getter and setter methods using 'get' and 'set' keywords before method names. Getters retrieve property values, while setters update property values while enforcing validation or triggering side effects.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(diameter) {
    this.radius = diameter / 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // Output: 10

circle.diameter = 14;
console.log(circle.radius); // Output: 7
```

  </div>
  </div>
</details>

---

### Can you explain how the 'this' keyword works in the context of JavaScript classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'this' keyword in JavaScript classes refers to the instance of the class that called the method. It can be used to access and modify instance properties and methods within the class.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Person {
  constructor(name) {
    this.name = name; // using the this keyword
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}!.`); // using the this keyword
  }
}

const person1 = new Person('JavaScript');
person1.sayHello(); // Output: Hello, my name is JavaScript!

const person2 = new Person('Joe');
person2.sayHello(); // Output: Hello, my name is Joe.

```

  </div>
  </div>
</details>

---

### What is the difference between a class expression and a class declaration in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A class declaration in JavaScript defines a named class using the class keyword, while a class expression creates an unnamed or named class without requiring the class keyword. Class expressions are typically used in variable assignments, as arguments, or inside other expressions.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

**Class Expression**

```js
const MyClass = class {
  constructor() {
    this.name = "MyClass";
  }
};
```

**Class Declaration**

```js
class MyClass {
  constructor() {
    this.name = "MyClass";
  }
};
```

  </div>
  </div>
</details>

---

### Can you describe the concept of polymorphism in JavaScript classes and provide a high-level example?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Polymorphism in JavaScript classes refers to the ability of different classes to share a common interface, allowing objects of different classes to be used interchangeably. Example: Shape classes (Circle, Square) sharing a calculateArea() method
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Shape {
  calculateArea() {
    // Common interface for calculating area
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength ** 2;
  }
}

// Usage
const circle = new Circle(5);
const square = new Square(4);

console.log(circle.calculateArea()); // Output: 78.53981633974483
console.log(square.calculateArea()); // Output: 16
```

  </div>
  </div>
</details>

---

### How can you make a class method or property private in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can make a class method or property private by using the hash (#) symbol before its name. Private methods and properties are only accessible within the class they're defined in.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class MyClass {
  #privateProperty = "I'm private!";

  #privateMethod() {
    return 'Hello from private method!';
  }

  usePrivate() {
    return this.#privateMethod() + ' ' + this.#privateProperty;
  }
}

let instance = new MyClass();
console.log(instance.usePrivate()); // "Hello from private method! I'm private!"
// console.log(instance.#privateMethod()); // This would throw an error
// console.log(instance.#privateProperty); // This would also throw an error
```

In this code, `#privateProperty` and `#privateMethod` are private, meaning they can only be accessed from within the `MyClass` class. The `usePrivate` method is public and can access the private members. If you uncomment the last two lines and try to access the private members directly, JavaScript will throw an error.

  </div>
  </div>
</details>

---

### What is the difference between a function declaration and a class declaration?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A significant difference between a function declaration and a class declaration is that a function declaration gets hoisted, and class declarations are not. Another difference is that those function declarations get declared at any point in your code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const p = new Rectangle(); // ReferenceError

class Rectangle {}

////////////////////////////////////

console.log("Square Feet: " + rectSqFt(60,30))
// no error, returns Square Feet: 1800

// Function Declaration
function rectSqFt(height, width) {  function gets hoisted / initialized
    let squareFeet = height * width;
    return squareFeet;
}
```

:::note
You first need to declare your class and then access it. Otherwise, code like the following throw a Reference Error.
:::

  </div>
  </div>
</details>

---

### What is a Class expression in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance) name property, though). In a named class expression, it is visible inside the class only.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name);
// output: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

console.log(Rectangle.name);
// output: "Rectangle2"

console.log(Rectangle2);
// error, Rectangle2 name is not visible outside of the class
```

  </div>
  </div>
</details>

---

### Is it possible to construct a Class in JavaScript on the fly?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is accomplished by returning a class from a function and using the new operator to obtain a new class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function makeClass(phrase, name) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(`${phrase}`);
    }
    sayHello() {
      console.log(`${phrase}, ${name}`);
    }
  };
}

// Create a new class
let User = makeClass('Hello', 'Jane');

new User().sayHi(); // Hello

new User().sayHello(); // Hello, Jane
```

  </div>
  </div>
</details>

---

### Can you implement computed names in JavaScript classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can implement computed names in JavaScript classes in the same fashion as in Object literals.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Class Implementation
class User {
  ['say' + 'Hi']() {
    console.log('Hello');
  }
}

new User().sayHi(); // hello

// Computed property names (ES2015)
let prop = 'foo';
let o = {
  [prop]: 'hey',
  ['b' + 'ar']: 'there',
};
```

  </div>
  </div>
</details>

---

### Class fields are a new addition to JavaScript. Can you explain their implementation in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, class fields are a syntax that allows us to add properties to a class. It is implemented by adding a name property to a class and assigning a value to that property. The critical difference between class fields is that we set them on individual objects, not Class.prototype.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class User {
  name = 'John';

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!

// As you can see: Class.prototype returns undefined
let user = new User();
console.log(user.name); // John
console.log(User.prototype.name); // undefined

// You can also use more complex expressions and function calls
class User {
  name = prompt('Name, please?', 'John');
}

let user = new User();
console.log(user.name); // John
```

  </div>
  </div>
</details>

---

### JavaScript classes are known to allow complex expressions and function calls in named class fields. Is there a way to create bound methods to classes without losing “this”?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two approaches to “binding a method” to its class. They include passing a wrapper function such as setTimeout() or binding the method to the object constructor. We could use other options such as regular function declarations if necessary.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Button {
  constructor(value) {
    // bind this.value in the constructor
    this.value = value;
  }
  click = () => {
    console.log(this.value);
  };
}

let button = new Button('hello');

setTimeout(button.click, 1000); /// hello, using setTimeout as a wrapper
```

:::note
You must use an arrow function as a method in the class, or you lose the value of “this”. Functions and class methods have their own “this”.
:::

  </div>
  </div>
</details>

---
