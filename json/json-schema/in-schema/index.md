---
title: JSON In-Schema References
---
The `$id` keyword in a JSON schema definition declares a unique identifier for the including object 
OR provides a base URL against which `$ref` URIs are resolved.

The `$ref` keyword in a JSON schema definition references another type or property definition.
References to definitions in the same schema are **in-schema references** and consist simply of the path to the object being referenced.
References to definitions in another schema are **cross-schema references** and take the form of a [JSON pointer](../cross-schema)



Here is an example of an in-schema reference within a JSON schema using the `$ref` keyword:

```json
{%include_relative reference.schema.json %}
```

Note that the `$id` keyword defines a base URL for all objects defined in the schema. 

