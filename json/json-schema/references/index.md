---
title: JSON References
---
In a JSON schema, a `$ref` keyword is a [JSON Pointer](https://tools.ietf.org/html/rfc6901) to a schema, or a type or property in a schema.

A JSON pointer takes the form of *A*`#`*B* in which:
* *A* is the relative path from the current schema to a target schema. If *A* is empty, the reference is to a type or property in the same schema, an **in-schema reference**.
Otherwise, the reference is to a different schema, a **cross-schema reference**.
* *B* is the complete path from the root of the schema to a type or property in the schema. If `#` in not included or *B* is empty, the reference is to an entire schema.

Both *A* and *B* consist of successive components of the path (folder, type or property names) each separated by a `/`.

To demonstrate, here is a example JSON schema `xs.schema.json` that will be the target of **cross-schema references**:

```json
{%include_relative xs.schema.json %}
```

Here is an example JSON schema `ns.schema.json` including **cross-schema references** to types in `xs.schema.json`, a schema in the same directory, and **in-schema references** to
types and properties in the same schema:

```json
{%include_relative nc.schema.json %}
```
