---
title: "An example of JSON-LD expansion"
---

This example is available at [the JSON-LD Playground](http://tinyurl.com/ycws5yz7).

When the JSON data...

```json
{% include_relative qname-terms.json %}
```

...is processed using the
[JSON-LD expansion algorithm](https://json-ld.org/spec/latest/json-ld-api/#expansion),
against the following JSON context...
```json
{% include_relative qname-context.json %}
```

...it yields the expanded JSON data...

```json
{% include_relative expanded.json %}
```
