---
  title: Types
  icon: fa-sitemap
  description: A type represents a data structure that defines a set of allowable values.
  links:
    - url: /reference/concepts/type/ccc/
    - url: /reference/concepts/type/csc/
    - url: /reference/concepts/type/simple/
  redirect_from: /reference/concepts/type/modeling/
---

A type defines a structure - an allowable set of values.  A type might describe a simple value (e.g., a string, a number) or a complex object (e.g., `PersonType`).

{:.example}
>
>- A type for a person's last name property might be a string.
>- A type for an address property might represent an object, with its own set of properties for street, city, state, and zip.

{:toc}
- TOC

<!--more-->

Types tend to be less specific than properties. That is by design in order to increase reusability.

{: .example}
> The properties `nc:PersonBirthDate`, `nc:ActivityDate`, and `it:ItineraryDepartureDate` all have different semantic meanings but can each reuse the same `nc:DateType` type.

## Kinds of types

There are three fundamental representations for a NIEM type.  This list corresponds directly with XML type styles.  NIEM defines corresponding representations of these types for JSON, which is structured differently.

{% include icon-list.html links=page.links %}

## Modeling guidance

The following are rules and guidelines that apply to all types.

Please see additional guidance from the Property section for [naming](../property/#naming) and [definitions](../property/#definitions).

### Types must be global

All types must be defined globally, as a top-level component of a schema.  This provides for maximum reuse.

### No anonymous types

All types must be assigned names.  Similar to the rule about types being global, this ensures maximum reuse.

### Representation term "Type"

The name of a type must end with the term "Type".

### Definition required

Definitions are required for all types.

### Standard opening phrase

A type definition should begin with "A data type for ".

Since it is often the case that a type and an element of that type can be defined with identical or similar words (for example, Person and PersonType), it is a NIEM best practice to begin a type definition with the phrase "A data type for ..." This ensures that the definition for the element and its associated type are easily distinguishable.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.type %}
