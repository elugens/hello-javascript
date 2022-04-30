---
title: Fetch - Abort
description: Fetch - Abort is used to abort a fetch request. In JavaScript, we can use the fetch method to abort a request.
sidebar_position: 4
sidebar_label: Fetch - Abort
---

**Network Requests: Fetch - Abort**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Is it possible to cancel or abort an ongoing Fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there is a special built-in object for such purposes: AbortController. We can use it to abort, fetch, and do other asynchronous tasks. The usage is very straightforward. The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired. You can create a new AbortController object using the AbortController.AbortController() constructor. Communicating with a DOM request is done using an AbortSignal object (calling abort()).
    </div>
  </div>
</details>

---

### Could you perhaps clarify the purpose of the AbortController Object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We must create a new AbortController constructor to implement the AbortController object. The controller is an object with a single abort method and a property signal that allows us to put event listeners on it. When abort() gets called, the controller invokes. The abort event transmits by controller.signal, and the attribute "controller. signal. aborted" becomes true. When abort() invokes on it, AbortController passes abort events.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let controller = new AbortController();
let signal = controller.signal;

// The party that performs a cancelable operation
// gets the "signal" object
// and sets the listener to trigger when controller.abort() is called
signal.addEventListener('abort', () => alert('abort!'));

// The other party, that cancels (at any point later):
controller.abort(); // abort!

// The event triggers and signal.aborted becomes true
alert(signal.aborted); // true
```

  </div>
  </div>
</details>

---

### Is it possible to cancel an event without using the AbortController?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we could implement the same kind of event listening in our code independently, without the AbortController object. But what is valuable is that fetch knows how to work with the AbortController object, and it is integrated into it and optimized for its use.
    </div>
  </div>
</details>

---

### Can you cancel an ongoing fetch with the AbortController?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, to be able to cancel fetch, we must pass the signal property of an AbortController as a fetch option. The fetch method knows how to work with AbortController. It listens to abort events on a signal. Now, to abort, we call controller.abort(). At that point, fetch extracts the event from the signal and aborts the request.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// abort in 1 second
let controller = new AbortController();
setTimeout(() => controller.abort(), 1000);

try {
  let response = await fetch('/article/fetch-abort/demo/hang', {
    signal: controller.signal, // <--
  });
} catch (err) {
  if (err.name == 'AbortError') {
    // handle abort()
    alert('Aborted!');
  } else {
    throw err;
  }
}
```

  </div>
  </div>
</details>

---

### Can the AbortController cancel or abort multiple fetches at once?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, AbortController is scalable by default. It allows us to cancel multiple fetches at once, which can be exceptionally helpful when dealing with an array.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let urls = [...]; // a list of urls to fetch in parallel

let controller = new AbortController();

// an array of fetch promises
let fetchJobs = urls.map(url => fetch(url, {
  signal: controller.signal
}));

let results = await Promise.all(fetchJobs);

// if controller.abort() is called from anywhere,
// it aborts all fetches
```

  </div>
  </div>
</details>

---
