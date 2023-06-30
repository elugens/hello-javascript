---
title: Resource Loading
description: Resource Loading in JavaScript is a way to load external resources asynchronously. - JavaScript Interview Questions & Answers
sidebar_position: 3
sidebar_label: Resource Loading
keywords:
  - resource loading
  - loading resources
  - loading external resources
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - resource loading
  - loading resources
  - loading external resources
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ResourceLoadingSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Resource Loading | JavaScript Frontend Developer Interview</title>
</head>

**Document / Resource Loading: Resource Loading**

<CloseAllAnswers />

---

### What is Resource Loading in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's the process of loading external resources like images, scripts, stylesheets, etc., which are necessary for the proper functioning of a web application.
  </div><br />
  <div><strong>Technical Details:</strong> When it comes to web development, loading external resources such as images, scripts, and stylesheets is crucial to ensure that the web application functions properly. This process is known as resource loading, and it's essential to make sure that all necessary files are available before the page can be displayed. Depending on the requirements of the application, there are various techniques to load resources in the most optimal way possible. Regardless of the approach used, it's vital to minimize latency and improve the user experience.
  </div><br />
  </div>
</details>

---

### What two events can we use to track the loading of external resources?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, there are two primary events for monitoring resource loading. The first is the "load" event, which triggers once the resource has finished loading. The second is the "error" event, which triggers when loading fails.
    </div><br/>
  <div><strong>Technical Details:</strong> As a developers, we have the capability to monitor the loading of external resources, such as scripts, iframes, and pictures, through the use of the browser. This can be achieved by utilizing two key events: onload and onerror. The onload event is triggered when an object is successfully loaded, while the onerror event is activated when there is an error encountered while loading an external file, such as a document or image.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let img = new Image();

img.src = "https://example.com/some-image.jpg";

img.addEventListener('load', function() {
    console.log('Image has loaded successfully');
});

img.addEventListener('error', function() {
    console.error('An error occurred while loading the image');
});

```

  </div>
  </div>
</details>

---

### Is it possible to load a function specified within an external script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can use the script.onload event, to handle the invocation of the function. It triggers after the script is completely loaded and executed. So, in onload we can use script variables, run functions, and other implementations.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let script = document.createElement('script');

// can load any script, from any domain
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash.js';
document.head.append(script);

script.onload = function () {
  // the script creates a variable "_"
  alert(_.VERSION); // shows library version
};
```

  </div>
  </div>
</details>

---

### How are errors that occur during a script's loading tracked?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Errors that occur during the loading of the script can be tracked in an error event using the 'script.onerror' property. In the case of HTTP errors, we do not know if it was an error 404 or 500 or something else, just that the loading has failed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let script = document.createElement('script');
script.src = 'https://example.com/404.js'; // no such script
document.head.append(script);

script.onerror = function () {
  alert('Error loading ' + this.src); // Error loading https://example.com/404.js
};
```

  </div>
  </div>
</details>

---

### Are there any limitations to the onload/onerror event properties?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, limitations exist. `onload` and `onerror` can't catch errors from syntax issues within scripts or track loading of resources that don't fire load/error events. Errors that may occur during script processing and execution are out of scope for these events.
    </div><br />

:::note
The onload event triggers if a script is successfully loaded, even with programming mistakes. We can use the window.onerror global handler to track script errors.
:::

  </div>
</details>

---

### Can load and error events be used with external resources or just internal scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `load` and `error` events are not limited to internal scripts. They can be used with other external resources such as images, stylesheets, and other media.
    </div><br />
  <div><strong>Technical Response:</strong> The load and error events also work for other resources, basically for any resource that has an external src. There are some limitations in functionality based on the type of source getting loaded. Most resources start loading when they load in the document. But &#8249;img&#8250; is an exception. It starts loading when it retrieves a src (*). For &#8249;iframe&#8250;, the iframe.onload event triggers when the iframe loading finishes, both for successful load and in case of an error. That is for historical purposes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let img = document.createElement('img');
img.src = 'https://js.cx/clipart/train.gif'; // (*)

img.onload = function () {
  alert(`Image loaded, size ${img.width}x${img.height}`);
};

img.onerror = function () {
  alert('Error occurred while loading image');
};
```

  </div>
  </div>
</details>

---

### What's a cross-origin policy in frontend web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In frontend web development, Cross-Origin Resource Sharing (CORS) is a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated.
    </div><br/>
  <div><strong>Technical Response:</strong> There is a rule: scripts from one site cannot access the other site's contents. So, a script at https://facebook.com cannot read the user’s mailbox at https://gmail.com. Or, to be more precise, one origin (domain/port/protocol triplet) cannot access the content from another one. So even if we have a subdomain or just another port, these are different origins with no access to each other.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

A simple example is fetching data from a different domain.

```javascript
fetch('https://api.different-domain.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log('An error occurred:', error));
```

In this case, the server `https://api.different-domain.com` must include the appropriate CORS headers to allow the request. The server could respond with headers like:

```
Access-Control-Allow-Origin: https://your-domain.com
```

This tells the browser that it's okay to make a request from `https://your-domain.com` to `https://api.different-domain.com`.

However, without the appropriate server configuration, the CORS policy will block the request. You would see an error in your browser's console along the lines of:

```
Access to fetch at 'https://api.different-domain.com/data' from origin 'https://your-domain.com' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

That's why it's important to properly set up your server's CORS policy when you expect to serve resources to different domains.

(Note: This is a simplified explanation. The actual CORS policy and implementation can be more complex and involves other headers as well, like `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, `Access-Control-Max-Age`, etc.)

  </div>
  </div>
</details>

---

### Are there any limitations in cross-origin error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, cross-origin scripts without the correct CORS headers return only a generic error message due to security reasons, hiding detailed information about the error.
    </div><br />
  <div><strong>Technical Details:</strong> When dealing with cross-origin scripts, the error information that you can receive from a window's `onerror` event handler is restricted due to the same-origin policy, and this is a key limitation in cross-origin error handling. In the case of a script error occurring in a file hosted from a different origin, instead of receiving detailed error information, you will receive a generic "Script error." message with null or non-descriptive values for the other parameters (URL, line number, etc.).
    </div><br />
  <div><strong className="codeExample">Consider the following example:</strong><br /><br />

  <div></div>

```javascript
window.onerror = function(message, url, lineNo, colNo, error) {
    console.log('Error:', message, 'Script:', url, 'Line:', lineNo, 'Column:', colNo, 'Error object:', error);
    return true;
};

var script = document.createElement('script');
script.src = "https://different-domain.com/some-script.js";
document.body.appendChild(script);
```

If the script at "<https://different-domain.com/some-script.js>" encounters an error and the server doesn't allow for proper CORS configuration, your `onerror` handler would log something like:

```
Error: Script error. Script:  Line: 0 Column: 0 Error object: null
```

To handle cross-origin errors effectively, you need to set the `crossorigin` attribute on the script tag and ensure the server responds with appropriate CORS headers.

Here's how you can modify the script tag:

```javascript
window.onerror = function(message, url, lineNo, colNo, error) {
    console.log('Error:', message, 'Script:', url, 'Line:', lineNo, 'Column:', colNo, 'Error object:', error);
    return true;
};

var script = document.createElement('script');
script.src = "https://different-domain.com/some-script.js";
script.crossOrigin = "anonymous"; // New line
document.body.appendChild(script);
```

Now, if the server includes `Access-Control-Allow-Origin: *` (or the specific origin instead of `*`) in its headers, you will receive full error details in your `onerror` handler, even if the script is loaded from a different origin. This can greatly enhance your ability to debug cross-origin scripts.

  </div>
  </div>
</details>

---

### Why do we need error details in relation to cross-origin error handling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Detailed error information is vital for identifying issues in cross-origin scripts. Without it, developers might not understand the cause of issues, making debugging difficult.
    </div><br/>
  <div><strong>Technical Details:</strong> There are many services (and we can build our own) that listen for global errors using window.onerror, save errors, and provide an interface to access and analyze them. That is great, as we can see actual errors triggered by our users. But if a script comes from another origin, then there is not much information about its errors, as we’ve just seen.
    </div>
  </div>
</details>

---

### What are the three levels of cross-origin access?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three levels of cross-origin access are: No access (Same-Origin Policy), Access with credentials (CORS with credentials), and Full access (CORS without credentials).
    </div><br />
  <div><strong>Technical Response:</strong> There are three levels of cross-origin access including no cross-origin attribute, crossorigin = "anonymous", and crossorigin = "use-credentials". In the first level, no cross-origin attribute does not allow or strictly prohibits cross-origin access. The second level is access allowed if the server responds with the header Access-Control-Allow-Origin with * or our origin. The browser does not send authorization information and cookies to the remote server. The last level of cross-origin use credentials that allow access if the server returns the headers Access-Control-Allow-Origin with our origin and Access-Control-Allow-Credentials: true. The browser communicates with the remote server by sending authorization information and cookies.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> crossorigin = "anonymous"<br /><br />

  <div></div>

```html
<script>
  window.onerror = function (message, url, line, col, errorObj) {
    alert(`${message}\n${url}, ${line}:${col}`);
  };
</script>
<script
  crossorigin="anonymous"
  src="https://cors.javascript.info/article/onload-onerror/crossorigin/error.js"
></script>
```

This example uses the `fetch` API to make a cross-origin request:

```javascript
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors', 
    credentials: 'include',
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log('Error:', error));
```

This example makes a GET request to '<https://example.com/data>'. The `mode` is set to 'cors' to indicate a CORS request, and `credentials` is set to 'include' to send cookies with the request if they exist.

  </div>
  </div>
</details>

---

### What is lazy loading in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Lazy loading is a design pattern that defers initialization of an object until the point at which it is needed. It can contribute to efficiency in a program's operation if properly and appropriately used.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of lazy loading in JavaScript using the Intersection Observer API, which is useful for loading images as they appear in the viewport:

```javascript
// HTML
<img class="lazyload" data-src="image.jpg" alt="Lazy Loaded Image">

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazyload");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
  }
});
```

In this script, an `IntersectionObserver` is used to watch all images with the class `lazyload`. When one of these images comes into the viewport, the `src` attribute is replaced by the `data-src` attribute, loading the image. Then, the image is removed from the observer's watch list.

  </div>
  </div>
</details>

---

### What is preloading in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Preloading is a technique used to load certain data or files before they are needed, like images, scripts, or stylesheets. This can improve performance by reducing load times when the resources are used.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Preloading can be done in different ways in JavaScript, here's an example on how you could preload an image:

```javascript
let img = new Image();
img.src = "image.jpg";
```

The browser will start loading the image in the background without rendering it, ready for when it's needed.

To preload a script, you can use the `preload` attribute in a `link` element:

```html
<link rel="preload" href="script.js" as="script">
```

This tells the browser to start loading the script as soon as possible without executing it. It will be fetched as soon as the browser is idle.

And you can also use JavaScript to add this element:

```javascript
let link = document.createElement('link');
link.rel = "preload";
link.href = "script.js";
link.as = "script";
document.head.appendChild(link);
```

:::note
Note: Ensure you're using preloading judiciously, as too much preloading can degrade the initial page load performance.
:::

  </div>
  </div>
</details>

---

### What does "async" do in terms of resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> "Async" allows a script to be downloaded in the background without blocking the page rendering.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple example of how you would use the `async` attribute in HTML:

```html
<!DOCTYPE html>
<html>
<body>

<h2>Async script example</h2>

<p id="demo">Hello</p>

<script async src="script.js"></script>

</body>
</html>
```

In this HTML document, the script with the source "script.js" is loaded asynchronously. This means the HTML rendering isn't blocked by the loading of the script, improving page load time. However, the script will execute immediately when available, potentially before the HTML document is fully parsed.

The script.js file could be something like:

```javascript
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

This would change the text in the paragraph with id "demo" to "Hello JavaScript!" once the script is loaded and executed.

  </div>
  </div>
</details>

---

### What does "defer" do in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "defer" attribute in HTML tells the browser to load the script while the document is being parsed, but to delay executing it until the document is fully parsed. This improves page load performance.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you would use the `defer` attribute in HTML:

```html
<!DOCTYPE html>
<html>
<body>

<h2>Defer script example</h2>

<p id="demo">Hello</p>

<script defer src="script.js"></script>

</body>
</html>
```

In this HTML document, the script with the source "script.js" is loaded while the document is being parsed, but it does not run until after the document has finished parsing.

The script.js file might contain something like:

```javascript
document.getElementById("demo").innerHTML = "Hello JavaScript!";
```

This would change the text in the paragraph with id "demo" to "Hello JavaScript!" once the script is executed, which will be after the HTML document has been fully parsed.

  </div>
  </div>
</details>

---

### What is the difference between "async" and "defer"?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Both download scripts without blocking rendering. However, "async" executes scripts as soon as they're available, while "defer" waits until the document is fully parsed.
  </div>
  </div>
</details>

---

### What is the significance of the rel="preload" attribute?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The rel="preload" attribute in HTML informs the browser to start fetching a resource as soon as possible, without delaying page rendering, thereby improving performance when the resource is required.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is an example of how you can use the `rel="preload"` attribute in HTML:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Preload Example</title>
  
  <link rel="preload" href="style.css" as="style">
  <link rel="preload" href="script.js" as="script">
</head>
<body>

<h1>Welcome to my website!</h1>

<script src="script.js"></script>
</body>
</html>
```

In this HTML document, the styles from "style.css" and the JavaScript from "script.js" are preloaded. This means the browser begins downloading these resources as soon as possible, even before they are requested by the `<script>` and `<link>` tags. This can improve performance if these resources are needed soon after the HTML starts parsing.

:::note
Note that preloaded resources need to be consumed by a matching resource request in your JavaScript or CSS, otherwise they may be fetched twice.
:::
  </div>
  </div>
</details>

---

### How does browser caching impact resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Browser caching stores downloaded resources locally, reducing the need for additional network requests. This can significantly speed up resource loading on subsequent visits, improving website performance.
  </div>
  </div>
</details>

---

### How does HTTP/2 affect resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HTTP/2 improves resource loading by enabling multiplexing, allowing multiple requests and responses to be sent simultaneously on the same TCP connection, reducing latency and boosting performance.
  </div>
  </div>
</details>

---

### What's the impact of Content Delivery Networks (CDNs) on resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> CDNs reduce resource loading times by serving content from the closest geographically located server to the user, improving speed, reducing latency, and enhancing the overall user experience.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
    <!-- Using Google CDN to load jQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>
    <button id="clickMe">Click Me!</button>

    <script>
        $(document).ready(function() {
            $('#clickMe').click(function() {
                alert('You clicked the button!');
            });
        });
    </script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What is the role of the 'load' event in resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The load event is fired when a resource and all its dependent resources have finished loading. It's commonly used to trigger JavaScript functions once the page is fully loaded.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple example showing how to use the `load` event in JavaScript:

```javascript
window.addEventListener('load', function() {
  console.log('All resources finished loading!');
});
```

In this code, an event listener is added to the `window` object, which fires when the `load` event is triggered. The `load` event occurs when the whole webpage (including assets like images and scripts) have finished loading. When this event is triggered, it executes the function, logging 'All resources finished loading!' to the console.

  </div>
  </div>
</details>

---

### How can service workers improve resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Service Workers can cache resources, enabling offline use and faster load times. They can intercept network requests, delivering cached responses when available, improving performance and providing a more seamless user experience.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of a service worker in JavaScript. This script should be in a separate file, often named `sw.js` or similar:

```javascript
// Install event - cache files 
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/image.jpg',
      ]);
    })
  );
});

// Fetch event - respond with cache or fetch
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
```

In the first part, when the service worker is installed, it opens a cache called 'my-cache' and adds files to it. This means these files will be available offline and will load faster because they're coming from the cache.

In the second part, for every fetch request, the service worker first checks if the requested resource is in the cache. If it is, it returns that, otherwise, it fetches the resource from the network.

To register this service worker, you would add this to your main JavaScript file or inline script:

```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.log('Service Worker registration failed:', error);
  });
}
```

This checks if the browser supports service workers, and if it does, it registers the service worker located at `/sw.js`.

  </div>
  </div>
</details>

---

### What is HTTP caching?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HTTP caching is a technique that allows browsers to store responses from a web server, like web pages or images, to improve speed and reduce server load for subsequent requests.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

HTTP caching is typically handled on the server-side within HTTP headers. Here is an example of how it might look in an HTTP response:

```
HTTP/1.1 200 OK
Date: Sat, 04 Jun 2023 16:00:00 GMT
Content-Type: text/html
Content-Length: 1576
Last-Modified: Sat, 04 Jun 2023 15:00:00 GMT
ETag: "30a7-591fa93355a80"
Cache-Control: public, max-age=3600
Expires: Sat, 04 Jun 2023 17:00:00 GMT
Accept-Ranges: bytes
```

In this example, the `Cache-Control` directive indicates the resource is public and can be cached, and that the maximum age of the cached resource is 3600 seconds (or one hour). After one hour, the cache is considered stale and a new copy of the resource will be fetched.

The `Expires` header also specifies a date and time for when the cached copy should expire. This is an older method of controlling caches, and is often used as a fallback if `Cache-Control` is not supported.

The `ETag` and `Last-Modified` headers are used for validation. When the cache is stale, the browser can send these values back to the server in a conditional request to check if the resource has changed. If it hasn't, the server can respond with a `304 Not Modified` status to tell the browser to reuse the cached copy, saving bandwidth.

  </div>
  </div>
</details>

---

### How do 'ETags' help with resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `ETags` are part of HTTP headers and provide a validation mechanism to check if a cached resource has changed. If unchanged, the server returns a `304 Not Modified`, saving bandwidth and improving load times.
  </div><br />
  <div><strong>Technical Details:</strong> Etag (Entity Tag) HTTP header is one of several mechanisms that HTTP provides for web cache validation - a way to allow a client to make conditional requests to allow servers to tell clients whether the copy that they (the client) have is still valid or not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a very simplified example of a Node.js server using Express.js framework which utilizes the **etag** functionality.

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/some-resource', (req, res) => {
    // This could be a database call or some I/O operation in a real-world scenario
    let data = {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com"
    };

    // Compute an ETag for the data (you might use a different method in reality)
    const etag = require('crypto').createHash('md5').update(JSON.stringify(data)).digest('hex');

    // Check if the client sent an 'If-None-Match' header, and if it matches the ETag, send a '304 Not Modified' response
    if (req.header('If-None-Match') === etag) {
        res.sendStatus(304);
    } else {
        // Include the ETag in the response
        res.setHeader('ETag', etag);
        res.json(data);
    }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
```

  </div>
  </div>
</details>

---

### What is the role of headers like 'Cache-Control' in resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Cache-Control` HTTP header controls how, and for how long, individual responses are cached by the browser. This can greatly reduce load times and server load for subsequent visits.
  </div><br />
  <div><strong>Technical Response:</strong> The `Cache-Control` HTTP header is used to specify directives for caching mechanisms in both requests and responses. The directives specify who can cache the response, under which conditions, and for how long.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple Node.js server example using Express.js that serves static files with specific `Cache-Control` directives.

```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set up static file serving
app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path) => {
    // Set Cache-Control header
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours (86400 seconds)
  }
}));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});
```

In this example, any static files served from the `public` directory will include the `Cache-Control: public, max-age=86400` header in the response. This tells clients that they're allowed to publicly cache the resource and that the resource is considered fresh for 24 hours (86400 seconds). After that, the client needs to check back with the server to see if the resource has been updated.

Please note that different types of resources might need different caching strategies. For example, you might want to cache images, CSS, and JavaScript files for a longer period because they might not change frequently, but HTML files could be cached for a shorter period or not cached at all if they are dynamic and change frequently.

  </div>
  </div>
</details>

---

### What is the purpose of the 'Expires' header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Expires` header provides a date/time after which the response is considered stale, informing the cache when a new request for the resource should be made.
  </div><br />
  <div><strong>Technical Response:</strong> The `Expires` header is used to specify the date/time after which the response is considered stale. This means that the client (often the browser) can cache the response until that time. After the time specified in the `Expires` header, the client must make a new request to the server to validate that the cached data is still accurate.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Below is a simple example of a Node.js server using the Express.js framework that serves a static file with the `Expires` header:

```javascript
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/some-file', function(req, res) {
    // Set the Expires header
    let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    let oneDayFromNow = new Date(Date.now() + oneDay);
    res.setHeader('Expires', oneDayFromNow.toUTCString());

    // Send the file
    res.sendFile(path.join(__dirname, 'some-file.txt'));
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

In this example, when a GET request is made to "/some-file", the server responds with the contents of "some-file.txt" and sets the `Expires` header to one day from the current time. This means that the client can cache this file and consider it fresh without needing to check with the server again until that time has elapsed.

Note that HTTP/1.1 introduced the `Cache-Control` header, which offers more fine-grained control over caching and is generally preferred over `Expires`. However, `Expires` is still useful for HTTP/1.0 compatibility.

  </div>
  </div>
</details>

---

### What is the '304 Not Modified' response?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `304 Not Modified` is a response code indicating that the resource has not changed since the last request, allowing the browser to load it from the cache.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using a Node.js server and the Express.js framework.

```js
const express = require('express');
const app = express();
const port = 3000;

let data = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    lastModified: new Date() // Initial last modification time
};

app.get('/data', (req, res) => {
    // Check if 'If-Modified-Since' header is set in the request
    if (req.header('If-Modified-Since')) {
        let ifModifiedSinceDate = new Date(req.header('If-Modified-Since'));
        
        // If the data hasn't been modified since the date provided, return a '304 Not Modified' response
        if (data.lastModified <= ifModifiedSinceDate) {
            return res.status(304).send();
        }
    }

    // Otherwise, include the 'Last-Modified' header in the response and send the data
    res.setHeader('Last-Modified', data.lastModified.toUTCString());
    res.json(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
```

  </div>
  </div>
</details>

---

### How can you prioritize resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Resource loading can be prioritized by techniques like preloading, inlining critical assets, deferring non-critical assets, and using efficient loading strategies like lazy loading.
  </div>
  </div>
</details>

---

### What is the role of the 'Link' header in resource loading?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Link` HTTP header allows the server to indicate related resources and their relationship to the requested resource, which can be used for preloading, prefetching, or other purposes.
  </div>
  </div>
</details>

---
