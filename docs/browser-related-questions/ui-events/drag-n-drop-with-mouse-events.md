---
title: Drag'n'Drop with mouse events
description: Moving the Mouse in JavaScript is a technique that allows you to move the mouse pointer. This is useful for interacting with the mouse. - JavaScript Interview Questions & Answers
sidebar_position: 3
sidebar_label: Drag'n'Drop
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/DragDropSchemaData.js';

<JsonLD data={StructuredData} />

**UI Events: Drag'n'Drop with mouse events**

<CloseAllAnswers />

---

### What is the Drag and Drop API in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Drag and Drop API allows developers to make HTML elements draggable and droppable, enabling user interactions like dragging and dropping items.
  </div>
  </div>
</details>

---

### Can you name the primary drag and drop events in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The primary events are "drag", "dragstart", "dragend", "dragenter", "dragleave", "dragover", and "drop".
  </div>
  </div>
</details>

---

### What is the role of the 'dragstart' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragstart' event fires when the user starts dragging an element or text selection.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop Example</title>
  <style>
    .drag-element {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      border: 1px solid black;
      cursor: move;
    }
  </style>
</head>
<body>
  <div id="dragElement" class="drag-element" draggable="true">Drag me!</div>

  <script>
    var dragElement = document.getElementById('dragElement');

    dragElement.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
      // Additional code for dragstart event
    });
  </script>
</body>
</html>

```

  </div>
  </div>
</details>

---

### What does the 'dragend' event signify?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragend' event fires when a drag operation is finished, regardless of its success.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop Example</title>
  <style>
    .drag-element {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      border: 1px solid black;
      cursor: move;
    }
  </style>
</head>
<body>
  <div id="dragElement" class="drag-element" draggable="true">Drag me!</div>

  <script>
    var dragElement = document.getElementById('dragElement');

    dragElement.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
      // Additional code for dragstart event
    });

    dragElement.addEventListener('dragend', function(event) {
      console.log("Drag operation ended!");
      // Additional code for dragend event
    });
  </script>
</body>
</html>

```

  </div>
  </div>
</details>

---

### How is the 'dragover' event used in drag and drop events?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragover' event is used to specify the behavior when a draggable element is being dragged over a valid drop target. It allows you to control the visual feedback and handle the potential drop operation.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop Example</title>
  <style>
    .drop-target {
      width: 200px;
      height: 200px;
      background-color: lightgray;
    }
  </style>
</head>
<body>
  <div id="dropTarget" class="drop-target">Drop here</div>
  
  <div id="dragElement" draggable="true">Drag me!</div>

  <script>
    var dropTarget = document.getElementById('dropTarget');
    var dragElement = document.getElementById('dragElement');

    dropTarget.addEventListener('dragover', function(event) {
      event.preventDefault();
      // Additional code for dragover event
    });
  </script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### When a drag occurs, which event fires when the mouse moves over an element?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragover' event fires when a draggable element or selection is being dragged over a potential drop target.
    </div><br/>
  <div><strong>Technical Response:</strong> The 'dragover' event is triggered as the mouse moves over an element when a drag occurs. The operation during an event is frequently the same as the dragenter event. The dragenter event occurs when a draggable element enters a drop target. A dragleave event occurs when the valid drop target is left. Dragstart gets dispatched whenever a user begins to drag an element.
    </div>
  </div>
</details>

---

### What is the role of the 'dragenter' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragenter' event fires when a dragged element enters a valid drop target.
  </div>
  </div>
</details>

---

### What is the 'dragleave' event used for?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragleave' event is used to detect when a dragged element leaves a valid drop target area during a drag and drop operation, allowing you to customize the behavior or visual feedback when the element exits the target area.
  </div>
  </div>
</details>

---

### Why do we need to prevent default behavior in 'dragover' event?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We need to prevent the default behavior in the 'dragover' event to allow the drop target to accept the dragged element and define custom behavior instead of the default behavior defined by the browser.
  </div><br />
  </div>
</details>

---

### How do you make content inside the browser draggable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> HTML5 includes a drag-and-drop feature. To make content inside the browser draggable, you can set the "draggable" attribute of the element to "true" using JavaScript or HTML.
    </div><br />
  <div><strong className="codeExample">HTML Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Draggable Element</title>
  </head>
  <body>
    <button draggable="true">Draggable Button</button>
    <button>Normal Button</button>
  </body>
</html>

```

  </div>
  </div>
</details>

---

### What occurs when a drag action on an element begins?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> When a drag action on an element begins, the "dragstart" event is triggered, allowing you to specify the data to be transferred and set up any necessary visual feedback or customization for the drag operation.
  </div>
  <div><strong>Technical Response:</strong> There are three factors to remember when a drag event begins: <em>the main points.</em><br/><br/>
  <ul>
  <li><strong>Drag Data:</strong> The data type gets sent while dragging occurs.</li>
  <li><strong>Drag Feedback:</strong> This image shows alongside the mouse pointer during a drag action.</li>
  <li><strong>Drag Effect:</strong> This describes the drag that occurs on an element. There are three categories, which are listed below.</li>
  <li><strong>Copy:</strong> The data dragged gets copied from its current position to the drop destination if this effect is enabled.</li>
  <li><strong>Move:</strong> This effect indicates that the dragged data is relocating from its original location to the drop destination.</li>
  <li><strong>Link:</strong> This effect suggests that a link or relationship between the source and drop sites gets established.</li>
  </ul>
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

When a drag action begins on an element, the 'dragstart' event is fired. This event triggers a callback function that you can define to perform specific actions. Here's a basic example of how you can bind a 'dragstart' event to an element:

```javascript
var element = document.getElementById('draggableElement');

element.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', event.target.id);
    console.log('Drag action started.');
});
```

In this example, an element with the id 'draggableElement' is selected. Then, an event listener is added for the 'dragstart' event. When a user starts dragging this element, the callback function sets the data type and value of the dragged data (in this case, the id of the dragged element) and logs a message to the console.

  </div>
  </div>
</details>

---

### Can you list a few JavaScript drag-and-drop events associated with a callback method?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript drag-and-drop events associated with a callback method include dragstart, dragenter, dragover, drop, and dragend.
  </div>
  <div><strong>Technical Response:</strong> Seven possible drag and drop events can be programmatically associated with a callback method. They include drag, dragstart, dragenter, dragover, dragleave, drop, and dragend.<br/><br/>
  <ul>
  <li><strong>drag:</strong> The drag event triggers every hundred milliseconds as a user drags an object or text selection.</li>
  <li><strong>dragstart:</strong> When a drag starts, it fires on an element.</li>
  <li><strong>dragenter:</strong> this event is triggered when the mouse enters an element while dragging.</li>
  <li><strong>dragover:</strong> When a drag occurs, this event is triggered when the mouse moves over an element.</li>
  <li><strong>dragleave:</strong> This event is triggered when the mouse departs an element while it gets dragged.</li>
  <li><strong>drop:</strong> After the drag operation, the drop event fires on the element where the drop occurred.</li>
  <li><strong>dragend:</strong> When the drag operation finishes, whether it was successful, the drag source receives the dragend event.</li>
  </ul>
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
var draggableElement = document.getElementById('draggableElement');
var droppableElement = document.getElementById('droppableElement');

draggableElement.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', event.target.id);
});

droppableElement.addEventListener('dragover', function(event) {
    event.preventDefault(); // Necessary to allow drop.
});

droppableElement.addEventListener('drop', function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
});
```

  </div>
  </div>
</details>

---

### How can the drag operation data be transferred?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The drag operation data can be transferred using the 'dataTransfer' object, which is accessible within drag events. You can use its methods like 'setData' and 'getData' to set and retrieve the data associated with the dragged element.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
<head>
  <title>Drag and Drop Example</title>
  <style>
    .drag-element {
      width: 100px;
      height: 100px;
      background-color: lightblue;
      border: 1px solid black;
      cursor: move;
    }
  </style>
</head>
<body>
  <div id="dragElement" class="drag-element" draggable="true">Drag me!</div>
  <div id="dropTarget">Drop here</div>

  <script>
    var dragElement = document.getElementById('dragElement');
    var dropTarget = document.getElementById('dropTarget');

    dragElement.addEventListener('dragstart', function(event) {
      event.dataTransfer.setData('text/plain', event.target.id);
      console.log('dragging')
    });

    dropTarget.addEventListener('dragover', function(event) {
      event.preventDefault();
      console.log('dragging over')
    });

    dropTarget.addEventListener('drop', function(event) {
      event.preventDefault();
      var draggedId = event.dataTransfer.getData('text/plain');
      var draggedElement = document.getElementById(draggedId);
      console.log('dropped')
    });
  </script>
</body>
</html>
```

**Output:**

```html
"dragging over"
"dragging over"
"dragging over"
"dragging over"
"dragging over"
"dragging over"
"dropped"
```

  </div>
  </div>
</details>

---

### What exactly is the dataTransfer property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The dataTransfer property is a property of the drag and drop events in JavaScript that allows you to access and manipulate the data being transferred during a drag and drop operation. The dataTransfer property holds data about the user interaction, like the type and value of data being dragged during a drag and drop operation. The dragstart event sets dataTransfer, which is read/handled in the drop event.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Drag and Drop Example</title>
    <style>
      #drag-source {
        width: 100px;
        height: 100px;
        background-color: yellow;
      }

      #drop-target {
        width: 200px;
        height: 200px;
        background-color: lightblue;
      }
    </style>
    <script>
      function handleDragStart(event) {
        // Set the data to be transferred
        event.dataTransfer.setData("text/plain", "Hello, world!");
      }

      function handleDragOver(event) {
        event.preventDefault();
      }

      function handleDrop(event) {
        event.preventDefault();
        // Get the transferred data
        var data = event.dataTransfer.getData("text/plain");
        console.log("Received data: " + data);
      }
    </script>
  </head>
  <body>
    <div id="drag-source" draggable="true" ondragstart="handleDragStart(event)"></div>
    <div id="drop-target" ondragover="handleDragOver(event)" ondrop="handleDrop(event)"></div>
  </body>
</html>
```

  </div>
  </div>
</details>

---

### What is the setData method in the DataTransfer object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `setData` method in the DataTransfer object is used in HTML drag-and-drop operations to set the data type and value of the dragged data. It takes two arguments: the data type and data value.
    </div>
  </div>
</details>

---

### What is the purpose of the getData method in the DataTransfer object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `getData` method in the DataTransfer object retrieves the data of a specified type that was set during a drag-and-drop operation, assisting in data transfer between elements.
    </div>
  </div>
</details>

---

### What is the purpose of the 'dropEffect' property in the DataTransfer object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dropEffect' property in the DataTransfer object controls the feedback (cursor/visual cue) shown to the user during a drag-and-drop operation.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let dragSrcElement = null;

function handleDragStart(e) {
    dragSrcElement = this;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move'; // Sets the dropEffect to 'move'
    return false;
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcElement != this) {
        dragSrcElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

let cols = document.querySelectorAll('.column');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('drop', handleDrop, false);
});
```

In this example, 'dropEffect' is set to 'move', meaning the data/item will be moved (not copied or linked) from the source location to the drop location.

  </div>
  </div>
</details>

---

### What does the 'effectAllowed' property in the DataTransfer object do?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'effectAllowed' property in the DataTransfer object is used to specify what operations (move, copy, link, etc.) are permitted in a drag-and-drop operation.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
let dragSrcElement = null;

function handleDragStart(e) {
    dragSrcElement = this;

    // This element will only allow a 'move' operation.
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }

    if (dragSrcElement != this) {
        dragSrcElement.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

let cols = document.querySelectorAll('.column');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('drop', handleDrop, false);
});
```

In this code, 'effectAllowed' is set to 'move' in the 'handleDragStart' function, meaning the data/item will only be allowed to be moved (not copied or linked) from the source location to the drop location.

  </div>
  </div>
</details>

---

### How do you cancel a drag operation?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can cancel a drag operation by calling the `preventDefault` method of the event object during the 'dragstart' or 'drag' events.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function handleDragStart(e) {
    // Some condition to decide if we want to allow dragging
    if (someCondition) {
        e.preventDefault(); // Cancel the drag operation
    } else {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }
}

let cols = document.querySelectorAll('.column');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
});
```

In this example, if the condition in the `handleDragStart` function is true, the `preventDefault` method is called, cancelling the drag operation.

  </div>
  </div>
</details>

---

### What does the 'dragexit' event signify?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The 'dragexit' event is fired when a drag operation is being terminated in some way, such as by releasing the mouse button or hitting the escape key.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function handleDragStart(e) {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragExit(e) {
    // Add some visual cue to signify drag exit
    this.classList.remove('over');
}

let cols = document.querySelectorAll('.column');
[].forEach.call(cols, function(col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragexit', handleDragExit, false);
});
```

In this example, when the 'dragexit' event is triggered, the 'over' class is removed from the element being dragged, changing its appearance to signify that the drag operation has been exited.

  </div>
  </div>
</details>

---

### How can you change the drag image that appears during drag and drop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can change the drag image by calling the `setDragImage` method of the DataTransfer object during the 'dragstart' event.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
function handleDragStart(e) {
    let dragIcon = document.createElement('img');
    dragIcon.src = 'path/to/image.png';
    dragIcon.width = 100;

    // set the drag image
    e.dataTransfer.setDragImage(dragIcon, -10, -10);
}

let draggableElement = document.getElementById('draggable');
draggableElement.addEventListener('dragstart', handleDragStart, false);
```

In this example, an image element is created and its source is set to 'path/to/image.png'. Then, the `setDragImage` method is called with this image, and an offset of -10,-10. This image will be shown instead of the default drag image.

  </div>
  </div>
</details>

---

### What are some uses of drag and drop in web development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Drag and drop is used in web development for user-friendly interfaces, enabling actions like file uploads, reordering lists, moving objects in games, or rearranging layout components in a visual editor.
    </div>
  </div>
</details>

---

### Can you provide an example of a non-visual use of drag and drop?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A non-visual use of drag and drop could be for accessibility purposes, allowing users to navigate and manipulate a page using keyboard controls instead of a mouse.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

The following example demonstrates how a non-visual, keyboard-based drag and drop could be implemented. This is a simplified example, and real-world usage might require additional handling for better accessibility.

```javascript
document.addEventListener('keydown', function(event) {
  const key = event.key;
  
  // Assume that we have a list of draggable items.
  let draggableItems = document.querySelectorAll('.draggable');
  
  // We also have a focused item (this should be managed by your own logic).
  let focusedItem = document.querySelector('.focused');

  // Move the focused item up or down in the list based on the arrow key pressed.
  if (key === 'ArrowUp') {
    let previousItem = focusedItem.previousElementSibling;

    if (previousItem) {
      focusedItem.parentElement.insertBefore(focusedItem, previousItem);
    }
  } else if (key === 'ArrowDown') {
    let nextItem = focusedItem.nextElementSibling;

    if (nextItem) {
      focusedItem.parentElement.insertBefore(nextItem, focusedItem);
    }
  }
});
```

In this example, the 'ArrowUp' and 'ArrowDown' keys are used to move a focused item up or down within a list. Note that this example relies on the existence of 'draggable' and 'focused' classes, which would be used to identify draggable items and the currently focused item, respectively. Your own implementation would need to manage these aspects.

  </div>
  </div>
</details>

---
