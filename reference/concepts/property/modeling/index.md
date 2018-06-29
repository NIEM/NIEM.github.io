---
  title: Modeling Properties
  links:
  - url: /reference/concepts/property/modeling/names/
  - url: /reference/concepts/property/modeling/definitions/
  - url: /reference/concepts/property/modeling/table/
  ndr:
    rules:
    - number: 7-5
    sections:
    - number: 9.2
    - number: 11.2
---

Information about property names and definitions are provided separately in the pages that follow.  Other rules and guidance for modeling properties are provided below.

## Global

All properties must be declared globally as top-level elements in a schema.  One of the key principles of NIEM is to maximize reuse.  A local property cannot be reused outside of the one type in which it is defined.

## Conformant type

A property type must be NIEM-conformant.

{:.note}
>Only an abstract element may be defined without a type.

## References

{% include ndr-references.html list=page.ndr %}
