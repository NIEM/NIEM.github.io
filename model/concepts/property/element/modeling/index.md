---
  title: Modeling Elements
  short: Modeling
---

- TOC
{:toc}

In addition to the general modeling rules and guidance provided for properties, the following applies specifically to elements:

### Complex Type

An elements with a type must have a complex type.

All complex types in NIEM eventually derive from `structures:ObjectType` or a similar type in the NIEM `structures` namespace.  These types contain attributes that enable NIEM elements to reference to other elements, support linked data, define metadata, and provide security markup.  As these features are not possible with simple types, an element is required to have a complex type.

Note: An abstract element may be defined without a type.

### Nillable

Elements in a reference schema must allow a nil value.  This is needed to support NIEM's [referencing mechanism](../../../reference).
