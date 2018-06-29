---
  title: Attributes
  icon: fa-at
  description: An attribute is a property that may carry a simple value only.
  links:
  - url: /reference/concepts/property/attribute/modeling/
  - url: /reference/concepts/property/attribute/xml/
  - url: /reference/concepts/property/attribute/json/
---

In NIEM, there are two basic kinds of properties: elements and attributes.

**Attributes** can only ever be used to represent simple content (a value).  They do not exist independently; they must be carried by an element.

**Elements** can be used to represent simple content (a value) or complex content (an object).  In either case, an element can also carry attributes.

Example:

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

This example lists 5 elements (each beginning with `nc:Person`) and 2 attributes (`structures:id` and `nc:personNameInitialIndicator`).

Attributes cannot be extended, substituted, augmented, or have multiple occurrences.  Additionally, because NIEM uses attributes for referencing and linking data, metadata, and security markup, elements should be used over attributes whenever possible in order to support these features.  Over 99% of the properties in NIEM are elements.

<!--more-->

## When to use

Attributes may be defined sparingly, when it makes sense for something to be tightly-coupled with an element and will not need the other features that elements enable.  This decision may come down to a judgment call.

In the example above, it makes sense for the property representing the name initial indicator to be an attribute.  There never needs to be more than one value per name, it should not need to be locally extended, it should not need to carry metadata or references.
