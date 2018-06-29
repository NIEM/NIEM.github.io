---
  title: Property Definitions
  short: Definitions
  ndr:
    rules:
    - number: 11-23
    - number: 11-24
    - number: 11-25
    - number: 11-26
    - number: 11-27
    - number: 11-28
    - number: 11-34
    - number: 11-35
    - number: 11-36
    - number: 11-37
    - number: 11-38
    - number: 11-39
    - number: 11-40
    sections:
    - number: 11.6
---

The following provides rules and guidance for constructing property definitions.

### Required

All properties must have a definition.

### Human-readable

Definitions are meant to be human-readable.

### Informative

Definitions should provide more information than the terms in the property's name, when possible.

{: .note}
> In some cases, a property name may be so obvious (e.g., `PersonHairColorText`) that attempts to provide synonyms or alternate phrasing would be counterproductive.  A definition does not have to be elaborate if the property name would be obvious to the general public.

### Unique

Each data component definition must be unique from all others and distinguishable in meaning.  No two definitions can be identical in wording or so close in meaning that they could refer to the same data component.

{: .note}
> There is an exception for a property with multiple representations, like various substitutions of an abstract property.  Since each substitution represents the same concept, they may each share the same definition.

### No duplication

Definitions of a part do not need to redefine the whole.

{: .example}
> Definitions for elements like `nc:PersonHairColorText`, `nc:PersonName`, and `nc:PersonAgeMeasure` do not need to each define what a person is.  That should be defined once by element `nc:Person`.

### No type info

Type information should not appear in a property definition

A property definition is intended to describe semantic meaning only and should be decoupled from specific representation or structure.  The representation term of a property and the standard opening phrase of a definition provide enough context to determine if a property is a string, a date, an ID, etc.

{: .tip}
> More specific typing information usually belongs with the types (the structures) rather than the properties (the concepts).  Things like patterns, code values, and the number of characters should usually not be embedded in property definitions.

There may be a few cases where providing such information is essential to the semantics of the property.  In this case, it is permitted.

### Standard opening phrases

Definitions of properties with simple content or designated types should use a standard opening phrase as defined by the NDR.
See the [Reference Table](/reference/concepts/property/modeling/table) for more.

### Begin with "A(n)"

Property definitions almost always begin with an indefinite article (i.e., "a" or "an"), never a definite article (i.e., "the").  This is based on ISO 11179 guidance.

### Follow ISO 11179-4

Definitions must follow [11179-4](http://metadata-standards.org/11179/) requirements, and should follow its recommendations.

## References

{% include ndr-references.html list=page.ndr %}
