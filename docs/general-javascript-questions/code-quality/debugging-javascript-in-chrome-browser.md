---
title: Debugging JavaScript in Chrome
description: Debugging is the process of finding and fixing errors within a script.
sidebar_position: 1
sidebar_label: Debugging in Chrome
---

**Code Quality: Debugging in Chrome**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### Explain, what debugging is in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Debugging is the process of finding and fixing errors within a script.</div><br />
  <div><strong>Technical Response:</strong> Debugging is the process of finding and fixing errors within a script. All modern browsers and most other environments support debugging tools – a special UI in developer tools that makes debugging much easier. It also allows to trace the code step by step to see what exactly is going on.<br /><br />
  </div>
  </div>
</details>

---

### How, do you turn on developer tools in Chrome?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can turn on your chrome developer tools by pressing F12 or for Mac: (Cmd+Opt+I).
</div>
  </div>
</details>

---

### How, do you open the left side bar to access the vertical tabs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the toggler button under the source tab to open the vertical tabs.<br /><br />
  <img src='/img/vertical-tabs.svg' />
</div>
  </div>
</details>

---

### What are the three panes available under chrome dev tools source tab?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The file navigator, code editor, and the JavaScript debugging pane.<br /><br />
  <img src='/img/three-panes-dev-tools.svg' />
</div>
  </div>
</details>

---

### Where can you find the file navigator pane and open it in the chrome developer tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The file navigator pane can be opened by clicking on the sources tab at the top of the developer tools. Once you click on the tab, you can click on the toggler button and view the file navigator pane.
</div>
  </div>
</details>

---

### Where is the JavaScript debugging pane located in the chrome developer tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript debugging pane is located under the sources tab on the right-hand side of the code editor.
</div>
  </div>
</details>

---

### How can you toggle to enter and escape the console tab window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can toggle the console tab pane by using the ESC button.
</div>
  </div>
</details>

---

### What are some of things that you can do with the developer console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most notable things that you can do with the Chrome developer console included selecting DOM elements, convert your browser into an editor, find events associated with an element in the DOM, monitor events, find the time of execution of block of code, arrange the values of a variable into a table, inspect an element in the DOM, list the properties of an element, retrieve the value of your last result, and clear the console and the memory.
</div>
  </div>
</details>

---

### What is a breakpoint in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A breakpoint is a point of code where the debugger will automatically pause the JavaScript execution. While the code is paused, we can examine current variables, execute commands in the console etc. In other words, we can debug it.
</div>
  </div>
</details>

---

### How do you explicitly implement the debugger in most code editors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can pause the code by using the “debugger;” command.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// explicit debugger implementation
function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger; // <-- the debugger stops here

  say(phrase);
}
```

  </div>
  </div>
</details>

---

### How do you reload the source page after you set your breakpoints in the Chrome developer console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Windows you can press F5 to reload the page, on a MAC you must use Cmd+R.
</div>
  </div>
</details>

---

### What does the watcher do in the chrome development tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The watcher will show you the current value of the variable as it is added in an expression. If the variable is not set or cannot be found it will show &#60;Not Available&#62; for the value.
</div>
  </div>
</details>

---

### How do you make a minified file readable in Chrome development tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can click on the format &#123;&#125; icon to make the minified files readable in DevTools.<br /><br />
  <img src='/img/minified-readable.png' />
</div>
  </div>
</details>

---

### What does the Call Stack do in Chrome developer tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  In Chrome and Safari the Call Stack shows the nested call chain.<br /><br />
  <img src='/img/callstack.svg' />
</div>
  </div>
</details>

---

### Is the console part of the DOM or the BOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>  The console is part of the window object which is supplied by the Browser.
</div>
  </div>
</details>

---
