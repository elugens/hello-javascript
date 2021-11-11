---
title: Keyboard Events
sidebar_position: 5
---

# Keyboard Events: Keydown and Keyup

**UI Events: Keyboard Events**

<head>
  <title>Keyboard Events- JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

### When should you use keyboard events during user interaction?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Keyboard events should be used when we want to handle keyboard actions (virtual keyboard also counts). For instance, to react on arrow keys Up and Down or hotkeys (including combinations of keys).
    </div>
  </div>
</details>

Source: <https://javascript.info/keyboard-events>

### What does the event.code and event.key properties do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key property of the event object allows us to get the character, while the code property of the event object allows us to get the “physical key code”. For instance, the same key Z can be pressed with or without Shift. That gives us two different characters: lowercase z and uppercase Z. The event.key is exactly the character, and it will be different. But event.code is the exactly the same for both.
    </div>
  </div>
</details>

| **Key** | **event.key** | **event.code** |
| :------ | :------------ | :------------- |
| Z       | z (lowercase) | KeyZ           |
| Shift+Z | Z (uppercase) | KeyZ           |

Source: <https://javascript.info/keyboard-events#event-code-and-event-key>

### When dealing with event codes for key actions, does the case matter?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, case matters and all event codes must use Pascal case to receive the appropriate return value, otherwise it will not work. Please evade mistypes: it is KeyZ, not keyZ. The check like event.code=="keyZ" won’t work: the first letter of "Key" must be uppercase.
    </div>
  </div>
</details>

Source: <https://javascript.info/keyboard-events#event-code-and-event-key>

### What happens when a key does not have a letter-based character?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> For instance, special keys like Shift or F1 or others. For those keys, event.key is approximately the same as event.code. Please note that event.code specifies exactly which key is pressed. For instance, most keyboards have two Shift keys: on the left and on the right side. The event.code tells us exactly which one was pressed, and event.key is responsible for the “meaning” of the key: what it is (a “Shift”).
    </div>
  </div>
</details>

Example:

| **Key**   | **event.key** | **event.code**          |
| :-------- | :------------ | :---------------------- |
| F1        | F1            | F1                      |
| Backspace | Backspace     | Backspace               |
| Shift     | Shift         | ShiftRight or ShiftLeft |

Source: <https://javascript.info/keyboard-events#event-code-and-event-key>

### What happens when a key is suppressed for more than a second?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If a key is being pressed for a long enough time, it starts to “auto-repeat”: the keydown triggers again and again, and then when it’s released, we finally get keyup. So, it is kind of normal to have many keydown and a single keyup. For events triggered by auto-repeat, the event object has event.repeat property set to true.
    </div>
  </div>
</details>

Source: <https://javascript.info/keyboard-events#auto-repeat>

### Can you prevent the default actions on OS-based special keys using the preventDefault method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, preventing the default action on keydown can cancel most of them except for OS-based special keys. For instance, on Windows Alt+F4 closes the current browser window. And there is no way to stop it by preventing the default action in JavaScript. Basically, any behavior outside of the scope of the browser like closing the browser window is not captured by the browser. It is considered an OS level event.
    </div>
  </div>
</details>

Source: <https://javascript.info/keyboard-events#default-actions>
