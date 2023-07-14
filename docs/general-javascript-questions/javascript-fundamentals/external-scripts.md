---
title: External Scripts - JavaScript Interview
description: Learn how to use External Scripts in JavaScript. How do you access external script files in JavaScript development? | Frontend Developer Interview Questions
sidebar_position: 3
sidebar_label: External Scripts
keywords:
  - external scripts
  - external script
  - external files
  - javascript
  - interview
  - questions
  - answers
  - frontend
  - response
  - technical
  - files
  - external
  - interview questions
  - interview answers
  - js
tags:
  - function object
  - functions
  - interview answers
  - interview questions
---

<!-- Notes: Passed Rich Snippets validation. -->

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ExternalScriptsSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>External Scripts | JS Frontend Phone Interview Questions</title>
</head>

**JavaScript Fundamentals: EXTERNAL SCRIPTS**

---

<div class='videoWrapper'>
<iframe
    width="640"
    height="480"
    src="https://www.youtube.com/embed/ise5kH41cT8"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
>
</iframe>
</div>

---

<CloseAllAnswers />

### What is an external script in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An external script is a JavaScript file that is separate from the HTML file that it is used in. It is linked to the HTML file using the &#60;script&#62; tag and is usually saved with a .js file extension.
  </div>
  </div>
</details>

---

### How do you access external script files in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To access external script files in JavaScript development, you can use the HTML &#60;script&#62; tag with the "src" attribute set to the file path of the external script.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />
  
  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <script src="myscript.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

  </div>
  </div>
</details>

---

### How do you access external script links in JavaScript development?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can access external scripts by using the script-src attribute. Both secure and non-secure domains are permissible.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <script src="https://example.com/myscript.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

  </div>
  </div>
</details>

---

### What is the rule for putting scripts into HTML?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As a rule, only the most straightforward scripts go into HTML pages. Complex scripts reside in separate files. The general rule for putting scripts into HTML is to include them in the &#60;body&#62; or &#60;head&#62; section using the &#60;script&#62; tag.</div><br/>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <script>
        function myFunction() {
         console.log("I'm Simple");
        }
    </script>
  </head>
  <body>
    <h1>Hello World!</h1>
    <script src="complex.js"></script>
  </body>
</html>
```

</div>
  </div>
</details>

---

### What is the benefit of using a separate script file in relation to the browser?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The benefit of using a separate file is that the browser downloads and stores the script in its cache. Instead of downloading it on every load, other pages referencing the same script take it from the cache. That reduces traffic and makes pages faster.</div><br/>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <script src="myscript.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

</div>
  </div>
</details>

---

### Can a script tag reference an external file and have code inside of it?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a script tag cannot contain both an external file and code inside it.</div><br />
  <div><strong className="codeExample">Code Example:</strong>This is not allowed<br /><br />

  <div></div>

```javascript
<script src="file.js">
  console.log(1); // the content is ignored, because src is set
</script>
```

The example above can be split into two scripts to work:<br />

  <div></div>

```javascript
<script src="file.js"></script>

<script>
  console.log('Now it works!');
</script>
```

  </div>  
  </div>
</details>

---

### What are the advantages of using external scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Using external scripts can help to separate your code into manageable pieces, make it easier to maintain and debug, and improve the overall performance of your website by allowing the browser to cache the script.
  </div>
  </div>
</details>

---

### Is it possible to link multiple external scripts in a single HTML file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, it is possible to link multiple external scripts within a single HTML file.</div><br/>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
  <script src="path/to/script1.js"></script>
  <script src="path/to/script2.js"></script>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

</div>
  </div>
</details>

---

### Can you include JavaScript code directly in an HTML file instead of using an external script?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can include JavaScript code directly in an HTML file using the &#60;script&#62; tag with the code enclosed in the tag. However, this is not recommended for larger scripts as it can make the HTML file difficult to read and maintain.</div><br/>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      function greet(name) {
        console.log("Hello, " + name + "!");
      }
    </script>
  </head>
  <body>
    <button onclick="greet('John')">Click me</button>
  </body>
</html>
```

<p>Including JavaScript code directly in an HTML file can be useful for adding functionality to specific elements on the page or for small scripts that do not require their own file. However, it can lead to code duplication and decreased maintainability if used excessively. Using external scripts can help to improve code organization and reuse.</p>

</div>
  </div>
</details>

---

### What is the difference between using an external script and including JavaScript code directly in an HTML file?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> An external script is a separate file that is loaded and cached separately, while inline scripts are directly embedded in the HTML file.</div><br />
  <div><strong className="codeExample">Code Example:</strong> Working with two files<br /><br />

  <div></div>

```javascript
// script.js
function greet(name) {
  console.log("Hello, " + name + "!");
}
```

Below index.html loads script.js above<br />

  <div></div>

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <script src="script.js"></script>
  </head>
  <body>
    <button onclick="greet('John')">Click me</button>
  </body>
</html>
```

  </div>  
  </div>
</details>

---

### Can you use external scripts in conjunction with inline scripts?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can use external scripts in conjunction with inline scripts. However, you should ensure that your scripts do not conflict with each other and that any necessary dependencies are loaded in the correct order.</div><br/>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<!DOCTYPE html>
<html>
  <head>
    <head>
      <script src="path/to/script.js"></script>
      <script>
        // Inline script
        console.log("This is an inline script.");
      </script>
    </head>
  </head>
  <body>
    <button onclick="greet('John')">Click me</button>
  </body>
</html>
```

<p>Using external scripts in conjunction with inline scripts can be useful for adding functionality to specific elements on the page or for handling events that are specific to a particular section of the page. However, it's important to ensure that scripts are loaded and executed in the correct order to avoid unexpected behavior.</p>

</div>
  </div>
</details>

---

### How can you ensure that your external scripts are loaded and executed correctly?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To ensure that external scripts are loaded and executed correctly in JavaScript, we can use the onload event and the onerror event of the HTMLScriptElement object. The onload event fires when the script has been successfully loaded, while the onerror event fires when the script fails to load or encounters an error during execution.</div><br/>
  <div><strong className="codeExample">Code:</strong> For example, to load an external script and ensure that it has been loaded and executed correctly, we can use the following code:<br /><br />

  <div></div>

```javascript
let script = document.createElement("script");
script.src = "path/to/script.js";

script.onload = function() {
  console.log("Script loaded and executed successfully.");
};

script.onerror = function() {
  console.error("Failed to load script.");
};

document.head.appendChild(script);
```

<p>Using the onload and onerror events to ensure that external scripts are loaded and executed correctly can help to prevent errors and ensure that our code runs as intended.
</p>

</div>
  </div>
</details>

---
