---
title: Window Interaction
sidebar_position: 6
---

# Browser Window Interaction - Q&A

## JavaScript Fundamentals: Interaction: alert, prompt, confirm

**Question:** **What is the JavaScript alert window commonly called in the JavaScript community?**

**Interview Answer:** Modal Window

Source: <https://javascript.info/alert-prompt-confirm#alert>

**Question:** **How does the alert function work?**

**Interview Answer:** It shows a message and waits for the user to press “OK” and returns a string as a value.

Source: <https://javascript.info/alert-prompt-confirm#alert>

**Question:** **What data type does the alert window method return?**

**Interview Answer:** Alert returns a string.

**Technical Answer:** Alert returns a string or an object that is converted into a string and displayed.

Source: <https://javascript.info/alert-prompt-confirm#alert>

**Question:** **How does the prompt function work, in simple terms?**

**Interview Answer:** It shows a window with text and a request for input, then returns a string.

**Technical Answer:** It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel. The return value of the prompt function is a string value. This should be considered when it is used with numbers.

Source: <https://javascript.info/alert-prompt-confirm#prompt>

**Question:** **How many arguments does the prompt function accept?**

**Interview Answer:** Prompt accepts two arguments the title and a default value. The default value is not required and acts as the initial value for the input field.

Code Example

```js
// the brackets denote that the parameter is not required 

result = prompt(title, [default]);
```

Source: <https://javascript.info/alert-prompt-confirm#prompt>

**Question:** **What does the prompt return when the prompt is escaped or canceled?**

**Interview Answer:** It returns a null value.

Source: <https://javascript.info/alert-prompt-confirm#prompt>

**Question:** **Why is important to provide a second argument (default) for the prompt function?**

**Interview Answer:** To ensure that the browser (internet explorer) does not return undefined.

**Technical Answer:** There is a chance that the user is using a browser such as Internet Explorer that will return undefined if there is no default. This could have ramifications that could affect the application adversely.

Source: <https://javascript.info/alert-prompt-confirm#prompt>

**Question:** **How does the confirm function work?**

**Interview Answer:** Confirm produces a window with a Boolean question of OK and Cancel. Ok returns true and Cancel returns false.

**Technical Answer:** The function confirm shows a modal window with a question and two buttons: OK and Cancel. The result is true if OK is pressed and false otherwise.

Example:

```js
let isBoss = confirm('Are you the boss?');

alert(isBoss); // true if OK is pressed and false otherwise
```

Source: <https://javascript.info/alert-prompt-confirm#confirm>

**Question:** **What object model do the alert, prompt, and confirm functions belong to?**

**Interview Answer:** The alert, prompt, and confirm methods belong to the BOM.

**Technical Answer:** The alert, prompt, and confirm methods belong to the Browser Object Model. It is commonly referred to as the BOM.

Source: <https://javascript.info/alert-prompt-confirm>

**Question:** **What are two limitations shared by the alert, prompt, and confirm methods?**

**Interview Answer:** We have no control over position and look of the modal window.

**Technical Answer:**

1. The exact location of the modal window is determined by the browser. Usually, it is in the center.
1. The exact look of the window also depends on the browser. We cannot modify it…

Source: <https://javascript.info/alert-prompt-confirm>
