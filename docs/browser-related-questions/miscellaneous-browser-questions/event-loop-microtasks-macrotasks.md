---
title: Event loop - Microtasks/Macrotasks
description: Event loop - Microtasks / Macrotasks in JavaScript is a way to run code asynchronously. The event loop is a programming construct - Interview Questions & Answer
sidebar_position: 3
sidebar_label: Event loop
keywords:
  - event loop
  - microtasks
  - macrotasks
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
  - event loop
  - microtasks
  - macrotasks
  - interview answers
  - interview questions
---

<head>
  <title>Event loop - Microtasks/Macrotasks | HelloJavaScript.info</title>
</head>

**Miscellaneous: Event loop**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How is the event loop defined in the JavaScript engine?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop concept is quite simple. There is an endless loop where the JavaScript engine waits for tasks, executes them, and then sleeps, waiting for more tasks. The general algorithm of the engine includes simple steps. Where there are tasks execute theme, starting with the oldest task first. Then, sleep until a new task appears, then go to one. That is a formalization of what we see when browsing a page. The JavaScript engine does nothing most of the time, and it only runs if a script/handler/event activates.
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/event-loop.gif" /><br /><br />

</div>
  </div>
</details>

---

### How are the tasks from the queue processed or handled?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event loop handles tasks in the queue in the order they are received. When the browser engine completely processes the script, it handles the mousemove event, followed by the setTimeout handler, and so on.
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src='/img/callback-queue-event-loop.gif' />

</div>
  </div>
</details>

---

### What is the best method to avoid difficulties caused by CPU-intensive tasks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can avoid problems by splitting the big task into pieces or chunks. The goal is to split your tasks into smaller chunks to reduce the load on the engine. We should note that the engine is limited to the number of tasks it can process within a given time.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)
  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert('Done in ' + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}

count();
```

  </div>
  </div>
</details>

---

### What is a Microtask in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Microtasks come solely from our code. Promises usually create them: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used “under the cover” of await, as it is another form of promise handling. There is also a special function `queueMicrotask(func)` that queues func for execution in the microtask queue.<br/> Immediately after every macro task, the engine executes all tasks from the microtask queue before running any other macro tasks or rendering or anything else. All microtasks complete before any other event handling, rendering, or macrotask.

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 3rd: alerts "timeout" - timeout shows last because it is a macrotask.
setTimeout(() => alert("timeout"));

// 2nd: alerts "promise" -
// promise shows second, because .then passes through the microtask queue
Promise.resolve()
  .then(() => alert("promise"));

// 1st: alerts "code" –
code shows first because it is a regular synchronous call.
alert("code");
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Simple Algorithm<br /><br />

  <div></div>

<ol>
  <li>Dequeue and run the oldest task from the macrotask queue (e.g., “script”).</li>
  <li>Execute all microtasks</li>
  <li>While the microtask queue is not empty</li>
  <li>Dequeue and run the oldest microtask.</li>
  <li>Render changes, if any.</li>
  <li>If the macrotask queue is empty, wait till a macrotask appears.</li>
  <li>Go to step 1.</li>
</ol><br />

  </div>
  </div>
</details>

---
