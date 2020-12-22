---
  title: Modeling Representations
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 10-42
    - number: 10-43
    sections:
    - number: 10.7
  - spec:
    version: "4.0"
    rules:
    - number: 10-42
    - number: 10-43
    sections:
    - number: 10.7
---

- TOC
{:toc}

## Type

A representation pattern is modeled by a type that contains an abstract representation element and one or more additional properties.

## Representation Element

### Abstract

The representation element must be abstract.  This allows for substitution by the alternate representations.

### Name

The name of the representation element must end with "Representation".

## References

{% include ndr-references.html list=page.ndr %}
