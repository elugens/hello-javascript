---
title: Proxy Design Pattern
description: A proxy is a structural pattern that lets you provide a substitute for another object. The Proxy Pattern acts as a placeholder for another object.
sidebar_position: 7
sidebar_label: Proxy
keywords:
  - proxy pattern
  - proxy design pattern
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
  - proxy pattern
  - proxy design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ProxySchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Proxy Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Proxy Pattern**

<CloseAllAnswers />

---

### What is the Proxy Design Pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Proxy pattern is a structural pattern that allows an object to act as a placeholder for another object, controlling access and providing additional functionality such as caching and security.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The Proxy pattern provides a surrogate or placeholder object for another object and controls access to it. In JavaScript, the Proxy object is used to define custom behavior for fundamental operations (e.g., property lookup, assignment, enumeration, function invocation, etc.).
    </div><br/>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-proxy.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Client** -- Example code: _the run() function_

- To request an operation, call proxy.

**Proxy** -- Example code: _GeoProxy_

- provides a user interface similar to the real object
- and maintains a reference to the real object that allows the proxy to access it.
- Responds to requests and forwards them to the actual object.

**RealSubject** -- Example code: _GeoCoder_

- specifies the actual object for which service is getting requested

<br/>

Here's a simple example of using a Proxy in modern JavaScript.

```javascript
class RealObject {
  execute() {
    console.log('Executing...');
  }
}

class ProxyObject {
  constructor() {
    this.realObject = new RealObject();
  }

  execute() {
    console.log('Proxy: Checking preconditions before executing.');
    if (this.checkAccess()) {
      this.realObject.execute();
      console.log('Proxy: Checking postconditions after executing.');
    }
  }

  checkAccess() {
    // Some precondition check.
    console.log('Proxy: Checked access permissions.');
    return true;
  }
}

function clientCode(subject) {
  // The client code is supposed to work with all objects (both subjects) via the Subject interface in order to support both real subjects and proxies.
  subject.execute();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealObject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxySubject = new ProxyObject();
clientCode(proxySubject);
```

In this example, a `ProxyObject` class is created that mimics the `RealObject` class interface (`execute()` method). The `ProxyObject` includes additional functionality like precondition check (`checkAccess()` method). The `clientCode` function can use both `RealObject` and `ProxyObject` due to them having the same interface, thus illustrating the utility of the Proxy pattern.

 </div>
 </div>
</details>

---

### What is the main purpose of the Proxy Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Its purpose is to create a surrogate or stand-in for another object to control its access or simplify its interface.
  </div>
  </div>
</details>

---

### The Proxy pattern belongs to which design pattern family?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Proxy pattern belongs to the structural pattern family, which is concerned with the composition of classes and objects to form larger structures.
    </div>
  </div>
</details>

---

### What is a good use case for the Proxy Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> One good use case of the Proxy pattern in modern JavaScript is to create a logging mechanism to log each operation performed on an object.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

One good use case of the Proxy pattern in modern JavaScript is to create a logging mechanism to log each operation performed on an object. Here's how you can do it:

```javascript
const targetObject = {
  prop1: 'Hello',
  prop2: 'World',
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`"get" was called for property "${prop}"`);
    return Reflect.get(...arguments);
  },
  set: function (target, prop, value, receiver) {
    console.log(`"set" was called for property "${prop}" with value "${value}"`);
    return Reflect.set(...arguments);
  }
};

const proxyObject = new Proxy(targetObject, handler);

// Trying to access the properties
console.log(proxyObject.prop1); // Output: "get" was called for property "prop1"

// Trying to set the properties
proxyObject.prop2 = 'Universe'; // Output: "set" was called for property "prop2" with value "Universe"
```

In this example, every time you get or set a property on the `proxyObject`, it logs the operation, the property name, and in case of a "set" operation, the new value. This allows you to monitor what happens to an object, which can be useful for debugging, for example.

  </div>
  </div>
</details>

---

### What are some of the advantages of employing the Proxy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Advantages of using the Proxy pattern in JavaScript include increased security, improved performance, and greater flexibility in controlling access to objects and their methods.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Proxy Pattern.
    </div>
    <br />
    <div></div>

- You have control over the service object without the client being aware of it.
- You can control the lifecycle of the service object even if your clients do not care.
- The proxy functions even if the service object is not ready or unavailable.
- Open/Closed Principle. Users can add new proxies without interrupting the service or clients.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Proxy pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Disadvantages of using the Proxy pattern in JavaScript include increased complexity due to the use of additional objects, and potential performance overhead when using remote proxies.
    </div>
    <br />
    <div>
      <strong>TechnicalResponse:</strong> Drawbacks of the Proxy Pattern.
    </div>
    <br />
    <div></div>

- Because you'll be introducing many new classes, the code may become more complicated.
- The service's response time may be delayed or hindered.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Proxy Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, there are alternative patterns to the Proxy pattern in JavaScript, including the Decorator pattern, the Adapter pattern, and the Facade pattern.
    </div>
  </div>
</details>

---

### How does the Proxy Pattern provide additional security?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By controlling access to the object, proxies can enforce permissions, validation, or other security measures.
  </div>
  </div>
</details>

---

### How can the Proxy Pattern simplify complex interfaces?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By providing a simpler interface to interact with complex underlying objects, easing usage and reducing potential errors.
  </div>
  </div>
</details>

---

### Why would you use the Proxy Pattern over direct interaction?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using proxies can add control, simplify interfaces, manage resource-intensive operations, and separate concerns, improving code maintainability.
  </div>
  </div>
</details>

---
