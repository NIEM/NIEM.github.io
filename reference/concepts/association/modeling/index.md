---
  title: Modeling Associations
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 10-21
    - number: 10-22
    - number: 11-34
    - number: 11-43
    sections:
    - number: 10.3
  - spec:
    version: "4.0"
    rules:
    - number: 10-21
    - number: 10-22
    - number: 11-32
    - number: 11-41
    sections:
    - number: 10.3
---

- TOC
{:toc}

## Association element

### Name

The name of an association element must end with the representation term "Association".

### Definition

The definition of an association element should begin with the phrase:

```
An (optional adjectives) (relationship|association)...
```

### Type

The type of an association element must be an association type.

## Association type

### Name

The name of an association type must end with the representation term "AssociationType".

### Definition

The definition of an association should begin with the phrase:

### Parent type

An association type must extend `structures:AssociationType` or a type derived from it.

Typically, association types extend `nc:AssociationType`, which meets this requirement plus adds properties to capture the beginning and end date of the association.

```
A data type for (a relationship|an association)...
```

## References

{% include ndr-references.html list=page.ndr %}
