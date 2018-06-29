---
  title: Attributes in XML
  short: XML
---

- TOC
{:toc}

## Instance example

This example shows the use of two attributes: `structures:id` and `nc:personNameInitialIndicator`.

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

## Schema example

```xml
<xs:attribute name="personNameInitialIndicator" type="xs:boolean">
  <xs:annotation>
    <xs:documentation>
      True if value represents the first letter or initials of a persons name; false otherwise.
    </xs:documentation>
  </xs:annotation>
</xs:attribute>
```

## Schema template

```xml
<xs:attribute name="NAME" type="TYPE">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:attribute>
```
