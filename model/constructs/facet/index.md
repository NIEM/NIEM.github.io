---
title: Facets Overview
---

A **facet** is {% include_relative def.md %}

- TOC
{:toc}

## Overview

Simple types in NIEM are types that define a value, like strings, numbers and dates.  In some cases, it may be useful to further constrain those values.

Facets restrict a simple type, so that, for example, a number must fall within a given range or a string must match a certain pattern.

Example uses:

- A type for a telephone number might be a string that must match the **pattern**: (ddd) ddd-dddd
- A type for a birthday might be a date **no earlier than** 1/1/1900
- A type for a day-of-week value might be a text field limited to **allowable values** "MON", TUES", "WED", etc.
- A type for latitude might be a number **between** -90 and 90

A facet is defined by a simple type by specifying its **kind**, **value**, and **definition**.

The kind of facet must be chosen from the list provided below; the facet value and definition are provided by the data modeler.

## Kinds of Facets

<table class="table table-hover table-striped table-bordered">
<tr>
  <th>Facet</th>
  <th>Description</th>
  <th>Text</th><th>Num</th><th>Date</th>
</tr>
<tr>
  <td>enumeration</td>
  <td>An allowable value; a code</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>fractionDigits</td>
  <td>The maximum number of decimal places allowed</td>
  <td> </td>
  <td>X</td>
  <td> </td>
</tr>
<tr>
  <td>length</td>
  <td>The exact number of characters for a value</td>
  <td>X</td>
  <td> </td>
  <td> </td>
</tr>
<tr>
  <td>maxLength</td>
  <td>The maximum number of characters for a value</td>
  <td>X</td>
  <td> </td>
  <td> </td>
</tr>
<tr>
  <td>minLength</td>
  <td>The minimum number of characters for a value</td>
  <td>X</td>
  <td> </td>
  <td> </td>
</tr>
<tr>
  <td>minExclusive</td>
  <td>The lower bound<br>- the value must be greater than this constraint</td>
  <td> </td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>minInclusive</td>
  <td>The lower bound<br>- the value must be greater than or equal to this constraint</td>
  <td> </td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>maxExclusive</td>
  <td>The upper bound<br>- the value must be less than this constraint</td>
  <td> </td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>maxInclusive</td>
  <td>The upper bound<br>- the value must be less than or equal to this constraint</td>
  <td> </td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>pattern</td>
  <td>The regular expression that the value must match</td>
  <td>X</td>
  <td>X</td>
  <td>X</td>
</tr>
<tr>
  <td>totalDigits</td>
  <td>The maximum number of digits allowed</td>
  <td> </td>
  <td>X</td>
  <td> </td>
</tr>
<tr>
  <td>whiteSpace </td>
  <td>The way white space (spaces, tabs, line feeds, carriage returns) will be handled</td>
  <td>X</td>
  <td> </td>
  <td> </td>
</tr>
</table>

These kinds of facets and the term "facet" itself are taken from XML Schema: [Constraining or Non-fundamental facets](https://www.w3.org/TR/xmlschema-2/#non-fundamental).

### Enumerations (most common)

In NIEM, the overwhelming majority (99%+) of facets that are created are **enumerations** (codes).

Because the word "code" is more well-known, it is sometimes used in place of "facet" or "enumeration" in high-level contexts.

## Multiple facets on a type

Multiple facets may be combined together by a single simple type.

Examples:

- A simple type that defines a code set must add one enumeration facet per code value.
- A simple type that defines a numeric range must add one minInclusive (or minExclusive) facet to specify the lower bound, and one maxInclusive (or maxExclusive) facet to specify the upper bound.

<table class="table table-hover table-striped table-bordered">
  <tr>
    <th>Type</th>
    <th>Facet Kind</th>
    <th>Facet Value</th>
    <th>Facet Definition</th>
  </tr>
  <tr>
    <td>MonthCodeSimpleType</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>enumeration</td>
    <td>JAN</td>
    <td>January</td>
  </tr>
  <tr>
    <td></td>
    <td>enumeration</td>
    <td>FEB</td>
    <td>February</td>
  </tr>
  <tr>
    <td></td>
    <td>enumeration</td>
    <td>MAR</td>
    <td>March</td>
  </tr>
  <tr>
    <td></td>
    <td>...</td>
    <td>...</td>
    <td>...</td>
  </tr>
  <tr>
    <td>LatitudeSimpleType</td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>minInclusive</td>
    <td>-90</td>
    <td>The south pole</td>
  </tr>
  <tr>
    <td></td>
    <td>maxInclusive</td>
    <td>90</td>
    <td>The north pole</td>
  </tr>
</table>

## Linking properties to facets

A property does not define facets for itself. A property may have a type that defines facets.

For example...

- property nc:TelephoneNumberCategoryCode

- => has type xCard:TelephoneCategoryCodeType

- => which is based on a simple type that defines nine enumerations, including "cell", "home", and "work"

The property defined in Core is thus linked to the facets defined in the xCard code set namespace.

In a message instance, only those nine enumerations would be valid values for nc:TelephoneNumberCategoryCode.

## Facets in XML and JSON

- [Facets in XML](./xml.html)
- Facets in JSON - TBD