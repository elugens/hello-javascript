---
title: Scrolling Events
sidebar_position: 6
---

# Scrolling Events

**UI Events: Scrolling Events**

<head>
  <title>Scrolling Events - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does the scroll event allow in terms of page or element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scroll event allows reacting to a page or element scrolling. There are quite a few good things we can do here. Like, show/hide additional controls or information depending on where in the document the user is. Load more data when the user scrolls down till the end of the page (lazy load).
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  #showScroll {
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

  </div>
  </div>
</details>

---

### How do we make something unscrollable in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can’t prevent scrolling by using event.preventDefault() in onscroll listener, because it triggers after the scroll has already happened. But we can prevent scrolling by event.preventDefault() on an event that causes the scroll, for instance keydown event for pageUp and pageDown. If we add an event handler to these events and event.preventDefault() in it, then the scroll won’t start. There are many ways to initiate a scroll, so it’s more reliable to use CSS, overflow property.
    </div>
  </div>
</details>

---
