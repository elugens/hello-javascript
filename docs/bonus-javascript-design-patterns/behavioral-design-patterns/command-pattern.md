---
title: Command Design Pattern
description: Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.
sidebar_position: 4
sidebar_label: Command
---

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
      <strong>Interview Response:</strong> Command Pattern is a behavioral JS design pattern that aims to encapsulate actions or operations as objects. This pattern is useful in scenarios where we want to decouple or split the objects executing the commands from objects issuing the commands. Command objects allow you to centralize the processing of these actions/operations.
<br/>
    </div>    
    <div>
</div><br />
  <div><strong className="codeExample">Code Example #1:</strong><br /><br />

<img src="/img/javascript-command.jpg" /><br /><br />

**The four participants involved in the command pattern are command, receiver, invoker, and client.**

- **Command** – A command object knows about the receiver and invokes a method of the receiver. Values for parameters of the receiver method are stored in the command.
- **Client** – The client’s responsibility is to create the command object and pass it to the invoker.
- **Invoker** – The invoker receives the command object from the client, and it’s only responsibility is to call (or invoke) a command.
- **Receiver** – Then, the receiver receives the command and looks for a method to call based on the received command

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

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- references the Receiver object

**Receiver** -- In example code: _Calculator_

- knows how to carry out the operation associated with the command
- (optionally) maintains a history of executed commands

**Command** -- In example code: _Command_

- maintains information about the action to be taken

**Invoker** -- In our example code: _the user pushing the buttons_

- asks to carry out the request

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

### In what pattern category does the Command pattern belong too?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Command pattern belongs to the Behavioral design pattern category.
    </div>
  </div>
</details>

---

### When should you use the command pattern in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Use Case:
    </div><br/>

- If you want to queue and execute requests at different times.
- If you want to perform operations such as reset or undo.
- If you want to keep a history of requests made.

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

- Single Responsibility Principle. You can decouple classes that invoke operations from classes that perform these operations.
- Open/Closed Principle. You can introduce new commands into the app without breaking existing client code.
- You can implement undo/redo.
- You can implement deferred execution of operations.
- You can assemble a set of simple commands into a complex one.

<br />
  </div>
</details>

---

### What are some of the drawbacks of the Command pattern?

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

> Written with [StackEdit](https://stackedit.io/).

---
