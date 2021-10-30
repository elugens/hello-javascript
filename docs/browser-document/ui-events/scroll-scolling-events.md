---
title: Scrolling Events
sidebar_position: 6
---

# Scrolling Events

**UI Events: Scrolling**
`

### What does the scroll event allow in terms of page or element?

**Interview Answer:** The scroll event allows reacting to a page or element scrolling. There are quite a few good things we can do here. Like, show/hide additional controls or information depending on where in the document the user is. Load more data when the user scrolls down till the end of the page (lazy load).

Example:

```html
<style>
  #showScroll  {
    height: 5000px;

    padding-top: 500px;
  }
</style>

<div id="showScroll" onscroll="scroll();">0</div>

<script>
  window.addEventListener('scroll', function () {
    document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
  });
</script>
```

Source: <https://javascript.info/keyboard-events#default-actions>

### How do we make something unscrollable in the browser?

**Interview Answer:** We can’t prevent scrolling by using event.preventDefault() in onscroll listener, because it triggers after the scroll has already happened. But we can prevent scrolling by event.preventDefault() on an event that causes the scroll, for instance keydown event for pageUp and pageDown. If we add an event handler to these events and event.preventDefault() in it, then the scroll won’t start. There are many ways to initiate a scroll, so it’s more reliable to use CSS, overflow property.

Source: <https://javascript.info/onscroll#prevent-scrolling>
