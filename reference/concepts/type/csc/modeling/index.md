---
  title: Modeling CSC Types
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
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
    - number: 11-11
    - number: 11-20
    - number: 11-22
    - number: 11-23
    - number: 11-46
  - spec:
    version: "4.0"
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

### Extension

A CSC type must extend either a simple type or another CSC type.

### Structures attributes

A CSC type that extends a simple type must also include a reference to `structures:SimpleObjectAttributeGroup`.  This is an attribute group that contains all of the attributes needed to support the NIEM infrastructure.

### Code types

A CSC type that is based on a simple type with enumerations (codes) must have a name that ends with `CodeType`.

## References

See additional guidance for [names](../../../property/modeling/names/){:target="_blank"} and [definitions](../../../property/modeling/definitions/){:target="_blank"}.

{% include ndr-references.html list=page.ndr %}
