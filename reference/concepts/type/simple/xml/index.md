---
  title: Simple Types in XML
  short: XML
---

## Instance example

The following is an example of attribute `nc:personNameInitialIndicator`.  It has simple type `xs:boolean`.

```xml
<nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
```

{: .note}
>The attribute has a simple value: the boolean "true".

## Schema example

This example shows a subset of `nc:AddressCategoryCodeSimpleType`.

```xml
<xs:simpleType name="AddressCategoryCodeSimpleType">
  <xs:annotation>
    <xs:documentation>A data type for a kind of address.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:enumeration value="business">
      <xs:annotation>
        <xs:documentation>business</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
    <xs:enumeration value="residential">
      <xs:annotation>
        <xs:documentation>residential</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```

## Schema template

This template shows the creation of a simple type with an enumeration.  Other kinds of [facets](/reference/concepts/facet) could be used instead.

```xml
<xs:simpleType name="NAMESimpleType">
  <xs:annotation>
    <xs:documentation>A data type for ...</xs:documentation>
  </xs:annotation>
  <xs:restriction base="SIMPLETYPE">
    <xs:enumeration value="CODE">
      <xs:annotation>
        <xs:documentation>CODE_DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```
