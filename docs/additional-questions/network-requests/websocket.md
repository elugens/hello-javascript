---
title: WebSocket
description: WebSockets are used to connect to a server and exchange data. It is a standard protocol for real-time communication. JavaScript Interview Questions and Answers
sidebar_position: 11
sidebar_label: WebSocket
keywords:
  - websocket
  - server data
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
  - websocket
  - server data
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/WebSocketSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>WebSocket | JavaScript Frontend Phone Interview Questions</title>
</head>

**Network Requests: WebSocket**

<CloseAllAnswers />

---

### Can you briefly describe the WebSocket protocol?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The WebSocket protocol, described in the RFC 6455, provides a way to exchange data between browser and server via a persistent connection. The data can be passed in both directions as “packets”, without breaking the connection and additional HTTP-requests. WebSocket is especially great for services that require continuous data exchange, e.g., online games and real-time trading systems.
    </div>
  </div>
</details>

---

### What protocol does WebSocket use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> WebSocket employs HTTP as the initial transport mechanism but maintains the TCP connection open after the HTTP answer is received, allowing the socket to continue with the transfer of messages between client and server.
    </div>
  </div>
</details>

---

### What do we need to open a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To open a WebSocket connection, we need to create a new WebSocket using the special protocol ws in the URL. There is also encrypted wss:// protocol, like HTTPS for WebSockets.
    </div><br />
    <strong>Syntax: </strong> let socket = new WebSocket("ws://hellojavascript.info");<br /><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example of how you can establish a WebSocket connection using JavaScript:

```javascript
// Creating a new WebSocket
let socket = new WebSocket('ws://hellojavascript.info');

// Connection opened
socket.addEventListener('open', (event) => {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server: ', event.data);
});

// Connection closed
socket.addEventListener('close', (event) => {
    console.log('Server connection closed', event);
});

// Error handler
socket.addEventListener('error', (event) => {
    console.log('WebSocket error: ', event);
});
```

This example will open a new WebSocket connection to the server at 'ws://your-websocket-server.com'. It will send a message 'Hello Server!' once the connection is open and log any messages received from the server.

Remember to replace `'ws://your-websocket-server.com'` with the actual WebSocket server URL you intend to connect to. If your server supports secure WebSocket connections (WSS), then your URL should start with `'wss://'`.

---

:::tip
Please ensure that your server is configured correctly to accept WebSocket connections, otherwise you won't be able to establish the connection from your client-side code.
:::

  </div>>
  </div>
</details>

---

### What is the preferred mode for a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The wss:// protocol is not only encrypted but also more reliable. That is because ws:// data is not encrypted, visible to any intermediary. Old proxy servers do not know about WebSocket, and they may see “strange” headers and abort the connection. On the other hand, wss:// is WebSocket over TLS (same as HTTPS is HTTP over TLS), the transport security layer encrypts the data at the sender and decrypts it at the receiver. So, data packets pass through encrypted proxies, and they cannot see what is inside and let them through.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let socket = new WebSocket(
  'wss://hellojavascript.info/blog/websocket/demo/hello'
);
```

  </div>
  </div>
</details>

---

### What events may we listen for after establishing a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> After the socket is constructed, we may listen for events on it. The events are as follows: open, message, error, and closing. When the connection is established, the event listener is invoked during the open event. When a message is received from the server, the message event is triggered. When an error occurs, the error event is triggered, and when the connection is closed, the closure event is triggered. If we want to send something, we may use socket.send(data).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let socket = new WebSocket(
  'wss://javascript.info/article/websocket/demo/hello'
);

socket.onopen = function (e) {
  console.log('[open] Connection established');
  console.log('Sending to server');
  socket.send('My name is John');
};

socket.onmessage = function (event) {
  console.log(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died');
  }
};

socket.onerror = function (error) {
  console.log(`[error] ${error.message}`);
};
```

  </div>
  </div>
</details>

---

### What happens during the initial state of opening a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a new WebSocket(URL) gets created, it starts connecting immediately. During the connection, the browser (using headers) asks the server: “Do you support WebSocket?” And if the server replies “yes”, then the talk continues in WebSocket protocol. At this point, we are using the WebSocket protocol to communicate with the server. The preliminary order is the request (a question), response (the answer), and the WebSocket interactive (active conversation).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> of browser headers for request made by new WebSocket<br /><br />

  <div></div>

```js
GET /chat
Host: javascript.info
Origin: https://javascript.info
Connection: Upgrade
Upgrade: websocket
Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==
Sec-WebSocket-Version: 13
```

  </div>
  </div>
</details>

---

### What does the origin refer to in WebSocket connections in the browser header?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> WebSocket objects are cross-origin by nature, and there are no special headers or other limitations. Old servers cannot handle WebSockets anyway, so there are no compatibility issues. But the Origin header is essential, as it allows the server to decide whether to talk WebSocket with this website.
    </div><br/>
  <div><strong>Technical Response:</strong> In the context of a WebSocket connection, the Origin request header indicates the origin from which the request is initiated. It is a crucial part of the security model of the web, to prevent Cross-Site Request Forgery attacks. When you create a WebSocket from JavaScript running in a web browser, the browser automatically includes the Origin header in the WebSocket handshake request. The server can check this Origin to decide whether to accept the connection or not.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws, req) => {
  const origin = req.headers.origin;

  console.log(`Connection requested from origin: ${origin}`);

  // Here you can decide whether to accept or reject the connection based on the origin
  // For this example, let's only accept connections from 'http://your-website.com'
  if (origin !== 'http://your-website.com') {
    ws.close();
    console.log(`Connection rejected for origin: ${origin}`);
  } else {
    console.log(`Connection accepted for origin: ${origin}`);
  }

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });
});
```

---

:::note
Please note that CORS (Cross-Origin Resource Sharing) and the Origin header work differently in WebSocket protocol compared to HTTP. In HTTP, the browser prevents the site from seeing the response from cross-origin requests unless the server opts in. However, in WebSocket once the connection is established, the data can flow in any direction regardless of the origin. Therefore, it's up to the server to validate the Origin header and decide whether to accept the connection or not.
:::

  </div>
  </div>
</details>

---

### What does the connection upgrade signal?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The connection upgrade signals that the client would like to change the protocol.
    </div>
  </div>
</details>

---

### What happens after the connection upgrade request with a WebSocket?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> After the connect upgrade request is initialized and approved, the requested protocol is “WebSocket”. At that point, a random browser-generated key for security and returned. Additionally, the current WebSocket version is presented and returned in the response.
    </div>
  </div>
</details>

---

### Can the WebSocket handshake be emulated with XMLHttpRequest or fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we cannot use XMLHttpRequest or fetch to make this kind of HTTP request because JavaScript cannot set these headers.
    </div>
  </div>
</details>

---

### What server code response does the server send during a switch WebSocket protocol?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the server agrees to switch to WebSocket, it should send a code 101 response. After the browser and server have reached an agreement, data transmits using the WebSocket protocol from that point forward.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```bash
101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=
```

  </div>
  </div>
</details>

---

### What does deflate-frame imply in terms of Sec-WebSocket-Extensions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "deflate-frame" in Sec-WebSocket-Extensions refers to a compression extension for WebSocket. It reduces the size of WebSocket messages, leading to more efficient network communication.
    </div><br/>
  <div><strong>Technical Response:</strong> Websocket use the "deflate-frame" token in the "Sec-WebSocket-Extensions" header; deflate-frame means that the browser supports data compression. Using DEFLATE, this extension compresses the "Application data" part of WebSocket data frames. The simplest "Sec-WebSocket-Extensions" header in the client's opening handshake to request per-frame DEFLATE extension is the following: “Sec-WebSocket-Extensions: deflate-frame”. The most straightforward header from the server to accept this extension is the same.
    </div>
  </div>
</details>

---

### What does the Sec-WebSocket-Protocol: soap, wamp specify?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `Sec-WebSocket-Protocol: soap, wamp` header specifies the subprotocols that the client is willing to speak on the WebSocket connection, namely SOAP (Simple Object Access Protocol) and WAMP (The Web Application Messaging Protocol).
    </div><br />
  <div><strong>Technical Details:</strong> Sec-WebSocket-Protocol: SOAP, WAMP specifies that we would like to transfer not just any data, but the data in SOAP or WAMP (“The WebSocket Application Messaging Protocol”) protocols. WebSocket sub-protocols register in the IANA catalog. So, this header describes the data formats that we are getting to use. We use the optional header to set the second parameter of the new WebSocket. That is the array of sub-protocols, e.g., if we would like to use SOAP or WAMP. The server should respond with a list of protocols and extensions that it agrees to use.
    </div><br />
  <div><strong className="codeExample">Syntax Example:</strong><br /><br />

  <div></div>

```html
<script>
  let socket = new WebSocket('wss://javascript.info/chat', ['soap', 'wamp']);
</script>
```

  </div><br />
  <div><strong className="codeExample">Request:</strong><br /><br />

  <div></div>

```bash
GET/chat
Host: javascript.info
Upgrade: websocket
Connection: Upgrade
Origin: https://javascript.info
Sec-WebSocket-Key: Iv8io/9s+lYFgZWcXczP8Q==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: deflate-frame
Sec-WebSocket-Protocol: soap, wamp
```

  </div><br />
  <div><strong className="codeExample">Response:</strong><br /><br />

  <div></div>

```bash
101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: hsBlbuDTkk24srzEOTBUlZAlC2g=
Sec-WebSocket-Extensions: deflate-frame
Sec-WebSocket-Protocol: soap
```

  </div>
  </div>
</details>

---

### What exactly are frames in the context of WebSocket communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In WebSocket communication, frames are packets of data sent between client and server. They carry message parts or whole messages, supporting both text and binary data.
    </div><br/>
  <div><strong>Technical Details:</strong> WebSocket communication consists of “frames” or data fragments that can be sent from either side and can be of several kinds, including text, binary data, ping/pong, and “connect” close frames. The text frame contains text data that parties send to each other. Binary data frames contain binary data that parties send back and forth. Websocket uses Ping Pong frames to check the connection sent from the server. The browser responds to these automatically. After the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible. You can use this to make sure that the client is still connected. The connect close frame is either a server or client initiating the closing handshake. There are several more included in this group, but these are the most common. In the browser, we directly work only with text or binary frames.
    </div>
  </div>
</details>

---

### Can you explain the function of the WebSocket.send() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The WebSocket .send() method can send text or binary data. A call socket.send(body) allows the body in string or a binary format, including Blob and ArrayBuffer. No settings are required; we can send it out in any format.
    </div>
  </div>
</details>

---

### When WebSocket returns text or binary data to us, what object type is it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, text data received from a WebSocket comes as a `string` type, and binary data is received as a `Blob` or `ArrayBuffer` type.
    </div><br />
  <div><strong>Technical Response:</strong> The text is always sent as a string when receiving data. We can use the Blob or ArrayBuffer formats for binary data, and the socket determines that. Because the binaryType attribute is set to "blob" by default, binary data represents as Blob objects. Blob is a high-level binary object that integrates seamlessly with &#8249;a&#8250;, &#8249;img&#8250;, and other tags; thus, it's a reasonable default. However, we may modify it to "arraybuffer" for binary processing to access individual data bytes.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
socket.binaryType = 'arraybuffer';
socket.onmessage = (event) => {
  // event.data is either a string (if text) or arraybuffer (if binary)
};
```

  </div>
  </div>
</details>

---

### How should we deal with a sluggish network connection in the context of WebSocket communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For sluggish networks, we should consider using WebSocket message compression extensions like 'permessage-deflate' to reduce payload size, and handle reconnection logic gracefully for intermittent connections.
    </div><br />
  <div><strong>Technical Details:</strong> We can call socket.send(data) again and again, but the data buffers (stored) in memory and transfer only as fast as network speed allows. The socket.bufferedAmount property stores how many bytes remain buffered while waiting to transmit over the network. We can examine it to see whether the socket is available for transmission. We have to set an interval, check the buffered amount, and re-initiate a call for more data.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Enabling compression with WebSocket connection requires support from both the server and the client. The client can request compression in the connection handshake, but the server must agree to use it.

You should use the 'ws' library in Node.js for the server and JavaScript's built-in WebSocket API for the client. The 'ws' library supports permessage-deflate compression.

Client-side (JavaScript):

```javascript
let socket = new WebSocket('ws://your-websocket-server.com', [], {
    perMessageDeflate: true
});

socket.addEventListener('open', (event) => {
    socket.send('Hello, server!');
});

socket.addEventListener('message', (event) => {
    console.log('Message from server: ', event.data);
});
```

In the client-side code, `perMessageDeflate: true` is used to indicate that the client is willing to use permessage-deflate compression.

Server-side (Node.js):

```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ 
    port: 8080, 
    perMessageDeflate: {
        zlibDeflateOptions: {
            // See zlib defaults.
            chunkSize: 1024,
            memLevel: 7,
            level: 3
        },
        zlibInflateOptions: {
            chunkSize: 10 * 1024
        },
        // Other options settable:
        clientNoContextTakeover: true, // Defaults to negotiated value.
        serverNoContextTakeover: true, // Defaults to negotiated value.
        serverMaxWindowBits: 10, // Defaults to negotiated value.
        // Below options specified as default values.
        concurrencyLimit: 10, // Limits zlib concurrency for perf.
        threshold: 1024 // Size (in bytes) below this use BYTEFRAMING
    } 
});

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received: ${message}`);
        ws.send('Hello, client!');
    });
});
```

In the server-side code, the 'ws' library allows fine control over the deflate options. We enable the permessage-deflate extension and provide some configuration options.

Remember to replace `'ws://your-websocket-server.com'` with the actual WebSocket server URL you intend to connect to.

---

:::note
While compression can help reduce the size of the messages transmitted, it does increase the CPU load because of the computational cost of the compression/decompression operations. Depending on the use case, it might be more beneficial to use compression for larger payloads and forego it for smaller ones.
:::

  </div>
  </div>
</details>

---

### What happens when either the browser or server closes a connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Normally, when a party wants to close the connection (both browser and server have equal rights), they send a “connection close frame” with a numeric code and a textual reason. We can explicitly close it from the browser using socket.close(). The code is a unique WebSocket closing code, and this is optional. The reason is a string that describes the reason for closing; also, optional. Then the other party in the close event handler retrieves the code and the reason.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<strong>Syntax: </strong> socket.close([code], [reason]);<br /><br />

  <div></div>

```js
// closing party:
socket.close(1000, 'Work complete');

// the other party
socket.onclose = (event) => {
  // event.code === 1000
  // event.reason === "Work complete"
  // event.wasClean === true (clean close)
};
```

  </div>
  </div>
</details>

---

### What are the standard closure codes for WebSocket?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> 1000 and 1006 are the most common WebSocket closing codes. Code 1000 is the standard default closure; the connection completes for whatever reason it got formed. Code 1006 is an abnormal closure; it signals that a connection was closed improperly (without sending a close frame) when a status code anticipated another response. WebSocket codes are similar to HTTP codes, although not the same. Any codes less than 1000, in particular, are reserved; attempting to set such a value results in a error.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// in case connection is broken
socket.onclose = (event) => {
  // event.code === 1006
  // event.reason === ""
  // event.wasClean === false (no closing frame)
};
```

  </div>
  </div>
</details>

---

### How can we retrieve the connection state of a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we want the connection state, we must use the "socket.readyState" property to parse the unsigned short values. The unsigned short values include connecting (0), open (1), closing (2), and closed (3).
    </div>
  </div>
</details>

---
