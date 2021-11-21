---
title: Basic Syntax
sidebar_position: 1
---

# Modules

**Classes: Basic Class Syntax**

<head>
  <title>Class Syntax - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is a JavaScript Class in Object Oriented Programming (OOP)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics. Classes are in fact "special functions", and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.
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

### What is difference between function declarations and class declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An important difference between function declarations and class declarations is that function declarations are hoisted, and class declarations are not. Another difference is that function declarations can be declare at any point in your code.
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
You first need to declare your class and then access it, otherwise code like the following will throw a Reference Error.
:::

  </div>
  </div>
</details>

---

### What is a Class expression in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A class expression is another way to define a class. Class expressions can be named or unnamed. The name given to a named class expression is local to the class's body. (it can be retrieved through the class's (not an instance's) name property, though). In a named class expression, it is visible inside the class only.
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

### Is there a way to create a Class dynamically “on-demand” in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it can be achieved by returning class in a function and calling the function to access a new class with the new operator.
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

### In your opinion, is classical inheritance ever the right choice? If so, when? If not, why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Classical inheritance is almost never the right solution. On exceedingly rare occasions, it might be used for a single level.
</div>
  </div>
</details>

---

### Can you implement computed names in JavaScript classes?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can implement computed names in JavaScript classes in the same fashion as you would in Object literals.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Class Implementation
class User {
  ['say' + 'Hi']() {
    alert('Hello');
  }
}

new User().sayHi();

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
  <div><strong>Interview Response:</strong> Yes, class fields are a syntax that allows us add properties to a class. It is implemented by adding a name property to a class and assigning a value to that property. The important difference of class fields is that they are set on individual objects, not Class.prototype.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class User {
  name = 'John';

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!

// As you can see: Class.prototype returns undefined
let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined

// You can also use more complex expressions and function calls
class User {
  name = prompt('Name, please?', 'John');
}

let user = new User();
alert(user.name); // John
```

  </div>
  </div>
</details>

---

### JavaScript classes are known to allow complex expressions and function calls in named class fields. Is there a way to create bound methods to classes without losing “this”?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two approaches to binding a method to its class. They include passing a wrapper function such as setTimeout() or binding the method to the object constructor. We could use other options such as regular function declarations if necessary.
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
It should be noted that you must use an arrow function as a method in the class or you will lose the value of this. Functions and class methods have their own “this”.
:::

  </div>
  </div>
</details>

---
