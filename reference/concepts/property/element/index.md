---
  title: Elements
  icon: fa-database
  description: An element represents a concept.  In an instance, it acts as a container  that may carry either a simple value or an object, and optionally attributes.
  redirect_from:
  - /reference/concepts/property/element/modeling/
  - /reference/concepts/property/element/xml/
  - /reference/concepts/property/element/json/
---

An element represents a concept.  In an instance, it acts as a container that may carry either simple content (a value) or complex content (an object).  In either case, an element can also carry attributes.

- TOC
{:toc}

{: .example}
- Core defines element `nc:PersonGivenName`.  This element will carry simple content, for example, a value like "Jane".
- Core also defines element `nc:Person`.  This element will carry complex content - a set of sub-elements representing properties like name, age, height, and employment information.

<!--more-->

## Modeling guidance

In addition to the general modeling rules and guidance provided for properties, the following applies specifically to elements:

### Type must be complex

An elements with a type must have a complex type.

All complex types in NIEM eventually derive from `structures:ObjectType` or a similar type in the NIEM `structures` namespace.  These types contain attributes that enable NIEM elements to reference to other elements, support linked data, define metadata, and provide security markup.  As these features are not possible with simple types, an element is required to have a complex type.

Note: An abstract element may be defined without a type.

### Nillable

Elements in a reference schema must allow a nil value.  This is needed to support NIEM's [referencing mechanism](../../reference).

## XML

### Instance example

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

{: .note}
- `nc:Person` is an element that carries complex content.
- `nc:PersonName` is an element that carries complex content and an attribute.
- `nc:PersonGivenName` and `nc:PersonSurName` are elements that carry simple content (values).
- `nc:PersonMiddleName` is an element that carries simple content (a value) and an attribute.

### Schema example

Despite the variations, each of the elements above is defined the same way in a schema.  The different representations are defined by the element's type, not by the element itself.

```xml
<!-- Element with complex content -->
<xs:element name="Person" type="nc:PersonType" nillable="true">
  <xs:annotation>
    <xs:documentation>A human being.</xs:documentation>
  </xs:annotation>
</xs:element>

<!-- Element with simple content -->
<xs:element name="PersonMiddleName" type="nc:PersonNameTextType" nillable="true">
  <xs:annotation>
    <xs:documentation>A middle name of a person.</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Schema template

```xml
<xs:element name="NAME" type="TYPE" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Schema restrictions

The following is a list of restrictions that the NIEM NDR defines relating to XML element declarations.

#### Prohibited types

- xs:anySimpleType
- xs:anyType

These types are not allowed to prevent elements acting as wildcards.  Substitutions and augmentations should be used instead.

#### Prohibited attributes

The following attributes may not be used in the declaration of an element in an XML Schema:

- block
- final
- default
- fixed

NIEM is designed to be extensible and customizable, in order to support a wide-ranging variety of requirements.  The `block` and `final` attributes above prevent further customization by subsequent schemas.

The `default` and `fixed` attributes can result in unexpected behavior.  A validating parser may construct values for an element assigned a default or fixed value in its schema; a non-validating parser will not.  Preventing these attributes ensures that the information in an instance is not altered, depending on which parser is used to process the data.

## JSON

### Instance example

```json
{
  "nc:Person": {
    "nc:PersonName" : {
      "nc:PersonGivenName": "John",
      "nc:PersonSurName": "Smith"
    }
  }
}
```

{: .note}
- `nc:Person` and `nc:PersonName` are elements that carry complex content.
- `nc:PersonGivenName` and `nc:PersonSurName` are elements that carry simple content (values).

### Schema example

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "nc:Person": {
      "description": "A human being.",
      "oneOf": [
        {
          "$ref": "#/definitions/nc:PersonType"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/nc:PersonType"
          }
        }
      ]
    }
  }
}
```

Note that this is different from the corresponding XML Schema syntax.  An XML type defines if a property that it contains appears once or multiple times.  If a person has two middle names, then the element `nc:PersonMiddleName` may appear in the instance multiple times.

In NIEM JSON, the property declares itself to have either the expected type, or an array of objects of the expected type.  Properties are keys in a JSON object - they can only appear once.

This syntax supports the simple case, where a property is defined to have only one of the given value (`"nc:PersonMiddleName"`).  It also supports the case where a property has multiple values, and must be accessed as an array, like `"nc:PersonMiddleName"[0]`, `"nc:PersonMiddleName"[1]`, etc.

Exchange schemas may subset this to choose the actual representation that is needed, but reference schemas should make both options available.

### Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "NAME": {
      "description": "DEFINITION",
      "oneOf": [
        {
          "$ref": "#/definitions/TYPE"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/TYPE"
          }
        }
      ]
    }
  }
}
```

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.element %}
