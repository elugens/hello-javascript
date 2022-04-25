---
title: Rest Parameters / Spread Syntax
description: Rest Parameters / Spread Syntax
sidebar_position: 2
sidebar_label: Rest Parameters / Spread Syntax
---

**Advanced Functions: Rest Parameters / Spread Syntax**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

### What is the difference between the rest parameter and spread syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The spread syntax is the opposite of the rest parameter. The rest parameter collects items into an array, and the spread operator unpacks the collected elements into single elements.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// The Rest Parameter: You can name it what you want
function myData(...rest) {
  console.log(rest); // ["Marina",24,"Front-End Developer"]
}

myData('Marina', 24, 'Front-End Developer');

// The Spread Syntax:
let myArr = ['Marina', 'Magdy', 'Shafiq'];
let newArr = [...myArr, 'FrontEnd', 24];

console.log(newArr); // ["Marina" , "Magdy" , "Shafiq" , "FrontEnd" , 24 ] ;
```

:::note
If you call a function and send several arguments, you receive them into the rest parameter in the function implementation.
:::

  </div>
  </div>
</details>

---

### Explain, How the rest parameter works in functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The rest parameter expands the dynamic capabilities of functions. Functions themselves express an error when there are excessive arguments. The function declaration includes the remaining parameters by using three dots followed by the array's name. The dots mean "gather the remaining parameters into an array". This behavior allows the function to act on several arguments instead of a predefined number or single argument.
</div><br />
  <div><strong className="codeExample">Code Example:</strong> Get the sum of the arguments regardless of the number in the array.<br /><br />

  <div></div>

```js
function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert(sumAll(1)); // 1
alert(sumAll(1, 2)); // 3
alert(sumAll(1, 2, 3)); // 6
```

  </div>
  </div>
</details>

---

### Can you use the rest parameter with predefined arguments in JavaScript functions?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, you can mix predefined parameters with the rest parameter in JavaScript functions. There is a limit to its use in the form of the order of arguments. Predefined parameters must precede the rest parameter, or it may result in an error. The best way to remember this is to "Rest at the end".
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showName(firstName, lastName, ...titles) {
  alert( firstName + ' ' + lastName ); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  alert( titles[0] ); // Consul
  alert( titles[1] ); // Imperator
  alert( titles.length ); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// The rest parameters must be at the end
function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
  // error
}
```

  </div>
  </div>
</details>

---

### What is the difference between the rest parameter and the arguments array-like object?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The rest parameter and the arguments array-like object have similar behaviors. The rest parameter is relatively new compared to arguments. Although arguments are both array-like and iterable, it is not an array. It does not support array methods, so we cannot call arguments.map(...) for example. Also, it always contains all arguments. We cannot capture them partially as we did with the rest parameters. So, when we need these features, then the rest parameters are preferred. Another issue is that arrow functions do not have access to arguments. If we access the argument's object from an arrow function, it takes them from the outer "normal" function. This issue reduces the potency of the arguments object and can lead to bugs in our code.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
function showName() {
  alert(arguments.length);
  alert(arguments[0]);
  alert(arguments[1]);

  // it is iterable
  // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName('Julius', 'Caesar');

// shows: 1, Ilya, undefined (no second argument)
showName('Ilya');
```

  </div>
  </div>
</details>

---

### What are the advantages of adopting the ES6 spread syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> As far as coding in a functional paradigm is concerned, using the spread syntax in ES6 can prove to be heavily beneficial. The spread syntax is easily used to create copies of arrays or objects. Using spread syntax in a program reduces the need to use loops, Object.create, slice, or any library function, which helps reduce code and complexity in your applications.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5 (spread turns array into a list of arguments)

// We also can pass multiple iterables this way:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2)); // 8

// We can even combine the spread syntax with normal values:
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

// Also, the spread syntax can be used to merge arrays:
let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// here we use the spread syntax to turn the string into an array of characters:
let str = 'Hello';

alert([...str]); // H,e,l,l,o
```

  </div>
  </div>
</details>

---
