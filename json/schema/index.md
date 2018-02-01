---
title: JSON Schema
---
[JSON schema](https://json-schema.org) provides  a JSON vocabulary for defining and validating 
JSON **instances**,  Each JSON schema defines:
* Defined **types** that are based on one of 6 **primitive types** (`null`,`boolean`,`object`,`array`,`number` or `string`), and
* **properties**that are based on a **primitive type** or a defined **type**.

An example JSON schema to request a court hearing is:

```json
{%include_relative schema.json %}
```

An example of a request based on the schema is:

```json
{%include_relative instance.json %}
```
