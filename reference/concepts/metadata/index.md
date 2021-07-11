---
  title: Metadata
  icon: fa-info
  description: Metadata is a set of data that describes characteristics of other data.
  redirect_from:
    - /reference/concepts/metadata/modeling/
    - /reference/concepts/metadata/xml/
    - /reference/concepts/metadata/json/
---

Metadata is data about data.  It might describe such things as who provided the content, and when it was last updated.

{:toc}
- TOC

## Overview

Because this is data that could potentially be provided about any and every property in the model (e.g., when the person name was last updated, when the address was last updated, when the vehicle tag was last updated, and so on), metadata should be defined separately from other types.  This avoids duplication and clutter across the model.

Almost all properties in NIEM (those with complex types) have the ability to reference one or more metadata properties.

{: .example}
> Core defines metadata element `nc:Metadata`, which contains properties like `nc:ReportedDate` and `nc:SourceText`.  Any element, like `nc:Person`, `j:PersonEmploymentIndicator`, or an element defined in an IEPD, may use this to provide metadata.

<!--more-->

### Using metadata

Metadata should not be embedded in the primary content.  All elements in NIEM inherit attribute `structures:metadata`.  This attribute can carry a list of ID references, meaning each element can link to one or more metadata elements, as applicable.

Elements and metadata have a many-to-many relationship.

1. One element can link to multiple metadata elements.  This means that metadata elements from Core, one or more domains, and/or an extension namespace may all be used, if needed.
2. One metadata element can be referenced by many elements.  This means that if there are multiple elements that share the same metadata in an instance (for example, if they all come from the same database record that will have the same update date), then they can all link to the same metadata value(s) rather than duplicating the information.

### Metadata is a set

A metadata element in NIEM has a metadata type that bundles up one or more informational properties, such as `nc:EffectiveDate` and `nc:LastUpdatedDate`.  This simplifies the usage - an element references a metadata bundle once, rather than each of its contents individually.

NIEM's rules and guidance about metadata applies to those elements and types that act as the bundles, like element `nc:Metadata` and type `nc:MetadataType`.  The informational properties, like `nc:EffectiveDate`, have no special rules and are created and treated like any other property in the model.

### Where to reference metadata

Metadata can be referenced from any element.  It may not be necessary though to repeat the same references on each element in an instance.  Metadata on a higher level element, like `nc:Person`, may be considered to carry through to children elements, such as `nc:PersonBirthDate`, unless specifically overridden.

## Modeling guidance

### Metadata Elements

#### Name

A metadata element should end with the representation term `Metadata`.

For general metadata that may be applied to anything, the name `Metadata` is sufficient.  For more specific metadata, a more descriptive name should be used, like `PersonMetadata`.

#### Type

A metadata element must have a metadata type.

### Applicability

A metadata element may be able to be used by any NIEM element or type, or it may be constrained to only certain ones.

If a metadata element is constrained to a given type, then any element of that type or of a type that extends from that type may reference it.  For example, a metadata element constrained to type `structures:AssociationType` may be used by any association element.

Use the attributes `appinfo:appliesToElements` and  `appinfo:appliesToTypes` to limit the metadata element to one or more elements and/or types.

### Metadata Types

#### Name

A metadata type should end with the representation term `MetadataType`.

For general metadata that may be applied to anything, the name `MetadataType` is sufficient.  For more specific metadata, a more descriptive name should be used, like `PersonMetadataType`.

#### Parent type

A metadata type must extend `structures:MetadataType`.

There is no need to extend other metadata types in the model.  Elements can link to multiple metadata elements.

#### No augmentation points

Metadata types should not contain augmentation points.  Other namespaces can define their own metadata elements and types and create references to them in NIEM release elements.

## XML

### Instance example

An element links to metadata by referencing each applicable metadata element's ID (`structures:id`) in inherited attribute `structures:metadata`.

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

### Schema example

This example shows a subset of metadata type `nc:MetadataType` and metadata element `nc:Metadata` in NIEM Core 4.0:

{: .note}
- The metadata type extends `structures:MetadataType`.
- The metadata element defines an attribute to specify what types may reference this element.  Specifying `structures:ObjectType` and `structures:AssociationType` enables applicability from any element with a type derived from either of these.

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

### Schema template

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

## JSON

Guidance has not yet been provided on metadata in JSON.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.metadata %}
