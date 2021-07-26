---
title: Augmentations
---

{:toc}
- TOC

Augmentations are extensions (collections of additional properties) added to an object.  In JSON schema, you must
include the augmentation as a property in the definition of the object it extends.

## Schema example defining an augmentation

Here is an example of a NIEM augmentation `j:CaseAugmentation` in JSON schema:

```json
{% include_relative j.schema.json %}
```

## Schema example using an augmentation

Here is an example of another JSON schema with the augmentation extending `nc:CaseType`:

```json
{% include_relative nc.schema.json %}
```

These schemas reference another schema: [xs](xs.schema.json)

## Instance example

Here is a JSON instance of `nc:Case` extended with the augmentation:

```json
{% include_relative augmentation.json %}
```
