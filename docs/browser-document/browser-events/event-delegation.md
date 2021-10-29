---
title: Event delegation
sidebar_position: 3
---

# Event delegation

**Introduction to Events: Event delegation**

**Question:** **What is the behavior pattern in relation to event delegation?**

**Interview Answer:** In relation to events the behavior pattern has two parts. First, we add a custom attribute to an element that describes its behavior. Second, document-wide handler tracks events, and if an event happens on an attributed element – performs the action.

Example:

```html
Counter: <input type="button" value="1" data-counter />

One more counter: <input type="button" value="2" data-counter />

<script>
  document.addEventListener('click', function (event) {
    if (event.target.dataset.counter != undefined) {
      // if the attribute exists...

      event.target.value++;
    }
  });
</script>
```

Source: <https://javascript.info/event-delegation#the-behavior-pattern>
