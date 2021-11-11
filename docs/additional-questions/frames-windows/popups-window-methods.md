---
title: Popups / Window Methods
sidebar_position: 1
---

# Popups / Window Methods

**Frames / Windows: Popups and Window Methods**

<head>
  <title>Popups / Window Methods - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### Explain the function and syntax of the Window interface's open() method.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A popup window is one of the oldest methods to show additional document to user. The Window interface's open() method loads the specified resource into the new or existing browsing context (window, &#8249;iframe&#8250; or tab) with the specified name. If the name does not exist, then a new browsing context is opened in a new tab or a new window, and the specified resource is loaded into it. The open method has three arguments including the url, windowName, and windowFeatures parameters. The url is a DOMString indicating the URL of the resource to be loaded. This can be a path or URL to an HTML page, image file, or any other resource that is supported by the browser. The windowName is a DOMString specifying the name of the browsing context (window, &#8249;iframe&#8250; or tab) into which to load the specified resource; if the name does not indicate an existing context, a new window is created and is given the name specified by windowName. The windowFeatures parameter is a DOMString containing a comma-separated list of window features given with their corresponding values in the form "name=value". These features include options such as the window's default size and position, whether to include toolbar or not, and so forth. There must be no whitespace in the string. Both the windowName and windowFeatures are optional parameters.
    </div>
  </div>
</details>

**Syntax:** var window = window.open(url, windowName, [windowFeatures])

Code Example: Basic

```js
var windowObjectReference;

var windowFeatures =
  'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';

function openRequestedPopup() {
  windowObjectReference = window.open(
    'http://www.cnn.com/',
    'CNN_WindowName',
    windowFeatures
  );
}
```

Source: <https://javascript.info/popup-windows>

### When do browsers block pop-up events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Most browsers block popups if they are called outside of user-triggered event handlers like onclick. This way users are somewhat protected from unwanted popups, but the functionality is not disabled totally.
    </div>
  </div>
</details>

Code Example:

```js
// popup blocked

window.open('https://javascript.info');

// popup allowed

button.onclick = () => {
  window.open('https://javascript.info');
};
```

Source: <https://javascript.info/popup-windows#popup-blocking>

### What when a popup opens from onclick, but after setTimeout?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The simple answer is it depends on the browser. For instance, if a onclick event has a nested timeout and returns a window open after 3 seconds. The popup opens in Chrome but gets blocked in Firefox. If we decrease the delay, the popup works in Firefox too (down to 2 seconds or less). The difference is that Firefox treats a timeout of 2000ms or less are acceptable, but after it – removes the “trust”, assuming that now it’s “outside of the user action”. So, the first one is blocked, and the second one is not.
    </div>
  </div>
</details>

Code Example:

```js
// open after 3 seconds - works in Chrome, but not Firefox

setTimeout(() => window.open('http://google.com'), 3000);

// open after 1 seconds works in Firefox too...

setTimeout(() => window.open('http://google.com'), 1000);
```

Source: <https://javascript.info/popup-windows#popup-blocking>

### What is the most important rule when we are setting Window.open features parameters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The configuration string for the new window. It contains settings, delimited by a comma. There must be no spaces in parameters, for example: width=200,height=100.
    </div>
  </div>
</details>

Code Example:

```js
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no`;

open('/', 'test', params);
```

Source: <https://javascript.info/popup-windows#window-open>

### Can you name some of the rules for omitted settings in the Window.open() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several rules for omitted settings of the Window.open() method.<br /><br />
  <ul>
    <li>If there is no 3rd argument in the open call, or it is empty, then the default window parameters are used.</li>
    <li>If there is a string of params, but some yes/no features are omitted, then the omitted features assumed to have no value. So if you specify params, make sure you explicitly set all required features to yes.</li>
    <li>If there is no left/top in params, then the browser tries to open a new window near the last opened window.</li>
    <li>If there is no width/height, then the new window will be the same size as the last opened.</li>
  </ul>
</div>
  </div>
</details>

Code Example:

```js
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no`;

open('/', 'test', params);
```

Source: <https://javascript.info/popup-windows#example-a-minimalistic-window>

### What is the rule or origin policy when it comes to pop-up windows?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Windows may freely access content of each other only if they come from the same origin (the same protocol://domain:port). Otherwise, e.g., if the main window is from site.com, and the popup from gmail.com, that is impossible for user safety reasons.
    </div>
  </div>
</details>

Source: <https://javascript.info/popup-windows#accessing-popup-from-window>

### Can a popup access the “opener” window and make modifications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A popup may access the “opener” window as well using window.opener reference. It is null for all windows except popups. So the connection between the windows is bidirectional: the main window and the popup have a reference to each other.
    </div>
  </div>
</details>

Code Example:

```js
let newWin = window.open('about:blank', 'hello', 'width=200,height=200');

newWin.document.write(
  "<script>window.opener.document.body.innerHTML = 'Test'</script>"
);
```

Source: <https://javascript.info/popup-windows#accessing-window-from-popup>

### Is there a method that can be used to close a pop-up window?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the close() method is available for any window, but window.close() is ignored by most browsers if window is not created with window.open(). So, it will only work on a popup. The closed property is true if the window is closed. That is useful to check if the popup (or the main window) is still open or not. A user can close it anytime, and our code should take that possibility into account. To check if a window is closed: win.closed.
    </div>
  </div>
</details>

Code Example:

```js
let newWindow = open('/', 'example', 'width=300,height=300');

newWindow.onload = function () {
  newWindow.close(); // method
  alert(newWindow.closed); // property
};
```

Source: <https://javascript.info/popup-windows#closing-a-popup>
