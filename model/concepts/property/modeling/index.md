---
  title: Modeling Properties
  links:
  - url: /model/concepts/property/modeling/names/
  - url: /model/concepts/property/modeling/definitions/
  - url: /model/concepts/property/modeling/table/
---

- TOC
{:toc}

Information about property names and definitions are provided separately in the pages that follow.  Other rules and guidance for modeling properties are provided below.

## Global

All properties must be declared globally, as top-level elements in a schema.  One of the key principles of NIEM is to maximize reuse.  A local property cannot be reused outside of the one type in which it is defined.

## Conformant type

A property type must be NIEM-conformant.

Note: An abstract element (only) may be defined without a type.
