---
title: Debugging JavaScript in Chrome
description: Debugging is the process of finding and fixing errors within a script.
sidebar_position: 1
sidebar_label: Debugging in Chrome
---

**Code Quality: Debugging in Chrome**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### Explain what debugging is in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Debugging is finding and fixing errors within a script.</div><br />
  <div><strong>Technical Response:</strong> Debugging is finding and fixing errors within a script. Modern browsers and most other environments support debugging tools – a unique UI in developer tools makes debugging much more manageable. It also allows us to trace the code step by step to see what is going on.<br /><br />
  </div>
  </div>
</details>

---

### How do you turn on developer tools in Chrome?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can turn on your chrome developer tools by pressing F12 or for Mac: (Cmd+Opt+I).
</div>
  </div>
</details>

---

### How do you open the left sidebar to access the vertical tabs?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the toggler button to open the vertical tabs under the source tab.<br /><br />
  <img src='/img/vertical-tabs.svg' />
</div>
  </div>
</details>

---

### What are the three panes accessible via the Chrome Dev Tools source tab?

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
  <div><strong>Interview Response:</strong> The file navigator pane opens by clicking on the sources tab at the top of the developer tools. Once you click on the tab, you can click on the toggler button and view the file navigator pane.
</div>
  </div>
</details>

---

### Where is the JavaScript debugging pane located in the chrome developer tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can find the JavaScript debugging pane on the right-hand side of the code editor, beneath the sources tab.
</div>
  </div>
</details>

---

### How can you toggle to enter and escape the console tab window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can toggle the console tab-pane by using the ESC button.
</div>
  </div>
</details>

---

### What are some examples of things you can do with the developer console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most notable things that you can do with the Chrome developer console include selecting DOM elements, converting your Browser into an editor, finding events associated with an element in the DOM, monitoring events, finding the time of execution of a block of code, arrange the values of a variable into a table, inspect an element in the DOM, list the properties of an element, retrieve the value of your last result, and clear the console and the memory.
</div>
  </div>
</details>

---

### What is a breakpoint in JavaScript debugging?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A breakpoint is a line of code that causes the debugger to interrupt JavaScript execution. We may investigate current variables and run commands on the terminal while the program gets halted. To put it another way, we can debug it.
</div>
  </div>
</details>

---

### How do you explicitly implement the debugger in most code editors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can pause the code using the (debugger;) command.
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

### How do you reload the source page after setting your breakpoints in the Chrome developer console?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In Windows, you can press F5 to reload the page; you must use Cmd+R on a MAC.
</div>
  </div>
</details>

---

### What does the watcher do in the chrome development tools?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The watcher displays the variable's current value as it gets added to an expression. If the variable does not get set or if you cannot find it, the value shows as &#60;Not Available&#62;.
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
  <div><strong>Interview Response:</strong> The Call Stack shows the nested call chain in Chrome and Safari.<br /><br />
  <img src='/img/callstack.svg' />
</div>
  </div>
</details>

---

### Is the console part of the DOM or the BOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The console is part of the window object supplied by the Browser.
</div>
  </div>
</details>

---
