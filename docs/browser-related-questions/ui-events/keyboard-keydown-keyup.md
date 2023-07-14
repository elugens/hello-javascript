---
title: Keyboard Events - Keydown/Keyup
description: Keyboard Events in JavaScript are events that occur when a user interacts with a keyboard. They are triggered by the user's keyboard. - JavaScript Interview Questions & Answers
sidebar_position: 5
sidebar_label: Keyboard Events
keywords:
  - keyboard events
  - keydown event
  - keyup event
  - functions
  - javascript
  - interview
  - questions
  - answers
  - response
  - technical
  - function
  - object
  - interview questions
  - interview answers
  - js
tags:
  - keyboard events
  - keydown event
  - keyup event
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/KeyboardEventSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Keyboard Events - Keydown/Keyup | HelloJavaScript.info</title>
</head>

**UI Events: Keyboard Events**

<CloseAllAnswers />

---

### What is a keyboard event in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A keyboard event is triggered when a user interacts with the keyboard, such as pressing, holding, or releasing a key.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.addEventListener('keydown', function(event) {
  console.log(event.keyCode);
});
```

  </div>
  </div>
</details>

---

### What are the three main types of keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three main types are 'keydown', 'keypress', and 'keyup'.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// keydown event
document.addEventListener('keydown', function(event) {
  // Get the key that was pressed
  var key = event.keyCode;

  // Do something with the key
  if (key == 65) {
    // The A key was pressed
  }
});

// keypress event
document.addEventListener('keypress', function(event) {
  // Get the key that was pressed
  var key = event.keyCode;
  var character = event.key;

  // Do something with the key
  if (character == 'a') {
    // The letter a was pressed
  }
});

// keyup event
document.addEventListener('keyup', function(event) {
  // Get the key that was released
  var key = event.keyCode;

  // Do something with the key
  if (key == 65) {
    // The A key was released
  }
}); 
```

These are just a few examples of how to use keydown , keypress , and keyup events in JavaScript. There are many other things that you can do with these events, so be creative and experiment!

  </div>
  </div>
</details>

---

### How does 'keydown' event differ from 'keyup'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'keydown' event is triggered when a key is pressed down, while 'keyup' is triggered when a key is released.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.onkeydown = function(event) {
    console.log('Key pressed:', event.key);
}

document.onkeyup = function(event) {
    console.log('Key released:', event.key);
}
```

  </div>
  </div>
</details>

---

### What is the purpose of 'event.keyCode' in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.keyCode' is a property that returns the Unicode number of the key that triggered the keyboard event.
  </div><br />

---

:::warning Deprecated
It should be noted that event.keyCode is **deprecated** and should no longer be used, but you may come across in older code.
:::

  </div>
</details>

---

### How does the 'keypress' event differ from 'keydown' and 'keyup'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'keypress' event is fired when an actual character is being inserted. In contrast, 'keydown' and 'keyup' are fired when any key is pressed or released, including non-printable keys like Shift or Ctrl.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.onkeydown = function(event) {
    console.log('Key down:', event.key);
}

document.onkeypress = function(event) {
    console.log('Key press:', event.key);
}

document.onkeyup = function(event) {
    console.log('Key up:', event.key);
}
```

  </div>
  </div>
</details>

---

### Why has 'event.keyCode' been deprecated?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.keyCode' property has been deprecated due to inconsistencies across different keyboard layouts and locales. The 'event.key' and 'event.code' properties offer more reliable alternatives.
  </div>
  </div>
</details>

---

### What is the purpose of 'event.preventDefault()' in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.preventDefault()' method stops the default action of an element from happening. For example, it can prevent a form from submitting.
  </div>
  </div>
</details>

---

### Can you capture a keyboard event on any HTML element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Not all, there are some limitations. Keyboard events are generally captured on elements that can gain focus like input, textarea, or any element with 'contentEditable' attribute.
  </div><br />
  <div><strong>Technical Details:</strong> Most keyboard events are generally targeted at the element that has focus. But for elements that don't usually get focus, like a div or span, you can make them focusable by adding the tabindex attribute. However, you can also set a global event listener on the window or document object, which will capture keyboard events regardless of the focused element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Global event listener on the document
document.onkeydown = function(event) {
    console.log('Key down:', event.key);
}

// Making a <div> focusable and capturing an event
let div = document.getElementById('myDiv');
div.setAttribute('tabindex', '0');
div.onkeydown = function(event) {
    console.log('Key down in div:', event.key);
}
```

  </div>
  </div>
</details>

---

### What is the use of 'event.repeat' property in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `event.repeat` property in keyboard events is a boolean that is `true` if the key is being held down long enough to auto-repeat, and `false` otherwise.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.onkeydown = function(event) {
    if (event.repeat) {
        console.log('Key down (repeating):', event.key);
    } else {
        console.log('Key down:', event.key);
    }
}
```

In this example, when a key is held down and starts repeating, the 'keydown' event logs a message indicating that the key is repeating. If the key is just pressed once and not held down, it logs a normal 'Key down' message.

  </div>
  </div>
</details>

---

### What are modifier keys in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modifier keys in keyboard events refer to keys like Shift, Ctrl, Alt, and the Command key, which modify the behavior of other keys when they are pressed in combination with them.
  </div>
  </div>
</details>

---

### How can you check if a modifier key was pressed during a keyboard event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can check if a modifier key was pressed during a keyboard event by examining the properties of the event object, such as `event.shiftKey`, `event.ctrlKey`, `event.altKey`, and `event.metaKey`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.onkeydown = function(event) {
    if (event.shiftKey) {
        console.log('Shift key was pressed');
    }

    if (event.ctrlKey) {
        console.log('Ctrl key was pressed');
    }

    if (event.altKey) {
        console.log('Alt key was pressed');
    }

    if (event.metaKey) {
        console.log('Meta key (e.g., Command key on macOS) was pressed');
    }
}
```

In this example, the event object's properties are checked to determine if the Shift, Ctrl, Alt, or Meta (Command) key was pressed during the 'keydown' event. The corresponding message is logged to the console accordingly.

  </div>
  </div>
</details>

---

### What is a 'hotkey'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A 'hotkey' refers to a combination of keystrokes that triggers a specific action or functionality in an application. This can be reproduced using JavaScript events.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.onkeydown = function(event) {
    if (event.ctrlKey && event.key === 's') {
        event.preventDefault(); // Prevent the default browser save action
        console.log('Save action triggered');
    }

    if (event.altKey && event.key === 'F4') {
        event.preventDefault(); // Prevent the default browser close action
        console.log('Application close action triggered');
    }
}
```

In this example, if the user presses Ctrl+S, the 'Save action triggered' message is logged to the console. Similarly, if the user presses Alt+F4, the 'Application close action triggered' message is logged. The `event.ctrlKey` and `event.altKey` properties are used to check if the respective modifier keys are pressed, and `event.key` is used to check the specific key that was pressed.

  </div>
  </div>
</details>

---

### Can you stop a keyboard event from propagating?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can stop a keyboard event from propagating (bubbling up the DOM tree) by calling `event.stopPropagation()` or prevent its default behavior using `event.preventDefault()`.
  </div>
  </div>
</details>

---

### What is the order of execution for 'keydown', 'keypress', and 'keyup' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The order of execution for keyboard events is  'keydown', 'keypress', and then 'keyup' events.
  </div>
  </div>
</details>

---

### When should you use keyboard events during user interaction?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When we wish to manage keyboard operations, we should utilize keyboard events (virtual keyboard also counts). For example, when there is a response to arrow keys Up and Down or hotkeys (including combinations of keys).
    </div>
  </div>
</details>

---

### What do the event.code and event.key properties do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.key' property returns the value of the key pressed, while 'event.code' gives the physical key's code, regardless of the keyboard layout or language.
    </div><br />
  <div><strong>Technical Response:</strong> The key property (event.key) of the event object allows us to extract the character, while the code property (event.code) of the event object allows us to extract the “physical key code”.<br/>For example, the same key Z can be suppressed with or without Shift. This behavior results in two distinct characters: lowercase z and uppercase Z.
    </div><br />

| **Key** | **event.key** | **event.code** |
| :------ | :------------ | :------------- |
| Z       | z (lowercase) | KeyZ           |
| Shift+Z | Z (uppercase) | KeyZ           |

  </div>
</details>

---

### Is case sensitivity and the correct formatting crucial when dealing with 'event.code' in JavaScript? If so, how should it be formatted?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the case is critical, and all event codes must utilize the Pascal case to obtain the correct return value; otherwise, they fail. Please avoid misspellings: it is KeyZ, not keyZ. The check-like event.code=="keyZ" won't function since the initial letter of "Key" needs capitalization.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
document.onkeydown = function(event) {
    if (event.code === 'KeyA') {
        console.log('Key A pressed');
    }
}
```

In this example, the `event.code` is compared to the string `'KeyA'`, using uppercase letters as specified by the standard format. This ensures accurate detection of the specific key.

  </div>
  </div>
</details>

---

### What happens when a key does not have a letter-based character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For keys without letter-based characters, 'event.code' provides a descriptive string like 'Space', 'Enter', or 'ArrowRight', representing the physical key pressed.
    </div><br />
  <div><strong>Technical Response:</strong> Shift, F1, and other special keys. Event.key is roughly equivalent to event.code for such keys. Please keep in mind that event.code defines which key gets pushed. For example, most keyboards include two Shift keys: one on the left and one on the right. The event.code informs us which one was pushed, whereas the event.key determines the "meaning" of the key: what it is (a "Shift").
    </div><br />

Example:

| **Key**   | **event.key** | **event.code**          |
| :-------- | :------------ | :---------------------- |
| F1        | F1            | F1                      |
| Backspace | Backspace     | Backspace               |
| Shift     | Shift         | ShiftRight or ShiftLeft |

  </div>
</details>

---

### What happens when we suppress a key for more than a second?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If we suppress a key over an extended period of time, it begins to "auto-repeat": the keydown triggers repeatedly, and when the key is released, we eventually receive keyup. As a result, having numerous keydowns and a single keyup is rather usual. The event object's event.repeat attribute equates to true for events triggered by auto-repeat.
    </div>
  </div>
</details>

---

### Can you prevent the default actions on OS-based special keys using the preventDefault method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, except for OS-based special keys, preventing the default action on keydown cancels most of them. On Windows, for example, Alt+F4 dismisses the current browser window. And there is no way to halt it by disabling JavaScript's default action. Any activity outside of the browser's scope, such as shutting the browser window, is not captured by the browser, classifying it as an OS-level event.
    </div>
  </div>
</details>

---
