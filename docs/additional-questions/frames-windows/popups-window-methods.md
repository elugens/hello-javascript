---
title: Popups / Window Methods
description: Popups / Window Methods in JavaScript is a way to open a new window or a new tab. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Popups / Window Methods
---

**Frames / Windows: Popups and Window Methods**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Explain the function and syntax of the Window interface's open() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A pop-up window is one of the oldest methods to show an additional document to a user. The Window interface's open() method loads the specified resource into the new or existing browsing context (window, &#8249;iframe&#8250; or tab) with the specified name. If the name does not exist, a new browsing context gets opened in a new tab or a new window, and the specified resource is loaded. The open method takes three parameters: URL, windowName, and windowFeatures. The URL is a DOMString that specifies the location of the resource to be loaded. This element can be a path or URL to an HTML page, an image file, or any other resource that the browser supports. The windowName is a DOMString specifying the browsing context's name (window, &#8249;iframe&#8250; or tab) to load the specified resource; if the name does not indicate an existing context, a new window is created and gives the name specified by windowName. The windowFeatures parameter is a DOMString that contains a comma-separated list of window characteristics and their values in the form "name=value". These features include settings such as the window's default size and location, as well as whether or not the toolbar is shown. The string must not include any spaces. Both the windowName and windowFeatures options are optional.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> Basic Implementation<br /><br />

<strong>Syntax: </strong> var window = window.open(url, windowName, [windowFeatures]);<br /><br />

  <div></div>

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

  </div>
  </div>
</details>

---

### When do browsers block pop-up events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Most browsers block pop-ups if they get called outside of user-triggered event handlers like onclick. This way, users are somewhat protected from unwanted pop-ups, but the functionality is not disabled totally.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// popup blocked
window.open('https://javascript.info');

// popup allowed
button.onclick = () => {
  window.open('https://javascript.info');
};
```

  </div>
  </div>
</details>

---

### What when a pop-up opens from onclick, but after setTimeout?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The simple answer is that it depends on the browser. For instance, if an onclick event has a nested timeout and returns a window open after 3 seconds. The popup opens in Chrome but gets blocked in Firefox. If we decrease the delay, the pop-up works in Firefox (down to 2 seconds or less). The difference is that Firefox accepts timeouts of 2000ms or less, but beyond that, It eliminates the "trust," presuming that it is now "outside of the user action." As a result, the first gets prohibited while the second is not.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// open after 3 seconds - works in Chrome, but not Firefox
setTimeout(() => window.open('http://google.com'), 3000);

// open after 1 seconds works in Firefox too...
setTimeout(() => window.open('http://google.com'), 1000);
```

  </div>
  </div>
</details>

---

### What is essential to remember while configuring Window.open features parameters?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The configuration string for the new window. It contains settings delimited by a comma. There must be no spaces in parameters, for example: width=200,height=100.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no`;

open('/', 'test', params);
```

  </div>
  </div>
</details>

---

### Can you name some of the rules for omitted settings in the Window.open() method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are several rules for omitted settings of the Window.open() method.<br /><br />
  <ul>
    <li>If there is no third argument or empty in the open call, the default window parameters get utilized.</li>
    <li>If a string of params is present but specific yes/no features are missing, the missed features are believed to be null. So, if you supply params, make sure that all needed features get explicitly set to yes.</li>
    <li>If no left/top parameters are specified, the browser attempts to start a new window near the previous one that launched.</li>
    <li>If no width/height is specified, the new window turns out to be the same size as the previous one.</li>
  </ul>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no`;

open('/', 'test', params);
```

  </div>
  </div>
</details>

---

### What is the origin policy when it comes to pop-up windows?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Windows may freely access the content of each other only if they come from the same-origin (the same protocol://domain:port). Otherwise, it isn't possible for user safety concerns, for example, if the main window is from site.com and the pop-up is from gmail.com.
    </div>
  </div>
</details>

---

### Can the pop-up access the “opener” window and make modifications?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A pop-up may access the (opener) window using window.opener reference and it is null for all windows except pop-ups. As a result, the relationship between the windows is bidirectional: the main window and the pop-up both refer to one other.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let newWin = window.open('about:blank', 'hello', 'width=200,height=200');

newWin.document.write(
  "<script>window.opener.document.body.innerHTML = 'Test'</script>"
);
```

  </div>
  </div>
</details>

---

### Is there a way we can close a pop-up window programmatically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the close() method is available for any window, but most browsers ignore window.close() if the window does not get created with window.open(). So, it only works on a pop-up. If the window is closed, the closed attribute is true. This behavior is important for determining whether or not the pop-up (or the main window) is still active. A user can close it at any time, and our programming should take that into account. To check if a window is closed: win.closed.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let newWindow = open('/', 'example', 'width=300,height=300');

newWindow.onload = function () {
  newWindow.close(); // method
  alert(newWindow.closed); // property
};
```

  </div>
  </div>
</details>

---
