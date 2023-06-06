---
title: Fetch Requests
description: Fetch Requests are used to make requests to the server. Fetch is a modern browser-based alternative to XMLHttpRequest. JavaScript Interview Questions and Answer
sidebar_position: 1
sidebar_label: Fetch Requests
keywords:
  - fetch requests
  - fetch network requests
  - functions
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
  - fetch requests
  - fetch network requests
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FetchReqSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Fetch Requests | JavaScript Frontend Phone Interview Answers</title>
</head>

**Network Requests: Fetch Requests**

<CloseAllAnswers />

---

### What is a Fetch request in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A fetch request is a way to retrieve data from a server using JavaScript. It allows you to make an HTTP request to a specified URL and receive a response. The data can be in various formats such as JSON, XML, or plain text. Fetch requests are commonly used in web development to dynamically update content without refreshing the entire page.
  </div><br />
  </div>
</details>

---

### How do you create a basic Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When making a Fetch request in JavaScript, you simply create a Request object with the resource's URL, pass it to fetch(), and handle the response with .then(). We should also handle any errors using the catch() method.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch(url)
    .then(response => {
        // handle the response
    })
    .catch(error => {
        // handle the error
    });
```

  </div>
  </div>
</details>

---

### How do you handle the response to a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use the `.then()` method on the Promise returned by `fetch()` to handle the response. It allows you to access the response data and perform actions accordingly.
  </div><br />
  </div>
</details>

---

### What does the Fetch API's '.json()' method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The .json() method of the Fetch API reads the response body, parses it as JSON, and returns the resulting JavaScript object in a promise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of using the `.json()` method with the Fetch API:

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, the `fetch` function sends a request to the provided URL. The `.then(response => response.json())` line waits for the response and then converts it to a JavaScript object. The next `.then` function logs the data to the console. If any errors occur during this process, they will be caught and logged by the `catch` block.

  </div>
  </div>
</details>

---

### How do you handle errors in a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In a Fetch request, handle errors by adding a .catch() block at the end of your promise chain to catch and handle any thrown exceptions or network errors.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

  </div>
  </div>
</details>

---

### What is the purpose of the Fetch API's 'Headers' object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch API's Headers object allows you to perform various operations on HTTP request and response headers, such as adding, deleting, or retrieving header values.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using the `Headers` object with the Fetch API:

```javascript
let myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

fetch('https://api.example.com/data', {
  method: 'GET',
  headers: myHeaders,
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

In this code, a new `Headers` object is created, and a 'Content-Type' header is added with the value 'application/json'. Then, a fetch request is made with these headers.

  </div>
  </div>
</details>

---

### How can you set custom headers in a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can set custom headers in a Fetch request using the Headers object, appending headers with the append method, and including them in the fetch options.
  </div><br />
  </div>
</details>

---

### How do you handle cross-origin requests with Fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For cross-origin requests with Fetch, set the `mode` option to 'cors'. The server must also support CORS and respond with appropriate `Access-Control` headers.
  </div><br />
  </div>
</details>

---

### Can you cancel a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Fetch requests cannot be directly canceled. However, you can ignore the response or use the `AbortController` API to abort a request in progress.
  </div><br />
  </div>
</details>

---

### How do you send data in a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To send data in a Fetch request, use the 'body' option in the fetch configuration object. If sending JSON, stringify it first with `JSON.stringify()`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of sending JSON data with a Fetch request:

```javascript
let data = { name: 'John', age: 30 };

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```

In this example, an object named `data` is defined. This object is then stringified with `JSON.stringify(data)` and included in the Fetch request's body. The 'Content-Type' header is set to 'application/json' to tell the server what kind of data is being sent.

  </div>
  </div>
</details>

---

### What is the difference between Fetch and Axios?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch is a built-in browser API for HTTP requests. Axios is a library providing more features like automatic JSON data transformation, request cancellation, and wider browser compatibility.
  </div><br />
  </div>
</details>

---

### How do you handle timeouts with Fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch API doesn't natively support timeouts. However, you can implement it with Promise.race(), racing your fetch against a promise that rejects after a delay using setTimeout().
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you might implement a timeout with the Fetch API:

```javascript
const timeout = (ms, promise) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request timed out'));
    }, ms);

    promise
      .then(response => {
        clearTimeout(timer);
        resolve(response);
      })
      .catch(reason => {
        clearTimeout(timer);
        reject(reason);
      });
  });
};

timeout(5000, fetch('https://api.example.com/data'))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, a `timeout` function wraps the fetch request. It starts a timer that will reject the promise after a specified delay (in this case, 5000 milliseconds). If the fetch request completes before the timer expires, the timer is cleared, and the promise is resolved with the fetch response.

  </div>
  </div>
</details>

---

### What is the Fetch API's 'FormData' object used for?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript primitives are immutable, meaning their values cannot be changed after they are created. This ensures data consistency.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of using `FormData` with the Fetch API:

```javascript
let formData = new FormData();
formData.append('username', 'John');
formData.append('email', 'john@example.com');

fetch('https://api.example.com/user', {
  method: 'POST',
  body: formData,
})
.then(response => response.json())
.then(data => console.log(data))
.catch((error) => console.error('Error:', error));
```

In this example, a new `FormData` object is created, and two fields, 'username' and 'email', are added. This form data is then sent as the body of a POST request using the Fetch API. The server should be set up to handle form data appropriately.

  </div>
  </div>
</details>

---

### How do you handle multiple concurrent Fetch requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can handle multiple concurrent Fetch requests using `Promise.all()`, which waits for all the passed promises (fetch requests) to resolve, or `Promise.allSettled()`.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const fetch = require("fetch");

async function makeConcurrentFetches() {
  const promises = [
    fetch("https://example.com/posts/1"),
    fetch("https://example.com/posts/2"),
    fetch("https://example.com/posts/3"),
  ];

  const responses = await Promise.all(promises);

  for (const response of responses) {
    console.log(response.json());
  }
}

makeConcurrentFetches();
```

  </div>
  </div>
</details>

---

### What is the purpose of the Fetch API's 'Response' object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Response` object represents the response to a Fetch request. It provides various properties and methods to access and manipulate the response data.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// conditional response block
if (!response.ok) {
  const errorMessage = `${response.status} ${response.statusText}`;
  throw new Error(errorMessage);
}
```

  </div>
  </div>
</details>

---

### How do you handle authentication in Fetch requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can include authentication information, such as tokens or cookies, in the request headers. The server can then validate the credentials and respond accordingly.
  </div><br />
  </div>
</details>

---

### What is the Fetch API's 'Request' object used for?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Request` object represents a resource request. It allows you to customize the request method, headers, and body before sending it with `fetch()`.
  </div><br />
  </div>
</details>

---

### What are some of the use cases related to network requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Network requests are used to fetch data, send data, communicate, update software, monitor devices, collect data, manage data, and provide access to applications. They are a fundamental part of the modern web.
  </div><br/>
  <div>
  <p>
<strong>Here are some use cases of network requests:</strong>
</p>
<ul>

<li>Web apps: Fetch data from remote servers.</li>

<li>Mobile apps: Fetch data from remote servers.</li>

<li>Server-to-server: Communication between servers.</li>

<li>IoT: Communication between devices and servers.</li>

<li>File sharing: Share files between devices.</li>

<li>Streaming media: Deliver media content.</li>

<li>Online gaming: Multiplayer gaming.</li>
</ul>
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const url = 'https://example.com/api/v1/data';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  });

```

This code will make a GET request to the `/api/v1/data` endpoint on the example.com domain. If the request is successful, the response.json() method will be used to parse the response body as `JSON`. The data variable will then contain the parsed JSON data, which can be used by the application.

  </div>
  </div>
</details>

---

### How do XMLHttpRequest and Fetch API differ?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Fetch is a modern browser-based alternative to XMLHttpRequest, and it also performs the same tasks related to network requests.</div><br />
  <div><strong>Technical Response:</strong> The Fetch API is a modern JavaScript alternative to XMLHttpRequest, and it also performs the same task, network requests. The Fetch API also gets incorporated into the browser. However, not all browsers support this, particularly older versions such as Internet Explorer 7 and 8. (which can be polyfilled).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
  return response.json();
});
```

here are the main differences between XMLHttpRequest and Fetch API in 30 words or less:

```
XMLHttpRequest is a legacy API, Fetch API is a newer, more modern API.
```

**Here is a table that summarizes the key differences between the two APIs:**

| Feature | XMLHttpRequest | Fetch API |
|---|---|---|
| Asynchronous | Yes | Yes |
| Blocking | Yes | No |
| Events | Yes | Yes |
| Caching | Yes | Yes |
| Streams | No | Yes |
| Promises | No | Yes |
| CORS support | Yes | Yes |
| Global object | `XMLHttpRequest` | `fetch` |

The XMLHttpRequest API is a legacy API that has been around for many years. It is a synchronous API, which means that it blocks the main thread while the request is in progress. This can lead to poor user experience, especially on mobile devices. The XMLHttpRequest API also does not support streams, which can make it difficult to work with large amounts of data.

The Fetch API is a newer, more modern API that was introduced in 2015. It is an asynchronous API, which means that it does not block the main thread while the request is in progress. This can lead to improved user experience, especially on mobile devices. The Fetch API also supports streams, which makes it easier to work with large amounts of data.

Overall, the Fetch API is a more modern and powerful API than XMLHttpRequest. It is recommended to use the Fetch API whenever possible.
  </div>
  </div>
</details>

---

### Can you explain the function of the JavaScript Fetch method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch method in JavaScript is used to make asynchronous network requests, allowing you to retrieve resources from a server and handle the server's response using Promises.</div><br />
  <div><strong>Technical Response:</strong> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method starts fetching a resource from the network, returning a promise that gets fulfilled once the response is available. Fetch has two arguments, including the URL and optional options object. The URL is the URL getting accessed on the server, and the options object holds an array of parameters, including method, headers, and other options.
  </div><br />

<strong>Syntax: </strong> let promise = fetch(url, [options]);<br /><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a code example for using the Fetch method to make a GET request:

```js
const url = 'https://example.com/api/v1/data';

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Do something with the data
  });
```

This code will make a GET request to the /api/v1/data endpoint on the example.com domain. If the request is successful, the response.json() method will be used to parse the response body as JSON. The data variable will then contain the parsed JSON data, which can be used by the application.

  </div>
  </div>
</details>

---

### Can you explain the first stage of the response process in a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The first stage of the response process in a Fetch request is receiving the server's response headers, which include information like status code, content type, and cookies.
    </div><br />
  <div><strong>Technical Response:</strong> First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers. At this stage, we can check HTTP status to see whether it is successful and check headers, but we do not have the body yet. The promise rejects if the fetch could not make HTTP-request, e.g., network problems, or there’s no such site. We should note that abnormal HTTP statuses, such as 200, 404, or 500, do not cause an error. We can check the response and status by using the response properties response.ok and response.status.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let response = await fetch(url);

if (response.ok) {
  // if HTTP-status is 200-299
  // get the response body (the method explained below)
  let json = await response.json();
} else {
  alert('HTTP-Error: ' + response.status);
}
```

  </div>
  </div>
</details>

---

### Can you explain the second stage of the response process in a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The second stage of the response process in a Fetch request is receiving the response body, which contains the actual data sent by the server in the requested resource. The response provides multiple promise-based methods to access the body in various formats, including text, JSON, formData, blob, and ArrayBuffer.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let url = 'https://api.github.com/repos/javascript-
tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

console.log(commits[0].author.login);
```

  </div>
  </div>
</details>

---

### What is the max number of fetch responses we can read simultaneously? Can we extract a text and JSON network response, for example?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can read multiple fetch responses simultaneously with Promise.all(). However, extracting both text and JSON from a single response isn't possible directly, as reading the body is a one-time operation.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let text = await response.text(); // response body consumed
let parsed = await response.json(); // fails (already consumed)
```

  </div>
  </div>
</details>

---

### Can you briefly explain the response header Object in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Response header Object in JavaScript contains metadata about the response, like content-type, content-length, etc. You can access it using the Response.headers property in the Fetch API.
    </div><br />
  <div><strong>Technical Details:</strong> The response headers are available in an iterable Map-like header object in response.headers. It is not precisely a Map, but it has similar methods to retrieve individual headers by name or iterate over them.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let response = await fetch('https://api.github.com/repos/javascript-
tutorial/en.javascript.info/commits');

// get one header
console.log(response.headers.get('Content-Type')); // application/json; charset=utf-8

// iterate over all headers
for (let [key, value] of response.headers) {
  console.log(`${key} = ${value}`);
}
```

  </div>
  </div>
</details>

---

### How should a request header be implemented or set in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use the headers option in fetch to set a request header, and it has an object with incoming and outgoing headers. There are several restrictions on what we may access in the HTTP header.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret',
  },
});
```

  </div>
  </div>
</details>

---

### What is an example of a banned HTTP header name?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One example of a forbidden header name is "Referer" as per the Fetch standard. These are typically set by the user agent and cannot be modified programmatically.
    </div><br/>
  <div><strong>Technical Details:</strong> A forbidden header name is the name of an HTTP header that cannot be modified programmatically; specifically, an HTTP request header name (in contrast with a Forbidden response header name). Modifying such headers is forbidden because the user agent (browser) retains complete control over them. Names starting with `Sec-` are reserved for creating new headers safe from APIs using Fetch that grant developer control over headers, such as XMLHttpRequest.
    </div>
  </div>
</details>

---

### To make a post request, what modern JavaScript method should we use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To make a POST request in modern JavaScript, you should use the `fetch` API, with the method option set to 'POST', and include your payload in the 'body' option.
    </div><br />
  <div><strong>Interview Response:</strong> To make a POST request or a request with another method option, we need to use the fetch method. For example, when we want to use a method post with JSON. We have to set the header and body inside the Fetch options. We are not limited to just post requests as a method option, and we also have access to HTTP requests and others. If the request body is a string, the Content-Type header gets set to text/plain;charset=UTF-8 by default.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let user = {
  name: 'John',
  surname: 'Smith',
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(user),
});

let result = await response.json();
console.log(result.message);
```

  </div>
  </div>
</details>

---
