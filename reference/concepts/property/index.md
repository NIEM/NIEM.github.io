---
  title: Properties
  icon: fa-lightbulb-o
  description: A property represents a concept, idea, or thing.
  links:
    - url: /reference/concepts/property/modeling/
    - url: /reference/concepts/property/element/
    - url: /reference/concepts/property/abstract/
    - url: /reference/concepts/property/substitutable/
    - url: /reference/concepts/property/attribute/
---

A property represents a concept, idea, or thing.  It defines specific semantics and appears in exchanges as the tag or label for a field.

Properties may be more commonly known as as elements, attributes, fields, tags, keys, or keywords.

{: .example}
> One of the properties defined in Core is `PersonBirthDate`.  It represents a person's birthday and will carry that value in an exchange.

On its own, a property has meaning but no inherent structure.

{: .example}
>
> Without a type, any kind of value could be provided for property `PersonBirthDate` above, like the following:
>- 06/30/1950
>- 1950-06-30
>- June 30th, 1950
>- green (without a type, any value is valid)

A property must have an assigned type in order to have both clear semantics and a well-defined structure.

<!--more-->

## Kinds

In NIEM, there are two basic kinds of properties: elements and attributes.

**Attributes** can only ever be used to represent simple content (a value).  They do not exist independently; they must be carried by an element.

**Elements** can be used to represent simple content (a value) or complex content (an object).  In either case, an element can also carry attributes.

{:.example}
>This example lists 5 elements (each beginning with `nc:Person`) and 2 attributes (`structures:id` and `nc:personNameInitialIndicator`).
>```xml
><nc:Person>
>  <nc:PersonName structures:id="a123">
>    <nc:PersonGivenName>John</nc:PersonGivenName>
>    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
>    <nc:PersonSurName>Smith</nc:PersonSurName>
>  </nc:PersonName>
></nc:Person>
>```

Attributes cannot be extended, substituted, augmented, or have multiple occurrences.  Additionally, because NIEM uses attributes for referencing and linking data, metadata, and security markup, elements should be used over attributes whenever possible in order to support these features.  Over 99% of the properties in NIEM are elements.
