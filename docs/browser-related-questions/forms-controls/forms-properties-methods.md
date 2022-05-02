---
title: Form Properties / Methods
description: Form Properties / Methods in JavaScript are properties and methods that are associated with a form element. - JavaScript Interview Questions & Answers
sidebar_position: 1
sidebar_label: Form Properties / Methods
keywords:
  - form properties
  - form methods
  - form element
  - form element properties
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
  - form properties
  - form methods
  - form element
  - form element properties
  - interview answers
  - interview questions
---

<head>
  <title>Form Properties / Methods | HelloJavaScript.info</title>
</head>

**Forms / Controls: Form Properties / Methods**

import CloseAllAnswers from '../../../src/components/CloseAnswers/CloseAllAnswers.js';

<CloseAllAnswers />

---

### Document forms are part of what unique collection?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Document forms are part of the document.forms special collection. That's a "named collection": it's both named and ordered. To access the form, we may utilize both the name or index number from the document.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```js
document.forms.my; // the form with name="my"
document.forms[0]; // the first form in the document
```

<p>Any element in the named collection "form.elements" are available when we have a form.</p>
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form name="my">
  <input name="one" value="1" />
  <input name="two" value="2" />
</form>

<script>
  // get the form
  let form = document.forms.my; // <form name="my"> element

  // get the element
  let elem = form.elements.one; // <input name="one"> element

  alert(elem.value); // 1
</script>
```

  </div>

  </div>
  </div>
</details>

---

### How do you handle multiple elements of a form collection with the same name?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> There might be several components with the same name, which is common when using radio buttons and checkboxes. The form.elements[name] is a collection in such a scenario, and these navigation features are independent of tag structure. Form.elements contain all control elements, no matter how deep they are in the form.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form>
  <input type="radio" name="age" value="10" />
  <input type="radio" name="age" value="20" />
</form>

<script>
  let form = document.forms[0];

  let ageElems = form.elements.age;

  alert(ageElems[0]); // [object HTMLInputElement]
</script>
```

  </div>
  </div>
</details>

---

### How do Fieldsets work as subforms inside of a form?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A form may have one or many &#8249;fieldset&#8250; elements inside it. They also have elements property that lists form controls inside them. The HTML &#8249;fieldset&#8250; element gets used to group several controls as well as labels (&#8250;label&#8250;) within a web form. We can access the Fieldset properties via the form.elements property.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<body>
  <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>
      <input name="login" type="text" />
    </fieldset>
  </form>

  <script>
    alert(form.elements.login); // <input name="login">

    let fieldset = form.elements.userFields;
    alert(fieldset); // HTMLFieldSetElement

    // we can access the input by name both from the form and from the fieldset
    alert(fieldset.elements.login == form.elements.login); // true
  </script>
</body>
```

  </div>
  </div>
</details>

---

### Is there a shorter notation other than the form.elements property?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> Yes, there is a shorter notation: we can access the element as form[index/name]. In other words, instead of form.elements.login, we can write form.login. That also works, but there is a minor issue: if we access an element and then change its name, it is still available under the old name (as well as under the new one). However, because we seldom modify the names of form components, this is typically not an issue.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form id="form">
  <input name="login" />
</form>

<script>
  alert(form.elements.login == form.login); // true, the same <input>

  form.login.name = 'username'; // change the name of the input

  // form.elements updated the name:
  alert(form.elements.login); // undefined
  alert(form.elements.username); // input

  // form allows both names: the new one and the old one
  alert(form.username == form.login); // true
</script>
```

  </div>
  </div>
</details>

---

### Can you explain what form backreferencing is in JavaScript?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> The form is available as element.form for any element. So, the form references every element, and all elements reference the form.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<form id="form">
  <input type="text" name="login" />
</form>

<script>
  // form -> element
  let login = form.login;

  // element -> form
  alert(login.form); // HTMLFormElement
</script>
```

  </div>
  </div>
</details>

---

### How can you use JavaScript to access or extract the value of a textarea inside an input?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> You can access the value of a textarea using textarea.value. The specification does not recommend we utilize innerHTML to obtain the value since it only saves the HTML initially on the page, not the current value.
    </div>
  </div>
</details>

---

### To select an option value, what are the three properties we can use to set the selected value(s)?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A &#8249;select&#8250; element has 3 important properties including the select option, value, and selectedIndex properties. The select.options is a collection &#8249;option&#8250; sub-elements. The select.value property is the value of the current selected &#8249;option&#8250;. The select.selectedIndex is the number currently selected &#8249;option&#8250;. They provide three different ways of setting a value for a &#8249;select&#8250;. Find the corresponding &#8249;option&#8250; element (e.g. among select.options) and set its option.selected to true. If we know a new value: set, select.value to the new value. If we know the new option number: set select.selectedIndex to that number.
    </div><br />
  <div><strong className="codeExample">Code Example:</strong><br /><br />

  <div></div>

```html
<select id="select">
  <option value="apple">Apple</option>
  <option value="pear">Pear</option>
  <option value="banana">Banana</option>
</select>

<script>
  // all three lines do the same thing
  select.options[2].selected = true;
  select.selectedIndex = 2;
  select.value = 'banana';
  // please note: options start from zero, so index 2 means the 3rd option.
</script>
```

  </div>
  </div>
</details>

---

### Explain the function and syntax of the new Option constructor?

<details>
  <summary><strong>View Answer:</strong></summary>
  <div>
  <div><strong>Interview Response:</strong> A little-known feature of JavaScript allows you to build option elements with minimum effort. The Option() constructor is responsible for this functionality. The syntax is straightforward:<br/><br/>
  <ul>
  <li>Get a reference to a form element</li>
  <li>Invoke the constructor and connect the resulting object to the form element.</li>
  <li>Pass in the following parameters during instantiation: Step 1: the text displayed on the page [string], Step 2: the value of the control [string], Step 3: if it is the default option [true/false] and whether it is chosen [true/false].</li>
  </ul>  
    </div><br />
  <div><strong>Technical Response:</strong> Using the little-known JavaScript Option () constructor, you may avoid the cumbersome syntax of constructing DOM components. The Option() constructor is used to generate a new HTMLOptionElement. Text is a DOMString representing the element's content, i.e. the displayed text. If we do not supply the text, the value "" (empty string) gets used as the default. The optional value argument is a DOMString representing the HTMLOptionElement's value, i.e. the value attribute of the comparable &#8249;option&#8250;. When we submit the form to the host server, the value of the text gets used as the value. For example, the value of the accompanying &#8249;select&#8250; element if this does not get provided. The defaultSelected argument is a Boolean that sets the chosen attribute value, i.e., this &#8249;option&#8250; results in the default value selected in the &#8249;select&#8250; element when the page initially loads. If this is not specified, the value false is assumed to be the default. We should note that a true value does not force the option to be selected if it is not already selected. The optional selected is a Boolean that determines whether or not the option gets picked; the default is false (not selected). Even if the defaultSelected argument is true, the option does not get selected if it is missing. You may use the Option constructor to generate new selection choices on the fly.
    </div><br />
    <strong>Syntax: </strong> let newOption = new Option(text, value, defaultSelected, selected);<br /><br />
  <div><strong className="codeExample">Code Example 1:</strong><br /><br />

```html
<form>
  <select name="week">
    <option>Monday</option>
    <option>Tuesday</option>
    <option>Wednesday</option>
  </select>
</form>

<script>
  var w = document.forms[0].week;
  w.length = 0;
  var d = [
    { text: 'Thurs', val: 'thurs' },
    { text: 'Friday', val: 'fri' },
    { text: 'Saturday', val: 'sat' },
    { text: 'Sunday', val: 'sun' },
  ];

  for (var i = 0; i <= d.length - 1; i++) {
    w[i] = new Option(d[i].text, d[i].val, false, false);
  }
</script>
```

  <strong className="codeExample">Code Example 2:</strong><br /><br />

  <div></div>

```html
<div id="container">
  <form>
    <label for="name">Framework:</label>
    <input
      type="text"
      id="name"
      placeholder="Enter a framework"
      autocomplete="off"
    />

    <button id="btnAdd">Add</button>

    <label for="list">Framework List:</label>
    <select id="list" name="list" multiple></select>
    <button id="btnRemove">Remove Selected Framework</button>
  </form>
</div>

<script>
  const btnAdd = document.querySelector('#btnAdd');
  const btnRemove = document.querySelector('#btnRemove');
  const sb = document.querySelector('#list');
  const name = document.querySelector('#name');

  btnAdd.onclick = (e) => {
    e.preventDefault();

    // validate the option
    if (name.value == '') {
      alert('Please enter the name.');
      return;
    }
    // create a new option
    const option = new Option(name.value, name.value); // <--
    // add it to the list
    sb.add(option, undefined);

    // reset the value of the input
    name.value = '';
    name.focus();
  };

  // remove selected option
  btnRemove.onclick = (e) => {
    e.preventDefault();

    // save the selected option
    let selected = [];

    for (let i = 0; i < sb.options.length; i++) {
      selected[i] = sb.options[i].selected;
    }

    // remove all selected option
    let index = sb.options.length;
    while (index--) {
      if (selected[index]) {
        sb.remove(index);
      }
    }
  };
</script>
```

  </div>
  </div>
</details>

---
