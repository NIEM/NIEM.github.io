---
title: JSON-LD identifiers
---

One of the ways NIEM supports data reuse is through object references which eliminate
the need to describe the same object multiple times. JSON-LD supports references
to objects with a reserved key `@id` which can be used either as an object identifier
or a reference to an object identifier.  The value of `@id` must be a string.

For example, a person object may identified as:

```json
{%include_relative object.json %}
```

A reference to that person object might be:

```json
{%include_relative reference.json %}
```
