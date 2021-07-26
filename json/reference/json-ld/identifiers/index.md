---
title: JSON-LD identifiers
---

One of the ways NIEM supports data reuse is through object references which eliminate
the need to describe the same object multiple times. JSON-LD supports references
to objects with a reserved key `@id` which can be used either as an object identifier
or a reference to an object identifier.  The value of `@id` must be a string.

For example, a person object may described and identified as "P01" as follows:

```json
{% include_relative object.json %}
```

An role object referencing that person object would be:

```json
{% include_relative reference.json %}
```
