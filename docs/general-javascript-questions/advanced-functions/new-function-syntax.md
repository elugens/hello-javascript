---
title: The "new" Function Syntax
description: The "new" Function Syntax is a very common interview question.
sidebar_position: 7
sidebar_label: The "new" Function Syntax
keywords:
  - The new Function Syntax
  - new
  - function
  - syntax
  - constructor
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
  - new function syntax
  - new function
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/NewFuncSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>The new Function Syntax | Frontend Phone Interview Answers</title>
</head>

**Advanced Functions: The "new" Function Syntax**

<CloseAllAnswers />

### Can you explain the new Function constructor syntax in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The new Function constructor syntax in JavaScript provides a more concise and readable way to create functions dynamically at runtime by accepting string parameters as function code. It can also accept arrow functions and template literals as input. However, it is generally not recommended to use this approach due to security and performance concerns.
</div><br />
  <div><strong>Interview Response:</strong> A new Function object gets created using the Function constructor. Calling the constructor can directly build functions dynamically, but it has similar security and performance drawbacks (though significantly less severe) than eval. In contrast to eval, the Function constructor builds functions that only execute in the global scope. We should note that the new Function syntax does not require a function body to function. The main distinction between this method and others is that the function gets physically built from a string given at run-time. We can extract a string externally and utilize it in a function constructor. In complicated web applications, it gets employed in particular instances, such as when we receive code from a server or dynamically assemble a function from a template.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> new Function([arg1 [, arg2 [, ...argN]] ,] functionBody);<br /><br />

  <div></div>

```js
let sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2)); // 3

// new Function without a function body

let sayHi = new Function('console.log("Hello, JavaScript")'); // this will not work in the dev console

sayHi(); // Hello, JavaScript
```

  </div>
  </div>
</details>

---

### Why would you want to use the new Function constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The new Function constructor in JavaScript provides a way to dynamically create functions at runtime. While its usage should be approached with caution due to potential security risks, there are a few scenarios where the new Function constructor can be useful.
  </div><br />
  <div><strong className="codeExample">Use Cases:</strong><br /><br />

  <div></div>

**Dynamic code execution**: The `new Function` constructor allows you to generate and execute code dynamically based on runtime conditions or user inputs. This can be useful in cases where you need to evaluate or execute code that is not known until runtime.

**Runtime code generation**: You can use the `new Function` constructor to generate functions dynamically based on specific requirements or configurations. This can be valuable in scenarios where you need to generate functions programmatically or generate functions with varying behaviors.

**Isolation and encapsulation**: By using the `new Function` constructor within a closure or IIFE (Immediately Invoked Function Expression), you can create a new function with its own scope, isolating it from the surrounding code. This can be useful for creating isolated, self-contained functions.

**Eval alternative**: In some cases, the `new Function` constructor can be used as an alternative to `eval()` for executing dynamic code. It provides a controlled environment for executing code and can be more secure when used appropriately.

---

:::warning
It's important to note that while the `new Function` constructor provides flexibility, it also comes with **potential security risks if used improperly**. Dynamic code execution should be handled carefully, ensuring that any generated code is from trusted sources and properly validated to prevent code injection vulnerabilities.
:::

  </div>
  </div>
</details>

---

### Can you explain what occurs when using the new Function constructor to create a function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  
  <div><strong>Interview Response:</strong> The new Function constructor in JavaScript creates a function object dynamically at runtime using a string parameter as function code, which can include arrow functions and template literals. This approach should be used with caution due to potential security risks.
</div><br/>
  <div><strong>Technical Response:</strong> When a function gets created using the new Function constructor, its [[Environment]] gets set to global rather than the current one. As a result, such a function only has access to global variables and not outer variables. This unusual property of the "new" operator in a Function constructor appears to be very beneficial in practice. As a result, they cannot use external variables. But this is a positive thing since it protects us from mistakes. Passing parameters explicitly is a far superior architectural solution that produces no issues with minifiers.
</div>
  </div>
</details>

---

### Can you isolate a new function constructor inside of a closure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can isolate a new Function constructor inside of a closure by defining the function code as a string inside the closure and passing it as a parameter to the constructor. This can help to avoid potential security issues related to executing code from an untrusted source.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let MyModule = (function() {
  function MyConstructor(name) {
    this.name = name;
  }

  MyConstructor.prototype.greet = function() {
    console.log("Hello, " + this.name + "!");
  };

  // Other private variables and functions can be defined here

  // Return an object or expose only necessary members
  return {
    createInstance: function(name) {
      return new MyConstructor(name);
    }
  };
})();

var instance = MyModule.createInstance("JavaScript");
instance.greet(); // Outputs: "Hello, JavaScript!"
```

  </div>
  </div>
</details>

---

### How does the new Function constructor differ from regular function declarations and expressions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The new Function constructor differs from regular function declarations and expressions in syntax, scope, and performance. It uses the Function constructor with a string parameter, executes in the global scope, and is slower to execute.
  </div>
  </div>
</details>

---

### What are some potential security risks associated with using the new Function constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The new Function constructor can pose security risks when used with untrusted input, as it allows for the execution of arbitrary code. This can lead to code injection attacks, cross-site scripting, and other vulnerabilities.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
var userInput = "console.log('This is malicious code!');";
var myFunction = new Function(userInput);
myFunction();
```

  </div>
  </div>
</details>

---

### How can you isolate a new Function constructor inside of a closure?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can isolate a new Function constructor inside of a closure by defining the function code as a string inside the closure and passing it as a parameter to the constructor.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
(function() {
  var functionString = "console.log('This function is isolated.');";
  var isolatedFunction = new Function(functionString);
  
  isolatedFunction();
})();
```

---

:::note
This is not a modern way to handle passing of string related code. It is recommended that you use higher order functions to encapsulate the passing of dynamic strings.
:::

  </div>
  </div>
</details>

---

### What is the purpose of using arrow functions and template literals with the new Function constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Arrow functions and template literals can be used with the new Function constructor to create concise and readable function code, making it easier to generate functions dynamically at runtime.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const generateMessage = new Function('name', 'return `Hello, ${name}! Welcome to our website.`');
const message = generateMessage('JavaScript');
console.log(message); // Output: Hello, JavaScript! Welcome to our website.
```

  </div>
  </div>
</details>

---

### What is the difference between the arguments object in regular functions and arrow functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Regular functions have an `arguments` object, which contains the function's arguments. Arrow functions, even when created with `new Function`, don't have their own `arguments` object; they inherit it from the surrounding scope.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Regular Function
function regularFunction() {
    console.log(arguments[0]); // Output: 1
    console.log(arguments[1]); // Output: 2
}

regularFunction(1, 2);

// Arrow Function
var arrowFunction = () => {
    console.log(arguments[0]); // Error: arguments is not defined
}

arrowFunction(1, 2);

// Arrow Function in a Regular Function's Scope
function outerFunction() {
    var innerArrowFunction = () => {
        console.log(arguments[0]); // Output: 3
        console.log(arguments[1]); // Output: 4
    }
    
    innerArrowFunction();
}

outerFunction(3, 4);
```

<p>In the example above, the regular function can access the arguments object to get the passed arguments. However, the standalone arrow function can't access the arguments object because it doesn't have one. But, an arrow function inside a regular function's scope can access the arguments object of the regular function.</p>

  </div>
  </div>
</details>

---

### What are some best practices for using the new Function constructor in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Avoid using the Function constructor due to security risks, poor performance, and limited use cases. We should use alternatives like regular functions or arrow functions.
  </div>
  </div>
</details>

---

### Can you provide an example of using the new Function constructor to create a function with dynamic parameters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a function with dynamic parameters using the Function constructor, pass an array of parameter names and a function body string as arguments. The constructor combines them, generating a new function with the specified parameters and behavior.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let parameters = "a, b";
let body = "return a + b;";
let dynamicFunction = new Function(parameters, body);
console.log(dynamicFunction(1, 2)); // Output: 3
```

  </div>
  </div>
</details>

---

### How does the new Function constructor handle errors in the function code parameter?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The new Function constructor parses and compiles the function code when it's created. If there are syntax errors in the code, it will throw a SyntaxError exception at creation time.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
    // Incorrect JavaScript syntax
    let faultyFunction = new Function('return 1 ++ 2');
} catch (e) {
    console.log(e instanceof SyntaxError); // Output: true
    console.log(e.message); // Output: "Unexpected token '++'"
}
```

<p>In the above example, the function code passed to the new Function constructor contains a syntax error ('1 ++ 2' is not valid JavaScript). As a result, a SyntaxError is thrown when the function is created. The try/catch block catches this error and logs that it is indeed a SyntaxError, and also logs the associated error message.</p>

  </div>
  </div>
</details>

---

### How can you ensure that the function code parameter passed to the new Function constructor is safe to execute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Ensuring the safety of executing code passed to the new Function constructor can be challenging because it involves dealing with potential code injection. One of the practices could be to whitelist allowed characters or syntax by sanitizing the input (regex test).
  </div><br />
  <div><strong className="codeExample">For example, if we only expect numerical operations, we can filter the input accordingly:</strong><br /><br />

  <div></div>

```js
function createSafeFunction(code) {
    // Check if code contains only digits, whitespaces, parentheses, or arithmetic operators
    if (/^[0-9\s()+\-*/]*$/.test(code)) {
        return new Function(`return ${code};`);
    } else {
        throw new Error("Unsafe code detected.");
    }
}

try {
    let safeFunction = createSafeFunction("2 + 3");
    console.log(safeFunction()); // Output: 5
} catch (e) {
    console.log(e.message); // Won't be executed
}

try {
    let unsafeFunction = createSafeFunction("console.log(process.env)"); // unsafe code
    console.log(unsafeFunction()); 
} catch (e) {
    console.log(e.message); // Output: "Unsafe code detected."
}

```

In the above example, createSafeFunction checks if the provided code only contains digits, spaces, parentheses, or arithmetic operators. If any other characters are found, an error is thrown. Otherwise, the function is created and returned.

---

:::note
Please note, the above example is very simple and the actual implementation would need to be far more robust to ensure safety in a production environment. It is typically recommended to avoid using new Function with user input or untrusted code.
:::

  </div>
  </div>
</details>

---
