---
title: HTML script Tag - JavaScript Interview
description: The Script tag is used to load JavaScript files. We can use the script tag to insert JS into HTML or import scripts from external sources. Interview Questions
sidebar_position: 1
sidebar_label: The "script" Tag
keywords:
  - script tag
  - javascript script tag
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
  - script tag
  - javascript script tag
  - interview answers
  - interview questions
---

<!-- Notes: Passed Rich Snippets validation. -->

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TheScriptTagSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>HTML Script Tag | JavaScript Frontend Phone Interview Answers</title>
</head>

**JavaScript Fundamentals: The "script" Tag**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/flmYa-zwJQ8"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### What is the “script” tag used for in JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The "script" tag in HTML is used to include JavaScript code within an HTML document, allowing it to interact with and modify the content of the page.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```javascript
<script src="/path/to/script.js"></script>
// External URL:
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"></script>
```

  </div>
  </div>
</details>

---

### What is the script tag in HTML?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The script tag is an HTML element used to include JavaScript code in a web page. It can be used to define inline JavaScript or to reference external JavaScript files.
    </div>
    <br />
  </div>
</details>

---

### What is the difference between inline and external JavaScript?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Inline JavaScript is defined directly within an HTML document using the script tag, while external JavaScript is contained in a separate file that is referenced using the script tag. External JavaScript is generally preferred as it can be cached by the browser and reused across multiple pages.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
  <!-- inline script tag -->
 <script>
  function myFunction() {
   alert("Hello, JavaScript!");
  }
 </script>
</head>
<body>
 <button onclick="myFunction()">Click me</button>
  <!-- external script tag -->
  <script src="https://cdnjs.cloudflare.com/hello.js"></script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### How do you include an external JavaScript file in an HTML document?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can include an external JavaScript file in an HTML document by adding a script tag with a src="" attribute pointing to the URL of the JavaScript file.
    </div>
    <br />
  </div>
</details>

---

### Where should you include the script tag in an HTML document?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The script tag can be included in the head or body section of an HTML document. It is generally recommended to include script tags at the end of the body section to avoid blocking the rendering of the page.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
  <!-- inline script tag -->
 <script>
  function myFunction() {
   alert("Hello, JavaScript!");
  }
 </script>
</head>
<body>
 <button onclick="myFunction()">Click me</button>
  <!-- external script tag -->
  <script src="https://cdnjs.cloudflare.com/hello.js"></script>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What is the defer attribute on a script tag?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The defer attribute on a script tag indicates that the script should be executed after the page has finished parsing. This can improve page loading performance, especially for scripts that are not critical to the initial rendering of the page.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
 <script defer src="hello-javascript.js"></script>
</head>
<body>
 <h1>Welcome to my page</h1>
 <p>This is a paragraph.</p>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What is the async attribute in a script tag?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The async attribute on a script tag indicates that the script should be executed asynchronously, meaning that it will not block the rendering of the page. This can improve page loading performance but may cause issues if the script relies on other scripts or the DOM is fully loaded.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
 <script async src="myscript.js"></script>
</head>
<body>
 <h1>Welcome to my page</h1>
 <p>This is a paragraph.</p>
</body>
</html>
```

  </div>
  </div>
</details>

---

### How can you test if a script has loaded successfully?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can test if a script has loaded successfully by checking if a global variable or function defined in the script is available. Alternatively, you can use the onload event of the script tag to execute a callback function when the script has finished loading.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
 <script src="hello-javascript.js"></script>
 <script>
  function myFunction() {
   if (typeof myGlobalVariable !== 'undefined') {
    console.log("Script loaded successfully!");
   } else {
    console.log("Script failed to load.");
   }
  }
 </script>
</head>
<body>
 <h1>Welcome to my page</h1>
 <p>This is a paragraph.</p>
 <button onclick="myFunction()">Test script</button>
</body>
</html>
```

  </div>
  </div>
</details>

---

### How can you prevent the browser from caching a JavaScript file?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> You can prevent the browser from caching a JavaScript file by appending a unique query string to the URL of the file, such as a timestamp or random string. This method can be useful during development when changes are frequently made to the script and you want to ensure that the latest version is always downloaded by the browser.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
 <script src="hellojs.js?v=1"></script>
</head>
<body>
 <h1>Welcome to my page</h1>
 <p>This is a paragraph.</p>
</body>
</html>
```

  </div>
  </div>
</details>

---

### What is a script loader?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> A script loader is a JavaScript library or framework that provides advanced functionality for loading and managing JavaScript files, such as lazy loading, dependency management, and error handling. Some popular examples include RequireJS, SystemJS, and WebPack.
    </div>
    <div>
    <br />
    <strong class="codeExample">Code Example:</strong><br /><br />
    <div></div>

```html
<!DOCTYPE html>
<html>
<head>
 <title>My Page</title>
</head>
<body>
 <h1>Welcome to my page</h1>
 <p>This is a paragraph.</p>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
 <script>
  require(['myscript'], function(myscript) {
   myscript.myFunction();
  });
 </script>
</body>
</html>
```

<div>In this example, the script loader "Require JS" is used to load the "myscript.js" file. The Require JS library is included in the script tag, and then the "require" function is used to load the script. The second argument of the require function is a callback function that is executed when the script is loaded successfully. The callback function then calls a function called "myFunction" which is defined in the loaded script.</div>
<div><br/>
Using a script loader can provide several benefits, such as improved performance by loading scripts asynchronously, better organization and dependency management of scripts, and easier maintenance and debugging of code. </div>
  </div>
  </div>
</details>

---
