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
  </div>
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

Sure, here is a basic example of a `fetch` request in JavaScript.

```javascript
fetch('https://api.example.com/data', {
  method: 'GET', // or 'POST'
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your-token'(if needed)
  },
  // body: JSON.stringify(data), (if you're using POST)
})
.then(response => response.json()) // parse the response as JSON
.then(data => console.log(data)) // here is where you handle your data
.catch(error => console.error('Error:', error)); // handle any errors
```

This code will perform a `GET` request to the URL '<https://api.example.com/data>'. If the server responds with data, it will be converted from JSON into JavaScript objects or arrays and logged to the console. If there is an error with the request, it will be logged to the console as well.

---

:::note
Please note that this example is using the Fetch API, which returns Promises. This is a more modern approach to AJAX requests and might not be supported in all browsers (it's not supported in Internet Explorer). Make sure to use a polyfill or fallback if you want to support all browsers. Additionally, if your server-side API requires authorization or other custom headers, you would include them in the headers object. For `POST` requests, you would include the data you are sending as JSON in the body property.
:::

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
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
fetch('https://api.example.com/data')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // If the response is okay, we return a call to response.json()
  return response.json();
})
.then(data => {
  // This block will be executed once the Promise returned by response.json() resolves
  // Here you can use the data, which is the JSON object from the response
  console.log(data);
})
.catch(error => {
  // If there's an error during the Fetch API call or during the handling of the response, it will be caught here
  console.error('Error:', error);
});
```

This code sends a GET request to the URL '<https://api.example.com/data>'. If the response status is not okay (like 404 Not Found or 500 Internal Server Error), an error is thrown. If the response is okay, it gets parsed as JSON and the resulting data is logged to the console. Any error that gets thrown during the fetch call or during the handling of the response gets caught and logged to the console.

  </div>
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

```javascript
fetch('https://api.example.com/data')
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  // If the response is okay, we return a call to response.json()
  return response.json();
})
.then(data => {
  // This block will be executed once the Promise returned by response.json() resolves
  // Here you can use the data, which is the JSON object from the response
  console.log(data);
})
.catch(error => {
  // If there's an error during the Fetch API call or during the handling of the response, it will be caught here
  console.error('Error:', error);
});
```

This code sends a GET request to the URL '<https://api.example.com/data>'. If the response status is not okay (like 404 Not Found or 500 Internal Server Error), an error is thrown. If the response is okay, it gets parsed as JSON and the resulting data is logged to the console. Any error that gets thrown during the fetch call or during the handling of the response gets caught and logged to the console.

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
myHeaders.append('Content-Type', 'application/json'); // adding Content-Type

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
  <div><strong>Interview Response:</strong> You can set custom headers in a Fetch request using the 'Headers' object, appending headers with the append method, and/or including them in the fetch options.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, to set custom headers in a Fetch request, you would include a `headers` object in the options object that you pass to the `fetch` function. Here's an example:

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'CustomHeaderValue'
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

In this example, a `GET` request is made to the URL '<https://api.example.com/data>'. The `headers` object contains two headers: `Content-Type` and `X-Custom-Header`. The server will receive these headers and can use them to determine how to process the request. If the server responds with data, the data will be parsed as JSON and logged to the console. If there's an error with the request, the error will be logged to the console.

Remember to replace 'CustomHeaderValue' with the actual value that you want to send for the 'X-Custom-Header' header. Different servers may require different custom headers, so you'll need to know what headers are expected by the server that you're making the request to.

  </div>
  </div>
</details>

---

### How do you handle cross-origin requests with Fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For cross-origin requests with Fetch, set the `mode` option to 'cors'. The server must also support CORS and respond with appropriate `Access-Control` headers.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

In JavaScript, cross-origin requests are handled by the CORS (Cross-Origin Resource Sharing) policy of the server. If the server's CORS policy allows it, you can send cross-origin requests using the `fetch` function just like same-origin requests. If the server's CORS policy doesn't allow it, you'll get a CORS error.

Here's a basic example of a cross-origin `fetch` request:

```javascript
fetch('https://api.other-domain.com/data', {
  method: 'GET',
  mode: 'cors', // no-cors, *cors, same-origin
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer your-token'(if needed)
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

The `mode: 'cors'` option tells the browser to send the request with CORS. This will make the browser include the Origin header with the request and handle CORS errors. If the server doesn't allow cross-origin requests from your origin, you'll get a CORS error.

Remember that CORS is a security feature that's implemented by the server, not the client. The server decides whether to allow the request based on its CORS policy. If you're getting CORS errors, you'll need to change the server's CORS policy to allow your requests. This typically involves setting certain headers on the server's responses, like `Access-Control-Allow-Origin`. If you don't control the server, you'll need to ask the server's operator to do this. If this isn't possible, you might need to use a server-side proxy that can make the request on your behalf.

Also, remember that not all requests are subject to CORS. For example, simple GET requests without custom headers aren't subject to CORS because they can't change server state. But most POST requests, as well as GET requests with custom headers, are subject to CORS.

  </div>
  </div>
</details>

---

### Can you cancel a Fetch request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, Fetch requests cannot be directly canceled. However, you can ignore the response or use the `AbortController` API to abort a request in progress.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => controller.abort(), 5000); // abort the fetch request after 5 seconds

fetch('https://api.example.com/data', { signal })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => {
    if (err.name === 'AbortError') {
      console.error('Fetch request has been aborted');
    } else {
      console.error('An error occurred:', err);
    }
  });
```

---

:::note
Please note, the `AbortController` is not supported in Internet Explorer. If you need to support Internet Explorer, you may need to use a polyfill or an alternative method to cancel fetch requests.
:::

  </div>
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
  </div>
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
  <div><strong>Interview Response:</strong> The `FormData` object is a built-in API to handle HTML form data. It allows you to construct and send form data in a Fetch request.</div><br />
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
  <div><strong>Interview Response:</strong> You can include authentication information, such as tokens or cookies, in the request headers. The server can then validate the credentials and respond accordingly. Typically, when dealing with authentication in Fetch requests, you might be using something like JWT (JSON Web Tokens) or Basic Auth, where an `Authorization` header is included in your Fetch request.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-jwt-token', // replace with your actual token
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

In the `headers` object, an `Authorization` property is included. The `Bearer your-jwt-token` part should be replaced with the actual token you received during authentication.

---

:::note
Please note that you should securely handle and store this token. Do not expose it publicly, as it would allow anyone who obtains it to authenticate as the user. Also remember that the way you handle authentication may vary based on the specific authentication mechanism used by your API.
:::

  </div>
  </div>
</details>

---

### What is the Fetch API's 'Request' object used for?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Request` object is part of the Fetch API and allows you to create and manage the details of a HTTP request which can then be sent using the `fetch` method. It allows you to customize the request method, headers, and body before sending it with `fetch()`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Create a new Request object
const myRequest = new Request('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    key1: 'value1',
    key2: 'value2'
  }),
});

// Use the Request object with the fetch function
fetch(myRequest)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, we create a new `Request` object, specifying the URL, HTTP method, headers, and body data. We then pass this `Request` object into the `fetch` function. The `fetch` function sends the request and processes the response as before.

The `Request` object is useful when you need more control over the details of a HTTP request, or when you want to use the same request details multiple times.

  </div>
  </div>
</details>

---

### What are some of the use cases related to network requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Network requests are crucial for fetching data from APIs, submitting user data to servers, downloading files, uploading images, real-time communication in chat applications, and interacting with databases remotely.
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
  console.log('HTTP-Error: ' + response.status);
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

```javascript
fetch('https://api.example.com/data')
  .then(response => {
    // Log all headers
    for (let [key, value] of response.headers) {
      console.log(`${key}: ${value}`);
    }

    // Log a specific header
    console.log('Content-Type:', response.headers.get('Content-Type'));

    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

In this example, the `response.headers` object represents the headers of the response. The `for...of` loop logs each header and its value. The `response.headers.get()` method is used to get the value of a specific header (`Content-Type` in this case). The body of the response is then processed as JSON and logged to the console. Any errors that occur during the fetch or response processing are caught and logged to the console.

  </div>
  </div>
</details>

---

### How should a request header be implemented or set in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, request headers can be set as part of the options object provided to the `fetch` function. This is done through the `headers` property, which takes an object where the keys are the header names and the values are the header values.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-jwt-token', // replace with your actual token
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

In this example, we're making a GET request to '<https://api.example.com/data>'. In the options object provided to `fetch`, we're setting two headers: 'Content-Type' and 'Authorization'. The 'Content-Type' header tells the server that we're sending JSON data. The 'Authorization' header is often used for authentication, with 'Bearer your-jwt-token' being a placeholder for an actual token. After the request is sent, the response is processed as JSON and the resulting data is logged to the console. Any errors that occur are also logged to the console.

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
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
fetch('https://api.example.com/data', {
  method: 'GET',
  headers: {
    'Referer': 'https://malicious.com', // This will be ignored by the user agent
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

In this example, the code attempts to set the 'Referer' header, which is not allowed by the browser. The browser will simply ignore this header, and it will not be included in the request. This behavior protects users from potential security issues, such as Referer spoofing.

---

:::note
Please note that the forbidden headers can't be set programmatically, but they will be set automatically by the user agent when making the request.
:::

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
