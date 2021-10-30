---
title: Long Polling
sidebar_position: 10
---

# Long Polling

**Network requests: Long polling**

### Can you explain what long polling is in relation to network requests?

**Interview Answer:** Yes, Long polling is the simplest way of having persistent connection with server, that does not use any specific protocol like WebSocket or Server-Side Events. Being quite easy to implement, it is also good enough in a lot of cases.

Source: <https://javascript.info/long-polling>

### What is the difference between long and regular polling?

**Interview Answer:** The main difference is that long polling is a much better way to poll server, because it is also quite easy to implement and delivers messages without delays. Regular polling can suffer from delays between requests of up to 10 seconds. In fact, the server is bombed with a request every 10 seconds, leaving regular polling as a less than performant way of polling.

Source: <https://javascript.info/long-polling#long-polling>

### Can you explain the steps in the long polling process?

**Interview Answer:** The long polling process begins with a request being sent to the server. The server does not disconnect until it has a message to send. When the message appears, the server responds to the request and then the browser make a new request immediately. The situation when the browser sent a request and has a pending connection with the server, is standard for this method. Only when a message is delivered, the connection is reestablished. If the connection is lost, because of, say, a network error, the browser immediately sends a new request.

Code Example:

```js
async function subscribe() {
  let response = await fetch('/subscribe');

  if (response.status == 502) {
    // Status 502 is a connection timeout error,

    // may happen when the connection was pending for too long,

    // and the remote server or a proxy closed it

    // let's reconnect

    await subscribe();
  } else if (response.status != 200) {
    // An error - let's show it

    showMessage(response.statusText);

    // Reconnect in one second

    await new Promise((resolve) => setTimeout(resolve, 1000));

    await subscribe();
  } else {
    // Get and show the message

    let message = await response.text();

    showMessage(message);

    // Call subscribe() again to get the next message

    await subscribe();
  }
}

subscribe();
```

Source: <https://javascript.info/long-polling#long-polling>
