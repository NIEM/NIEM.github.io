---
  title: Facets in XML
---

- TOC
{:toc}

## XML Overview

Facet declarations follow a similar pattern:

- A simple type is declared with a name, definition, base type, and one or more facet declarations.
- Each facet declaration specifies a facet kind, a value, and a definition.

| Item | Field | Comments |
| ---- | ----- | -------- |
| Simple type |  |  |
|      | name | Names of types with enumerations must end with "CodeSimpleType" | All others must end with "SimpleType".
|      | definition | Must begin with "A data type for a(n) " |
|      | base | The <a href="http://www.w3.org/TR/xmlschema-2/#built-in-datatypes">XML Schema built-in type</a> that will be constrained | Typically "xs:token" (a string that does not allow irregular whitespace), "xs:decimal", or "xs:integer"
| Facet  |  |
|      | kind | Typically xs:enumeration, xs:pattern, xs:minInclusive, xs:minExclusive, xs:maxInclusive, or xs:maxExclusive<br><a href="./index.html#kinds-of-facets">See full list</a> |
|      | value |  |
|      | definition |  |

## Generic Template

``` xml
<xs:simpleType name="{$Name}SimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) {$Definition}</xs:documentation>
  </xs:annotation>
  <xs:restriction base="{$XSDBase}">
    <xs:{$FacetKind} value="{$FacetValue}">
     <xs:annotation>
      <xs:documentation>{$FacetDefinition}</xs:documentation>
      </xs:annotation>
    </xs:{$FacetKind}>
  </xs:restriction>
</xs:simpleType>
```

## Common Templates

### Enumerations

```xml
<xs:simpleType name="{$Name}CodeSimpleType">
   <xs:annotation>
    <xs:documentation>A data type for a(n) {$TypeDefinition}</xs:documentation>
  </xs:annotation>
  <xs:restriction base="xs:token">
    <xs:enumeration value="{$FacetValue}">
     <xs:annotation>
      <xs:documentation>{$FacetDefinition}</xs:documentation>
      </xs:annotation>
    </xs:enumeration>
  </xs:restriction>
</xs:simpleType>
```

- Repeat the `xs:enumeration` block for each code value.

### Numeric Range

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

- The `xs:restriction base` may be replaced with any numeric simple type
- The `minInclusive` may be replaced with `minExclusive`
- The `maxInclusive` may be replaced with `maxExclusive`

## See also

- TODO: Element with simple content template
