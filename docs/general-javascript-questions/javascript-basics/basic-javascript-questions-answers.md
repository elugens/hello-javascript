---
title: Basic JS Questions
sidebar_position: 1
---

# Basic JavaScript Interview Questions

**JavaScript Basics: Basic JS Questions**

<head>
  <title>JavaScript Frontend Interview Questions and Answers</title>
  <meta charSet="utf-8" />
</head>

### What is JavaScript?

**Interview Answer:** JavaScript is a high-level, dynamically typed, and interpreted scripting language used to create interactive effects in the browser or server.

Source: <https://javascript.info/intro#what-is-javascript>

### What is the difference between a high-level and low-level programming language?

**Interview Answer:** When a language is high-level, it means it is built without requiring detailed knowledge of the underlying computer. For example, managing memory, knowing what processor is running, and keeping track of things like pointers are not necessary. High-level languages are easier to write and manage than low or mid-level programing languages, because they are platform independent.

Source: <https://www.geeksforgeeks.org/difference-between-high-level-and-low-level-languages/>

### Is JavaScript a compiled or interpreted programming language?

**Interview Answer:** JavaScript is an interpreted language.

**Technical Answer:** In a compiled language, the target machine directly translates the program. In an interpreted language, the source code is not directly translated by the target machine. Instead, a different program, interpreter, reads and executes the code. In simple terms: JavaScript is an interpreted language.

Source: <https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/>

### What is the name of JavaScript scripting language specification called?

**Interview Answer:** ECMAscript with a reference guide named ECMA-262.

Source: https://www.freecodecamp.org/news/whats-the-difference-between-javascript-and-ecmascript-cba48c73a2b5/

### Why is it called JavaScript?

**Interview Answer:** JavaScript was originally named “LiveScript”, but because of the popularity of Java. It was renamed too JavaScript as a play on the notoriety of the Java programming language, but they are considerably different. JavaScript is a high-level programming language and Java is a mid-level programming language.

Source: <https://javascript.info/intro#what-is-javascript>

### What environments can JavaScript be developed on?

**Interview Answer:** JavaScript works in any environment that has a JS engine.

**Technical Answer:** Today, JavaScript can execute not only in the browser, but also on the server, or on any device that has a special program called the JavaScript engine.

Source: <https://javascript.info/intro#what-is-javascript>

### What are the code names for Chrome, Opera, FireFox, IE, Edge, and Safari?

**Technical Answer:**

1. **V8** - in Chrome and Opera
1. **Spider Monkey** – in FireFox
1. **Chakra** – in Internet Explorer
1. **Chakra Core** – in Microsoft Edge
1. **Nitro / SquirrelFish** – in Safari.

Source: <https://javascript.info/intro#what-is-javascript>

### Why is it good to remember codenames for different JavaScript Engines?

**Interview Answer:** It is good to remember the names of engines to ensure features work in all environments. If not, we must write a polyfill.

**Technical Answer:** The codenames are good to remember because they are used in developer articles on the internet. For instance, if “a feature X is supported by V8”, then it probably works in Chrome and Opera.

Source: <https://javascript.info/intro#what-is-javascript>

### What can in-browser JavaScript do?

**Interview Answer:** In-browser JavaScript can do everything related to webpage like manipulation, interaction with the user, and the webserver.

**Technical Answer:** JavaScript’s capabilities greatly depend on the environment it is running in. For instance, Node.js supports functions that allow JavaScript to read/write arbitrary files, perform network requests, etc.

In-browser JavaScript can do everything related to webpage manipulation, interaction with the user, and the webserver.

**For instance, in-browser JavaScript can:**

1. Change the existing content, add HTML, and add styles to the page.
1. React to user actions, run on mouse clicks, pointer movements, key presses.
1. Send requests over the network to remote servers, download and upload files (so-called AJAX and COMET technologies).
1. Get and set cookies, ask questions to the visitor, show messages.
1. Remember the data on the client-side (“local storage”).

Source: <https://javascript.info/intro#what-can-in-browser-javascript-do>

### What CAN’T in-browser JavaScript do and why?

**Interview Answer:** In the browser, JavaScript's abilities are limited to ensure a user's safety. The aim is to prevent a malicious website from accessing user’s data or harming them.

**Technical Answer:** JavaScript’s abilities in the browser are limited for the sake of the user’s safety. The aim is to prevent an evil webpage from accessing private information or harming the user’s data.

**Examples of such restrictions include:**

1. JavaScript on a webpage may not read/write arbitrary files on the hard disk, copy them, or execute programs. It has no direct access to OS functions.

1. Modern browsers allow it to work with files, but the access is limited and only provided if the user does certain actions, like “dropping” a file into a browser window or selecting it via a `<input>` tag.

1. There are ways to interact with the camera/microphone and other devices, but they require a user’s explicit permission. The javaScript-enabled page may not sneakily enable a web camera, observe the surroundings, and send the information.

1. JavaScript from one page may not access the other if they come from different sites (from a different domain, protocol, or port).

1. JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side.

Source: <https://javascript.info/intro#what-can-t-in-browser-javascript-do>

### What makes JavaScript unique?

**Interview Answer:** JavaScript is unique because it has full integration with HTML, CSS and it is supported by all major browsers.\*\*

**Technical Answer:** There are at least three great things about JavaScript:

1. Full integration with HTML/CSS.
1. Simple things are done simply.
1. Support by all major browsers and enabled by default.

JavaScript is the only browser technology that combines these three things. That is what makes JavaScript unique. That is why it is the most widespread tool for creating browser interfaces.

Source: <https://javascript.info/intro#what-makes-javascript-unique>

### Name some modern alternative languages that convert to JavaScript?

**Interview Answer:** Some of the alternatives to JavaScript include Coffee Script, Type Script, Flow, Brython, Dart and Kotlin.

**Technical Answer:** There are several popular languages, which are trans-piled (converted) to JavaScript before they run in the browser.

**Examples of such languages:**

1. **CoffeeScript** is a “syntactic sugar” for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.

1. **TypeScript** is concentrated on adding “strict data typing” to simplify the development and support of complex systems. It is developed by Microsoft.

1. **Flow** also adds data typing, but in a different way. Developed by Facebook.

1. **Dart** is a standalone language that has its engine that runs in non-browser environments (like mobile apps) but also can be converted to JavaScript. Developed by Google.

1. **Brython** is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.

1. **Kotlin** is a modern, concise and safe programming language that can target the browser or Node.

Source: <https://javascript.info/intro#languages-over-javascript>
