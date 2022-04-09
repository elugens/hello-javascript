---
title: Visitor Design Pattern
description: Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
sidebar_position: 11
sidebar_label: Visitor
---

**Structural: Visitor Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the Visitor design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Visitor pattern defines a new operation to a collection of objects without changing the objects themselves. The new logic resides in a separate object called the Visitor.<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-visitor.jpg" /><br /><br />

**The objects participating in this pattern are:**

**ObjectStructure** -- In example code: _employees array_

- maintains a collection of Elements which can be iterated over

**Elements** -- In example code: _Employee objects_

- defines an accept method that accepts visitor objects
- in the accept method the visitor's visit method is invoked with 'this' as a parameter

**Visitor** -- In example code: _ExtraSalary, ExtraVacation_

- implements a visit method. The argument is the Element being visited. This is where the Element's changes are made

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

### In what pattern category does the Visitor pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Visitor pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### When should you use the Visitor Pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Visitor pattern can be used when…
    </div>
    <br />
    <div></div>

- Similar operations need to be performed on different objects of a data structure.
- Specific operations need to be performed on different objects in the data structure.
- You want to add extensibility to libraries or frameworks.

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

- Open/Closed Principle. You can introduce a new behavior that can work with objects of different classes without changing these classes.
- Single Responsibility Principle. You can move multiple versions of the same behavior into the same class.
- A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Visitor pattern?

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

- You need to update all visitors each time a class gets added to or removed from the element hierarchy
- Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.

<br />
  </div>
</details>

---

> Written with [StackEdit](https://stackedit.io/).

---
