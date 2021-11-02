---
title: Browser Default Actions
sidebar_position: 4
---

# Browser Default Actions

**Browser Events: Browser Default Actions**

<head>
  <title>Browser Default Actions - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is a default action considered in the browser?

**Interview Answer:** There are several different types of default actions in the browser. For instance, a click on a link initiates a navigation to the specified URL. Another default action is the highlighting of text when pressing a mouse button as we glide over the text. As developers we have control over many of these actions.

Source: <https://javascript.info/default-browser-action>

### Is there a built-in function or method used to prevent browser actions?

**Interview Answer:** Yes, we can use the preventDefault method to prevent specific browser actions.

Example:

```html
<a href="/" onclick="return false">Click here</a>

or

<a href="/" onclick="event.preventDefault()">Click here</a>
```

Source: <https://javascript.info/default-browser-action#preventing-browser-actions>

### What happens when you return false from a handler?

**Interview Answer:** The value returned by an event handler is usually ignored. The only exception is returning false from a handler assigned using `on<event>`. In all other cases, return value is ignored. There is no sense in returning true.

Source: <https://javascript.info/default-browser-action#preventing-browser-actions>

### What is the function of the defaultPrevented property?

**Interview Answer:** The defaultPrevented read-only property of the Event interface returns a Boolean indicating whether the call to Event.preventDefault() canceled the event. The property event.defaultPrevented is true if the default action was prevented, and false otherwise.

Example:

```html
<p>Rightclick for the document menu </p>

<button id="elem">Right-click for the button menu</button>

<script>
  elem.oncontextmenu = function (event) {
    event.preventDefault();

    alert('Button context menu');
  };

  document.oncontextmenu = function (event) {
    if (event.defaultPrevented) return;

    event.preventDefault();

    alert('Document context menu');
  };
</script>
```

Source: <https://javascript.info/default-browser-action#event-defaultprevented>
