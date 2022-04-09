---
title: Form Events
description: Form Events in JavaScript are events that occur when a user interacts with a form. They are triggered by the user's form. - JavaScript Interview Questions & Answers
sidebar_position: 3
sidebar_label: Form Events
---

**Forms / Controls: Form Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### How does an event change function or work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The change event triggers when the element has finished changing. Depending on the kind of element being changed and the way the user interacts with the element, the change event fires at a different moment. For text inputs that means that the event occurs when it loses focus.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> text input<br /><br />

  <div></div>

```html
<input type="text" onchange="alert(this.value)" />
<input type="button" value="Button" />
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> For other elements the select, input type=checkbox/radio it triggers right after the selection changes.<br /><br />

  <div></div>

```html
<select onchange="alert(this.value)">
  <option value="">Select something</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>
```

  </div>
  </div>
</details>

---

### Can you explain how an input event functions when triggered?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The input event triggers every time after a value is modified by the user. Unlike keyboard events, it triggers on any value change, even those that does not involve keyboard actions: pasting with a mouse or using speech recognition to dictate the text. If we want to handle every modification of an &#8249;input&#8250; then this event is the best choice. On the other hand, input event does not trigger on keyboard input and other actions that do not involve value change, e.g., pressing arrow keys ⇦ ⇨ while in the input.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
<input type="text" id="input"> oninput: <span id="result"></span>
<script>
  input.oninput = function() {
    result.innerHTML = input.value;
  };
</script>
```

:::note
The input event occurs after the value is modified. So we can’t use event.preventDefault() there – it’s just too late, there would be no effect.
:::

  </div>
  </div>
</details>

---

### What class does the cut, copy, paste events belong too?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> They belong to ClipboardEvent class and provide access to the data that is copied/pasted.
    </div>
  </div>
</details>

---

### Can you explain how the cut, copy, and paste events work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> These events occur on cutting/copying/pasting a value. They belong to ClipboardEvent class and provide access to the data that is copied/pasted. We also can use event.preventDefault() to abort the action, then nothing gets copied/pasted.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input type="text" id="input" />
<script>
  input.oncut =
    input.oncopy =
    input.onpaste =
      function (event) {
        alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
        return false;
      };
</script>
```

:::note
That it’s possible to copy/paste not just text, but everything. For instance, we can copy a file in the OS file manager and paste it. That is because clipboardData implements DataTransfer interface, commonly used for drag’n’drop and copy/pasting.
:::

  </div>
  </div>
</details>

---

### Are there any user related safety restrictions in relation to the ClipboardAPI?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the clipboard is a “global” OS-level application program interface. So, most browsers allow read/write access to the clipboard only in the scope of certain user actions for the safety, e.g., in onclick event handlers. Also, it is forbidden to generate “custom” clipboard events with dispatchEvent in all browsers except Firefox.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<input type="text" id="input" />
<script>
  input.oncut =
    input.oncopy =
    input.onpaste =
      function (event) {
        alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));
        return false;
      };
</script>
```

  </div>
  </div>
</details>

---
