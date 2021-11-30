---
title: WebSocket
sidebar_position: 11
---

# WebSocket

**Network Requests: WebSocket**

<head>
  <title>WebSocket - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Can you briefly describe the WebSocket protocol?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The WebSocket protocol, described in the specification RFC 6455 provides a way to exchange data between browser and server via a persistent connection. The data can be passed in both directions as “packets”, without breaking the connection and additional HTTP-requests. WebSocket is especially great for services that require continuous data exchange, e.g., online games, real-time trading systems and so on.
    </div>
  </div>
</details>

---

### What protocol does WebSocket use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> WebSocket uses HTTP as the initial transport mechanism but keeps the TCP connection alive after the HTTP response is received so that it can be used for sending messages between client and server.
    </div>
  </div>
</details>

---

### What do we need to open a websocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To open a websocket connection, we need to create new WebSocket using the special protocol ws in the URL. There is also encrypted wss:// protocol. It is like HTTPS for websockets.
    </div><br />
    <strong>Syntax: </strong> let socket = new WebSocket("ws://javascript.info");<br /><br />
  </div>
</details>

---

### What is the preferred mode for a websocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The wss:// protocol is not only encrypted, but also more reliable. That is because ws:// data is not encrypted, visible for any intermediary. Old proxy servers do not know about WebSocket, they may see “strange” headers and abort the connection. On the other hand, wss:// is WebSocket over TLS, (same as HTTPS is HTTP over TLS), the transport security layer encrypts the data at sender and decrypts at the receiver. So, data packets are passed encrypted through proxies. They cannot see what is inside and let them through.
    </div>
  </div>
</details>

---

### After we create a websocket connection, what events can we listen for?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Once the socket is created, we can listen to events on it. There are totally 4 events including the open, message, error, and close events. The open event is the event listener to be called when the connection is opened. The message event is to be called when a message is received from the server. The error event is to be called when an error occurs, and the close event is called when the connection is closed. If we’d like to send something, then socket.send(data) will do that.
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

### What happens during initial state of opening a websocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When new WebSocket(url) is created, it starts connecting immediately. During the connection, the browser (using headers) asks the server: “Do you support Websocket?” And if the server replies “yes”, then the talk continues in WebSocket protocol. At this point we are using the websocket protocol to communicate with the server. The basic order it the request (a question), response (the answer), and the websocket interactive (active conversation).
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

### In the browser header, what does the origin refer to in websocket connections?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> WebSocket objects are cross-origin by nature. There are no special headers or other limitations. Old servers are unable to handle WebSocket anyway, so there are no compatibility issues. But Origin header is important, as it allows the server to decide whether to talk WebSocket with this website.
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

### What happens after the connection upgrade request with a websocket?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> After the connect upgrade request is initialized and approved, the requested protocol is “websocket”. At that point, a random browser-generated key for security and returned. Additionally, the current websocket version is presented, returned in the response.
    </div>
  </div>
</details>

---

### Can the WebSocket handshake be emulated with XMLHttpRequest or fetch?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, we cannot use XMLHttpRequest or fetch to make this kind of HTTP-request, because JavaScript is not allowed to set these headers.
    </div>
  </div>
</details>

---

### What is the server code response used during a switch WebSocket protocol?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If the server agrees to switch to WebSocket, it should send code 101 response. After the agreement is completed between the browser and server, the data is transferred using WebSocket protocol from that point on.
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

### What does deflate-frame mean in relation to Sec-WebSocket-Extensions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "deflate-frame" token is used in the "Sec-WebSocket-Extensions" header, deflate-frame means that the browser supports data compression. This extension compresses the "Application data" part of WebSocket data frames using DEFLATE. The simplest "Sec-WebSocket-Extensions" header in the client's opening handshake to request per-frame DEFLATE extension is the following: “Sec-WebSocket-Extensions: deflate-frame”. The simplest header from the server to accept this extension is the same.
    </div>
  </div>
</details>

---

### What does the Sec-WebSocket-Protocol: soap, wamp mean?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Sec-WebSocket-Protocol: soap, wamp means that we would like to transfer not just any data, but the data in SOAP or WAMP (“The WebSocket Application Messaging Protocol”) protocols. WebSocket subprotocols are registered in the IANA catalogue. So, this header describes data formats that we are going to use. This optional header is set using the second parameter of new WebSocket. That is the array of subprotocols, e.g., if we would like to use SOAP or WAMP. The server should respond with a list of protocols and extensions that it agrees to use.
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

### What are frames in relation to WebSocket communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> WebSocket communication consists of “frames” or data fragments, that can be sent from either side, and can be of several kinds including text, binary data, ping/pong, and connect close frames. The text frame contains text data that parties send to each other. Binary data frames contain binary data that parties send back and forth between each other. Ping Pong frames are used to check the connection, sent from the server, the browser responds to these automatically. At any point after the handshake, either the client or the server can choose to send a ping to the other party. When the ping is received, the recipient must send back a pong as soon as possible. You can use this to make sure that the client is still connected. The connect close frame is either a server or client initiating the closing handshake. There are several more included in this group, but these are the most common. In the browser, we directly work only with text or binary frames.
    </div>
  </div>
</details>

---

### Explain the function and syntax of the WebSocket.send() method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The WebSocket .send() method can send either text or binary data. A call socket.send(body) allows body in string or a binary format, including Blob, ArrayBuffer, etc. No settings are required, we can just send it out in any format.
    </div>
  </div>
</details>

---

### When WebSocket returns text or binary data to us, what object type is it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we receive the data, text always comes as string. And for binary data, we can choose between Blob and ArrayBuffer formats. That’s set by socket.binaryType property, it’s "blob" by default, so binary data comes as Blob objects. Blob is a high-level binary object, it directly integrates with &#8249;a&#8250;, &#8249;img&#8250; and other tags, so that is a sane default. But for binary processing, to access individual data bytes, we can change it to "arraybuffer".
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

### How should we handle a slow network connection in relation to WebSocket communication?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can call socket.send(data) again and again. But the data will be buffered (stored) in memory and sent out only as fast as network speed allows. The socket.bufferedAmount property stores how many bytes remain buffered at this moment, waiting to be sent over the network. We can examine it to see whether the socket is available for transmission. We will have to set an interval and check the buffered amount and re-initiate a call for more data.
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

### What happens when ether the browser or server closes a connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Normally, when a party wants to close the connection (both browser and server have equal rights), they send a “connection close frame” with a numeric code and a textual reason. We can explicitly close it from the browser using socket.close(). The code is a special WebSocket closing code, this is optional. The reason is a string that describes the reason of closing, also optional. Then the other party in close event handler gets the code and the reason.
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

### What are the common closure codes for WebSocket?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two most common WebSocket closure codes are 1000 and 1006. Code 1000 is the default, normal closure; the connection successfully completed whatever purpose for which it was created. Code 1006 is considered an abnormal closure, it used to indicate that a connection was closed abnormally (that is, with no close frame being sent) when a status code is expected. WebSocket codes are somewhat like HTTP codes, but different. In particular, any codes less than 1000 are reserved, there’ll be an error if we try to set such a code.
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

### How can we get the connection state of a WebSocket connection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To get connection state, we must use socket.readyState property to get the unsigned short values. The unsigned short values include connecting (0), open (1), closing (2), and closed (3).
    </div>
  </div>
</details>

---
