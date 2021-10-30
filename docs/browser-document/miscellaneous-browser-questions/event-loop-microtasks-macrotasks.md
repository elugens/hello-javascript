---
title: Event Loop
sidebar_position: 3
---

# Event loop: Microtasks / Macrotasks

**Miscellaneous: Event loop: microtasks and macrotasks**

### How is the event loop defined in the JavaScript engine?

**Interview Answer:** In computer science, the event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. The event loop concept is quite simple. There is an endless loop, where the JavaScript engine waits for tasks, executes them, and then sleeps, waiting for more tasks. The general algorithm of the engine includes to simple steps. Where there are tasks execute theme, starting with the oldest task first. Then, sleep until a new task appears, then go to one. That is a formalization for what we see when browsing a page. The JavaScript engine does nothing most of the time, it only runs if a script/handler/event activates.

Diagram:

Source: <https://javascript.info/event-loop>

### How are the tasks from the queue processed or handled?

**Interview Answer:** Tasks from the queue are processed on “first come – first served” basis. When the engine browser is done with the script, it handles mousemove event, then then setTimeout handler, and so on.

TODO: Insert diagram image

Diagram:

Source: <https://javascript.info/event-loop#event-loop>

### What is the best way to avoid problems related to CPU-Hungry tasks?

**Interview Answer:** We can avoid problems by splitting the big task into pieces or chunks. The goal is to split your tasks into smaller chunks to reduce the load on the engine. It should be noted that the engine is limited to the number of tasks it can process within a given time.

Code Example:

```js
let i = 0;

let start = Date.now();

function count() {
  // do a piece of the heavy job (*)

  do {
    i++;
  } while (i % 1e6 != 0);

  if (i == 1e9) {
    alert('Done in ' + (Date.now() - start) + 'ms');
  } else {
    setTimeout(count); // schedule the new call (**)
  }
}

count();
```

Source: <https://javascript.info/event-loop#use-case-1-splitting-cpu-hungry-tasks>

### What is a Microtask in relation to JavaScript?

**Interview Answer:** Microtasks come solely from our code. They are usually created by promises: an execution of .then/catch/finally handler becomes a microtask. Microtasks are used “under the cover” of await as well, as it is another form of promise handling. There is also a special function `queueMicrotask(func)` that queues func for execution in the microtask queue.

Immediately after every macrotask, the engine executes all tasks from microtask queue, prior to running any other macrotasks or rendering or anything else. All microtasks are completed before any other event handling or rendering or any other macrotask takes place.

Code Example:

```js
// 3rd: alerts "timeout" - timeout shows last because it is a macrotask.

setTimeout(() => alert("timeout"));

// 2nd: alerts "promise" - 

// promise shows second, because .then passes through the microtask queue

Promise.resolve()

    .then(() => alert("promise"));

// 1st: alerts "code" – 

code shows first because it is a regular synchronous call.

alert("code");
```

**Example:** Simple Algorithm

1. Dequeue and run the oldest task from the macrotask queue (e.g., “script”).
1. Execute all microtasks:
1. While the microtask queue is not empty:
1. Dequeue and run the oldest microtask.
1. Render changes if any.
1. If the macrotask queue is empty, wait till a macrotask appears.
1. Go to step 1.

Source: <https://javascript.info/event-loop#macrotasks-and-microtasks>
