---
title: Fetch - Download Progress
description: Fetch - Download Progress is used to track the progress of a download. How can we track download progress in JavaScript? JavaScript Interview Questions
sidebar_position: 3
sidebar_label: Fetch - Download Progress
keywords:
  - fetch download progress
  - track download progress
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
  - fetch download progress
  - track download progress
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FetchDownloadSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Fetch Download Progress| JavaScript Interview Questions</title>
</head>

**Network Requests: Fetch - Download Progress**

<CloseAllAnswers />

---

### What is the purpose of a download progress bar in JavaScript applications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It's used to display the current status of a file download, enhancing user experience by providing visual feedback on the completion time.
  </div><br />
  </div>
</details>

---

### How do we typically monitor download progress in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Typically, download progress is monitored in JavaScript using the `XMLHttpRequest`'s `progress` event. Fetch API doesn't natively support progress monitoring but it can be achieved using a service worker or `ReadableStream` API.
  </div><br />
  </div>
</details>

---

### What properties does the 'progress' event carry?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `progress` event carries three properties: `lengthComputable` (boolean indicating if total size is known), `loaded` (bytes downloaded so far), and `total` (total bytes to be downloaded).
  </div><br />
  </div>
</details>

---

### Can we monitor download progress using Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch API doesn't support direct progress monitoring. But it can be accomplished using a XMLHttpRequest, service worker, or the ReadableStream API.
  </div><br />
  </div>
</details>

---

### How can you simulate a progress bar for demonstration or testing?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use `setInterval()` to increment a value over time and update the width of an HTML element, thus simulating a progress bar for demonstration or testing.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple code snippet for simulating a progress bar using `setInterval()`:

```html
<!DOCTYPE html>
<html>
<body>

<div id="myProgress" style="width: 100%; background-color: #ddd;">
  <div id="myBar" style="width: 0%; height: 30px; background-color: #4caf50;"></div>
</div>

<script>
let width = 0;
let intervalId = setInterval(() => {
  if (width >= 100) {
    clearInterval(intervalId);
  } else {
    width++; 
    document.getElementById('myBar').style.width = width + '%'; 
  }
}, 100);
</script>

</body>
</html>
```

This script will increase the width of the progress bar from 0% to 100% over 10 seconds. You can adjust the duration by changing the interval value.

  </div>
  </div>
</details>

---

### What is throttling in the context of download progress updates?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Throttling in the context of download progress updates refers to limiting the frequency of progress updates to avoid excessive processing or interface updates, enhancing performance and user experience.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic example of throttling in the context of progress updates using XMLHttpRequest. We'll update the progress every 500ms, rather than every time the `progress` event fires:

```javascript
let xhr = new XMLHttpRequest();
let lastUpdateTime = Date.now();

xhr.open('GET', 'https://your-url.com/your-file.ext', true);
xhr.onprogress = function (e) {
    // Only update progress every 500ms
    if (Date.now() - lastUpdateTime > 500) {
        lastUpdateTime = Date.now();
        if (e.lengthComputable) {
            let percent = (e.loaded / e.total) * 100;
            console.log(percent + '%');
        }
    }
};
xhr.onloadstart = function (e) {
    console.log('Download started...');
};
xhr.onloadend = function (e) {
    console.log('Download completed...');
};
xhr.send();
```

This helps to reduce the number of progress updates, improving efficiency, particularly for fast downloads or frequent progress events.

  </div>
  </div>
</details>

---

### Why might you use 'requestAnimationFrame' in building a progress bar?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> `requestAnimationFrame` is used in progress bar construction to ensure that updates align with browser repaints, providing smoother visual transitions and reducing unnecessary calculations between frames.
  </div><br />
  </div>
</details>

---

### How does chunked transfer encoding impact download progress tracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Chunked transfer encoding sends data in pieces, without specifying the total size upfront. This makes it impossible to compute a percentage for download progress, as the total size isn't known.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

In this example, we'll use Node.js to create a simple server that sends data using chunked transfer encoding.

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain', 'Transfer-Encoding': 'chunked' });
    let i = 0;
    setInterval(function() {
        res.write(`This is chunk number ${++i}\n`);
        if (i === 5) { // Let's say we just want to send 5 chunks
            res.end();
        }
    }, 1000);
});

server.listen(8000);
```

In this scenario, a JavaScript-based client downloading the data wouldn't be able to track the progress of the download in terms of percentage completion, as the total size isn't known ahead of time due to the use of chunked transfer encoding.

On the client-side, you might handle the data chunks as they arrive, but you won't be able to calculate a completion percentage:

```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:8000/', true);

xhr.onprogress = function (e) {
    console.log('Received data chunk');
};

xhr.onloadstart = function (e) {
    console.log('Download started...');
};

xhr.onloadend = function (e) {
    console.log('Download completed...');
};

xhr.send();
```

In this example, you will only know that data chunks are arriving (`Received data chunk`), not how much of the total data has arrived.

  </div>
  </div>
</details>

---

### How can we handle errors during the download process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Errors during a Fetch download can be handled using `.catch()` method on the Fetch promise. Additionally, checking if `response.ok` is true helps handle HTTP errors.
  </div><br />
  </div>
</details>

---

### What is the role of the back-end in implementing a progress bar?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The back-end's role in implementing a progress bar is to provide accurate data size or stream content in chunks and to properly handle transfer encoding for real-time progress updates. Back-ends can provide the 'Content-Length' header to help the front-end determine the total size, crucial for accurately displaying the progress.
  </div><br />
  </div>
</details>

---

### What's the difference between determinate and indeterminate progress bars?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Determinate progress bars show the percentage of an operation completed, requiring total size upfront. Indeterminate progress bars show activity but not completion level, used when total size is unknown.
  </div><br />
  <div><strong className="codeExample">Technical Details:</strong><br /><br />

  <div></div>

Here is a table that summarizes the key differences between determinate and indeterminate progress bars:

| Feature | Determinate | Indeterminate |
|---|---|---|
| Shows progress | Yes | No |
| Shows duration | Yes | No |
| Typical use cases | Tasks with a known duration | Tasks with an unknown duration |
| Animation | None | Animates to show that the task is in progress |

Here are some examples of when you might use each type of progress bar:

* **Determinate progress bar:** Downloading a file, uploading a photo, installing an update, exporting a spreadsheet
* **Indeterminate progress bar:** Searching for a file, performing a calculation, rendering a video, connecting to a network

It is important to choose the right type of progress bar for the task at hand. Using a determinate progress bar for a task with an unknown duration can be misleading, as the user will not know how long the task will take to complete. Conversely, using an indeterminate progress bar for a task with a known duration can be frustrating for the user, as they will not be able to see how much progress has been made.

  </div>
  </div>
</details>

---

### What's the significance of the 'Content-Length' header in monitoring download progress?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Content-Length` header provides the total size of the data being transferred, which is essential to calculate the percentage completion of a download, thereby aiding in monitoring download progress.
  </div>
  </div>
</details>

---

### What's the role of the 'readystatechange' event in download progress tracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The readystatechange event in XMLHttpRequest provides updates about the request's state changes (like from UNSENT to OPENED to DONE), not specifically download progress, but can indicate when transfer starts/ends.
  </div>
  </div>
</details>

---

### What are potential issues in download progress tracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Potential issues include lack of `Content-Length` header (unknown total size), chunked transfer encoding, rapid or slow connections affecting UI updates, CORS restrictions, and handling network errors.
  </div>
  </div>
</details>

---

### What happens when a user cancels a download?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a user cancels a download, the client (browser or app) sends a request to abort (abort event fires) the data transfer. The connection to the server is closed and the partially downloaded file is typically deleted.
  </div>
  </div>
</details>

---

### Why might you use web workers in relation to a progress bar?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Web Workers allow heavy computations or I/O operations to be offloaded to a separate thread, preventing UI blocking. This can ensure the progress bar animation remains smooth even under heavy processing.
  </div>
  </div>
</details>

---

### How can we make a progress bar accessible for screen reader users?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use ARIA properties such as `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` in HTML. Regularly update these values to reflect the current status of the progress bar.
  </div>
  </div>
</details>

---

### How can the EventSource interface assist with download progress tracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> EventSource interface can't directly track download progress, but it can receive server-sent events. The server can push updates to the client about the status of a long-running operation like a large download, which the EventSource interface can handle.
  </div>
  </div>
</details>

---

### How does buffering impact download progress monitoring?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Buffering can cause the 'progress' event to fire less often, making the progress bar seem to jump forward in steps rather than moving smoothly.
  </div>
  </div>
</details>

---

### How would you handle a stalled or slow download?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You could provide feedback to the user, possibly offering options to cancel, pause, or retry the download, to improve the user experience.
  </div>
  </div>
</details>

---

### How can we track download progress in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch API doesn't directly support progress tracking. However, you can use a service worker or XMLHttpRequest, which allows listening to progress events for tracking download progress.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example using `XMLHttpRequest` to track download progress:

```javascript
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://your-url.com/your-file.ext', true);
xhr.onprogress = function (e) {
    if (e.lengthComputable) {
        let percent = (e.loaded / e.total) * 100;
        console.log(percent + '%');
    }
};
xhr.onloadstart = function (e) {
    console.log('Download started...');
};
xhr.onloadend = function (e) {
    console.log('Download completed...');
};
xhr.send();
```

:::note
Note that the Fetch API doesn't directly support download progress tracking as of  September 2021. Therefore, this example uses the older XMLHttpRequest API, which does.
:::

  </div>
  </div>
</details>

---

### What is the result of the 'await reader.read()' JavaScript method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Answer:</strong> The `await reader.read()` method returns a promise that resolves to an object with two properties: `&#123; value, done &#125;`. `value` is a chunk of data, `done` indicates stream completion.
  </div><br />
  <div><strong>Technical Details:</strong> The result await reader.read() call is an object with two properties, including done and value. The done property returns true when the reading is complete. Otherwise false. The value is a typed array of bytes, Uint8Array.</div><br />
  <div><strong>Additional Info:</strong> Streams API also describes asynchronous iteration over ReadableStream with for await..of loop, but it’s not yet widely supported so that we can use while loop.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Step 1: start the fetch and obtain a reader
let response = await fetch(
  'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'
);

const reader = response.body.getReader();

// Step 2: get total length
const contentLength = +response.headers.get('Content-Length');

// Step 3: read the data
let receivedLength = 0; // received that many bytes at the moment
let chunks = []; // array of received binary chunks (comprises the body)
while (true) {
  const { done, value } = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);
  receivedLength += value.length;

  console.log(`Received ${receivedLength} of ${contentLength}`);
}

// Step 4: concatenate chunks into single Uint8Array
let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;
for (let chunk of chunks) {
  chunksAll.set(chunk, position); // (4.2)
  position += chunk.length;
}

// Step 5: decode into a string
let result = new TextDecoder('utf-8').decode(chunksAll);

// We're done!
let commits = JSON.parse(result);
alert(commits[0].author.login);
```

:::note
for await...of doesn't work with async iterators that are not async iterables. We should implement a while loop in this configuration instead.
:::

  </div>
  </div>
</details>

---

### What download progress library would you suggest to other developers?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> "Axios" is a popular JavaScript library that supports download progress. It is a promise-based HTTP client for the browser and Node.js and provides a progress event to track downloads.
  </div>
  </div>
</details>

---
