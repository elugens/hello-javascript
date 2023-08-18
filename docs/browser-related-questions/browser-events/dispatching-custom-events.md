---
title: Dispatching Custom Events
description: Dispatching Custom Events in JavaScript - The Event() constructor creates a new Event. - JavaScript Interview Questions & Answers
sidebar_position: 5
sidebar_label: Dispatching Custom Events
keywords:
  - dispatching custom events
  - dispatch custom events
  - custom events
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
  - dispatching custom events
  - dispatch custom events
  - custom events
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DispatchingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Dispatching Custom Events | JavaScript Phone Interview</title>
</head>

**Browser Events: Dispatching Custom Events**

---

<AdSense />

---

<CloseAllAnswers />

### What is a custom event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A custom event is a user-defined event that can be created and dispatched to perform actions not covered by built-in events.
  </div>
  </div>
</details>

---

### What method is used to create a custom event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The CustomEvent() constructor is used to create and initialize custom events in JavaScript. You can then dispatch these events using the dispatchEvent() method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

You can create custom events in JavaScript using the `CustomEvent` constructor. This allows you to define your own events that can carry custom data.

```javascript
// Create a custom event with the name 'myEvent'
let myEvent = new CustomEvent('myEvent', {
  detail: {
    message: 'This is my custom event!'
  }
});

// Dispatch the event
document.dispatchEvent(myEvent);
```

In this example, 'myEvent' is a custom event that carries data in its `detail` property. The data can be anything you want - in this case, an object with a `message` property.

You can listen for the custom event just like you would with standard events:

```javascript
document.addEventListener('myEvent', function(event) {
  console.log(event.detail.message); // Logs 'This is my custom event!'
});
```

When the 'myEvent' event is dispatched, the event listener logs the message stored in the event's `detail` property.

  </div>
  </div>
</details>

---

### Can you explain the function of the Event constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Event() constructor creates a new Event. We can create custom events or act on built-in events, such as click, mousedown, etc. There are two arguments the event type (custom or built-in) and the options. The type is a DOMString representing the name of the event. The second argument is the option that includes the bubble, cancelable, and compose option properties, all set to false by default.</div><br />
  <div><strong>Technical Response:</strong> Built-in event classes form a hierarchy, like DOM element classes. The root is the built-in Event class, and the Event() constructor creates a new Event. We can create custom events or act on built-in events, such as click, mousedown, etc. There are two arguments the event type (custom or built-in) and the options. The type is a DOMString representing the name of the event. The second argument is the option that includes the bubble, cancelable, and composes option properties. Bubbles is a Boolean value that indicates whether the event bubbles; the default value is false. Cancelable is a Boolean that indicates whether or not the event cancels out. Composed is a Boolean that indicates whether the event triggers listeners outside of a shadow root, set to false by default.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> const event = new Event("look", &#123;"bubbles":true, "cancelable":false&#125;);<br /><br />

  <div></div>

```js
// create a look event that bubbles up and cannot be canceled
const evt = new Event('look', { bubbles: true, cancelable: false });
document.dispatchEvent(evt);

// event can be dispatched from any element, not only the document
myDiv.dispatchEvent(evt);
```

  </div>
  </div>
</details>

---

### How do you dispatch a custom event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a custom event is dispatched using the dispatchEvent() method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let event = new CustomEvent('myEvent', {detail: {key: 'value'}});
document.dispatchEvent(event);
```

This code creates and dispatches a custom event named 'myEvent'.

  </div>
  </div>
</details>

---

### Can you explain the function of the dispatchEvent() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `dispatchEvent()` method is used to dispatch an event to a target element. It triggers all listeners for that event type and returns a boolean indicating if the event was cancelled. After an event object gets created, we should “run” it on an element using the call elem.dispatchEvent(event). Then handlers react to it as if it were a regular browser event. If the event was created with the bubbles flag, it bubbles up.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> elem.dispatchEvent(event);<br /><br />

  <div></div>

```html
<button id="elem" onclick="alert('Click!');">Auto-click</button>

<script>
  let event = new Event('click');
  elem.dispatchEvent(event);
</script>
```

  </div>
  </div>
</details>

---

### Can custom events carry additional information?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, custom events in JavaScript can carry additional information in the `detail` property when they're created with the `CustomEvent` constructor. This `detail` property can hold any kind of data.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a custom event 'userLogin' with additional data
let userLoginEvent = new CustomEvent('userLogin', {
  detail: {
    username: 'JohnDoe',
    timestamp: new Date()
  }
});

// Dispatch the event
document.dispatchEvent(userLoginEvent);
```

And then, you can listen for this event and access the data like this:

```javascript
// Listen for 'userLogin' event
document.addEventListener('userLogin', function(event) {
  console.log(`User ${event.detail.username} logged in at ${event.detail.timestamp}`);
});
```

In this example, when the 'userLogin' event is dispatched, the username and timestamp stored in the event's `detail` property are logged to the console.

  </div>
  </div>
</details>

---

### Is there a way to tell a “real” user event from a script-generated one?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the isTrusted read-only property of the Event interface is a Boolean that is true when a user action generates the event and false when the event was created or modified by a script or dispatched via dispatchEvent() method.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let eventIsTrusted = event.isTrusted;<br /><br />

  <div></div>

```js
if (e.isTrusted) {
  /* The event is trusted */
} else {
  /* The event is not trusted */
}
```

  </div>
  </div>
</details>

---

### What is the difference between creating a new Event and creating a new CustomEvent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The CustomEvent constructor extends the Event constructor, adding the detail property, which allows passing custom data and aiding in resolving conflicts. The Event constructor doesn't have this additional functionality. In this case, it is the recommended approach. Besides, the event class describes “what kind of event” it is, and if the event is custom, we should use CustomEvent to be clear about it.</div><br />
  <div><strong>Technical Response:</strong> Technically, CustomEvent is the same as Event, with one exception. In the second argument (object), we can add property details for any custom information we want to pass with the event. The detail property can have any data. Technically we could live without it because we can assign any properties to a regular new Event object after its creation. But CustomEvent provides the unique detail field to evade conflicts with other event properties. In this case, it is the recommended approach. Besides, the event class describes “what kind of event” it is, and if the event is custom, we should use CustomEvent to be clear about it.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<h1 id="elem">Hello for John!</h1>

<script>
  // additional details come with the event to the handler
  elem.addEventListener('hello', function (event) {
    alert(event.detail.name);
  });

  elem.dispatchEvent(
    new CustomEvent('hello', {
      detail: { name: 'John' }, // special detail field
    })
  );
</script>
```

  </div>
  </div>
</details>

---

### Is it possible to override a CustomEvent's default behavior?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, if a CustomEvent is dispatched with the `cancelable` property set to `true`, its default behavior can be overridden using `preventDefault()`.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, you can use event.preventDefault as you would with a regular Event. By calling event.preventDefault(), an event handler may signal that those actions should get canceled. In that case, the call to elem.dispatchEvent(event) returns false. And the code that dispatched it knows that it should not continue. Please note: the event must have the flag cancelable: true, otherwise the call event.preventDefault() is ignored.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<pre id="rabbit">
  |\   /|
   \|_|/
   /. .\
  =\_Y_/=
   {>o<}
</pre>
<button onclick="hide()">Hide()</button>

<script>
  function hide() {
    let event = new CustomEvent('hide', {
      cancelable: true, // without that flag preventDefault doesn't work
    });
    if (!rabbit.dispatchEvent(event)) {
      alert('The action was prevented by a handler');
    } else {
      rabbit.hidden = true;
    }
  }

  rabbit.addEventListener('hide', function (event) {
    if (confirm('Call preventDefault?')) {
      event.preventDefault();
    }
  });
</script>
```

  </div>
  </div>
</details>

---

### Are nested events handled synchronously or asynchronously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Nested events in JavaScript are handled synchronously. The outer event will pause its execution until the nested (or inner) event has completed.
    </div><br />
  <div><strong>Technical Response:</strong> Nested events are handled synchronously by default. Usually, events get processed in a queue. If the browser is processing onclick and a new event occurs, e.g., the mouse moved, then handling is queued up, corresponding mousemove handlers call after onclick processing finishes. The notable exception is when one event is initiated from within another, e.g., using dispatchEvent. Such events are processed immediately: new event handlers get called, and the current handling is resumed. However, you can implement asynchronous behavior explicitly by using setTimeout method.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<button id="menu">Menu (click me)</button>

<script>
  menu.onclick = function () {
    alert(1);

    menu.dispatchEvent(
      new CustomEvent('menu-open', {
        bubbles: true,
      })
    );

    alert(2);
  };

  // triggers between 1 and 2
  document.addEventListener('menu-open', () => alert('nested'));
</script>
```

  </div>
  </div>
</details>

---

### Why would one use custom events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Custom events are used to decouple components in a JavaScript application, allowing them to communicate and synchronize actions without directly depending on each other, thus enhancing code maintainability and readability.
  </div>
  </div>
</details>

---

### Can custom events bubble up through the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, custom events in JavaScript can bubble up through the DOM if the <strong>bubbles</strong> property is set to `true` in the options object when creating the event.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Showing a custom event bubbling up through the DOM.<br /><br />

  <div></div>

```javascript
// Create a custom event 'myEvent' with bubbles set to true
let myEvent = new CustomEvent('myEvent', {
  bubbles: true,
  detail: { message: 'This is my custom event!' }
});

// Add an event listener to the parent element
document.querySelector('#parent').addEventListener('myEvent', function(event) {
  console.log('Parent received:', event.detail.message);
});

// Dispatch the event on the child element
document.querySelector('#child').dispatchEvent(myEvent);

// Assuming HTML structure like:
// <div id="parent">
//   <div id="child"></div>
// </div>
```

In this example, the 'myEvent' event is dispatched on the child element. Because the `bubbles` property is set to `true`, the event bubbles up to the parent element. The parent's event listener then logs the message stored in the event's `detail` property.

  </div>
  </div>
</details>

---

### Can custom events be used across different browsers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, custom events are part of the standard DOM API and are supported across all modern browsers, including Chrome, Firefox, Safari, and Edge.
  </div>
  </div>
</details>

---

### How do you listen for a custom event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can listen for a custom event using the `addEventListener()` method.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.addEventListener('myEvent', function(e) {
  // handle the event
});
```

  </div>
  </div>
</details>

---

### How do you remove an event listener for a custom event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `removeEventListener()` method is used to stop listening to a custom event.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function handler(e) { /*...*/ }
document.addEventListener('myEvent', handler);
// ...
document.removeEventListener('myEvent', handler);
```

  </div>
  </div>
</details>

---

### Can you stop a custom event from bubbling up?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can stop a custom event from bubbling up in JavaScript by calling the stopPropagation() method within the event handler for that custom event.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('myEvent', function(e) {
  e.stopPropagation(); // stops the event from bubbling up
  // handle the event
});

let event = new CustomEvent('myEvent', {bubbles: true});
document.dispatchEvent(event);
```

In this case, if 'myEvent' is dispatched on a child element, it will not bubble up to the document.

  </div>
  </div>
</details>

---

### Can custom events be dispatched asynchronously?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, custom events can be dispatched asynchronously using JavaScript's asynchronous functions, like `setTimeout`, `setInterval`, or inside a Promise or an async function.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> dispatching a custom event asynchronously with `setTimeout`.<br /><br />

  <div></div>

```javascript
// Create a custom event 'myEvent' with additional data
let myEvent = new CustomEvent('myEvent', {
  detail: {
    message: 'This is my custom event!'
  }
});

// Listen for 'myEvent' event
document.addEventListener('myEvent', function(event) {
  console.log(event.detail.message);
});

// Dispatch the event asynchronously
setTimeout(function() {
  document.dispatchEvent(myEvent);
}, 2000); // Dispatch event after 2 seconds
```

In this example, the 'myEvent' custom event is dispatched asynchronously 2 seconds after the script runs. When the event is dispatched, the message 'This is my custom event!' is logged to the console.

  </div>
  </div>
</details>

---

### Can you dispatch a custom event on the "window" object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can dispatch a custom event on the `window` object using the `dispatchEvent()` method, just like with any other EventTarget in JavaScript.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> custom event being dispatched on the `window` object<br /><br />

  <div></div>

```javascript
// Create a custom event 'myEvent' with additional data
let myEvent = new CustomEvent('myEvent', {
  detail: {
    message: 'This is my custom event!'
  }
});

// Listen for 'myEvent' event on window
window.addEventListener('myEvent', function(event) {
  console.log(event.detail.message);
});

// Dispatch the event on window
window.dispatchEvent(myEvent);
```

In this example, the 'myEvent' custom event is dispatched on the `window` object. When the event is dispatched, the message 'This is my custom event!' is logged to the console.

  </div>
  </div>
</details>

---

### Can you modify the "detail" property of a custom event after it's been dispatched?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, you cannot modify the `detail` property of a custom event after it has been dispatched. The `detail` property is read-only after the event is created.
  </div>
  </div>
</details>

---

### Can you use custom events with forms?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use custom events with forms in JavaScript. For example, you can dispatch a custom event when form data changes, validating input, or upon form submission.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let event = new CustomEvent('formSubmitted', { 
    detail: {
      formData: new FormData(form)
    }
  });
  form.dispatchEvent(event);
});

form.addEventListener('formSubmitted', function(e) {
  // handle form submission...
  console.log('Form was submitted with data: ', e.detail.formData);
});
```

In this example, a 'formSubmitted' custom event is dispatched when the form is submitted. The event carries the form data in its `detail` property.

  </div>
  </div>
</details>

---

### Can you trigger a custom event from a user interaction, like a click?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a custom event can be dispatched in response to a user interaction, like a click. In the event handler for the click, call dispatchEvent() with the custom event.
  </div>
  </div>
</details>

---

### Is it necessary to remove event listeners for custom events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's good practice to remove listeners when they're no longer needed to prevent memory leaks.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a custom event 'myEvent' with additional data
let myEvent = new CustomEvent('myEvent', {
  detail: {
    message: 'This is my custom event!'
  }
});

// Define the event listener function
function customEventHandler(event) {
  console.log(event.detail.message);
}

// Add the event listener
window.addEventListener('myEvent', customEventHandler);

// Dispatch the event on window
window.dispatchEvent(myEvent);

// Remove the event listener
window.removeEventListener('myEvent', customEventHandler);

// Try to dispatch the event again
window.dispatchEvent(myEvent); // Nothing will be logged to the console this time because the event listener was removed.
```

In this example, we first create the event, then define the event listener function, and add the listener. We dispatch the event, and the message 'This is my custom event!' gets logged to the console. Then we remove the event listener, and when we dispatch the event again, nothing is logged to the console because the event listener has been removed.

  </div>
  </div>
</details>

---
