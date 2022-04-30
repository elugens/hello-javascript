---
title: Fetch - Download Progress
description: Fetch - Download Progress is used to track the progress of a download.
sidebar_position: 3
sidebar_label: Fetch - Download Progress
---

**Network Requests: Fetch - Download Progress**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How can we track download progress in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, we can use the fetch method to track download progress. We should note that there is currently no way for fetch to track upload progress. For that purpose, we should use the XMLHttpRequest. To track download progress, we can use response.body property. It is ReadableStream – a special object that provides body chunk-by-chunk as it comes. We can find the Readable streams description in the Streams API specification standard. Unlike response.text(), response.json() and other methods, response.body gives control over the reading process, and we can count the consumption level at any moment.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// instead of response.json() and other methods
const reader = response.body.getReader();

// infinite loop while the body is downloading
while (true) {
  // done is true for the last chunk
  // value is Uint8Array of the chunk bytes
  const { done, value } = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`);
}
```

  </div>
  </div>
</details>

---

### What is the result of the await reader.read() JavaScript method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The result await reader.read() call is an object with two properties, including done and value. The done property returns true when the reading is complete. Otherwise false. The value is a typed array of bytes, Uint8Array.</div><br />
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
