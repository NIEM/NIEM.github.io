---
  title: References
  description: A reference is used to link to content defined elsewhere.
  icon: fa-share
  links:
  - url: /reference/concepts/reference/modeling/
  - url: /reference/concepts/reference/xml/
  - url: /reference/concepts/reference/json/
---

References are used in instances or messages to point to content defined elsewhere.

A common reason to use references is to avoid repeating data.  In addition to avoiding duplication, it clearly links multiple occurrences to the same object.  Just because two properties have the same content (e.g., the same name), they are not necessarily the same.

In order to use references, a unique ID must first be assigned to where the content is defined.  That ID can then be references elsewhere.  Almost all properties in NIEM (those with complex types) carry attributes that let you define an ID or a reference.

<!--more-->

## Linked Data

In addition to referencing content defined in the same instance document, it is also possible to reference content defined outside of the instance document.  Resources defined elsewhere may be referenced by a NIEM property via a uniform resource identifier (URI).

This capability was introduced in NIEM 4.0 in support of Linked Data and the semantic web.
