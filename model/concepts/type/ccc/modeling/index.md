---
  title: Modeling CCC Types
  short: Modeling
  ndr:
    rules:
    - number: 9-25
    - number: 9-26
    - number: 9-27
    - number: 9-28
    - number: 9-29
    - number: 9-30
    - number: 9-31
    - number: 9-32
    - number: 9-34
    - number: 9-35
    - number: 9-60
    - number: 9-61
    - number: 9-62
    - number: 9-63
    - number: 9-64
    - number: 9-65
    - number: 9-66
    - number: 9-67
    - number: 9-68
    - number: 9-69
    - number: 9-70
    - number: 9-71
    - number: 10-1
    - number: 10-2
    - number: 10-23
    - number: 10-24
    - number: 11-19
    - number: 11-20
    - number: 11-21
    - number: 11-22
    - number: 11-44
    sections:
    - number: 9.1
    - number: 11.1
---

- TOC
{:toc}

### Name

The name of a type must end with the representation term "Type".

### Parent

CCC types may only extend other CCC types.

### Default parent

For a type that is not metadata, an association, or an augmentation, the default parent type if none other is provided should be `structures:ObjectType`.

### Sequence

In reference schemas, a CCC type's elements must be represented as a sequence, rather than a choice.

### Default cardinality

The default usage of properties in a type from a NIEM release should be optional and over-inclusive.  In XML, this would be represented as `minOccurs="0"` and `maxOccurs="0"`.

Individual information exchanges can and often should have very precise cardinality requirements.  Because these vary across different use cases, and because cardinality restrictions can be tightened but not loosened in a subset, cardinality should be set as flexibly as possible in the release schemas.

### References

See additional guidance for [names](../../../property/modeling/names/){:target="_blank"} and [definitions](../../../property/modeling/definitions/){:target="_blank"}.

{% include ndr-references.html list=page.ndr %}
