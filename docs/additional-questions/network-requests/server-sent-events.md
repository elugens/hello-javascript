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

### What are Server-Sent Events in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Server-Sent Events (SSE) in JavaScript are a standard that allows a web server to push real-time updates to the client through a persistent HTTP connection, using the EventSource API.
  </div><br />
  </div>
</details>

---

### Are Server-Sent Events Real-time?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Server-Sent Events are designed for real-time data transmission from the server to the client, with automatic reconnection features.
  </div><br />
  </div>
</details>

---

### How is an SSE connection established?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An SSE connection is established by creating a new EventSource object in JavaScript, which opens a persistent HTTP connection to the server at the specified URL, ready to receive events.
  </div><br />
  </div>
</details>

---

### Can you name a few use cases for Server-Sent Events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SSE is suitable for real-time updates like live news headlines, stock prices, live sports scores, online multiplayer games, social media feeds, or system monitoring dashboards.
  </div><br />
  </div>
</details>

---

### How can you handle different types of SSE messages?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can handle different types of SSE messages by specifying the event type in the server response. In the client, use `addEventListener(eventType, handler)` to handle these custom event types.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's an example of handling different types of SSE messages:

On the server side, you might send events like this:

```bash
data: This is a message
event: messageType1
data: This is a message for type1

data: This is another message
event: messageType2
data: This is a message for type2
```

Then, on the client side, you can handle these different messages like this:

```javascript
let eventSource = new EventSource("https://yourserver.com/events");

eventSource.addEventListener("messageType1", function(event) {
  console.log("Message Type 1 received", event.data);
});

eventSource.addEventListener("messageType2", function(event) {
  console.log("Message Type 2 received", event.data);
});

eventSource.onerror = function(event) {
  console.error("Error occurred", event);
};
```

In this example, two different types of events (`messageType1` and `messageType2`) are handled separately, logging different messages to the console. The `onerror` event is also handled.

  </div>
  </div>
</details>

---

### What are the limitations of Server-Sent Events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SSE (Server-Sent Events) limitations include lack of support in Internet Explorer, unidirectional communication (server to client), a maximum limit on open connections, and potential higher overhead compared to WebSockets.
  </div><br />
  </div>
</details>

---

### How can you control reconnection attempts in SSE?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The server can control reconnection attempts in SSE by sending a "retry" field with the number of milliseconds to wait before the next reconnection attempt after a disconnect.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a server-side example in Node.js using the `http` module:

```javascript
const http = require('http');

http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.write('retry: 10000\n'); // Set reconnection time to 10 seconds
  res.write('data: This is a message\n\n');
}).listen(8000);
```

In this example, the server is set up to push Server-Sent Events to the client. It sets a reconnection attempt time by sending 'retry: 10000' which tells the client to wait 10 seconds before attempting to reconnect if the connection is lost. It also sends a message 'data: This is a message' to the client.

  </div>
  </div>
</details>

---

### Is there any mechanism in SSE for handling lost updates?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, servers can send an ID with each update. If the connection drops, the browser includes the last ID when reconnecting, allowing the server to resend any missed updates.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Code is being updated!<br /><br />

  <div></div>

```js
// Code is being updated
```

  </div>
  </div>
</details>

---

### How can you close an SSE (EventSource) connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can close an SSE connection on the client side by calling the `close()` method on the EventSource object, effectively terminating the connection to the server.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Code is being updated!<br /><br />

  <div></div>

```js
// Code is being updated
```

  </div>
  </div>
</details>

---

### How can you close an SSE (EventSource) connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SSE uses text-based format. Each event is sent as a block of text, divided by a pair of newline characters. Standard fields include: "data", "id", "event", and "retry".</div><br />
  <div><strong className="codeExample">Code Example:</strong> Code is being updated!<br /><br />

  <div></div>

```js
// Code is being updated
```

  </div>
  </div>
</details>

---

### Can you send HTTP headers with an SSE request?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, but only with a polyfill, as native EventSource API does not support it. This is one limitation of SSE. Workarounds may involve server-side handling or using libraries.
  </div><br />
  </div>
</details>

---

### What HTTP status code is used for a successful SSE connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The HTTP status code used for a successful SSE connection is 200 OK, along with the "Content-Type" header set to "text/event-stream" to indicate a valid SSE connection.
  </div><br />
  </div>
</details>

---

### What is the purpose of the last-event-id HTTP header in SSE?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The last-event-id header lets the server know the ID of the last event received by the client, useful for resending missed events after reconnection.
  </div><br />
  </div>
</details>

---

### Why is HTTP/2 a perfect match for SSE?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HTTP/2 is ideal for SSE because it supports multiplexing, allowing multiple messages to be sent concurrently on the same connection, improving performance and resource usage for real-time updates.
  </div><br />
  </div>
</details>

---

### Can Server-Sent Events work with cross-origin requests?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Server-Sent Events can work with cross-origin requests by implementing Cross-Origin Resource Sharing (CORS) and setting the appropriate server headers for allowing the cross-origin request.
  </div><br />
  </div>
</details>

---

### What kind of server response does SSE require?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SSE requires a server response with HTTP status code 200, "Content-Type" header set to "text/event-stream", and messages formatted according to the SSE specification (fields like "data", "id", "event").
  </div><br />
  </div>
</details>

---

### Are there any security considerations with SSE?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Like any API, you must consider Cross-Origin Resource Sharing (CORS) issues, Cross-Site Scripting (XSS) prevention, and secure transmission using HTTPS.
  </div><br />
  </div>
</details>

---

### How does SSE compare with long-polling and short-polling?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> SSE maintains a single, long-lived connection and is more efficient compared to long-polling and short-polling which involve repeated requests.
  </div><br />
  </div>
</details>

---

### How do Server-Sent Events describe the EventSource?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Server-Sent Event specification describes EventSource as a web API interface for handling SSE connections, allowing servers to send events to the client over HTTP. Like WebSocket, the connection is persistent, but several significant differences are apparent.
    </div>
  </div>
</details>

---

### What is the difference between WebSocket and EventSource?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> WebSockets provide full-duplex communication, meaning data can be sent both ways simultaneously, while Server-Sent Events (EventSource) are simple, with data only sent from server to client. Both offer real-time communication.
    </div><br/>
  <div><strong>Interview Response:</strong> EventSource is like WebSocket; they both behave similarly. However, there are some differences between the two. WebSocket is bi-directional, and EventSource is uni-directional, where only the server sends data. Unlike WebSocket, EventSource is limited to text data and cannot process binary data by default. Another difference comes in the form of their protocol. WebSocket has its dedicated protocol, and EventSource relies on the HTTP protocol application layer. EventSource is a less-powerful way of communicating with the server than WebSocket, but that should not be considered a disadvantage.
    </div>
  </div>
</details>

---

### Why do we use the EventSource class in our code?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We use `EventSource` to receive real-time updates from a server via a persistent, unidirectional HTTP connection, enhancing user experience without manual refreshes.
    </div><br/>
  <div><strong>Technical Response:</strong> The main reason: is simplicity. In many applications, the power of WebSocket is a little bit too much. When you need to receive a stream of data from the server: chat messages, market prices, or whatever. That is why EventSource is useful. Also, it supports auto-reconnect, something we need to implement manually with WebSocket. Besides, it is a plain old HTTP, not a new protocol.
    </div>
  </div>
</details>

---

### What do we need to use to open an EventSource server connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To open an EventSource server connection, instantiate the `EventSource` object and pass the URL of the server-side script to its constructor.
    </div><br />
  <div><strong>Technical Response:</strong> To start receiving messages, we need to create a new EventSource(URL). The browser connects to the URL and keeps the connection open, waiting for events. The server should respond with status 200 and the header Content-Type: text/event-stream, then keep the connection and write messages into it in the unique format. In practice, complex messages usually transmit JSON-encoded data. Line-breaks typically encode as \n, so multiline data: messages are not necessary.
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
  <div><strong>Interview Response:</strong> Yes, EventSource can be used with cross-origin requests by implementing CORS (Cross-Origin Resource Sharing) and setting appropriate server headers.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, EventSource supports cross-origin requests, like fetch and other networking methods. We can use whatever URL we like. After receiving the Origin header, the remote server must respond with "Access-Control-Allow-Origin". We must enable the withCredentials option to pass credentials.
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

### What happens if an SSE (EventSource) connection is interrupted?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> EventSource automatically attempts to reconnect to the server when a connection is lost, following a brief pause, usually about 3 seconds, unless a different delay is specified by the server.
    </div><br />
  <div><strong>Technical Response:</strong> Upon creation, a new EventSource connects to the server, and if the connection gets broken, it simply reconnects. That is very convenient, as we do not have to care about it. There is a slight delay between reconnections, usually a few seconds, and the server can provide the appropriate delay (milliseconds). The retry message may transmit with other data or stand-alone messages.
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
  <div><strong>Interview Response:</strong> If the connection is lost, the browser waits for a reconnection time (default 3 seconds), then automatically attempts to reconnect to the EventSource URL, resuming the stream where it left off.
    </div><br />
  <div><strong>Technical Response:</strong> The browser should wait (default 3 seconds) before reconnecting. Or longer, e.g., if the browser knows (from OS) that there is no network connection existing at the time, it may wait until the connection appears and then retry. If the server wants the browser to stop reconnecting, it should respond with HTTP status 204. If the browser wants to close the connection, it should call eventSource.close(). Also, there is no reconnection if the response has an incorrect Content-Type or its HTTP status differs from 301, 307, 200, and 204. The "error" event gets emitted in such cases, and the browser does not reconnect.<br /><br />We should note that when a connection is finally closed, there is no way to “reopen” it. If we would like to connect again, create a new EventSource.
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
  <div><strong>Interview Response:</strong> The server can send a special "id" field with each event. If a disconnection happens, the browser in the reconnection attempt sends a `Last-Event-ID` header with the last received id, resuming from there.
    </div><br />
  <div><strong>Technical Response:</strong> When a connection breaks due to network problems, either side cannot be sure which messages were received and which were not. To correctly resume the connection, each message should have an id field. When a message with id is received, the browser sets the property eventSource.lastEventId to its value. Upon reconnection, it sends the header Last-Event-ID with that id so that the server may re-send the messages. We should note that the id is appended below message data by the server to ensure that lastEventId is updated after the message is received.
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
  <div><strong>Interview Response:</strong> The readyState property reflects the connection status of the EventSource object: 0 for CONNECTING, 1 for OPEN, and 2 for CLOSED. It changes accordingly as the connection status changes. We can query this property to know the state of EventSource.
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
  <div><strong>Interview Response:</strong> The EventSource object generates three events: "open" when a connection is established, "message" when a message is received, and "error" when an error occurs.
    </div><br />
  <div><strong>Technical Details:</strong> By default, the EventSource object generates three events, including the message, open, and error events. The message event denotes the receipt of a message, as event.data. The evident opening of the link is the open event, and the error event is a connection failure with the server issuing an HTTP 500 status. The server may specify another type of event with event: &#8249;event&#8250; at the event start. We should note that to handle custom events. We must use addEventListener, not the onmessage property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of using EventSource:

```javascript
let eventSource = new EventSource("https://yourserver.com/events");

eventSource.onopen = function(event) {
  console.log("Connection established");
};

eventSource.onmessage = function(event) {
  console.log("New message received", event.data);
};

eventSource.onerror = function(event) {
  console.error("Error occurred", event);
};
```

In this example, the `EventSource` object connects to the server located at "<https://example.com/events>". It also has handlers for the `onopen`, `onmessage`, and `onerror` events, which log information to the console.

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> Custom Events using addEventListener()<br /><br />

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
