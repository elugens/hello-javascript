---
title: Singleton Design Pattern
description: Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.
sidebar_position: 6
sidebar_label: Singleton
keywords:
  - singleton pattern
  - singleton design pattern
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
  - singleton pattern
  - singleton design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/SingletonSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Singleton Pattern | JavaScript Frontend Interview Questions</title>
</head>

**Creational: Singleton Pattern**

<CloseAllAnswers />

---

### What is the Singleton Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Singleton Pattern ensures a class has only one instance, and provides a global point of access to it, enabling controlled and shared resource access across the entire application.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Singleton pattern is a design principle restricting a class's instantiation to one object. That's also useful when just one object is required to coordinate system-wide actions. The Singleton pattern traditionally gets implemented by creating a class with a method that creates a new class instance even if one doesn't already exist. If an object's instance already exists, it simply returns a pointer to it.<br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-singleton.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Singleton** -- In example code: _MySingleton_

- It returns an instance via a constructor.
- In charge of creating and managing the instance object.

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you can implement the Singleton Pattern using JavaScript ES6:

```javascript
class Singleton {
    constructor(data) {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

// Usage
const singleton1 = new Singleton("Data for Singleton 1");
console.log(singleton1.getData()); // "Data for Singleton 1"

const singleton2 = new Singleton("Data for Singleton 2");
console.log(singleton2.getData()); // "Data for Singleton 1"

console.log(singleton1 === singleton2); // true
```

In this example, we try to instantiate `Singleton` twice with different data. But when we try to get the data from both instances, we see that they are the same. This is because the second instantiation does not actually create a new object, but returns the first one created.

The key point here is `Singleton.instance = this;` where we store the first instance created. On subsequent instantiations, `Singleton.instance` would be truthy, so the constructor will return this first instance rather than creating a new one.

  </div>
  </div>
</details>

---

### What pattern family does the Singleton belong to?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Singleton pattern belongs to the Creational design patterns family, as it deals with object creation mechanisms, intending to create objects in a manner suitable to the situation.
    </div>
  </div>
</details>

---

### What distinguishes Singletons from static classes or objects?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Singletons can implement interfaces, extend classes, and allow for lazy initialization, while static classes or objects can't. They can also be passed as parameters or be serialized. JavaScript Singletons are similar to static classes and objects in that they only allow one instance, but they can be initialized lazily and provide a global point of access.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> Singletons vary from static classes (or objects). Their initialization delays, typically because they require information that may not be available at the time of initialization. They don't make it easy for code that isn't aware of a previous reference to them to find them. A Singleton returns a structure rather than an object or a "class." Consider how closure variables aren't closures - the closure is the function scope that provides the closure.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example illustrating the Singleton:

```javascript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }

    someMethod() {
        console.log('I am a singleton method.');
    }
}

// Usage
const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // true
instance1.someMethod(); // I am a singleton method.
instance2.someMethod(); // I am a singleton method.
```

And here's an example illustrating a static class in JavaScript:

```javascript
class StaticClass {
    static someMethod() {
        console.log('I am a static method.');
    }
}

// Usage
// const instance = new StaticClass(); // This would throw an error because static class cannot be instantiated.
StaticClass.someMethod(); // I am a static method.
```

In the Singleton example, we create only one instance of the class, and every subsequent `new` call returns the same instance. You can call instance methods on this instance, and it's capable of maintaining state.

In the static example, the class cannot be instantiated at all. Instead, methods are directly called on the class itself, and the class is incapable of maintaining state across the application.

  </div>
  </div>
</details>

---

### What are some of the advantages of using the Singleton Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Singleton pattern ensures controlled access to sole instance, can reduce system resources usage, and enables shared state across application. Also, it allows for lazy and controlled initialization.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> Benefits of the Singleton Pattern
    </div>
    <br />
    <div></div>

- You can be certain that a class only has one instance.
- You are granted global access to that instance.
- The singleton object only gets initialized the first time it is requested.

<br />
  </div>
</details>

---

### What are some of the Singleton Pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Singletons can introduce global state, making debugging difficult. They may violate the single responsibility principle, hinder testability, and promote tight coupling, affecting code modularity.
    </div>
    <br/>
    <div>
      <strong>Interview Response:</strong> Restricting the instantiation to just one instance could save a lot of memory space. Instead of setting up memory for a new instance each time, we only have to set up memory for that one instance referenced throughout the application. However, Singletons are considered an anti-pattern, and we should try to avoid using them in JavaScript.
    </div>
    <br />
    <div></div>

- Infringes on the Single Responsibility Principle: At the same time, the pattern solves two problems.
- The Singleton pattern can hide lousy design, such as when application components know too much about each other.
- In a multithreaded environment, the pattern gets treated differently so that multiple threads do not create a singleton object multiple times.
- Unit testing the Singleton's client code may be complicated because many test frameworks rely on inheritance when producing mock objects. This reliance is relative to the constructor of the singleton class being private, and overriding static methods is impossible in most languages. You'll need to develop a unique way to mock the Singleton. Or don't write the tests at all. Alternatively, avoid using the Singleton pattern.

<br />
  </div>
</details>

---

### In JavaScript, Are there any alternatives to using the singleton pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In JavaScript, alternatives to Singleton include 'module pattern', dependency injection, and state management libraries like Redux.
    </div><br/>
    <div>
      <strong>Interview Response:</strong> There are alternative patterns that can be used instead of the Singleton pattern in JavaScript. For example, the Revealing Module Pattern, Dependency Injection Pattern, and Factory Pattern can all be used to achieve similar results without the potential drawbacks of the Singleton pattern.
    </div>
  </div>
</details>

---

### How do you ensure that the Singleton instance is created only once in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can use a closure to ensure that the Singleton instance is created only once. This is done by defining a private variable to hold the instance and a function to create the instance if it does not already exist.
  </div><br/>
  <div><strong>Technical Response:</strong> To ensure that the Singleton pattern is thread-safe in JavaScript, you can use a combination of closures and the module pattern. By using closures, you can create private variables and methods that are inaccessible from the outside world. And by using the module pattern, you can create a single instance of an object that can be shared across multiple modules without the risk of it being overwritten or modified by other threads.
  </div>
  </div>
</details>

---

### When is a Singleton useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Singleton is useful when you need a single, globally accessible instance of a class, such as a logging system, database connections, or configuration manager.
  </div>
  </div>
</details>

---

### How does Singleton enforce single instantiation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Singleton enforces single instantiation by making the constructor private and providing a static method to get the singleton instance.
  </div>
  </div>
</details>

---

### Why can Singletons make unit testing difficult?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Singleton can make unit testing difficult due to its global state, which can introduce unwanted dependencies between tests.
  </div>
  </div>
</details>

---

### Can you modify a Singleton object once it is created?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the Singleton object can be modified once it's created. Singleton controls instantiation, not object immutability.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Yes, you can modify the properties of a Singleton object after it has been created. Let's demonstrate with an example:

```javascript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            this.data = null; // initialize data
        }

        return Singleton.instance;
    }

    setData(data) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

// Usage
const singleton1 = new Singleton();

singleton1.setData("Initial data");
console.log(singleton1.getData()); // "Initial data"

const singleton2 = new Singleton();
console.log(singleton2.getData()); // "Initial data"

singleton2.setData("Modified data");
console.log(singleton1.getData()); // "Modified data"
console.log(singleton2.getData()); // "Modified data"
```

In this example, `singleton1` and `singleton2` are the same instance. Modifying the data through one instance reflects in the other because they are both the same object. The `setData` method allows us to modify the data stored in the singleton instance.

---

:::tip
Keep in mind that once the Singleton object has been created, you cannot create a new, different Singleton object. You can only modify the properties or call methods on the existing Singleton instance.
:::

  </div>
  </div>
</details>

---

### How do you handle multiple threads in a Singleton design pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript is inherently single-threaded, so it doesn't have concurrent thread issues. Singletons in JavaScript are thread-safe as they're initialized and accessed in a single, sequential execution thread.
  </div><br />
  <div><strong>Interview Response:</strong> JavaScript is single-threaded, which means it executes one operation at a time in a single sequence, or thread, of operations. This applies to both the JavaScript run on a web browser and Node.js. However, JavaScript can perform tasks asynchronously using mechanisms like callbacks, promises, and async/await. In terms of a Singleton design pattern, because JavaScript is single-threaded, it does not have the issue of multiple threads creating multiple instances of a singleton class at the same time, which can happen in multi-threaded languages.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's take a look at an async function modifying singleton data to simulate asynchronous operations.

```javascript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
            this.data = null;
        }

        return Singleton.instance;
    }

    async setData(data) {
        // Simulating an async task
        return new Promise((resolve) => {
            setTimeout(() => {
                this.data = data;
                resolve();
            }, 100);
        });
    }

    getData() {
        return this.data;
    }
}

// Usage
const singleton1 = new Singleton();
const singleton2 = new Singleton();

(async function() {
    await singleton1.setData("Data from singleton1");
    console.log(singleton1.getData()); // "Data from singleton1"
    console.log(singleton2.getData()); // "Data from singleton1"

    await singleton2.setData("Data from singleton2");
    console.log(singleton1.getData()); // "Data from singleton2"
    console.log(singleton2.getData()); // "Data from singleton2"
})();
```

In this code, even though we are using async functions and tasks are not completed instantly, there will never be a problem with thread safety because JavaScript is single-threaded.

  </div>
  </div>
</details>

---

### How can we create a Singleton in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To create a Singleton in JavaScript, we can use a combination of closures and the module pattern. By returning an object with only one instance, we ensure that the Singleton is created and accessed in a safe and efficient manner.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }
}

// Usage
const singleton1 = new Singleton();
const singleton2 = new Singleton();

console.log(singleton1 === singleton2); // true

```

  </div>
  </div>
</details>

---

### Can there be multiple instances of a Singleton class?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, the Singleton pattern ensures there is only one instance of a class.
  </div>
  </div>
</details>

---

### Is the Singleton pattern common in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Singleton is common in JavaScript due to its module pattern, which encapsulates code within a single unit of functionality.
  </div>
  </div>
</details>

---

### Can a Singleton class be inherited?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a Singleton class can be inherited in JavaScript. However, the Singleton nature applies to the parent class, not to the derived classes, which could have multiple instances.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how a Singleton class can be inherited in JavaScript.

```javascript
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }
}

class Child extends Singleton {
    constructor() {
        super();
    }

    childMethod() {
        console.log('This is a method from the Child class');
    }
}

// Usage
const singleton1 = new Singleton();
const singleton2 = new Singleton();
console.log(singleton1 === singleton2); // true

const child1 = new Child();
const child2 = new Child();
console.log(child1 === child2); // false

child1.childMethod(); // "This is a method from the Child class"
child2.childMethod(); // "This is a method from the Child class"
```

In this code, `Singleton` is a singleton class and `Child` extends `Singleton`. When we try to create multiple instances of `Child`, we see that they are not the same instance (`child1` is not equal to `child2`), meaning the singleton nature of `Singleton` does not apply to `Child`. Each instance of `Child` has its own separate state and behavior.

  </div>
  </div>
</details>

---

### What is a practical example of Singleton in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A practical use-case of Singleton could be a logging system where you want to maintain a single log file, or a database connection, or a configuration object that needs to be shared and used across your application.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
class Logger {
    constructor() {
        if (!Logger.instance) {
            Logger.instance = this;
            this.logs = [];
        }

        return Logger.instance;
    }

    log(message) {
        this.logs.push(message);
        console.log(`LOG: ${message}`);
    }

    printLogCount() {
        console.log(`${this.logs.length} Logs`);
    }
}

// Usage
const logger1 = new Logger();
Object.freeze(logger1); // to make sure it's not modified elsewhere

logger1.log('First piece of log');
logger1.printLogCount(); // "1 Logs"

const logger2 = new Logger();
Object.freeze(logger2); // to make sure it's not modified elsewhere

logger2.log('Second piece of log');
logger2.printLogCount(); // "2 Logs"

console.log(logger1 === logger2); // true
```

In this example, `Logger` is a Singleton class with methods to log a message and print the total number of logs. `logger1` and `logger2` are both instances of `Logger`, but they are actually the same object because `Logger` is a Singleton class. As such, the logs added via `logger1` and `logger2` are both stored in the same array.

  </div>
  </div>
</details>

---

### What are other design patterns related to Singleton?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Singleton is part of creational design patterns. Other patterns in this category include Factory, Abstract Factory, Builder, and Prototype.
  </div>
  </div>
</details>

---

### Can Singleton be considered an anti-pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, some developers consider Singleton as an anti-pattern because it introduces a global state, making code harder to understand, test, and maintain.
  </div>
  </div>
</details>

---

### Is Singleton's global access always advantageous?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, while global access is convenient, it can make code dependencies less clear and cause problems with resource contention and coupling.
  </div>
  </div>
</details>

---

### Can we use Singleton in a distributed system?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In distributed systems, Singleton can be challenging due to the difficulty in maintaining a single instance across multiple servers or processes.
  </div>
  </div>
</details>

---

### How does JavaScript's module pattern relate to Singleton?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript's module pattern implements Singleton, as it encapsulates code in a single unit of functionality, restricting direct access to some of its components.
  </div><br/>
  <div><strong>Interview Response:</strong> The JavaScript Module Pattern is another way to achieve Singleton-like behavior. In fact, every JavaScript module is in its own way is a Singleton because the instance of the module is created when it's loaded, and the same instance gets reused wherever the module is imported.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// logger.js
let logs = [];

const logger = {
    log(message) {
        logs.push(message);
        console.log(`LOG: ${message}`);
    },

    printLogCount() {
        console.log(`${logs.length} Logs`);
    }
}

export default logger;


// main.js
import logger from './logger.js';

logger.log('This is from main.js');
logger.printLogCount(); // "1 Logs"


// other.js
import logger from './logger.js';

logger.log('This is from other.js');
logger.printLogCount(); // "2 Logs"
```

In this example, `logger.js` exports a `logger` object. This object is created once when `logger.js` is first imported, and the same object is used in any subsequent imports (like in `main.js` and `other.js`).

As a result, even though `logger` is imported in two different files, it maintains state across those files because it's the same object. This makes the JavaScript module pattern similar to the Singleton pattern in a way.

  </div>
  </div>
</details>

---

### Does Singleton violate the Single Responsibility Principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Singleton can violate the Single Responsibility Principle, as it manages its own creation and lifecycle in addition to its primary functionality.
  </div>
  </div>
</details>

---

### How does garbage collection work with Singletons?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, Singletons aren't garbage collected while the application is running because they're globally accessible and not dereferenced, hence, considered still "in use" by the garbage collector.
  </div>
  </div>
</details>

---

### Are there any alternatives to Singleton for global state management in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, alternatives to Singleton for global state management in JavaScript include the module pattern, dependency injection, and state management libraries such as Redux, MobX, or the Context API in React.
  </div>
  </div>
</details>

---
