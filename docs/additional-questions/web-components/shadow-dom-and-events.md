---
title: Shadow DOM / Events
sidebar_position: 7
---

# Shadow DOM / Events

**Web Components: Shadow DOM / Events**

<head>
  <title>Shadow DOM / Events - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is event retargeting in relation to the Light DOM and Shadow DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Basically, retargeting means that events that originate in the shadow DOM look like they come from the element itself. Event retargeting is a great thing to have because the outer document does not have to know about component internals. It should be noted, retargeting does not occur if the event occurs on a slotted element, that physically lives in the light DOM.
    </div>
  </div>
</details>

Code Example:

```html
<user-card id="userCard">
  <span slot="username">John Smith</span>
</user-card>

<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `<div>

        <b>Name:</b> <slot name="username"></slot>

      </div>`;

        this.shadowRoot.firstElementChild.onclick = (e) =>
          alert('Inner target: ' + e.target.tagName);
      }
    }
  );

  userCard.onclick = (e) => alert(`Outer target: ${e.target.tagName}`);
</script>
```

Source: <https://javascript.info/shadow-dom-events>

### In the case of event bubbling, does it happen in the Shadow or Flattened DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For purposes of event bubbling, flattened DOM is used. So, if we have a slotted element, and an event occurs somewhere inside it, then it bubbles up to the &#8249;slot&#8250; and upwards. The full path to the original event target, with all the shadow elements, can be obtained using event.composedPath(). As we can see from the name of the method, that path is taken after the composition.
    </div>
  </div>
</details>

Code Example:

```html
<user-card id="userCard">
  #shadow-root

  <div>
    <b>Name:</b>

    <slot name="username">
      <span slot="username">John Smith</span>
    </slot>
  </div>
</user-card>
```

Source: <https://javascript.info/shadow-dom-events#bubbling-event-composedpath>

### When the attachShadow method mode is set to closed, what happens to the shadow tree details?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the shadow tree was created with &#123;mode: 'closed'&#125;, then the composed path starts from the host and upwards. That is the similar principle as for other methods that work with shadow DOM. Internals of closed trees are completely hidden.
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom-events>

### Why is the flattened DOM, relative to the shadow DOM, used for event bubbling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The flattened DOM is used because it gives us access to the full path necessary to for event targeting. The full path to the original event target, with all the shadow elements, can be obtained using event.composedPath(). As we can see from the name of the method, that path is taken after the composition.
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom-events#bubbling-event-composedpath>

### Explain the function and syntax of the Event.composedPath() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The composedPath() method returns the event’s path which is an array of the objects on which listeners will be invoked. This does not include nodes in shadow trees if the shadow root was created with its ShadowRoot.mode closed.
    </div>
  </div>
</details>

**Syntax:** let composed = Event.composedPath()

Source: <https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath>

### Most events bubble through a shadow DOM boundary. What property is used to open composition in UI events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> This is governed by the composed event object property. If it is true, then the event does cross the boundary. Otherwise, it only can be caught from inside the shadow DOM. The read-only composed property returns a Boolean which indicates whether the event will propagate across the shadow DOM boundary into the standard DOM. Most UI Events have the composed property set to true.
    </div>
  </div>
</details>

Source: <https://javascript.info/shadow-dom-events#event-composed>

### What steps are needed to dispatch custom events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we dispatch custom events, we need to set both bubbles and composed properties to true for it to bubble up and out of the component.
    </div>
  </div>
</details>

Code Example:

```html
<div id="outer"></div>

<script>
  outer.attachShadow({ mode: 'open' });

  let inner = document.createElement('div');

  outer.shadowRoot.append(inner);

  /*

div(id=outer)

    #shadow-dom

      div(id=inner)

*/

  document.addEventListener('test', (event) => alert(event.detail));

  inner.dispatchEvent(
    new CustomEvent('test', {
      bubbles: true,

      composed: true,

      detail: 'composed',
    })
  );

  inner.dispatchEvent(
    new CustomEvent('test', {
      bubbles: true,

      composed: false,

      detail: 'not composed',
    })
  );
</script>
```

Source: <https://javascript.info/shadow-dom-events#custom-events>
