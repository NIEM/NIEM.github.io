---
  title: Modeling CSC Types
  short: Modeling
  ndr:
    rules:
    - number: 9-25
    - number: 9-26
    - number: 9-27
    - number: 9-29
    - number: 9-30
    - number: 9-33
    - number: 9-35
    - number: 9-71
    - number: 10-20
    - number: 11-10
    - number: 11-19
    - number: 11-21
    - number: 11-22
    - number: 11-44
---

- TOC
{:toc}

### Extension

A CSC type must extend either a simple type or another CSC type.

### structures attributes

A CSC type that extends a simple type must also include a reference to `structures:SimpleObjectAttributeGroup`.  This is an attribute group that contains all of the attributes needed to support the NIEM infrastructure.

### Code types

A CSC type that is based on a simple type with enumerations (codes) must have a name that ends with `CodeType`.

## References

{% include ndr-references.html list=page.ndr %}
