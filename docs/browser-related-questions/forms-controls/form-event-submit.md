---
title: Form Submit / Events
description: Form Submit / Events in JavaScript are events that occur when a user interacts with a form. - JavaScript Interview Questions & Answers
sidebar_position: 4
sidebar_label: Form Submit / Events
keywords:
  - form submit
  - form event
  - form events
  - form submission
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - interview questions
  - interview answers
  - js
tags:
  - form submit
  - form event
  - form events
  - form submission
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FormEventSubmitSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Form Submit Events | JavaScript Frontend Phone Interview</title>
</head>

**Forms / Controls: Form Submit / Events**

<CloseAllAnswers />

---

### What happens when we submit a form in the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a form is submitted, the submit event is triggered. It often gets used to verify the form (form validation) before sending it to the server or cancel the submission and process it in JavaScript. The function form.submit() enables us to transmit forms from JavaScript, and we may use it to construct and send forms to the server dynamically.
    </div>
  </div>
</details>

---

### What are the two ways to allow a user to submit a form?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There are two primary methods for submitting a form. The first step is to select either &#8249;input type="submit"&#8250; or &#8249;input type="image"&#8250;. The second method is to enter data into an input field by pressing Enter. Both activities result in the form's submit-event. The handler can inspect the data, display them, and call events if any issues appear. If you use `preventDefault()`, the form does not transmit to the server.
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
  <div><strong>Interview Response:</strong> When a form gets sent using Enter on an input field, a click event triggers on the &#8249;input type="submit"&#8250;. That is rather funny because there was no click at all.
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
