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

<head>
  <title>Keyboard Events - Keydown/Keyup | HelloJavaScript.info</title>
</head>

**UI Events: Keyboard Events**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

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
  <div><strong>Interview Response:</strong> The key property (event.key) of the event object allows us to extract the character, while the code property (event.code) of the event object allows us to extract the “physical key code”.<br/>For example, the same key Z can be suppressed with or without Shift. This behavior results in two distinct characters: lowercase z and uppercase Z.
    </div><br />

| **Key** | **event.key** | **event.code** |
| :------ | :------------ | :------------- |
| Z       | z (lowercase) | KeyZ           |
| Shift+Z | Z (uppercase) | KeyZ           |

  </div>
</details>

---

### Is it essential to consider case when dealing with event codes for key actions?

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
  <div><strong>Interview Response:</strong> Shift, F1, and other special keys. Event.key is roughly equivalent to event.code for such keys. Please keep in mind that event.code defines which key gets pushed. For example, most keyboards include two Shift keys: one on the left and one on the right. The event.code informs us which one was pushed, whereas the event.key determines the "meaning" of the key: what it is (a "Shift").
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
