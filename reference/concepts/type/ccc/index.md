---
  title: Complex Types with Complex Content
  icon: fa-sitemap
  description: A complex type with complex content (CCC) is a structure that represents an object and may contain elements and attributes.
  redirect_from:
  - /reference/concepts/type/ccc/modeling/
  - /reference/concepts/type/ccc/xml/
  - /reference/concepts/type/ccc/json/
---

A complex type with complex content (CCC) is a structure that represents an object and may contain elements and attributes.

A CCC type represents an object with properties, rather than a simple value.

{:toc}
- TOC

{:.example}
>Examples of CCC types in NIEM include the following:
>
>- `nc:PersonType`, which includes properties like name, birthday, and height.
>- `nc:LocationType`, which includes properties like an address and lat-long coordinates.
>- `nc:ContactInformationType`, which includes properties like a telephone number and an email address.

<!--more-->

## Modeling guidance

### Representation term "Type"

The name of a type must end with the representation term `Type`.

### Parent

CCC types may only extend other CCC types.

### Default parent

For a type that is not metadata, an association, or an augmentation, the default parent type, if none other is provided, should be `structures:ObjectType`.

### Sequence

In reference schemas, a CCC type's elements must be represented as a sequence, rather than a choice.

### Default cardinality

The default usage of properties in a type from a NIEM release should be optional and over-inclusive.  In XML, this would be represented as `minOccurs="0"` and `maxOccurs="0"`.

Individual information exchanges can and often should have very precise cardinality requirements.  Because these vary across different use cases, and because cardinality restrictions can be tightened but not loosened in a subset, cardinality should be set as flexibly as possible in the release schemas.

## XML

### Instance example

```xml
<nc:PersonName>
  <nc:PersonGivenName>Jane/<nc:PersonGivenName>
  <nc:PersonMiddleName>Elizabeth</nc:PersonMiddleName>
  <nc:PersonSurName>Smith</nc:PersonSurName>
</nc:PersonName>
```

### Schema example

The following shows an example of a subset of type `nc:PersonNameType`.  It is a complex type with complex content (CCC) that contains elements and an attribute.

```xml
<xs:complexType name="PersonNameType">
  <xs:annotation>
    <xs:documentation>
      A data type for a combination of names and/or titles by which a person is known.
    </xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="nc:PersonGivenName" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:PersonMiddleName" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:PersonSurName" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
      <xs:attribute ref="nc:personNameCommentText" use="optional"/>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
```

### Schema template

This template shows the creation of a complex type with complex content.  It specifies a parent type, two elements, and an attribute.

```xml
<xs:complexType name="NAME">
  <xs:annotation>
    <xs:documentation>A data type for ....</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="PARENT_TYPE">
      <xs:sequence>
        <xs:element ref="PROPERTY_1" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="PROPERTY_2" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
      <xs:attribute ref="ATTRIBUTE" use="optional"/>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>
```

{:.note}
> - The cardinality on elements may be adjusted by changing the `minOccurs` and `maxOccurs` values.  NIEM reference schemas tend to be very flexible, but cardinality should be adjusted in IEPDs to meet specific exchange requirements.
> - The cardinality on attributes may be adjusted by changing the `use` value from `optional` to `required`.

## JSON

### Instance example

The example below shows element `nc:Vehicle`, which has a CCC type.  It contains an object with three properties.

Property `nc:VehicleIdentification` also has a CCC type, representing an identification object with one property of its own.

```json
{
  "nc:Vehicle": {
    "nc:VehicleAxleQuantity": 2,
    "nc:VehicleIdentification": {
      "nc:IdentificationID": "AX54C62"
    },
    "nc:VehicleMSRPAmount": 25000
  }
}
```

### Schema example

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "definitions": {
    "nc:VehicleType": {
      "description": "A data type for a conveyance designed to carry an operator, passengers and/or cargo, over land.",
      "allOf": [
        {
          "$ref": "#/definitions/nc:ConveyanceType"
        },
        {
          "type": "object",
          "properties": {
            "nc:VehicleAxleQuantity": {
              "$ref": "#/properties/nc:VehicleAxleQuantity"
            },
            "nc:VehicleIdentification": {
              "$ref": "#/properties/nc:VehicleIdentification"
            },
            "nc:VehicleMSRPAmount": {
              "$ref": "#/properties/nc:VehicleMSRPAmount"
            }
          }
        }
      ]
    }
}
```

{: .note}
> In NIEM, `nc:VehicleType` extends `nc:ConveyanceType`.  This is captured by the `allOf` syntax above, which creates a reference to the parent type, then defines the vehicle-specific properties below.

### Schema template

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "definitions": {
    "NAME": {
      "description": "A data type for ...",
      "allOf": [
        {
          "$ref": "#/definitions/PARENT_TYPE"
        },
        {
          "type": "object",
          "properties": {
            "PROPERTY_1": {
              "$ref": "#/properties/PROPERTY_1"
            },
            "PROPERTY_2": {
              "$ref": "#/properties/PROPERTY_2"
            }
          }
        }
      ]
    }
}
```

{: .note}
> Any attributes that a CCC type contains should be represented the same way as elements, i.e., as properties under the JSON Schema `properties` key.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.ccc %}
