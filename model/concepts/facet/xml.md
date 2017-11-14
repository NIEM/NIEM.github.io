---
  title: Facets in XML
  tutorial: xml
---

- TOC
{:toc}

## Generic Template

The template below defines a simple type with two facets.

- Common base types are "xs:token" (a string that does not allow irregular whitespace), "xs:decimal", and "xs:integer".
- Typical kinds of facets are "xs:enumeration", "xs:pattern", "xs:minInclusive, xs:minExclusive, xs:maxInclusive, or xs:maxExclusive.  See the [full list](.#kinds-of-facets).
- Facet values and definitions must be provided by the data modeler.

``` xml
<xs:simpleType name="NAMESimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) TYPE_DEFINITION</xs:documentation>
  </xs:annotation>
  <xs:restriction base="BASE_TYPE">
    <xs:FACET_KIND_1 value="FACET_VALUE_1">
     <xs:annotation>
      <xs:documentation>FACET_DEFINITION_1</xs:documentation>
      </xs:annotation>
    </xs:FACET_KIND_1>
    <xs:FACET_KIND_2 value="FACET_VALUE_2">
     <xs:annotation>
      <xs:documentation>FACET_DEFINITION_2</xs:documentation>
      </xs:annotation>
    </xs:FACET_KIND_2>
  </xs:restriction>
</xs:simpleType>
```
{: #tutorial-facet-generic }

{% include copybutton.html id="tutorial-facet-generic" %}

## Common Templates

### Enumerations

This template shows a simple type with a single enumeration.  Repeat the `xs:enumeration` block for each code value for this type.

```xml
<xs:simpleType name="NAMECodeSimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) TYPE_DEFINITION</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:enumeration value="FACET_VALUE">
     <xs:annotation>
      <xs:documentation>FACET_DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```
{: #tutorial-facet-enum }

{% include copybutton.html id="tutorial-facet-enum" %}

### Numeric Range

This template shows a numeric simple type with a minimum and a maximum value.

```xml
<xs:simpleType name="{$Name}SimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) {$TypeDefinition}</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="{$MinFacetValue}">
     <xs:annotation>
      <xs:documentation>{$MinFacetDefinition}</xs:documentation>
      </xs:annotation>
    </xs:minInclusive>
    <xs:maxInclusive value="{$MaxFacetValue}">
     <xs:annotation>
      <xs:documentation>{$MaxFacetDefinition}</xs:documentation>
      </xs:annotation>
    </xs:maxInclusive>
  </xs:restriction>
</xs:simpleType>
```
{: #tutorial-facet-range }

{% include copybutton.html id="tutorial-facet-range" %}


- The `xs:restriction base` may be replaced with any numeric simple type
- The `minInclusive` may be replaced with `minExclusive`
- The `maxInclusive` may be replaced with `maxExclusive`
