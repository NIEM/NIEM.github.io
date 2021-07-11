---
  title: Augmentation Points
  icon: fa-share
  redirect_from:
    - /reference/concepts/augmentation/point/modeling/
    - /reference/concepts/augmentation/point/xml/
    - /reference/concepts/augmentation/point/json/
  description: An augmentation point is a special substitution group to allow for later replacement by additional content from other namespaces.
---

An augmentation point is a special substitution group created to allow for later replacement by additional content from other namespaces.

{:toc}
- TOC

Every NIEM release type that contains sub-elements also contains an augmentation point element.  These elements are abstract, have no type, and cannot appear in any instance.  They serve strictly as substitution points, to be replaced by other content - the augmentation elements.

The name of each augmentation point element corresponds to the type in which it appears, with the representation term `"Type"` being replaced by `"AugmentationPoint"`.

<!--more-->

![Basic augmentation](images/aug-point-basic.png)

**Examples**

Each of the types in the table of examples below contain the augmentation point element listed next to it.  The names and definitions follow a regular pattern.

| Type | Augmentation Point Element | Definition of Augmentation Point Element |
| ---- | -------------------------- | ---------------------------------------- |
| nc:PersonType | nc:PersonAugmentationPoint | An augmentation point for PersonType |
| nc:ContactInformationType | nc:ContactInformationAugmentationPoint | An augmentation point for ContactInformationType |
| em:AccessType | em:AccessAugmentationPoint | An augmentation point for AccessType |
| it:AgentType | it:AgentAugmentationPoint | An augmentation point for AgentType |

Each of these augmentation point elements may be replaced in an instance with other content.

## Modeling guidance

![Augmentation point element](./images/aug-point.png)

### Name

The augmentation point element name must correspond with the type name it appears in, with the `"Type"` representation term being replaced by `"AugmentationPoint"`.

{: .example}
The name of the augmentation point element for `nc:PersonType` is `"nc:PersonAugmentationPoint"`.

### Abstract

An augmentation point element has no content of its own and is merely a construct to support additional content from other namespaces.  Making this element abstract ensures that it must be omitted or replaced in an instance by another element.

### No type

An augmentation point element does not have a type.  This ensures that there will not be a type conflict when it is later substituted by one or more augmentation elements.

### Sub-element position

The augmentation point element must appear as the final sub-element in its type.  This makes it easy to find and makes sure the type's original content appears in instances before the augmentations do.

### IEPD exceptions

Augmentation point elements are required in NIEM release schemas, but not for IEPDs.

NIEM releases are required to define augmentation points in order to make it as easy as possible for IEPDs to later add additional content.  IEPDs may, but are not required to, provide this same level of support.

## XML

![Augmentation point element](./images/aug-point.png)

### Instances

Augmentation point elements do not appear in XML instances because they are abstract.  They may only be omitted or replaced by their concrete substitutions. See [Augmentation Elements in XML](../element/#xml-container) for an example of how augmentation elements replace an augmentation point in an instance.

### Schema example

This snippet, from a subset of Core, shows how augmentation point element `nc:PersonAugmentationPoint` is defined and referenced by `nc:PersonType`:

```xml
<xs:complexType name="PersonType">
  <xs:annotation>
    <xs:documentation>A data type for a human being.</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="nc:PersonBirthDate" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:PersonName" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:PersonAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="PersonAugmentationPoint" abstract="true">
  <xs:annotation>
    <xs:documentation>An augmentation point for PersonType.</xs:documentation>
  </xs:annotation>
</xs:element>
```

{: .note}
- `nc:PersonType` includes a reference to its augmentation point (`nc:PersonAugmentationPoint`) as its last sub-element.
- The augmentation point element is abstract and has no type.

### Schema template

This template shows the declaration of a complex type that references its augmentation point, and the declaration of the augmentation point element itself.

```xml
<!-- NIEM type with sub-elements, like nc:PersonType -->
<xs:complexType name="NAMEType">
  <xs:annotation>
    <xs:documentation>A data type for a(n) {$Definition}</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="PARENT_TYPE">
      <xs:sequence>
        <xs:element ref="ELEMENT1" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="ELEMENT2" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="NAMEAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<!-- Augmentation Point Element, like nc:PersonAugmentationPoint -->
<xs:element name="NAMEAugmentationPoint" abstract="true">
  <xs:annotation>
    <xs:documentation>An augmentation point for NAMEType</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Partial template

Augmentation points do not actually require that many lines to create.  The majority of the template above shows how to create a type.  Only one line in the type declaration actually involves the augmentation point.

Without the rest of the type declaration, the template would look like:

```xml
<!-- Complex type declaration -->
        <xs:element ref="NAMEAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
<!-- End of complex type declaration -->

<!-- Augmentation Point Element, like nc:PersonAugmentationPoint -->
<xs:element name="NAMEAugmentationPoint" abstract="true">
  <xs:annotation>
    <xs:documentation>An augmentation point for NAMEType</xs:documentation>
  </xs:annotation>
</xs:element>
```

This is much simpler: one new augmentation point element, and one reference to it from its type.

## JSON

JSON Schema does not have a concept similar to element substitution.  Augmentation points are therefore not defined in NIEM JSON.  Substitutions of augmentation elements should be made directly.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.aug_point %}
