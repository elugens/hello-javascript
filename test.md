
### Can you name the five primitive wrapper objects?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The five primitive wrapper objects in JavaScript are: String, Number, Boolean, Symbol, and BigInt.
  </div>
  </div>
</details>

---

### Are JavaScript primitive immutable or mutable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript primitives are immutable, meaning their values cannot be changed after they are created. This ensures data consistency.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// code goes here
```

  </div>
  </div>
</details>

---

### Are JavaScript primitive immutable or mutable?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> JavaScript primitives are immutable, meaning their values cannot be changed after they are created. This ensures data consistency.</div><br />
  <div><strong>Technical Response:</strong> All primitives are unchanging and unchangeable. It is crucial to distinguish between a primitive and a variable with a primitive value. The variable can assign a new value, but it cannot get modified like objects, arrays, and functions can. A primitive can get swapped, but we cannot directly alter them.<br />
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Using a string method does not mutate the string
var bar = 'baz';
console.log(bar); // baz
bar.toUpperCase();
console.log(bar); // baz

// Using an array method mutates the array
var foo = [];
console.log(foo); // []
foo.push('plugh');
console.log(foo); // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase(); // BAZ
```

  </div>
  </div>
</details>

---

### When should you use a for...of loop instead of a for loop with arrays?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You should use a for...of loop instead of a for loop with arrays in JavaScript when you need to loop over array elements without using their index, and when you don't need to modify the array.</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

Sure, here are JavaScript examples illustrating the difference:

`for...of` loop (when you only care about values):

```javascript
let arr = ['a', 'b', 'c'];
for (let value of arr) {
  console.log(value);  // Logs: 'a', 'b', 'c'
}
```

`for` loop (when you need to access or manipulate the index):

```javascript
let arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);  // Logs: '0 a', '1 b', '2 c'
}
```

In the `for...of` example, we simply iterate over the values in the array. In the `for` loop example, we have access to each index (`i`), and we can do something with it if needed.

  </div>
  </div>
</details>

---
