---
  title: Local Terminology Modeling
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 10-52
    - number: 10-53
    - number: 10-76
    - number: 10-77
    sections:
    - number: 10.9.2
  - spec:
    version: "4.0"
    rules:
    - number: 10-51
    - number: 10-52
    - number: 10-75
    - number: 10-76
    sections:
    - number: 10.9.2
---

- TOC
{:toc}

## Purpose

Local terminology is provided to improve the understanding of terms by those who do not share the same organization or subject matter background.

## Scope

Local terminology declarations apply to the entire namespace in which they are defined.

This means that:

- A term that is used in multiple properties and/or types in a namespace is only defined once.
- Each namespace must define its own terminology - terminology from Core or other domains cannot be imported or reused.

## Literal or definition

Each local term must have a literal translation or a definition.

## References

{% include ndr-references.html list=page.ndr %}
