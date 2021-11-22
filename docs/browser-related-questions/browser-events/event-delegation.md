---
title: Event Delegation
sidebar_position: 3
---

# Event Delegation

**Browser Events: Event Delegation**

<head>
  <title>Event Delegation - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What is the behavior pattern in relation to event delegation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In relation to events the behavior pattern has two parts. First, we add a custom attribute to an element that describes its behavior. Second, document-wide handler tracks events, and if an event happens on an attributed element – performs the action.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Counter: -->
<input type="button" value="1" data-counter />

<!-- One more counter: -->
<input type="button" value="2" data-counter />

<script>
  document.addEventListener('click', function (event) {
    if (event.target.dataset.counter != undefined) {
      // if the attribute exists...
      event.target.value++;
    }
  });
</script>
```

  </div>
  </div>
</details>

---
