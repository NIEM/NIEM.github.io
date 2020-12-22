---
  title: List Types
  icon: fa-ellipsis-h
  description: A list type is a simple type that allows for values to be repeated, separated by a space.
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 9-15
    - number: 9-16
    - number: 9-17
    - number: 9-18
    - number: 11-5
    - number: 11-6
  - spec:
    version: "4.0"
    rules:
    - number: 9-15
    - number: 9-16
    - number: 9-17
    - number: 9-18
    - number: 11-4
    - number: 11-5
---

## Overview

{{ page.description }}

In NIEM, multiple values are typically represented by a property that occurs multiple times.  Lists are provided to represent larger sets of data values, such as readings from a sensor.

## Modeling

### Name

The name of a list type should end with the representation term "ListSimpleType".

## XML

### Instance example

```xml
<nc:MeasureDecimalValueList>1.1 1.1 1.1 1.2 1.1 1.1 1.3 1.3 1.4 1.3 1.3 1.3 1.2 1.2 1.2 1.2 1.2 1.3 1.3 1.2 1.3 1.3 1.3</nc:MeasureDecimalValueList>
```

### Schema example

The following example shows the declarations of

- a simple list type,
- a complex type with simple content based on the simple list type, and
- an element with the complex type.

```xml
<xs:simpleType name="DecimalListSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a white space-delimited list of decimal.</xs:documentation>
  </xs:annotation>
  <xs:list itemType="xs:decimal"/>
</xs:simpleType>

<xs:complexType name="DecimalListType">
  <xs:annotation>
    <xs:documentation>A data type for a white space-delimited list of decimal.</xs:documentation>
  </xs:annotation>
  <xs:simpleContent>
    <xs:extension base="nc:DecimalListSimpleType">
      <xs:attributeGroup ref="structures:SimpleObjectAttributeGroup"/>
    </xs:extension>
  </xs:simpleContent>
</xs:complexType>

<xs:element name="MeasureDecimalValueList" type="nc:DecimalListType" substitutionGroup="nc:MeasureValueListAbstract" nillable="true">
  <xs:annotation>
    <xs:documentation>A list of decimal measurement values, all using the same measurement method/device and of the same units.</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Schema template

The following is a template for the declaration of a simple list type:

```xml
<xs:simpleType name="NAMEListSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a list of ...</xs:documentation>
  </xs:annotation>
  <xs:list itemType="BASE-TYPE"/>
</xs:simpleType>
```

## JSON

JSON guidance for list types is not yet available.

## References

{% include ndr-references.html list=page.ndr %}
