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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ShadowEventsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Shadow DOM / Events | JavaScript Interview Questions</title>
</head>

**Web Components: Shadow DOM / Events**

<CloseAllAnswers />

---

### What is the difference between the Light DOM and the Shadow DOM in event retargeting?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Retargeting means that events that originate in the shadow DOM look like they come from the element itself. Event retargeting is excellent because the outer document does not have to know about component internals. You should note that retargeting does not occur if the event occurs on a slotted element that physically lives in the light DOM.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<user-card id="userCard">
  <span slot="username">John Smith</span>
</user-card>

<script>
  customElements.define(
    'user-card',
    class extends HTMLElement {
      connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `<div>
      <b>Name:</b> <slot name="username"></slot>
    </div>`;

        this.shadowRoot.firstElementChild.onclick = (e) =>
          alert('Inner target: ' + e.target.tagName);
      }
    }
  );

  userCard.onclick = (e) => alert(`Outer target: ${e.target.tagName}`);
</script>
```

  </div>
  </div>
</details>

---

### In the case of event bubbling, does it happen in the Shadow or Flattened DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We use the flattened DOM for purposes of event bubbling. So, if we have a slotted element, and an event occurs somewhere inside it, it bubbles up to the &#8249;slot&#8250; and upwards. With all the shadow elements, the full path to the original event target gets extracted using event.composedPath(). As we can see from the method's name, the path gets taken after the composition.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<user-card id="userCard">
  #shadow-root
  <div>
    <b>Name:</b>
    <slot name="username">
      <span slot="username">John Smith</span>
    </slot>
  </div>
</user-card>
```

  </div>
  </div>
</details>

---

### When the attachShadow method mode is set to closed, what happens to the shadow tree details?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the shadow tree gets created with &#123;mode: 'closed'&#125;, then the composed path starts from the host and upwards. That is similar to other methods that work with shadow DOM, and the Internals of the closed tree are hidden.
    </div>
  </div>
</details>

---

### Why is the flattened DOM, relative to the shadow DOM, used for event bubbling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We use the flattened DOM, giving us access to the full path necessary for event targeting. With all the shadow elements, the full path to the original event target gets extracted using event.composedPath(). As we can see from the method's name, the path gets taken after the composition.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the Event.composedPath() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The composedPath() method returns the event’s path, an array of the objects on which listeners invoke. This process does not include nodes in shadow trees if the shadow root gets created with its ShadowRoot.mode closed.
    </div><br />
    <strong>Syntax: </strong> let composed = Event.composedPath();<br /><br />
  </div>
</details>

---

### The majority of events pass across a shadow DOM boundary. In UI events, what attribute do we utilize to open the composition?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The composed event object property governs this process. If it is true, then the event crosses the boundary. Otherwise, it only can be caught from inside the shadow DOM. The read-only composed property returns a Boolean, which indicates whether the event propagates across the shadow DOM boundary into the standard DOM. Most UI Events have the composed property set to true in most cases.
    </div>
  </div>
</details>

---

### What steps are needed to dispatch custom events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we dispatch custom events, we need to set both bubbles and composed properties to true for it to bubble up and out of the component.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

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
      detail: 'not composed',
    })
  );
</script>
```

  </div>
  </div>
</details>

---
