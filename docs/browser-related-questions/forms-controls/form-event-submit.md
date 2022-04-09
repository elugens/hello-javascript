---
title: Form Submit / Events
description: Form Submit / Events in JavaScript are events that occur when a user interacts with a form. They are triggered by the user's form. - JavaScript Interview Questions & Answers
sidebar_position: 4
sidebar_label: Form Submit / Events
---

**Forms / Controls: Form Submit / Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### When happens when a form is submitted in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The submit event triggers when the form is submitted, it is usually used to validate the form before sending it to the server or to abort the submission and process it in JavaScript. The method form.submit() allows us to initiate form sending from JavaScript. We can use it to dynamically create and send our own forms to the server.
    </div>
  </div>
</details>

---

### What are the two ways to allow a user to submit a form?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two main ways to submit a form. The first is to click &#8249;input type="submit"&#8250; or &#8249;input type="image"&#8250;. The second is to press Enter on an input field. Both actions lead to submit event on the form. The handler can check the data, and if there are errors, show them and call `event.preventDefault()`, then the form won’t be sent to the server.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form onsubmit="alert('submit!');return false">
  First: Enter in the input field <input type="text" value="text" /><br />
  Second: Click "submit": <input type="submit" value="Submit" />
</form>
```

  </div>
  </div>
</details>

---

### What is the relation between submit and click?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a form is sent using Enter on an input field, a click event triggers on the &#8249;input type="submit"&#8250;. That is rather funny, because there was no click at all.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form onsubmit="return false">
  <input type="text" size="30" value="Focus here and press enter" />
  <input type="submit" value="Submit" onclick="alert('click')" />
</form>
```

  </div>
  </div>
</details>

---
