---
title: Custom Error Handling
description: Custom Error Handling in JavaScript is a good way to handle errors in your
  code. How would you extend beyond the initial inheritance of the Error object?
sidebar_position: 2
sidebar_label: Custom Errors
keywords:
  - custom errors
  - custom error handling
  - error handling
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - error object
  - interview questions
  - interview answers
  - js
tags:
  - custom errors
  - custom error handling
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CustomErrorsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Custom Errors | JavaScript Frontend Phone Interview Answers</title>
</head>

**Error Handling: Custom Errors**

<CloseAllAnswers />

---

### What is a custom error in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A custom error in JavaScript is a user-defined class that extends the built-in `Error` class, providing additional or specific functionality for error handling purposes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of creating a custom error by extending the `Error` class.

```javascript
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
  }
}
```

In the above example, a custom error class named `CustomError` is created by extending the `Error` class. The `constructor` function is used to initialize the error object with a custom message and set the `name` property.

Once the custom error is defined, it can be thrown and caught like any other error:

```javascript
try {
  throw new CustomError('This is a custom error.');
} catch (error) {
  console.log(error.name);     // Output: CustomError
  console.log(error.message);  // Output: This is a custom error.
}
```

By using custom errors, developers can have more control and expressiveness in their error handling, leading to better error management and more robust applications.

  </div>
  </div>
</details>

---

### Why would you create a custom error class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Creating a custom error class allows more specific error types, aiding in precise error handling and providing clearer error context, improving debugging and error reporting.<br />
  </div>
  </div>
</details>

---

### How do you create a custom error class in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a custom error class, define a new class that extends the built-in Error class and override the constructor to set custom properties.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class CustomError extends Error {
    constructor(message, errorCode) {
        super(message); // Pass the message to the Error constructor
        this.name = "CustomError"; // Set the name of the error
        this.errorCode = errorCode; // Add a custom property
    }
}

try {
    throw new CustomError("A custom error occurred", 123);
} catch (error) {
    console.log(error.name); // Prints: CustomError
    console.log(error.message); // Prints: A custom error occurred
    console.log(error.errorCode); // Prints: 123
}
```

In this example, `CustomError` is a user-defined class that extends the built-in `Error` class. It adds a custom `errorCode` property. When a `CustomError` is thrown, the `catch` block is able to handle it and access the custom `errorCode` property.

  </div>
  </div>
</details>

---

### What is Error Differentiation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Error differentiation refers to the ability to distinguish between different types of errors based on their specific characteristics or error codes, allowing for customized and targeted error handling strategies in software development.
  </div>
  </div>
</details>

---

### How does Hierarchical Error Handling work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Hierarchical error handling in JavaScript involves organizing custom error types in a hierarchical structure, with subtypes inheriting from a base error type. This allows catch blocks to handle multiple related error types or specific subtypes of an error with targeted error-specific logic.
  </div>
  </div>
</details>

---

### What are the benefits of inheriting from the Error object vs. simply using the throw statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Inheriting from the Error object allows custom error types to retain standard error properties and behaviors, facilitating consistent error handling and enabling differentiation based on error types, while the throw statement is used for immediate error throwing.
</div><br />
  <div><strong>Technical Details:</strong> Because JavaScript allows us to use a throw with any parameter, our error classes do not need to derive from Error. However, we may use obj instanceof Error to identify and track error objects if we inherit. As a result, it is preferable to inherit from it. Our errors automatically build a hierarchy as the program evolves, and ValidationError, for example, may derive from the Error Object, and so forth.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Custom ValidationError that extends the built-in Error Object<br /><br />

  <div></div>

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError('No field: age');
  }
  if (!user.name) {
    throw new ValidationError('No field: name');
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert('Invalid data: ' + err.message); // Invalid data: No field: name
  } else if (err instanceof SyntaxError) {
    // (*)
    alert('JSON Syntax Error: ' + err.message);
  } else {
    throw err; // unknown error, rethrow it (**)
  }
}
```

  </div>
  </div>
</details>

---

### Is there any difference in inheritance when inheriting/extending from the Error class object and regular class inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the same rules apply; you can only inherit from one base class using the extends keyword. In class declarations or expressions, we can use the extends keyword to build a class that is a child of another class.
</div>
  </div>
</details>

---

### How would you extend beyond the initial inheritance of the Error object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If it is necessary to extend beyond a primary child class that has already extended the built-in Error Object. It would be best to inherit/extend from the child class to access the base class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Extending beyond the initial base/child inheritance<br /><br />

  <div></div>

```js
// Initial Inheritance from the base Error Object
class ValidationError extends Error { 
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

// Secondary Inheritance from the ValidationError Class
class PropertyRequiredError extends ValidationError { 
  constructor(property) {
    super("No property: " + property);
    this.name = "PropertyRequiredError";
    this.property = property;
  }
}

// Usage
function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new PropertyRequiredError("age");
  }
  if (!user.name) {
    throw new PropertyRequiredError("name");
  }

  return user;
}

// Working example with try..catch

try {
  let user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message); // Invalid data: No property: name
    alert(err.name); // PropertyRequiredError
    alert(err.property); // name
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err; // unknown error, rethrow it
  }
}
```

  </div>
  </div>
</details>

---

### Is there a way to handle unknown or potential errors in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When prospective errors are relevant, we should deal with them immediately. It is not a good idea to address every conceivable or unexpected error. When encapsulating exceptions, it would be preferable to rethrow the catch to at least record the problem.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
try {
  ...
  readUser()  // the potential error source
  ...
} catch (err) {
  if (err instanceof ValidationError) {
    // handle validation errors
  } else if (err instanceof SyntaxError) {
    // handle syntax errors
  } else {
    throw err; // unknown error, rethrow it
  }
}
```

  </div>
  </div>
</details>

---

### What properties should a custom error class include?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A custom error class should include a `name` property for identifying the error type and a `message` property for describing the error. Optionally, it may include custom properties relevant to the error context.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class CustomError extends Error {
    constructor(message, errorCode) {
        super(message); // Essential property
        this.name = "CustomError"; // Essential property
        this.errorCode = errorCode; // Custom property
        this.time = new Date(); // Custom property
    }
}

try {
    throw new CustomError("A custom error occurred", 123);
} catch (error) {
    console.log(error.name); // Prints: CustomError
    console.log(error.message); // Prints: A custom error occurred
    console.log(error.errorCode); // Prints: 123
    console.log(error.time); // Prints: current date and time
}
```

  </div>
  </div>
</details>

---

### How do you throw a custom error in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To throw a custom error in JavaScript, first, define a custom error class extending Error, then use throw followed by new CustomError(arguments).<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class CustomError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.name = "CustomError";
        this.errorCode = errorCode;
    }
}

try {
    throw new CustomError("A custom error occurred", 123);
} catch (error) {
    console.log(error.name); // Prints: CustomError
    console.log(error.message); // Prints: A custom error occurred
    console.log(error.errorCode); // Prints: 123
}
```

In this example, a `CustomError` is defined and then thrown inside a `try` block. The thrown error is caught by the `catch` block and its properties are logged.

  </div>
  </div>
</details>

---

### How can custom errors improve application maintainability?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Custom errors enhance maintainability by providing clearer error categorization, better error messages, and targeted handling, making it easier to identify, debug, and fix issues.
  </div>
  </div>
</details>

---

### How is error handling achieved with promises in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Error handling with Promises in JavaScript is achieved using the .catch() method or .then()'s second argument to handle rejected promises and catch errors in the promise chain.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let promise = new Promise((resolve, reject) => {
    // some operation that could fail
    let operationSucceeded = false;

    if (operationSucceeded) {
        resolve("Operation succeeded");
    } else {
        reject(new Error("Operation failed"));
    }
});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        // handle the error here
        console.log(error.message); // Prints: Operation failed
    });

```

  </div>
  </div>
</details>

---
