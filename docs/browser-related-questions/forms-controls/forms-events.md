---
title: Form Events
sidebar_position: 3
---

# Form Events

**Forms / Controls: Form Events**

<head>
  <title>Form Events - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### How does an event change function or work?

**Interview Answer:** The change event triggers when the element has finished changing. Depending on the kind of element being changed and the way the user interacts with the element, the change event fires at a different moment. For text inputs that means that the event occurs when it loses focus.

Example: text input

```html
<input type="text" onchange="alert(this.value)" />

<input type="button" value="Button" />
```

For other elements: select, input type=checkbox/radio it triggers right after the selection changes:

Example:

```html
<select onchange="alert(this.value)">
  <option value="">Select something</option>

  <option value="1">Option 1</option>

  <option value="2">Option 2</option>

  <option value="3">Option 3</option>
</select>
```

Source: <https://javascript.info/events-change-input#event-change>

### Can you explain how an input event functions when triggered?

**Interview Answer:** The input event triggers every time after a value is modified by the user. Unlike keyboard events, it triggers on any value change, even those that does not involve keyboard actions: pasting with a mouse or using speech recognition to dictate the text. If we want to handle every modification of an `<input>` then this event is the best choice. On the other hand, input event does not trigger on keyboard input and other actions that do not involve value change, e.g., pressing arrow keys ⇦ ⇨ while in the input.

**Note:** The input event occurs after the value is modified. So we can’t use `event.preventDefault()` there – it’s just too late, there would be no effect.

Example:

```html
<input type="text" id="input" /> oninput: <span id="result"></span>

<script>
  input.oninput = function () {
    result.innerHTML = input.value;
  };
</script>
```

Source: <https://javascript.info/events-change-input#event-input>

### What class doe the cut, copy, paste events belong too?

**Interview Answer:** They belong to ClipboardEvent class and provide access to the data that is copied/pasted.

Source: <https://javascript.info/events-change-input#events-cut-copy-paste>

### Can you explain how the cut, copy, and paste events work?

**Interview Answer:** These events occur on cutting/copying/pasting a value. They belong to ClipboardEvent class and provide access to the data that is copied/pasted. We also can use `event.preventDefault()` to abort the action, then nothing gets copied/pasted.

**Note:** That it’s possible to copy/paste not just text, but everything. For instance, we can copy a file in the OS file manager and paste it. That is because clipboardData implements DataTransfer interface, commonly used for drag’n’drop and copy/pasting.

Example:

```html
<input type="text" id="input" />

<script>
  input.oncut =
    input.oncopy =
    input.onpaste =
      function (event) {
        alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));

        return false;
      };
</script>
```

Source: <https://javascript.info/events-change-input#events-cut-copy-paste>

### Are there any user related safety restrictions in relation to the ClipboardAPI?

**Interview Answer:** Yes, the clipboard is a “global” OS-level application program interface. So, most browsers allow read/write access to the clipboard only in the scope of certain user actions for the safety, e.g., in onclick event handlers. Also, it is forbidden to generate “custom” clipboard events with dispatchEvent in all browsers except Firefox.

Example:

```html
<input type="text" id="input" />

<script>
  input.oncut =
    input.oncopy =
    input.onpaste =
      function (event) {
        alert(event.type + ' - ' + event.clipboardData.getData('text/plain'));

        return false;
      };
</script>
```

Source: <https://javascript.info/events-change-input#events-cut-copy-paste>
