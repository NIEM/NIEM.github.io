---
  title: Modeling CSC Types
  short: Modeling
---

- TOC
{:toc}

### Extension

A CSC type must extend either a simple type or another CSC type.

### structures attributes

A CSC type that extends a simple type must also include a reference to `structures:SimpleObjectAttributeGroup`.  This is an attribute group that contains all of the attributes needed to support the NIEM infrastructure.

### Code types

A CSC type that is based on a simple type with enumerations (codes) must have a name that ends with `CodeType`.
