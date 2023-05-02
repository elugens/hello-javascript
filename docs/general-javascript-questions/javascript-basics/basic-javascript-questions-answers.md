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

<!-- Notes: Passed Rich Snippets validation. -->

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
    width="640"
    height="480"
    src="https://www.youtube.com/embed/5Re-egzK7fU"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

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

### What are JavaScript's main features?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript's main features include dynamic typing, object-oriented programming, event-driven programming, and the ability to manipulate and interact with web page content.<br/><br/>
    </div>
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
      <strong>Interview Response:</strong> JavaScript is an interpreted programming language. The code is executed directly by a browser or runtime environment without the need for compilation.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> In a compiled language, the target
      machine directly translates the program. The target machine does not
      translate the source code directly into an interpreted language. Instead,
      a different program, an interpreter, reads and executes the code. In
      simple terms: JavaScript is an interpreted language.
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
      <strong>Interview Response:</strong> The name of the JavaScript scripting language specification is called ECMAScript, which is maintained by the ECMA International Standards organization.
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
      <strong>Interview Response:</strong> In 1995, JavaScript was created by Brendan Eich at Netscape Communications Corporation, originally named Mocha and then Live Script, before being renamed to JavaScript. The name was chosen to capitalize on Java's popularity and attract Java developers to the web. Despite its name, JavaScript is a distinct language with its own unique syntax and features.
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
      <strong>Technical Response:</strong> JavaScript is a flexible language that can run on a wide range of platforms, as long as they support a JavaScript engine, such as web browsers, servers, desktop applications, and IoT devices.
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
      <strong>Interview Response:</strong> In-browser JavaScript can't access files or data on the user's computer, for security reasons. It also can't perform certain network requests, due to CORS policies. The aim is to prevent a malicious website from accessing users' data or harming them.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> JavaScript's capabilities in the
      browser are limited to safeguard the user's safety. The purpose is to
      prevent a malicious website from acquiring private information or
      inflicting data damage to users.
    </div>
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
      <strong>Interview Response:</strong> JavaScript is unique because it fully integrates with HTML and CSS, and all major browsers support it. JavaScript is the only browser technology that combines, all three of these features. That distinguishes JavaScript, and explains why it is the most widely used technology for designing browser interfaces.
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
      <strong>Interview Response:</strong> Undefined means that a variable has been declared but has not been assigned a value, while null is a value that represents no value or an empty object.
    </div>
    <br />
  </div>
</details>

---
