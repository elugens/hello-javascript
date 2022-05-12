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

### Can you Explain the function and syntax of the async function in JavaScript?

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
