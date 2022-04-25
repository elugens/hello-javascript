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
  <div><strong>Interview Response:</strong> The change event triggers when the element has finished changing. The behavior depends on the kind of element getting changed and how the user interacts with the element. The change event fires at a different moment. For text inputs, the event occurs when it loses focus.
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
  <div><strong>Interview Response:</strong> The input event triggers whenever the user changes a value. It initiates any value change, even ones that do not require keyboard activities, such as copying with a mouse or using speech recognition to dictate the text. This event is the ideal solution if we want to handle every change to an &#8249;input&#8250;. In contrast, the input event does not trigger through a keyboard input or other activities that do not require a value change, such as hitting the right or left arrow keys when in the input.
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
After the value gets updated, the input event happens. As a result, we are unable to use event. It's too late to use preventDefault() there — the consequence would be null.
:::

  </div>
  </div>
</details>

---

### What class do the cut, copy, and paste events belong to?

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
  <div><strong>Interview Response:</strong> These events occur when you cut, copy, or paste a value. They are members of the ClipboardEvent class and offer access to copied/pasted data. We may alternatively use event.preventDefault() to cancel the operation, which means nothing is copied or pasted.
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
It is possible to copy/paste everything, not just text. For example, we can copy and paste a file from the OS file manager. This behavior is because clipboardData implements the DataTransfer interface, which often gets used for drag'n'drop and copy/paste.
:::

  </div>
  </div>
</details>

---

### Are there any user-related safety restrictions concerning the ClipboardAPI?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the clipboard is a “global” OS-level application program interface. So, most browsers allow read/write access to the clipboard only in the scope of specific user actions for security, e.g., an onclick event handlers. Also, it is forbidden to generate “custom” clipboard events with dispatchEvent in all browsers except Firefox.
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
