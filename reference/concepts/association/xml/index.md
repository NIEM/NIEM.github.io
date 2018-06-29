---
  title: Associations in XML
  short: XML
---

- TOC
{:toc}

## Instance example

{:.note}
- The following two examples show an association between a person and a telephone number.
- The date range and description elements are additional properties relating to this association.

### Inline

The content of the elements in this association are inline.

```xml
<scr:PersonPhoneAssociation>

  <nc:AssociationDateRange>
    <nc:StartDate>
      <nc:Date>2015-01-01</nc:Date>
    </nc:StartDate>
    <nc:EndDate>
      <nc:Date>2016-06-30</nc:Date>
    </nc:EndDate>
  </nc:AssociationDateRange>

  <nc:AssociationDescriptionText>The person made multiple calls to the given telephone number.</nc:AssociationDescriptionText>

  <nc:Person>
    <nc:PersonName>
      <nc:PersonFullName>John Doe</nc:PersonFullName>
    </nc:PersonName>
  </nc:Person>

  <nc:TelephoneNumber>
    <nc:FullTelephoneNumber>
      <nc:TelephoneNumberFullID>212-555-1212</nc:TelephoneNumberFullID>
    </nc:FullTelephoneNumber>
  </nc:TelephoneNumber>
</scr:PersonPhoneAssociation>
```

### Reference

The person element in this association is defined as a reference to a person described elsewhere in this document, outside of the association.  It can be common for one or more properties to be represented as references rather than inline.

```xml
<scr:PersonPhoneAssociation>

  <nc:AssociationDateRange>
    <nc:StartDate>
      <nc:Date>2015-01-01</nc:Date>
    </nc:StartDate>
    <nc:EndDate>
      <nc:Date>2016-06-30</nc:Date>
    </nc:EndDate>
  </nc:AssociationDateRange>

  <nc:AssociationDescriptionText>The person made multiple calls to the given telephone number.</nc:AssociationDescriptionText>

  <nc:Person structures:ref="P1" xsi:nil="true"/>

  <nc:TelephoneNumber>
    <nc:FullTelephoneNumber>
      <nc:TelephoneNumberFullID>212-555-1212</nc:TelephoneNumberFullID>
    </nc:FullTelephoneNumber>
  </nc:TelephoneNumber>
</scr:PersonPhoneAssociation>

<nc:Person structures:id="P1">
  <nc:PersonName>
    <nc:PersonFullName>John Doe</nc:PersonFullName>
  </nc:PersonName>
</nc:Person>
```

## Schema example

This example shows the creation of an association type and element.

For both the inline and the reference examples above, the schema will be created the same way.  IDs and references are inherited by or added to all NIEM element types, so no further actions are required for their use in an instance.

{:.note}
- The association type...
  - name ends with "AssociationType"
  - definition begins with "A data type for a relationship"
  - extends nc:AssociationType, allowing it to inherit the association date range and description properties
- The association element...
  - name ends with "Association"
  - definition begins with "An association ..."

```xml
<xs:complexType name="PersonPhoneAssociationType">
  <xs:annotation>
    <xs:documentation>A data type for a relationship between a PERSON and a PHONE.</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="nc:AssociationType">
      <xs:sequence>
        <xs:element ref="nc:Person" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:TelephoneNumber" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="PersonPhoneAssociation" type="scr:PersonPhoneAssociationType" nillable="true">
  <xs:annotation>
    <xs:documentation>An association between a PERSON and a PHONE.</xs:documentation>
  </xs:annotation>
</xs:element>
```

## Schema template

The template below declares an association type and element.

Multiple properties may be added to the association type to capture the primary objects of the association, and optionally any additional properties that further describe the association.

```xml
<xs:complexType name="NAMEAssociationType">
  <xs:annotation>
    <xs:documentation>A data type for a relationship ...</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="nc:AssociationType">
      <xs:sequence>
        <xs:element ref="ASSOCIATION-OBJECT" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="ASSOCIATION-PROPERTY" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="NAMEAssociation" type="scr:NAMEAssociationType" nillable="true">
  <xs:annotation>
    <xs:documentation>An association ...</xs:documentation>
  </xs:annotation>
</xs:element>
```
