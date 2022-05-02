---
title: Page Lifecycle
description: Page Lifecycle in JavaScript is a set of events that occur when a page is loaded. They are triggered by the browser. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Page Lifecycle
keywords:
  - page lifecycle events
  - page lifecycle
  - beforeunload
  - load
  - unload
  - page load
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
  - page lifecycle events
  - page lifecycle
  - beforeunload
  - interview answers
  - interview questions
---

<head>
  <title>Page Lifecycle in JavaScript | Frontend Interview Answers</title>
</head>

**Document / Resource Loading: Page Lifecycle**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What are the three crucial events in the lifecycle of an HTML page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The lifecycle of an HTML page has three critical events, including the DOMContentLoaded, load, and beforeunload/unload. DOMContentLoaded occurs when the browser fully loads HTML, and the DOM tree completely builds, but external resources like pictures &#8249;img&#8250; and stylesheets may not yet have loaded. The load is not only HTML is loaded but also all the external resources: images, styles, and others. The beforeunload/unload state happens when the user is leaving the page.
    </div>
  </div>
</details>

---

### How are the DOMContentLoaded, load, beforeunload/unload events useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each HTML lifecycle event is helpful in its way. The DOMContentLoaded event is when the DOM is ready, so the handler can lookup DOM nodes and initialize the interface. The load event is when external resources are loaded, so styles are applied and image sizes are known. The beforeunload event occurs when the user is leaving, we can check if the user saved the changes and ask them whether they want to leave. The unload event occurs when the user has almost left, but we still can initiate some operations, such as sending out statistics.
    </div>
  </div>
</details>

---

### On what object does the DOMContentLoaded event occur?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The DOMContentLoaded event happens on the document object, and we must use addEventListener to catch it. We should note a few peculiarities when we try to solicit information before the page is completely loaded, like image sizes, and the DOM loads first and then images and styles.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  function ready() {
    alert('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener('DOMContentLoaded', ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />
```

  </div>
  </div>
</details>

---

### What happens when the browser processes a document and comes across a `<script>` tag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the browser is processing an HTML page and encounters a &#8249;script&#8250; tag, it must execute it before continuing to create the DOM. This measure is a precaution since scripts may seek to change the DOM and even document.write into it, forcing DOMContentLoaded to wait. As a result, DOMContentLoaded occurs after such scripts.
    </div>
  </div>
</details>

---

### Are there any exceptions to script blocking of the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two exceptions to the rule. Scripts with the async attribute do not block DOMContentLoaded event. Scripts generate dynamically with the `document.createElement('script')` method and then added to the webpage; don’t block this event.
    </div>
  </div>
</details>

---

### Do external style sheets influence or affect the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> External style sheets do not affect DOM, so DOMContentLoaded does not wait for them. But there is a pitfall. If we have a script after the style, that script must wait until the stylesheet loads. This behavior happens because the script may need coordinates and other style-dependent properties of elements. Naturally, it must wait for styles to load. As DOMContentLoaded waits for scripts, it now waits for styles before them.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<link type="text/css" rel="stylesheet" href="style.css" />
<script>
  // the script doesn't not execute until the stylesheet is loaded
  alert(getComputedStyle(document.body).marginTop);
</script>
```

  </div>
  </div>
</details>

---

### How does the built-in browser autofill interact with the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Firefox, Chrome, and Opera autofill forms on DOMContentLoaded. For instance, if the page has a form with login and password, and the browser remembered the values, then on DOMContentLoaded it may try to autofill them (if approved by the user). So if long-loading scripts postpone DOMContentLoaded, then autofill also awaits until the DOMContentLoaded event.
    </div>
  </div>
</details>

---

### Can you explain how the load event behaves via the onload property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The load event on the window object triggers when the whole page is loaded, including styles, images, and other resources. This event is available via the onload property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  window.onload = function () {
    // same as window.addEventListener('load', (event) => {
    alert('Page loaded');

    // image is loaded at this time
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />
```

  </div>
  </div>
</details>

---

### What event is triggered when a user leaves the browser page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a visitor leaves the page, the unload event triggers on the window.
    </div>
  </div>
</details>

---

### Is there a reason we should avoid using unload and beforeunload in conjunction with Navigator.sendBeacon method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In many situations, especially on mobile devices, the browser does not fire the unload, beforeunload, or pagehide events. For example, these events do not fire in the following situations. The user loads the page and interacts with it. When they complete, they switch to a different app instead of closing the tab. Later, they close the browser app using the phone's app manager. Additionally, the unload event is incompatible with modern browsers' back/forward cache (bfcache). Using the unload event in conjunction with the sendBeacon method is not recommended.
    </div>
  </div>
</details>

---

### What happens if we set the DOMContentLoaded handler after the document is loaded?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Naturally, it never runs because the page has already loaded.
    </div>
  </div>
</details>

---

### Is there a way to find the document loading state?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can check the loading state by invoking the `document.readyState` property. The `document.readyState` property describes the loading state of the document. When the value of this property changes, a readystatechange event fires on the document object.
    </div><br />
    <strong>Syntax: </strong> let string = document.readyState;<br /><br />
  </div>
</details>

---

### What are the three possible values of the readyState?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The readyState can be one of three possible values, including the loading, interactive, and complete states. The “loading state” is relative to the page still loading. The “interactive state” is when the document has finished loading and parses, but sub-resources such as scripts, images, stylesheets, and frames are still loading. The “complete state” happens when the document and sub-resources have finished loading, and the state indicates that the load event is about to fire.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> let string = document.readyState;<br /><br />

  <div></div>

```js
function work() {
  /*...*/
}

if (document.readyState == 'loading') {
  // still loading, wait for the event
  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!
  work();
}
```

  </div>
  </div>
</details>

---
