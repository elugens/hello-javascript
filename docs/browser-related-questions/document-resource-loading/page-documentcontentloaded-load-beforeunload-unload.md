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

### What is the Page Lifecycle API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Page Lifecycle API in JavaScript provides events and methods for observing and responding to changes in a webpage's lifecycle, such as when it's loaded, becomes active/inactive, is hidden/visible, or is about to be unloaded.
  </div>
  </div>
</details>

---

### What are the three crucial events in the lifecycle of an HTML page?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three crucial events in the lifecycle of an HTML page are: `DOMContentLoaded` (HTML parsed), `load` (resources loaded), and `beforeunload/unload` (user navigates away).
    </div><br />
  <div><strong>Technical Response:</strong> The lifecycle of an HTML page has three critical events, including the DOMContentLoaded, load, and beforeunload/unload. DOMContentLoaded occurs when the browser fully loads HTML, and the DOM tree completely builds, but external resources like pictures &#8249;img&#8250; and stylesheets may not yet have loaded. The load is not only HTML is loaded but also all the external resources: images, styles, and others. The beforeunload/unload state happens when the user is leaving the page.
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
  <div><strong>Interview Response:</strong> DOMContentLoaded is used when initial HTML is fully loaded and parsed, enabling early interaction. The 'load' event fires when all resources are loaded. 'beforeunload/unload' events allow cleanup or confirmation before leaving a page.
    </div><br/>
  <div><strong>Technical Response:</strong> Each HTML lifecycle event is helpful in its way. The DOMContentLoaded event is when the DOM is ready, so the handler can lookup DOM nodes and initialize the interface. The load event is when external resources are loaded, so styles are applied and image sizes are known. The beforeunload event occurs when the user is leaving, we can check if the user saved the changes and ask them whether they want to leave. The unload event occurs when the user has almost left, but we still can initiate some operations, such as sending out statistics.
    </div>
  </div>
</details>

---

### What does the "loading" state signify?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "loading" stage in HTML signifies that the browser is in the process of loading the HTML document but has not completed parsing the DOM tree yet. The browser is fetching the page's resources, such as HTML, CSS, and JavaScript files.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
if (document.readyState === "loading") {   // Checking if document is still loading
  console.log("The document is currently loading.");
} else { 
  console.log("The document has finished loading.");
}
```

This code logs a message to the console based on whether the document is still loading or has finished loading. The `readyState` property of the `document` object is used to get the current loading state of the document.

  </div>
  </div>
</details>

---

### When does the "interactive" stage occur in HTML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "interactive" stage in HTML occurs when the document has been fully read and parsed, but sub-resources such as images, stylesheets, and scripts may still be loading.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        console.log("The document has been fully read and parsed, sub-resources are still loading.");
    }
}
```

In this code, an event listener is set on `document.onreadystatechange` to log a message when the `readyState` property of the document object becomes "interactive", indicating that the HTML has been parsed but some resources may still be loading.

  </div>
  </div>
</details>

---

### What happens during the "interactive" stage in an HTML Document?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> During the "interactive" stage in an HTML Document, the browser has parsed the HTML and built the DOM, but is still loading and processing sub-resources like images, stylesheets, and scripts.
  </div>
  </div>
</details>

---

### What does the "complete" stage represent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "complete" stage in HTML represents the state where the entire page, including all dependent resources like images, stylesheets, and scripts, has been fully loaded and rendered.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
        console.log("The entire page, including all dependent resources, has been fully loaded and rendered.");
    }
}
```

In this code, an event listener is set on `document.onreadystatechange` to log a message when the `readyState` property of the document object becomes "complete", indicating that all resources including images, stylesheets, and scripts are fully loaded and rendered.

  </div>
  </div>
</details>

---

### How can you listen for the page load event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can listen for the page load event using the `window.onload` event or `addEventListener` method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a JavaScript code example that listens for the page load event:

```javascript
window.addEventListener('load', function() {
    console.log('The page has fully loaded');
});
```

In this example, we're using `addEventListener` on the `window` object to listen for the `load` event, which is fired when the entire page loads, including its content (images, CSS, scripts, etc.). When this event fires, it logs a message to the console.

  </div>
  </div>
</details>

---

### How can you listen for the DOMContentLoaded event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To listen for the `DOMContentLoaded` event in JavaScript, you attach an event listener to the document that responds when the `DOMContentLoaded` event is fired, which indicates the DOM is fully loaded.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
});
```

In this example, `addEventListener` is used on the `document` object to listen for the `DOMContentLoaded` event, which is fired when the initial HTML document has been completely loaded and parsed, but sub-resources like stylesheets, images, and scripts may not have finished loading. When this event fires, it logs a message to the console.

  </div>
  </div>
</details>

---

### On what object does the DOMContentLoaded event occur?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `DOMContentLoaded` event occurs on the `document` object in JavaScript, indicating that the initial HTML document has been completely loaded and parsed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  function ready() {
    console.log('DOM is ready');

    // image is not yet loaded (unless it was cached), so the size is 0x0
    console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  }

  document.addEventListener('DOMContentLoaded', ready);
</script>

<img id="img" src="https://en.js.cx/clipart/train.gif?speed=1&cache=0" />
```

---

:::note
We should note a few peculiarities when we try to solicit information before the page is completely loaded, like image sizes, and the DOM loads first and then images and styles.
:::

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
  console.log(getComputedStyle(document.body).marginTop);
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
    console.log('Page loaded');

    // image is loaded at this time
    console.log(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
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
  <div><strong>Interview Response:</strong> Yes, `unload` and `beforeunload` may not work with `Navigator.sendBeacon` in some browsers, due to their page lifecycle policies. It's recommended to use `visibilitychange` or `pagehide` instead.
    </div><br/>
  <div><strong>Detailed Response:</strong> In many situations, especially on mobile devices, the browser does not fire the unload, beforeunload, or pagehide events. For example, these events do not fire in the following situations. The user loads the page and interacts with it. When they complete, they switch to a different app instead of closing the tab. Later, they close the browser app using the phone's app manager. Additionally, the unload event is incompatible with modern browsers' back/forward cache (bfcache). Using the unload event in conjunction with the sendBeacon method is not recommended.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here's an example that demonstrates using `visibilitychange` and `pagehide` events with `navigator.sendBeacon()` method:

```javascript
window.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    navigator.sendBeacon("/log", "User left the page");
  }
});

window.addEventListener('pagehide', function() {
  navigator.sendBeacon("/log", "Page is being unloaded");
});
```

In some modern browsers like Safari, `unload` and `beforeunload` events don't guarantee the execution of asynchronous requests like `sendBeacon()`. Instead, `visibilitychange` and `pagehide` events provide a more reliable way to ensure the request is made.

---

:::note
It's best to avoid making complex operations, like AJAX requests, inside `unload` or `beforeunload` events. However, `Navigator.sendBeacon()` is specifically designed to be used in these situations where a normal AJAX request might be cancelled because the page is unloading.
:::

  </div>
  </div>
</details>

---

### What happens if we set the DOMContentLoaded handler after the document is loaded?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If you set the `DOMContentLoaded` handler after the document is loaded, the handler will not be executed because the event has already occurred and won't be fired again. It needs to be registered before the DOMContentLoaded event is fired.
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
  <div><strong>Interview Response:</strong> Yes, the document.readyState property can be used to determine the loading state of the document. Its value can be "loading" (still loading), "interactive" (DOM is ready), or "complete" (document and resources are loaded).
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
  <div><strong>Interview Response:</strong> The three possible values of the readyState property are "loading" (document is still loading), "interactive" (DOM is ready), and "complete" (document and resources are loaded).
    </div><br />
  <div><strong>Technical Response:</strong> The readyState can be one of three possible values, including the loading, interactive, and complete states. The “loading state” is relative to the page still loading. The “interactive state” is when the document has finished loading and parses, but sub-resources such as scripts, images, stylesheets, and frames are still loading. The “complete state” happens when the document and sub-resources have finished loading, and the state indicates that the load event is about to fire.
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

### How can you prevent the page from being unloaded?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can attempt to prevent the page from being unloaded in JavaScript by using the `beforeunload` event and returning a string from the event handler.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
window.addEventListener('beforeunload', function (event) {
    // Cancel the event and show a dialog prompt
    event.preventDefault();
    // Chrome requires returnValue to be set
    event.returnValue = '';
});
```

In this code, an event listener is attached to the `beforeunload` event. When the event is fired, which is right before the window is about to be unloaded, it prevents the default action and sets `event.returnValue` to an empty string, which may prompt the user to confirm they really want to leave. Note that this behavior may vary between browsers, and some may not support it at all for user experience reasons.

  </div>
  </div>
</details>

---

### What is the purpose of the Page Visibility API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Page Visibility API in JavaScript allows developers to observe and react to changes in the visibility of a webpage, optimizing resource usage and user experience.
  </div>
  </div>
</details>

---

### How can you listen for changes in the page visibility state?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can listen for changes in the page visibility state by attaching an event listener to the document that responds to the `visibilitychange` event, indicating a change in the visibility of the page.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        console.log('Page is now visible');
    } else {
        console.log('Page is now hidden');
    }
});
```

In this example, we're using `addEventListener` on the `document` object to listen for the `visibilitychange` event. The callback function checks the `document.visibilityState` property and logs a message depending on whether the page is visible or not.

  </div>
  </div>
</details>

---

### What are the possible visibility states?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The possible visibility states for a page in the Page Visibility API are "hidden" (the page is hidden), "visible" (the page is currently visible), and "prerender" (the page is being prerendered), which represent different visibility states a page can be in.
  </div>
  </div>
</details>

---

### How can you pause/resume expensive operations when the page is not visible?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the Page Visibility API's `visibilitychange` event to pause/resume expensive operations. When the page is hidden, pause operations; when it's visible, resume them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here is a JavaScript code snippet that pauses and resumes an operation based on the visibility of the page:

```javascript
let expensiveOperation = function() {
    // Simulating an expensive operation
    console.log("Running expensive operation");
};

document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'hidden') {
        clearInterval(intervalId); // Pausing operation
        console.log("Paused expensive operation");
    } else {
        intervalId = setInterval(expensiveOperation, 1000); // Resuming operation
        console.log("Resumed expensive operation");
    }
});

let intervalId = setInterval(expensiveOperation, 1000); // Start operation
```

In this code, `expensiveOperation` is a function that represents an operation that uses a lot of resources. When the page visibility changes (as detected by the `visibilitychange` event), it checks if the page is hidden and if so, it pauses the operation by clearing the interval. If the page becomes visible again, it resumes the operation by starting the interval again.

  </div>
  </div>
</details>

---

### What is the purpose of the Navigation Timing API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Navigation Timing API provides data that can be used to measure the performance of a website, such as page load time and other related timings.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
window.addEventListener('load', function() {
    setTimeout(function() {
        var performance = window.performance;

        if(performance) {
            var timing = performance.timing;
            var loadTime = timing.loadEventEnd - timing.navigationStart;

            console.log('Page load time is ' + loadTime + ' milliseconds.');
        }
    }, 0);
});
```

In this example, once the window's `load` event has fired, it gets the `window.performance` object, which contains timing-related information. Specifically, it calculates the total time taken to load the page (from the start of navigation to when the `load` event ends) and logs it to the console.

  </div>
  </div>
</details>

---

### What is the Performance Timing API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Performance Timing API, part of the larger Web Performance API, provides data about the time it takes for various parts of a webpage to load, aiding in performance optimization.
  </div>
  </div>
</details>

---

### How can you access the performance timing information?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can access the performance timing information in JavaScript using the `window.performance.timing` object, which provides properties for different timing metrics.
  </div>
  </div>
</details>

---

### What is the purpose of the Resource Timing API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Resource Timing API provides detailed timing information about the load performance of a webpage's resources such as scripts, CSS, images, aiding in performance optimization.
  </div>
  </div>
</details>

---

### How can you access the resource timing information?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can access the resource timing information in JavaScript using the `window.performance.getEntriesByType('resource')` method, which returns an array of PerformanceResourceTiming objects.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example that uses the Resource Timing API to get some timing-related metrics for a specific resource:

```javascript
window.addEventListener('load', function() {
    var resourceList = window.performance.getEntriesByType("resource");
    for (let i = 0; i < resourceList.length; i++) {
        if (resourceList[i].name === "http://example.com/my-resource.jpg") {
            console.log("Duration of my-resource.jpg: " + resourceList[i].duration);
            console.log("Response time of my-resource.jpg: " + resourceList[i].responseEnd);
        }
    }
});
```

In this example, once the window's `load` event has fired, it gets a list of all resource timings using `window.performance.getEntriesByType("resource")`. It then goes through this list and for a specific resource (in this case, "<http://example.com/my-resource.jpg>"), it logs the total duration of the request and the time at which the final byte of the response was received.

  </div>
  </div>
</details>

---

### What is the purpose of the Beacon API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Beacon API in JavaScript allows for the efficient sending of data from the client to the server when a page is unloaded, useful for analytics and diagnostics without delaying the navigation.
  </div>
  </div>
</details>

---

### How can you use the Beacon API to send data?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, you can use the `navigator.sendBeacon()` method provided by the Beacon API to send data to a server when the page is unloaded or about to be unloaded.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a JavaScript code example that uses the Beacon API to send data:

```javascript
// Data to send
let data = {
  event: 'button click',
  time: new Date().getTime()
};

// Convert the data to JSON
let jsonData = JSON.stringify(data);

// Send the data
navigator.sendBeacon('https://example.com/collect-data', jsonData);
```

In this example, we first create a data object that represents some data we want to send. We then convert this data to JSON using `JSON.stringify()`. Finally, we send the data to a server using `navigator.sendBeacon()`. The `sendBeacon()` method returns `true` if the user agent is able to successfully queue the data for transfer, `false` otherwise.

  </div>
  </div>
</details>

---
