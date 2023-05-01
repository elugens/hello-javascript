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

### What is the JavaScript alert window commonly called in the JavaScript community?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Web developers refer to this type of window as a Modal Window.</div>
  </div>
</details>

---

### How does the alert function work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It shows a message and waits for the user to press “OK” and returns a string as a value.</div>
  </div>
</details>

---

### What data type does the alert window method return?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Alert returns a string.</div><br />
  <div><strong>Technical Response:</strong> Alert returns a string or object converted into a string and displayed.
  </div>
  </div>
</details>

---

### How does the prompt function work in simple terms?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It shows a window with text and a request for input, then returns a string.</div><br />
  <div><strong>Technical Response:</strong> It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. The return value of the prompt function is a string value, which should be taken into account when used with numbers.
  </div>
  </div>
</details>

---

### How many arguments does the prompt function accept?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Prompt accepts two arguments the title and a default value. The default value is not required and acts as the initial value for the input field.</div><br />
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
  <div><strong>Interview Response:</strong> It returns a null value when it's escaped or canceled.</div>
  </div>
</details>

---

### Why is it essential to provide a second argument (default) for the prompt function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This approach ensures that the browser (internet explorer) does not return undefined. </div><br />
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

alert(isBoss); // true if OK is pressed and false otherwise
```

  </div>
  </div>
</details>

---

### The alert, prompt, and confirm methods are part of what object model?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The alert, prompt, and confirm methods belong to the BOM.</div><br />
  <div><strong>Technical Response:</strong> The alert, prompt, and confirm methods belong to the Browser Object Model. It is commonly called the BOM.
  </div>
  </div>
</details>

---

### What are two limitations shared by the alert, prompt, and confirm methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We have no control over the position and look of the modal window.</div><br />
  <div><strong>Technical Response:</strong><br /><br />
    <ol>
      <li>The browser determines the exact location of the modal window. Usually, it is in the center.</li>
      <li>The exact look of the window also depends on the browser, and we cannot modify it.</li>
      </ol>
  </div>
  </div>
</details>

---
