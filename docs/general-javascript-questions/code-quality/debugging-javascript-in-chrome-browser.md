---
title: Debugging in Chrome
sidebar_position: 1
---

TODO : ADD IMAGES TO THIS PAGE

# Debugging JavaScript in Chrome

**Code Quality: Debugging in Chrome**

<head>
  <title>Debugging in Chrome - Frontend Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain, what debugging is in JavaScript development?

**Interview Answer:** Debugging is the process of finding and fixing errors within a script.

**Technical Answer:** Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier. It also allows to trace the code step by step to see what exactly is going on.

Source: <https://javascript.info/debugging-chrome>

### How, do you turn on developer tools in Chrome?

**Interview Answer:** You can turn on your chrome developer tools by pressing F12 or for Mac: (Cmd+Opt+I).

Source: <https://javascript.info/debugging-chrome#the-sources-panel>

### How, do you open the left side bar to access the vertical tabs?

**Interview Answer:** You can use the toggler button under the source tab to open the vertical tabs.

Source: <https://javascript.info/debugging-chrome#the-sources-panel>

### What are the three panes available under chrome dev tools source tab?

**Interview Answer:** The file navigator, code editor, and the JavaScript debugging pane.

Source: <https://javascript.info/debugging-chrome#the-sources-panel>

### Where can you find the file navigator pane and open it in the chrome developer tools?

**Interview Answer:** The file navigator pane can be opened by clicking on the sources tab at the top of the developer tools. Once you click on the tab, you can click on the toggler button and view the file navigator pane.

Source: <https://javascript.info/debugging-chrome#the-sources-panel>

### Where is the JavaScript debugging pane located in the chrome developer tools?

**Interview Answer:** The JavaScript debugging pane is located under the sources tab on the right-hand side of the code editor.

Source: <https://javascript.info/debugging-chrome#the-sources-panel>

### How can you toggle to enter and escape the console tab window?

**Answer:** You can toggle the console tab pane by using the ESC button.

Source: <https://javascript.info/debugging-chrome#console>

### What are some of things that you can do with the developer console?

**Interview Answer:** The most notable things that you can do with the Chrome developer console included selecting DOM elements, convert your browser into an editor, find events associated with an element in the DOM, monitor events, find the time of execution of block of code, arrange the values of a variable into a table, inspect an element in the DOM, list the properties of an element, retrieve the value of your last result, and clear the console and the memory.

Source: <https://www.freecodecamp.org/news/10-tips-to-maximize-your-javascript-debugging-experience-b69a75859329/>

### What is a breakpoint in JavaScript development?

**Answer:** A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution. While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.

Source: <https://javascript.info/debugging-chrome#breakpoints>

### How do you explicitly implement the debugger in most code editors?

**Answer:** We can pause the code by using the “debugger;” command.

**Code Example**

```js
// explicit debugger implementation

function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger; // <-- the debugger stops here
  say(phrase);
}
```

Source: <https://javascript.info/debugging-chrome#debugger-command>

### How do you reload the source page after you set your breakpoints in the Chrome developer console?

**Interview Answer:** In Windows you can press F5 to reload the page, on a MAC you must use Cmd+R.

Source: <https://javascript.info/debugging-chrome#pause-and-look-around>

### What does the watcher do in the chrome development tools?

**Interview Answer:** The watcher will show you the current value of the variable as it is added in an expression. If the variable is not set or cannot be found it will show `<Not Available>` for the value.

Source: <https://developers.google.com/web/tools/chrome-devtools/javascript/reference#watch>

### How do you make a minified file readable in Chrome development tools?

**Answer:** You can click on the format {} icon to make the minified files readable in DevTools.

Source: <https://developers.google.com/web/tools/chrome-devtools/javascript/reference#watch>

### What does the Call Stack do in Chrome developer tools?

**Interview Answer:** In Chrome and Safari the Call Stack shows the nested call chain.

Source: <https://javascript.info/debugging-chrome#pause-and-look-around>

### Is the console part of the DOM or the BOM?

**Interview Answer:** The console is part of the window object which is supplied by the Browser.

Source: <https://javascript.info/debugging-chrome#logging>
