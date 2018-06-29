---
  title: Abstract Elements in XML
  short: XML
---

- TOC
{:toc}

## Instances

Abstract elements exist solely to be replaced.  They do not appear in an XML instance.

See [Substitutable Elements in XML](../../substitutable/xml) for an example of a substitution in an instance.

## Schema example

```xml
<xs:element name="LocationCountyAbstract" abstract="true">
  <xs:annotation>
    <xs:documentation>
      A data concept for a county, parish, vicinage, or other such geopolitical subdivision of a state.
    </xs:documentation>
  </xs:annotation>
</xs:element>
```

{: .note}
- The name ends with "Abstract".
- The element does not have a type.
- The element declaration has an `abstract="true"` attribute.
- The definition begins with "A data concept for ..."

## Schema template

```xml
<xs:element name="NAMEAbstract" abstract="true">
  <xs:annotation>
    <xs:documentation>
      A data concept for ...
    </xs:documentation>
  </xs:annotation>
</xs:element>
```
