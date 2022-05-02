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

<head>
  <title>XMLHttpRequest | JavaScript Frontend Phone Interview Answers</title>
</head>

**Network Requests: XMLHttpRequest**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you briefly explain the purpose of the XMLHttpRequest object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest is a built-in browser object that allows JavaScript to make HTTP requests. Even though it has the term "XML" in its name, it can work on any data, not just those in XML format. We can upload and download files, track progress, and perform a variety of other things. There is currently another, more recent method fetch, which partly deprecates XMLHttpRequest. Developers utilize XMLHttpRequest in modern web development for one of three reasons. One of the more historical reasons is that we need to maintain existing scripts using XMLHttpRequest or that we need to support ancient browsers without polyfills. We want something that fetch does not currently provide, such as tracking upload progress.
    </div>
  </div>
</details>

---

### What are the two modes of operation that an XMLHttpRequest supports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest uses both synchronous and asynchronous modes of operation. This mode of operation invokes both, synchronously or asynchronously, using the XMLHttpRequest open method. The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.  If you want to run your request in async, then the async parameter should be set to true; otherwise, false for the default behavior. We should note that an open call, contrary to its name, does not open the connection. It only configures the request, but the network activity only starts with the call of send.
    </div><br />
    <strong>Syntax: </strong> xhr.open(method, URL, [async, user, password]);<br /><br />
  </div>
</details>

---

### How do you open a connection and send a XMLHttpRequest to the server?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want to open a connection and send a XMLHttpRequest to a server, we must invoke the send method to send the message body. Some request methods like GET do not have a body. And some of them, like POST use the body to send the data to the server.
    </div><br />
    <strong>Syntax: </strong> xhr.send([body]);<br /><br />
  </div>
</details>

---

### What are the three events most widely used in XMLHttpRequests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most widely used events in XMLHttpRequest are the load, error, and progress events. The load event happens when the request is complete (even if HTTP status is like 400 or 500), and the response fully downloads. The error event happens when the request could not transmit, e.g., network down or invalid URL. The progress event triggers periodically while the response is downloaded and reports how much has gotten downloaded.
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
  <div><strong>Interview Response:</strong> The properties we can use to access the results of an XMLHttpRequest include the status, statusText, and response properties. We can also specify a timeout using the timeout property. If the request fails or does not return within the given time, it cancels, triggering a timeout event.
    </div><br />
    <strong>Syntax: </strong> xhr.timeout = 10000; // timeout in ms, 10 seconds<br /><br />
  </div>
</details>

---

### What are the states of the XMLHttpRequest?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> XMLHttpRequest changes between states as it progresses include unsent (0), opened (1), headers_received (2), loading (3), and done (4). A numeric value marks each. Unsent refers to the XMLHttpRequest client creation, but the open() method hasn't gotten called yet. Opened is when the open() method invokes. During this state, the request headers are set using the setRequestHeader() method, and the send() method is called, which initiates the fetch. The headers_received state refers to the send() method, and the response headers fully transmit. The loading state refers to the response body being received. The final state completes, defining that the data transfer has gotten completed or something went wrong during the transfer (e.g., infinite redirects). The current state is accessible as xhr.readyState. An XMLHttpRequest object travels them in the order 0 → 1 → 2 → 3 → … → 3 → 4. State 3 repeats every time a data packet is received over the network.
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
  <div><strong>Interview Response:</strong> We can terminate the request at any time. The call to xhr.abort() triggers the abort event, and xhr.status becomes 0 (unset state or has not been initialized).
    </div>
  </div>
</details>

---

### What is the mode if the open() methods async parameter sets to false?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the open method's third async parameter is set to false. The request is made in a synchronous manner. To put it another way, JavaScript execution pauses at send() and continues when the response is received. Similar to alert or prompt instructions. While synchronous calls appear to be a good idea, they are rarely used since they restrict in-page JavaScript from being run until the loading is complete. In some browsers, scrolling gets difficult. If the synchronous call takes too long, the browser may advise that the "hanging" webpage be closed.
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
  <div><strong>Interview Response:</strong> XMLHttpRequest allows both to send custom headers and read headers from the response.
    </div>
  </div>
</details>

---

### What does the setRequestHeader method do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The setRequestHeader sets the request header with the given name and value.
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
  <div><strong>Interview Response:</strong> Several headers are managed exclusively by the browser, e.g., Referer and Host. XMLHttpRequest is not allowed to change them for user safety and the correctness of the request. Another peculiarity of XMLHttpRequest is that one cannot undo setRequestHeader. Once the header sets, additional calls add information to the header but do not overwrite it.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
xhr.setRequestHeader('X-Auth', '123');
xhr.setRequestHeader('X-Auth', '456');

// the header will be:
// X-Auth: 123, 456
```

  </div>
  </div>
</details>

---

### Example the function and syntax of the getResponseHeader() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The XMLHttpRequest method getResponseHeader() returns the string containing the text of a particular or single header's value. If there are multiple response headers with the same name, their values return as a single concatenated string, where each value is separated from the previous one by a pair of commas and a space. The getResponseHeader() method returns the value as a UTF byte sequence. It retrieves the response header with the given name (except Set-Cookie and Set-Cookie2).
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

### Can you explain the function and syntax of the getAllResponseHeader() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
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
  <div><strong>Interview Response:</strong> To make a POST request, we can use the built-in FormData object. We can create it, optionally fill it from the form, and append more fields if needed.
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
  <div><strong>Interview Response:</strong> If we upload something big, we are undoubtedly more interested in tracking the upload progress. But we should be aware that the xhr.onprogress doesn’t help here. We use the xhr.upload method to track upload progress, and it generates events similar to xhr, but xhr.upload triggers them solely on uploading.
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
  <div><strong>Interview Response:</strong> XMLHttpRequest can make cross-origin requests using the same CORS policy as fetch. Like fetch, it does not send cookies and HTTP authorization to another origin by default. To enable them, set xhr.withCredentials to true.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.open('POST', 'http://anywhere.com/request');
```

  </div>
  </div>
</details>

---
