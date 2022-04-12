---
title: Prototype Design Pattern
description: The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or example - object. The Prototype pattern is also referred to as the Properties pattern.
sidebar_position: 5
sidebar_label: Prototype
---

**Creational: Prototype Pattern**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Could you please explain the prototype design pattern?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Prototype Pattern is used to create new objects. Rather than returning uninitialized objects, it returns objects with values copied from a prototype - or example - object. The Properties pattern is another name for the Prototype pattern.<br/>
    </div><br />
    <div>
      <strong>Technical Response:</strong> An object that can be cloned is referred to as a prototype. The Prototype Pattern creates new objects, but instead of producing uninitialized objects, it creates objects with values copied from a prototype - or example - object. The Prototype pattern is also known as the Properties pattern.<br/><br/>
      We can use the prototype pattern to create new objects based on its blueprint by cloning an existing object. The prototype pattern is based on prototypal inheritance; we can use JavaScript's native prototyping capabilities.
<br/><br/>
    </div><br />
  <div><strong className="codeExample">Diagram:</strong><br /><br />

  <div></div>

<img src="/img/javascript-prototype-pattern.jpg" /><br /><br />

**The objects participating in this pattern are:**

**Client** -- In example code: _the run() function_

- creates a new object by asking a prototype to clone itself

**Prototype** -- In example code: _CustomerPrototype_

- creates an interfaces to clone itself

**Clones** -- In example code: _Customer_

- the cloned objects that are being created

</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
const myCar = {
  name: 'Ford Escort',

  drive() {
    console.log("Weeee. I'm driving!");
  },

  panic() {
    console.log('Wait. How do you stop this thing?');
  },
};

// Use Object.create to instantiate a new car
const yourCar = Object.create(myCar);

// Now we can see that one is a prototype of the other
console.log(yourCar.name);

const yourCarProto = Object.getPrototypeOf(yourCar);

console.log(yourCarProto === myCar); // true

/*

output:

Ford Escort
true

*/
```

  </div>

  </div>
</details>

---

### Which pattern category does the Prototype pattern fall under?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The prototype pattern is a type of creational design pattern.
    </div>
  </div>
</details>

---

### What is an example of a good use case for the prototype pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The Prototype pattern can be used to help with the initialization of business objects with values that match the database's default values. The prototype object contains the default values that have been copied into a newly created business object. <br/><br/> Classical languages rarely use the Prototype pattern, but JavaScript is a prototypal language that uses this pattern to construct new objects and their prototypes.<br/><br/> We should use the Prototype pattern when your code shouldn't depend on the concrete classes of objects you need to copy.
    </div>

  </div>
</details>

---

### What are some of the advantages of employing the Prototype pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Benefits of the Prototype Pattern
    </div>
    <br />
    <div></div>

- Objects can be cloned without being bound to their concrete classes.
- You can get rid of repeated initialization code in favor of cloning pre-built prototypes.
- It is easier to produce complex objects
- When dealing with configuration presets for complex objects, you get an alternative to inheritance.

<br />
  </div>
</details>

---

### What are some of the disadvantages of employing the Prototype pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> Cloning complex objects with circular references might be tricky.<br />
    </div>
  </div>
</details>
