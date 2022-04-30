---
title: WebSocket
description: WebSockets are used to connect to a server and exchange data. It is a standard protocol for real-time communication.
sidebar_position: 11
sidebar_label: WebSocket
---

**Network Requests: WebSocket**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

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
    <strong>Syntax: </strong> let socket = new WebSocket("ws://javascript.info");<br /><br />
  </div>
</details>

---

### What is the preferred mode for a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The wss:// protocol is not only encrypted but also more reliable. That is because ws:// data is not encrypted, visible to any intermediary. Old proxy servers do not know about WebSocket, and they may see “strange” headers and abort the connection. On the other hand, wss:// is WebSocket over TLS (same as HTTPS is HTTP over TLS), the transport security layer encrypts the data at the sender and decrypts it at the receiver. So, data packets pass through encrypted proxies, and they cannot see what is inside and let them through.
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
  alert('[open] Connection established');
  alert('Sending to server');
  socket.send('My name is John');
};

socket.onmessage = function (event) {
  alert(`[message] Data received from server: ${event.data}`);
};

socket.onclose = function (event) {
  if (event.wasClean) {
    alert(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function (error) {
  alert(`[error] ${error.message}`);
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

```js
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
  <div><strong>Interview Response:</strong> Websocket use the "deflate-frame" token in the "Sec-WebSocket-Extensions" header; deflate-frame means that the browser supports data compression. Using DEFLATE, this extension compresses the "Application data" part of WebSocket data frames. The simplest "Sec-WebSocket-Extensions" header in the client's opening handshake to request per-frame DEFLATE extension is the following: “Sec-WebSocket-Extensions: deflate-frame”. The most straightforward header from the server to accept this extension is the same.
    </div>
  </div>
</details>

---

### What does the Sec-WebSocket-Protocol: soap, wamp mean?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sec-WebSocket-Protocol: SOAP, WAMP means that we would like to transfer not just any data, but the data in SOAP or WAMP (“The WebSocket Application Messaging Protocol”) protocols. WebSocket sub-protocols register in the IANA catalog. So, this header describes the data formats that we are getting to use. We use the optional header to set the second parameter of the new WebSocket. That is the array of sub-protocols, e.g., if we would like to use SOAP or WAMP. The server should respond with a list of protocols and extensions that it agrees to use.
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

```js
GET /chat
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

```js
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
  <div><strong>Interview Response:</strong> WebSocket communication consists of “frames” or data fragments that can be sent from either side and can be of several kinds, including text, binary data, ping/pong, and “connect” close frames. The text frame contains text data that parties send to each other. Binary data frames contain binary data that parties send back and forth. Websocket uses Ping Pong frames to check the connection sent from the server. The browser responds to these automatically. After the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible. You can use this to make sure that the client is still connected. The connect close frame is either a server or client initiating the closing handshake. There are several more included in this group, but these are the most common. In the browser, we directly work only with text or binary frames.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the WebSocket.send() method?

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
  <div><strong>Interview Response:</strong> The text is always sent as a string when receiving data. We can use the Blob or ArrayBuffer formats for binary data, and the socket determines that. Because the binaryType attribute is set to "blob" by default, binary data represents as Blob objects. Blob is a high-level binary object that integrates seamlessly with &#8249;a&#8250;, &#8249;img&#8250;, and other tags; thus, it's a reasonable default. However, we may modify it to "arraybuffer" for binary processing to access individual data bytes.
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
  <div><strong>Interview Response:</strong> We can call socket.send(data) again and again. But the data buffers (stored) in memory and transfer only as fast as network speed allows. The socket.bufferedAmount property stores how many bytes remain buffered while waiting to transmit over the network. We can examine it to see whether the socket is available for transmission. We have to set an interval, check the buffered amount, and re-initiate a call for more data.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// every 100ms examine the socket and send more data
// only if all the existing data was sent out
setInterval(() => {
  if (socket.bufferedAmount == 0) {
    socket.send(moreData());
  }
}, 100);
```

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
