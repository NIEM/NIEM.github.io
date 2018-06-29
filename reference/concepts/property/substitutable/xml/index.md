---
  title: Substitutable Elements in XML
  short: XML
---

- TOC
{:toc}

## Instance example

In the example below, element `nc:Date` appears as a replacement for element `nc:DateRepresentation`, an abstract element that cannot appear in an instance.

```xml
<nc:Person>
  <nc:PersonBirthDate>
    <!-- Date is substituted for DateRepresentation -->
    <nc:Date>1950-06-30</nc:Date>
  </nc:PersonBirthDate>
</nc:Person>
```

## Schema example

```xml
<xs:element name="Date" type="niem-xs:date" substitutionGroup="nc:DateRepresentation" nillable="true">
  <xs:annotation>
    <xs:documentation>A full date.</xs:documentation>
  </xs:annotation>
</xs:element>
```

{: .note}
- The element declares what it may be substituted in place of in the `substitutionGroup` attribute.
- In this case, the `Date` element may replace element `nc:DateRepresentation` wherever it occurs.

## Schema template

```xml
<xs:element name="NAME" type="TYPE" substitutionGroup="SUBSTITUTION" nillable="true">
  <xs:annotation>
    <xs:documentation>DEFINITION</xs:documentation>
  </xs:annotation>
</xs:element>
```
