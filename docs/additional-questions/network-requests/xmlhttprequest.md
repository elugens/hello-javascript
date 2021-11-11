---
title: XMLHttpRequest
sidebar_position: 8
---

# XMLHttpRequest

**Network Requests: XMLHttpRequest**

<head>
  <title>XMLHttpRequest - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you briefly explain the purpose of the XMLHttpRequest object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript. Despite of having the word “XML” in its name, it can operate on any data, not only in XML format. We can upload/download files, track progress and much more. Right now, there is another, more modern method fetch, that somewhat deprecates XMLHttpRequest. In modern web-development XMLHttpRequest is used for one of three reasons. One of the more historical purposes is that we need to support existing scripts with XMLHttpRequest or we need to support old browsers, and don’t want polyfills. We need something that fetch can’t do yet, e.g. to track upload progress.
    </div>
  </div>
</details>

Source: <https://javascript.info/xmlhttprequest>

### What are the two modes of operation that an XMLHttpRequest uses?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest use both synchronous and asynchronous modes of operation. This can be invoked, synchronously or asynchronously, using the XMLHttpRequest open method. The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one. If you want to run your request in async then the async parameter should be set to true, otherwise false for the default behavior. It should be noted that open call, contrary to its name, does not open the connection. It only configures the request, but the network activity only starts with the call of send.
    </div>
  </div>
</details>

**Syntax:** xhr.open(method, URL, [async, user, password])

Source: <https://javascript.info/xmlhttprequest#the-basics>

### How do you open a connection and send a XMLHttpRequest to the server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want to open a connection and send a XMLHttpRequest to a server we must invoke the send method to send the message body. Some request methods like GET do not have a body. And some of them like POST use body to send the data to the server.
    </div>
  </div>
</details>

**Syntax:** xhr.send([body])

Source: <https://javascript.info/xmlhttprequest#the-basics>

### What are the three events most widely used in XMLHttpRequests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most widely events used in XMLHttpRequest are the load, error, and progress events. The load event happens when the request is complete (even if HTTP status is like 400 or 500), and the response is fully downloaded. The error event happens when the request could not be made, e.g., network down or invalid URL. The progress event triggers periodically while the response is being downloaded, reports how much has been downloaded.
    </div>
  </div>
</details>

**Syntax:** xhr.send([body])

Code Example:

```js
xhr.onload = function () {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function () {
  // only triggers if the request couldn't be made at all

  alert(`Network Error`);
};

xhr.onprogress = function (event) {
  // triggers periodically

  // event.loaded - how many bytes downloaded

  // event.lengthComputable = true if the server sent Content-Length header

  // event.total - total number of bytes (if lengthComputable)

  alert(`Received ${event.loaded} of ${event.total}`);
};
```

Source: <https://javascript.info/xmlhttprequest#the-basics>

### What properties can we use to access the results of a XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The properties we can use to access the results of a XMLHttpRequest include the status, statusText, and response properties. We can also specify a timeout using the timeout property. If the request fails or does not return within the given time, it gets canceled and timeout event triggers.
    </div>
  </div>
</details>

**Syntax:** xhr.timeout = 10000; // timeout in ms, 10 seconds

Code Example:

```js
xhr.onload = function () {
  alert(`Loaded: ${xhr.status} ${xhr.response}`);
};

xhr.onerror = function () {
  // only triggers if the request couldn't be made at all

  alert(`Network Error`);
};

xhr.onprogress = function (event) {
  // triggers periodically

  // event.loaded - how many bytes downloaded

  // event.lengthComputable = true if the server sent Content-Length header

  // event.total - total number of bytes (if lengthComputable)

  alert(`Received ${event.loaded} of ${event.total}`);
};
```

Source: <https://javascript.info/xmlhttprequest#the-basics>

### What are the states of the XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest changes between states as it progresses include unsent (0), opened (1), headers_received (2), loading (3), and done (4). Each is marked by a numeric value. Unsent refers to the XMLHttpRequest client has been created, but the open() method hasn't been called yet. Opened is the when the open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch. The headers_received state refers to the send() method being called and the response headers have being received. The loading state refers to the response body is being received. The final state is done defining that the data transfer has been completed or something went wrong during the transfer (e.g., infinite redirects). The current state is accessible as xhr.readyState. An XMLHttpRequest object travels them in the order 0 → 1 → 2 → 3 → … → 3 → 4. State 3 repeats every time a data packet is received over the network.
    </div>
  </div>
</details>

**Syntax:** xhr.readyState

Example: Tracking readystatechange event

```js
xhr.onreadystatechange = function () {
  if (xhr.readyState == 3) {
    // loading
  }

  if (xhr.readyState == 4) {
    // request finished
  }
};
```

Source: <https://javascript.info/xmlhttprequest#ready-states>

### What method is used to terminate a XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can terminate the request at any time. The call to xhr.abort() triggers the abort event, and xhr.status becomes 0 (unset state or has not been initialized).
    </div>
  </div>
</details>

Source: <https://javascript.info/xmlhttprequest#aborting-request>

### What is the mode if the open() methods async parameter is set to false?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If in the open method the third parameter async is set to false, the request is made synchronously. In other words, JavaScript execution pauses at send() and resumes when the response is received. Somewhat like alert or prompt commands. It might look good, but synchronous calls are used rarely, because they block in-page JavaScript till the loading is complete. In some browsers it becomes impossible to scroll. If a synchronous call takes too much time, the browser may suggest to close the “hanging” webpage.
    </div>
  </div>
</details>

**Sytnax:** xhr.open('GET', '/article/xmlhttprequest/hello.txt', false)

Code Example:

```js
let xhr = new XMLHttpRequest();

xhr.open('GET', '/article/xmlhttprequest/hello.txt', false); // <--

try {
  xhr.send();

  if (xhr.status != 200) {
    alert(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    alert(xhr.response);
  }
} catch (err) {
  // instead of onerror

  alert('Request failed');
}
```

Source: <https://javascript.info/xmlhttprequest#synchronous-requests>

### Can you send custom headers via an XMLHttpRequest to a server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest allows both to send custom headers and read headers from the response.
    </div>
  </div>
</details>

Source: <https://javascript.info/xmlhttprequest#http-headers>

### What does the setRequestHeader method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The setRequestHeader sets the request header with the given name and value.
    </div>
  </div>
</details>

**Syntax:** xhr.setRequestHeader(name, value)

Example:

```js
xhr.setRequestHeader('Content-Type', 'application/json');
```

Source: <https://javascript.info/xmlhttprequest#http-headers>

### Does a XMLHttpRequest have any limitations in relation the Headers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Several headers are managed exclusively by the browser, e.g., Referer and Host. XMLHttpRequest is not allowed to change them, for the sake of user safety and correctness of the request. Another peculiarity of XMLHttpRequest is that one cannot undo setRequestHeader. Once the header is set, it is set. Additional calls add information to the header, but do not overwrite it.
    </div>
  </div>
</details>

Code Example:

```js
xhr.setRequestHeader('X-Auth', '123');

xhr.setRequestHeader('X-Auth', '456');

// the header will be:

// X-Auth: 123, 456
```

Source: <https://javascript.info/xmlhttprequest#http-headers>

### Example the function and syntax of the getResponseHeader() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The XMLHttpRequest method getResponseHeader() returns the string containing the text of a particular or single header's value. If there are multiple response headers with the same name, then their values are returned as a single concatenated string, where each value is separated from the previous one by a pair of comma and space. The getResponseHeader() method returns the value as a UTF byte sequence. Basically, it gets the response header with the given name (except Set-Cookie and Set-Cookie2).
    </div>
  </div>
</details>

Code Example:

```js
xhr.getResponseHeader('Content-Type');
```

Source: <https://javascript.info/xmlhttprequest#http-headers>

### Can you explain the function and syntax of the getAllResponseHeader() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The XMLHttpRequest method getAllResponseHeaders() returns all the response headers, separated by CRLF, as a string, or returns null if no response has been received. If a network error happened, an empty string is returned. Basically, it returns all response headers, except Set-Cookie and Set-Cookie2.
    </div>
  </div>
</details>

**Data Example:**

```json
Cache-Control: max-age=31536000

Content-Length: 4260

Content-Type: image/png

Date: Sat, 08 Sep 2012 16:53:16 GMT
```

The line break between headers is always "\r\n" (does not depend on OS), so we can easily split it into individual headers. The separator between the name and the value is always a colon followed by a space ": ". That is fixed in the specification. So, if we want to get an object with name/value pairs, we need to throw in a bit JS.

Code Example:

```js
let headers = xhr

  .getAllResponseHeaders()

  .split('\r\n')

  .reduce((result, current) => {
    let [name, value] = current.split(': ');

    result[name] = value;

    return result;
  }, {});

// headers['Content-Type'] = 'image/png'
```

Source: <https://javascript.info/xmlhttprequest#http-headers>

### What built-in object can we used to make a POST request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To make a POST request, we can use the built-in FormData object. We can create it, optionally fill from a form, append more fields if needed.
    </div>
  </div>
</details>

Code Example:

```html
<script>
  // creates an object
  let formData = new FormData([form]);

  formData.append(name, value); // appends a field
</script>

<form name="person">
  <input name="name" value="John" />

  <input name="surname" value="Smith" />
</form>

<script>
  /*** FILL FROM <FORM> EXAMPLE */

  let formData = new FormData(document.forms.person);

  // add one more field

  formData.append('middle', 'Lee');

  // send it out

  let xhr = new XMLHttpRequest();

  xhr.open('POST', '/article/xmlhttprequest/post/user');

  xhr.send(formData);

  xhr.onload = () => alert(xhr.response);
</script>
```

Source: <https://javascript.info/xmlhttprequest#post-formdata>

### Is there a way to track upload progress in relation to a XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we are uploading something big, then we are surely more interested in tracking the upload progress. But we should be aware that the xhr.onprogress doesn’t help here. The xhr.upload method is used to track upload progress. It generates events, similar to xhr, but xhr.upload triggers them solely on uploading.
    </div>
  </div>
</details>

Code Example:

```html
<input type="file" onchange="upload(this.files[0])" />

<script>
  function upload(file) {
    let xhr = new XMLHttpRequest();

    // track upload progress

    xhr.upload.onprogress = function (event) {
      console.log(`Uploaded ${event.loaded} of ${event.total}`);
    };

    // track completion: both successful or not

    xhr.onloadend = function () {
      if (xhr.status == 200) {
        console.log('success');
      } else {
        console.log('error ' + this.status);
      }
    };

    xhr.open('POST', '/article/xmlhttprequest/post/upload');

    xhr.send(file);
  }
</script>
```

Source: <https://javascript.info/xmlhttprequest#upload-progress>

### How do cross-origin request function in relation to XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest can make cross-origin requests, using the same CORS policy as fetch. Just like fetch, it does not send cookies and HTTP-authorization to another origin by default. To enable them, set xhr.withCredentials to true.
    </div>
  </div>
</details>

Code Example:

```js
let xhr = new XMLHttpRequest();

xhr.withCredentials = true;

xhr.open('POST', 'http://anywhere.com/request');
```

Source: <https://javascript.info/xmlhttprequest#cross-origin-requests>
