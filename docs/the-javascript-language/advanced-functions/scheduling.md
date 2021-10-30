---
title: Scheduling / Timing
sidebar_position: 8
---

# Scheduling: setTimeout / setInterval - Q&A

### What are the two most common JavaScript methods used for scheduling a call?

**Interview Answer:** There are two methods that are commonly used for scheduling calls in JavaScript including the setTimeout and setInterval methods. setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating it continuously. Both methods are useful when you need to schedule specific events or actions in JavaScript.

**Technical Answer:** There are two methods that are commonly used for scheduling calls in JavaScript including the setTimeout and setInterval methods. setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly, starting after the interval of time, then repeating continuously at that interval. Both methods are useful when you need to schedule specific events or actions in JavaScript. These methods are not a part of JavaScript specification. But most environments have the internal scheduler and provide these methods. They are supported in all browsers and Node.js. Both methods are part of the WindowOrGlobalScope interface as a specification.

Source: <https://javascript.info/settimeout-setinterval>

### Explain, the function and syntax of the setTimeout() method?

**Interview Answer:** The setTimeout method sets a timer which executes a function or piece of code once the timer expires. It takes several arguments and parameters including the callback function, delay time, and optional parameters. The delay time is optional and can be set in milliseconds of time, but it must be a positive integer. The optional parameters can be used to set values in the callback.

**Note:** We can use the clearTimeout method to clear setTimeout in our code.

**Technical Answer:** The setTimeout() method of the WindowOrWorkerGlobalScope mixin (and successor to Window.setTimeout()) sets a timer which executes a function or specified piece of code once the timer expires. Parameters include the func/code, delay (optional), and some optional arguments. The func / code is required but delay and optional arguments are not. If the delay parameter is omitted, a value of 0 is used, meaning execute immediately, or more accurately, the next event cycle. Note that in either case, the actual delay may be longer than intended. The returned timerID is a positive integer value which identifies the timer created by the call to setTimeout(); this value can be passed to clearTimeout() to cancel the timeout.

**Syntax:** `let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)`

Example:

```js
function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);

// setTimeout without arguments:

function sayHi(phrase, who) {
  alert(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, 'Hello', 'John'); // Hello, John
// Arrow function implementation

setTimeout(() => alert('Hello'), 1000);
```

Source: <https://javascript.info/settimeout-setinterval#settimeout>

### Explain, the function and syntax of the clearTimeout() method?

**Interview Answer:** The clearTimeout method clears a timer set with the setTimeout method. The timer value returned by setTimeout is used as the parameter for the clearTimeout method.

**Note:** It's worth noting that the pool of IDs used by setTimeout() and setInterval() are shared, which means you can technically use clearTimeout() and clearInterval() interchangeably. However, for clarity, you should avoid doing so.

**Syntax:** scope.clearTimeout(timeoutID)

Example:

```js
let timerID = setTimeout(() => alert('never happens'), 1000);

alert(timerID); // timer identifier
clearTimeout(timerID);

alert(timerID); // same identifier (does not become null after canceling)
```

Source: <https://javascript.info/settimeout-setinterval#canceling-with-cleartimeout>

### Explain, the function and syntax of the setInterval() method?

**Interview Answer:** The setInterval method sets an interval which executes a function or piece of code repeatedly until the interval cleared using the cleartInterval method. It takes several arguments and parameters including the callback function, interval time, and optional parameters. The interval delay time is optional and can be set in milliseconds of time to control the interval delay, but it must be a positive integer. The optional parameters can be used to set values in the callback function.

**Technical Answer:** The setInterval method has the same syntax as setTimeout. Parameters include the func/code, delay (optional), and some optional arguments. The func / code is required but delay and optional arguments are not. The time, in milliseconds (thousandths of a second), the timer should delay in between executions of the specified function or code. See Delay restrictions below for details on the permitted range of delay values. All arguments have the same meaning. But unlike setTimeout it runs the function not only once, but regularly after the given interval of time. To stop further calls, we should call clearInterval(timerId).

**Syntax:** let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

Example:

```js
// repeat with the interval of 2 seconds

let timerId = setInterval(() => alert('tick'), 2000);

// after 5 seconds stop

setTimeout(() => {
  clearInterval(timerId);
  alert('stop');
}, 5000);
```

Source: <https://javascript.info/settimeout-setinterval#setinterval>

### How does garbage collection work with the setInterval and setTimeout callbacks?

**Interview Answer:** When a function is passed in setInterval or setTimeout, an internal reference is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it. For setInterval the function stays in memory until clearInterval is called, but for setTimeout the variables are alive until the callback is complete.

**Note:** There is a side-effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So, when we do not need the scheduled function anymore, it is better to cancel it, even if it’s very small.

**Technical Answer:** When a function is passed in setInterval/setTimeout, an internal reference is created to it and saved in the scheduler. It prevents the function from being garbage collected, even if there are no other references to it. For setInterval the function stays in memory until clearInterval is called. There is a side-effect. A function references the outer lexical environment, so, while it lives, outer variables live too. They may take much more memory than the function itself. So, when we do not need the scheduled function anymore, it is better to cancel it, even if it is small.

Example:

```js
// the function stays in memory until the scheduler calls it

setTimeout(function() {...}, 100);
```

Source: <https://javascript.info/settimeout-setinterval>

### How does zero delay setTimeout execute in JavaScript?

**Interview Answer:** In JavaScript, zero delay setTimeout schedules the execution of the function call after the current execution is complete. The function is scheduled to run after the current script.

**Note:** There are also advanced browser-related use cases of zero-delay timeout such as splitting CPU-hungry tasks.

Example:

```js
setTimeout(() => alert('World')); // returns second
alert('Hello'); // returns first
```

Source: <https://javascript.info/settimeout-setinterval#zero-delay-settimeout>
