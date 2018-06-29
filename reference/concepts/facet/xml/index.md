---
  title: Facets in XML
  short: XML
---

## Enumeration Example

This example shows a simple type with two enumerations: `MonthCodeSimpleType` with codes for **JAN** and **FEB**.

This is enough to show how to create a code set, but ten more enumeration statements would need to be added to make this type example complete.

```xml
<xs:simpleType name="MonthCodeSimpleType">
   <xs:annotation>
    <xs:documentation>A data type for month codes.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:enumeration value="JAN">
     <xs:annotation>
      <xs:documentation>January</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
    <xs:enumeration value="FEB">
     <xs:annotation>
      <xs:documentation>February</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```

{: .note}
>Because these facets are enumerations, the type name must end with `CodeSimpleType`.

## Numeric Range Example

This example shows a numeric simple type with a range of 0 to 100, inclusive.

```xml
<xs:simpleType name="TestResultSimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a range of valid test result values.</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="0"/>
    <xs:maxInclusive value="100"/>
  </xs:restriction>
</xs:simpleType>
```

{: .note}
>
>- The `xs:restriction base` may be replaced with any numeric simple type, like `xs:integer`.
>- The `minInclusive` may be replaced with `minExclusive`.
>- The `maxInclusive` may be replaced with `maxExclusive`.
>- Remove either the min or max facet in order to create a range that is unbounded on one side.

## Generic Template

The template below defines a simple type with a facet.

``` xml
<xs:simpleType name="NAMESimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) ...</xs:documentation>
  </xs:annotation>
  <xs:restriction base="BASE">
    <xs:KIND value="VALUE">
     <xs:annotation>
      <xs:documentation>DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:KIND>
  </xs:restriction>
</xs:simpleType>
```

{: .note}
>
>- Common base types are `xs:token` (a string that does not allow irregular whitespace), `xs:decimal`, and `xs:integer`.
>- Common kinds of facets are `xs:enumeration`, `xs:pattern`, `xs:minInclusive`, `xs:minExclusive`, `xs:maxInclusive`, and `xs:maxExclusive`.  See the [full list](/reference/concepts/facet/json/#kinds-of-facets).
>- Names, values, and definitions must be provided by the data modeler.
