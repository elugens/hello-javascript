---
title: Export and Import Modules
description: JavaScript Export and Import Modules interview questions and answers. We can label any declaration as exported by placing export before it. Interview Answers
sidebar_position: 2
sidebar_label: Export & Import
keywords:
  - export modules
  - import modules
  - default module export
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
  - export modules
  - import modules
  - default module export
  - interview answers
  - interview questions
---

import AdSense from '../../../src/components/Adsense/Adsense.js';
import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/ExportImportSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Export-Import Modules | Frontend Phone Interview Questions</title>
</head>

**Modules: Export & Import**

---

<AdSense />

---

<CloseAllAnswers />

---

### What is the purpose of export keyword in JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The export keyword in JavaScript is used to export functions, objects, or primitive values from a module so they can be used by other modules.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example. Suppose we have a module that calculates the area of a circle. We can use the `export` keyword to make the function available for other modules.

```javascript
// circle.js
export function area(radius) {
    return Math.PI * radius * radius;
}
```

Here, the `area` function is exported from the `circle.js` module and can now be imported in another JavaScript file with the `import` statement.

  </div>
  </div>
</details>

---

### What is the purpose of import keyword in JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The `import` keyword in JavaScript is used to bring in functions, objects, or values from another module into the current module, facilitating code reusability and organization.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Here's a simple example. Suppose you want to use the function `area` from the `circle.js` module mentioned earlier. You can use the `import` keyword to import that function.

```javascript
// app.js
import { area } from './circle.js';

let r = 5;
console.log(`Area of the circle: ${area(r)}`);
```

In this `app.js` file, the `area` function is imported from the `circle.js` module, and then it is used to calculate the area of a circle with radius 5.

  </div>
  </div>
</details>

---

### What are the two types of exports in JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The two types of exports in JavaScript modules are "named exports", which allow multiple exports per module, and "default export", which allows for one per module.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// mathOperations.js

// Named export
export function add(a, b) {
    return a + b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}
```

In this `mathOperations.js` module, `add` is a named export and `multiply` is a default export. You can have multiple named exports in a module, but only one default export.

  </div>
  </div>
</details>

---

### Can a module have more than one default export?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, a module can only have one default export but it can have multiple named exports.
  </div>
  </div>
</details>

---

### How can you import a default export?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a default export can be imported using `import name from "module-name"`, where "name" is the name you choose.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// import from 'mathOperations.js'
import multiply from './mathOperations.js';

console.log(multiply(5, 4)); // 20
```

In this code, the default export (the `multiply` function) from the `mathOperations.js` module is imported and used to multiply 5 and 4. The name `multiply` here can be anything you choose, as it's a default export.

  </div>
  </div>
</details>

---

### How can you import a named export?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In JavaScript, a named export can be imported using import &#123; name &#125; from "module-name", where "name" is the exported entity's name.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// import from 'mathOperations.js'
import { add } from './mathOperations.js';

console.log(add(5, 4)); // 9
```

In this code, the named export (the `add` function) from the `mathOperations.js` module is imported and used to add 5 and 4. The name `add` must match the exported name in the module.

  </div>
  </div>
</details>

---

### Can you import all named exports at once?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can import all named exports at once using `import * as aliasName from "module-name"`, which groups all exports under an alias.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// assuming 'mathOperations.js' has multiple named exports

// import from 'mathOperations.js'
import * as mathOps from './mathOperations.js';

console.log(mathOps.add(5, 4)); // 9
console.log(mathOps.subtract(5, 4)); // 1
```

In this code, all named exports from `mathOperations.js` are imported into an object `mathOps`. The functions can then be accessed as properties of this object.

  </div>
  </div>
</details>

---

### Is it possible to use both default and named exports in a module?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, a JavaScript module can have both default and named exports, providing flexibility in how items are exported and imported.
  </div>
  </div>
</details>

---

### Can you rename imports in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, imports can be renamed in JavaScript using the `as` keyword, like so: `import &#123; originalName as newName &#125; from "module-name"`.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Assuming 'mathOperations.js' has a named export 'add'

// import from 'mathOperations.js'
import { add as addition } from './mathOperations.js';

console.log(addition(5, 4)); // 9
```

In this code, the named export `add` from `mathOperations.js` is imported and renamed to `addition`. You can now use `addition` to refer to the `add` function from the `mathOperations.js` module.

  </div>
  </div>
</details>

---

### How does the export keyword work with declarations in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can label any declaration as exported by placing export before it, a variable, function, or class.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// export an array
export let months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}
```

  </div>
  </div>
</details>

---

### What is the recommendation for exports before functions and class declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Export before a class or a function does not make it a function expression, and it is still a function declaration, albeit exported. Most JavaScript style guides do not recommend semicolons after function and class declarations. A semicolon does not need implementation at the end of the export class and export function.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
export function sayHi(user) {
  console.log(`Hello, ${user}!`);
} // no ; at the end
```

  </div>
  </div>
</details>

---

### Is there another way to export declarations instead of an explicit export?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can export separately using a list of exported variables or function/ class names that we choose to export.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 say.js
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

function sayBye(user) {
  console.log(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of exported variables
```

  </div>
  </div>
</details>

---

### If you want to import all declarations from a module, what syntax should you use?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> If there is a lot to import, we can import everything as an object using import * as &#8249;obj &#8250;. In contrast, this may seem an excellent way to access everything collectively. (It is not a recommended approach).
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example 1: Importing everything in say.js
// 📁 main.js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

  </div>
  </div>
</details>
---

### What is the rationale for explicitly listing all module imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Well, there are a few reasons. Modern build tools (webpack and others) bundle modules together and optimize them to speed up loading and remove unused stuff. Explicitly listing what to import, gives shorter names: sayHi() instead of say.sayHi(). An explicit list of imports gives a better overview of the code structure: what gets used and where. It makes code support and refactoring easier.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Example 1: Importing everything in say.js
// 📁 main.js
import * as say from './say.js'; // listing everything

say.sayHi('John');
say.sayBye('John');

// Example 2: (Recommended) Only import what we need
// 📁 main.js
import { sayHi } from './say.js'; // explicit list
sayHi('John');
```

  </div>
  </div>
</details>

---

### Is it possible to edit or abbreviate the names of our module imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can change or shorten the names of our imports. We can use the import “as” syntax to change the import name to a local variable name. You can also use this behavior for exports using the export as syntax.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 main.js
import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!
```

  </div>
  </div>
</details>

---

### Can you explain the two main kinds of modules in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In practice, there are mainly two kinds of modules, modules that contain a library, a pack of functions, and modules that declare a single entity, e.g., a module user.js exports only class User.
</div>
  </div>
</details>

---

### What differentiates default and named module exports and imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named imports use the standard imports with bracket syntax, while default imports can be imported without brackets. Default exports must use the export default syntax to denote that the object is the default export. Technically, we may have both default and named exports in a single module, but people usually do not mix them in practice. A module has either named exports or the default one. Another critical difference is that default exports do not require an entity name (function, class, variable). Not giving a name is fine because there is only one export default per file, so import without curly braces knows what to import.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 user.js
export default class User { // just add "default" to export as default
  constructor(name) {
    this.name = name;
  }
}

// 📁 main.js - importing default User class
import User from './user.js'; // not {User}, just User

new User('John');

////////////////////////////

// No entity names - these are all perfectly valid default exports

export default class { // no class name
  constructor() { ... }
}

export default function(user) { // no function name
  console.log(`Hello, ${user}!`);
}

// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

```

  </div>
  </div>
</details>

---

### Is it possible to specify the default export without explicitly utilizing it on the default entity (function, class, variable)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In some situations, we can use the default keyword to reference the default export. For example, to export a function separately from its definition.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// export a function separately from its definition
function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// same as if we added "export default" before the function
export { sayHi as default }; // <- referencing sayHi
```

  </div>
  </div>
</details>

---

### If there is one main default export and a few named ones in your module. How do you import both exported entities?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> To import both the default and named exports, you must use the import &#123;default as &#8249;obj&#8250;, &#8249;otherObject&#8250;&#125; syntax. The imports must be enclosed in brackets and separated by a comma.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 user.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}

export function sayHi(user) {
  console.log(`Hello, ${user}!`);
}

// 📁 main.js
import { default as User, sayHi } from './user.js'; // enclosed in curly brackets

new User('John');
```

  </div>
  </div>
</details>

---

### Are there any issues with using default exports in JavaScript? Are named exports better?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named exports are explicit. Named exports name what exports, so we have that information from them; that is good. Named exports force us to use exactly the right name to import. While for a default export, we always choose the name when importing. This approach is not good because some team members may use different names to import the same thing, which is not good.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Named exports force us to use exactly the right name to import
import { User } from './user.js';
// import {MyUser} won't work, the name must be {User}

// Default exports we can choose the name when importing
import User from './user.js'; // works
import MyUser from './user.js'; // works too
// could be import Anything... and it'll still work

// there’s a rule that imported variables should correspond to file names
import User from './user.js';
import LoginForm from './loginForm.js';
import func from '/path/to/func.js';
```

  </div>
  </div>
</details>

---

### What is the purpose of re-exporting a module in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Re-exporting a module allows access to specific functionality without giving outsiders access to the internal structure. The idea is that outsiders, other programmers who use our package, should not meddle with its internal structure and search for files inside our package folder. We export what is necessary and keep the rest hidden from prying eyes.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// 📁 auth/index.js

// import login/logout and immediately export them
import { login, logout } from './helpers.js';
export { login, logout };

// import default as User and export it
import User from './user.js';
export { User };
// ...
```

  </div>
  </div>
</details>

---

### Can you import modules conditionally or dynamically in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, JavaScript supports dynamic imports, allowing modules to be loaded conditionally or on demand at runtime, which can optimize performance.
  </div>
  </div>
</details>

---

### What file extensions are typically associated with JavaScript modules?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript modules are typically associated with the .js, .mjs (for ES modules), or .cjs (for CommonJS modules) file extensions.
  </div>
  </div>
</details>

---
