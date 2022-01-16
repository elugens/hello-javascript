---
title: Basic JS Questions
description: Basic JS Questions in JavasScript  -  JavaScript Basics
sidebar_position: 1
---

# Basic JavaScript: Interview Questions

**JavaScript Basics: Basic JS Questions**

<head>
  <title>JavaScript Frontend Interview Questions and Answers</title>
  <meta charSet='utf-8' />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What is JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript is a dynamically typed,
      interpreted scripting language that creates interactive effects for the
      browser.<br/><br/>
    </div>

:::note

It should be noted, to maintain efficient speed in the browser, V8 translates JavaScript code into more efficient machine
code instead of using an interpreter. During execution, it compiles JavaScript code into machine code using a JIT (Just-In-Time) compiler, much like SpiderMonkey or Rhino in the Mozilla browser.

:::

  </div>
</details>

---

### What is the difference between a high- and low-level language?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> When a language is at a high level, it means that it is built without requiring detailed knowledge of the underlying computer. For example, memory management, knowing which processor is running, and keeping track of things like pointers are unnecessary. The platform independence of high-level languages makes them easier to write and maintain.
    </div>
  </div>
</details>

---

### Is JavaScript a compiled or interpreted programming language?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript is an interpreted
      programming language.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Programs written in a compiled language are directly translated by the target machine. With interpreted languages, the source code is not directly translated by the target machine. Instead, another program, the interpreter, reads and executes the code. Simply put: JavaScript is an interpreted language.
    </div>
  </div>
</details>

---

### What is the name of the JS scripting language specification called?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> ECMAScript with a reference guide
      named ECMA-262.
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
      <strong>Interview Response:</strong> JavaScript was originally called "Live Script," but because Java became so popular, it was renamed JavaScript. It was also renamed JavaScript based on the popularity of the Java programming language, but they are different. JavaScript is a high-level programming language and Java is a middle-level programming language.
      </div>
  </div>
</details>

---

### What environments can JavaScript be developed on?

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
      <strong>Technical Response:</strong> JavaScript can now be run not only on a browser but on a server or on any device that has a JavaScript engine or a special application like Node.js.
    </div>
  </div>
</details>

---

### What are the code names for Chrome, Opera, FireFox, IE, Edge, and Safari?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Technical Response:</strong>
      <br />
      <br />
      <ol>
        <li>V8 - in Chrome and Opera</li>
        <li>Spider Monkey - in FireFox</li>
        <li>Chakra - in Internet Explorer</li>
        <li>Chakra Core - in Microsoft Edge</li>
        <li>Nitro / SquirrelFish - in Safari</li>
      </ol>
    </div>
  </div>
</details>

---

### Why is it good to remember code names for different JS Engines?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You should remember the names of the engines to ensure that the features work in all environments. Otherwise, you have to write a polyfill.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Code names are used in developer articles on the internet, so we should remember them. As an example, if a specific feature is supported by the V8 engine, then it probably works in Chrome and Opera.
    </div>
  </div>
</details>

---

### What can in-browser JavaScript do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript can do everything related to a webpage including manipulation, interaction with the user, and interaction with the server.</div><br />
  <div><strong>Technical Response:</strong> JavaScript's capabilities are greatly affected by the environment it is operating in. JavaScript in a Node.js environment can read and write arbitrary files and perform network requests. JavaScript allows you to manipulate web pages, communicate with users, and interact with the server from within your browser.</div>
  </div><br/>
 <strong>For instance, in-browser JavaScript can:</strong>

1. Change the content, add HTML, and style the page.
1. React to user actions, such as mouse clicks, pointer movements, and keystrokes.
1. Sending requests to remote servers, downloading and uploading files (as with AJAX and COMET).
1. Get and set cookies, ask visitors questions, and display messages.
1. Keep track of data stored on the client-side ("local storage").

</details>

---

### What CAN’T in-browser JavaScript do and why?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript's capabilities are restricted in the browser for security reasons. We want to prevent malicious websites from gaining access to or harming our users' data.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Due to user safety concerns, JavaScript's abilities are limited in the browser. The idea is to prevent evil websites from accessing personal data or causing harm to users.
    </div>
    <div>
      <strong>Examples of such restrictions include:</strong>
      <br />
      <br />
      <ol>
        <li>
          An arbitrary JavaScript script on a webpage cannot read/write hard drive files, copy them, or run programs. It does not have direct access to the operating system.
        </li>
        <li>
          Currently, browsers can work with files, but they are limited to
          certain actions, such as dropping files into the browser window or
          selecting them via a &#8249;input&#8250; tag.
        </li>
        <li>
          It is possible to interact with the camera/microphone and other devices, but these actions require the explicit permission of the user. A JavaScript-enabled page cannot secretly activate a webcam, monitor the surroundings, or send user information.
        </li>
        <li>
          The JavaScript on one page may not access the code on the other if the
          pages are on separate domains, protocols, or ports.
        </li>
        <li>
          JavaScript can easily communicate over the internet with the server generating the current page. Despite this, its ability to receive data from other sites/domains is severely limited. The remote side must, however, express its acceptance using HTTP headers, regardless of whether it is possible.
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
      <strong>Interview Response:</strong> JavaScript is unique because it has
      full integration with HTML, CSS and it is supported by all major browsers.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> There are at least three great things
      about JavaScript including full integration with HTML/CSS, simple things
      are done simply, and support by all major browsers and enabled by default.
      JavaScript is the only browser technology that combines these three
      things. That is what makes JavaScript unique. That is why it is the most
      widespread tool for creating browser interfaces.
    </div>
  </div>
</details>

---

### Name some modern alternative languages that convert to JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Some of the alternatives to
      JavaScript include Coffee Script, Type Script, Flow, Brython, Dart and
      Kotlin.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> There are several popular languages,
      which are trans-piled (converted) to JavaScript before they run in the
      browser.
    </div>
    <br />
    <div>
      <strong>Examples of such languages:</strong>
      <br />
      <br />
      <ol>
        <li>
          CoffeeScript is a “syntactic sugar” for JavaScript. It introduces
          shorter syntax, allowing us to write clearer and more precise code.
          Usually, Ruby devs like it.
        </li>
        <li>
          A major focus of TypeScript is to add "strict data typing" so that
          complex systems can be developed and supported more easily. It is
          developed by Microsoft.
        </li>
        <li>
          Flow adds data typing of its own, but in a unique way. Facebook
          developed it.
        </li>
        <li>
          Dart is a standalone language that runs in non-browser environments
          (like mobile apps) but is also the ability to convert into JavaScript.
          Google developed it.
        </li>
        <li>
          Brython is a JavaScript transpiler that makes it possible to write
          applications in pure Python without JavaScript.
        </li>
        <li>
          A modern, concise, and secure programming language, Kotlin supports
          the browser and Node.js.
        </li>
      </ol>
    </div>
  </div>
</details>

---
