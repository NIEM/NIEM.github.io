---
  title: CCC Types in XML
  short: XML
---

## Instance example

```xml
<nc:PersonName>
  <nc:PersonGivenName>Jane/nc:PersonGivenName>
  <nc:PersonMiddleName>Elizabeth</nc:PersonMiddleName>
  <nc:PersonSurName>Smith</nc:PersonSurName>
</nc:PersonName>
```

## Schema example

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

## Schema template

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
>
>- The cardinality on elements may be adjusted by changing the `minOccurs`
> and `maxOccurs` values.  NIEM reference schemas tend to be very flexible,
> but cardinality should be adjusted in IEPDs to meet specific exchange requirements.
>- The cardinality on attributes may be adjusted by changing the `use` value
> from `optional` to `required`.
