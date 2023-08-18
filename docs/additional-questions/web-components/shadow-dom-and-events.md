---
title: Shadow DOM / Events
description: Shadow DOM / Events are used to add event listeners to elements in Shadow DOM. They are used to add event listeners to elements in Shadow DOM.
sidebar_position: 7
sidebar_label: Shadow DOM / Events
keywords:
  - shadow dom
  - shadow dom events
  - event listeners
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
  - shadow dom
  - shadow dom events
  - event listeners
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ShadowEventsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Shadow DOM / Events | JavaScript Interview Questions</title>
</head>

**Web Components: Shadow DOM / Events**

---

<AdSense />

---

<CloseAllAnswers />

### What is the significance of Shadow DOM events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Shadow DOM events maintain component encapsulation by default, ensuring internal component interactions don't leak into the broader application, thus providing better modularity, reusability, and separation of concerns.
  </div>
  </div>
</details>

---

### How does event propagation work with the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Shadow DOM's event propagation has two phases: capture and bubbling. Events don't cross shadow boundaries in the capture phase but do in the bubbling phase. Event targets are retargeted to respect encapsulation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple example demonstrating event propagation with the Shadow DOM. In this example, a shadow root is attached to a custom element, and an event listener is added to the document to log clicks:

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';
    div.addEventListener('click', (e) => {
      console.log('Inside shadow DOM, original target: ', e.target);
      console.log('Inside shadow DOM, retargeted target: ', e.composedPath()[0]);
    });

    shadowRoot.appendChild(div);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Add event listener to document
document.addEventListener('click', (e) => {
  console.log('Outside shadow DOM, target: ', e.target);
});
```

When you click on the text "Click me!", the `click` event originates from the `div` inside the shadow tree. The event listener inside the shadow DOM logs the original target (`div`) and the retargeted target (`my-shadow-elem`), while the event listener attached to the document logs the retargeted target (`my-shadow-elem`). The retargeted target is the closest ancestor of the original target that is also an ancestor of the event listener, in this case, the custom element itself.

---

:::note
Note that, in this example, the `div` inside the shadow DOM is encapsulated and not exposed to the light DOM. The event propagation also respects the encapsulation provided by the Shadow DOM.
:::

  </div>
  </div>
</details>

---

### How can you listen to all events within a Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To listen to all events within a Shadow DOM, you can use the addEventListener method in conjunction with Event on the Shadow Root. It's important to note that you can't listen to every single event that might occur, but you can listen to a broad range of common ones.
  </div><br />
  <div><strong className="codeExample">Here's a simple code example:</strong><br /><br />

  <div></div>

```javascript
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';
    shadowRoot.appendChild(div);
    
    // Listen to a variety of events
    ['click', 'dblclick', 'keydown', 'keyup', 'mousemove'].forEach(eventType => {
      shadowRoot.addEventListener(eventType, (e) => {
        console.log(`Shadow DOM received ${eventType} event`);
      });
    });
  }
}

customElements.define('my-shadow-elem', MyShadowElem);

let elem = new MyShadowElem();
document.body.appendChild(elem);
```

In this example, we are listening to a variety of events including `click`, `dblclick`, `keydown`, `keyup`, and `mousemove`. When one of these events occurs within the Shadow DOM, a corresponding message will be logged to the console. If you want to listen to more events, you can add their types to the array.

  </div>
  </div>
</details>

---

### Can events be dispatched from within a shadow tree?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, events can be dispatched from within a shadow tree. However, by default, they don't cross shadow boundaries unless the `composed` flag is set to `true` in the event initialization.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';

    div.addEventListener('click', (e) => {
      console.log('Click event inside shadow DOM');
      let customEvent = new CustomEvent('custom', { 
        bubbles: true, 
        composed: true // allows the event to bubble across the shadow boundary
      });
      div.dispatchEvent(customEvent);
    });

    shadowRoot.appendChild(div);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Listen for custom event
document.addEventListener('custom', () => {
  console.log('Custom event received outside shadow DOM');
});
```

In this example, when you click on the text "Click me!", a custom event named 'custom' is dispatched. Since `composed: true` is set for the custom event, it is able to cross the shadow boundary and be caught by the event listener attached to the document.

  </div>
  </div>
</details>

---

### How can you make events bubble up outside the shadow root?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To make events bubble up outside the shadow root, when you create the event, you need to set the `bubbles` and `composed` properties to `true` in the event initialization object.
  </div>
  </div>
</details>

---

### How does event.target behave in a shadow tree?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a shadow tree, `event.target` gets retargeted to the shadow host when the event crosses the shadow boundary, maintaining the encapsulation provided by the Shadow DOM.
  </div>
  </div>
</details>

---

### What does event.currentTarget refer to in the context of Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `event.currentTarget` refers to the element that the listener is attached to. When dealing with Shadow DOM, `event.currentTarget` will be set to the host element of the shadow tree if the listener is attached to it.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';
    
    div.addEventListener('click', (e) => {
      console.log('Inside shadow DOM, currentTarget: ', e.currentTarget);
    });

    shadowRoot.appendChild(div);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Add event listener to custom element
elem.addEventListener('click', (e) => {
  console.log('Outside shadow DOM, currentTarget: ', e.currentTarget);
});
```

  </div>
  </div>
</details>

---

### How does the slotchange event work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `slotchange` event fires when the set of nodes distributed to a `&#60;slot&#62;` element changes. This enables tracking of dynamic content changes inside the shadow DOM's slot.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let slot = document.createElement('slot');
    
    slot.addEventListener('slotchange', (e) => {
      console.log('slotchange event fired');
      console.log('Assigned nodes:', slot.assignedNodes());
    });

    shadowRoot.appendChild(slot);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Add child to custom element
let child = document.createElement('div');
child.textContent = 'I am a child node.';
elem.appendChild(child);

// Remove child from custom element
elem.removeChild(child);
```

  </div>
  </div>
</details>

---

### Can you stop event propagation in a Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can stop event propagation in a Shadow DOM by calling `event.stopPropagation()`. However, this won't prevent the event from reaching the shadow host if `composed` is set to `true`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';
    
    div.addEventListener('click', (e) => {
      console.log('Click event inside shadow DOM');
      e.stopPropagation();  // Stops event propagation
    });

    shadowRoot.appendChild(div);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Add event listener to custom element
elem.addEventListener('click', (e) => {
  console.log('Click event outside shadow DOM');
});
```

  </div>
  </div>
</details>

---

### Can a click event in the Shadow DOM be captured by a click event listener in the main document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A click event in the Shadow DOM can be captured by a click event listener in the main document only if the event is configured with `composed: true`, allowing it to cross shadow boundaries.
  </div><br />
  <div><strong>Technical Response:</strong> Yes, a click event in the Shadow DOM can be captured by a click event listener in the main document, if the event is configured to be both `bubbling` and `composed`. By default, a `click` event is `bubbling`, but not `composed`, so you don't have to worry about it for standard events like `click`. However, for custom events or non-standard events, you will need to set `composed: true` for them to cross the shadow boundary.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';
    
    shadowRoot.appendChild(div);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Add event listener to document
document.addEventListener('click', (e) => {
  console.log('Click event captured outside shadow DOM');
});
```

In this example, when you click on the text "Click me!" inside the Shadow DOM, the click event bubbles up and crosses the shadow boundary, triggering the click event listener in the main document and logging "Click event captured outside shadow DOM" to the console.

  </div>
  </div>
</details>

---

### How does event.path differ from event.composedPath() in Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The event.path and event.composedPath() properties are used to get the list of elements that an event has propagated through. The difference between the two properties is that event.path includes nodes in shadow trees, while event.composedPath() does not.
  </div><br />
  <div><strong>Technical Details:</strong> In Shadow DOM, a shadow root is a virtual DOM that is separate from the main DOM. This allows developers to encapsulate custom components and their styles. When an event propagates through a shadow tree, it does not propagate through the main DOM. This means that the event.path property will include nodes in the shadow tree, while the event.composedPath() property will not.
  </div>
  </div>
</details>

---

### What does the shadowRoot property do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `shadowRoot` property returns the shadow root that is hosted by the element, or `null` if no shadow root is present. This property gives you access to the Shadow DOM of an element so you can interact with it.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<div>Content inside shadow DOM</div>';
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Access Shadow DOM via shadowRoot
let shadow = elem.shadowRoot;
console.log(shadow.innerHTML);  // Logs: '<div>Content inside shadow DOM</div>'
```

  </div>
  </div>
</details>

---

### Can you catch events from a closed Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can catch events from a closed Shadow DOM as they bubble up and cross the shadow boundary.
  </div>
  </div>
</details>

---

### How do the relatedTarget and target properties differ in Shadow DOM event context?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In the Shadow DOM event context, event.target is the original target of the event, while event.relatedTarget refers to a secondary target, like the element the mouse moved from/to.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    let span = document.createElement('span');
    
    div.textContent = 'Hover over me!';
    span.textContent = ' I am here!';
    
    div.addEventListener('mouseover', (e) => {
      console.log('mouseover event inside shadow DOM, target: ', e.target);
      console.log('mouseover event inside shadow DOM, relatedTarget: ', e.relatedTarget);
    });

    shadowRoot.appendChild(div);
    shadowRoot.appendChild(span);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);
```

In this example, a `mouseover` event listener is attached to a `div` element inside the Shadow DOM of a custom element. When you hover over the `div`, `event.target` is the `div` that the mouse moved onto, and `event.relatedTarget` is the element that the mouse moved away from, which can be either the `span` in the Shadow DOM or any element in the Light DOM.

  </div>
  </div>
</details>

---

### What does 'retargeting' mean in the context of Shadow DOM events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In event retargeting, the Light DOM maintains original event targets, while the Shadow DOM changes event targets to the shadow host when events cross shadow boundaries, aiding encapsulation.
    </div><br />
  <div><strong>Technical Details:</strong> Retargeting means that events that originate in the shadow DOM look like they come from the element itself. Event retargeting is excellent because the outer document does not have to know about component internals. You should note that retargeting does not occur if the event occurs on a slotted element that physically lives in the light DOM.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example with a custom element that uses Shadow DOM:

```javascript
// Define a custom element
class MyElement extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<button id="shadowButton">Click me</button>`;
    }
}

customElements.define('my-element', MyElement);

document.body.innerHTML = `<my-element></my-element><button id="lightButton">Click me too</button>`;

document.querySelector("#lightButton").addEventListener("click", function(event) {
    console.log("Light DOM target: " + event.target.id); // This will log "lightButton"
});

document.querySelector("my-element").shadowRoot.querySelector("#shadowButton").addEventListener("click", function(event) {
    console.log("Shadow DOM target: " + event.target.id); // This will log "shadowButton"
});

```

In this code, the light DOM event target will point directly to the lightButton, whereas in the Shadow DOM, the event target will point to the shadowButton within the custom "my-element".

  </div>
  </div>
</details>

---

### In the case of event bubbling, does it happen in the Shadow or Flattened DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event bubbling in web components occurs in the Flattened DOM. The events bubble up, but when they cross shadow boundaries, the target is adjusted to maintain the encapsulation provided by Shadow DOM.
    </div><br />
  <div><strong>Technical Details:</strong> We use the flattened DOM for purposes of event bubbling. So, if we have a slotted element, and an event occurs somewhere inside it, it bubbles up to the &#8249;slot&#8250; and upwards. With all the shadow elements, the full path to the original event target gets extracted using event.composedPath(). As we can see from the method's name, the path gets taken after the composition.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Let's illustrate with a button inside a shadow DOM, and see how its click event bubbles up to the light DOM:

```javascript
// Define a custom element
class MyElement extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<button id="shadowButton">Click me</button>`;
    }
}

customElements.define('my-element', MyElement);

document.body.innerHTML = `<my-element id="myEl"></my-element>`;

// Event listener in Light DOM
document.querySelector("#myEl").addEventListener("click", function(event) {
    console.log("Event target in the Flattened DOM: " + event.target.tagName); // This will log "MY-ELEMENT"
});

```

In this example, even though the button is clicked inside the shadow DOM, the event bubbles up to the light DOM. When it crosses the shadow boundary, the event target is retargeted to the shadow host ("MY-ELEMENT"), preserving encapsulation.

  </div>
  </div>
</details>

---

### When the attachShadow method mode is set to closed, what happens to the shadow tree details?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the `attachShadow` method's mode is set to `closed`, the shadow root becomes inaccessible from the outside of the shadow tree. In other words, you won't be able to use `element.shadowRoot` to get a reference to the shadow root. The shadow tree becomes fully encapsulated.
    </div><br/>
  <div><strong>Technical Details:</strong> If the shadow tree gets created with &#123;mode: 'closed'&#125;, then the composed path starts from the host and upwards. That is similar to other methods that work with shadow DOM, and the Internals of the closed tree are hidden.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example:

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'closed' });
    this.shadowRoot.innerHTML = '<div>Content inside shadow DOM</div>';
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Try to access Shadow DOM via shadowRoot
let shadow = elem.shadowRoot;
console.log(shadow);  // Logs: null
```

In this example, a shadow root is attached to a custom element in 'closed' mode. Despite the fact that the `shadowRoot` property is used to attempt to access the Shadow DOM, it logs `null` to the console because the Shadow DOM is fully encapsulated and not accessible from the outside when its mode is 'closed'.

  </div>
  </div>
</details>

---

### Why is the flattened DOM, relative to the shadow DOM, used for event bubbling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Flattened DOM is used for event bubbling to preserve the encapsulation provided by the Shadow DOM, ensuring events appear as if they are coming from the hosting element.
    </div><br/>
  <div><strong>Technical Response:</strong> Event bubbling in the Shadow DOM uses the flattened DOM (also known as the composed tree) to ensure events can still propagate upwards to ancestor elements even when they originate from inside a shadow tree. This maintains the encapsulation provided by the Shadow DOM while still allowing interaction with the broader document.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Define custom element
class MyShadowElem extends HTMLElement {
  constructor() {
    super();

    let shadowRoot = this.attachShadow({ mode: 'open' });
    let div = document.createElement('div');
    div.textContent = 'Click me!';
    
    shadowRoot.appendChild(div);
  }
}

// Define custom element
customElements.define('my-shadow-elem', MyShadowElem);

// Add element to body
let elem = new MyShadowElem();
document.body.appendChild(elem);

// Add event listener to document
document.addEventListener('click', (e) => {
  console.log('Click event captured in document');
});
```

In this example, if you click on the text "Click me!" inside the shadow DOM, the `click` event bubbles up through the shadow tree, then continues to bubble up through the flattened DOM. As a result, the click event listener in the document is triggered, and "Click event captured in document" is logged to the console.

Without event bubbling using the flattened DOM, the event would stop at the shadow root and would not reach the document, making it impossible for the main document to react to the event.

  </div>
  </div>
</details>

---

### Can you explain the function of the Event.composedPath() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Event.composedPath() method returns an array of the objects on which listeners will be invoked when an event is propagating, from the event target through the shadow host to Window, respecting shadow boundaries and encapsulation.
    </div><br />
    <strong>Syntax: </strong> let composed = Event.composedPath();<br /><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.querySelector("html").addEventListener("click", (e) => {
  console.log(e.composed);
  console.log(e.composedPath());
});
```

  </div>
  </div>
</details>

---

### The majority of events pass across a shadow DOM boundary. In UI events, what attribute do we utilize to open the composition?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For UI events to pass across a shadow DOM boundary, we use the `composed` attribute in the event initialization. When set to `true`, the event can bubble out of the shadow DOM into the light DOM.
    </div><br/>
  <div><strong>Technical Response:</strong> The composed event object property governs this process. If it is true, then the event crosses the boundary. Otherwise, it only can be caught from inside the shadow DOM. The read-only composed property returns a Boolean, which indicates whether the event propagates across the shadow DOM boundary into the standard DOM. Most UI Events have the composed property set to true in most cases.
    </div>
  </div>
</details>

---

### What steps are needed to dispatch custom events in the Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we dispatch custom events, we need to set both bubbles and composed properties to true for it to bubble up and out of the component. To dispatch custom events in the Shadow DOM, you create a new event using `new CustomEvent(eventName, options)`, ensure `options.bubbles` and `options.composed` are set to `true`, and then call `element.dispatchEvent(event)`.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of dispatching a custom event in the Shadow DOM:

```javascript
// Define a custom element
class MyElement extends HTMLElement {
    constructor() {
        super();
        // Attach a shadow root to the element.
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<button id="shadowButton">Click me</button>`;

        shadowRoot.querySelector("#shadowButton").addEventListener('click', () => {
            // Create and dispatch a custom event
            let customEvent = new CustomEvent('customClick', { bubbles: true, composed: true });
            shadowRoot.dispatchEvent(customEvent);
        });
    }
}

customElements.define('my-element', MyElement);

document.body.innerHTML = `<my-element></my-element>`;

document.querySelector('my-element').addEventListener('customClick', function(event) {
    console.log("Custom event received in the light DOM");
});
```

In this code, when the button in the shadow DOM is clicked, a `customClick` event is dispatched. Due to the `composed: true` option, this event bubbles out of the shadow DOM, and the listener in the light DOM can catch it.

  </div>
  </div>
</details>

---
