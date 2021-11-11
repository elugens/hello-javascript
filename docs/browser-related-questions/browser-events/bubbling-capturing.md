---
title: Bubbling / Capturing
sidebar_position: 2
---

# Bubbling / Capturing

**Browser Events: Bubbling / Capturing**

<head>
  <title>Bubbling / Capturing - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the bubble up principle in relation to events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The bubbling up principle is self-explanatory based on its name. In principle, when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.
    </div>
  </div>
</details>

Example:

```html
<style>
  body *  {
    margin: 10px;

    border: 1px solid blue;
  }
</style>

<!-- this will return the p, div and form alerts -->

<form onclick="alert('form')">
  FORM

  <div onclick="alert('div')">
    DIV

    <p onclick="alert('p')">P</p>
  </div>
</form>
```

Source: <https://javascript.info/bubbling-and-capturing#bubbling>

### Explain what the event target is in JavaScript.

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The most deeply nested element that caused the event is called a target element, accessible as event.target. The event target does not change through the bubbling process and can be viewed as the initial point of the event.
    </div>
  </div>
</details>

:::note
The current target is the specific target where the current action is taking place where “this = event.currentTarget”. It’s possible that event.target could equal this or the current target.
:::

Source: <https://javascript.info/bubbling-and-capturing#event-target>

### Is there a way to stop an event from bubbling up?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If necessary, there are two methods used to explicitly stop the bubbling up process including the stopPropagation and stopImmediatePropagation. Using these two approaches should be limited, because there are some drawbacks such click event failures.
    </div>
  </div>
</details>

Source: <https://javascript.info/bubbling-and-capturing#stopping-bubbling>

### What is the difference between the event stopPropagation and stopImmediatePropagation methods?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run. To stop the bubbling and prevent handlers on the current element from running, we use event.stopImmediatePropagation(). After it, no other handlers execute.
    </div>
  </div>
</details>

Source: <https://javascript.info/bubbling-and-capturing#stopping-bubbling>

### What are the three phases of event propagation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are three phases of event propagation including the capturing, targeting, and bubbling phases. The capturing phase is the process of the event traveling down to the target element ( &#123;capture: true&#125; ). The targeting phase is when we reach our target element, and the bubbling phase is the process of bubbling up from the target element.
    </div>
  </div>
</details>

Source: <https://javascript.info/bubbling-and-capturing#capturing>

### Is there an explicit way to invoke capturing an event in the capturing phase?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, to catch an event on the capturing phase, we need to set the handler capture option to true. There are two possible values of the capture option true and false. If it is false (default), then the handler is set on the bubbling phase. If it is true, then the handler is set on the capturing phase.
    </div>
  </div>
</details>

:::note
While formally there are 3 phases, the 2nd phase (“target phase”: the event reached the element) is not handled separately: handlers on both capturing and bubbling phases trigger at that phase.
:::

Example:

```html
<style>
  body *  {
    margin: 10px;

    border: 1px solid blue;
  }
</style>

<form>
  FORM

  <div>
    DIV

    <p>P</p>
  </div>
</form>

<script>
  for (let elem of document.querySelectorAll('*')) {
    elem.addEventListener(
      'click',
      (e) => alert(`Capturing: ${elem.tagName}`),
      true
    );

    elem.addEventListener('click', (e) => alert(`Bubbling: ${elem.tagName}`));
  }
</script>
```

Source: <https://javascript.info/bubbling-and-capturing#capturing>
