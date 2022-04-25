---
title: Custom Error Handling
description: Custom Error Handling in JavaScript is a good way to handle errors in your code.
sidebar_position: 2
sidebar_label: Custom Errors
---

**Error Handling: Custom Errors**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What are the benefits of inheriting from the Error object vs. simply using the throw statement?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Because JavaScript allows us to use a throw with any parameter, our error classes do not need to derive from Error. However, we may use obj instanceof Error to identify and track error objects if we inherit. As a result, it is preferable to inherit from it. Our mistakes automatically build a hierarchy as the program evolves, and ValidationError, for example, may derive from the Error Object, and so forth.
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
  <div><strong>Interview Response:</strong> No, the same rules apply; you can only inherit from one base class using the extends keyword. In class declarations or expressions, the extends keyword gets used to build a class that is a child of another class.
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
