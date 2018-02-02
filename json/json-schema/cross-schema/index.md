---
title: JSON Cross-Schema References
---
[JSON Pointer](https://tools.ietf.org/html/rfc6901) provides a way to reference a value inside a JSON  with a URI..
If the URI contains any content before a `#` (pound sign), the reference is a **cross-schema reference** to a value in another document or schema.
In this case, the part of the URI before the `#` provides a URI to the target JSON document or schema. 
The rest of the URI (after the `#`) provides the path to the value starting from the root of the document or schema with each 
sucessive object separated by a `/`. 

If the URI does not contain any content before a `#`, the reference is a **in-schema reference** to a value in the same document or schema.
In this case, the entire URI is the path to the value.

To demonstrate, here is a example JSON schema `xs.schema.json` that will be the target of a **cross-schema reference**:

```json
{%include_relative xs.schema.json %}
```

Here is an example JSON schema including  a **cross-schema reference** from `nc.schmea.json`, a schema in the same directory, to a value in
the target JSON schema using a JSON Pointer:

```json
{%include_relative nc.schema.json %}
```
