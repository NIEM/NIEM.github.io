---
  title: Modeling Elements
  short: Modeling
  ndr:
    rules:
    - number: 9-36
    - number: 9-37
    - number: 9-38
    - number: 9-39
    - number: 9-40
    - number: 9-41
    - number: 9-42
    - number: 9-43
    - number: 9-44
    - number: 9-45
    - number: 9-46
    - number: 9-47
    - number: 9-72
    - number: 9-73
    - number: 9-74
    - number: 10-19
    - number: 10-44
    - number: 10-45
    - number: 10-46
    - number: 10-47
    - number: 10-49
    - number: 10-50
    - number: 10-53
    - number: 10-54
    - number: 10-55
    - number: 10-56
    - number: 10-57
    - number: 10-58
    - number: 10-59
    - number: 10-60
    - number: 10-61
    - number: 10-62
    - number: 10-63
    - number: 10-64
    - number: 10-65
    - number: 11-11
    - number: 11-12
    - number: 11-13
    - number: 11-14
    - number: 11-15
    - number: 11-16
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

## References

{% include ndr-references.html list=page.ndr %}
