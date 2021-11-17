---
title: Browser Events
sidebar_position: 1
---

# Browser Events

**Browser Events: Browser Events**

<head>
  <title>Browser Events - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is an event in relation to the DOM, Browser, and JavaScript?

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
  <div><strong>Interview Response:</strong> There several DOM events including mouse, keyboard, form element, document, and css events. The most common is mouse and keyboard events, like mouse click and keyboard key-down events.
    </div>
  </div>
</details>

---

### What is a JavaScript event handler?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A JavaScript event handler is a function that runs in case of an event. Handlers are a way to run JavaScript code in case of user actions. There are several ways to assign a handler.
    </div>
  </div>
</details>

Source: <https://javascript.info/introduction-browser-events#event-handlers>

### Can you execute an event in a HTML attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An event handler can be set in HTML with an attribute named on&#8249;event&#8250;. The onevent handlers are properties on certain DOM elements to manage how that element reacts to events. The onevent handler is usually named with the event it reacts to, like onclick, onkeypress, onfocus, etc.</div><br />
  <div><strong>Technical Response:</strong> An event handler can be set in HTML with an attribute named on&#8249;event&#8250;. The onevent handlers are properties on certain DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and so forth) or non-interactive (such as the base &#8249;body&#8250; element). The onevent handler is usually named with the event it reacts to, like onclick, onkeypress, onfocus, etc. You can specify an on&#8249;…&#8250; event handler for a particular event (such as click) for a given object in different ways. An HTML-attribute is not a convenient place to write a lot of code. So, it is recommended to write an event handler. As we know, HTML attribute names are not case-sensitive, so ONCLICK works as well as onClick and onCLICK… But usually attributes are lowercased: onclick.
  </div>
  </div>
</details>

Example: HTML Event Attribute onclick

```html
<!-- alerts Click! in the browser -->

<input value="Click me" onclick="alert('Click!')" type="button" />

Example: Event Handler (recommended)

<script>
  function countRabbits() {
    for (let i = 1; i <= 3; i++) {
      alert('Rabbit number ' + i);
    }
  }
</script>

<input type="button" onclick="countRabbits()" value="Count rabbits!" />
```

---

### Is there a way to assign a handler to an `on<event>` DOM property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can assign a handler using a DOM property on&#8249;event&#8250;. If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property. This is actually similar to using a function as an event handler, but it’s just a little less direct.
    </div>
  </div>
</details>

Example:

```html
<input id="elem" type="button" value="Click me" />

<script>
  elem.onclick = function () {
    alert('Thank you');
  };
</script>
```

---

### Can use an event more the once on a DOM element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No not directly, the second event will overwrite the existing event and return the second value. We should have to implement an event listener if we intend to add more than one handler.
    </div>
  </div>
</details>

Example:

```html
<input type="button" id="elem" onclick="alert('Before')" value="Click me" />

<script>
  elem.onclick = function () {
    // overwrites the existing handler

    alert('After'); // only this After will be shown
  };
</script>
```

---

### What the reason for not using setAttribute for handlers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reason behind not using setAttribute for handlers is that attributes are always string, so the function will become a string instead of a function.
    </div>
  </div>
</details>

Example: This will not work!

```js
// a click on <body> will generate errors,

// because attributes are always strings, function becomes a string

document.body.setAttribute('onclick', function () {
  alert(1);
});
```

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

### Explain the function and syntax of the EventTarget addEventListener method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The EventTarget method addEventListener(event, target, options) sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).
    </div>
  </div>
</details>

**Syntax:**

```js
target.addEventListener(event, handler [, options]);

target.addEventListener(event, handler [, useCapture]);

target.addEventListener(event, handler [, useCapture, wantsUntrusted

      // This API has not been standardized.    

]); // Gecko/Mozilla only
```

Example:

```html
<input id="elem" type="button" value="Click me" />

<script>
  function handler1() {
    alert('Thanks!');
  }

  function handler2() {
    alert('Thanks again!');
  }

  elem.onclick = () => alert('Hello');

  elem.addEventListener('click', handler1); // Thanks!
  elem.addEventListener('click', handler2); // Thanks again!
</script>
```

---

### How should you remove a previously added event listener?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In order to remove a previously added event we must use the removeEventListener(event, handler) method. To remove a handler, we should pass the same function as was assigned. It should be noted, if we do not store the function in a variable, then we cannot remove it. There is no way to “read back” handlers assigned by addEventListener.
    </div>
  </div>
</details>

Example:

```html
<script>
  function handler() {
    alert('Thanks!');
  }

  input.addEventListener('click', handler);

  // ....

  input.removeEventListener('click', handler);
</script>
```

---

### Are there any events that cannot be assigned via a DOM property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there exist events that cannot be assigned via a DOM-property. Only with addEventListener. For instance, the DOMContentLoaded event, that triggers when the document is loaded, and DOM is built. The addEventListener method is more flexible in this case.
    </div>
  </div>
</details>

Example:

```js
// will never run

document.onDOMContentLoaded = function() {

    alert("DOM built");

// this way it works

document.addEventListener("DOMContentLoaded", function() {

    alert("DOM built");

});
```

---

### What is the event object used for in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event object can be used for a variety of different actions including get the event type, current target, and window relative coordinates of the current during point events. The event object can be called directly in HTML attributes or inside of our scripts.
    </div>
  </div>
</details>

Example:

```html
<!-- event.type returns the type of event (onclick: click) -->

<input type="button" onclick="alert(event.type)" value="Event type" />
```

---

### Are we limited to just function handler in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can assign not just a function, but also an object as an event handler using addEventListener. When an event occurs, the object handler method is invoked. We could also use a class as another approach.
    </div>
  </div>
</details>

Example: Regular Object

```html
<button id="elem">Click me</button>

<script>
  let obj = {
    handleEvent(event) {
      alert(event.type + ' at ' + event.currentTarget);
    },
  };

  elem.addEventListener('click', obj);
</script>
```

Example 2: Class

```html
<button id="elem">Click me</button>

<script>
  class Menu {
    handleEvent(event) {
      switch (event.type) {
        case 'mousedown':
          elem.innerHTML = 'Mouse button pressed';

          break;

        case 'mouseup':
          elem.innerHTML += '...and released.';

          break;
      }
    }
  }

  let menu = new Menu();

  elem.addEventListener('mousedown', menu);

  elem.addEventListener('mouseup', menu);
</script>
```

---
