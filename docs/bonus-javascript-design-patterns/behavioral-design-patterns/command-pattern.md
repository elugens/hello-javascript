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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CommandSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Command Design Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Command Pattern**

<CloseAllAnswers />

---

### What is the Command Design Pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> The Command pattern is a behavioral design pattern in JavaScript that encapsulates a request as an object, allowing for actions to be queued, logged, and undone.
<br/>
    </div>
    <br/>
    <div>
      <strong>Technical Response:</strong> The Command design pattern is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request's execution, and support undoable operations.
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

Here's an example of how to implement the Command pattern in modern JavaScript.

```javascript
// The Command class
class Command {
  constructor(subject) {
    this.subject = subject;
    this.commandsExecuted = [];
  }

  execute(command) {
    this.commandsExecuted.push(command);
    return this.subject[command]();
  }
}

// The subject class
class BankAccount {
  constructor() {
    this.balance = 0;
  }

  deposit() {
    this.balance += 10;
    console.log(`Balance is: ${this.balance}`);
  }

  withdraw() {
    if(this.balance >= 10) {
      this.balance -= 10;
    }
    console.log(`Balance is: ${this.balance}`);
  }
}

// Use the Command and the BankAccount classes
const bankAccount = new BankAccount();
const bankAccountCommand = new Command(bankAccount);

bankAccountCommand.execute('deposit');
bankAccountCommand.execute('withdraw');

console.log(`Commands Executed: ${bankAccountCommand.commandsExecuted}`);
```

In this example, `Command` is the command class. It has a method `execute` that, when called with a command name, executes that command on the subject (an instance of `BankAccount`). It also keeps track of the commands that have been executed. `BankAccount` is the subject class, and it has two methods, `deposit` and `withdraw`, that can be executed through the command class.

In the usage section, we create instances of `BankAccount` and `Command`, execute some commands on the bank account through the command instance, and print out the commands that have been executed.

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
      <strong>Interview Response:</strong> The Command pattern belongs to the Behavioral pattern family in JavaScript, which is concerned with communication between objects and the assignment of responsibilities.
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
      <strong>Interview Response:</strong> You should utilize the JavaScript Command pattern when you need to decouple the object making a request from the object that handles the request.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> Use Case:
    </div>

- If you want to queue and execute requests at different times.
- If you're going to perform operations such as reset or undo.
- If you're going to keep a history of requests made.

<br />
  </div>
</details>

---

### What are the benefits of using the Command pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Benefits of using the Command pattern in JavaScript include decoupling, flexibility, extensibility, undo/redo functionality, and the ability to create macro commands.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Command Pattern
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
      <strong>Interview Response:</strong> Drawbacks of the Command pattern in JavaScript include increased complexity, potential performance overhead, and difficulty with implementing some commands that require a state.
    </div>
  </div>
</details>

---

### Are there any alternatives to using the Command pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Yes, there are several alternatives to the Command pattern in JavaScript, including the Strategy, Observer, and Mediator patterns, among others.
    </div>
  </div>
</details>

---

### What are some typical uses of the Command Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Command pattern is typically used in situations where you want to decouple the sender and receiver of a request, provide callbacks, handle queue or logging operations, or support undo operations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a practical example in modern JavaScript, which illustrates undo operation.

```javascript
// Command class
class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

// Calculator class
class Calculator {
  constructor() {
    this.currentValue = 0;
    this.commands = [];
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue, command.value);
    this.commands.push(command);
  }

  undoCommand() {
    const command = this.commands.pop();
    this.currentValue = command.undo(this.currentValue, command.value);
  }

  getCurrentValue() {
    return this.currentValue;
  }
}

// Calculator operations
function add(value, amount) {
  return value + amount;
}

function subtract(value, amount) {
  return value - amount;
}

// Usage
const calculator = new Calculator();

// Add 10
const addCommand = new Command(add, subtract, 10);
calculator.executeCommand(addCommand);
console.log(calculator.getCurrentValue());  // Output: 10

// Subtract 5
const subtractCommand = new Command(subtract, add, 5);
calculator.executeCommand(subtractCommand);
console.log(calculator.getCurrentValue());  // Output: 5

// Undo last command (Subtract 5)
calculator.undoCommand();
console.log(calculator.getCurrentValue());  // Output: 10
```

In this example, the Calculator class uses the Command pattern to handle arithmetic operations. Each operation (add, subtract) is encapsulated in a Command object, which has an `execute` function to carry out the operation and an `undo` function to reverse it. The Calculator maintains a history of executed commands and provides an `undoCommand` method to undo the most recently executed command. This pattern provides a flexible and powerful way to organize and manipulate operations.

  </div>
  </div>
</details>

---

### What are the main components of the Command Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main components of the Command Pattern are Command interface, ConcreteCommand classes, a Receiver, an Invoker, and a Client that initiates and manages commands through the Invoker.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The main components of the Command Pattern are:

- **Command:** This is the interface for executing operations.
- **ConcreteCommand:** This class extends the Command interface and implements the execute method.
- **Client:** This class creates and executes the command.
- **Invoker:** This class asks the command to carry out the request.
- **Receiver:** This is the class that performs the actual work when the execute method in ConcreteCommand is called.

Here's an example of how to implement these components in modern JavaScript:

```javascript
// Receiver
class Light {
  turnOn() {
    console.log("The light is on");
  }

  turnOff() {
    console.log("The light is off");
  }
}

// Command
class Command {
  constructor(light) {
    this.light = light;
  }

  execute() {}
}

// ConcreteCommand
class OnCommand extends Command {
  constructor(light) {
    super(light);
  }

  execute() {
    this.light.turnOn();
  }
}

class OffCommand extends Command {
  constructor(light) {
    super(light);
  }

  execute() {
    this.light.turnOff();
  }
}

// Invoker
class Switch {
  constructor(onCommand, offCommand) {
    this.onCommand = onCommand;
    this.offCommand = offCommand;
  }

  flipUp() {
    this.onCommand.execute();
  }

  flipDown() {
    this.offCommand.execute();
  }
}

// Client
let light = new Light();
let onCommand = new OnCommand(light);
let offCommand = new OffCommand(light);
let switchButton = new Switch(onCommand, offCommand);

switchButton.flipUp();  // Output: The light is on
switchButton.flipDown();  // Output: The light is off
```

In this example:

- `Light` is the Receiver class that performs the actual operations (turning the light on or off).
- `Command` is the Command interface that declares the `execute` method.
- `OnCommand` and `OffCommand` are the ConcreteCommand classes that implement the `execute` method.
- `Switch` is the Invoker class that calls the `execute` method on a Command object.

The client, represented in the last section of the code, creates instances of the Receiver, ConcreteCommand, and Invoker classes, and then invokes the commands through the Invoker.

  </div>
  </div>

</details>

---

### What's the role of the 'Command' component in the Command pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It encapsulates all the information required to perform an action or trigger an event.
  </div>
  </div>
</details>

---

### Can you explain the 'Receiver' in the Command Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Receiver is an object that performs a set of cohesive actions. It's the object being controlled.
  </div>
  </div>
</details>

---

### How does the 'Invoker' function in the Command pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Invoker is an object that knows how to execute a command but doesn't know how the command works.
  </div>
  </div>
</details>

---

### What is the role of the 'Client' in the Command Pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Client creates a Command and sets its receiver.
  </div>
  </div>
</details>

---

### How does Command Pattern support Undo operations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the Command Pattern, each command class encapsulates a particular action on a receiver with its associated state. By storing the previous state, a command can also implement an undo action. It does so by maintaining a history of commands. To undo, it executes the reverse operation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of how to support undo operations using the Command Pattern in JavaScript:

```javascript
class Command {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

class Calculator {
  constructor() {
    this.currentValue = 0;
    this.commands = [];
  }

  executeCommand(command) {
    this.currentValue = command.execute(this.currentValue, command.value);
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    this.currentValue = command.undo(this.currentValue, command.value);
  }

  getValue() {
    return this.currentValue;
  }
}

function add(value, amount) {
  return value + amount;
}

function subtract(value, amount) {
  return value - amount;
}

const calculator = new Calculator();

// execute add command
const addCommand = new Command(add, subtract, 10);
calculator.executeCommand(addCommand);
console.log(calculator.getValue());  // Output: 10

// undo add command
calculator.undo();
console.log(calculator.getValue());  // Output: 0
```

In this example, the Command class encapsulates an action (add) and its undo action (subtract) along with the value associated with the action. The Calculator class keeps track of the commands that are executed. When the undo method is called on the Calculator, it retrieves the most recent command and calls its undo action.

  </div>
  </div>
</details>

---

### How can Command Pattern encapsulate a request as an object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By letting the sender of the request refer to the receiver indirectly, promoting loose coupling.
  </div>
  </div>
</details>

---

### Can Command Pattern help in reducing system complexity?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it simplifies the code as it separates the objects sending a request from those receiving the request.
  </div>
  </div>
</details>

---

### Is the Command Pattern a good fit for JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript's first-class function nature allows for straightforward implementation of the Command Pattern.
  </div>
  </div>
</details>

---

### How does the Command Pattern influence code testability?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It improves testability by decoupling objects and promoting single responsibility principle.
  </div>
  </div>
</details>

---

### How does the Command Pattern support Macro Recording?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By keeping a list of commands in sequence, it can reproduce the sequence when needed.
  </div>
  </div>
</details>

---

### How does the Command Pattern aid in handling high-level operations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It can manage complex operations by encapsulating multiple actions within one command.
  </div>
  </div>
</details>

---
