---
  title: Codes / Facets
  icon: fa-list
  links:
    - url: /reference/concepts/facet/modeling/
    - url: /reference/concepts/facet/xml/
    - url: /reference/concepts/facet/json/
  description: A facet is a constraint on a simple type that limits the set of allowable values.
---

Facets are additional constraints that may be defined on simple types (like strings or numbers) to limit the allowable values.

They can do such things as limit a string to a pre-defined code list, constrain a number to a given range, or create a pattern that must be followed.

{: .example}
>
>- A telephone number type might define a facet that creates the pattern (ddd) ddd-dddd.
>- A week-day type might define facets that constrain a string down to the codes MON, TUES, WED, etc.
>- A latitude type might define facets that constrain a number to the range -90 to 90.

<!--more-->

A facet is defined by a simple type by specifying its **kind**, **value**, and **definition**.

The kind of facet must be chosen from the list provided below; the facet value and definition are provided by the data modeler.

## Kinds of Facets

| Facet | Description | Text | Num | Date |
| ----- | ----------- |:----:|:---:|:----:|
| enumeration | a code; an allowable value | X | X | X |
| fractionDigits | the maximum number of decimal places allowed |  | X |   |
| length | the exact number of characters for a value | X |   |   |
| maxLength | the maximum number of characters for a value | X |   |   |
| minLength | the minimum number of characters for a value | X |   |   |
| minExclusive | the lower bound (the value must be greater than this constraint) |  | X | X |
| minInclusive | the lower bound (the value must be greater than or equal to this constraint) |  | X | X |
| maxExclusive | the upper bound (the value must be less than this constraint) |  | X | X |
| maxInclusive | the upper bound (the value must be less than or equal to this constraint) |  | X | X |
| pattern | the regular expression that the value must match | X | X | X |
| totalDigits | the maximum number of digits allowed |  | X |   |
| whiteSpace  | the way white space (spaces, tabs, line feeds, carriage returns) will be handled | X |   |   |

These kinds of facets and the term "facet" itself are taken from XML Schema: [Constraining or Non-fundamental facets](https://www.w3.org/TR/xmlschema-2/#non-fundamental).

## Enumerations

In NIEM, the overwhelming majority (99%+) of facets that are created are **enumerations** (codes).

Because the word "code" is more well-known, it is sometimes used in place of "facet" or "enumeration."

A type creating a code set for days of the week might be based on a string and then define seven enumerations: **MON**, **TUE**, **WED**, etc.  Each enumeration constrains that string to a valid option.  That one type will have seven valid options for its value.

## Multiple facets on a type

Multiple facets may be defined by a single simple type:

- A simple type that defines a code set must add one enumeration facet per code value.
- A simple type that defines a numeric range must add one minInclusive (or minExclusive) facet to specify the lower bound, and one maxInclusive (or maxExclusive) facet to specify the upper bound.

**Examples:**

| Type | Facet Kind | Facet Value | Facet Definition |
| --- | --- | --- | --- |
| MonthCodeSimpleType |  |  |  |
| | enumeration | JAN | January |
| | enumeration | FEB | February |
| | enumeration | MAR | March |
| | ... | ... | ... |
| LatitudeSimpleType |  |  |  |
| | minInclusive | -90 | south pole |
| | maxInclusive | 90 | north pole |

## Linking properties to facets

A property does not define facets for itself. A property may have a type that defines facets.

For example, property `nc:TelephoneNumberCategoryCode`

- has type `xCard:TelephoneCategoryCodeType`, and
- that type is based on a simple type that defines nine enumerations including "cell," "home," and "work."

The property defined in Core is thus linked to the facets defined in the xCard code set namespace.  In a message instance, only those nine enumerations would be valid values for `nc:TelephoneNumberCategoryCode`.
