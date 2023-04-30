---
title: Template Method Pattern
description: The Template Method pattern recommends breaking down an algorithm into a series of steps and then turning these steps into methods.
sidebar_position: 2
sidebar_label: Template Method
keywords:
  - template method pattern
  - template method design pattern
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
  - template method pattern
  - template method design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TemplateMethodSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Template Method Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Template Method**

<CloseAllAnswers />

---

### Can you explain the template method design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The template method pattern is a behavioral design pattern in JavaScript that defines an outline of an algorithm and lets subclasses implement specific steps.
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Template Method pattern defines a set of stages in an algorithm. Objects that implement these steps keep the algorithm's original structure but have the option to redefine or alter specific steps. This pattern intends to provide the client developer with extensibility.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-template-method.jpg" /><br /><br />

**This pattern's objects are as follows:**

**AbstractClass** -- example code: _datastore_

- It provides a way for clients to use the template method.
- It uses the template method to define the basic steps of an algorithm.
- It provides hooks (through method overriding) for a client developer to use in implementing the Steps.

**ConcreteClass** -- example code: _MySQL_

- carries out the primitive Steps described in AbstractClass.

<br/>

```js
let datastore = {
  process: function () {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  },
};

function inherit(proto) {
  let F = function () {};
  F.prototype = proto;
  return new F();
}

function run() {
  let mySql = inherit(datastore);

  // implement template steps

  mySql.connect = function () {
    console.log('MySQL: connect step');
  };

  mySql.select = function () {
    console.log('MySQL: select step');
  };

  mySql.disconnect = function () {
    console.log('MySQL: disconnect step');
  };

  mySql.process();
}

run();

/*

OUTPUT:

MySQL: connect step
MySQL: select step
MySQL: disconnect step

*/
```

</div>
 </div>

</details>

---

### What pattern category does the template method pattern belong to?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The template method pattern belongs to the behavioral design pattern category in JavaScript, which focuses on communication between objects and how they interact.
    </div>
  </div>
</details>

---

### What is the use case for the template method design pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The template method pattern is useful when you want to define a skeletal structure of an algorithm in JavaScript and allow subclasses to customize some steps.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> When to Use the Template Method Pattern.
    </div>
    <br />
    <div></div>

- The template method pattern solves the problem by employing an algorithm with various versions. You need to divide your method into additional steps implemented in the abstract class when the different implementations share them. On the other hand, we implement the various steps in the concrete classes.
- Another compelling use case for this approach is when you have copied and pasted code (private functions) between various classes.
- Finally, you can employ this strategy if most of your classes exhibit similar tendencies.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Template Method pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Benefits of using the Template Method pattern in JavaScript include promoting code reuse, reducing duplication, and providing a clear and flexible structure for algorithms.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Template Method Pattern
    </div>
    <br />
    <div></div>

- It's relatively easy to create a concrete implementation of an algorithm because you're removing common parts of the problem domain using an abstract class.
- Clean code because you avoid duplicate code.
- Ever cleaner code because you separate the algorithm into private methods or functions that are simpler and easier to test.

<br />
  </div>
</details>

---

### What are some disadvantages of employing the Template Method design pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Disadvantages of using the Template Method pattern in JavaScript include increased complexity due to the added abstraction layer, and reduced flexibility in the overall design.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Template Method Pattern.
    </div>
    <br />
    <div></div>

- You may violate the Liskov Substitution Principle by suppressing a default step implementation through a subclass.
- Some clients may be the only reason the template pattern imposes a specific design.
- The template design is more adaptable than other patterns, and modifications at the high or low level might disrupt implementation, making maintenance difficult.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Template Method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, some alternatives to the Template Method pattern in JavaScript include the Strategy pattern, the Command pattern, and the Decorator pattern.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Yes, there are several alternatives to the Template Method pattern in JavaScript, including the Strategy pattern, which uses composition instead of inheritance, the Command pattern, which encapsulates requests as objects, and the Decorator pattern, which adds functionality to objects dynamically at runtime.
    </div>
    <br />
<br />
  </div>
</details>

---
