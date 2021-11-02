---
title: Fetch - Download Progress
sidebar_position: 3
---

# Fetch - Download Progress

**Network Requests: Fetch - Download Progress**

<head>
  <title>Fetch Download Progress - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How can we track download progress in JavaScript?

**Interview Answer:** In JavaScript, we can use the fetch method to track download progress. It should be noted, there is currently no way for fetch to track upload progress. For that purpose, we should use the XMLHttpRequest. To track download progress, we can use response.body property. It is ReadableStream – a special object that provides body chunk-by-chunk, as it comes. Readable streams are described in the Streams API specification. Unlike response.text(), response.json() and other methods, response.body gives full control over the reading process, and we can count how much is consumed at any moment.

Code Example:

```js
// instead of response.json() and other methods

const reader = response.body.getReader();

// infinite loop while the body is downloading

while (true) {
  // done is true for the last chunk

  // value is Uint8Array of the chunk bytes

  const { done, value } = await reader.read();

  if (done) {
    break;
  }

  console.log(`Received ${value.length} bytes`);
}
```

Source: <https://javascript.info/fetch-progress>

### What is the result of the await reader.read() JavaScript method?

**Interview Answer:** The result of await reader.read() call is an object with two properties including done and value. The done property returns true when the reading is complete, otherwise false. The value is a typed array of bytes, Uint8Array.

Additional info: Streams API also describes asynchronous iteration over ReadableStream with for await..of loop, but it’s not yet widely supported, so we can use while loop.

Code Example:

```js
// Step 1: start the fetch and obtain a reader

let response = await fetch(
  'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'
);

const reader = response.body.getReader();

// Step 2: get total length

const contentLength = +response.headers.get('Content-Length');

// Step 3: read the data

let receivedLength = 0; // received that many bytes at the moment
let chunks = []; // array of received binary chunks (comprises the body)
while (true) {
  const { done, value } = await reader.read();

  if (done) {
    break;
  }

  chunks.push(value);

  receivedLength += value.length;

  console.log(`Received ${receivedLength} of ${contentLength}`);
}

// Step 4: concatenate chunks into single Uint8Array

let chunksAll = new Uint8Array(receivedLength); // (4.1)
let position = 0;

for (let chunk of chunks) {
  chunksAll.set(chunk, position); // (4.2)
  position += chunk.length;
}

// Step 5: decode into a string

let result = new TextDecoder('utf-8').decode(chunksAll);

// We're done!

let commits = JSON.parse(result);

alert(commits[0].author.login);
```

Source: <https://javascript.info/fetch-progress>
