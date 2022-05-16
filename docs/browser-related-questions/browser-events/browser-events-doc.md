---
title: Browser Events
description: Browser Events are the events that occur in the browser. They are used to interact with the browser. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Browser Events
keywords:
  - browser events
  - browser
  - events
  - browser interaction
  - javascript
  - interview
  - questions
  - answers
  - response
  - object
  - interview questions
  - interview answers
  - js
tags:
  - browser events
  - browser
  - events
  - browser interaction
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/BrowserEventsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Browser Events | JavaScript Frontend Phone Interview Answer</title>
</head>

**Browser Events: Browser Events**

<CloseAllAnswers />

---

### What is an event concerning the DOM, Browser, and JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).
    </div>
  </div>
</details>

---

### Can you name at least three DOM events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several DOM events, including mouse, keyboard, form element, document, and CSS events. The most common is mouse and keyboard events, like mouse click and keyboard `keydown` events.
    </div>
  </div>
</details>

---

### What is a JavaScript event handler?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JavaScript event handler is a function that runs in the case of an event. Handlers are a way to run JavaScript code in case of user actions. There are several ways to assign a handler.
    </div>
  </div>
</details>

---

### Can you execute an event in an HTML attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can set an event handler in HTML with an attribute named on&#8249;event&#8250;. The onevent handlers are properties on specific DOM elements to manage how that element reacts to events. The onevent handler usually gets named with the event it reacts to, like onclick, onkeypress, and onfocus.</div><br />
  <div><strong>Technical Response:</strong> You can set an event handler in HTML with an attribute named on&#8249;event&#8250;. The onevent handlers are properties on particular DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and more.) or non-interactive (such as the base &#8249;body&#8250; element). The onevent handler usually gets named with the event it reacts to, like onclick, onkeypress, and onfocus. You can specify an on&#8249;…&#8250; event handler for a particular event (such as click) for a given object differently. An HTML attribute is not a convenient place to write tons of code. So, it gets recommended to us that we write an event handler. As we know, HTML attribute names are not case-sensitive, so ONCLICK works as well as onClick and onCLICK… But usually, attributes are lowercased: onclick.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> HTML Event Attribute onclick<br /><br />

  <div></div>

```js
<!-- alerts Click! in the browser -->
<input value="Click me" onclick="alert('Click!')" type="button">
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Event Handler (recommended)<br /><br />

  <div></div>

```html
<script>
  function countRabbits() {
    for (let i = 1; i <= 3; i++) {
      alert('Rabbit number ' + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!" />
```

  </div>
  </div>
</details>

---

### Is connecting a handler with a DOM `on<event>` property possible?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can assign a handler using a DOM property on&#8249;event&#8250;. If the handler is assigned using an HTML attribute, the browser reads it, creates a new function from the attribute content, and writes it to the DOM property. This action is similar to using a function as an event handler, but it’s less direct.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input id="elem" type="button" value="Click me" />
<script>
  elem.onclick = function () {
    alert('Thank you');
  };
</script>
```

  </div>
  </div>
</details>

---

### Is it possible to utilize an event on a DOM element more than once?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, not directly; the second event gets overwritten, and the current event returns the second value. We have to implement an event listener if we intend to add more than one handler.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input type="button" id="elem" onclick="alert('Before')" value="Click me" />
<script>
  elem.onclick = function () {
    // overwrites the existing handler
    alert('After'); // only this After will be shown
  };
</script>
```

  </div>
  </div>
</details>

---

### What is the reason for not using setAttribute for handlers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason behind not using setAttribute for handlers is that attributes are always a string so that the function becomes a string instead of a function.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> This will not work!<br /><br />

  <div></div>

```js
// a click on <body> will generate errors,
// because attributes are always strings, function becomes a string
document.body.setAttribute('onclick', function () {
  alert(1);
});
```

  </div>
  </div>
</details>

---

### Are DOM properties names case-sensitive or case-insensitive?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> DOM property names are case-sensitive. We should assign a handler to elem.onclick, not elem.ONCLICK.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the EventTarget addEventListener method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The EventTarget method addEventListener(event, target, options) sets up a function call whenever the specified event gets delivered to the target. Typical targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).
    </div><br />
  <div><strong className="codeExample">Syntax:</strong><br /><br />

  <div></div>

```js
target.addEventListener(event, handler [, options]);
target.addEventListener(event, handler [, useCapture]);
target.addEventListener(event, handler [, useCapture, wantsUntrusted
    // This API has not been standardized.
]); // Gecko/Mozilla only
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input id="elem" type="button" value="Click me" />

<script>
  function handler1() {
    alert('Thanks!');
  }

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert('Hello');
  elem.addEventListener('click', handler1); // Thanks!
  elem.addEventListener('click', handler2); // Thanks again!
</script>
```

  </div>
  </div>
</details>

---

### How should you remove a previously added event listener?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To remove an event that gets added, use the removeEventListener(event, handler) function. We should pass the same function that we previously allocated to delete a handler. We cannot remove the function if it does not get stored in a variable. There are no techniques available for "reading back" handlers given by addEventListener.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  function handler() {
    alert('Thanks!');
  }

  input.addEventListener('click', handler);
  // ....
  input.removeEventListener('click', handler);
</script>
```

  </div>
  </div>
</details>

---

### Is there any event that you cannot assign using a DOM property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are events that a DOM property cannot assign. Only when using addEventListener. The DOMContentLoaded event, for example, is triggered when the page is loaded and the DOM gets created, and the addEventListener method is more adaptive in this case.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// will never run
document.onDOMContentLoaded = function() {
  alert("DOM built");
};

// this way it works
document.addEventListener("DOMContentLoaded", function() {
  alert("DOM built");
});
```

  </div>
  </div>
</details>

---

### What is the event object used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Web developers use the event object for various actions, including getting the event type, current target, and window relative coordinates of the current during point events. The event object can be called directly in HTML attributes or inside our scripts.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- event.type returns the type of event (onclick: click) -->
<input type="button" onclick="alert(event.type)" value="Event type" />

```

  </div>
  </div>
</details>

---

### Are we limited to just function handler in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can assign not just a function but also an object as an event handler using addEventListener. When an event occurs, the object handler method gets invoked, and we could also use a class as another approach.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> Regular Object<br /><br />

  <div></div>

```html
<button id="elem">Click me</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + ' at ' + event.currentTarget);
    },
  };

  elem.addEventListener('click', obj);
</script>
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Class<br /><br />

  <div></div>

```html
<button id="elem">Click me</button>

<script>
  class Menu {
    handleEvent(event) {
      switch (event.type) {
        case 'mousedown':
          elem.innerHTML = 'Mouse button pressed';
          break;
        case 'mouseup':
          elem.innerHTML += '...and released.';
          break;
      }
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);
</script>
```

  </div>
  </div>
</details>

---
