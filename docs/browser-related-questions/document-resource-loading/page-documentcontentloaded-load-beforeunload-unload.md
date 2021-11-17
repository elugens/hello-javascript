---
title: Page LifeCycle
sidebar_position: 1
---

# Page Lifecycle

**Document / Resource Loading: Page Lifecycle**

<head>
  <title>Page Lifecycle - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What are the three important events in the lifecycle of an HTML page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The lifecycle of an HTML page has three important events including the DOMContentLoaded, load, and beforeunload/unload. DOMContentLoaded occurs when the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures &#8249;img&#8250; and stylesheets may not yet have loaded. The load is not only HTML is loaded, but also all the external resources: images, styles etc. The beforeunload/unload state happens when the user is leaving the page.
    </div>
  </div>
</details>

---

### How are the DOMContentLoaded, load, beforeunload/unload events useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Each of the HTML lifecycle events are useful in their own way. The DOMContentLoaded event is when the DOM is ready, so the handler can lookup DOM nodes, and initialize the interface. The load event is when external resources are loaded, so styles are applied, image sizes are known etc. The beforeunload event occurs when the user is leaving, we can check if the user saved the changes and ask them whether they really want to leave. The unload event occurs when the user has almost left, but we still can initiate some operations, such as sending out statistics.
    </div>
  </div>
</details>

---

### On what object does the DOMContentLoaded event occur?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The DOMContentLoaded event happens on the document object. We must use addEventListener to catch it. There are a few peculiarities that can be noted when we try to solicit information before the page is completely loaded, like image sizes. The DOM loads first and then images and styles.
    </div>
  </div>
</details>

Example:

```html
<script>
  function ready() {
    alert('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0

    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener('DOMContentLoaded', ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />
```

---

### What happens when the browser processes a document and comes across a `<script>` tag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When the browser processes an HTML-document and comes across a &#8249;script&#8250; tag, it needs to execute before continuing building the DOM. That’s a precaution, as scripts may want to modify DOM, and even document.write into it, so DOMContentLoaded has to wait. So DOMContentLoaded happens after such scripts.
    </div>
  </div>
</details>

---

### Are there any exceptions to script blocking of the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two exceptions to the rule. Scripts with the async attribute do not block DOMContentLoaded event. Scripts that are generated dynamically with document.createElement('script') and then added to the webpage also don’t block this event.
    </div>
  </div>
</details>

---

### Do external style sheets influence or effect the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> External style sheets do not affect DOM, so DOMContentLoaded does not wait for them. But there is a pitfall. If we have a script after the style, then that script must wait until the stylesheet loads. The reason for this is that the script may want to get coordinates and other style-dependent properties of elements. Naturally, it must wait for styles to load. As DOMContentLoaded waits for scripts, it now waits for styles before them as well.
    </div>
  </div>
</details>

Example:

```html
<link type="text/css" rel="stylesheet" href="style.css" />

<script>
  // the script doesn't not execute until the stylesheet is loaded

  alert(getComputedStyle(document.body).marginTop);
</script>
```

---

### How does the built-in browser autofill interact with the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Firefox, Chrome, and Opera autofill forms on DOMContentLoaded. For instance, if the page has a form with login and password, and the browser remembered the values, then on DOMContentLoaded it may try to autofill them (if approved by the user). So if DOMContentLoaded is postponed by long-loading scripts, then autofill also awaits until the DOMContentLoaded event.
    </div>
  </div>
</details>

---

### Explain the how the load event behaves via the onload property.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The load event on the window object triggers when the whole page is loaded including styles, images, and other resources. This event is available via the onload property.
    </div>
  </div>
</details>

Code Example:

```html
<script>
  window.onload = function () {
    // same as window.addEventListener('load', (event) => {

    alert('Page loaded');

    // image is loaded at this time

    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />
```

---

### What event is triggered when a user leaves the browser page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a visitor leaves the page, the unload event triggers on window.
    </div>
  </div>
</details>

---

### Is there reason that we should avoid using unload and beforeunload in conjunction with Navigator.sendBeacon method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In many situations, especially on mobile devices, the browser will not fire the unload, beforeunload, or pagehide events. For example, these events will not fire in the following situations. The user loads the page and interacts with it. When they are finished, they switch to a different app, instead of closing the tab. Later, they close the browser app using the phone's app manager. Additionally, the unload event is incompatible with the back/forward cache (bfcache) implemented in modern browsers. It is not recommended to use the unload event in conjunction with the sendBeacon method.
    </div>
  </div>
</details>

---

### What happens if we set the DOMContentLoaded handler after the document is loaded?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Naturally, it never runs, because the page has already loaded.
    </div>
  </div>
</details>

---

### Is there a way to find the loading state of a document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can check the loading state by invoking the document.readyState property. The Document.readyState property describes the loading state of the document. When the value of this property changes, a readystatechange event fires on the document object.
    </div>
  </div>
</details>

**Syntax:** let string = document.readyState;

---

### What are the three possible values of the readyState?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The readyState can be one of three possible values including the loading, interactive, and complete states. The “loading state” is relative to the page still loading. The “interactive state” is when the document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets, and frames are still loading. The “complete state” happens when the document and all sub-resources have finished loading. The state indicates that the load event is about to fire.
    </div>
  </div>
</details>

**Syntax:** let string = document.readyState;

Code Example:

```js
function work() {
  /* ... */
}

if (document.readyState == 'loading') {
  // still loading, wait for the event

  document.addEventListener('DOMContentLoaded', work);
} else {
  // DOM is ready!

  work();
}
```

---
