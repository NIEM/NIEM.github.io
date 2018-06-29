---
  title: CSC Types in XML
  short: XML
---

## Instance example

```xml
<nc:AddressCategoryCode structures:id="a1">residential</nc:AddressCategoryCode>
```

## Schema example

```xml
<xs:complexType name="AddressCategoryCodeType">
  <xs:annotation>
    <xs:documentation>A data type for a kind of address.</xs:documentation>
  </xs:annotation>
  <xs:simpleContent>
    <xs:extension base="nc:AddressCategoryCodeSimpleType">
      <xs:attributeGroup ref="structures:SimpleObjectAttributeGroup"/>
    </xs:extension>
  </xs:simpleContent>
</xs:complexType>
```

{: .note}
>
>- The CSC type extends a simple type.
>- The CSC type references an attribute group from `structures`.

## Schema template

```xml
<xs:complexType name="NAMEType">
  <xs:annotation>
    <xs:documentation>A data type for ...</xs:documentation>
  </xs:annotation>
  <xs:simpleContent>
    <xs:extension base="SIMPLETYPE">
      <xs:attributeGroup ref="structures:SimpleObjectAttributeGroup"/>
    </xs:extension>
  </xs:simpleContent>
</xs:complexType>
```
