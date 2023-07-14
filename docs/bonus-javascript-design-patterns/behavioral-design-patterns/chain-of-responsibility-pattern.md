---
title: Chain of Responsibility Pattern
description: The chain of responsibility pattern allows a client request to be received by multiple objects. JavaScript Frontend Phone Interview Question
sidebar_position: 3
sidebar_label: Chain of Responsibility
keywords:
  - chain of responsibility
  - chain of responsibility pattern
  - design patterns
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - chain of responsibility
  - chain of responsibility pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ChainOfSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Chain of Responsibility Pattern | HelloJavaScript.info</title>
</head>

**Structural: Chain of Responsibility**

<CloseAllAnswers />

---

### Can you explain the chain of responsibility design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Chain of Responsibility pattern is a behavioral design pattern that lets you pass requests along a chain of handlers. When a request comes in, each handler decides either to process the request or to pass it to the next handler in the chain.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> This behavioral JavaScript design pattern generates a series of receiver objects responding to a request. This approach encourages loose coupling, allowing us to avoid coupling the sender of a request to a receiver and allowing other receivers to handle the request.<br/><br/>
      The receiving objects get coupled together, and they'll be able to act on the request before passing it over to the following receiver object. It's also simple to add additional recipient objects to the chain.
<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong> ES6 Implementation<br /><br />

<img src="/img/javascript-chain-of-responsibility.jpg" /><br /><br />

<img src="/img/chain_of_responsibility_atm.png
" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- example code: _Request_

- initiates the request to a chain of handler objects

**Handler** -- example code: _Request.get() method_

- defines an interface for handling the requests
- implements the successor link (returning 'this')

<br/>

**Here's a simple example of how to implement the Chain of Responsibility pattern in modern JavaScript:**

```javascript
class Handler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
  }

  handle(request) {
    let result = this.process(request);

    if (result === 'next' && this.next) {
      return this.next.handle(request);
    }

    return result;
  }

  process(request) {
    throw new Error('Method process(request) not implemented.');
  }
}

class Handler1 extends Handler {
  process(request) {
    if (request === 'request1') {
      return 'Handler1 is handling request1';
    }

    return 'next';
  }
}

class Handler2 extends Handler {
  process(request) {
    if (request === 'request2') {
      return 'Handler2 is handling request2';
    }

    return 'next';
  }
}

class Handler3 extends Handler {
  process(request) {
    if (request === 'request3') {
      return 'Handler3 is handling request3';
    }

    return 'next';
  }
}

// Set up the chain of responsibility
const handler1 = new Handler1();
const handler2 = new Handler2();
const handler3 = new Handler3();

handler1.setNext(handler2);
handler2.setNext(handler3);

// Send requests
console.log(handler1.handle('request2')); // Output: Handler2 is handling request2
console.log(handler1.handle('request3')); // Output: Handler3 is handling request3
console.log(handler1.handle('request1')); // Output: Handler1 is handling request1
```

In this example, `Handler1`, `Handler2`, and `Handler3` are all handlers. They each extend a base `Handler` class and override its `process` method to handle specific requests. If a handler can't handle a request, it passes the request along to the next handler in the chain. The chain is set up at runtime, with each handler holding a reference to the next handler in the chain.

  </div>
  </div>
</details>

---

### What are the advantages of using the Chain of Responsibility design pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Advantages of using the Chain of Responsibility pattern in JavaScript include flexible object handling, easy addition/removal of handlers, and reduced coupling between objects.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Chain of Responsibility Pattern
    </div>
    <br />
    <div></div>

- You have control over the sequence in which requests get handled.
- The principle of single responsibility. Classes that invoke operations get separated from classes that perform tasks.
- The principle of open/closed. New handlers can get added to the app without disrupting the old client code.

<br />
  </div>
</details>

---

### What are the disadvantages of the Chain of Responsibility pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Disadvantages of using the Chain of Responsibility pattern in JavaScript include the potential for requests to go unhandled, increased complexity and potential performance issues with long chains.
    </div>

---

:::warning
This pattern can lead to high runtime overhead and the handling order may not always be predictable.
:::

  </div>
</details>

---

### Are there any alternatives to using the Chain of Responsibility pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, some alternatives to the Chain of Responsibility pattern in JavaScript include the Command pattern, the Observer pattern, and the Strategy pattern.
    </div>
  </div>
</details>

---

### In which scenarios is the Chain of Responsibility pattern beneficial?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's useful when multiple objects can handle a request and the handler doesn't need to be specified explicitly.
  </div>
  </div>
</details>

---

### What is the primary purpose of the Chain of Responsibility pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Its primary purpose is to decouple the sender of a request from its receiver by allowing multiple objects to handle the request.
  </div>
  </div>
</details>

---

### What's the role of the 'handler' in the Chain of Responsibility pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The handler is an interface representing part of the chain. It either handles the request or forwards it to the next handler.
  </div>
  </div>
</details>

---

### What can make the Chain of Responsibility pattern more effective?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Ensuring that the chain is set up correctly with careful consideration of handlers can make it more effective.
  </div>
  </div>
</details>

---

### Can you break the chain in the Chain of Responsibility pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's possible to break the chain in the Chain of Responsibility pattern in modern JavaScript. A handler in the chain can decide not to pass the request further down the chain.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Handler {
  constructor() {
    this.next = null;
  }

  setNext(handler) {
    this.next = handler;
  }

  handle(request) {
    let result = this.process(request);

    // If result isn't 'next', don't pass the request to the next handler
    if (result !== 'next' || !this.next) {
      return result;
    }

    return this.next.handle(request);
  }

  process(request) {
    throw new Error('Method process(request) not implemented.');
  }
}

class Handler1 extends Handler {
  process(request) {
    if (request === 'request1') {
      return 'Handler1 is handling request1';
    }

    return 'next';
  }
}

class Handler2 extends Handler {
  process(request) {
    // If this handler processes the request, don't pass it to the next handler
    if (request === 'request2') {
      return 'Handler2 is handling request2 and breaking the chain';
    }

    return 'next';
  }
}

class Handler3 extends Handler {
  process(request) {
    if (request === 'request3') {
      return 'Handler3 is handling request3';
    }

    return 'next';
  }
}

// Set up the chain of responsibility
const handler1 = new Handler1();
const handler2 = new Handler2();
const handler3 = new Handler3();

handler1.setNext(handler2);
handler2.setNext(handler3);

// Send requests
console.log(handler1.handle('request2')); // Output: Handler2 is handling request2 and breaking the chain
console.log(handler1.handle('request3')); // Output: undefined, because the chain was broken by handler2
```

In this example, if `Handler2` processes a request, it breaks the chain and doesn't pass the request to `Handler3`. As a result, if you send 'request3' to `handler1`, the request won't reach `Handler3`, and the method `handler1.handle('request3')` returns `undefined`.

  </div>
  </div>
</details>

---

### How is the Chain of Responsibility pattern different from the Observer pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the Chain of Responsibility, the event is handled by one handler. In Observer, multiple observers react to an event.
  </div>
  </div>
</details>

---

### How does the Chain of Responsibility pattern promote the single responsibility principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each handler in the chain is responsible for one type of request, promoting single responsibility.
  </div>
  </div>
</details>

---

### How is the Chain of Responsibility related to Middleware in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Middleware in JavaScript often follows this pattern where requests pass through functions until a response is sent.
  </div><br />
  <div><strong>Technical Response:</strong> The Chain of Responsibility pattern is very similar to the concept of middleware, especially as seen in JavaScript frameworks like Express.js. Middleware is essentially a chain of functions that get executed in the order they're defined, and each function has the ability to end the request-response cycle or pass control to the next middleware function in the chain.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how middleware works in Express.js, which is an implementation of the Chain of Responsibility pattern.

```javascript
const express = require('express');
const app = express();

// Middleware function 1
app.use((req, res, next) => {
  console.log('Middleware function 1');
  next();
});

// Middleware function 2
app.use((req, res, next) => {
  console.log('Middleware function 2');
  next();
});

// Middleware function 3
app.use((req, res, next) => {
  console.log('Middleware function 3');
  res.send('Response from middleware function 3');
});

app.listen(3000, () => console.log('Server is running on port 3000'));
```

In this example, there are three middleware functions defined using `app.use()`. When a request comes in, it's passed to the first middleware function. This function logs a message, then calls `next()`, which passes the request to the next middleware function in the chain. The process continues until it reaches the third middleware function, which sends a response and ends the request-response cycle.

This is an excellent example of the Chain of Responsibility pattern. Each middleware function is a handler that can either handle the request (by sending a response) or pass it to the next handler in the chain (by calling `next()`).

  </div>
  </div>
</details>

---
