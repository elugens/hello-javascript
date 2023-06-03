---
title: Callbacks
description: Callbacks are a way to pass functions as arguments to other functions, and to return them as the result of the function. Pass your next frontend phone interview
sidebar_position: 1
sidebar_label: Callbacks
keywords:
  - callbacks
  - javascript callback
  - call backs
  - callback functions
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
  - callbacks
  - call backs
  - callback functions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/CallbacksSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Callbacks | JavaScript Frontend Phone Interview Questions</title>
</head>

**Promises/Async/Await: Callbacks**

<CloseAllAnswers />

---

### What is a callback function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A callback function is a function passed as an argument to another function, which is invoked within the latter function, usually for asynchronous tasks or to customize behavior.<br />
  </div>
  </div>
</details>

---

### How do callbacks work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Callbacks in JavaScript are functions passed as arguments to other functions. They're invoked within the parent function, typically to handle asynchronous tasks or customized behavior, enabling a non-blocking code execution flow.<br />
  </div>
  </div>
</details>

---

### Why are callbacks important in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Callbacks enable asynchronous operations, allowing code execution to continue while waiting for tasks like HTTP requests or timer events, ensuring a non-blocking and efficient code execution flow.<br />
  </div>
  </div>
</details>

---

### Can you explain the function of the async function in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An async function is a function declared with the async keyword, and the await keyword gets permitted within them. The async and await keywords enable asynchronous, promise-based behavior, avoiding the need to configure promise chains explicitly. Async functions may also get defined as expressions.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();
```

  </div>
  </div>
</details>

---

### How do callbacks work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A callback is a function passed as an argument to another function, and a callback function can run after another function has finished. JavaScript functions execute in the sequence they get called, not in the defined sequence.<br /><br />

:::note
Functions running in parallel with other functions are called asynchronous.
:::

</div>
  </div>
</details>

---

### How can we load two scripts sequentially: the first one and the second one after it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The natural solution would be to put the second script call inside the callback. Nesting the callback helps control the flow of the script loads. After the external script is complete, the callback initiates the inner one.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
loadScript('/my/script.js', function (script) {
  alert(`Cool, the ${script.src} is loaded, let's load one more`);

  loadScript('/my/script2.js', function (script) {
    alert(`Cool, the second script is loaded`);
  });
});
```

  </div>
  </div>
</details>

---

### There are times when internal/external scripts fail to load. Is there a way, in JavaScript, to handle resource (scripts) loading errors?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, script loading errors get handled in a callback with the script.onerror event handler.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script load error for ${src}`));

  document.head.append(script);
}
```

  </div>
  </div>
</details>

---

### What is the best alternative to nested resource loading in asynchronous coding?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Nested calls can become tedious and messy. The best alternative is to make every action a standalone function, making our code easier to manage and debug.</div><br />
  <div><strong>Technical Response:</strong> It looks fine for one or maybe two nested calls. As calls become nested, the code becomes more profound and increasingly more challenging to manage, especially if we have real code that may include more loops, conditional statements, and other implementations. The best alternative to alleviate the problem is to make every action a standalone function. This approach makes the code easy to manage and debug, and there are some performance advantages to boot.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
loadScript('1.js', step1);

function step1(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('2.js', step2);
  }
}

function step2(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript('3.js', step3);
  }
}

function step3(error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...continue after all scripts are loaded (*)
  }
}
```

  </div>
  </div>
</details>

---

### What are some common use cases for callbacks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Common use cases for callbacks include handling asynchronous operations (like reading files or making HTTP requests), handling events (like click or keypress events), and for higher-order functions (like Array's map, filter, reduce).<br />
  </div>
  </div>
</details>

---

### How do you identify a callback function in a function signature?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A callback function is usually the last argument in the function signature, and its type is a function, often denoted as Function or function.<br />
  </div>
  </div>
</details>

---

### What is callback hell, and how can it be avoided?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Callback hell refers to deeply nested, difficult-to-read callback functions. It can be avoided by modularizing code, using Promises, or async/await syntax for better code readability and maintainability.<br />
  </div>
  </div>
</details>

---

### How do JavaScript's event-driven nature and callbacks relate?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript's event-driven nature relies on callbacks to handle events, allowing code execution to continue without waiting for events to complete, improving efficiency and enabling asynchronous behavior.<br />
  </div>
  </div>
</details>

---

### Can you pass multiple callbacks to a single function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can pass multiple callback functions as arguments, which can be invoked in different scenarios or at various stages within the parent function, providing flexibility and customization.<br />
  </div>
  </div>
</details>

---

### What are higher-order functions, and how do they relate to callbacks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Higher-order functions are functions that either take other functions as arguments or return functions. Callbacks are an example of higher-order functions, as they are passed as arguments to other functions.<br />
  </div>
  </div>
</details>

---

### What is the difference between synchronous and asynchronous callbacks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Synchronous callbacks execute immediately within the calling function, blocking further code execution, while asynchronous callbacks allow other code to execute before the callback is invoked, enabling non-blocking operations.<br />
  </div>
  </div>
</details>

---

### How do error-first callbacks work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Error-first callbacks expect the first argument to be an error object, which is null or undefined if no error occurred. This convention ensures consistent error handling across asynchronous operations.<br />
  </div>
  </div>
</details>

---
