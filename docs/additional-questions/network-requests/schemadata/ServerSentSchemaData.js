const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do the Server-Sent Events describe the EventSource?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Server-Sent Events specification describes the built-in class EventSource, connecting with the server and allowing it to receive events from it. Like WebSocket, the connection is persistent, but several significant differences are apparent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between WebSocket and EventSource?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EventSource is like WebSocket; they both behave similarly. However, there are some differences between the two. WebSocket is bi-directional, and EventSource is uni-directional, where only the server sends data. Unlike WebSocket, EventSource is limited to text data and cannot process binary data by default. Another difference comes in the form of their protocol. WebSocket has its dedicated protocol, and EventSource relies on the HTTP protocol application layer. EventSource is a less-powerful way of communicating with the server than WebSocket, but that should not be considered a disadvantage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do we use the EventSource class in our code?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main reason: is simplicity. In many applications, the power of WebSocket is a little bit too much. When you need to receive a stream of data from the server: chat messages, market prices, or whatever. That is why EventSource is useful. Also, it supports auto-reconnect, something we need to implement manually with WebSocket. Besides, it is a plain old HTTP, not a new protocol.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do we need to use to open an EventSource server connection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To start receiving messages, we need to create a new EventSource(URL). The browser connects to the URL and keeps the connection open, waiting for events. The server should respond with status 200 and the header Content-Type: text/event-stream, then keep the connection and write messages into it in the unique format. In practice, complex messages usually transmit JSON-encoded data. Line-breaks typically encode as \n, so multiline data: messages are not necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we use EventSource with cross-origin requests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, EventSource supports cross-origin requests, like fetch and other networking methods. We can use whatever URL we like. After receiving the Origin header, the remote server must respond with "Access-Control-Allow-Origin". We must enable the withCredentials option to pass credentials.',
      },
    },
    {
      '@type': 'Question',
      name: 'If we lose the connection with the server, how does EventSource respond?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Upon creation, a new EventSource connects to the server, and if the connection gets broken, it simply reconnects. That is very convenient, as we do not have to care about it. There is a slight delay between reconnections, usually a few seconds, and the server can provide the appropriate delay (milliseconds). The retry message may transmit with other data or stand-alone messages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the reconnection process work in the browser?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The browser should wait that many milliseconds before reconnecting. Or longer, e.g., if the browser knows (from OS) that there is no network connection existing at the time, it may wait until the connection appears and then retry. If the server wants the browser to stop reconnecting, it should respond with HTTP status 204. If the browser wants to close the connection, it should call eventSource.close(). Also, there is no reconnection if the response has an incorrect Content-Type or its HTTP status differs from 301, 307, 200, and 204. The "error" event gets emitted in such cases, and the browser does not reconnect.<br /><br />We should note that when a connection is finally closed, there is no way to \u201Creopen\u201D it. If we would like to connect again, create a new EventSource.',
      },
    },
    {
      '@type': 'Question',
      name: 'To correctly resume a network connection, what does the browser or server have to do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When a connection breaks due to network problems, either side cannot be sure which messages were received and which were not. To correctly resume the connection, each message should have an id field. When a message with id is received, the browser sets the property eventSource.lastEventId to its value. Upon reconnection, it sends the header Last-Event-ID with that id so that the server may re-send the messages. We should note that the id is appended below message data by the server to ensure that lastEventId is updated after the message is received.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the EventSource object’s readyState property work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EventSource object has one of three values, including connection (0), open (1), and closed (2). When an object gets created, or the connection is down, it is always EventSource.CONNECTING (equals 0). We can query this property to know the state of EventSource.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the three events that the EventSource object generates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, the EventSource object generates three events, including the message, open, and error events. The message event denotes the receipt of a message, as event.data. The evident opening of the link is the open event, and the error event is a connection failure with the server issuing an HTTP 500 status. The server may specify another type of event with event: &#8249;event&#8250; at the event start. We should note that to handle custom events. We must use addEventListener, not the onmessage property.',
      },
    },
  ],
};

export default StructuredData;
