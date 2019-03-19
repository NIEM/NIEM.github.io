---
  title: Simple Types
  icon: fa-square
  description: A simple type is a structure that represents a simple value only.
  links:
    - url: /reference/concepts/type/simple/modeling/
    - url: /reference/concepts/type/simple/xml/
    - url: /reference/concepts/type/simple/json/
    - url: /reference/concepts/type/simple/list/
      group: kind
    - url: /reference/concepts/type/simple/union/
      group: kind
---

A simple type is a structure that represents a simple value only.

Simple types are data structures like strings, numbers, and booleans.  They can also be customized with [facets](../../facet) so that only a certain range of numbers, or a certain set of codes, for example, are allowed.

Simple types can be used in two ways in the model:

- As the type of [attributes](../../property/attribute), which by definition cannot have a complex type.
- As the base of corresponding [complex types with simple content (CSCs)](../csc), which can be assigned to elements.

{: .example}
>
>- Core defines attribute `personNameInitialIndicator`.  Its type is a boolean - a simple type.
>- Core defines simple type `AddressCategoryCodeSimpleType`, which constrains a string down to a few possible codes, like `residential` and `business`.

<!--more-->

## Provided types

Common simple types provided by XML include `xs:string`, `xs:token`, `xs:date`, `xs:date-time`, `xs:integer`, `xs:decimal`, and `xs:boolean`.

Simple types provided by JSON are `string`, `integer`, `decimal`, and `boolean`.  Dates are simply strings in JSON, but if they follow the format set by ISO 8601, they can be converted into dates in JavaScript.

## Other kinds

In addition to a simple type with facets, NIEM supports two additional kinds of simple types:

{% assign links = page.links | where: "group", "kind" %}
{% include icon-list.html links=links %}
