---
title: Basic JavaScript Questions
description: Basic JS Questions in JavasScript - JavaScript Basics
sidebar_label: Basic JS Questions
sidebar_position: 1
---

**JavaScript Basics: Basic JS Questions**

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
      <strong>Interview Response:</strong> JavaScript is a high-level, dynamically typed, interpreted scripting language used to create interactive effects in the browser or server.<br/><br/>
    </div>

:::note

It should be noted, to maintain efficient speed in the browser, V8 translates JavaScript code into more efficient machine code instead of using an interpreter. During execution, it compiles JavaScript code into machine code using a JIT (Just-In-Time) compiler, much like SpiderMonkey or Rhino in the Mozilla browser.

:::

  </div>
</details>

---

### What is the difference between a high-level and low-level programming language?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A high-level language gets compiled without detailed knowledge of the underlying computer. For example, managing memory, knowing what processor is running, and keeping track of things like pointers are not necessary. High-level languages are more accessible to write and manage than low or mid-level programming languages because they are platform-independent. The major distinction between high-level and low-level languages is that programmers can readily grasp, interpret, and compile high-level languages when compared to machines. Machines, on the other hand, can interpret low-level language more readily than humans.
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
      <strong>Interview Response:</strong> JavaScript is an interpreted language.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> In a compiled language, the target machine directly translates the program. The target machine does not translate the source code directly into an interpreted language. Instead, a different program, an interpreter, reads and executes the code. In simple terms: JavaScript is an interpreted language.
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
      <strong>Interview Response:</strong> ECMAScript with a reference guide named ECMA-262.
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
      <strong>Interview Response:</strong> JavaScript was initially named "Live Script," but because of the popularity of Java. It was renamed too JavaScript as a play on the notoriety of the Java programming language, but they are considerably different. JavaScript is a high-level programming language, and Java is a mid-level programming language.
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
      <strong>Interview Response:</strong> JavaScript works in any environment that has a JS engine.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Today, JavaScript can execute not only in the browser but also on the server or any device with a unique JavaScript engine like Node.js.
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

### Why is it good to remember code names for different JavaScript Engines?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> It is good to remember the names of engines to ensure features work in all environments. If not, we must write a polyfill.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> The code names are good to remember because they get used in developer articles on the internet. For instance, if "V8 supports a feature X, " it probably works in Chrome and Opera.
    </div>
  </div>
</details>

---

### What can in-browser JavaScript do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In-browser JavaScript can do everything related to a webpage like manipulation, interaction with the user, and the webserver.</div><br />
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
      <strong>Interview Response:</strong> JavaScript's abilities are limited to ensure a user's safety in the browser. The aim is to prevent a malicious website from accessing users' data or harming them.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> JavaScript's capabilities in the browser are limited to safeguard the user's safety. The purpose is to prevent a malicious website from acquiring private information or inflicting data damage to users.
    </div>
    <div>
      <strong>Examples of such constraints include:</strong>
      <br />
      <br />
      <ol>
        <li>
          JavaScript permits us to read/write files directly on the hard disk, copy them, or run applications on a web page, however, it does not have direct access to OS functionality.
        </li>
        <li>
        	Modern browsers allow it to interact with files. Still, access is limited and only provided if the user performs specific actions, such as "dropping" a file into a browser window or choosing it through a tag.
        </li>
        <li>
          Interacting with the camera/microphone and other devices is possible, but it requires the user's explicit consent. The JavaScript-enabled page may not secretly activate a web camera, examine its surroundings, and communicate the data.
        </li>
        <li>
          JavaScript from one page may not be able to access JavaScript from another if they are from separate sites (from a different domain, protocol, or port).
        </li>
        <li>
          JavaScript can easily connect with the server that serves the current page through the internet. However, its capacity to receive data from other sites/domains is severely limited. Although feasible, it requires explicit agreement from the remote side (represented in HTTP headers).
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
      <strong>Interview Response:</strong> JavaScript is unique because it fully integrates HTML and CSS, and all major browsers support it. JavaScript is the only browser technology that combines all three of these features. That distinguishes JavaScript and explains why it is the most widely used technology for designing browser interfaces.
    </div>
    <br />
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
      <strong>Interview Response:</strong> Some of the alternatives to JavaScript include Coffee Script, TypeScript, Flow, Brython, Dart, and Kotlin.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Several popular languages are trans-piled (converted) to JavaScript before running in the browser.
    </div>
    <br />
    <div>
      <strong>Examples of such languages:</strong>
      <br />
      <br />
      <ol>
        <li>
          <strong>CoffeeScript</strong> is a "syntactic sugar" for JavaScript. It introduces shorter syntax, allowing us to write more transparent and more precise code—usually, Ruby devs like it.
        </li>
        <li>
          <strong>TypeScript</strong> concentrates on adding "strict data typing" to simplify the development and support of complex systems, and Microsoft develops it.
        </li>
        <li>
          <strong>Flow</strong> also adds data typing, but differently, and Facebook developed it.
        </li>
        <li>
          <strong>Dart</strong> is a standalone language with an engine that runs in non-browser environments (like mobile apps) and converts to JavaScript—developed by Google.
        </li>
        <li>
          <strong>Brython</strong> is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
        </li>
        <li>
          <strong>Kotlin</strong> is a modern, concise and safe programming language that can target the browser or Node.
        </li>
      </ol>
    </div>
  </div>
</details>

---
