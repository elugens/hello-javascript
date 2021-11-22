---
title: Focusing - focus/blur
sidebar_position: 2
---

# Focusing - focus/blur

**Forms / Controls: Focusing - focus/blur**

<head>
  <title>Focusing - focus/blur - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### What does it mean to focus on an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An element receives the focus when the user either clicks on it or uses the Tab key on the keyboard. There is also an autofocus HTML attribute that puts the focus onto an element by default when a page loads and other means of getting the focus. Focusing on an element generally means: “prepare to accept the data here”, so that is the moment when we can run the code to initialize the required functionality.
    </div>
  </div>
</details>

---

### How does blur work in relation to focus on an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The moment of losing the focus results in a blur. That is when a user clicks somewhere else or presses Tab to go to the next form field, or there are other means as well. Losing the focus generally means: “the data has been entered”, so we can run the code to check it or even to save it to the server and so on.
    </div>
  </div>
</details>

---

### Explain how focus and blur events work in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The focus event is called on focusing, and blur when the element loses the focus. A common approach is a blur handler checking if a field has been entered correctly after the focus event. You can use the focus handler to hide validation error. Modern HTML allows us to do many validations using input attributes: required, pattern and so on. And sometimes they are just what we need. JavaScript can be used when we want more flexibility. Also we could automatically send the changed value to the server if it’s correct.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<style>
  .invalid {
    border-color: red;
  }
  #error {
    color: red;
  }
</style>

Your email please: <input type="email" id="input" />

<div id="error"></div>

<script>
  input.onblur = function () {
    if (!input.value.includes('@')) {
      // not email
      input.classList.add('invalid');
      error.innerHTML = 'Please enter a correct email.';
    }
  };

  input.onfocus = function () {
    if (this.classList.contains('invalid')) {
      // remove the "error" indication, because the user wants to re-enter something
      this.classList.remove('invalid');
      error.innerHTML = '';
    }
  };
</script>
```

  </div>
  </div>
</details>

---

### What is the cause of JavaScript-initiated focus loss?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A focus loss can occur for many reasons. One of them is when the visitor clicks somewhere else. But also, JavaScript itself may cause it. An alert moves focus to itself, so it causes the focus loss at the element (blur event), and when the alert is dismissed, the focus comes back (focus event). If an element is removed from DOM, then it also causes the focus loss. If it is reinserted later, then the focus does not return. These features sometimes cause focus/blur handlers to misbehave – to trigger when they are not needed. The best recipe is to be careful when using these events. If we want to track user-initiated focus-loss, then we should avoid causing it ourselves.
    </div>
  </div>
</details>

---

### Is there a way to focus/blur on any element in the DOM?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Any element becomes focusable if it has tabindex. The value of the attribute is the order number of the element when Tab (or something like that) is used to switch between them.</div><br />
  <div><strong>Technical Response:</strong> By default, many elements do not support focusing. The list varies a bit between browsers, but one thing is always correct: focus/blur support is guaranteed for elements that a visitor can interact with: &#8249;button&#8250;, &#8249;input&#8250;, &#8249;select&#8250;, &#8249;a&#8250; and so on. On the other hand, elements that exist to format something, such as &#8249;div&#8250;, &#8249;span&#8250;, &#8249;table&#8250; – are un-focusable by default. The method `elem.focus()` doesn’t work on them, and focus/blur events are never triggered. Any element becomes focusable if it has tabindex. The value of the attribute is the order number of the element when Tab (or something like that) is used to switch between them.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!-- Click the first item and press Tab. -->
<ul>
  <li tabindex="1">One</li>
  <li tabindex="0">Zero</li>
  <li tabindex="2">Two</li>
  <li tabindex="-1">Minus one</li>
</ul>

<style>
  li {
    cursor: pointer;
  }
  :focus {
    outline: 1px dashed green;
  }
</style>
```

  </div>
  </div>
</details>

---

### Is there a way to focus/blur and ensure bubbling happens?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there are two approaches we can use to ensure bubbling. First, there is a funny historical feature: focus/blur do not bubble up but propagate down on the capturing phase. Second, there are focusin and focusout events – the same as focus/blur, but they bubble. Note that they must be assigned using elem.addEventListener, not on&#8249;event&#8250;.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form id="form">
  <input type="text" name="name" value="Name" />
  <input type="text" name="surname" value="Surname" />
</form>

<style>
  .focused {
    outline: 1px solid red;
  }
</style>

<script>
  form.addEventListener('focusin', () => form.classList.add('focused'));
  form.addEventListener('focusout', () => form.classList.remove('focused'));
</script>
```

  </div>
  </div>
</details>

---
