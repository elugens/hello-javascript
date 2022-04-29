---
title: Export and Import Modules
description: JavaScript Export and Import Modules interview questions and answers.
sidebar_position: 2
sidebar_label: Export & Import
---

**Modules: Export & Import**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

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
  alert(`Hello, ${user}!`);
} // no ; at the end
```

  </div>
  </div>
</details>

---

### Is there another way to export on declarations instead of an explicit export?

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
  alert(`Hello, ${user}!`);
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
