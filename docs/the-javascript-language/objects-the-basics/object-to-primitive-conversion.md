---
title: Object to Primitive Conversion
sidebar_position: 8
---

# Object to Primitive Conversion - Q&A

**Question:** **What is the rule for objects in a Boolean context?**

**Interview Answer:** All objects are true in a Boolean context.

Source: <https://javascript.info/object-toprimitive>

**Question:** **What are the three variants of type conversion in JavaScript?**

**Interview Answer:** String, number, and default conversions.

**Technical Answer:** The three variants of type conversion include string, number, and default conversions. String conversion can happen in an explicit fashion when an object expects a string. Mathematical operations use explicit number conversion on primitives. Default occurs in rare cases when the operator is not sure what type to expect.

Source: <https://javascript.info/object-toprimitive#toprimitive>

**Question:** **To implement conversions, what are the three object methods that JavaScript tries to find and call?**

**Answer:** The three object methods include Symbol.toPrimtive (system symbol) if it exists. Otherwise, if the hint is a string, it will try Obj.toString() or Obj.valueOf(). Finally, if the hint is a number or default it will try Obj.valueOf() and Obj.toString().

Simplified: The three object methods include Symbol.toPrimitive, Obj.toString(), and/or Obj.valueOf().

Source: <https://javascript.info/object-toprimitive#toprimitive>

**Question:** **Explain, what Symbol.toPrimitive() is and what it does?**

**Answer:** The Symbol.toPrimitive is a symbol that specifies a function valued property that is called to convert an object to a corresponding primitive value.

Example:

```js
let user = {
  name: 'John',

  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);

    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:

alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

Source: <https://javascript.info/object-toprimitive#symbol-toprimitive>

**Question:** **What is the outcome when you try to use a for…loop to expose the properties of an object using Symbol.toPrimitive()?**

**Answer:** The result will be a return of all properties except for the Symbol.toPrimitive because Symbol cannot be seen in the global symbol registry.

Example:

```js
let user = {
  name: 'John',

  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);

    return hint == 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

for (let prop in user) {
  console.log(prop); // returns name, money but no Symbol
}
```

Source: <https://javascript.info/object-toprimitive#symbol-toprimitive>

**Question:** **Methods toString and valueOf come from ancient times. Are they considered Symbols?**

**Interview Answer:** No because they were created before Symbols were implemented into JavaScript. They are regular string-name methods.

**Technical Answer:** No because they were created before Symbols were implemented into JavaScript. They are regular string-name methods. If there is no Symbol.toPrimitive then JavaScript tries to find them.

Source: <https://javascript.info/object-toprimitive#tostring-valueof>

**Question:** **By default, a plain object has following toString and valueOf methods. What do each of these object methods return?**

**Interview Answer:** The toString method returns a string "[object Object]" and the valueOf method returns the object itself.

```js
let user = { name: 'John' };

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

Source: <https://javascript.info/object-toprimitive#tostring-valueof>

**Question:** **What happens if toString or valueOf returns an object?**

**Technical Answer:** There is no error, but such value is ignored.

**Technical Answer:** For historical reasons, if toString or valueOf returns an object, there is no error, but such value is ignored (like if the method did not exist). That is because in ancient times there was no good “error” concept in JavaScript.

Source: <https://javascript.info/object-toprimitive#return-types>

**Question:** **As you pass an object as an argument, what are the stages that take place?**

**Interview Answer:** The object is converted to a primitive. If the resulting primitive is not the right type, it is converted.

**Technical Answer:** If we pass an object as an argument, then there are two stages.

- The object is converted to a primitive.
- If the resulting primitive is not of the right type, it is converted.

Example:

```js
let obj = {
  // toString handles all conversions in the absence of other methods

  toString() {
    return '2';
  },
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number
```

Source: <https://javascript.info/object-toprimitive#further-conversions>
