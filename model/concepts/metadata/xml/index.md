---
  title: Metadata in XML
  short: XML
  training: xml
  next: reference
---

- TOC
{:toc}

An element links to metadata by referencing each applicable metadata element's ID (`structures:id`) in inherited attribute `structures:metadata`.

## XML example

In the example below, a person is defined with two sub-properties: nc:PersonBirthDate and nc:PersonName.  Each of these elements reference metadata IDs via their `structures:metadata` attribute.

```xml
<nc:Person>
  <nc:PersonBirthDate structures:metadata="m1">
    <nc:Date>1945-12-01</nc:Date>
  </nc:PersonBirthDate>
  <nc:PersonName structures:metadata="m1 m2">
    <nc:PersonFullName>John Doe</nc:PersonFullName>
  </nc:PersonName>
</nc:Person>

<nc:Metadata structures:id="m1">
  <nc:SourceText>Adam Barber</nc:SourceText>
</nc:Metadata>

<nc:Metadata structures:id="m2">
  <nc:ReportedDate>
    <nc:Date>2005-04-26</nc:Date>
  </nc:ReportedDate>
</nc:Metadata>
```

## XML Schema example

This example shows a subset of metadata type `nc:MetadataType` and metadata element `nc:Metadata` in NIEM Core 4.0:

- The metadata type extends `structures:MetadataType`.
- The metadata element defines applicability to types `structures:ObjectType` and `structures:AssociationType`.  This enables applicability from any element with a type derived from either of these.

```xml
<xs:schema>
  <xs:complexType name="MetadataType">
    <xs:annotation>
      <xs:documentation>
        A data type for information that further qualifies primary data; data about data.
      </xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:MetadataType">
        <xs:sequence>
          <xs:element ref="nc:CaveatText" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:DistributionText" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:EffectiveDate" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:ExpirationDate" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:LastUpdatedDate" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:LastVerifiedDate" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:ReportedDate" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:Comment" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
</xs:schema>

<xs:element name="Metadata" type="nc:MetadataType" nillable="true"
    appinfo:appliesToTypes="structures:ObjectType structures:AssociationType">
  <xs:annotation>
    <xs:documentation>
      Information that further qualifies primary data; data about data.
    </xs:documentation>
  </xs:annotation>
</xs:element>
```

## XML Schema template

```xml
<xs:schema>
  <xs:complexType name="NAMEMetadataType">
    <xs:annotation>
      <xs:documentation>DEFINITION</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:MetadataType">
        <xs:sequence>
          <xs:element ref="INFORMATIONAL_ELEMENT" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
</xs:schema>

<xs:element name="NAMEMetadata" type="NAMEMetadataType" nillable="true"
    appinfo:appliesToTypes="TYPE1 TYPE2 ..."
    appinfo:appliesToElements="ELEMENT1 ELEMENT2 ...">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```
