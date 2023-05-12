---
title: Browser Window Interaction in JavaScript
description: How to interact with the browser window. How does the alert function work? How many arguments does the prompt function accept? Frontend Interview Questions
sidebar_position: 8
sidebar_label: Window Interaction
keywords:
  - browser window interaction
  - browser window
  - window interaction
  - functions
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
  - browser window interaction
  - browser window
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BrowserWindowSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Browser Window Interaction | JavaScript Frontend Interview</title>
</head>

**JavaScript Fundamentals: Interaction: alert, prompt, confirm**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/0a9rQQfgPh0"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### In the JavaScript community, what is the commonly used name for the alert window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The JavaScript alert window is commonly referred to as an "alert box", "pop-up" or “modal.”</div>
  </div>
</details>

---

### How does the alert function work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The alert() function in JavaScript displays a pop-up window with a message to the user. The function takes a string argument which is the message to be displayed. The alert blocks further execution of the code until the user dismisses the alert by clicking "OK".</div>
  </div>
</details>

---

### What data type does the alert window method return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The alert() window method in JavaScript does not return a specific data type or value.
  </div>
  </div>
</details>

---

### How does the prompt function work in simple terms?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It shows a window with text and a request for input, then returns a string.</div><br />
  <div><strong>Technical Response:</strong> The window prompt() in JavaScript displays a pop-up window with a message and an input field, allowing the user to input a value. The function returns the value entered by the user as a string, or null if the user cancels the prompt. The window prompt() takes two optional arguments: a message string to display and a default value for the input field.
  </div>
  </div>
</details>

---

### How many arguments does the window prompt accept?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The window prompt accepts two arguments: a message to display and a default value for the input field.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// the brackets denote that the parameter is not required 

result = prompt(title, [default]);
```

  </div>
  </div>
</details>

---

### What does the prompt return when the prompt its escaped or canceled?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the prompt is canceled or escaped, the window prompt returns null.</div>
  </div>
</details>

---

### Why is it essential to provide a second argument (default) for the prompt function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Providing a second argument, or default, for the prompt function in JavaScript is essential because it provides an initial value for the input field. This approach ensures that the browser (internet explorer) does not return undefined. </div><br />
  <div><strong>Technical Response:</strong> There is a chance that the user is using a browser such as Internet Explorer, which returns undefined if there is no default. This action could have ramifications that could affect the application adversely.
  </div>
  </div>
</details>

---

### How does the confirm function work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Confirm produces a window with a Boolean question of OK and Cancel. Ok returns true, and Cancel returns false.</div><br />
  <div><strong>Technical Response:</strong> The confirm function shows a modal window with a question and two buttons: OK and Cancel. The result is true if OK is pressed and false otherwise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let isBoss = confirm('Are you the boss?');

console.log(isBoss); // true if OK is pressed and false otherwise
```

  </div>
  </div>
</details>

---

### The alert, prompt, and confirm methods are part of what object model?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The alert(), prompt(), and confirm() methods are part of the Window object in the Browser Object Model (BOM).</div><br />
  <div><strong>Technical Response:</strong> The alert, prompt, and confirm methods belong to the Browser Object Model. It is commonly called the BOM.
  </div>
  </div>
</details>

---

### What is the difference between the window and browser object models?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Window Object Model (WOM) focuses on the browser's window, while the Browser Object Model (BOM) encompasses the entire browser environment, including the Window object.
  </div>
  </div>
</details>

---

### What are two limitations shared by the alert, prompt, and confirm methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Two limitations shared by the alert, prompt, and confirm methods in JavaScript are that they are blocking, which means they pause the execution of code until the user responds, and they have limited to no styling options. We have no control over the position and look of the modal window.</div><br />
  <div><strong>Technical Response:</strong><br /><br />
    <ol>
      <li>The browser determines the exact location of the modal window. Usually, it is in the center.</li>
      <li>The exact look of the window also depends on the browser, and we cannot modify it.</li>
      </ol>
  </div>
  </div>
</details>

---

### Can you explain the difference between window.onload and the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> window.onload activates after the whole page, including external resources, finishes loading. DOMContentLoaded occurs when the DOM is ready, but may not wait for images and other external resources to finish loading.
  </div>
  </div>
</details>

---

### How do you open a new browser window using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.open() method in JavaScript, providing the URL and target ('_blank' for a new window) as arguments to open a new browser window.
  </div>
  </div>
</details>

---

### How do you resize a browser window using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.resizeTo() method to resize a browser window. It takes two arguments, the width, and height of the window in pixels.
  </div>
  </div>
</details>

---

### How do you close a browser window using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.close() method to close the current browser window.
  </div>
  </div>
</details>

---

### How do you check if a pop-up window is blocked by the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.open() method with a unique name, and then check if the window reference is not null. If it is null, then the window was likely blocked by the browser.
  </div>
  </div>
</details>

---

### How do you detect the current browser window size using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.innerWidth and window.innerHeight properties to get the current size of the browser window.
  </div>
  </div>
</details>

---

### How do you scroll to a specific location on a page using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.scrollTo() method to scroll to a specific location on a page. It takes two arguments, the x and y coordinates of the location to scroll to.
  </div>
  </div>
</details>

---

### How do you detect if a browser supports cookies using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the navigator.cookieEnabled property to detect if a browser supports cookies. It returns a boolean value indicating whether cookies are enabled. To manually detect if a browser supports cookies using JavaScript, you can create a test cookie, and then check if it exists and delete it afterward.
  </div>
  </div>
</details>

---

### How do you prevent a browser from caching a page using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the Cache-Control and Pragma headers in the HTTP response to prevent a browser from caching a page. Alternatively, you can append a random query string to the URL of the page.
  </div>
  </div>
</details>

---

### How do you detect the current URL of a browser window using JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the window.location.href property to get the current URL of a browser window.
  </div>
  </div>
</details>

---
