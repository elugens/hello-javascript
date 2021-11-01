---
title: Form Submit / Events
sidebar_position: 4
---

# Forms: event and method submit

**Forms, controls: Forms: event and method submit**

### When happens when a form is submitted in the browser?

**Interview Answer:** The submit event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScript. The method `form.submit()` allows us to initiate form sending from JavaScript. We can use it to dynamically create and send our own forms to the server.

Source: <https://javascript.info/forms-submit>

### What are the two ways to allow a user to submit a form?

**Interview Answer:** There are two main ways to submit a form. The first is to click `<input type="submit">` or `<input type="image">`. The second is to press Enter on an input field. Both actions lead to submit event on the form. The handler can check the data, and if there are errors, show them and call `event.preventDefault()`, then the form won’t be sent to the server.

Code Example:

```html
<form onsubmit="alert('submit!');return false">
  First: Enter in the input field <input type="text" value="text" /><br />

  Second: Click "submit": <input type="submit" value="Submit" />
</form>
```

Source: <https://javascript.info/forms-submit#event-submit>

### What is the relation between submit and click?

**Interview Answer:** When a form is sent using Enter on an input field, a click event triggers on the `<input type="submit">`. That is rather funny, because there was no click at all.

Code Example:

```html
<form onsubmit="return false">
  <input type="text" size="30" value="Focus here and press enter" />

  <input type="submit" value="Submit" onclick="alert('click')" />
</form>
```

Source: <https://javascript.info/forms-submit#event-submit>
