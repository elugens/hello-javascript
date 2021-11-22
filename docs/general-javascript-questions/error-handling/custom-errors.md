---
title: Custom Errors
sidebar_position: 2
---

# Custom Error Handling

**Error Handling: Custom Errors**

<head>
  <title>Custom Errors Handling - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the benefits of inheriting from the Error object vs simply using the throw statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript allows to us use throw with any argument, so technically our custom error classes do not need to inherit from Error. But if we inherit, then it becomes possible to use obj instanceof Error to identify and track error objects. So, it is better to inherit from it. As the application grows, our own errors naturally form a hierarchy. For instance, ValidationError may inherit from the Error Object, and so on.
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
  <div><strong>Interview Response:</strong> No, the same rules apply, you are only allowed to inherit from one base class by using the extends keyword. The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.
</div>
  </div>
</details>

---

### How would you extend beyond the initial inheritance of the Error object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If, it is necessary to extend beyond a primary child class that has already extended the built-in Error Object. You must inherit/extend from the child class to have access to the base class.
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
  <div><strong>Interview Response:</strong> When potential errors are relevant, we should handle them directly. However, it is not a good idea to handle every potential or unknown error. A much better approach is to rethrow the catch to at least log the error when wrapping exceptions.
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
