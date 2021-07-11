---
  title: Simple Types
  icon: fa-font
  description: A simple type is a structure that represents a simple value only.
  links:
    - url: /reference/concepts/type/simple/list/
    - url: /reference/concepts/type/simple/union/
  redirect_from:
  - /reference/concepts/type/simple/modeling/
  - /reference/concepts/type/simple/xml/
  - /reference/concepts/type/simple/json/
---

A simple type is a structure that represents a simple value only.

Simple types are data structures like strings, numbers, and booleans.  They can also be customized with [facets](../../facet) so that only a certain range of numbers, or a certain set of codes, for example, are allowed.

{:toc}
- TOC

Simple types can be used in two ways in the model:

- As the type of [attributes](../../property/attribute), which by definition cannot have a complex type.
- As the base of corresponding [complex types with simple content (CSCs)](../csc), which can be assigned to elements.

{: .example}
>
>- Core defines attribute `personNameInitialIndicator`.  Its type is a boolean - a simple type.
>- Core defines simple type `AddressCategoryCodeSimpleType`, which constrains a string down to a few possible codes, like `residential` and `business`.

<!--more-->

**Provided types**

Common simple types provided by XML include `xs:string`, `xs:token`, `xs:date`, `xs:date-time`, `xs:integer`, `xs:decimal`, and `xs:boolean`.

Simple types provided by JSON are `string`, `integer`, `decimal`, and `boolean`.  Dates are simply strings in JSON, but if they follow the format set by ISO 8601, they can be converted into dates in JavaScript.

## Kinds of simple types

In addition to the simple types built into XML and JSON and user-defined simple types with [facets](../../facet/) (typically codes), NIEM supports two additional kinds of simple types:

{% include icon-list.html links=page.links %}

## Modeling guidance

### Representation term "SimpleType"

A simple type name must end with the representation term "SimpleType".

## XML

### Instance example

The following is an example of attribute `nc:personNameInitialIndicator`.  It has simple type `xs:boolean`.

```xml
<nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
```

{: .note}
>The attribute has a simple value: the boolean "true".

### Schema example

This example shows a subset of `nc:AddressCategoryCodeSimpleType`.

```xml
<xs:simpleType name="AddressCategoryCodeSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a kind of address.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:enumeration value="business">
      <xs:annotation>
        <xs:documentation>business</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
    <xs:enumeration value="residential">
      <xs:annotation>
        <xs:documentation>residential</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```

### Schema template

This template shows the creation of a simple type with an enumeration.  Other kinds of [facets](../../facet) could be used instead.

```xml
<xs:simpleType name="NAMESimpleType">
  <xs:annotation>
    <xs:documentation>A data type for ...</xs:documentation>
  </xs:annotation>
  <xs:restriction base="SIMPLETYPE">
    <xs:enumeration value="CODE">
      <xs:annotation>
        <xs:documentation>CODE_DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```

## JSON

### Instance example

The following shows an example of a property with a value based on a simple type:

```json
{
  "nc:AddressCategoryCode": "residential"
}
```

### Schema example

```json
{
  "nc:AddressCategoryCodeSimpleType": {
    "type": "string",
    "description": "A data type for a kind of address.",
    "oneOf": [
      {
        "enum": [ "business" ],
        "description": "business"
      },
      {
        "enum": [ "residential" ],
        "description": "residential"
      }
    ]
  }
}
```

See [Facets (JSON)](../../facet/#json) for examples of simple types with other kinds of facets.

### Schema templates

The following is a template for a simple type with an enumeration:

```json
{
  "NAME": {
    "type": "BASE_TYPE",
    "description": "A data type for ...",
    "oneOf": [
      {
        "enum": [ "CODE" ],
        "description": "DEFINITION"
      }
    ]
  }
}
```

The following is another template for a simple type with an enumeration:

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

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.simple %}
