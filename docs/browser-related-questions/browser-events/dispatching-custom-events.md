---
title: Dispatching Custom Events
description: Dispatching Custom Events in JavaScript - JavaScript Interview Questions & Answers
sidebar_position: 5
sidebar_label: Dispatching Custom Events
---

**Browser Events: Dispatching Custom Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you explain the function and syntax of the Event constructor?

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

### Explain the function and syntax of the dispatchEvent() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> After an event object gets created, we should “run” it on an element using the call elem.dispatchEvent(event). Then handlers react to it as if it were a regular browser event. If the event was created with the bubbles flag, it bubbles up.
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

### What is the distinction between creating a new Event and creating a new CustomEvent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CustomEvent provides the unique detail field to evade conflicts with other event properties. In this case, it is the recommended approach. Besides, the event class describes “what kind of event” it is, and if the event is custom, we should use CustomEvent to be clear about it.</div><br />
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
  <div><strong>Interview Response:</strong> Yes, you can use event.preventDefault as you would with a regular Event. By calling event.preventDefault(), an event handler may signal that those actions should get canceled. In that case, the call to elem.dispatchEvent(event) returns false. And the code that dispatched it knows that it should not continue. Please note: the event must have the flag cancelable: true, otherwise the call event.preventDefault() is ignored.
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
  <div><strong>Interview Response:</strong> Nested events are handled synchronously by default. Usually, events get processed in a queue. If the browser is processing onclick and a new event occurs, e.g., the mouse moved, then handling is queued up, corresponding mousemove handlers call after onclick processing finishes. The notable exception is when one event is initiated from within another, e.g., using dispatchEvent. Such events are processed immediately: new event handlers get called, and the current handling is resumed. However, you can implement asynchronous behavior explicitly by using setTimeout method.
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
