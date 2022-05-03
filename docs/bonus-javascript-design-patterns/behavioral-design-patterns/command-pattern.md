---
title: Command Design Pattern
description: Command Pattern is a behavioral JS design pattern that aims to encapsulate actions or operations as objects. JavaScript Frontend Phone Interview Questions
sidebar_position: 4
sidebar_label: Command
keywords:
  - command pattern
  - command design pattern
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
  - command pattern
  - command design pattern
  - design patterns
  - interview answers
  - interview questions
---

<head>
  <title>Command Design Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Command Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the command design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Command Pattern is a behavioral JS design pattern that aims to encapsulate actions or operations as objects. This pattern is helpful in scenarios where we want to decouple or split the objects executing the commands from the objects issuing the orders. You may centralize the processing of these actions/operations by using command objects.
<br/>
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-command.jpg" /><br /><br />

**The command pattern involves four participants: command, receiver, invoker, and client.**

- **Command** – A command object knows the receiver and calls the receiver's method. The command contains values for the receiver method's arguments.
- **Client** – The client is responsible for creating the command object and passing it to the invoker.
- **Invoker** – The invoker receives the command object from the client and is exclusively responsible for calling (or invoking) a command.
- **Receiver** – The receiver receives the command and searches for a method to invoke based on the received command.

<br/>

```js
let calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  divide: function (x, y) {
    return x / y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};

let manager = {
  execute: function (name, args) {
    if (name in calculator) {
      return calculator[name].apply(calculator, [].slice.call(arguments, 1));
    }
    return false;
  },
};
console.log(manager.execute('add', 5, 2)); // prints 7
console.log(manager.execute('multiply', 2, 4)); // prints 8
```

</div><br />
  <div><strong className="codeExample">Code Example #2:</strong><br /><br />

<img src="/img/javascript-command.jpg" /><br /><br />

**This pattern's objects are as follows:**

**Client** -- example code: _the run() function_

- refers to the Receiver object.

**Receiver** -- example code: _Calculator_

- understands how to carry out the command's associated operation
- keeps a history of commands executed (optionally)

**Command** -- example code: _Command_

- keeps track of information concerning the activity that gets taken

**Invoker** -- example code: _the user activating the buttons._

- requests that the request carries out

<br/>

```js
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

let Command = function (execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

let AddCommand = function (value) {
  return new Command(add, sub, value);
};

let SubCommand = function (value) {
  return new Command(sub, add, value);
};

let MulCommand = function (value) {
  return new Command(mul, div, value);
};

let DivCommand = function (value) {
  return new Command(div, mul, value);
};

let Calculator = function () {
  let current = 0;
  let commands = [];

  function action(command) {
    let name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      current = command.execute(current, command.value);
      commands.push(command);
      console.log(action(command) + ': ' + command.value);
    },

    undo: function () {
      let command = commands.pop();
      current = command.undo(current, command.value);
      console.log('Undo ' + action(command) + ': ' + command.value);
    },

    getCurrentValue: function () {
      return current;
    },
  };
};

function run() {
  let calculator = new Calculator();

  // issue commands

  calculator.execute(new AddCommand(100));
  calculator.execute(new SubCommand(24));
  calculator.execute(new MulCommand(6));
  calculator.execute(new DivCommand(2));

  // reverse last two commands

  calculator.undo();
  calculator.undo();

  console.log('\nValue: ' + calculator.getCurrentValue());
}

run();

/*

OUTPUT:

Add: 100
Sub: 24
Mul: 6
Div: 2
Undo Div: 2
Undo Mul: 6

Value: 76

*/
```

</div>
 </div>

</details>

---

### To which pattern family does the Command pattern belong?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Command pattern is a type of behavioral design pattern.
    </div>
  </div>
</details>

---

### When should you utilize the JavaScript command pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Use Case:
    </div><br/>

- If you want to queue and execute requests at different times.
- If you're going to perform operations such as reset or undo.
- If you're going to keep a history of requests made.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Command pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Command Pattern
    </div>
    <br />
    <div></div>

- Singular Responsibility Principle Classes that invoke operations get separated from classes that perform these actions.
- The Open/Closed Principle - You can add new commands to the app without affecting the client code that already exists.
- You can use the undo/redo feature.
- You can use deferred operation execution.
- You can combine a series of simple commands to create a more sophisticated one.

<br />
  </div>
</details>

---

### What are some of the Command pattern's drawbacks?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
    </div>
    <br />
    <div></div>
  </div>
</details>

---
