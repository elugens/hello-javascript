---
title: Template Method Design Pattern
description: The Template Method pattern recommends breaking down an algorithm into a series of steps and then turning these steps into methods.
sidebar_position: 2
sidebar_label: Template Method
keywords:
  - template method pattern
  - template method design pattern
  - design patterns
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
  - template method pattern
  - template method design pattern
  - design patterns
  - interview answers
  - interview questions
---

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';
import JsonLD from '../../../src/components/JsonLD/JsonLD.js';
import StructuredData from './schemadata/TemplateMethodSchemaData.js';

<JsonLD data={StructuredData} />

<head>
  <title>Template Method Design Pattern | JavaScript Interview Questions</title>
</head>

**Structural: Template Method**

<CloseAllAnswers />

---

### What is the Template Method design pattern in JavaScript?

<details className='answer'>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> It's a behavioral pattern that defines a program skeleton in a method, deferring some steps to subclasses, which lets subclasses redefine certain steps of an algorithm without changing its structure.
    </div><br/>
    <div>
      <strong>Technical Response:</strong> The Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the base class but lets subclasses override specific steps of the algorithm without changing its structure. In JavaScript, you can use a base class with methods that subclasses can override.
    </div>
    <div>
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

<img src="/img/javascript-template-method.jpg" /><br /><br />

**This pattern's objects are as follows:**

**AbstractClass** -- example code: _datastore_

- It provides a way for clients to use the template method.
- It uses the template method to define the basic steps of an algorithm.
- It provides hooks (through method overriding) for a client developer to use in implementing the Steps.

**ConcreteClass** -- example code: _MySQL_

- carries out the primitive Steps described in AbstractClass.

<br/>

Here's an example of how to implement the Template Method pattern in modern JavaScript:

```javascript
// This is the base class that contains the template method and common steps.
class Bread {
  // This is the template method.
  bakeBread() {
    this.mixIngredients();
    this.firstProving();
    this.shapeDough();
    this.secondProving();
    this.bake();
  }

  // These are the steps that are the same for all breads.
  mixIngredients() {
    console.log('Ingredients mixed for standard bread.');
  }

  firstProving() {
    console.log('First proving completed.');
  }

  shapeDough() {
    throw new Error('You have to implement the method shapeDough!');
  }

  secondProving() {
    console.log('Second proving completed.');
  }

  bake() {
    throw new Error('You have to implement the method bake!');
  }
}

// This is a concrete class that implements the varying steps.
class SourdoughBread extends Bread {
  shapeDough() {
    console.log('Dough shaped into a rustic loaf for sourdough bread.');
  }

  bake() {
    console.log('Sourdough bread baked at 230 degrees Celsius for 40 minutes.');
  }
}

// This is another concrete class that implements the varying steps.
class Baguette extends Bread {
  shapeDough() {
    console.log('Dough shaped into a long, thin cylinder for baguette.');
  }

  bake() {
    console.log('Baguette baked at 240 degrees Celsius for 20 minutes.');
  }
}

// Usage:
let bread = new SourdoughBread();
bread.bakeBread();

bread = new Baguette();
bread.bakeBread();
```

When you run this program, you'll see the steps of baking bread printed out. The steps that are the same for all breads are implemented in the base class, while the steps that can vary depending on the type of bread (shaping the dough and baking) are implemented in the subclasses. The `bakeBread` method in the base class is the template method, and it dictates the sequence of steps for baking bread.

</div>
 </div>

</details>

---

### What pattern category does the template method pattern belong to?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
    <div>
      <strong>Interview Response:</strong> The template method pattern belongs to the behavioral design pattern category in JavaScript, which focuses on communication between objects and how they interact.
    </div>
  </div>
</details>

---

### Can you give an example of when to use the Template Method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> You can use the Template Method when you want to let clients extend only particular steps of an algorithm, but not the whole algorithm or its structure.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> The template method pattern is useful when you want to define a skeletal structure of an algorithm in JavaScript and allow subclasses to customize some steps.<br/><br/><strong>When to Use the Template Method Pattern:</strong>
    </div>
    <br />
    <div></div>

- The template method pattern solves the problem by employing an algorithm with various versions. You need to divide your method into additional steps implemented in the abstract class when the different implementations share them. On the other hand, we implement the various steps in the concrete classes.
- Another compelling use case for this approach is when you have copied and pasted code (private functions) between various classes.
- Finally, you can employ this strategy if most of your classes exhibit similar tendencies.

<br />
  </div>
</details>

---

### What are some of the benefits of using the Template Method pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Benefits of using the Template Method pattern in JavaScript include promoting code reuse, reducing duplication, and providing a clear and flexible structure for algorithms.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Benefits of the Template Method Pattern
    </div>
    <br />
    <div></div>

- It's relatively easy to create a concrete implementation of an algorithm because you're removing common parts of the problem domain using an abstract class.
- Clean code because you avoid duplicate code.
- Ever cleaner code because you separate the algorithm into private methods or functions that are simpler and easier to test.

<br />
  </div>
</details>

---

### What are some disadvantages of employing the Template Method design pattern?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Disadvantages of using the Template Method pattern in JavaScript include increased complexity due to the added abstraction layer, and reduced flexibility in the overall design.
    </div>
    <br />
    <div>
      <strong>Technical Response:</strong> Drawbacks of the Template Method Pattern.
    </div>
    <br />
    <div></div>

- You may violate the Liskov Substitution Principle by suppressing a default step implementation through a subclass.
- Some clients may be the only reason the template pattern imposes a specific design.
- The template design is more adaptable than other patterns, and modifications at the high or low level might disrupt implementation, making maintenance difficult.

<br />
  </div>
</details>

---

### Are there any alternatives to using the Template Method?

<details>
  <summary>
    <strong>View Answer:</strong>
  </summary>
  <div>
  <div>
      <strong>Interview Response:</strong> Yes, some alternatives to the Template Method pattern in JavaScript include the Strategy pattern, the Command pattern, and the Decorator pattern.
    </div><br />
    <div>
      <strong>Technical Response:</strong> Yes, there are several alternatives to the Template Method pattern in JavaScript, including the Strategy pattern, which uses composition instead of inheritance, the Command pattern, which encapsulates requests as objects, and the Decorator pattern, which adds functionality to objects dynamically at runtime.
    </div>
  </div>
</details>

---

### How does the Template Method contribute to code reuse?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It promotes code reuse by encapsulating common behavior in a superclass while allowing subclasses to implement specific behavior.
  </div>
  </div>
</details>

---

### What are the key components of the Template Method pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The key components are an abstract class with a template method containing the algorithm skeleton, and concrete classes that implement these operations.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Abstract base class
class AbstractClass {
  // Template method
  templateMethod() {
    this.primitiveOperation1();
    this.primitiveOperation2();
  }

  // Default operation
  primitiveOperation1() {
    console.log('Primitive operation 1 from AbstractClass');
  }

  // Abstract operation
  primitiveOperation2() {
    throw new Error('You have to implement the method primitiveOperation2!');
  }
}

// Concrete subclass
class ConcreteClass extends AbstractClass {
  // Overriding abstract operation
  primitiveOperation2() {
    console.log('Primitive operation 2 from ConcreteClass');
  }
}

// Usage:
let instance = new ConcreteClass();
instance.templateMethod();
```

In this code:

- `AbstractClass` is the abstract base class. It contains the template method (`templateMethod`), a default step method (`primitiveOperation1`), and an abstract step method (`primitiveOperation2`).

- `templateMethod` is the template method. It calls `primitiveOperation1` and `primitiveOperation2` in a specific order.

- `primitiveOperation1` is a default step method, which is defined in the base class and is the same for all subclasses.

- `primitiveOperation2` is an abstract step method, which must be implemented by each subclass.

- `ConcreteClass` is a concrete subclass that inherits from `AbstractClass` and implements `primitiveOperation2`.

When you run this code, the output demonstrates that the template method has dictated the order of execution of the operations and that the operation overridden in the subclass has been successfully executed.

  </div>
  </div>
</details>

---

### How does the Template Method maintain the Open/Closed Principle?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> It maintains the Open/Closed Principle by allowing new steps to be added in subclasses without modifying the abstract class or the algorithm's structure.
  </div>
  </div>
</details>

---

### How do the Template Method and the Strategy Pattern differ?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The Strategy Pattern uses composition to change parts of the algorithm, while the Template Method uses inheritance to modify parts of the algorithm.
  </div>
  </div>
</details>

---

### What is a potential downside of the Template Method pattern?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> One downside is that you might create a superclass with a large template method that's difficult to understand and maintain.
  </div>
  </div>
</details>

---

### Can the Template Method pattern lead to problems in JavaScript due to its prototypal inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, Template Method pattern can lead to problems due to JavaScript's prototypal inheritance, such as difficulty with method overriding, lack of clear abstract classes, and potential confusion with this context. <strong>Note:</strong> It should be noted that ES6 classes are the best way to implement the Template Method.
  </div>
  </div>
</details>

---

### Is it common to use the Template Method pattern in functional programming?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> No, it's less common since functional programming discourages the use of mutable state and often prefers composition over inheritance.
  </div>
  </div>
</details>

---

### Can the Template Method pattern be used with JavaScript's ES6 class syntax?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, the ES6 class syntax supports the key concepts needed for the Template Method pattern, including inheritance and method overriding.
  </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```javascript
// Abstract class
class AbstractClass {
  // Template method
  templateMethod() {
    this.primitiveOperation1();
    this.primitiveOperation2();
  }

  primitiveOperation1() {
    console.log('Primitive operation 1 is running...');
  }

  primitiveOperation2() {
    throw new Error('Method \'primitiveOperation2\' is not implemented');
  }
}

// Concrete class
class ConcreteClass extends AbstractClass {
  primitiveOperation2() {
    console.log('Primitive operation 2 is running...');
  }
}

// Usage:
const concreteInstance = new ConcreteClass();
concreteInstance.templateMethod();
```

In this example, `AbstractClass` is the abstract class with a template method (`templateMethod`) and two primitive operations. `ConcreteClass` is a concrete class that extends `AbstractClass` and implements `primitiveOperation2`. This code runs the template method on an instance of `ConcreteClass`, which executes the two primitive operations in order.

  </div>
  </div>
</details>

---
