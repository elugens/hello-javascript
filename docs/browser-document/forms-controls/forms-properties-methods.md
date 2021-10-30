---
title: Form Properties / Methods
sidebar_position: 1
---

# Form Properties and Methods

**Forms, controls: Form properties and methods**

### What special collection are document forms apart of?

**Interview Answer:** Document forms are members of the special collection document.forms. That is a so-called “named collection”: it is both named and ordered. We can use both the name and the number in the document to get the form.

Example:

```js
document.forms.my; // the form with name="my"
document.forms[0]; // the first form in the document
```

When we have a form, then any element is available in the named collection form.elements.

Example:

```html
<form name="my">
  <input name="one" value="1" />

  <input name="two" value="2" />
</form>

<script>
  // get the form

  let form = document.forms.my; // <form name="my"> element
  // get the element

  let elem = form.elements.one; // <input name="one"> element
  alert(elem.value); // 1
</script>
```

Source: <https://javascript.info/form-elements#navigation-form-and-elements>

### How do you handle multiple elements of a form collection with the same name?

**Interview Answer:** There may be multiple elements with the same name. This is typical with radio buttons and checkboxes. that case, `form.elements[name]` is a collection. These navigation properties do not depend on the tag structure. All control elements, no matter how deep they are in the form, are available in form.elements.

Example:

```html
<form>
  <input type="radio" name="age" value="10" />

  <input type="radio" name="age" value="20" />
</form>

<script>
  let form = document.forms[0];

  let ageElems = form.elements.age;

  alert(ageElems[0]); // [object HTMLInputElement]
</script>
```

Source: <https://javascript.info/form-elements#navigation-form-and-elements>

### How do Fieldsets work as subforms inside of a form?

**Interview Answer:** A form may have one or many `<fieldset>` elements inside it. They also have elements property that lists form controls inside them. The HTML `<fieldset>` element is used to group several controls as well as labels `<label>` within a web form. Fieldset properties can be accessed via the form.elements property.

Example:

```html
<body>
  <form id="form">
    <fieldset name="userFields">
      <legend>info</legend>

      <input name="login" type="text" />
    </fieldset>
  </form>

  <script>
    alert(form.elements.login); // <input name="login">
    let fieldset = form.elements.userFields;

    alert(fieldset); // HTMLFieldSetElement
    // we can get the input by name both from the form and from the fieldset

    alert(fieldset.elements.login == form.elements.login); // true
  </script>
</body>
```

Source: <https://javascript.info/form-elements#navigation-form-and-elements>

### Is there a shorter notation other than the form.elements property?

**Interview Answer:** Yes, there is a shorter notation: we can access the element as `form[index/name]`. In other words, instead of form.elements.login we can write form.login. That also works, but there is a minor issue: if we access an element, and then change its name, then it is still available under the old name (as well as under the new one). That is usually not a problem, however, because we rarely change names of form elements.

Example:

```html
<form id="form">
  <input name="login" />
</form>

<script>
  alert(form.elements.login == form.login); // true, the same <input>
  form.login.name = 'username'; // change the name of the input
  // form.elements updated the name:

  alert(form.elements.login); // undefined
  alert(form.elements.username); // input
  // form allows both names: the new one and the old one

  alert(form.username == form.login); // true
</script>
```

Source: <https://javascript.info/form-elements#navigation-form-and-elements>

### Can you explain what form backreferencing is in JavaScript?

**Interview Answer:** For any element, the form is available as element.form. So, a form references all elements, and elements reference the form.

Example:

```html
<form id="form">
  <input type="text" name="login" />
</form>

<script>
  // form -> element

  let login = form.login;

  // element -> form

  alert(login.form); // HTMLFormElement
</script>
```

Source: <https://javascript.info/form-elements#backreference-element-form>

### How do you access the value of a textarea inside of an input via JS?

**Interview Answer:** You can access the value of a textarea using textarea.value. It is not recommended to access the value using innerHTML, because it stores only the HTML that was initially on the page, not the current value.

Source: <https://javascript.info/form-elements#input-and-textarea>

### To select an option value, what are the three properties we can use to set the selected value(s)?

**Interview Answer:** A `<select>` element has 3 important properties including the select option, value, and selectedIndex properties. The select.options is a collection `<option>` sub-elements. The select.value property is the value of the current selected `<option>`. The select.selectedIndex is the number currently selected `<option>`. They provide three different ways of setting a value for a `<select>`. Find the corresponding `<option>` element (e.g. among select.options) and set its option.selected to true. If we know a new value: set, select.value to the new value. If we know the new option number: set select.selectedIndex to that number.

Example:

```html
<select id="select">
  <option value="apple">Apple</option>

  <option value="pear">Pear</option>

  <option value="banana">Banana</option>
</select>

<script>
  // all three lines do the same thing

  select.options[2].selected = true;

  select.selectedIndex = 2;

  select.value = 'banana';

  // please note: options start from zero, so index 2 means the 3rd option.
</script>
```

Source: <https://javascript.info/form-elements#select-and-option>

### Explain the function and syntax of the new Option constructor?

**Interview Answer:** The little-known JavaScript Option() constructor allows you to avoid the verbose syntax of creating DOM elements. The Option() constructor creates a new HTMLOptionElement. Text is a DOMString representing the content of the element, i.e. the displayed text. If this is not specified, a default value of "" (empty string) is used. The optional value argue is DOMString representing the value of the HTMLOptionElement, i.e. the value attribute of the equivalent `<option>`. If this is not specified, the value of text is used as the value, e.g. for the associated `<select>` element's value when the form is submitted to the server. The defaultSelected parameter is a Boolean that sets the selected attribute value, i.e. so that this `<option>` will be the default value selected in the `<select>` element when the page is first loaded. If this is not specified, a default value of false is used. Note that a value of true does not set the option to selected if it is not already selected. The optional selected is a Boolean that sets the option's selected state; the default is false (not selected). If omitted, even if the defaultSelected argument is true, the option is not selected. Basically, the Option constructor allows you to create new selection options on the fly.

**Syntax:** let newOption = new Option(text, value, defaultSelected, selected);

Example:

```html
<div id="container">
  <form>
    <label for="name">Framework:</label>

    <input
      type="text"
      id="name"
      placeholder="Enter a framework"
      autocomplete="off"
    />

    <button id="btnAdd">Add</button>

    <label for="list">Framework List:</label>

    <select id="list" name="list" multiple></select>

    <button id="btnRemove">Remove Selected Framework</button>
  </form>
</div>

<script>
  const btnAdd = document.querySelector('#btnAdd');

  const btnRemove = document.querySelector('#btnRemove');

  const sb = document.querySelector('#list');

  const name = document.querySelector('#name');

  btnAdd.onclick = (e) => {
    e.preventDefault();

    // validate the option

    if (name.value == '') {
      alert('Please enter the name.');

      return;
    }

    // create a new option

    const option = new Option(name.value, name.value);

    // add it to the list

    sb.add(option, undefined);

    // reset the value of the input

    name.value = '';

    name.focus();
  };

  // remove selected option

  btnRemove.onclick = (e) => {
    e.preventDefault();

    // save the selected option

    let selected = [];

    for (let i = 0; i < sb.options.length; i++) {
      selected[i] = sb.options[i].selected;
    }

    // remove all selected option

    let index = sb.options.length;

    while (index--) {
      if (selected[index]) {
        sb.remove(index);
      }
    }
  };
</script>
```

Source: <https://javascript.info/form-elements#select-and-option>
