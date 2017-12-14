---
  title: Simple Types
  icon: fa-square
  description: A simple type is a structure that represents a simple value only.
  links:
    - url: /model/concepts/type/simple/modeling/
    - url: /model/concepts/type/simple/xml/
    - url: /model/concepts/type/simple/json/
  todo: Lists and unions
  future:
    - url: /model/concepts/type/simple/list/
      group: kind
    - url: /model/concepts/type/simple/union/
      group: kind
---

{% include_relative intro/index.md %}

## Provided types

Common simple types provided by XML include `xs:string`, `xs:token`, `xs:date`, `xs:date-time`, `xs:integer`, `xs:decimal`, and `xs:boolean`.

Simple types provided by JSON are `string`, `integer`, `decimal`, and `boolean`.  Dates are simply strings in JSON, but if they follow the format set by ISO 8601, they can be converted into dates in JavaScript.

<!-- ## Other kinds

In addition to a simple type with facets, NIEM supports two additional kinds of simple types:

{% assign links = page.links | where: "group", "kind" %}
{% include icon-list.html links=links %} -->
