---
  title: Concepts
  next: Namespace
  nextlink: namespace
---

- TOC
{:toc}

## The Basics

Fundamentally, a NIEM release consists of a set of namespaces, each of which define properties and types (referred to more generally as components).  An IEPD reuses components from a release that meet its requirements, and creates new properties and types in local namespaces as needed.  These namespaces, properties, and types are basic building blocks of NIEM.

### Namespaces

{% include_relative namespace/intro.md %}

[more...](namespace)

### Properties

Properties may be more commonly known as as elements, attributes, keys, and/or fields.  They define specific semantics and appear in exchanges as the tag or field names, but they have no inherent structure without a type.

> An example of a property is `PersonBirthDate`.  The name itself conveys the concept it represents, but on its own, any date format - or any value at all - would be possible.

<!-- [more...](property) -->

### Types

Types define structures - the allowable set of values.  They tend to be less specific than properties, and that is by design.  It increases reusability.

> Rather than creating a `PersonBirthDateType` to define a specific date format, a more generic `DateType` is created and reused by multiple properties.

Pairing a property (a specific concept) with a type (the set of allowable values) creates a component with both clear semantics and a well-defined structure.

Types can define complex or simple content.  Complex content defines a set of sub-properties, like a type defining a person containing name, birth date, and address properties.  Simple content defines a single value, like a string, date, number, or boolean.

<!-- [more...](type) -->

### Facets

{% include_relative facet/intro.md %}

[more...](facet)

## Advanced and NIEM-specific concepts

In addition to the basic concepts described above, NIEM defines additional concepts to reflect its conceptual model, improve reusability, and support well-defined information exchanges.

### Adapters

{% include_relative adapter/intro.md %}

[more...](adapter)

### Associations

Associations are relationships between properties.  An association may have additional characteristics that further describe the relationship.

> A marriage can be an association between two people, with additional characteristics like marriage date.

<!-- [more...](association) -->

### Augmentations

{% include_relative augmentation/intro.md %}

[more...](augmentation)

### Local Terminology

{% include_relative local-term/intro.md %}

[more...](local-term)

### Metadata

{% include_relative metadata/intro.md %}

[more...](metadata)

### References

References are used in instances or messages to point to content defined elsewhere.

A common reason to use references is to avoid repeating data.  In addition to avoiding duplication, it clearly links multiple occurrences to the same object.  Just because two properties have the same content (e.g., the same name), they are not necessarily the same.

In order to use references, a unique ID must first be assigned to where the content is defined.  That ID can then be references elsewhere.  Almost all properties in NIEM (those with complex types) carry attributes that let you define an ID or a reference.

<!-- [more...](reference) -->

<!-- ### Roles

A role is a function or responsibility of someone and/or something.

Like augmentations, roles are implemented without type extension due to the limitations of single inheritance.  A type may be the role of 

[more...](role) -->
