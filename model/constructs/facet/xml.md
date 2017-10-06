---
  title: Facets in XML
---

- TOC
{:toc}

## XML Overview

Facet declarations follow a similar pattern:

- A simple type is declared with a name, definition, base type, and one or more facet declarations.
- Each facet declaration specifies a facet kind, a value, and a definition.

<table class="table table-bordered table-hover table-striped">
  <tr>
    <th>Item</th>
    <th>Field</th>
    <th>Comments</th>
  </tr>
  <tr>
    <td>Simple type</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>name</td>
    <td>Names of types with enumerations must end with "CodeSimpleType".<br>
        All others must end with "SimpleType".
    </td>
  </tr>
  <tr>
    <td></td>
    <td>definition</td>
    <td>Must begin with "A data type for a(n) "</td>
  </tr>
  <tr>
    <td></td>
    <td>base</td>
    <td>The <a href="http://www.w3.org/TR/xmlschema-2/#built-in-datatypes">XML Schema built-in type</a> that will be constrained.<br>
        Typically "xs:token" (a string that does not allow irregular whitespace), "xs:decimal", or "xs:integer"
    </td>
  </tr>
  <tr>
    <td>Facet</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>kind</td>
    <td>Typically xs:enumeration, xs:pattern, xs:minInclusive, xs:minExclusive, xs:maxInclusive, or xs:maxExclusive<br><a href="./index.html#kinds-of-facets">See full list</a></td>
  </tr>
  <tr>
    <td></td>
    <td>value</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>definition</td>
    <td></td>
  </tr>
</table>

## Generic Template

```xml
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
