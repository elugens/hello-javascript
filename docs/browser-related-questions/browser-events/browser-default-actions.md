---
title: Browser Default Actions
description: Several events automatically cause the browser to do particular actions by default. These are called default browser actions. Interview Questions
sidebar_position: 4
sidebar_label: Browser Default Actions
keywords:
  - browser default actions
  - browser defaults
  - browser actions
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
  - browser default actions
  - browser defaults
  - browser actions
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BrowserDefaultSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Browser Default Actions | JavaScript Frontend Interview</title>
</head>

**Browser Events: Browser Default Actions**

<CloseAllAnswers />

---

### What is a default action in the context of a browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A default action is a browser's built-in behavior that occurs in response to specific user events, such as clicking a link, submitting a form, or pressing a key. There are several different default actions in the browser. For instance, a click on a link initiates the navigation to the specified URL. Another default action is highlighting text when pressing a mouse button as we glide over the text. As developers, we have control over many of these actions.
    </div>
  </div>
</details>

---

### Is there a built-in function or method to prevent default browser actions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the `preventDefault()` method in JavaScript can be used to stop a browser's default action associated with a specific event from occurring.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<a href="/" onclick="return false">Click here</a>
<!-- or -->
<a href="/" onclick="event.preventDefault()">here</a>
```

  </div>
  </div>
</details>

---

### What happens when you return a false value from a handler?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Returning false from an event handler in JavaScript is similar to calling both `preventDefault()` and `stopPropagation()`, stopping both the default action and event propagation.The value returned by an event handler usually gets ignored. The only exception is returning false from a handler assigned on&#8249;event&#8249;. In all other circumstances, the return value gets disregarded, making no sense to return true.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

In JavaScript, you might return false from an event handler to prevent the default action.

```javascript
document.querySelector('a').addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the default action.
  // Your code here...
  return false; // This also works like event.preventDefault();
});
```

In this case, clicking the link will not navigate to its href.

  </div>
  </div>
</details>

---

### How can you identify if an event has a default action in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Use the `event.defaultPrevented` property on the event object to check if the default action has been prevented or if the event has a default action.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
button.addEventListener('click', function(event) {
  event.preventDefault();
  if (event.defaultPrevented) {
    console.log('The event had a default action which was prevented');
  } else {
    console.log('The event did not have a default action');
  }
});

```

  </div>
  </div>
</details>

---

### What is the function of the defaultPrevented property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `defaultPrevented` property events returns a Boolean indicating if the event's default action has been prevented via `preventDefault()` method. It's true if default action is prevented, false otherwise.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<p>Right-click for the document menu</p>
<button id="elem">Right-click for the button menu</button>

<script>
  elem.oncontextmenu = function (event) {
    event.preventDefault();
    console.log('Button context menu');
  };

  document.oncontextmenu = function (event) {
    if (event.defaultPrevented) return;

    event.preventDefault();
    console.log('Document context menu');
  };
</script>
```

  </div>
  </div>
</details>

---

### What is event propagation and how is it related to default actions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event propagation is the process through which events travel in the DOM hierarchy. It consists of capturing, target, and bubbling phases. Default actions occur after event propagation, if not prevented.
  </div>
  </div>
</details>

---

### Can you cancel the default action for any event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> While most events' default actions can be canceled, some events, such as `load`, `scroll` or `readystatechange`, do not have cancelable default actions.
  </div><br />
  <div><strong>Technical Details:</strong> The Event interface has a read-only property named cancelable which indicates whether or not the event is cancelable. An event is cancelable if it can be cancelled by calling the preventDefault method. For example, the 'click' event is usually cancelable, while the 'load' event is usually not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

You can check if an event is cancelable by reading the **cancelable** property.

```js
element.addEventListener('click', function(event) {
  if (event.cancelable) {
    // The event can be cancelled
    event.preventDefault();
  } else {
    // The event cannot be cancelled
  }
});
```

  </div>
  </div>
</details>

---

### Why might you want to prevent a default action in a web application?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Preventing default actions allows developers to implement custom behaviors for events, such as handling form submissions with AJAX or creating custom context menus.
  </div>
  </div>
</details>

---

### What is the difference between "preventDefault()" and "stopPropagation()"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `preventDefault()` stops the default action of an event from occurring. `stopPropagation()` prevents further propagation of an event through the DOM tree, stopping any parent handlers from being notified.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example illustrating both methods.

```javascript
document.querySelector("#child").addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the default action.
  event.stopPropagation(); // Stops the event from bubbling up.
  console.log('Child clicked!');
});

document.querySelector("#parent").addEventListener('click', function(event) {
  console.log('Parent clicked!'); // This won't be triggered when child is clicked because of stopPropagation().
});

// Assuming HTML structure like:
// <div id="parent">
//   <button id="child">Click me</button>
// </div>
```

In this example, when the child button is clicked, 'Child clicked!' is logged to the console. The event does not bubble up to the parent due to `stopPropagation()`, and so 'Parent clicked!' is not logged. `preventDefault()` would be more meaningful in a context where the event has a default action, such as a form submission or a link click.

  </div>
  </div>
</details>

---

### Can you still run your own scripts if you prevent the default action?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, preventing the default action only stops the browser's built-in behavior, not any custom scripts or event handlers you've attached.
  </div>
  </div>
</details>

---

### What would be the result of preventing the default action of a "click" event on a hyperlink?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Preventing the default action of a `click` event on a hyperlink will stop the browser from navigating to the hyperlink's URL.
  </div>
  </div>
</details>

---

### What's the impact of preventing default on a form's "submit" event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Preventing default on a form's `submit` event stops the form from being submitted to the server, which is useful when handling form submission via JavaScript or AJAX.
  </div>
  </div>
</details>

---

### If you prevent the default action of a "keydown" event for a specific key, what happens?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Preventing the default action of a "keydown" event for a specific key stops that key from performing its default function, so the input associated with it won't be reflected in the UI.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.querySelector('#textInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevents the default action.
    console.log('Enter key was pressed but its default action was prevented.');
  }
});

// Assuming HTML like:
// <input type="text" id="textInput" />
```

  </div>
  </div>
</details>

---
