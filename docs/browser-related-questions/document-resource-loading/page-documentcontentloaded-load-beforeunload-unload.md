---
title: Page LifeCycle
sidebar_position: 1
---

# Page Lifecycle

## DOMContentLoaded, load, beforeunload, unload

# JAVASCRIPT THEORY

**Questions and Answers: Document and resource loading**

**Document and resource loading: DOMContentLoaded, load, beforeunload, unload**

### What are the three important events in the lifecycle of an HTML page?

**Interview Answer:** The lifecycle of an HTML page has three important events including the DOMContentLoaded, load, and beforeunload/unload. DOMContentLoaded occurs when the browser fully loaded HTML, and the DOM tree is built, but external resources like pictures `<img>` and stylesheets may not yet have loaded. The load is not only HTML is loaded, but also all the external resources: images, styles etc. The beforeunload/unload state happens when the user is leaving the page.

Source: <https://javascript.info/onload-ondomcontentloaded>

### How are the DOMContentLoaded, load, beforeunload/unload events useful?

**Interview Answer:** Each of the HTML lifecycle events are useful in their own way. The DOMContentLoaded event is when the DOM is ready, so the handler can lookup DOM nodes, and initialize the interface. The load event is when external resources are loaded, so styles are applied, image sizes are known etc. The beforeunload event occurs when the user is leaving, we can check if the user saved the changes and ask them whether they really want to leave. The unload event occurs when the user has almost left, but we still can initiate some operations, such as sending out statistics.

Source: <https://javascript.info/onload-ondomcontentloaded>

### On what object does the DOMContentLoaded event occur?

**Interview Answer:** The DOMContentLoaded event happens on the document object. We must use addEventListener to catch it. There are a few peculiarities that can be noted when we try to solicit information before the page is completely loaded, like image sizes. The DOM loads first and then images and styles.

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

Source: <https://javascript.info/onload-ondomcontentloaded#domcontentloaded>

### What happens when the browser processes a document and comes across a `<script>` tag?

**Interview Answer:** When the browser processes an HTML-document and comes across a `<script>` tag, it needs to execute before continuing building the DOM. That’s a precaution, as scripts may want to modify DOM, and even document.write into it, so DOMContentLoaded has to wait. So DOMContentLoaded happens after such scripts.

Source: <https://javascript.info/onload-ondomcontentloaded#domcontentloaded-and-scripts>

### Are there any exceptions to script blocking of the DOMContentLoaded event?

**Interview Answer:** Yes, there are two exceptions to the rule. Scripts with the async attribute do not block DOMContentLoaded event. Scripts that are generated dynamically with document.createElement('script') and then added to the webpage also don’t block this event.

Source: <https://javascript.info/onload-ondomcontentloaded#domcontentloaded-and-scripts>

### Do external style sheets influence or effect the DOM?

**Interview Answer:** External style sheets do not affect DOM, so DOMContentLoaded does not wait for them. But there is a pitfall. If we have a script after the style, then that script must wait until the stylesheet loads. The reason for this is that the script may want to get coordinates and other style-dependent properties of elements. Naturally, it must wait for styles to load. As DOMContentLoaded waits for scripts, it now waits for styles before them as well.

Example:

```html
<link type="text/css" rel="stylesheet" href="style.css" />

<script>
  // the script doesn't not execute until the stylesheet is loaded

  alert(getComputedStyle(document.body).marginTop);
</script>
```

Source: <https://javascript.info/onload-ondomcontentloaded#domcontentloaded-and-styles>

### How does the built-in browser autofill interact with the DOMContentLoaded event?

**Interview Answer:** Firefox, Chrome, and Opera autofill forms on DOMContentLoaded. For instance, if the page has a form with login and password, and the browser remembered the values, then on DOMContentLoaded it may try to autofill them (if approved by the user). So if DOMContentLoaded is postponed by long-loading scripts, then autofill also awaits until the DOMContentLoaded event.

Source: <https://javascript.info/onload-ondomcontentloaded#built-in-browser-autofill>

### Explain the how the load event behaves via the onload property.\*\*

**Interview Answer:** The load event on the window object triggers when the whole page is loaded including styles, images, and other resources. This event is available via the onload property.

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

Source: <https://javascript.info/onload-ondomcontentloaded#window-onload>

### What event is triggered when a user leaves the browser page?

**Interview Answer:** When a visitor leaves the page, the unload event triggers on window.

Source: <https://javascript.info/onload-ondomcontentloaded#window-onunload>

### Is there reason that we should avoid using unload and beforeunload in conjunction with Navigator.sendBeacon method?

**Interview Answer:** In many situations, especially on mobile devices, the browser will not fire the unload, beforeunload, or pagehide events. For example, these events will not fire in the following situations. The user loads the page and interacts with it. When they are finished, they switch to a different app, instead of closing the tab. Later, they close the browser app using the phone's app manager. Additionally, the unload event is incompatible with the back/forward cache (bfcache) implemented in modern browsers. It is not recommended to use the unload event in conjunction with the sendBeacon method.

Source: <https://javascript.info/onload-ondomcontentloaded#window-onunload>

### What happens if we set the DOMContentLoaded handler after the document is loaded?

**Interview Answer:** Naturally, it never runs, because the page has already loaded.

Source: <https://javascript.info/onload-ondomcontentloaded#readystate>

### Is there a way to find the loading state of a document?

**Interview Answer:** Yes, we can check the loading state by invoking the document.readyState property. The Document.readyState property describes the loading state of the document. When the value of this property changes, a readystatechange event fires on the document object.

**Syntax:** let string = document.readyState;

Source: <https://javascript.info/onload-ondomcontentloaded#readystate>

### What are the three possible values of the readyState?

**Interview Answer:** The readyState can be one of three possible values including the loading, interactive, and complete states. The “loading state” is relative to the page still loading. The “interactive state” is when the document has finished loading and the document has been parsed but sub-resources such as scripts, images, stylesheets, and frames are still loading. The “complete state” happens when the document and all sub-resources have finished loading. The state indicates that the load event is about to fire.

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

Source: <https://javascript.info/onload-ondomcontentloaded#readystate>
