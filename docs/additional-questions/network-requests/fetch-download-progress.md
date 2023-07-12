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
  </div>
  </div>
</details>

---

### How do we typically monitor download progress in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Typically, download progress is monitored in JavaScript using the `XMLHttpRequest`'s `progress` event. Fetch API doesn't natively support progress monitoring but it can be achieved using a service worker or `ReadableStream` API.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong> XMLHttpRequest()<br /><br />

  <div></div>

```js
// create an XMLHttpRequest object
let xhr = new XMLHttpRequest();

// set up the progress event handler
xhr.addEventListener('progress', function(event) {
  if (event.lengthComputable) {
    let percentComplete = (event.loaded / event.total) * 100;
    console.log('Download progress: ' + percentComplete.toFixed(2) + '%');
  }
});

// open the request
xhr.open('GET', '/path/to/file', true);

// send the request
xhr.send();
```

  </div>
  </div>
</details>

---

### What properties does the 'progress' event carry?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `progress` event carries three properties: `lengthComputable` (boolean indicating if total size is known), `loaded` (bytes downloaded so far), and `total` (total bytes to be downloaded).
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// set up the progress event handler
xhr.addEventListener('progress', function(event) {
  if (event.lengthComputable) {
    let percentComplete = (event.loaded / event.total) * 100;
    console.log('Download progress: ' + percentComplete.toFixed(2) + '%');
  }
});
```

  </div>
  </div>
</details>

---

### Can we monitor download progress using Fetch API?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Fetch API doesn't support direct progress monitoring. But it can be accomplished using a XMLHttpRequest, service worker, or the ReadableStream API.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
fetch('https://picsum.photos/400/400')
  .then(response => {

    const contentLength = response.headers.get('content-length');
    // Gets length in bytes (must be provided by server)

    let loaded = 0;
    // Will be used to track loading

    return new Response(

      new ReadableStream({
      // Creates new readable stream on the new response object
        
        start(controller) {
        // Controller has methods on that allow the new stream to be constructed

          const reader = response.body.getReader();
          // Creates a new reader to read the body of the fetched resources

          read();
          // Fires function below that starts reading

          function read() {

            reader.read()
            .then((progressEvent) => {
            // Starts reading, when there is progress this function will fire
              
              if (progressEvent.done) {
                controller.close();
                return; 
                // Will finish constructing new stream if reading fetched of resource is complete
              }
              
              loaded += progressEvent.value.byteLength;
              // Increase value of 'loaded' by latest reading of fetched resource

              console.log(Math.round(loaded/contentLength*100)+'%');
              // Displays progress via console log as %

              controller.enqueue(progressEvent.value);
              // Add newly read data to the new readable stream

              read();
              // Runs function again to continue reading and creating new stream

            })
          }
        }
      })
    );
  })
  .then(response => response.blob()) // Read new readable stream to blob
  .then(blob => {
    new Image().src = URL.createObjectURL(blob);
    document.body.appendChild(img);
    // Create new URL to blob image, set as src of image and append to DOM
  })
```

  </div>
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
  <div><strong>Interview Response:</strong> The `requestAnimationFrame` method is used in progress bar construction to ensure that updates align with browser repaints, providing smoother visual transitions and reducing unnecessary calculations between frames.
  </div>
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
  <div><strong className="codeExample">Code Example:</strong> `XMLHttpRequest` and `fetch`<br /><br />

  <div></div>

Error handling during the download process in JavaScript can be done using various methods depending on the function or method you use to download.

**Using XMLHttpRequest**

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/file.pdf', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
  if (this.status == 200) {
    var file = new Blob([this.response], {type: 'application/pdf'});
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  } 
};

xhr.onerror = function() {
  console.error("An error occurred while downloading the file");
};

xhr.send();
```

In this code snippet, the `onload` event fires when an XMLHttpRequest transaction completes successfully. However, it doesn't mean the actual HTTP request was successful, so you need to check the status property to be sure. The `onerror` event is fired if the request encountered an error.

**Using Fetch API**

```javascript
fetch('http://example.com/file.pdf')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.blob();
  })
  .then(blob => {
    var fileURL = URL.createObjectURL(blob);
    window.open(fileURL);
  })
  .catch(e => {
    console.error('There has been a problem with your fetch operation: ' + e.message);
  });
```

This example uses the Fetch API, which returns Promises. It's similar to the previous example but in a more modern and powerful API. In the `catch` block, you can manage the error if the request fails.

---

:::note
Remember that both examples check only for network-level errors and successful HTTP status. Server-side issues or issues while writing to disk can't be checked directly in JavaScript.
:::

  </div>
  </div>
</details>

---

### What is the role of the back-end in implementing a progress bar?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The back-end's role in implementing a progress bar is to provide accurate data size or stream content in chunks and to properly handle transfer encoding for real-time progress updates. Back-ends can provide the 'Content-Length' header to help the front-end determine the total size, crucial for accurately displaying the progress.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

When implementing a progress bar for tasks such as file uploads or downloads, the back-end plays a crucial role, especially for long-lasting operations. The front-end typically requests updates from the back-end, which in turn responds with the current progress of the operation.

Here's a simple example using Node.js (Express) as the backend, and the front-end uses fetch API to request updates.

**Back-end (Node.js with Express):**

```javascript
const express = require('express');
const app = express();
const port = 3000;

let progress = 0;

app.get('/progress', (req, res) => {
    res.send({ progress: progress });
});

app.post('/startOperation', (req, res) => {
    progress = 0;
    // Simulate a long-lasting operation
    let interval = setInterval(() => {
        progress++;
        if (progress >= 100) {
            clearInterval(interval);
        }
    }, 100); // increases progress by 1% every 100ms
    res.send({ status: 'Operation started' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
```

**Front-end (JavaScript with fetch API):**

```javascript
// start the operation
fetch('http://localhost:3000/startOperation', {
    method: 'POST'
})
.then(res => res.json())
.then(data => {
    if (data.status === 'Operation started') {
        // start polling for progress
        let interval = setInterval(() => {
            fetch('http://localhost:3000/progress')
            .then(res => res.json())
            .then(data => {
                console.log(`Progress: ${data.progress}%`); // display the progress
                // update your progress bar here
                if (data.progress >= 100) {
                    clearInterval(interval); // stop polling when operation is done
                    console.log('Operation completed');
                }
            });
        }, 500); // poll progress every 500ms
    }
})
.catch(err => console.error(err));
```

In this example, when the operation starts, the front-end will start polling the server for progress every 500ms. The server keeps track of the progress and responds to each request with the current progress until the operation is completed.

Remember, this is a simple example and may not be suitable for production use. For production applications, it's important to consider error handling, scaling issues, and avoiding long polling by using technologies like WebSockets or Server-Sent Events (SSE) to push updates to the client.

  </div>
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
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here is a simple example of how you could use a Web Worker with a progress bar.

**HTML (index.html):**

```html
<!DOCTYPE html>
<html>
<body>
  <p>Progress: <output id="result"></output>%</p>
  <progress id="progress" value="0" max="100"></progress>
  <script src="main.js"></script>
</body>
</html>
```

**JavaScript (main.js):**

```javascript
// Check if the browser supports Web Workers
if (typeof Worker !== 'undefined') {
  // Create a new worker
  var worker = new Worker('worker.js');

  // Listen for messages from the worker
  worker.onmessage = function(e) {
    // Update the progress bar
    document.getElementById('progress').value = e.data;
    document.getElementById('result').value = e.data;
  };
} else {
  console.log('Web Workers are not supported in your browser.');
}
```

**JavaScript (worker.js):**

```javascript
let i = 0;

function startLongRunningOperation() {
  if(i < 100) {
    i++;
    // Send the current progress to the main thread
    postMessage(i);

    // Call the function again after a delay
    setTimeout(startLongRunningOperation, 100);
  }
}

// Start the long-running operation
startLongRunningOperation();
```

In this example, the main.js file creates a Web Worker that runs the code in worker.js. This worker increments a counter every 100 milliseconds and sends the current value back to the main thread. The main thread then updates the progress bar with this value. This allows the progress bar to be updated smoothly even if the main thread is busy with other tasks.

  </div>
  </div>
</details>

---

### How can we make a progress bar accessible for screen reader users?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can use ARIA properties such as `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax`, and `aria-valuetext` in HTML. Regularly update these values to reflect the current status of the progress bar.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Assume you have a long running operation and you want to update the progress bar
for (let i = 0; i <= 100; i++) {
  setTimeout(() => {
    document.getElementById('progress-bar').setAttribute('aria-valuenow', i);
    document.getElementById('progress-bar').firstChild.style.width = `${i}%`;
  }, i * 100); // Assume each operation step takes 100ms
}
```

In this example, the setTimeout function simulates a long-running operation. As the operation progresses, we update the aria-valuenow attribute and the width of the progress bar's child div.

  </div>
  </div>
</details>

---

### How can the EventSource interface assist with download progress tracking?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> EventSource interface can't directly track download progress, but it can receive server-sent events. The server can push updates to the client about the status of a long-running operation like a large download, which the EventSource interface can handle.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The `EventSource` interface is used to receive server-sent events. It can be used to keep a client up-to-date with the progress of an operation occurring on the server, such as a file download or upload.

**Server-side (Node.js with Express):**

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/download', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  let progress = 0;
  let interval = setInterval(() => {
    progress++;
    res.write(`data: ${progress}\n\n`);
    if (progress >= 100) {
      clearInterval(interval);
      res.end();
    }
  }, 1000); // Simulate progress increase by 1% every second
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
```

In this server-side code, we simulate a long-running operation that increases its progress by 1% every second and sends this progress to the client using SSE.

**Client-side (JavaScript with EventSource):**

```javascript
let source = new EventSource('http://localhost:3000/download');

source.addEventListener('message', function(e) {
  let progress = e.data;
  console.log(`Download progress: ${progress}%`);
  // Update your progress bar here
}, false);

source.addEventListener('error', function(e) {
  console.log('Error occurred:', e);
  source.close();
}, false);
```

In this client-side code, an `EventSource` is created which listens for updates from the server. When a message is received, it updates the progress bar. If an error occurs, it logs the error and closes the connection.

Remember that using SSE requires a persistent connection between the client and server, which might not be ideal for every application. Always consider your use case and other alternatives such as polling or WebSocket.

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
  <div><strong>Interview Response:</strong> Handling a stalled or slow download can be done using various methods. One approach is to set a timeout and to retry the download if it takes too long. You could provide feedback to the user, possibly offering options to cancel, pause, or retry the download, to improve the user experience.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const TIMEOUT = 5000;  // 5 seconds timeout
const MAX_RETRIES = 3; // maximum number of retries
let retryCount = 0;    // current retry count

async function downloadFile(url) {
  while (retryCount < MAX_RETRIES) {
    try {
      const controller = new AbortController(); // create an AbortController to be able to cancel the fetch request
      const id = setTimeout(() => controller.abort(), TIMEOUT); // if the request takes too long, abort it
      
      const response = await fetch(url, { signal: controller.signal }); // pass the AbortSignal to the fetch function
      clearTimeout(id); // if the request was successful, clear the timeout

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.blob();
      // do something with the downloaded data

      retryCount = 0; // reset retry count if download was successful
      break;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Fetch took too long, retrying...');
      } else {
        console.error('An error occurred:', error);
      }

      retryCount++;
      if (retryCount >= MAX_RETRIES) {
        console.error('Download failed after multiple attempts.');
        break;
      }
    }
  }
}

downloadFile('http://example.com/file.pdf');
```

This script attempts to download a file and sets a timeout for the download process. If the download doesn't complete within the specified timeout (here, 5 seconds), the download is aborted and retried. If the download fails after a certain number of retries (here, 3 attempts), the script stops trying to download the file.

This is a simple example and might not be suitable for all use cases, especially for large files which naturally take a long time to download. Always adjust the timeout and the number of retries depending on your specific needs.

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
Note that the Fetch API doesn't directly support download progress tracking. Therefore, this example uses the older XMLHttpRequest API, which does.
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
console.log(commits[0].author.login);
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
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
const axios = require('axios');
const fs = require('fs');

const url = 'http://example.com/file.pdf';
const writer = fs.createWriteStream('path/to/file.pdf');

axios({
  url,
  method: 'GET',
  responseType: 'stream',
  onDownloadProgress: (progressEvent) => {
    const totalLength = progressEvent.lengthComputable
      ? progressEvent.total
      : progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length');

    if (totalLength) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / totalLength);
      console.log(`Download progress: ${percentCompleted}%`);
      // Here you could update a progress bar or other UI element
    }
  },
})
  .then(response => {
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  })
  .catch(err => {
    console.error('Error occurred:', err);
  });
```

In this example, we're using Axios to send a GET request to download a file. We define a callback for the `onDownloadProgress` option that calculates the download progress as a percentage and logs it to the console. This percentage can also be used to update a progress bar or other UI element.

We use the `pipe` function to write the downloaded data to a file. We return a Promise that resolves when the writing is finished and rejects if an error occurs.

Please make sure to install `axios` via `npm install axios` before running the above script.

  </div>
  </div>
</details>

---
