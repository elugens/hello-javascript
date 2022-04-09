---
title: Template Method Pattern
description: Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
sidebar_position: 2
sidebar_label: Template Method
---

**Structural: Template Method**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the template method design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Template Method pattern provides an outline of a series of steps for an algorithm. Objects that implement these steps retain the original structure of the algorithm but have the option to redefine or adjust certain steps. This pattern is designed to offer extensibility to the client developer.<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong> ES5 Implementation<br /><br />

<img src="/img/javascript-template-method.jpg" /><br /><br />

**The objects participating in this pattern are:**

**AbstractClass** -- In example code: _datastore_

- offers an interface for clients to invoke the templateMethod
- implements template method which defines the primitive Steps for an algorithm
- provides the hooks (through method overriding) for a client developer to implement the Steps

**ConcreteClass** -- In example code: _mySql_

- implements the primitive Steps as defined in AbstractClass

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

### In what pattern category does the Interpreter pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Template Method pattern belongs to the Behavioral design pattern category.
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
      <strong>Interview Response:</strong> Template Method Pattern: When to Use
    </div>
    <br />
    <div></div>

- The problem resolved by the template method pattern is the use of an algorithm which has different variations. You would need to split your algorithm into different steps, implemented in the abstract class when in common between the different implementations. On the other hand, the steps which are different will be implemented in the concrete classes.
- Another interesting case where you would detect the need for this pattern is when you have copy-pasted code (private functions) between different classes.
- Finally, you may use this pattern when most of your classes have related behaviors.

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
      <strong>Interview Response:</strong> Benefits of the Template Method Pattern
    </div>
    <br />
    <div></div>

- It’s fairly easy to create concrete implementation of an algorithm because you’re removing common parts of the problem domain with the use of an abstract class.
- Clean code because you avoid duplicate code.
- Ever cleaner code because you separate the algorithm into private methods or functions, which are simpler and easier to test.

<br />
  </div>
</details>

---

### What are some of the drawbacks of using the Template Method pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Template Method Pattern.
    </div>
    <br />
    <div></div>

- You might violate the Liskov Substitution Principle by suppressing a default step implementation via a subclass.
- Some clients may be limited reason the template pattern enforces a particular design.
- Template pattern is more flexible and changes at high-level or low-level can disturb implementation, reason maintenance can be painful with this pattern.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
