---
title: Cross-Window Communication

sidebar_position: 2
---

# Cross-Window Communication

**Frames / Windows: Cross-Window Communication**

<head>
  <title>Cross-Window Communication - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Can you explain, what is the same origin policy?

**Interview Answer:** Two URLs are said to have the “same origin” if they have the same protocol, domain, and port. The “Same Origin” (same site) policy limits access of windows and frames to each other. The idea is that if a user has two pages open: one from john-smith.com, and another one is gmail.com, then they would not want a script from john-smith.com to read our mail from gmail.com. So, the purpose of the “Same Origin” policy is to protect users from information theft.

**Examples:**

These URLs all share the same origin:

- http://site.com
- http://site.com/
- http://site.com/my/page.html

These ones do not:

- http://www.site.com (another domain: www. matters)
- http://site.org (another domain: .org matters)
- https://site.com (another protocol: https)
- http://site.com:8080 (another port: 8080)

Source: <https://javascript.info/cross-window-communication>

### What are the rules for origin policy for an iframe?

**Interview Answer:** The same rules that apply pop-up windows apply for iframes when it comes to origin policies. When we access something inside the embedded window, the browser checks if the iframe has the same origin. If that is not so then the access is denied (writing to location is an exception, it is still permitted).

**Code Example:**

```html
<iframe src="https://example.com" id="iframe"></iframe>

<script>
  iframe.onload = function () {
    // we can get the reference to the inner window

    let iframeWindow = iframe.contentWindow; // OK
    try {
      // ...but not to the document inside it

      let doc = iframe.contentDocument; // ERROR
    } catch (e) {
      alert(e); // Security Error (another origin)
    }

    // also we can't READ the URL of the page in iframe

    try {
      // Can't read URL from the Location object

      let href = iframe.contentWindow.location.href; // ERROR
    } catch (e) {
      alert(e); // Security Error
    }

    // ...we can WRITE into location (and thus load something else into the iframe)!

    iframe.contentWindow.location = '/'; // OK
    iframe.onload = null; // clear the handler, not to run it after the location change
  };
</script>
```

Source: <https://javascript.info/cross-window-communication#in-action-iframe>

### What is the difference between iframe.onload vs iframe.contentWindow.onload?

**Interview Answer:** The iframe.onload event (on the `<iframe>` tag) is essentially the same as iframe.contentWindow.onload (on the embedded window object). It triggers when the embedded window fully loads with all resources. But we can’t access iframe.contentWindow.onload for an iframe from another origin, so we should use iframe.onload if that is the case.

Source: <https://javascript.info/cross-window-communication#in-action-iframe>

### How do subdomains operate in the context of the same origin policy?

**Interview Answer:** By definition, two URLs with different domains have different origins. But if windows share the same second-level domain, for instance john.site.com, peter.site.com and site.com (so that their common second-level domain is site.com), we can make the browser ignore that difference, so that they can be treated as coming from the “same origin” for the purposes of cross-window communication. To make it work, each such window should run the code and assign the base domain to the subdomains.

Code Example:

```html
<script>
  document.domain = 'site.com';
</script>
```

Source: <https://javascript.info/cross-window-communication#windows-on-subdomains-document-domain>

### Are there any pitfalls when an iframe attempts to access its document?

**Interview Answer:** Yes, when an iframe comes from the same origin, and we may access its document, there is a pitfall. It is not related to cross-origin things, but it is important to know. Upon its creation an iframe immediately has a document. But that document is different from the one that loads into it! So, if we do something with the document immediately, that will probably be lost. We should not work with the document of a not-yet-loaded iframe, because that is the wrong document. If we set any event handlers on it, they will be ignored.

Code Example:

```html
<iframe src="/" id="iframe"></iframe>

<script>
  let oldDoc = iframe.contentDocument;

  iframe.onload = function () {
    let newDoc = iframe.contentDocument;

    // the loaded document is not the same as initial!

    alert(oldDoc == newDoc); // false
  };
</script>
```

Source: <https://javascript.info/cross-window-communication#iframe-wrong-document-pitfall>

### Is there a way to detect the moment when the document is loaded into an iframe?

**Interview Answer:** Yes, the right document is definitely at place when iframe.onload triggers. But it only triggers when the whole iframe with all resources is loaded. We can try to catch the moment earlier using checks in a setInterval method.

Code Example:

```html
<iframe src="/" id="iframe"></iframe>

<script>
  let oldDoc = iframe.contentDocument;

  // every 100 ms check if the document is the new one

  let timer = setInterval(() => {
    let newDoc = iframe.contentDocument;

    if (newDoc == oldDoc) return;

    alert('New document is here!');

    clearInterval(timer); // cancel setInterval, don't need it any more
  }, 100);
</script>
```

Source: <https://javascript.info/cross-window-communication#iframe-wrong-document-pitfall>

### What approach should you use to access window object for an iframe?

**Interview Answer:** An alternative way to get a window object for `<iframe>` – is to get it from the named collection window.frames. There are two approaches that you can use including by number or by name. By number: window.frames[0] – the window object for the first frame in the document. By name: window.frames.iframeName – the window object for the frame with name="iframeName".

Code Example:

```html
<iframe src="/" style="height:80px" name="win" id="iframe"></iframe>

<script>
  alert(iframe.contentWindow == frames[0]); // true
  alert(iframe.contentWindow == frames.win); // true
</script>
```

Source: <https://javascript.info/cross-window-communication#collection-window-frames>

### What is the purpose of the “sandbox” iframe attribute?

**Interview Answer:** The sandbox attribute allows for the exclusion of certain actions inside an `<iframe>` to prevent it executing untrusted code. Its “sandboxes” the iframe by treating it as coming from another origin and/or applying other limitations. There is a “default set” of restrictions applied for `<iframe sandbox src="...">`. But it can be relaxed if we provide a space-separated list of restrictions that should not be applied as a value of the attribute, like this: `<iframe sandbox="allow-forms allow-popups">`. In other words, an empty "sandbox" attribute puts the strictest limitations possible, but we can put a space-delimited list of those that we want to lift.

Code Example:

```html
<script>
  <iframe src='demo\_iframe\_sandbox.htm' sandbox />;
  // STRICT SANDBOX LEVEL
</script>
```

Source: <https://javascript.info/cross-window-communication#the-sandbox-iframe-attribute>

### Can you explain what the postMessage interface message does?

**Interview Answer:** The postMessage interface allows windows to talk to each other no matter which origin they are from. So, it is a way around the “Same Origin” policy. It allows a window from john-smith.com to talk to gmail.com and exchange information, but only if they both agree and call corresponding JavaScript functions. That makes it safe for users. The interface has two parts or arguments.

Source: <https://javascript.info/cross-window-communication#cross-window-messaging>

### How does the postMessage method work in relation to an iframe?

**Interview Answer:** The window that wants to send a message calls postMessage method of the receiving window. In other words, if we want to send the message to win, we should call win.postMessage(data, targetOrigin). The data argument is the data to we are attempting to send. It can be any object, the data is cloned using the “structured serialization algorithm”. IE supports only strings, so we should JSON.stringify complex objects to support that browser. The targetOrigin specifies the origin for the target window, so that only a window from the given origin will get the message.

Code Example:

```html
<iframe src="http://example.com" name="example">
  <script>
    let win = window.frames.example;

    win.postMessage('message', 'http://example.com');
  </script></iframe
>
```

Source: <https://javascript.info/cross-window-communication#postmessage>

### How would you receive a message from a postMessage?

**Interview Answer:** To receive a message, the target window should have a handler on the message event. It triggers when postMessage is called (and targetOrigin check is successful). The event object has special properties including the data, origin, and source properties. The data property holds to the data from the postMessage. The origin property holds the value of the originating document. The source is the reference to the sender window. We can immediately source.postMessage(...) back if we want.

Code Example:

```js
window.addEventListener('message', function (event) {
  if (event.origin != 'http://javascript.info') {
    // something from an unknown domain, let's ignore it

    return;
  }

  alert('received: ' + event.data);

  // can message back using event.source.postMessage(...)
});
```

Source: <https://javascript.info/cross-window-communication#postmessage>
