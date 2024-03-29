---
title: Basic JavaScript Interview Questions
description: Basic JavaScript Questions |  Frontend Developer Interview Questions - What is JavaScript? JavaScript is an interpreted language, V8 compiles it to machine code.
sidebar_label: Basic JS Questions
sidebar_position: 1
keywords:
  - javascript interview questions
  - basic javascript questions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - frontend
  - interview questions
  - interview answers
  - js
tags:
  - javascript interview questions
  - basic javascript questions
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/JSBasicsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Basic JavaScript Interview Questions and Answers</title>
</head>

**JavaScript Basics: Basic JS Questions**

---

<div class='videoWrapper'>
  <iframe
    width='640'
    height='480'
    src='https://www.youtube.com/embed/5Re-egzK7fU'
    frameborder='0'
    allow='autoplay; encrypted-media'
    allowfullscreen
  ></iframe>
</div>

---

<AdSense />

---

<CloseAllAnswers />

### What is JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript is a high-level, interpreted programming language primarily used for enhancing interactivity and providing rich web content in browser-based applications. It supports event-driven, functional, and imperative programming styles.<br/><br/>
    </div>

Here is a simple JavaScript code example:

```javascript
function sayHello(name) {
  return 'Hello, ' + name + '!';
}

console.log(sayHello('JavaScript')); // Prints: Hello, JavaScript!
```

This code defines a function that concatenates a string with an input name, and logs the output to the console.

---

:::note
It should be noted, to maintain efficient speed in the browser, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. During execution, it compiles JavaScript code into machine code using a JIT (Just-In-Time) compiler, much like SpiderMonkey or Rhino in the Mozilla browser.
:::

  </div>
</details>

---

### What are JavaScript's main features?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript's main features include dynamic typing, object-oriented programming, first-class functions, closures, asynchronous programming (promises, async/await), event-driven interaction, and integration with web technologies like HTML and CSS.
    </div><br/>

Here's an example illustrating a few key features of JavaScript, including dynamic typing, object-oriented programming, and asynchronous programming:

```javascript
// Object-oriented programming
let student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  getFullName: function () {
    return this.firstName + ' ' + this.lastName;
  },
};

// Dynamic typing
let variable = 'Hello, ';
variable = variable + student.getFullName();
console.log(variable); // Prints: Hello, John Doe

// Asynchronous programming
setTimeout(function () {
  console.log('This is printed after 2 seconds');
}, 2000);
```

In this code, `student` is an object with properties and a method. We demonstrate dynamic typing by changing `variable` from a string to another string. The `setTimeout` function shows a simple example of asynchronous behavior.

  </div>
</details>

---

### What is the difference between a high and low-level programming language?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A high-level programming language is designed to be more abstract, and closer to natural language, making it easier for programmers to read, write, and maintain code. Low-level programming languages are closer to machine language, and provide greater control over hardware, but require more effort and knowledge to program effectively.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

{' '}

<div></div>

Here is an example of high-level programming language code (JavaScript):

```javascript
let a = 10;
let b = 20;
let sum = a + b;
console.log(sum); // prints 30
```

And here's a comparative example in a low-level language (Assembly, specifically x86 assembly):

```assembly
section .data
    a db 10
    b db 20
    sum db 0

section .text
    global _start

_start:
    mov al, [a]
    add al, [b]
    mov [sum], al

    ; Print sum
    mov eax, 4
    mov ebx, 1
    mov ecx, sum
    mov edx, 1
    int 0x80

    ; Exit
    mov eax, 1
    xor ebx, ebx
    int 0x80
```

In this assembly code, we manually load the values of `a` and `b` into a register, add them, and store the result back into `sum`. Then we call an interrupt to print `sum` and another to exit the program. This level of detail and manual control is characteristic of low-level languages.

  </div>
  </div>
</details>

---

### Is JavaScript an interpreted or compiled programming language?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript is traditionally considered an interpreted language, as it's executed line by line in a browser. However, modern engines use Just-In-Time (JIT) compilation for improved performance, blurring the line between interpreted and compiled.
    </div>
    <br />
    <div>
      <strong>Technical Details:</strong> In a compiled language, the target
      machine directly translates the program. The target machine does not
      translate the source code directly into an interpreted language. Instead,
      a different program, an interpreter, reads and executes the code. In
      simple terms: JavaScript is an interpreted language.
    </div><br />
  <div><strong className="codeExample">Table: Interpreted vs Compiled</strong><br /><br />

{' '}

<div></div>

Here's a simple table of differences between Interpreted and Compiled languages using JavaScript as an example of an interpreted language and C++ as an example of a compiled language:

| Criteria        | JavaScript (Interpreted)                                                                                                       | C++ (Compiled)                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Compilation     | No separate compilation step. Code is typically parsed and executed line-by-line by a JavaScript engine using JIT compilation. | Requires a separate compilation step before running, where the source code is translated to machine code. |
| Execution Speed | Generally slower, due to the overhead of interpreting code or JIT compiling at runtime.                                        | Generally faster, as the code is already compiled to machine code before execution.                       |
| Debugging       | Easier to debug, errors appear at runtime, line by line.                                                                       | Debugging can be more complex. Errors not caught at compile time may cause unpredictable behaviors.       |
| Portability     | Highly portable as long as the host system has a JavaScript engine (like a web browser).                                       | Compiled binaries are platform-dependent and may require recompiling for different systems.               |
| Use Case        | Commonly used for web development, enhancing interactivity in web pages.                                                       | Used for system software, game development, and where performance is critical.                            |

  </div>
  </div>
</details>

---

### What is the name of the JavaScript scripting language specification called?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The name of the JavaScript scripting
      language specification is called ECMAScript, which is maintained by the
      ECMA International Standards organization.
    </div>
  </div>
</details>

---

### Why is it called JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In 1995, JavaScript was created by
      Brendan Eich at Netscape Communications Corporation, originally named
      Mocha and then Live Script, before being renamed to JavaScript. The name
      was chosen to capitalize on Java's popularity and attract Java developers
      to the web. Despite its name, JavaScript is a distinct language with its
      own unique syntax and features.
    </div>
  </div>
</details>

---

### On which platforms can we implement JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript works in any environment
      that has a JS engine.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> JavaScript is a flexible language
      that can run on a wide range of platforms, as long as they support a
      JavaScript engine, such as web browsers, servers, desktop applications,
      and IoT devices.
    </div>
  </div>
</details>

---

### Why is it good to remember code names for different JavaScript Engines?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> It is good to remember the names of
      engines to ensure features work in all environments. If not, we must write
      a polyfill.
    </div><br />
  <div><strong className="codeExample">Code Names:</strong><br /><br />

{' '}

<div></div>

Here's a table of some commonly used JavaScript engines and their code names:

| JavaScript Engine   | Code Name                          |
| ------------------- | ---------------------------------- |
| Google Chrome       | V8                                 |
| Firefox             | SpiderMonkey                       |
| Safari              | JavaScriptCore (Nitro)             |
| Edge (pre-Chromium) | Chakra                             |
| Node.js             | V8                                 |
| Opera               | Carakan (pre-2013), V8 (post-2013) |

These engines are used to parse and execute JavaScript code in their respective environments.

  </div>
  </div>
</details>

---

### What can in-browser JavaScript do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In-browser JavaScript can manipulate the Document Object Model, respond to user events, make HTTP requests, and store data in cookies or local storage. It can also create animations and validate forms.</div><br />
  <div><strong>Technical Response:</strong> JavaScript's capabilities get heavily influenced by the environment in which it runs. Node.js, for example, includes methods that allow JavaScript to read/write arbitrary files and make network requests.<br/><br/>In-browser JavaScript can accomplish everything related to webpage alteration, user interaction, and webserver interaction.
  </div>
  </div><br/>
 <strong>For instance, in-browser JavaScript can:</strong>

1. Modify the existing text, add HTML, and design the page.
2. Respond to user activities, such as mouse clicks, pointer movements, and keystrokes.
3. Send network requests to distant servers and download and upload files (so-called AJAX and COMET technologies).
4. Get and set cookies, ask the visitor questions, and display messages
5. Track client-side data ("local storage").

</details>

---

### What CAN'T in-browser JavaScript do and why?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In-browser JavaScript can't access
      files or data on the user's computer, for security reasons. It also can't
      perform certain network requests, due to CORS policies. The aim is to
      prevent a malicious website from accessing users' data or harming them.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> JavaScript's capabilities in the
      browser are limited to safeguard the user's safety. The purpose is to
      prevent a malicious website from acquiring private information or
      inflicting data damage to users.
    </div>
    <br />
    <div>
      <strong>Examples of such constraints include:</strong>
      <br />
      <br />
      <ol>
        <li>
          JavaScript permits us to read/write files directly on the hard disk,
          copy them, or run applications on a web page, however, it does not
          have direct access to OS functionality.
        </li>
        <li>
          Modern browsers allow it to interact with files. Still, access is
          limited and only provided if the user performs specific actions, such
          as "dropping" a file into a browser window or choosing it through a
          tag.
        </li>
        <li>
          Interacting with the camera/microphone and other devices is possible,
          but it requires the user's explicit consent. The JavaScript-enabled
          page may not secretly activate a web camera, examine its surroundings,
          and communicate the data.
        </li>
        <li>
          JavaScript from one page may not be able to access JavaScript from
          another if they are from separate sites (from a different domain,
          protocol, or port).
        </li>
        <li>
          JavaScript can easily connect with the server that serves the current
          page through the internet. However, its capacity to receive data from
          other sites/domains is severely limited. Although feasible, it
          requires explicit agreement from the remote side (represented in HTTP
          headers).
        </li>
      </ol>
    </div>
  </div>
</details>

---

### What makes JavaScript unique?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript is unique because it fully
      integrates with HTML and CSS, and all major browsers support it.
      JavaScript is the only browser technology that combines, all three of
      these features. That distinguishes JavaScript, and explains why it is the
      most widely used technology for designing browser interfaces.
    </div>
  </div>
</details>

---

### Can you name some modern alternative languages that convert to JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some of the alternatives to JavaScript include Coffee Script, TypeScript, Flow, Bry-thon, Dart, and Kotlin.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Several popular languages are
      trans-piled (converted) to JavaScript before running in the browser.
    </div>
    <br />
    <div>
      <strong>Examples of such languages:</strong>
      <br />
      <br />
      <ol>
        <li>
          <strong>CoffeeScript</strong> is a "syntactic sugar" for JavaScript.
          It introduces shorter syntax, allowing us to write more transparent
          and more precise code—usually, Ruby devs like it.
        </li>
        <li>
          <strong>TypeScript</strong> concentrates on adding "strict data
          typing" to simplify the development and support of complex systems,
          and Microsoft develops it.
        </li>
        <li>
          <strong>Flow</strong> also adds data typing, but differently, and
          Facebook developed it.
        </li>
        <li>
          <strong>Dart</strong> is a standalone language with an engine that
          runs in non-browser environments (like mobile apps) and converts to
          JavaScript—developed by Google.
        </li>
        <li>
          <strong>Brython</strong> is a Python transpiler to JavaScript that
          enables the writing of applications in pure Python without JavaScript.
        </li>
        <li>
          <strong>Kotlin</strong> is a modern, concise and safe programming
          language that can target the browser or Node.
        </li>
      </ol>
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> TypeScript<br /><br />

{' '}

<div></div>

TypeScript is a strongly typed, object-oriented, compiled language. It is a super-set of JavaScript. TypeScript adds optional types, classes, and modules to JavaScript.

```typescript
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('JavaScript!');
console.log(greeter.greet()); // Outputs: Hello, JavaScript!
```

In this example, the `Greeter` class has a property `greeting` of type `string`. The `constructor` method is a special method for creating and initializing an object created with a class. This method accepts one parameter `message` of type `string`.

The `greet` method returns a `string` that includes the `greeting` property.

The `let greeter = new Greeter("JavaScript!");` line creates a new `Greeter` object with the `greeting` property set to "World".

Finally, `console.log(greeter.greet());` calls the `greet` method on the `greeter` object and logs the return value to the console.

  </div>
  </div>
</details>

---

### What is the difference between "undefined" and "null" in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> "Undefined" means a variable has been declared but not assigned a value. "Null" is an assignment value that means no value or no object. It implies absence of value.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

{' '}

<div></div>

```js
let test;
console.log(test); // Outputs: undefined

test = null;
console.log(test); // Outputs: null
```

  </div>
  </div>
</details>

---
