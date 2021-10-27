---
title: Live Coding Example
description: How to implement live coding in Docusaurus
---

# Live Coding with React in Docusaurus

Some explanation

```jsx live
function ExampleLive(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <button onClick={() => setCount(count - 1)}>Substract</button>
    </div>
  );
}
```

```javascript
let js = 'JavaScript!';
function ExampleJS(name) {
  console.log(`Hello ${name}`);
}

ExampleJS(js); // logs 'Hello, JavaScript!'
```
