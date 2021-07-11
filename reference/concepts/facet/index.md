---
  title: Codes / Facets
  icon: fa-list
  description: A facet is a constraint on a simple type that limits the set of allowable values.
  redirect_from:
  - /reference/concepts/facet/modeling/
  - /reference/concepts/facet/xml/
  - /reference/concepts/facet/json/

---

Facets are additional constraints that may be defined on simple types (like strings or numbers) to limit the allowable values.

They can do such things as limit a string to a pre-defined code list, constrain a number to a given range, or create a pattern that must be followed.

{: .example}
>
>- A telephone number type might define a facet that creates the pattern (ddd) ddd-dddd.
>- A week-day type might define facets that constrain a string down to the codes MON, TUES, WED, etc.
>- A latitude type might define facets that constrain a number to the range -90 to 90.

<!--more-->

{:toc}
- TOC

## Overview

A facet is defined by a simple type by specifying its **kind**, **value**, and **definition**.

The kind of facet must be chosen from the list provided below; the facet value and definition are provided by the data modeler.

### Kinds of Facets

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

### Enumerations

In NIEM, the overwhelming majority (99%+) of facets that are created are **enumerations** (codes).

Because the word "code" is more well-known, it is sometimes used in place of "facet" or "enumeration."

A type creating a code set for days of the week might be based on a string and then define seven enumerations: **MON**, **TUE**, **WED**, etc.  Each enumeration constrains that string to a valid option.  That one type will have seven valid options for its value.

### Multiple facets on a type

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

### Linking properties to facets

A property does not define facets for itself. A property may have a type that defines facets.

For example, property `nc:TelephoneNumberCategoryCode`

- has type `xCard:TelephoneCategoryCodeType`, and
- that type is based on a simple type that defines nine enumerations including "cell," "home," and "work."

The property defined in Core is thus linked to the facets defined in the xCard code set namespace.  In a message instance, only those nine enumerations would be valid values for `nc:TelephoneNumberCategoryCode`.

## Modeling guidance

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

### Simple type names

A simple type declares a facet:

- If the type contains enumerations, the name of the type must end with `CodeSimpleType`.
- All other simple types must have names that end with with `SimpleType`.

## XML

### Enumeration Example

This example shows a simple type with two enumerations: `MonthCodeSimpleType` with codes for **JAN** and **FEB**.

This is enough to show how to create a code set, but ten more enumeration statements would need to be added to make this type example complete.

```xml
<xs:simpleType name="MonthCodeSimpleType">
   <xs:annotation>
    <xs:documentation>A data type for month codes.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:enumeration value="JAN">
     <xs:annotation>
      <xs:documentation>January</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
    <xs:enumeration value="FEB">
     <xs:annotation>
      <xs:documentation>February</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```

{: .note}
> Because these facets are enumerations, the type name must end with `CodeSimpleType`.

### Numeric Range Example

This example shows a numeric simple type with a range of 0 to 100, inclusive.

```xml
<xs:simpleType name="TestResultSimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a range of valid test result values.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="100"/>
  </xs:restriction>
</xs:simpleType>
```

{: .note}
- The `xs:restriction base` may be replaced with any numeric simple type, like `xs:integer`.
- The `minInclusive` may be replaced with `minExclusive`.
- The `maxInclusive` may be replaced with `maxExclusive`.
- Remove either the min or max facet in order to create a range that is unbounded on one side.

### Generic Template

The template below defines a simple type with a facet.

``` xml
<xs:simpleType name="NAMESimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) ...</xs:documentation>
  </xs:annotation>
  <xs:restriction base="BASE">
    <xs:KIND value="VALUE">
     <xs:annotation>
      <xs:documentation>DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:KIND>
  </xs:restriction>
</xs:simpleType>
```

{: .note}
- Common base types are `xs:token` (a string that does not allow irregular whitespace), `xs:decimal`, and `xs:integer`.
- Common kinds of facets are `xs:enumeration`, `xs:pattern`, `xs:minInclusive`, `xs:minExclusive`, `xs:maxInclusive`, and `xs:maxExclusive`.  See the [full list](#kinds-of-facets).
- Names, values, and definitions must be provided by the data modeler.

## JSON

### Kinds of JSON Facets

| XML Facet      | JSON Facet | Text | Num | Date |
| -------------- | ---------- |:----:|:---:|:----:|
| enumeration    | enum       |   X  |     |      |
| fractionDigits | n/a        |      |     |      |
| length         | minLength<br>maxLength| X | |  |
| maxLength      | maxLength  |   X  |     |      |
| minLength      | minLength  |   X  |     |      |
| minExclusive   | minimum<br>exclusiveMinimum: true |  | X |   |
| minInclusive   | minimum    |      |  X  |      |
| maxExclusive   | maximum<br>exclusiveMaximum: true |  | X |   |
| maxInclusive   | maximum    |      |  X  |      |
| pattern        | pattern    |   X  |     |      |
| totalDigits    | n/a        |      |     |      |
| whiteSpace     | n/a        |      |     |      |
{: .table-auto}

{: .note}
>Draft 6 of the JSON Schema specification changes the types of `exclusiveMinimum` and `exclusiveMaximum` from booleans to numbers so that they may be used without also requiring `minimum` and `maximum`.

### Enumerations

Enumerations are defined within a simple type declaration in the `oneOf` array.  Each enumeration is defined as an object with `enum` and `description` properties.

{: .note}
> Defining enumerations in an array is a JSON Schema requirement.  Since NIEM requires definitions for enumerations, the object must be repeated with a single enumeration in each `enum` array and a corresponding `description`.

```json
{
  "oneOf" : [
    { "enum": [ "1" ], "description": "…" },
    { "enum": [ "2" ], "description": "…" },
    { "enum": [ "3" ], "description": "…" }
  ]
}
```

This example shows the definition of `iso_4217:CurrencyCodeSimpleType` with three enumerations:

```json
{
  "definitions": {
    "iso_4217:CurrencyCodeSimpleType": {
      "type": "string",
      "description": "A data type for a currency that qualifies a monetary amount.",
      "oneOf": [
        {
          "enum": [ "EUR" ],
          "description": "Euro"
        },
        {
          "enum": [ "GBP" ],
          "description": "Pound Sterling"
        },
        {
          "enum": [ "USD" ],
          "description": "US Dollar"
        }
      ]
    }
  }
}
```

### Numeric Range

This example shows a numeric simple type with a minimum and a maximum value:

```json
{
  "definitions": {
    "my:CustomRangeSimpleType": {
      "description": "A data type for ...",
      "type": "integer",
      "minimum": 0,
      "maximum": 100
    },
  }
}
```

{: .note}
- The base type may be set to `number` instead of `integer` to allow for decimal values.
- Add the properties `exclusiveMinimum: true` and `exclusiveMaximum: true` to make the range exclusive of the edge values.

### Generic Template

This template shows the definition of a simple type with a base:

```json
{
  "definitions": {
    "SIMPLE_TYPE": {
      "description": "TYPE_DEFINITION",
      "type": "BASE_TYPE",
      "FACET_KIND": "FACET_VALUE"
    },
  }
}
```

{: .note}
- SIMPLE_TYPE - this should be a qualified name that ends with `SimpleType`.
- BASE_TYPE - this should be either **string**, **number**, or **integer**.
- FACET_KIND - this should be one of the values defined in the JSON facets table above.

Example of a string type with a maximum length:

```json
{
  "definitions": {
    "ext:NAMESimpleType": {
      "description": "A data type for...",
      "type": "string",
      "maxLength": 20
    },
  }
}
```

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.facet %}
