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

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/PageSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Page Lifecycle in JavaScript | Frontend Interview Answers</title>
</head>

**Document / Resource Loading: Page Lifecycle**

<CloseAllAnswers />

---

### What are the three crucial events in the lifecycle of an HTML page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The lifecycle of an HTML page has three critical events, including the DOMContentLoaded, load, and beforeunload/unload. DOMContentLoaded occurs when the browser fully loads HTML, and the DOM tree completely builds, but external resources like pictures &#8249;img&#8250; and stylesheets may not yet have loaded. The load is not only HTML is loaded but also all the external resources: images, styles, and others. The beforeunload/unload state happens when the user is leaving the page.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The three crucial events in the lifecycle of an HTML page are:

1. Loading the HTML: This occurs when the browser requests the page from the server. The server then sends the HTML content to the browser.

2. DOMContentLoaded: This event occurs when the browser finishes parsing the HTML of the page, creating the Document Object Model (DOM).

3. Load: This event is fired when the page has been fully loaded, including all scripts, stylesheets, images, and other resources.

Here is a simple JavaScript example that demonstrates these three events:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Lifecycle Events</title>
        <style>
            body {
                font-family: Arial, sans-serif;
            }
        </style>
        <script>
            document.onreadystatechange = function () {
                if (document.readyState === "interactive") {
                    console.log("HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.");
                }
                else if (document.readyState === "complete") {
                    console.log("The page and all related resources such as stylesheets and images have been completely loaded.");
                }
            }

            document.addEventListener("DOMContentLoaded", function() {
                console.log("DOM fully loaded and parsed");
            });

            window.addEventListener("load", function() {
                console.log("All resources have finished loading!");
            });
        </script>
    </head>
    <body>
        <h1>Welcome to my website!</h1>
        <img src="example.jpg" alt="Example image">
    </body>
</html>
```

Output:

```html
"HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading."
"DOM fully loaded and parsed"
"The page and all related resources such as stylesheets and images have been completely loaded."
"All resources have finished loading!"
```

In this example, the `readystatechange` event listener is used to detect the interactive and complete states, which correspond to the HTML loading event and the Load event, respectively. The `DOMContentLoaded` event listener is used to detect when the DOM is fully loaded and parsed.

---

:::ntoe
Note that the `window.onload` event won't fire until all resources (e.g., images, stylesheets) have finished loading, not just the DOM.
:::

  </div>
  </div>
</details>

---

### How are the DOMContentLoaded, load, beforeunload/unload events useful?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> DOMContentLoaded is used when initial HTML is fully loaded and parsed, enabling early interaction. Load event fires when all resources are loaded. beforeunload/unload events allow cleanup or confirmation before leaving a page.
    </div><br/>
  <div><strong>Technical Response:</strong> Each HTML lifecycle event is helpful in its way. The DOMContentLoaded event is when the DOM is ready, so the handler can lookup DOM nodes and initialize the interface. The load event is when external resources are loaded, so styles are applied and image sizes are known. The beforeunload event occurs when the user is leaving, we can check if the user saved the changes and ask them whether they want to leave. The unload event occurs when the user has almost left, but we still can initiate some operations, such as sending out statistics.
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

### What happens when the browser processes a document and comes across a '&#60;script&#62;' tag?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The browser processes an HTML document from top to bottom. When it encounters a `&#60;script&#62;` tag, it typically stops HTML parsing, fetches (if the script is external), and executes the JavaScript code. Then, it continues with HTML parsing. This behavior can be altered using attributes like `async` and `defer`.
    </div><br />
  <div><strong>Technical Details:</strong> When the browser is processing an HTML page and encounters a &#60;script&#62; tag, it must execute it before continuing to create the DOM. This measure is a precaution since scripts may seek to change the DOM and even document.write into it, forcing DOMContentLoaded to wait. As a result, DOMContentLoaded occurs after such scripts.
    </div><br />
  <div><strong className="codeExample">Here is an example demonstrating this:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Script Processing</title>
    </head>
    <body>
        <p id="p1">Hello</p>

        <script>
            // This will execute immediately, updating the text from "Hello" to "Hello, World!"
            document.getElementById("p1").innerHTML += ", World!";
        </script>

        <p id="p2">Goodbye</p>

        <script>
            // This will execute immediately after the previous script, updating the text from "Goodbye" to "Goodbye, World!"
            document.getElementById("p2").innerHTML += ", World!";
        </script>
    </body>
</html>
```

In this example, when the browser encounters the first `<script>` tag, it stops parsing the HTML, executes the JavaScript that modifies the text of the first paragraph, then resumes parsing. The same happens when it encounters the second `<script>` tag.

  </div>
  </div>
</details>

---

### Are there any exceptions to script blocking of the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are exceptions. If the `async` or `defer` attribute is applied to a `&#60;script&#62;`, it doesn't block the DOMContentLoaded event. The `async` attribute allows the script to execute asynchronously as soon as it's available. The `defer` attribute delays script execution until the document has been fully parsed. Also, scripts generated dynamically with the `document.createElement('script')` method and then added to the webpage; don’t block this event.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example demonstrating this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Async and Defer</title>
        <script src="script.js" async></script> <!-- This script doesn't block parsing -->
    </head>
    <body>
        <script src="script2.js" defer></script> <!-- This script doesn't block parsing -->
        
        <script>
            document.addEventListener("DOMContentLoaded", function() {
                console.log("DOM fully loaded and parsed");
            });
        </script>
    </body>
</html>
```

In this example, the `async` and `defer` scripts will not block the DOMContentLoaded event. The DOMContentLoaded event will fire as soon as the document is fully parsed, even if these scripts haven't finished loading or executing.

  </div>
  </div>
</details>

---

### Do external style sheets influence or affect the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, external stylesheets do affect the DOM, but not by altering the structure (elements and their hierarchy). They affect the visual presentation of the DOM by applying styles to the elements. However, they also block rendering and the DOMContentLoaded event until they're loaded, as the browser needs to calculate the styles for each element.
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
  <div><strong>Interview Response:</strong> Browser autofill doesn't directly interact with the `DOMContentLoaded` event. When a user interacts with a form, and autofill is invoked, the browser autofills form fields based on stored information. However, with autofill, a challenge is that the `input` event isn't triggered for autofilled fields. You could check the field values after `DOMContentLoaded` if you want to react to autofilled values.
    </div><br/>
  <div><strong>Technical Details:</strong> Firefox, Chrome, and Opera autofill forms on DOMContentLoaded. For instance, if the page has a form with login and password, and the browser remembered the values, then on DOMContentLoaded it may try to autofill them (if approved by the user). So if long-loading scripts postpone DOMContentLoaded, then autofill also awaits until the DOMContentLoaded event.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Autofill Interaction</title>
    </head>
    <body>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" autocomplete="name">

            <label for="email">Email:</label>
            <input type="text" id="email" name="email" autocomplete="email">

            <input type="submit" value="Submit">
        </form>

        <script>
            document.addEventListener("DOMContentLoaded", function() {
                setTimeout(function() { // Timeout for autofill to occur
                    let nameField = document.getElementById('name');
                    let emailField = document.getElementById('email');
                    console.log(`Name: ${nameField.value}`);
                    console.log(`Email: ${emailField.value}`);
                }, 200);
            });
        </script>
    </body>
</html>
```

In this example, the script listens for the `DOMContentLoaded` event. Then, it waits a bit for the browser to autofill the form fields (if applicable), and finally logs the values of the name and email fields. The `autocomplete` attributes are set to help the browser know what type of information should be autofilled.

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
  <div><strong>Interview Response:</strong> The `beforeunload` and `unload` events are triggered when a user is about to leave a webpage. The `beforeunload` can be used to ask for confirmation before leaving, while `unload` is used for cleanup tasks.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Exit Events</title>
        <script>
            window.addEventListener("beforeunload", function (event) {
                // Cancel the event and show a confirmation dialog
                event.preventDefault();
                event.returnValue = "Do you really want to leave?";
            });

            window.addEventListener("unload", function (event) {
                console.log("Page is being unloaded.");
            });
        </script>
    </head>
    <body>
        <h1>Try leaving this page</h1>
    </body>
</html>
```

In this example, if a user tries to close the tab, refresh the page, or navigate away, they'll see a confirmation dialog due to the `beforeunload` event. The `unload` event also triggers, but you won't see the console log because the page is already unloading. It's mostly used to clean up things like event listeners and running timers.

  </div>
  </div>
</details>

---

### Is there a reason we should avoid using unload and beforeunload in conjunction with Navigator.sendBeacon method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it's best to avoid making complex operations, like AJAX requests, inside `unload` or `beforeunload` events. However, `Navigator.sendBeacon()` is specifically designed to be used in these situations where a normal AJAX request might be cancelled because the page is unloading.
    </div><br/>
  <div><strong>Detailed Response:</strong> In many situations, especially on mobile devices, the browser does not fire the unload, beforeunload, or pagehide events. For example, these events do not fire in the following situations. The user loads the page and interacts with it. When they complete, they switch to a different app instead of closing the tab. Later, they close the browser app using the phone's app manager. Additionally, the unload event is incompatible with modern browsers' back/forward cache (bfcache). Using the unload event in conjunction with the sendBeacon method is not recommended.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Unload Event</title>
        <script>
            window.addEventListener("unload", function (event) {
                navigator.sendBeacon("/log", "User left the page.");
            });
        </script>
    </head>
    <body>
        <h1>Try leaving this page</h1>
    </body>
</html>
```

In this example, when the user navigates away from the page, the `unload` event fires and `Navigator.sendBeacon()` is used to send some data ("/log", "User left the page.") to the server. This method is more reliable for sending data in such scenarios because it's asynchronous and doesn't delay the unloading of the page. It also has a higher success rate than traditional AJAX methods in the context of the page unload event.

  </div>
  </div>
</details>

---

### What happens if we set the DOMContentLoaded handler after the document is loaded?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Naturally, it never runs because the page has already loaded. If the `DOMContentLoaded` event has already fired, adding a new event handler after the fact won't trigger that handler, as the event is missed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>DOMContentLoaded Handler</title>
        <script>
            // This event handler will run because it's registered before the DOMContentLoaded event fires
            document.addEventListener("DOMContentLoaded", function() {
                console.log("This will log when the DOM is fully loaded.");
            });
        </script>
    </head>
    <body>
        <h1>Welcome to my website!</h1>
        <script>
            // This event handler won't run because it's registered after the DOMContentLoaded event has already fired
            document.addEventListener("DOMContentLoaded", function() {
                console.log("This won't log because the DOM is already loaded.");
            });
        </script>
    </body>
</html>
```

In this example, the first `DOMContentLoaded` event handler logs a message to the console because it's registered before the event fires. The second handler, registered after the event fires, won't log its message because it missed the event.

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
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Document Loading State</title>
    </head>
    <body>
        <h1>My Web Page</h1>
        <img src="example.jpg" alt="Example image">

        <script>
            document.onreadystatechange = function () {
                console.log("Document state: " + document.readyState);
                if (document.readyState === "interactive") {
                    console.log("Document has been fully read.");
                }
                else if (document.readyState === "complete") {
                    console.log("Document and all sub-resources are now fully loaded.");
                }
            }
        </script>
    </body>
</html>
```

In this example, an `onreadystatechange` event handler is registered, and it logs the current state of the document to the console each time the state changes. When the state changes to `"interactive"`, it logs a message stating that the document has been fully read, and when it changes to `"complete"`, it logs a message stating that the document and all sub-resources are fully loaded.

  </div>
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

There are three possible values:

1. `"loading"`: The document is still loading.
2. `"interactive"`: The document has been fully read.
3. `"complete"`: The document and all sub-resources have been fully loaded.

**Here's an example:**

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
