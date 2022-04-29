---
title: Scrolling Events
description: Scrolling Events in JavaScript are events that occur when a user interacts with a scrollbar. They are triggered by the user's scrollbar. - JavaScript Interview Questions & Answers
sidebar_position: 6
sidebar_label: Scrolling Events
---

**UI Events: Scrolling Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### What does the scroll event allow in terms of page or element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The scroll event seeks to respond to the scrolling of a page or element. We have a lot of nice things we can do here. For example, based on where the user is in the document, reveal or conceal extra controls or information—load extra info when the user scrolls down to the bottom of the page (lazy load).
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

### How can we block scrolling on a web page in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We cannot use event.preventDefault() in the onscroll listener to prevent scrolling because it fires after the scroll has already occurred. We may, however, disable event-based scrolling by using preventDefault() which invokes on a scroll-triggering event, such as the keydown event for pageUp and pageDown. The scroll does not begin if we add an event handler to these events and use event.preventDefault().
    </div>
  </div>
</details>

---
