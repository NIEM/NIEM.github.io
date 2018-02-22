---
  title: Representation Pattern in XML
  short: XML
---

- TOC
{:toc}

## Instance example

The example below shows an element with type nc:DateType.

{:.note}
- Element "nc:Date" substitutes for abstract element nc:DateRepresentation.
- The date also includes a margin of error duration.  In this cases, the date is plus or minus a period of 3 months.

```xml
<nc:ActivityDate>
  <nc:Date>2017-06-01</nc:Date>
  <nc:DateMarginOfErrorDuration>P3M</nc:DateMarginOfErrorDuration>
</nc:ActivityDate>
```

## Schema example

The example below shows..

- The declaration of type nc:DateType, which follows the representation pattern.
- The declaration of the representation element nc:DateRepresentation (abstract) and several substitutions.

```xml
<xs:complexType name="DateType">
  <xs:annotation>
    <xs:documentation>A data type for a calendar date.</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="nc:DateRepresentation" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:DateAccuracyAbstract" minOccurs="0" maxOccurs="1"/>
        <xs:element ref="nc:DateMarginOfErrorDuration" minOccurs="0" maxOccurs="1"/>
        <xs:element ref="nc:DateAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="DateRepresentation" abstract="true">
  <xs:annotation>
    <xs:documentation>A data concept for a representation of a date.</xs:documentation>
  </xs:annotation>
</xs:element>

<xs:element name="Date" type="niem-xs:date" substitutionGroup="nc:DateRepresentation" nillable="true">
  <xs:annotation>
    <xs:documentation>A full date.</xs:documentation>
  </xs:annotation>
</xs:element>

<xs:element name="DateTime" type="niem-xs:dateTime" substitutionGroup="nc:DateRepresentation">
  <xs:annotation>
    <xs:documentation>A full date and time.</xs:documentation>
  </xs:annotation>
</xs:element>
```

## Schema template

```xml
<xs:complexType name="NAMEType">
  <xs:annotation>
    <xs:documentation>A data type for ...</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="nc:NAMERepresentation" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="..." minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:NAMEAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="NAMERepresentation" abstract="true">
  <xs:annotation>
    <xs:documentation>A data concept for a representation of a ...</xs:documentation>
  </xs:annotation>
</xs:element>

<xs:element name="REPRESENTATION-1" type="TYPE" substitutionGroup="nc:NAMERepresentation" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>

<xs:element name="REPRESENTATION-2" type="TYPE" substitutionGroup="nc:NAMERepresentation" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>

```
