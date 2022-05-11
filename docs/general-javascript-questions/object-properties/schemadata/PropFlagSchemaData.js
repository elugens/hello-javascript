const StructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are property attributes/flags that allow special access to an object?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In JavaScript, Objects have three special properties called attributes or flags. The object property attributes/flags include writeable, enumerable, and configurable flags. All three special attributes are Boolean types requiring a setting to be true or false. The writable property attribute, if true, the value can be changed, and otherwise, it is read-only. If this property appears during the enumeration of the properties on the related object. The enumerable object attribute is true. The configurable property flag, if true, the property can be deleted, and these attributes can be modified; otherwise, not. All three of these special object attributes are set to false by default (According to the MDN), but when you invoke getOwnPropertyDescriptor it returns true (utterly confusing).',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain the function and syntax of the Object.getOwnPropertyDescriptor method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly presents on an object and not in the object's prototype chain). The object returned is mutable but mutating the object does not affect the original property's configuration. The obj is the object you are acting on, and the property name is the property you are attempting to extract the description of programmatically.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a method to define property attributes, writable, enumerable, and configurable in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we can use the Object.defineProperty() method to change or set the property attributes.',
      },
    },
    {
      '@type': 'Question',
      name: 'When you are creating a method for an object. Is there a way to restrict the enumeration of the newly created object method?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, you can define the property directly and set the property's enumerable attribute to false.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a way to prevent changes in property flags and their deletion while allowing changes to their value?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use the Object.defineProperty() method and set the configurable property flag to false.',
      },
    },
    {
      '@type': 'Question',
      name: 'Besides the seal() built-in JavaScript method, is there a way to seal an object property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can use the Object.defineProperty() method and set configurable and writable property flags to false. This approach ensures that the object cannot be overwritten or re-configured. We should note that once making a property non-configurable is a one-way road, and we cannot change it back with defineProperty.',
      },
    },
    {
      '@type': 'Question',
      name: 'If you want to define many properties at once in an object. What built-in JavaScript method can you use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The correct built-in JavaScript object method that we use to define multiple properties is the Object.defineProperties() method.',
      },
    },
    {
      '@type': 'Question',
      name: 'Explain, the function and syntax of the Object.preventExtension(obj) method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An object is extensible if new properties get added to it. The Object.preventExtensions method marks an object as no longer extensible so that it does not properties beyond the ones it had when it gets marked as non-extensible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.seal(obj) method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, objects are extensible, meaning new properties get added to them. Sealing an object prevents adding new properties and marks all existing properties as non-configurable. This behavior has the effect of making the set of properties on the object fixed. Making all properties non-configurable also prevents them from being converted from data properties to accessor properties and vice versa. Still, it does not prevent the values of data properties from being changed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.freeze(obj) method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.freeze() method freezes an object. It is impossible to modify a frozen object. When an object is frozen, it is impossible to add new properties, delete properties, change the enumerability, configurability, or writability of its properties, or change property values. Furthermore, freezing an item prevents its prototype from being modified. The item that was passed in is returned by Object.freeze().',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between freeze and seal in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use both freeze and seal to create non-extensible objects, but there are many differences between them. Object.seal() allows changes to the existing properties of an object while Object.freeze() does not. Object.freeze() makes an object immune to everything; even little changes cannot get made. Object.seal() prevents from deletion of existing properties but cannot prevent them from external changes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.isExtensible() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it). The Object.isExtensible(obj) method returns a Boolean indicating whether the given object is extensible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.isSealed() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.isSealed() method determines if an object gets sealed or not. The Object.isSealed(obj) method returns a Boolean true or false, indicating whether the given object remains sealed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you explain the function and syntax of the Object.isFrozen() method in JavaScript?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Object.isFrozen() determines if an object is frozen and returns a Boolean indicating whether the given object is frozen. An object is frozen if and only if it is not extensible, all its properties are non-configurable, and all its data properties (that is, properties which are not accessor properties with getter or setter components) are non-writable.',
      },
    },
  ],
};

export default StructuredData;
