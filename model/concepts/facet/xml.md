---
  title: Facets in XML
  training: xml
  next: Adapter
---

- TOC
{:toc}

## Generic Template

The template below defines a simple type with two facets.

- Common base types are "xs:token" (a string that does not allow irregular whitespace), "xs:decimal", and "xs:integer".
- Common kinds of facets are "xs:enumeration", "xs:pattern", "xs:minInclusive, xs:minExclusive, xs:maxInclusive, or xs:maxExclusive.  See the [full list](.#kinds-of-facets).
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
{: #training-facet-generic-xml }

{% include copybutton.html id="training-facet-generic-xml" %}

## Common Templates

### Enumerations

This template shows a simple type with a single enumeration.

- Because these facets are enumerations, the type name must end with `CodeSimpleType`.
- Repeat the `xs:enumeration` block for each code value for this type.

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
{: #training-facet-enum-xml }

{% include copybutton.html id="training-facet-enum-xml" %}

### Numeric Range

This template shows a numeric simple type with a minimum and a maximum value.

- The `xs:restriction base` may be replaced with any numeric simple type
- The `minInclusive` may be replaced with `minExclusive`
- The `maxInclusive` may be replaced with `maxExclusive`

```xml
<xs:simpleType name="NAMESimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) {$TypeDefinition}</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:decimal">
    <xs:minInclusive value="MIN_FACET_VALUE}">
     <xs:annotation>
      <xs:documentation>MIN_FACET_DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:minInclusive>
    <xs:maxInclusive value="MAX_FACET_VALUE">
     <xs:annotation>
      <xs:documentation>MAX_FACET_DEFINITION</xs:documentation>
      </xs:annotation>
    </xs:maxInclusive>
  </xs:restriction>
</xs:simpleType>
```
{: #training-facet-range-xml }

{% include copybutton.html id="training-facet-range-xml" %}
