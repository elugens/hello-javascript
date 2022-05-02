---
title: Long Polling
description: Long Polling in JavaScript is used to check for changes in the server. Long polling is the simplest way of having a persistent connection with the server.
sidebar_position: 10
sidebar_label: Long Polling
keywords:
  - long polling
  - javascript long polling
  - network requests
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - interview questions
  - interview answers
  - js
tags:
  - long polling
  - javascript long polling
  - network requests
  - interview answers
  - interview questions
---

<head>
  <title>Long Polling | JavaScript Frontend Phone Interview Questions</title>
</head>

**Network Requests: Long Polling**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you describe what long polling means in network requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Long polling is the simplest way of having a persistent connection with the server that does not use any specific protocol like WebSocket or Server-Side Events. It is relatively easy to implement and good enough in many cases.
    </div>
  </div>
</details>

---

### What is the difference between long and regular polling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main difference is that long polling is a much better way to poll the server because it is relatively easy to implement and delivers messages without delays. Regular polling can suffer from delays between requests of up to 10 seconds, and the server is bombed with a request every 10 seconds, leaving regular polling as a less than equitable way of polling.
    </div>
  </div>
</details>

---

### Can you explain the steps in the long polling process?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The lengthy polling procedure begins with a request to the server. The server does not disconnect until a message is ready to be sent. The server answers the request when the notice shows, and the browser instantly initiates a new request. The circumstance in which the browser issued a request and has a pending connection with the server is standard. The connection only restores itself (reconnects) when a message is delivered. If the connection disintegrates due to a network fault, the browser instantly makes a new request.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
async function subscribe() {
  let response = await fetch('/subscribe');

  if (response.status == 502) {
    // Status 502 is a connection timeout error,
    // may happen when the connection was pending for too long,
    // and the remote server or a proxy closed it
    // let's reconnect
    await subscribe();
  } else if (response.status != 200) {
    // An error - let's show it
    showMessage(response.statusText);
    // Reconnect in one second
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await subscribe();
  } else {
    // Get and show the message
    let message = await response.text();
    showMessage(message);
    // Call subscribe() again to get the next message
    await subscribe();
  }
}

subscribe();
```

  </div>
  </div>
</details>

---
