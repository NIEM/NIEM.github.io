---
  title: Modeling Types
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
