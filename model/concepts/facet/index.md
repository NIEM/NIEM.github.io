---
  title: Facets
  icon: fa-list
  links:
    - url: /model/concepts/facet/modeling/
    - url: /model/concepts/facet/xml/
    - url: /model/concepts/facet/json/
  description: A facet is a constraint on a simple type that limits the set of allowable values.
---

- TOC
{:toc}

## Overview

{% include_relative intro/index.md %}

A facet is defined by a simple type by specifying its **kind**, **value**, and **definition**.

The kind of facet must be chosen from the list provided below; the facet value and definition are provided by the data modeler.

## Kinds of Facets

| Facet | Description | Text | Num | Date |
| ----- | ----------- |:----:|:---:|:----:|
| enumeration | A code; an allowable value | X | X | X |
| fractionDigits | The maximum number of decimal places allowed |  | X |   |
| length | The exact number of characters for a value | X |   |   |
| maxLength | The maximum number of characters for a value | X |   |   |
| minLength | The minimum number of characters for a value | X |   |   |
| minExclusive | The lower bound<br>- the value must be greater than this constraint |  | X | X |
| minInclusive | The lower bound<br>- the value must be greater than or equal to this constraint |  | X | X |
| maxExclusive | The upper bound<br>- the value must be less than this constraint |  | X | X |
| maxInclusive | The upper bound<br>- the value must be less than or equal to this constraint |  | X | X |
| pattern | The regular expression that the value must match | X | X | X |
| totalDigits | The maximum number of digits allowed |  | X |   |
| whiteSpace  | The way white space (spaces, tabs, line feeds, carriage returns) will be handled | X |   |   |

These kinds of facets and the term "facet" itself are taken from XML Schema: [Constraining or Non-fundamental facets](https://www.w3.org/TR/xmlschema-2/#non-fundamental).

## Enumerations (*)

In NIEM, the overwhelming majority (99%+) of facets that are created are **enumerations** (codes).

Because the word "code" is more well-known, it is sometimes used in place of "facet" or "enumeration".

A type creating a code set for days of the week might be based on a string and then define seven enumerations - "MON", "TUE", "WED", etc.  Each enumeration constrains that string to a valid option.  That one type will have seven valid options for its value.

## Multiple facets on a type

Multiple facets may be defined by a single simple type.

- A simple type that defines a code set must add one enumeration facet per code value.
- A simple type that defines a numeric range must add one minInclusive (or minExclusive) facet to specify the lower bound, and one maxInclusive (or maxExclusive) facet to specify the upper bound.

Examples:

| Type | Facet Kind | Facet Value | Facet Definition |
| ---- | ---------- | ----------- | ---------------- |
| MonthCodeSimpleType |  |  |  |
|      | enumeration | JAN | January |
|      | enumeration | FEB | February |
|      | enumeration | MAR | March |
|      | ... | ... | ... |
| LatitudeSimpleType |  |  |  |
|      | minInclusive | -90 | The south pole |
|      | maxInclusive | 90 | The north pole |

## Linking properties to facets

A property does not define facets for itself. A property may have a type that defines facets.

For example, property nc:TelephoneNumberCategoryCode

- has type xCard:TelephoneCategoryCodeType

- that type is based on a simple type that defines nine enumerations, including "cell", "home", and "work"

The property defined in Core is thus linked to the facets defined in the xCard code set namespace.  In a message instance, only those nine enumerations would be valid values for nc:TelephoneNumberCategoryCode.
