---
title: Bubbling / Capturing
sidebar_position: 2
---

# Bubbling / Capturing

**Introduction to Events: Bubbling and capturing**

### What is the bubble up principle in relation to events?

**Interview Answer:** The bubbling up principle is self-explanatory based on its name. In principle, when an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

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

### Explain what the event target is in JavaScript.\*\*

**Answer:** The most deeply nested element that caused the event is called a target element, accessible as event.target. The event target does not change through the bubbling process and can be viewed as the initial point of the event.

**Note:** The current target is the specific target where the current action is taking place where “this = event.currentTarget”. It’s possible that event.target could equal this or the current target.

Source: <https://javascript.info/bubbling-and-capturing#event-target>

### Is there a way to stop an event from bubbling up?

**Interview Answer:** If necessary, there are two methods used to explicitly stop the bubbling up process including the stopPropagation and stopImmediatePropagation. Using these two approaches should be limited, because there are some drawbacks such click event failures.

Source: <https://javascript.info/bubbling-and-capturing#stopping-bubbling>

### What is the difference between the event stopPropagation and stopImmediatePropagation methods?

**Interview Answer:** If an element has multiple event handlers on a single event, then even if one of them stops the bubbling, the other ones still execute. In other words, event.stopPropagation() stops the move upwards, but on the current element all other handlers will run. To stop the bubbling and prevent handlers on the current element from running, we use event.stopImmediatePropagation(). After it, no other handlers execute.

Source: <https://javascript.info/bubbling-and-capturing#stopping-bubbling>

### What are the three phases of event propagation?

**Interview Answer:** There are three phases of event propagation including the capturing, targeting, and bubbling phases. The capturing phase is the process of the event traveling down to the target element ( {capture: true} ). The targeting phase is when we reach our target element, and the bubbling phase is the process of bubbling up from the target element.

Source: <https://javascript.info/bubbling-and-capturing#capturing>

### Is there an explicit way to invoke capturing an event in the capturing phase?

**Interview Answer:** Yes, to catch an event on the capturing phase, we need to set the handler capture option to true. There are two possible values of the capture option true and false. If it is false (default), then the handler is set on the bubbling phase. If it is true, then the handler is set on the capturing phase.

**Note:** that while formally there are 3 phases, the 2nd phase (“target phase”: the event reached the element) is not handled separately: handlers on both capturing and bubbling phases trigger at that phase.

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
