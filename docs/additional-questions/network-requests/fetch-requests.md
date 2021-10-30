---
title: Fetch Requests
sidebar_position: 1
---

# Fetch Requests

# JAVASCRIPT THEORY

**Questions and Answers: Network requests**

**Network requests: Fetch**

### What are some of the use cases related to network requests?

**Interview Answer:** JavaScript can send network requests to the server and load new information whenever it is needed, like submitting and load user information.

**Technical Answer:** JavaScript can send network requests to the server and load new information whenever it is needed. For example, we can use a network request to submit an order, load user information, and receive periodic updates from a server.

Source: <https://javascript.info/fetch>

### What are differences between an XMLHttpRequest and Fetch API?

**Interview Answer:** Fetch is modern browser-based alternative to XMLHttpRequest, it also performs the same tasks related to network requests.

**Technical Answer:** The Fetch API is modern JavaScript alternative to XMLHttpRequest, it also performs the same task, network requests. The Fetch API is also built into the browser, but not supported in every browser, especially the old browsers like Internet Explorer 7 and 8 (can be polyfilled).

Code Example:

```js
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
  return response.json();
});
```

Source: <https://javascript.info/fetch>

### Explain the function and syntax of the JavaScript Fetch method.\*\*

**Interview Answer:** The fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. Fetch has two arguments including the url and optional options object. The URL is the url to be accessed on the server and the options object holds an array of parameters including method, headers etc.

**Technical Answer:** The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available. Fetch has two arguments including the url and optional options object. The URL is the url to be accessed on the server and the options object holds an array of parameters including method, headers etc.

**Syntax:** let promise = fetch(url, [options])

Source: <https://javascript.info/fetch><https://randomuser.me/api/portraits/women/35.jpg>

### Can you explain the first stage of the response process?

**Interview Answer:** First, the promise, returned by fetch, resolves with an object of the built-in Response class as soon as the server responds with headers. At this stage we can check HTTP status, to see whether it is successful or not, check headers, but we do not have the body yet. The promise rejects if the fetch was unable to make HTTP-request, e.g. network problems, or there’s no such site. It should be noted that abnormal HTTP-statuses, such as 404 or 500 do not cause an error. We can check the response and status by using the response properties response.ok and response.status.

Code Example:

```js
let response = await fetch(url);

if (response.ok) {
  // if HTTP-status is 200-299

  // get the response body (the method explained below)

  let json = await response.json();
} else {
  alert('HTTP-Error: ' + response.status);
}
```

Source: <https://javascript.info/fetch>

### Can you explain the second stage of the response process?

**Interview Answer:** Second, starts the process of getting the response body, we need to use an additional method call to get the response. The response provides multiple promise-based methods to access the body in various formats including text, json, formData, blob, and arrayBuffer.

Code Example:

```js
let url = 'https://api.github.com/repos/javascript-

tutorial/en.javascript.info/commits';

let response = await fetch(url);

let commits = await response.json(); // read response body and parse as JSON

alert(commits[0].author.login);
```

Source: <https://javascript.info/fetch>

### What is the limit on the number of responses we can read? For example, can we receive a text and json network response.\*\*

**Interview Answer:** No, we can choose only one body-reading method. For example, if we’ve already got the response with response.text(), then response.json() won’t work, as the body content has already been processed or consumed .

Code Example:

```js
let text = await response.text(); // response body consumed
let parsed = await response.json(); // fails (already consumed)
```

Source: <https://javascript.info/fetch>

### Can you briefly explain the response header Object in JavaScript?

**Interview Answer:** The response headers are available in a iterable Map-like headers object in response.headers. It is not exactly a Map, but it has similar methods to get individual headers by name or iterate over them.

Code Example:

```js
let response = await fetch('https://api.github.com/repos/javascript-

tutorial/en.javascript.info/commits');

// get one header

alert(response.headers.get('Content-Type')); // application/json; charset=utf-8

// iterate over all headers

for (let [key, value] of response.headers) {

    alert(`${key} = ${value}`);

}
```

Source: <https://javascript.info/fetch#response-headers>

### What is the proper way to implement or set a request header in JS?

**Interview Answer:** To set a request header in fetch, we can use the headers option. It has an object with outgoing headers. There are some limitations to what we can access in the HTTP header.

Code Example:

```js
let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret',
  },
});
```

Source: <https://javascript.info/fetch#response-headers>

### What is a forbidden header name in relation to the HTTP header?

**Interview Answer:** A forbidden header name is the name of any HTTP header that cannot be modified programmatically; specifically, an HTTP request header name (in contrast with a Forbidden response header name). Modifying such headers is forbidden because the user agent (browser) retains full control over them. Names starting with `Sec-` are reserved for creating new headers safe from APIs using Fetch that grant developers control over headers, such as XMLHttpRequest.

Source: <https://javascript.info/fetch#request-headers>

### To make a post request, what modern JS method should we use?

**Interview Answer:** To make a POST request, or a request with another method option, we need to use the fetch method. For example, when we want to use a method post with JSON. We will have to set the header and body inside of the Fetch options. We are not limited to just post requests as a method option. We also have access to HTTP requests and others. It should be noted, if the request body is a string, then Content-Type header is set to text/plain;charset=UTF-8 by default.

Code Example:

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

Source: <https://javascript.info/fetch#post-requests>
