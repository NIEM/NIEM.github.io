---
  title: Attributes
  icon: fa-at
  description: An attribute is a property that may carry a simple value only.
  links:
  - url: /model/concepts/property/attribute/modeling/
  - url: /model/concepts/property/attribute/xml/
  - url: /model/concepts/property/attribute/json/
---

- TOC
{:toc}

{% include_relative intro/index.md %}

## When to use

Attributes may be defined sparingly, when it makes sense for something to be tightly-coupled with an element and will not need the other features that elements enable.  This decision may come down to a judgment call.

In the example above, it makes sense for the property representing the name initial indicator to be an attribute.  There never needs to be more than one value per name, it should not need to be locally extended, it should not need to carry metadata or references.
