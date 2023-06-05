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
  </div>
</details>

---

### What are the three main types of keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The three main types are 'keydown', 'keypress', and 'keyup'.
  </div><br />
  </div>
</details>

---

### How does 'keydown' event differ from 'keyup'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'keydown' event is triggered when a key is pressed down, while 'keyup' is triggered when a key is released.
  </div><br />
  </div>
</details>

---

### What is the purpose of 'event.keyCode' in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.keyCode' is a property that returns the Unicode of the key that triggered the keyboard event. It should be noted that event.keyCode is <strong>deprecated</strong> and should no longer be used.
  </div><br />
  </div>
</details>

---

### How does the 'keypress' event differ from 'keydown' and 'keyup'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'keypress' event is triggered when a key is pressed and released, unlike 'keydown' and 'keyup' which trigger at different stages of a key press.
  </div><br />
  </div>
</details>

---

### Why has 'event.keyCode' been deprecated?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.keyCode' property has been deprecated in favor of 'event.key' because it's more readable and user-friendly.
  </div><br />
  </div>
</details>

---

### What is the purpose of 'event.preventDefault()' in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.preventDefault()' method stops the default action of an element from happening. For example, it can prevent a form from submitting.
  </div><br />
  </div>
</details>

---

### Can you capture a keyboard event on any HTML element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Not all, there are some limitations. Keyboard events are generally captured on elements that can gain focus like input, textarea, or any element with 'contentEditable' attribute.
  </div><br />
  </div>
</details>

---

### What is the use of 'event.repeat' property in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.repeat' is a property that returns true if a key is continuously pressed by the user.
  </div><br />
  </div>
</details>

---

### What are modifier keys in keyboard events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Modifier keys are special keys like Shift, Ctrl, Alt, and Meta that modify the primary key press.
  </div><br />
  </div>
</details>

---

### How can you check if a modifier key was pressed during a keyboard event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can use properties like 'event.shiftKey', 'event.ctrlKey', 'event.altKey', and 'event.metaKey' which return true if the respective key was pressed.
  </div><br />
  </div>
</details>

---

### What is the difference between 'event.which' and 'event.keyCode'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'event.which' and 'event.keyCode' are mostly interchangeable, but 'event.which' is not recommended as it's not standardized and <strong>deprecated</strong>.
  </div><br />
  </div>
</details>

---

### What is a 'hotkey'?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A hotkey, also known as a shortcut key, is a set of one or several keys that invoke a software or operating system operation.
  </div><br />
  </div>
</details>

---

### Can you stop a keyboard event from propagating?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, by using 'event.stopPropagation()', you can stop the event from bubbling up the DOM tree.
  </div><br />
  </div>
</details>

---

### What is the order of execution for 'keydown', 'keypress', and 'keyup' events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The order is 'keydown', 'keypress', and then 'keyup'.
  </div><br />
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
