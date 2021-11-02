---
title: Fetch - Abort
sidebar_position: 4
---

# Fetch - Abort

**Network Requests: Fetch - Abort**

<head>
  <title>Fetch Abort - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Is there a way to cancel or abort an ongoing Fetch?

**Interview Answer:** Yes, there is a special built-in object for such purposes: AbortController. It can be used to abort not only fetch, but other asynchronous tasks as well. The usage is very straightforward. The AbortController interface represents a controller object that allows you to abort one or more Web requests as and when desired. You can create a new AbortController object using the AbortController.AbortController() constructor. Communicating with a DOM request is done using an AbortSignal object (calling abort()).

Source: <https://javascript.info/fetch-abort>

### Can you explain the function of the AbortController Object?

**Interview Answer:** To implement the AbortController object, we must create a new AbortController constructor. The controller is a remarkably simple object consisting of a single abort method and property signal that allows to set event listeners on it. When abort() is called the controller.signal emits the abort event and the controller.signal.aborted property becomes true. AbortController is just a mean to pass abort events when abort() is called on it.

Code Example:

```js
let controller = new AbortController();

let signal = controller.signal;

// The party that performs a cancelable operation

// gets the "signal" object

// and sets the listener to trigger when controller.abort() is called

signal.addEventListener('abort', () => alert('abort!'));

// The other party, that cancels (at any point later):

controller.abort(); // abort!
// The event triggers and signal.aborted becomes true

alert(signal.aborted); // true
```

Source: <https://javascript.info/fetch-abort#the-abortcontroller-object>

### Is there a way to abort an event without the AbortController?

**Interview Answer:** Yes, we could implement the same kind of event listening in our code on our own, without the AbortController object. But what is valuable is that fetch knows how to work with the AbortController object. It is integrated in it and optimized for its use.

Source: <https://javascript.info/fetch-abort#the-abortcontroller-object>

### Can you cancel an ongoing fetch with the AbortController?

**Interview Answer:** Yes, to be able to cancel fetch, we must pass the signal property of an AbortController as a fetch option. The fetch method knows how to work with AbortController. It will listen to abort events on signal. Now, to abort, we call controller.abort(). At that point, fetch gets the event from signal and aborts the request.

Code Example:

```js
// abort in 1 second

let controller = new AbortController();

setTimeout(() => controller.abort(), 1000);

try {

    let response = await fetch('/article/fetch-abort/demo/hang', {

      signal: controller.signal ß

    });

} catch(err) {

    if (err.name == 'AbortError') { // handle abort()

      alert("Aborted!");

    } else {

      throw err;

    }

}
```

Source: <https://javascript.info/fetch-abort#the-abortcontroller-object>

### Can the AbortController cancel or abort multiple fetches as once?

**Interview Answer:** Yes, AbortController is scalable by default. It allows us to cancel multiple fetches at once. This can be exceptionally helpful when we are deal with an array.

Code Example:

```js
let urls = [...]; // a list of urls to fetch in parallel

let controller = new AbortController();

// an array of fetch promises

let fetchJobs = urls.map(url => fetch(url, {

    signal: controller.signal

}));

let results = await Promise.all(fetchJobs);

// if controller.abort() is called from anywhere,

// it aborts all fetches
```

Source: <https://javascript.info/fetch-abort#abortcontroller-is-scalable>
