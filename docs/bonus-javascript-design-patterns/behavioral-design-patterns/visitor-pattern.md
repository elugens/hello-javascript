---
title: Visitor Design Pattern
description: A visitor pattern is a behavioral pattern that enables you to decouple algorithms from the objects on which they operate.
sidebar_position: 11
sidebar_label: Visitor
keywords:
  - visitor pattern
  - visitor design pattern
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
  - visitor pattern
  - visitor design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/VisitorSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Visitor Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Visitor Pattern**

<CloseAllAnswers />

---

### Can you explain the visitor design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Visitor is a behavioral design pattern that lets you detach algorithms from the objects on which they act. The Visitor pattern adds new methods to a group of objects without affecting them, and the new logic gets housed in a distinct entity known as the Visitor.<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-visitor.jpg" /><br /><br />

**The objects participating in this pattern are:**

**ObjectStructure** -- example code: _employees array_

- maintains a collection of elements that can get iterated over

**Elements** -- example code: _Employee objects_

- defines an accept method that accepts visitor objects
- in the accept method, the Visitor's visit method gets invoked with 'this' as a parameter

**Visitor** -- example code: _ExtraSalary, ExtraVacation_

- implements a visit method. The element getting visited is the argument when the element's changes get made.

<br/>

```js
let Employee = function (name, salary, vacation) {
  let self = this;

  this.accept = function (visitor) {
    visitor.visit(self);
  };

  this.getName = function () {
    return name;
  };

  this.getSalary = function () {
    return salary;
  };

  this.setSalary = function (sal) {
    salary = sal;
  };

  this.getVacation = function () {
    return vacation;
  };

  this.setVacation = function (vac) {
    vacation = vac;
  };
};

let ExtraSalary = function () {
  this.visit = function (emp) {
    emp.setSalary(emp.getSalary() * 1.1);
  };
};

let ExtraVacation = function () {
  this.visit = function (emp) {
    emp.setVacation(emp.getVacation() + 2);
  };
};

function run() {
  let employees = [
    new Employee('John', 10000, 10),
    new Employee('Mary', 20000, 21),
    new Employee('Boss', 250000, 51),
  ];

  let visitorSalary = new ExtraSalary();
  let visitorVacation = new ExtraVacation();

  for (let i = 0, len = employees.length; i < len; i++) {
    let emp = employees[i];

    emp.accept(visitorSalary);
    emp.accept(visitorVacation);
    console.log(
      emp.getName() +
        ': $' +
        emp.getSalary() +
        ' and ' +
        emp.getVacation() +
        ' vacation days'
    );
  }
}

run();

/*

OUTPUT:

John: $11000 and 12 vacation days
Mary: $22000 and 23 vacation days
Boss: $275000 and 53 vacation days

*/
```

</div>
 </div>

</details>

---

### To which pattern family does the Visitor pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Visitor pattern is part of the Behavioral design pattern set.
    </div>
  </div>
</details>

---

### When should you utilize the JavaScript Visitor Pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> We can use the visitor pattern when:
    </div>
    <br />
    <div></div>

- Similar procedures must get done on various data structure objects.
- Specific operations must get carried out on multiple items in the data structure.
- You wish to make libraries or frameworks more extensible.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Visitor pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Visitor Pattern
    </div>
    <br />
    <div></div>

- The principle of open/closed. You may add new behavior that works with objects of various classes without modifying the classes themselves.
- Single Responsibility Principle. You can move multiple versions of the same behavior into the same class.
- While working with various objects, a visitor object might get helpful information. This information is helpful if you wish to traverse a complicated object structure, such as an object tree, and apply the Visitor to each item in the structure.

<br />
  </div>
</details>

---

### What are some of the Visitor pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Drawbacks of the Visitor Pattern.
    </div>
    <br />
    <div></div>

- Every time a class is added or withdrawn from the element hierarchy, you must notify all visitors.
- Visitors may not have access to the private fields and methods of the components they get expected to operate.

<br />
  </div>
</details>

---
