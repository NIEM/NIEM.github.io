---
  title: Modeling Types
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 7-5
    - number: 9-1
    - number: 9-2
    - number: 9-3
    - number: 9-4
    - number: 9-5
    - number: 9-6
    - number: 9-7
    - number: 9-8
    - number: 9-9
    - number: 10-44
    - number: 10-45
    - number: 10-46
    - number: 10-47
    - number: 10-48
    - number: 10-50
    - number: 10-51
    - number: 10-54
    - number: 10-55
    - number: 10-56
    - number: 10-60
    - number: 10-61
    - number: 10-62
    - number: 10-63
    - number: 11-1
    - number: 11-2
    - number: 11-3
    - number: 11-24
    - number: 11-25
    - number: 11-26
    - number: 11-27
    - number: 11-28
    - number: 11-29
    - number: 11-30
    sections:
    - number: 9.1
    - number: 11.1
  - spec:
    version: "4.0"
    rules:
    - number: 7-5
    - number: 9-1
    - number: 9-2
    - number: 9-3
    - number: 9-4
    - number: 9-5
    - number: 9-6
    - number: 9-7
    - number: 9-8
    - number: 9-9
    - number: 10-44
    - number: 10-45
    - number: 10-46
    - number: 10-47
    - number: 10-49
    - number: 10-50
    - number: 10-53
    - number: 10-54
    - number: 10-55
    - number: 10-59
    - number: 10-60
    - number: 10-61
    - number: 10-62
    - number: 11-1
    - number: 11-2
    - number: 11-23
    - number: 11-24
    - number: 11-25
    - number: 11-26
    - number: 11-27
    - number: 11-28
    sections:
    - number: 9.1
    - number: 11.1
---

- TOC
{:toc}

The following are rules and guidelines that apply to all types.

### Global

All types must be defined globally, as a top-level component of a schema.  This provides for maximum reuse.

### No anonymous types

All types must be assigned names.  Similar to the rule about types being global, this ensures maximum reuse.

### Representation Term

The name of a type must end with the term "Type".

### Definition required

Definitions are required for all types.

### Standard opening phrase

A type definition should begin with "A data type for ".

Since it is often the case that a type and an element of that type can be defined with identical or similar words (for example, Person and PersonType), it is a NIEM best practice to begin a type definition with the phrase "A data type for ..." This ensures that the definition for the element and its associated type are easily distinguishable.

## References

See additional guidance for [names](../../property/modeling/names/){:target="_blank"} and [definitions](../../property/modeling/definitions/){:target="_blank"}.

{% include ndr-references.html list=page.ndr %}
