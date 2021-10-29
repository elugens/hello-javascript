---
title: Server Sent Events
sidebar_position: 12
---

# Server Sent Events

**Network requests: Server Sent Events**

**Question:** **How does the Server-Sent Events describe the EventSource?**

**Interview Answer:** The Server-Sent Events specification describes the built-in class EventSource, as a connection with the server and allows it to receive events from it. Like WebSocket, the connection is persistent, but there are several important differences between the two.

Source: <https://javascript.info/server-sent-events>

**Question:** **What is the difference between WebSocket and EventSource?**

**Interview Answer:** EventSource is like WebSocket in manner of a persistent connection. However, there are some differences between the two. WebSocket is bi-directional and EventSource is uni-directional where only the server sends data. Unlike WebSocket, EventSource is limited to text data and cannot process binary data by default. Another difference comes in the form their protocol. WebSocket has it own dedicated protocol and EventSource relies on the Http protocol application layer. Basically, EventSource is a less-powerful way of communicating with the server than WebSocket, but that should not be considered a disadvantage.

Source: <https://javascript.info/server-sent-events>

**Question:** **Why do we use the EventSoure class in our code?**

**Interview Answer:** The main reason: it is simpler. In many applications, the power of WebSocket is a little bit too much. When need to receive a stream of data from server: maybe chat messages or market prices, or whatever. That is what EventSource is good at. Also, it supports auto-reconnect, something we need to implement manually with WebSocket. Besides, it is a plain old HTTP, not a new protocol.

Source: <https://javascript.info/server-sent-events>

**Question:** **What do we need to use to open an EventSource server connection?**

**Interview Answer:** To start receiving messages, we just need to create new EventSource(url). The browser will connect to URL and keep the connection open, waiting for events. The server should respond with status 200 and the header Content-Type: text/event-stream, then keep the connection and write messages into it in the special format. In practice, complex messages are usually sent JSON-encoded. Line-breaks are encoded as \n within them, so multiline data: messages are not necessary.

**Message Output:** data: {"user":"John","message":"First line\n Second line"}

Code Example:

```js
let eventSource = new EventSource('/events/subscribe');

eventSource.onmessage = function (event) {
  console.log('New message', event.data);

  // will log 3 times for the data stream above
};

// or eventSource.addEventListener('message', ...)
```

Source: <https://javascript.info/server-sent-events#getting-messages>

**Question:** **Can we use EventSoure with cross-origin requests?**

**Interview Answer:** Yes, EventSource supports cross-origin requests, like fetch and any other networking methods. We can use any URL. The remote server will get the Origin header and must respond with Access-Control-Allow-Origin to proceed. To pass credentials, we should set the additional option withCredentials.

Code Example:

```js
let source = new EventSource('https://another-site.com/events', {
  withCredentials: true,
});
```

Source: <https://javascript.info/server-sent-events#cross-origin-requests>

**Question:** **If we lose the connection with server, how does EventSource respond?**

**Interview Answer:** Upon creation, new EventSource connects to the server, and if the connection is broken, it simply reconnects. That is very convenient, as we do not have to care about it. There is a small delay between reconnections, a few seconds by default. The server can set the recommended delay using retry in response (in milliseconds). The retry may come both together with some data, or as a standalone message.

Standalone Message:

```js
// retry: 15000

// data: Hello, I set the reconnection delay to 15 seconds
```

Source: <https://javascript.info/server-sent-events#reconnection>

**Question:** **How does the reconnection process work in the browser?**

**Interview Answer:** The browser should wait that many milliseconds before reconnecting. Or longer, e.g., if the browser knows (from OS) that there is no network connection existing at the time, it may wait until the connection appears, and then retry. If the server wants the browser to stop reconnecting, it should respond with HTTP status 204. If the browser wants to close the connection, it should call eventSource.close(). Also, there will be no reconnection if the response has an incorrect Content-Type or its HTTP status differs from 301, 307, 200 and 204. In such cases the "error" event will be emitted, and the browser will not reconnect.

It should be noted, when a connection is finally closed, there is no way to “reopen” it. If we would like to connect again, just create a new EventSource.

Code Example:

```js
let eventSource = new EventSource(...);

eventSource.close();
```

Source: <https://javascript.info/server-sent-events#reconnection>

**Question:** **To correctly resume a network connection, what does the browser or server have to do?**

**Interview Answer:** When a connection breaks due to network problems, either side cannot be sure which messages were received, and which were not. To correctly resume the connection, each message should have an id field. When a message with id is received, the browser sets the property eventSource.lastEventId to its value. Upon reconnection sends the header Last-Event-ID with that id, so that the server may re-send the messages. It should be noted, the id is appended below message data by the server, to ensure that lastEventId is updated after the message is received.

Code Example:

```js
data: Message 1

id: 1

data: Message 2

id: 2

data: Message 3

data: of two lines

id: 3
```

Source: <https://javascript.info/server-sent-events#message-id>

**Question:** **How does the EventSource object’s readyState property work?**

**Interview Answer:** The EventSource object has one of three values including connection (0), open (1), and closed (2). When an object is created, or the connection is down, it is always EventSource.CONNECTING (equals 0). We can query this property to know the state of EventSource.

Code Example:

```js
EventSource.CONNECTING = 0; // connecting or reconnecting
EventSource.OPEN = 1; // connected
EventSource.CLOSED = 2; // connection closed
```

Source: <https://javascript.info/server-sent-events#connection-status-readystate>

**Question:** **What are the three events that the EventSource object generates?**

**Interview Answer:** By default, EventSource object generates three events including the message, open, and error events. The message event refers to a message being received as event.data. The open event is the obvious opening of the connection. And the error event is the connection not being established with the server return a HTTP 500 status. The server may specify another type of event with event: `<event>` at the event start. It should be noted, to handle custom events, we must use addEventListener, not the onmessage property.

Code Example:

```js
eventSource.addEventListener('join', (event) => {
  alert(`Joined ${event.data}`);
});

eventSource.addEventListener('message', (event) => {
  alert(`Said: ${event.data}`);
});

eventSource.addEventListener('leave', (event) => {
  alert(`Left ${event.data}`);
});
```

Source: <https://javascript.info/server-sent-events#event-types>
