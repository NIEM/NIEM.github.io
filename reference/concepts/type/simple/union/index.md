---
  title: Union Types
  icon: fa-plus
  description: A union type is a simple type that represents the combined set of allowable values from other simple types.
---

{{ page.description }}

{:toc}
- TOC

A union type defines a list of simple types as its members.  A value allowed by any one of its member types will be a valid value for the union type.

The benefit that this provides is reuse.  Rather than needing to duplicate values, types can be reused in combination instead.

One kind of use case for a union is for situations when an existing code set provides some, but not all, of the values that are needed. One option is to create a code set with just the missing values, create a union type that combines the original codes with the new codes, and create a new element based on the union type.

## XML

### Schema example

This example shows a union type and its two member types.

```xml
<xs:simpleType name="GradeSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a grade.</xs:documentation>
  </xs:annotation>
  <xs:union memberTypes="ext:LetterGradeSimpleType ext:NumericGradeSimpleType"/>
</xs:simpleType>

<xs:simpleType name="LetterGradeSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a letter grade.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:pattern value="[A-F]"/>
  </xs:restriction>
</xs:simpleType>

<xs:simpleType name="NumericGradeSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a numeric grade.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:integer">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="100"/>
  </xs:restriction>
</xs:simpleType>
```

### Instance example

This example shows possible values for a "GradeValue" element based on the union type above:

```xml
<ext:GradeValue>A</ext:GradeValue>
<ext:GradeValue>C</ext:GradeValue>
<ext:GradeValue>85</ext:GradeValue>
<ext:GradeValue>42</ext:GradeValue>
<ext:GradeValue>B</ext:GradeValue>
```

### Schema template

The following is a template for a simple union type with two members.  Additional member types may be added as needed.

```xml
<xs:simpleType name="NAMESimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a ...</xs:documentation>
  </xs:annotation>
  <xs:union memberTypes="SIMPLE-TYPE-1 SIMPLE-TYPE-2"/>
</xs:simpleType>
```

## JSON

JSON guidance is not yet available for union types.

## NDR References

{% include ndr-references.html list=site.data.ndr.concepts.union %}
