---
  title: Local Terminology
---

### Local terminology

Local terminology is declared on the annotation element for the schema.  Either a literal or a definition is required for each term:

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" literal="LITERAL"/>
</xs:appinfo>
```

or

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" definition="DEFINITION"/>
</xs:appinfo>
```

Core 4.0 example (also includes the namespace definition via `xs:documentation`):

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>NIEM Core.</xs:documentation>
    <xs:appinfo>
      <term:LocalTerm term="SSN" literal="Social Security Number"/>
      <term:LocalTerm term="ISO" literal="International Organization for Standardization"/>
      <term:LocalTerm term="Alpha3" definition="Three-letter"/>
      <term:LocalTerm term="Alpha2" definition="Two-letter"/>
      ...
    </xs:appinfo>
  </xs:annotation>
  ...
</xs:schema>
```
