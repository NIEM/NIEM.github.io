---
title: Roles
---
Roles are temporary functions played by objects (e.g. the person that is the arresting officer or the subject in a law enforcement case).

Each role references the base object with the `@id` keyword from [JSON-LD](../../json-ld).

Here is an example of a NIEM role `j:ArrestOfficial` in JSON schema:

```json
{%include_relative j.schema.json %}
```
This schema references other schemas: [nc](nc.schema.json) and [xs](xs.schema.json)

Here is a JSON instance of that role:

```json
{%include_relative roles.json %}
```

