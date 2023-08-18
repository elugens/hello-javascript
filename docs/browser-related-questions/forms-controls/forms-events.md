---
title: Form Events
description: Form Events in JavaScript are events that occur when a user interacts with a form. The change event triggers when the element has finished changing. - JavaScript Interview Questions & Answers
sidebar_position: 3
sidebar_label: Form Events
keywords:
  - form events
  - forms events
  - events in forms
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - interview questions
  - interview answers
  - js
tags:
  - form events
  - forms events
  - events in forms
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/FormEventsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Form Events | JavaScript Frontend Phone Interview</title>
</head>

**Forms / Controls: Form Events**

---

<AdSense />

---

<CloseAllAnswers />

### What is a form event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript form events are initiated by the user's interactions with form elements, such as input, select, and text area. These events include:
  </div><br />

* **submit:** This event is triggered when the user submits the form.
* **change:** This event is triggered when the user changes the value of a form element.
* **input:** This event is triggered when the user enters text into a form element.

Form events can be used to validate user input, update the page based on user input, and prevent the form from being submitted if the user has not entered valid data.

  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Form Event Example</title>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    // Get the form element
    var form = document.getElementById("myForm");

    // Attach an event listener for the "submit" event
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Retrieve the value of the input field
      var name = document.getElementById("name").value;

      // Display a message with the submitted name
      console.log("Hello, " + name + "!");

      // Additional logic or actions can be performed here

      // Reset the form
      form.reset();
    });
  </script>
</body>
</html>
```

In this example, we have an HTML form with an input field for the user's name and a submit button. The JavaScript code adds an event listener to the form's "submit" event. When the user submits the form, the event listener callback function is executed.

Inside the callback function, we prevent the default form submission behavior using `event.preventDefault()`. Then we retrieve the value entered in the input field, display a message in the console using `console.log()`, perform any additional logic or actions as needed, and finally reset the form using `form.reset()`.

This is a basic example, but it demonstrates how to handle a form event in JavaScript and perform actions based on the user's input.

  </div>

  </div>
</details>

---

### Can you please explain the purpose of the 'submit' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'submit' event in JavaScript is triggered when a form is submitted, allowing you to capture and process the form data, perform validations, and execute actions based on the user's input.
  </div>
  </div>
</details>

---

### Can you provide an explanation of the 'change' event and the circumstances under which it is triggered?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'change' event is triggered when the value of an input, select, or textarea element is changed by the user. It is fired when the element loses focus or when the user commits a selection.
  </div>
  </div>
</details>

---

### How can you prevent a form from submitting in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can prevent form submission by using event.preventDefault() method in the 'submit' event handler.
  </div><br />
  <div><strong>Technical Response:</strong> You can prevent a form from submitting by using the event.preventDefault() method in the 'submit' event handler. This method will stop the form from submitting to the server, even if the user has clicked the submit button. You can use this method to prevent forms from being submitted if there are any errors in the form data, or if you want to perform some additional validation before submitting the form. For example, you could use the event.preventDefault() method to prevent a form from being submitted if the user has not entered a value in a required field. You could also use it to prevent a form from being submitted if the user has entered an invalid value in a field. The event.preventDefault() method is a very powerful tool that can be used to prevent forms from being submitted in a variety of situations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prevent Form Submission Example</title>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    var form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Perform additional logic or validation

      // Example: Display a message instead of submitting the form
      var name = document.getElementById("name").value;
      console.log("Hello, " + name + "! Form submission prevented.");
    });
  </script>
</body>
</html>
```

In this example, we have an HTML form with an input field for the user's name and a submit button. The JavaScript code adds an event listener to the form's 'submit' event.

When the user submits the form, the event listener callback function is executed. Inside the function, we prevent the default form submission behavior using `event.preventDefault()`. This stops the form from being submitted to the server.

You can perform additional logic or validation within the event listener function. In this example, we retrieve the value entered in the input field, `name`, using `getElementById()`. Then we display a message with the submitted name, indicating that the form submission has been prevented.

By preventing the form from submitting, you can control the behavior and perform custom actions based on your requirements, such as displaying messages, performing validations, or executing other JavaScript logic.

  </div>
  </div>
</details>

---

### How would you attach an event handler to a form event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You attach an event handler to a form event by using the `addEventListener()` method, specifying the event type and callback function to handle the event. This function is called when the event occurs.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple code example of attaching an event handler to a form's submit event:

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form submitted!');
});
```

In this example, when the form with the ID 'myForm' is submitted, it will prevent the default form submission and log a message to the console.

  </div>
  </div>
</details>

---

### What does the 'reset' form event do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The reset event is fired when a form is reset, restoring all form controls to their initial values. This means that any changes that were made to the form's controls are lost, and the controls are returned to the state they were in when the form was first loaded.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Reset Form Event Example</title>
</head>
<body>
  <form id="myForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <input type="submit" value="Submit">
    <input type="reset" value="Reset">
  </form>

  <script>
    var form = document.getElementById("myForm");

    form.addEventListener("reset", function(event) {
      // Perform any additional logic or actions when the form is reset
      console.log("Form has been reset.");
    });
  </script>
</body>
</html>
```

In this example, we have an HTML form with an input field for the user's name, a submit button, and a reset button. The JavaScript code adds an event listener to the form's 'reset' event.

When the user clicks the reset button, the event listener callback function is executed. Inside the function, you can perform any additional logic or actions that should occur when the form is reset. In this example, we simply log a message to the console using `console.log()` to indicate that the form has been reset.

The 'reset' event is triggered when the user clicks the reset button or programmatically resets the form using JavaScript. It allows you to capture and handle the event, perform any necessary actions, and customize the behavior when the form is reset.

  </div>
  </div>
</details>

---

### Can we trigger form events programmatically?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, form events can be triggered programmatically in JavaScript using the `dispatchEvent()` method. It creates an event and dispatches it to the specified target.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a code example showing how to programmatically trigger a form event, specifically a 'submit' event:

```javascript
let event = new Event('submit');
let form = document.getElementById('myForm');
form.dispatchEvent(event);
```

In this example, a new 'submit' event is created and then dispatched to the form with the ID 'myForm'.

  </div>
  </div>
</details>

---

### What is event bubbling in the context of form events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Event bubbling in the context of form events refers to the phenomenon where an event triggers on an element and then bubbles up through its parent elements in the DOM hierarchy.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Event Bubbling Example</title>
</head>
<body>
  <form id="outerForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    var outerForm = document.getElementById("outerForm");

    outerForm.addEventListener("click", function(event) {
      console.log("Outer form clicked");
    });

    var innerForm = document.getElementById("name");

    innerForm.addEventListener("click", function(event) {
      event.stopPropagation();
      console.log("Inner form clicked");
    });
  </script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What's the difference between the 'change' and 'input' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'change' event triggers when an input field's value changes and loses focus, while the 'input' event fires immediately as the user types or alters the input field's value.
  </div>
  </div>
</details>

---

### How can you stop an event from bubbling up in a form?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To stop an event from bubbling up in a form, you can use the `event.stopPropagation()` method within the event handler function. It prevents the event from reaching parent elements.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Stop Event Bubbling Example</title>
</head>
<body>
  <form id="outerForm">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required><br><br>
    <input type="submit" value="Submit">
  </form>

  <script>
    var outerForm = document.getElementById("outerForm");

    // In this event listener we are handling the click event in the outerForm
    outerForm.addEventListener("click", function(event) {
      console.log("Outer form clicked");
    });

    var innerForm = document.getElementById("name");

    innerForm.addEventListener("click", function(event) {
      // Using event.stopPropagation(); to limit the click event to the inner form id name
      event.stopPropagation();
      console.log("Inner form clicked - Event propagation stopped");
    });
  </script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What happens when a 'select' event is triggered?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A "select" event is triggered when a user selects some text in a text field. This can be done by clicking and dragging the mouse over the text, or by using the keyboard to select the text. The "select" event can be used to perform a variety of actions, such as copying the selected text, pasting the selected text, or searching for the selected text.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Select Event Example</title>
</head>
<body>
  <select id="mySelect">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>

  <script>
    var selectElement = document.getElementById("mySelect");

    selectElement.addEventListener("change", function(event) {
      var selectedOption = event.target.value;
      console.log("Selected option: " + selectedOption);
    });
  </script>
</body>
</html>
```

In this example, we have an HTML select element with several options, and the JavaScript code adds an event listener to the 'change' event of the select element.

When the user selects an option from the dropdown menu, the 'change' event is triggered. The event listener callback function is executed, and the event object is passed as the parameter.

Inside the callback function, we can access the selected option through the event object using `event.target`. In this example, we retrieve the value of the selected option using `event.target.value` and assign it to the variable `selectedOption`.

Finally, we log a message to the console, indicating the selected option with the variable `selectedOption`.

When the 'select' event is triggered, it allows you to capture the user's selection from the dropdown menu and perform actions based on the selected option. You can retrieve the selected value, update the UI, make API calls, or trigger other behavior as needed.

  </div>
  </div>
</details>

---

### What is form validation in the context of form events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Form validation involves checking whether a form's input fields meet specific criteria, often during a 'submit' event, to ensure that submitted data is complete, correct, and secure.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a basic example of form validation on 'submit' event using JavaScript:

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
    let input = document.getElementById('myInput').value;
    if(input === '') {
        event.preventDefault();
        console.log('Input field cannot be empty!');
    }
});
```

In this example, the form's submit event is intercepted and checked if the input field with the ID 'myInput' is empty. If it is, the form submission is prevented, and a log is displayed in the console.

  </div>
  </div>
</details>

---

### Can we capture the data entered in a form field?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the data entered in a form field can be captured using JavaScript. You can access the field's value using the 'value' property of the form field element.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple code example showing how to capture the data entered in a form field:

```javascript
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let inputField = document.getElementById('myInput');
    let enteredData = inputField.value;
    console.log('Entered data: ', enteredData);
});
```

In this example, when the form is submitted, the default action is prevented, the value of the input field with the ID 'myInput' is accessed, and it's logged to the console.

  </div>
  </div>
</details>

---

### How does an event onchange function or work?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The "onchange" event triggers when the value of an input field is altered and then the element loses focus, allowing specific code to be executed in response.
    </div><br />
  <div><strong>Technical Response:</strong> The change event triggers when the element has finished changing. The behavior depends on the kind of element getting changed and how the user interacts with the element. The change event fires at a different moment. For text inputs, the event occurs when it loses focus.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong> text input<br /><br />

  <div></div>

```html
<input type="text" onchange="console.log(this.value)" />
<input type="button" value="Button" />
```

  </div><br />
  <div><strong className="codeExample">Code Example:</strong> For other elements the select, input type=checkbox/radio it triggers right after the selection changes.<br /><br />

  <div></div>

```html
<select onchange="console.log(this.value)">
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
  <div><strong>Interview Response:</strong> The "oninput" event triggers immediately when the value of an input field changes, allowing specific code to be executed in response.
    </div><br />
  <div><strong>Technical Response:</strong> The input event triggers whenever the user changes a value. It initiates any value change, even ones that do not require keyboard activities, such as copying with a mouse or using speech recognition to dictate the text. This event is the ideal solution if we want to handle every change to an &#8249;input&#8250;. In contrast, the input event does not trigger through a keyboard input or other activities that do not require a value change, such as hitting the right or left arrow keys when in the input.
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

---

:::note
After we update the value, the input event happens. As a result, we are unable to use event. It's too late to use preventDefault() there — the consequence would be null.
:::

  </div>
  </div>
</details>

---

### What class do the cut, copy, and paste events belong to?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Cut, copy, and paste events belong to the ClipboardEvent class in JavaScript, which handles interaction with the clipboard.
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
        console.log(event.type + ' - ' + event.clipboardData.getData('text/plain'));
        return false;
      };
</script>
```

---

:::note
It is possible to copy/paste everything, not just text. For example, we can copy and paste a file from the OS file manager. This behavior is because clipboardData implements the DataTransfer interface, which we often use for drag'n'drop and copy/paste.
:::

  </div>
  </div>
</details>

---

### Are there any user-related safety restrictions concerning the ClipboardAPI?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, for security and privacy reasons, clipboard access is often restricted to ensure user-initiated actions and requires explicit permission from the user.
    </div><br />
  <div><strong>Technical Response:</strong> Yes, the clipboard is a “global” OS-level application program interface. So, most browsers allow read/write access to the clipboard only in the scope of specific user actions for security, e.g., an onclick event handlers. Also, it is forbidden to generate “custom” clipboard events with dispatchEvent in all browsers except Firefox.
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
        console.log(event.type + ' - ' + event.clipboardData.getData('text/plain'));
        return false;
      };
</script>
```

  </div>
  </div>
</details>

---
