---
title: Basic JS Questions
sidebar_position: 1
---

# Basic JavaScript: Interview Questions

**JavaScript Basics: Basic JS Questions**

<head>
  <title>JavaScript Frontend Interview Questions and Answers</title>
  <meta charSet='utf-8' />
</head>

### What is JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> JavaScript is a dynamically typed,
      interpreted scripting language that creates interactive effects for the
      browser.
    </div>
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
      <strong>Interview Response:</strong> When a language is high-level, it
      means it is built without requiring detailed knowledge of the underlying
      computer. For example, managing memory, knowing what processor is running,
      and keeping track of things like pointers are not necessary. High-level
      programming languages are easier to write and manage because they are
      platform-independent.
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
      <strong>Technical Response:</strong> Programs written in a compiled
      language are translated directly by the target machine. With an
      interpreted language, the source code is not directly translated by the
      target machine. Instead, a different program, interpreter, reads and
      executes the code. In simple terms: JavaScript is an interpreted language.
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
      <strong>Interview Response:</strong> JavaScript was originally named “Live
      Script”, but because of the popularity of Java. It was renamed too
      JavaScript as a play on the notoriety of the Java programming language,
      but they are different. JavaScript is a high-level programming language
      and Java is a mid-level programming language.
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
      <strong>Technical Response:</strong> Today, JavaScript can execute not
      only in the browser, but also on the server, or on any device that has a
      special program called the JavaScript engine.
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
      <strong>Interview Response:</strong> It is good to remember the names of
      engines to ensure features work in all environments. If not, we must write
      a polyfill.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> The code names are good to remember
      because they are used in developer articles on the internet. For instance,
      if “a feature X is supported by V8”, then it probably works in Chrome and
      Opera.
    </div>
  </div>
</details>

---

### What can in-browser JavaScript do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  In-browser JavaScript can do everything related to a webpage like manipulation, interaction with the user, and the webserver.</div><br />
  <div><strong>Technical Response:</strong> The capabilities of JavaScript depend greatly on the environment in which it is operating in. For example, Node.js, JavaScript can read or write arbitrary files and perform network requests. With in-browser JavaScript, you can manipulate web pages, communicate with users, and interact with the server.</div>
  </div><br/>
 <strong>For instance, in-browser JavaScript can:</strong>

1. Change the existing content, add HTML, and add styles to the page.
1. React to user actions, run on mouse clicks, pointer movements, key presses.
1. Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
1. Get and set cookies, ask questions to the visitor, show messages.
1. Remember the data on the client-side (“local storage”).

</details>

---

### What CAN’T in-browser JavaScript do and why?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> In the browser, JavaScript's
      abilities are limited to ensure a user's safety. The aim is to prevent a
      malicious website from accessing users’ data or harming them.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> JavaScript’s abilities in the browser
      are limited for the sake of the user’s safety. The goal is to prevent evil
      websites from accessing personal data or harming users.
    </div>
    <div>
      <strong>Examples of such restrictions include:</strong>
      <br />
      <br />
      <ol>
        <li>
          JavaScript on a webpage may not read/write arbitrary files on the hard
          disk, copy them, or execute programs. It has no direct access to OS
          functions.
        </li>
        <li>
          Currently, browsers can work with files, but they are limited to
          certain actions, such as dropping files into the browser window or
          selecting them via a &#8249;input&#8250; tag.
        </li>
        <li>
          here are ways to interact with the camera/microphone and other
          devices, but they require a user’s explicit permission. The
          JavaScript-enabled page cannot secretly activate a webcam, monitor the
          surroundings, and/or send user information.
        </li>
        <li>
          The JavaScript on one page may not access the code on the other if the
          pages are on separate domains, protocols, or port.
        </li>
        <li>
          JavaScript can easily communicate over the net to the server where the
          current page came from. But its ability to receive data from other
          sites/domains is crippled. Though possible, it requires explicit
          agreement (expressed in HTTP headers) from the remote side.
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
