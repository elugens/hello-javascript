---
title: Export & Import
sidebar_position: 2
---

# Export and Import Modules

**Modules: Export & Import**

<head>
  <title>Modules: Export & Import - JavaScript Interview Questions & Answers</title>
  <meta charSet="utf-8" />
</head>

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### How does the export keyword work with declarations in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> We can label any declaration as exported by placing export before it, be it a variable, function, or a class.
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

### What is recommended when it comes to exports before functions and class declarations?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Export before a class or a function does not make it a function expression. It is still a function declaration, albeit exported. Most JavaScript style guides do not recommend semicolons after function and class declarations. That is why there is no need for a semicolon at the end of export class and export function.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
} // no ; at the end
```

  </div>
  </div>
</details>

---

### Is there another way to export instead of an explicit export on declarations?

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
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
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
  <div><strong>Interview Response:</strong> If there is a lot to import, we can import everything as an object using "import * as &#8249;obj&#8250;". While this may seem to be a good way to collectively access everything. (It is not a recommended approach).
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
  <div><strong>Interview Response:</strong> Well, there are few reasons. Modern build tools (webpack and others) bundle modules together and optimize them to speedup loading and remove unused stuff. Explicitly listing what to import gives shorter names: sayHi() instead of say.sayHi(). Explicit list of imports gives better overview of the code structure: what is used and where. It makes code support and refactoring easier.
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

### Is there a way to change or shorten the name of our imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, we can change or shorten the names of our imports. We can achieve this by using the import “as” syntax to change the import name to a local variable name. You can also us this behavior for exports using the export as syntax.
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
  <div><strong>Interview Response:</strong> In practice, there are mainly two kinds of modules, modules that contain a library, pack of functions and modules that declare a single entity, e.g. a module user.js exports only class User.
</div>
  </div>
</details>

---

### What is the difference between named and default module exports and imports?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Named imports use the standard imports with bracket syntax, while default imports can be imported without brackets. Default exports must use the export default syntax to denote that the object is the default export. Technically, we may have both default and named exports in a single module, but in practice people usually do not mix them. A module has either named exports or the default one. Another important difference is that default exports do not require an entity name (function, class, variable, etc.). Not giving a name is fine, because there is only one export default per file, so import without curly braces knows what to import.
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
  alert(`Hello, ${user}!`);
}

// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

```

  </div>
  </div>
</details>

---

### Is there a way to set the default export without explicitly using it on the default entity directly (function, class, variable, etc.)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> In some situations, the default keyword is used to reference the default export. For example, to export a function separately from its definition.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// export a function separately from its definition
function sayHi(user) {
  alert(`Hello, ${user}!`);
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
  <div><strong>Interview Response:</strong> To import both the default and named exports, you must use the import default as &#8249;obj&#8250;, &#123;&#8249;otherObject&#8250;&#125; syntax. The imports must be enclosed in brackets and separated by a comma.
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
  alert(`Hello, ${user}!`);
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
  <div><strong>Interview Response:</strong> Named exports are explicit. They exactly name what they import, so we have that information from them; that is a good thing. Named exports force us to use exactly the right name to import. While for a default export, we always choose the name when importing. This not a good approach because some team members may use different names to import the same thing, and that is not good.
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
  <div><strong>Interview Response:</strong> Re-exporting a module allows access to specific functionality without giving access to the internal structure to outsiders. The idea is that outsiders, other programmers who use our package, should not meddle with its internal structure, search for files inside our package folder. We export only what is necessary and keep the rest hidden from prying eyes.
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
