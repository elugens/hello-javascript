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

### What are some of the use cases related to network requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript can send network requests to the server and load new information, like submitting and loading user information.</div><br />
  <div><strong>Technical Response:</strong> JavaScript can send network requests to the server and load new information whenever needed. For example, we can use a network request to submit an order, load user information, and receive periodic updates from a server.
  </div>
  </div>
</details>

---

### What are the differences between an XMLHttpRequest and Fetch API?

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

  </div>
  </div>
</details>

---

### Can you explain the function and syntax of the JavaScript Fetch method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The fetch() method starts fetching a resource from the network, returning a promise that gets fulfilled once the response is available. Fetch has two arguments, including the URL and optional options object. The URL is the URL being accessed on the server, and the options object holds an array of parameters, including method, headers, and other options.</div><br />
  <div><strong>Technical Response:</strong> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method starts fetching a resource from the network, returning a promise that gets fulfilled once the response is available. Fetch has two arguments, including the URL and optional options object. The URL is the URL getting accessed on the server, and the options object holds an array of parameters, including method, headers, and other options.
  </div><br />

<strong>Syntax: </strong> let promise = fetch(url, [options]);<br /><br />

  </div>
</details>

---

### Can you explain the first stage of the response process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers. At this stage, we can check HTTP status to see whether it is successful and check headers, but we do not have the body yet. The promise rejects if the fetch could not make HTTP-request, e.g., network problems, or there’s no such site. We should note that abnormal HTTP statuses, such as 404 or 500, do not cause an error. We can check the response and status by using the response properties response.ok and response.status.
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

### Can you explain the second stage of the response process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Second, starts the process of getting the response body. We need to use an additional method call to retrieve the response. The response provides multiple promise-based methods to access the body in various formats, including text, JSON, formData, blob, and ArrayBuffer.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let url = 'https://api.github.com/repos/javascript-
tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits[0].author.login);
```

  </div>
  </div>
</details>

---

### What is the max number of fetch responses we can read simultaneously? Can we extract a text and JSON network response, for example?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we can only use one type of body reading. For example, if we've previously received the answer using response.text(), response.json() fails since the body content has already been processed or consumed.
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
  <div><strong>Interview Response:</strong> The response headers are available in an iterable Map-like header object in response.headers. It is not precisely a Map, but it has similar methods to retrieve individual headers by name or iterate over them.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let response = await fetch('https://api.github.com/repos/javascript-
tutorial/en.javascript.info/commits');

// get one header
alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// iterate over all headers
for (let [key, value] of response.headers) {
  alert(`${key} = ${value}`);
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
  <div><strong>Interview Response:</strong> A forbidden header name is the name of an HTTP header that cannot be modified programmatically; specifically, an HTTP request header name (in contrast with a Forbidden response header name). Modifying such headers is forbidden because the user agent (browser) retains complete control over them. Names starting with `Sec-` are reserved for creating new headers safe from APIs using Fetch that grant developer control over headers, such as XMLHttpRequest.
    </div>
  </div>
</details>

---

### To make a post request, what modern JS method should we use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
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
alert(result.message);
```

  </div>
  </div>
</details>

---
