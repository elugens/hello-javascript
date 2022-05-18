---
title: Server Sent Events
description: Server Sent Events is used to send data to the client. The Server-Sent Events specification describes the built-in class EventSource. - Interview Questions
sidebar_position: 12
sidebar_label: Server Sent Events
keywords:
  - server sent events
  - server events
  - eventsource
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
  - server sent events
  - server events
  - eventsource
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ServerSentSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Server Sent Events | HelloJavaScript.Info</title>
</head>

**Network Requests: Server Sent Events**

<CloseAllAnswers />

---

### How do the Server-Sent Events describe the EventSource?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Server-Sent Events specification describes the built-in class EventSource, connecting with the server and allowing it to receive events from it. Like WebSocket, the connection is persistent, but several significant differences are apparent.
    </div>
  </div>
</details>

---

### What is the difference between WebSocket and EventSource?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> EventSource is like WebSocket; they both behave similarly. However, there are some differences between the two. WebSocket is bi-directional, and EventSource is uni-directional, where only the server sends data. Unlike WebSocket, EventSource is limited to text data and cannot process binary data by default. Another difference comes in the form of their protocol. WebSocket has its dedicated protocol, and EventSource relies on the HTTP protocol application layer. EventSource is a less-powerful way of communicating with the server than WebSocket, but that should not be considered a disadvantage.
    </div>
  </div>
</details>

---

### Why do we use the EventSource class in our code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The main reason: is simplicity. In many applications, the power of WebSocket is a little bit too much. When you need to receive a stream of data from the server: chat messages, market prices, or whatever. That is why EventSource is useful. Also, it supports auto-reconnect, something we need to implement manually with WebSocket. Besides, it is a plain old HTTP, not a new protocol.
    </div>
  </div>
</details>

---

### What do we need to use to open an EventSource server connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To start receiving messages, we need to create a new EventSource(URL). The browser connects to the URL and keeps the connection open, waiting for events. The server should respond with status 200 and the header Content-Type: text/event-stream, then keep the connection and write messages into it in the unique format. In practice, complex messages usually transmit JSON-encoded data. Line-breaks typically encode as \n, so multiline data: messages are not necessary.
    </div><br />
  <div><strong className="codeExample">Message Output:</strong><br /><br />

  <div></div>

```json
data: {"user":"John","message":"First line\n Second line"}
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let eventSource = new EventSource('/events/subscribe');

eventSource.onmessage = function (event) {
  console.log('New message', event.data);
  // will log 3 times for the data stream above
};

// or eventSource.addEventListener('message', ...)
```

  </div>
  </div>
</details>

---

### Can we use EventSource with cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, EventSource supports cross-origin requests, like fetch and other networking methods. We can use whatever URL we like. After receiving the Origin header, the remote server must respond with "Access-Control-Allow-Origin". We must enable the withCredentials option to pass credentials.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let source = new EventSource('https://another-site.com/events', {
  withCredentials: true,
});
```

  </div>
  </div>
</details>

---

### If we lose the connection with the server, how does EventSource respond?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Upon creation, a new EventSource connects to the server, and if the connection gets broken, it simply reconnects. That is very convenient, as we do not have to care about it. There is a slight delay between reconnections, usually a few seconds, and the server can provide the appropriate delay (milliseconds). The retry message may transmit with other data or stand-alone messages.
    </div><br />
  <div><strong className="codeExample">Standalone Message:</strong><br /><br />

  <div></div>

```js
// retry: 15000
// data: Hello, I set the reconnection delay to 15 seconds
```

  </div>
  </div>
</details>

---

### How does the reconnection process work in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The browser should wait that many milliseconds before reconnecting. Or longer, e.g., if the browser knows (from OS) that there is no network connection existing at the time, it may wait until the connection appears and then retry. If the server wants the browser to stop reconnecting, it should respond with HTTP status 204. If the browser wants to close the connection, it should call eventSource.close(). Also, there is no reconnection if the response has an incorrect Content-Type or its HTTP status differs from 301, 307, 200, and 204. The "error" event gets emitted in such cases, and the browser does not reconnect.<br /><br />We should note that when a connection is finally closed, there is no way to “reopen” it. If we would like to connect again, create a new EventSource.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let eventSource = new EventSource(...);

eventSource.close();
```

  </div>
  </div>
</details>

---

### To correctly resume a network connection, what does the browser or server have to do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a connection breaks due to network problems, either side cannot be sure which messages were received and which were not. To correctly resume the connection, each message should have an id field. When a message with id is received, the browser sets the property eventSource.lastEventId to its value. Upon reconnection, it sends the header Last-Event-ID with that id so that the server may re-send the messages. We should note that the id is appended below message data by the server to ensure that lastEventId is updated after the message is received.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
data: Message 1
id: 1

data: Message 2
id: 2

data: Message 3
data: of two lines
id: 3
```

  </div>
  </div>
</details>

---

### How does the EventSource object’s readyState property work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The EventSource object has one of three values, including connection (0), open (1), and closed (2). When an object gets created, or the connection is down, it is always EventSource.CONNECTING (equals 0). We can query this property to know the state of EventSource.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
EventSource.CONNECTING = 0; // connecting or reconnecting
EventSource.OPEN = 1; // connected
EventSource.CLOSED = 2; // connection closed
```

  </div>
  </div>
</details>

---

### What are the three events that the EventSource object generates?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> By default, the EventSource object generates three events, including the message, open, and error events. The message event denotes the receipt of a message, as event.data. The evident opening of the link is the open event, and the error event is a connection failure with the server issuing an HTTP 500 status. The server may specify another type of event with event: &#8249;event&#8250; at the event start. We should note that to handle custom events. We must use addEventListener, not the onmessage property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
eventSource.addEventListener('join', (event) => {
  alert(`Joined ${event.data}`);
});

eventSource.addEventListener('message', (event) => {
  alert(`Said: ${event.data}`);
});

eventSource.addEventListener('leave', (event) => {
  alert(`Left ${event.data}`);
});
```

  </div>
  </div>
</details>

---
