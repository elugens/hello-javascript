---
title: Callbacks
sidebar_position: 1
---

# Callbacks

**Promises/Async/Await: Callbacks**

<head>
  <title>Callbacks - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Explain the function and syntax of the async function in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior, avoiding the need to explicitly configure promise chains. Async functions may also be defined as expressions.
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
  <div><strong>Interview Response:</strong> A callback is a function passed as an argument to another function. A callback function can run after another function has finished. JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.<br /><br />

:::note
Functions running in parallel with other functions are called asynchronous.
:::

</div>
  </div>
</details>

---

### How can we load two scripts sequentially: the first one, and then the second one after it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The natural solution would be to put the second script call inside the callback. Nesting the callback helps control the flow of the script loads. After the outer script is complete, the callback initiates the inner one.
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
  <div><strong>Interview Response:</strong> Yes, script loading errors can be handled in a callback with the script.onerror event handler.
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

### Question: What is the best alternative to nested resource loading in asynchronous coding?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Nested calls can become tedious and messy. The best alternative is to make very action a standalone function. This makes our code easier to manage and debug.</div><br />
  <div><strong>Technical Response:</strong> For one or maybe two nested calls it looks fine. As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have real code that may include more loops, conditional statements and so on. The best alternative to alleviate the problem is making every action a standalone function. This makes the code easy to manage, debug, and there are some performance advantages to boot.
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
