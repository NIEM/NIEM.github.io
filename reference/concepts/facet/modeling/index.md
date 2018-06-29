---
  title: Modeling Facets
  short: Modeling
  ndr:
    rules:
    - number: 9-14
    - number: 9-13
    - number: 10-17
    - number: 10-18
    - number: 11-7
    - number: 11-8
    sections:
    - number: 11.1.2.3
---

## Basics

Facets do not exist independently.  They are defined as part of the simple type that they constrain.

- Each facet will have a kind.
- Each facet will have a value.
- Enumeration facets must have a definition.

{: .example}
>A simple type that defines month codes will declare 12 facets:
>
>- The facet kinds will each be **enumeration**.
>- The facet values will be **JAN**, **FEB**, **MAR**, etc.
>- The facet definitions will be **January**, **February**, **March**, etc.

{: .tip}
> Keep in mind that overly-restrictive facets limit reusability, particularly in NIEM release schemas.  For example, facets that restrict a string to the number of characters allowed in a corresponding database field may limit other users with different systems.

## Simple type names

A simple type declares a facet:

- If the type contains enumerations, the name of the type must end with `CodeSimpleType`.
- All other simple types must have names that end with with `SimpleType`.

## References

{% include ndr-references.html list=page.ndr %}
