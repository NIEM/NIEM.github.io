---
  title: Modeling References
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 12-3
    - number: 12-4
    - number: 12-5
    - number: 12-6
    - number: 12-7
    - number: 12-8
    - number: 12-9
    sections:
    - number: 12.2
  - spec:
    version: "4.0"
    rules:
    - number: 12-3
    - number: 12-4
    - number: 12-5
    - number: 12-6
    - number: 12-7
    - number: 12-8
    - number: 12-9
    sections:
    - number: 12.2
---

- TOC
{:toc}

References are handled differently in the NIEM XML and NIEM JSON representations.  Please see these sections for more guidance.

## Do not recreate

Note that in either representation, NIEM already uses or provides the infrastructure needed to create and reference identifiers.  This functionality should be used as is for consistency; custom id / referencing mechanisms should not be added.

## No type validation

References in XML and JSON are not type-checked via standard validation.  This means that it will be possible to provide references to incompatible content, such as an identifier for a vehicle element when an identifier for a person element was expected.

This lack of validation does allow for greater flexibility in defining references.  It is not necessary for one element to link to another element of the same name.  Though not enforcement by validation, an element of a given type may link to...

- a different element with the same type
- an element with a type derived from or a parent of the given type
- an element that represents a role or base object of the given type

## References

{% include ndr-references.html list=page.ndr %}
