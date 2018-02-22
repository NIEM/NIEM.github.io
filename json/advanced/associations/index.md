---
title: Associations
---
Associations are relationships between objects.
Each association references the associated objects with the `@id` keyword from [JSON-LD](../../json-ld).

Here is an example of a NIEM association `j:OffenseLocationAssociation` in JSON schema:

```json
{%include_relative j.schema.json %}
```
This schema references 2 other schemas: [nc](nc.schema.json) and [xs](xs.schema.json)

Here is a JSON instance of that association:

```json
{%include_relative association.json %}
```

