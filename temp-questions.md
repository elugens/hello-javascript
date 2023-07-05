
### When is classical inheritance an appropriate choice?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The answer is never or rarely. Indeed, never more than one level. Multi-level class hierarchies are an anti-pattern, and it can lead to problems like method collision, which is not good.
</div><br />

:::note
I've been posing this issue for years, and the only responses I've ever received fall into one of three prevalent assumptions. The challenge typically gets received with silence.
:::

  </div>
</details>

---

### What is the difference between class inheritance and prototypal inheritance?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Classes inherit from classes created in sub-classes using a hierarchical class taxonomy. Prototypal inheritance equates to a prototype functioning as an object instance, and objects inherit directly from each other. The difference is that class taxonomy is not a derivative of prototypal inheritance.</div><br />
  <div><strong>Technical Response:</strong><br /><br /> <strong>Class Inheritance:</strong> Instances inherit from classes (similar to a blueprint or a class description) and form sub-class relationships: hierarchical class taxonomies. We can use JavaScript to create instances using constructor functions that use the 'new' keyword. The ES6 'class' keyword may or may not be used for class inheritance.<br /><br /> <strong>Prototypal Inheritance:</strong> In JavaScript, Instances directly inherit from other objects. Instances often get created using factory methods or the 'Object.create()' method. Instances may be built up from various entities, allowing for simple selective inheritance.
  </div>
  </div>
</details>

---

### What is a factory function?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Factory functions are similar to constructor functions/class functions, but instead of requiring new to create an object, factory functions simply create an object and return it. They are often used to create objects that are not classes. Factory functions also do not require the use of the 'this' keyword for inner values. A factory function is different from a regular function in that it always returns an object, with any method, value, etc. contained within it.
</div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
// Function creating new objects
// without use of 'new' keyword
function createCat(name) {
  return {
    name: name,
    talk: function () {
      console.log('My name is ' + name + ', the cat in the hat.');
    },
  };
}

//Create a cat with name Fuzzy
const cat1 = createCat('Fuzzy');

cat1.talk();

// Create a cat with name Fuzzy 2.O Upgraded
const cat2 = createCat('Fuzzy 2.O Upgraded');

cat2.talk();
```

  </div>
  </div>
</details>

---

### Can you change `[[Prototype]]` on existing objects, in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, however it is seen as a horrible idea. We have the ability to get/set [[Prototype]] at any moment. However, it is normally only set once at the time of object creation, and the object is not modified after that.</div><br />
  <div><strong>Technical Response:</strong> Technically, yes, but it is thought to be a horrible idea. We have the ability to get/set [[Prototype]] at any moment. However, it is normally only set once at the moment of object creation and is not changed again. Using Object to make "on-the-fly" changes to a prototype.  setPrototypeOf or obj. __proto__  = is a sluggish operation because it violates internal object property access optimizations. So, unless you know what you're doing or performance isn't important to you, we should avoid it.
  </div><br />

:::warning
According to the MDN, changing the prototype after creation is a slow operation and can affect performance.
:::

  </div>
</details>

---

### What do you prefer, classical inheritance and prototypal inheritance in JavaScript? If so, why?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Prototypal inheritance because it can be more flexible and powerful. It allows direct inheritance from an object, avoiding class hierarchies and facilitating dynamic relationships between objects, making it align more naturally with JavaScript's object-oriented model.
</div>
  </div>
</details>

---
