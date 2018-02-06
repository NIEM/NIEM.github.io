---
title: Augmentations
---
Augmentations are extensions (collections of additional properties) added to an object.  In JSON schema, you must
include the augmentation as a property in the definition of the object it extends.

Here is an example of a NIEM augmentation `j:CaseAugmentation` in JSON schema:

```json
{%include_relative j.schema.json %}
```

Here is an example of another JSON schema with the augmentation extending`nc:CaseType`:

```json
{%include_relative nc.schema.json %}
```

Here is a JSON instance of `nc:Case` extended with the augmentation:

```json
{%include_relative augmentation.json %}
```
