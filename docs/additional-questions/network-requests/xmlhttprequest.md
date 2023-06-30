---
title: XMLHttpRequest
description: XMLHttpRequest is an older API that allows us to send and receive data from a server. XMLHttpRequest is a object that allows JavaScript to make HTTP requests.
sidebar_position: 8
sidebar_label: XMLHttpRequest
keywords:
  - xmlhttprequest
  - network requests
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
  - xmlhttprequest
  - network requests
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/XMLhttpSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>XMLHttpRequest | JavaScript Frontend Phone Interview Answers</title>
</head>

**Network Requests: XMLHttpRequest**

<CloseAllAnswers />

---

### What is XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest is a web API used by JavaScript to send HTTP or HTTPS requests directly to a web server and load the server response data back into the script.
  </div>
  </div>
</details>

---

### Why is XMLHttpRequest used?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest is used for asynchronous communication with a server, allowing web applications to fetch data from the server without requiring a full page reload, improving user experience.
  </div>
  </div>
</details>

---

### Is XMLHttpRequest synchronous or asynchronous?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest can operate in both synchronous and asynchronous modes, but the asynchronous mode is preferred because synchronous requests can block the browser's UI thread.
  </div>
  </div>
</details>

---

### What are the steps involved in making an XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To make an XMLHttpRequest, you first create an XMLHttpRequest object, then open a connection using the open() method, set up a callback for the onreadystatechange event, and finally, send the request with the send() method.
  </div><br />
  <div><strong className="codeExample">Here's a simple example of how you can use it:</strong><br /><br />

  <div></div>

```js
// Step 1: Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Step 2: Initialize a request
xhr.open('GET', 'https://api.example.com/data');

// Step 3: Set the responseType if you are expecting a specific data type
xhr.responseType = 'json';

// Step 4: Send the request
xhr.send();

// Step 5: Event handler for the request
xhr.onload = function() {
    if (xhr.status == 200) { // If the HTTP status is 200 OK
        console.log(xhr.response);
    } else {
        console.error('Error: ' + xhr.status); // e.g. 'Error: 404'
    }
}

// Step 6: Handle network errors
xhr.onerror = function() {
    console.error('Network Error');
};
```

---

:::note
Remember that XMLHttpRequest is a way to make HTTP requests, but it is not the only way. The Fetch API provides a more modern and powerful alternative to the XMLHttpRequest object, and it's recommended for new projects if it's supported in your target browsers.
:::

  </div>
  </div>
</details>

---

### What does the open() method do in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `open()` method in XMLHttpRequest initializes a request, setting the method (GET, POST, etc.), URL, and whether the request should be handled asynchronously or not.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

- **Here's a simple example**

```js
// Step 1: Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Step 2: Initialize a request
xhr.open('GET', 'https://api.example.com/data');

// Here, the open() method is used to initialize a GET request to 'https://api.example.com/data'.
```

- **Here's an example using the optional parameters**

```js
let xhr = new XMLHttpRequest();

// Initialize a request with user credentials and set it to be handled asynchronously
xhr.open('GET', 'https://api.example.com/data', true, 'username', 'password');
```

In the example above, the open() method initializes a GET request to '<https://api.example.com/data>', to be handled asynchronously, with the username 'username' and password 'password'.

  </div>
  </div>
</details>

---

### What is the purpose of the send() method in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `send()` method in XMLHttpRequest is used to send the request to the server. It may include request body data for methods like POST or PUT.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Step 1: Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Step 2: Initialize a request
xhr.open('GET', 'https://api.example.com/data');

// Step 3: Send the request
xhr.send();
```

In the example above, after the request is set up with `xhr.open()`, it is sent to the server with `xhr.send()`.

If you're making a `POST` request or otherwise need to send data to the server as part of the request, you can pass that data as a parameter to the `send()` method:

```javascript
// Step 1: Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Step 2: Initialize a request
xhr.open('POST', 'https://api.example.com/data');

// Step 3: Set appropriate headers for POST request
xhr.setRequestHeader("Content-Type", "application/json");

// Step 4: Prepare the data
let data = JSON.stringify({ key1: 'value1', key2: 'value2' });

// Step 5: Send the request with data
xhr.send(data);
```

In this `POST` request example, `xhr.setRequestHeader()` is used to set the content type of the request to 'application/json', and then the `send()` method is used to send a JSON string to the server.

  </div>
  </div>
</details>

---

### How do you handle the server response from an XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You handle the response from an XMLHttpRequest in the `onreadystatechange` event handler, checking if `readyState` is 4 and `status` is 200, then processing `responseText` or `responseXML`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Request completed and response received
    var response = xhr.responseText;
    console.log('Response: ' + response);
  }
};

xhr.send();
```

  </div>
  </div>
</details>

---

### Can you explain the readyState property in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The readyState property in XMLHttpRequest holds the status of the request, ranging from 0 (request not initialized) to 4 (request completed and response is ready).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how to use the `readyState` property in XMLHttpRequest:

```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // Request completed and response received
    var response = xhr.responseText;
    console.log('Response: ' + response);
  }
};

xhr.send();
```

In this example, the `onreadystatechange` event is used to track the changes in the `readyState` property. When `readyState` reaches the value of 4 (`DONE`) and the HTTP status is 200 (`OK`), the request is completed, and the response can be accessed through `responseText`.

  </div>
  </div>
</details>

---

### What does the status property in XMLHttpRequest represent?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `status` property in XMLHttpRequest represents the HTTP status code returned by the server, such as 200 for successful requests or 404 for not found.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT: ", xhr.status);

xhr.open("GET", "/server");
console.log("OPENED: ", xhr.status);

xhr.onprogress = () => {
  console.log("LOADING: ", xhr.status);
};

xhr.onload = () => {
  console.log("DONE: ", xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */

```

  </div>
  </div>
</details>

---

### What does the responseText property represent in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `responseText` property in XMLHttpRequest represents the text data received from a server following a successful HTTP request, typically in JSON or XML format.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// If specified, responseType must be empty string or "text"
xhr.responseType = "text";
```

  </div>
  </div>
</details>

---

### What is the difference between responseText and responseXML in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `responseText` and `responseXML` properties of an `XMLHttpRequest` object provide access to the response data. `responseText` returns the response as plain text while `responseXML` returns it as an XML document object, which you can traverse using JavaScript DOM methods.
  </div><br />
  <div><strong className="codeExample">Here's an example that shows how to use both:</strong><br /><br />

  <div></div>

```javascript
// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Initialize a request
xhr.open('GET', 'https://api.example.com/data.xml'); // Assuming the server returns XML data

// Send the request
xhr.send();

// Event handler for successful request
xhr.onload = function() {
    if (xhr.status == 200) { // If the HTTP status is 200 OK
        console.log(xhr.responseText); // Access the response data as plain text

        if(xhr.responseXML) {
            console.log(xhr.responseXML.getElementsByTagName("tagname")); // Access the XML data
        } else {
            console.log("The response is not XML");
        }
    } else {
        console.error('Error: ' + xhr.status);
    }
}

// Event handler for network error
xhr.onerror = function() {
    console.error('Network Error');
};
```

In this example, `xhr.responseText` will log the XML data as a string. If the server returned valid XML data, `xhr.responseXML` will parse the XML into a document object, which you can then traverse using DOM methods. If the response is not XML or is not correctly formatted, `responseXML` will be `null`.

  </div>
  </div>
</details>

---

### How can you handle errors in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In XMLHttpRequest, errors can be handled by checking the status property in the onreadystatechange event handler and executing appropriate code for error status codes.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how to handle errors in XMLHttpRequest:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

xhr.onerror = function() {
  console.log('Error occurred during the request.');
};

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // Request completed successfully
      var response = xhr.responseText;
      console.log('Response: ' + response);
    } else {
      // Request failed
      console.log('Error: ' + xhr.status);
    }
  }
};

xhr.send();
```

In this example, the `onerror` event handler is set to handle any error that occurs during the request. In the `onreadystatechange` event, we check if the request is completed (`readyState` equals 4) and then verify the status code. If the status is 200 (`OK`), the request is successful and the response can be processed. Otherwise, an error is logged with the corresponding status code.

  </div>
  </div>
</details>

---

### Can you abort an XMLHttpRequest? How?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, an XMLHttpRequest can be aborted by calling the `abort()` method on the XMLHttpRequest object, which immediately terminates the request.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// Initialize a request
xhr.open('GET', 'https://api.example.com/data');

// Send the request
xhr.send();

// Abort the request
xhr.abort();

// Event handler for abort event
xhr.onabort = function() {
    console.log('Request aborted');
}
```

  </div>
  </div>
</details>

---

### What are the limitations of XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest has limitations such as difficulty with cross-domain requests due to same-origin policy, inability to handle binary data until XMLHttpRequest 2, and issues with real-time communication compared to WebSockets.
  </div>
  </div>
</details>

---

### What is the Same Origin Policy in the context of XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Same Origin Policy is a security measure that restricts how a document or script loaded from one origin can interact with a resource from another origin, impacting XMLHttpRequests.
  </div><br />
  </div>
</details>

---

### How can you send data to the server using XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To send data to a server using XMLHttpRequest, use the `open()` method to initiate a POST request, then pass the data as an argument to the `send()` method.
  </div>
  </div>
</details>

---

### Can you send a GET request with XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can send a GET request with XMLHttpRequest by using the `open()` method, specifying 'GET' as the method, and the URL as the second argument, then call `send()`.
  </div>
  </div>
</details>

---

### Can you send POST requests with XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can send a POST request with XMLHttpRequest by using the `open()` method, specifying 'POST' as the method, and then passing data in the `send()` method.
  </div>
  </div>
</details>

---

### What's the role of HTTP headers in XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong>HTTP headers in XMLHttpRequest provide additional parameters for the HTTP request or response, such as content type, encoding, authorization, and cookies, communicated between the client and server.
  </div>
  </div>
</details>

---

### Can you modify HTTP headers in XMLHttpRequest? How?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can modify HTTP headers in XMLHttpRequest using the `setRequestHeader()` method, which accepts two arguments: the header name and the header value.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how you can modify HTTP headers in an XMLHttpRequest:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Authorization', 'Bearer your-token');
xhr.send();
```

In this example, 'Content-Type' is set to 'application/json', indicating that the request is sending JSON data. The 'Authorization' header is set with a Bearer token for authentication.

  </div>
  </div>
</details>

---

### Can you briefly explain the purpose of the XMLHttpRequest object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The XMLHttpRequest object enables web applications to interact with servers asynchronously, to fetch, send, and manipulate data without reloading the entire web page, enhancing user experience.
    </div><br/>
  <div><strong>Technical Response:</strong> XMLHttpRequest is a built-in browser object that allows JavaScript to make HTTP requests. Even though it has the term "XML" in its name, it can work on any data, not just those in XML format. We can upload and download files, track progress, and perform a variety of other things. There is currently another, more recent method fetch, which partly deprecates XMLHttpRequest. Developers utilize XMLHttpRequest in modern web development for one of three reasons. One of the more historical reasons is that we need to maintain existing scripts using XMLHttpRequest or that we need to support ancient browsers without polyfills. We want something that fetch does not currently provide, such as tracking upload progress.
    </div>
  </div>
</details>

---

### What are the two modes of operation that an XMLHttpRequest supports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest supports two modes of operation: synchronous, which blocks execution until the request completes, and asynchronous, which doesn't block and is more commonly used.
    </div><br />
  <div><strong>Technical Response:</strong> XMLHttpRequest uses both synchronous and asynchronous modes of operation. This mode of operation invokes both, synchronously or asynchronously, using the XMLHttpRequest open method. The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.  If you want to run your request in async, then the async parameter should be set to true; otherwise, false for the default behavior. We should note that an open call, contrary to its name, does not open the connection. It only configures the request, but the network activity only starts with the call of send.
    </div><br />
    <strong>Syntax: </strong> xhr.open(method, URL, [async, user, password]);<br /><br />
  </div>
</details>

---

### How do you open a connection and send a XMLHttpRequest to the server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To open a connection and send an XMLHttpRequest to the server, you would create an XMLHttpRequest object, call its `open()` method to specify the method and URL, and then call its `send()` method to initiate the request.
    </div><br />
    <strong>Syntax: </strong> xhr.send([body]);<br /><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of opening a connection and sending an XMLHttpRequest to the server using JavaScript:

```javascript
// Create an XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the request method and URL
xhr.open('GET', 'https://api.example.com/data', true);

// Set optional request headers
xhr.setRequestHeader('Content-Type', 'application/json');

// Set a callback function to handle the response
xhr.onload = function() {
  if (xhr.status === 200) {
    // Request was successful
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  } else {
    // Request failed
    console.log('Error: ' + xhr.status);
  }
};

// Send the request
xhr.send();
```

In this example, a GET request is sent to the URL `https://api.example.com/data`. The `onload` function handles the response when it is received. You can modify the method (e.g., POST, PUT) and the URL based on your specific needs.

  </div>
  </div>
</details>

---

### What are the three events most widely used in XMLHttpRequests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three most widely used events in XMLHttpRequests are `onload` (successful request completion), `onerror` (request error), and `onprogress` (tracking the progress of data transfer).
    </div><br />
  <div><strong>Technical Response:</strong> The most widely used events in XMLHttpRequest are the load, error, and progress events. The load event happens when the request is complete (even if HTTP status is like 400 or 500), and the response fully downloads. The error event happens when the request could not transmit, e.g., network down or invalid URL. The progress event triggers periodically while the response is downloaded and reports how much has gotten downloaded.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> xhr.send([body]);<br /><br />

  <div></div>

```js
xhr.onload = function () {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function () {
  // only triggers if the request couldn't be made at all
  alert(`Network Error`);
};

xhr.onprogress = function (event) {
  // triggers periodically
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  alert(`Received ${event.loaded} of ${event.total}`);
};
```

  </div>
  </div>
</details>

---

### What properties can we use to access the results of a XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `responseText` property contains the response as a string, `responseXML` contains the response as an XML document (if applicable), and `status` and `statusText` provide the HTTP status code and status message, respectively.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of accessing the results of a XMLHttpRequest using JavaScript:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);
xhr.onload = function() {
  if (xhr.status === 200) {
    // Access the response as a string
    var responseText = xhr.responseText;
    console.log(responseText);
    
    // Access the response as an XML document
    var responseXML = xhr.responseXML;
    console.log(responseXML);
    
    // Access the HTTP status code and status message
    var status = xhr.status;
    var statusText = xhr.statusText;
    console.log('Status: ' + status);
    console.log('Status Text: ' + statusText);
  } else {
    console.log('Error: ' + xhr.status);
  }
};
xhr.send();
```

In this example, after the request is sent, the `onload` function is triggered upon a successful response. You can access the response using `responseText` as a string or `responseXML` if the response is XML. The HTTP status code and status message can be accessed through `status` and `statusText`, respectively.

  </div>
  </div>
</details>

---

### What are the states of the XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The states of XMLHttpRequest are: 0 (uninitialized), 1 (opened), 2 (headers received), 3 (loading), and 4 (done).
    </div><br />
  <div><strong>Technical Response:</strong> XMLHttpRequest changes between states as it progresses include unsent (0), opened (1), headers_received (2), loading (3), and done (4). A numeric value marks each. Unsent refers to the XMLHttpRequest client creation, but the open() method hasn't gotten called yet. Opened is when the open() method invokes. During this state, the request headers are set using the setRequestHeader() method, and the send() method is called, which initiates the fetch. The headers_received state refers to the send() method, and the response headers fully transmit. The loading state refers to the response body being received. The final state completes, defining that the data transfer has gotten completed or something went wrong during the transfer (e.g., infinite redirects). The current state is accessible as xhr.readyState. An XMLHttpRequest object travels them in the order 0 → 1 → 2 → 3 → … → 3 → 4. State 3 repeats every time a data packet is received over the network.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> Tracking readystatechange event<br /><br />

<strong>Syntax: </strong> xhr.readyState<br /><br />

  <div></div>

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState == 3) {
    // loading
  }
  if (xhr.readyState == 4) {
    // request finished
  }
};
```

  </div>
  </div>
</details>

---

### What method do we use to terminate a XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `abort()` method is used to terminate a XMLHttpRequest, aborting the request and stopping further processing of the response.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how to terminate a XMLHttpRequest using the `abort()` method:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

// Set a timeout to abort the request after 5 seconds
var timeout = setTimeout(function() {
  xhr.abort();
  console.log('Request aborted due to timeout');
}, 5000);

xhr.onload = function() {
  clearTimeout(timeout);
  if (xhr.status === 200) {
    // Handle the successful response
    console.log('Request completed successfully');
  } else {
    // Handle the response error
    console.log('Error: ' + xhr.status);
  }
};

// Send the request
xhr.send();
```

In this example, a timeout of 5 seconds is set using `setTimeout()`. If the request does not complete within the specified time, the `abort()` method is called to terminate the request. The timeout is cleared using `clearTimeout()` in the `onload` event to prevent the abort when the request completes successfully.

  </div>
  </div>
</details>

---

### What is the mode if the open() methods async parameter sets to false?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the `async` parameter of the `open()` method is set to `false`, the mode of the XMLHttpRequest is synchronous, meaning the request blocks the execution of other code until it is completed.
    </div><br />
  <div><strong>Technical Response:</strong> If the open method's third async parameter is set to false. The request is made in a synchronous manner. To put it another way, JavaScript execution pauses at send() and continues when the response is received. Similar to alert or prompt instructions. While synchronous calls appear to be a good idea, they are rarely used since they restrict in-page JavaScript from being run until the loading is complete. In some browsers, scrolling gets difficult. If the synchronous call takes too long, the browser may advise that the "hanging" webpage be closed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> xhr.open('GET', '/article/xmlhttprequest/hello.txt', false)<br /><br />

  <div></div>

```js
let xhr = new XMLHttpRequest();

xhr.open('GET', '/article/xmlhttprequest/hello.txt', false); // <-

try {
  xhr.send();
  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    alert(xhr.response);
  }
} catch (err) {
  // instead of onerror
  alert('Request failed');
}
```

  </div>
  </div>
</details>

---

### Can you send custom headers via an XMLHttpRequest to a server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can send custom headers via an XMLHttpRequest to a server by using the `setRequestHeader()` method to set custom header values before sending the request.
    </div>
  </div>
</details>

---

### What does the setRequestHeader() method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `setRequestHeader()` method in an XMLHttpRequest is used to set the value of a specific HTTP request header before sending the request to the server.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> xhr.setRequestHeader(name, value)<br /><br />

  <div></div>

```js
xhr.setRequestHeader('Content-Type', 'application/json');
```

  </div>
  </div>
</details>

---

### Is there any restriction on the Headers in an XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are some restrictions on headers in an XMLHttpRequest. The browser may block certain headers (e.g., `Set-Cookie`) for security reasons, and some headers require server permission (e.g., `Content-Type` for cross-origin requests) due to CORS restrictions.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of how to set custom headers using the `setRequestHeader()` method in an XMLHttpRequest:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

// Set custom headers
xhr.setRequestHeader('Authorization', 'Bearer token123');
xhr.setRequestHeader('X-Custom-Header', 'Custom Value');

xhr.onload = function() {
  if (xhr.status === 200) {
    // Handle the successful response
    console.log('Request completed successfully');
  } else {
    // Handle the response error
    console.log('Error: ' + xhr.status);
  }
};

// Send the request
xhr.send();
```

In this example, two custom headers are set: `Authorization` with a bearer token value and `X-Custom-Header` with a custom value. These headers will be sent with the XMLHttpRequest request to the server.

  </div>
  </div>
</details>

---

### Can you explain the function of the getResponseHeader() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `getResponseHeader()` method returns the value of a specific response header received from the server after an XMLHttpRequest.
    </div><br />
  <div><strong>Technical Response:</strong> The XMLHttpRequest method getResponseHeader() returns the string containing the text of a particular or single header's value. If there are multiple response headers with the same name, their values return as a single concatenated string, where each value is separated from the previous one by a pair of commas and a space. The getResponseHeader() method returns the value as a UTF byte sequence. It retrieves the response header with the given name (except Set-Cookie and Set-Cookie2).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
xhr.getResponseHeader('Content-Type');
```

  </div>
  </div>
</details>

---

### Can you explain the function of the getAllResponseHeader() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `getAllResponseHeaders()` method returns all the response headers as a string after an XMLHttpRequest to the server has been made.
    </div><br/>
  <div><strong>Interview Response:</strong> The XMLHttpRequest method getAllResponseHeaders() returns all the response headers, separated by CRLF, as a string or returns null if no response transmits. If a network error happens, an empty string returns. It returns all response headers, except Set-Cookie and Set-Cookie2.
    </div>
    <br />
  <div><strong className="codeExample">Data Example:</strong><br /><br />

  <div></div>

```js
Cache-Control: max-age=31536000

Content-Length: 4260

Content-Type: image/png

Date: Sat, 08 Sep 2012 16:53:16 GMT
```

<p>Because the line break between headers is always "\r\n" (regardless of operating system), we can simply divide it into independent headers. A colon followed by a space ": " is always used as a separator between the name and the value. That is specified in the standard. So, if we want to acquire an object with name/value pairs, we'll need to use some JS.</p>

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let headers = xhr
  .getAllResponseHeaders()
  .split('\r\n')
  .reduce((result, current) => {
    let [name, value] = current.split(': ');
    result[name] = value;
    return result;
  }, {});

// headers['Content-Type'] = 'image/png'
```

  </div>
  </div>
</details>

---

### What built-in object can we use to make a POST request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The FormData object can be used to make a POST request for forms, it's often used with the XMLHttpRequest object.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<script>
  // creates an object
  let formData = new FormData([form]);

  formData.append(name, value); // appends a field
</script>

<form name="person">
  <input name="name" value="John" />
  <input name="surname" value="Smith" />
</form>

<script>
  /*** FILL FROM <FORM> EXAMPLE ***/
  let formData = new FormData(document.forms.person);

  // add one more field
  formData.append('middle', 'Lee');

  // send it out
  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/article/xmlhttprequest/post/user');
  xhr.send(formData);

  xhr.onload = () => alert(xhr.response);
</script>
```

  </div>
  </div>
</details>

---

### Is there a way to track upload progress with an XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can track upload progress with an XMLHttpRequest by using the `upload` property and its `progress` event to monitor the progress of the data being uploaded to the server.
    </div><br />
  <div><strong>Technical Details:</strong> If we upload something big, we are undoubtedly more interested in tracking the upload progress. But we should be aware that the xhr.onprogress doesn’t help here. We use the xhr.upload method to track upload progress, and it generates events similar to xhr, but xhr.upload triggers them solely on uploading.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input type="file" onchange="upload(this.files[0])" />

<script>
  function upload(file) {
    let xhr = new XMLHttpRequest();

    // track upload progress
    xhr.upload.onprogress = function (event) {
      console.log(`Uploaded ${event.loaded} of ${event.total}`);
    };

    // track completion: both successful or not
    xhr.onloadend = function () {
      if (xhr.status == 200) {
        console.log('success');
      } else {
        console.log('error ' + this.status);
      }
    };

    xhr.open('POST', '/article/xmlhttprequest/post/upload');
    xhr.send(file);
  }
</script>
```

  </div>
  </div>
</details>

---

### How do cross-origin request function in relation to XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cross-origin requests in XMLHttpRequest are subject to the same-origin policy. They require server permission through CORS (Cross-Origin Resource Sharing) headers, allowing controlled access to resources from different domains, protocols, or ports.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of making a cross-origin request using XMLHttpRequest with CORS:

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data', true);

// Set CORS headers to allow cross-origin request
xhr.setRequestHeader('Origin', 'https://www.example.com');

xhr.onload = function() {
  if (xhr.status === 200) {
    // Handle the successful response
    console.log('Request completed successfully');
    var response = xhr.responseText;
    console.log(response);
  } else {
    // Handle the response error
    console.log('Error: ' + xhr.status);
  }
};

// Send the request
xhr.send();
```

In this example, a GET request is made to `https://api.example.com/data` from the origin `https://www.example.com`. The server needs to include appropriate CORS headers (such as `Access-Control-Allow-Origin`) to allow the cross-origin request to succeed. Without proper CORS configuration, the request may be blocked due to the same-origin policy.

  </div>
  </div>
</details>

---
