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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/EventLoopSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Event loop - Microtasks/Macrotasks | HelloJavaScript.info</title>
</head>

**Miscellaneous: Event loop**

<CloseAllAnswers />

---

### What is the Event Loop in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event loop in the JavaScript engine is a mechanism that manages the execution order of asynchronous events and callbacks. It continuously checks for pending events, executes them, and handles concurrency in the single-threaded environment.
    </div><br />
  <div><strong>Technical Response:</strong> In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop concept is quite simple. There is an endless loop where the JavaScript engine waits for tasks, executes them, and then sleeps, waiting for more tasks. The general algorithm of the engine includes simple steps. Where there are tasks execute theme, starting with the oldest task first. Then, sleep until a new task appears, then go to one. That is a formalization of what we see when browsing a page. The JavaScript engine does nothing most of the time, and it only runs if a script/handler/event activates.
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img alt="Event Loop" src="/img/event-loop.gif" /><br /><br />

</div>
  </div>
</details>

---

### How are the tasks from the queue processed or handled?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Tasks from the Message Queue are handled by moving them onto the Call Stack for execution when the Call Stack is empty, maintaining JavaScript's non-blocking nature. The tasks from the queue in JavaScript are processed in a first-in-first-out (FIFO) order. The event loop takes tasks from the queue one by one and executes them in sequential order.
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img alt="Callback Queue Event Loop Image" src='/img/callback-queue-event-loop.gif' />

</div>
  </div>
</details>

---

### What is the best method to avoid difficulties caused by CPU-intensive tasks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can avoid problems by splitting the big task into pieces or chunks. The goal is to split your tasks into smaller chunks to reduce the load on the engine. It should be noted that the engine is limited to the number of tasks it can process within a given time.
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
    console.log('Done in ' + (Date.now() - start) + 'ms');
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
  <div><strong>Interview Response:</strong> A Microtask in JavaScript is a short, non-blocking task that's executed between tasks in the Event Loop, typically associated with resolving Promises and mutation observers.
</div><br />
  <div><strong>Technical Response:</strong> Microtasks come solely from our code. Promises usually create them: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used “under the cover” of await, as it is another form of promise handling. There is also a special function `queueMicrotask(func)` that queues func for execution in the microtask queue.<br/> Immediately after every macro task, the engine executes all tasks from the microtask queue before running any other macro tasks or rendering or anything else. All microtasks complete before any other event handling, rendering, or macrotask.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 3rd: console.logs "timeout" - timeout shows last because it is a macrotask.
setTimeout(() => console.log("timeout"));

// 2nd: console.logs "promise" -
// promise shows second, because .then passes through the microtask queue
Promise.resolve()
  .then(() => console.log("promise"));

// 1st: console.logs "code" –
// code shows first because it is a regular synchronous call.
console.log("code");
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

### What is a Macrotask in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A macrotask in JavaScript refers to a unit of work that is scheduled and executed asynchronously, typically involving I/O operations or rendering updates, using mechanisms like timers or event listeners.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Inside macrotask");
}, 0);

console.log("End");
```

In this example, the code will output:

```
Start
End
Inside macrotask
```

Even though the setTimeout is set to 0 milliseconds, it still executes asynchronously as a macrotask, allowing other synchronous tasks (like the second console.log) to execute before it.

  </div>
  </div>
</details>

---

### What is the difference between a microtask and a task (macrotask) in the Event Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Microtasks and Macrotasks are both tasks in the Event Loop. Microtasks have higher priority and execute between Macro-tasks, often associated with Promise resolutions and mutation observers. Tasks include callbacks from setTimeout, setInterval, and other Web APIs.
  </div>
  </div>
</details>

---

### Can you explain JavaScript's single-threaded nature?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript is single-threaded, means it executes one operation at a time. Despite this, it can handle asynchronous operations via its non-blocking, event-driven model and the Event Loop mechanism.
  </div>
  </div>
</details>

---

### How does the Event Loop handle asynchronous callbacks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Event Loop moves asynchronous callbacks from the Message Queue to the Call Stack when it's empty, allowing JavaScript to handle asynchronous operations without blocking the main thread.
  </div>
  </div>
</details>

---

### What are the components of the Event Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Event Loop consists of the Call Stack, Web APIs (like timers and AJAX), the Message Queue, and the loop itself.
  </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img alt="Event Loop" src="/img/event-loop.gif" /><br /><br />

</div>
  </div>
</details>

---

### What is the Call Stack in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Call Stack in JavaScript is a data structure that tracks the execution of function calls. It follows the Last In, First Out (LIFO) principle, enabling function execution tracking.
  </div>
  </div>
</details>

---

### What is the role of Web APIs in the Event Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Web APIs, provided by the browser, handle tasks like timeouts or AJAX calls asynchronously, outside the main JavaScript thread, and queue callbacks in the task queue when they are complete.
  </div>
  </div>
</details>

---

### Can you explain what the Message Queue is?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Message Queue in JavaScript stores callbacks from asynchronous operations like events or timeouts, which are processed by the Event Loop when the Call Stack is empty.
  </div>
  </div>
</details>

---

### What is a zero-delay setTimeout in relation to the Event Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A zero-delay setTimeout doesn't execute immediately, but rather queues its callback as a macrotask in the Message Queue, to run after current execution context and microtasks finish.
  </div>
  </div>
</details>

---

### How does Promise resolve order work in the Event Loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Promises resolve after current synchronous code and before next render. In the event loop, promise callbacks (.then/.catch/.finally) run in the microtask queue, after the macro-task queue is empty.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
console.log('Start');

setTimeout(() => console.log('Timeout 1'), 0);

Promise.resolve().then(() => console.log('Promise 1'));

setTimeout(() => console.log('Timeout 2'), 0);

Promise.resolve().then(() => console.log('Promise 2'));

console.log('End');

// The output will be:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2
```

Promises are resolved before timeouts because promise callbacks run in the microtask queue, which is processed before the next run of the macro-task queue (which includes timers).

  </div>
  </div>
</details>

---

### What is blocking in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Blocking is when a JavaScript operation prevents further execution until it completes. The Event Loop helps prevent blocking through asynchronous callbacks.
  </div>
  </div>
</details>

---

### What role does the Event Loop play in non-blocking I/O operations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Event Loop enables non-blocking I/O operations by offloading these tasks, running them asynchronously, and then processing their callbacks once they're complete, without blocking the execution of other code.
  </div>
  </div>
</details>

---

### Can you explain event-driven programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event-driven programming is a paradigm where the flow of the program is determined by events like user actions, sensor outputs, or messages from other programs, rather than a pre-defined sequence.
  </div><br/>  
  <div><strong>Technical Response:</strong> Event-driven programming is a programming paradigm that facilitates the creation of software applications that respond to external or internal events in real-time. Instead of following a predetermined sequence of instructions, event-driven programs are designed to react to events triggered by user actions, sensor outputs, or message passing. This approach enables developers to create highly responsive and interactive applications that can adapt to changing circumstances and user inputs, making them particularly well-suited for complex and dynamic systems. By relying on events to drive the program flow, event-driven programming can offer greater flexibility, scalability, and modularity than traditional procedural programming.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button was clicked!');
});
```

In this code:

**1.** An event listener is attached to a button with the id 'myButton'.
**2.** When the 'click' event is detected (i.e., the user clicks the button), the function is triggered, and an console.log is displayed in the console. This is an example of event-driven programming because the execution of the function is determined by the 'click' event.

  </div>
  </div>

</details>

---

### How does JavaScript handle concurrent operations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript handles concurrency using an event-driven, non-blocking I/O model. It uses a single-threaded event loop and asynchronous callbacks for potentially blocking operations, allowing concurrent processing.
  </div>
  </div>
</details>

---

### How are long-running operations generally handled in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Long-running operations in JavaScript are often handled with asynchronous callbacks, Promises, or async/await syntax to prevent blocking the main thread, allowing other code to run concurrently.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of a long-running operation, such as a network request, using the Fetch API and async/await syntax in JavaScript.

```javascript
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchUserData();
```

  </div>
  </div>
</details>

---

### What happens if the Call Stack is not empty when the Message Queue has tasks?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the call stack is not empty when the message queue has tasks, those tasks wait. The event loop only pushes tasks from the queue to the stack when the stack is empty.
  </div>
  </div>
</details>

---

### Can you explain how setImmediate() works?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `setImmediate()` is a Node.js method that schedules a callback function to be run on the next iteration of the event loop, after I/O events callbacks and before timers set by setTimeout().
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of how `setImmediate()` works in Node.js.

```javascript
console.log('Start');

setImmediate(() => {
    console.log('setImmediate callback');
});

console.log('End');

// Output:
// Start
// End
// setImmediate callback
```

In this example, even though the `setImmediate()` function call appears before the second `console.log()`, its callback function is not run until after all the other code in the current iteration of the event loop has run. Thus, 'End' is logged before 'setImmediate callback'.

  </div>
  </div>
</details>

---

### What is process.nextTick() in Node.js?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `process.nextTick()` is a Node.js method that adds a callback to the "nextTick queue", which is processed after the current operation completes but before the Event Loop continues.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how `process.nextTick()` works in Node.js.

```javascript
console.log('Start');

process.nextTick(() => {
    console.log('nextTick callback');
});

console.log('End');

// Output:
// Start
// End
// nextTick callback
```

In this example, `process.nextTick()` schedules the callback function to be invoked in the next iteration of the event loop, but before any other I/O events or timers fire. Despite its placement after the second `console.log()` statement, the 'nextTick callback' message is logged after 'End'.

  </div>
  </div>
</details>

---

### What's the difference between process.nextTick() and setImmediate()

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `process.nextTick()` method executes before the Event Loop continues, while setImmediate() executes on the next iteration of the Event Loop.
  </div>
  </div>
</details>

---

### How does JavaScript handle events like clicks and keyboard inputs in the event loop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript handles events like clicks and keyboard inputs through event listeners. When these events occur, their callback functions are added to the Message Queue and processed when the Call Stack is empty.
  </div>
  </div>
</details>

---
