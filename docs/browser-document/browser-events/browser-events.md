---
title: Browser Events
sidebar_position: 1
---

# Browser Events

**Questions and Answers: Introduction to Events**

**Introduction to Events: Introduction to browser Events**

**Question:** **What is an event in relation to the DOM, Browser, and JavaScript?**

**Interview Answer:** An event is a signal that something has happened. All DOM nodes generate such signals (but events are not limited to DOM).

Source: <https://javascript.info/introduction-browser-events>

**Question:** **Can you name at least three DOM events?**

**Interview Answer:** There several DOM events including mouse, keyboard, form element, document, and css events. The most common is mouse and keyboard events, like mouse click and keyboard keydown events.

Source: <https://javascript.info/introduction-browser-events>

**Question:** **What is a JavaScript event handler?**

**Interview Answer:** A JavaScript event handler is a function that runs in case of an event. Handlers are a way to run JavaScript code in case of user actions. There are several ways to assign a handler.

Source: <https://javascript.info/introduction-browser-events#event-handlers>

**Question:** **Can you execute an event in a HTML attribute?**

**Interview Answer:** An event handler can be set in HTML with an attribute named `on<event>`. The onevent handlers are properties on certain DOM elements to manage how that element reacts to events. The onevent handler is usually named with the event it reacts to, like onclick, onkeypress, onfocus, etc.

**Technical Answer:** An event handler can be set in HTML with an attribute named `on<event>`. The onevent handlers are properties on certain DOM elements to manage how that element reacts to events. Elements can be interactive (links, buttons, images, forms, and so forth) or non-interactive (such as the base `<body>` element). The onevent handler is usually named with the event it reacts to, like onclick, onkeypress, onfocus, etc. You can specify an on<…> event handler for a particular event (such as click) for a given object in different ways. An HTML-attribute is not a convenient place to write a lot of code. So, it is recommended to write an event handler. As we know, HTML attribute names are not case-sensitive, so ONCLICK works as well as onClick and onCLICK… But usually attributes are lowercased: onclick.

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

Source: <https://javascript.info/introduction-browser-events#html-attribute>

**Question:** **Is there a way to assign a handler to an `on<event>` DOM property?**

**Interview Answer:** Yes, we can assign a handler using a DOM property `on<event>`. If the handler is assigned using an HTML-attribute then the browser reads it, creates a new function from the attribute content and writes it to the DOM property. This is actually similar to using a function as an event handler, but it’s just a little less direct.

Example:

```html
<input id="elem" type="button" value="Click me" />

<script>
  elem.onclick = function () {
    alert('Thank you');
  };
</script>
```

Source: <https://javascript.info/introduction-browser-events#dom-property>

**Question:** **Can use an event more the once on a DOM element?**

**Interview Answer:** No not directly, the second event will overwrite the existing event and return the second value. We should have to implement an event listener if we intend to add more than one handler.

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

Source: <https://javascript.info/introduction-browser-events#dom-property>

**Question:** **What the reason for not using setAttribute for handlers?**

**Interview Answer:** The reason behind not using setAttribute for handlers is that attributes are always string, so the function will become a string instead of a function.

Example: This will not work!

```js
// a click on <body> will generate errors,

// because attributes are always strings, function becomes a string

document.body.setAttribute('onclick', function () {
  alert(1);
});
```

Source: <https://javascript.info/introduction-browser-events#possible-mistakes>

**Question:** **Are DOM properties names case-sensitive or case-insensitive?**

**Interview Answer:** DOM property names are case-sensitive. We should assign a handler to elem.onclick, not elem.ONCLICK.

Source: <https://javascript.info/introduction-browser-events#possible-mistakes>

**Question:** **Explain the function and syntax of the EventTarget addEventListener method.**

**Interview Answer:** The EventTarget method addEventListener(event, target, options) sets up a function that will be called whenever the specified event is delivered to the target. Common targets are Element, Document, and Window, but the target may be any object that supports events (such as XMLHttpRequest).

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

Source: <https://javascript.info/introduction-browser-events#addeventlistener>

**Question:** **How should you remove a previously added event listener?**

**Interview Answer:** In order to remove a previously added event we must use the removeEventListener(event, handler) method. To remove a handler, we should pass the same function as was assigned. It should be noted, if we do not store the function in a variable, then we cannot remove it. There is no way to “read back” handlers assigned by addEventListener.

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

Source: <https://javascript.info/introduction-browser-events#addeventlistener>

**Question:** **Are there any events that cannot be assigned via a DOM property?**

**Interview Answer:** Yes, there exist events that cannot be assigned via a DOM-property. Only with addEventListener. For instance, the DOMContentLoaded event, that triggers when the document is loaded, and DOM is built. The addEventListener method is more flexible in this case.

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

Source: <https://javascript.info/introduction-browser-events#addeventlistener>

**Question:** **What is the event object used for in JavaScript?**

**Interview Answer:** The event object can be used for a variety of different actions including get the event type, current target, and window relative coordinates of the current during point events. The event object can be called directly in HTML attributes or inside of our scripts.

Example:

```html
<!-- event.type returns the type of event (onclick: click) -->

<input type="button" onclick="alert(event.type)" value="Event type" />
```

Source: <https://javascript.info/introduction-browser-events#event-object>

**Question:** **Are we limited to just function handler in JavaScript?**

**Interview Answer:** We can assign not just a function, but also an object as an event handler using addEventListener. When an event occurs, the object handler method is invoked. We could also use a class as another approach.

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

Source: <https://javascript.info/introduction-browser-events#object-handlers-handleevent>
