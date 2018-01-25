---
  title: Modeling CCC Types
  short: Modeling
---

- TOC
{:toc}

### Parent

CCC types may only extend other CCC types.

### Default parent

For a type that is not metadata, an association, or an augmentation, the default parent type if none other is provided should be `structures:ObjectType`.

### Sequence

In reference schemas, a CCC type's elements must be represented as a sequence, rather than a choice.
