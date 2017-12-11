---
  title: Local Terminology and XML
  short: XML
  training: xml
  next: metadata
---

- TOC
{:toc}

## XML instances

Local terminology does not appear in instances.  It provides additional context to help understand the properties and types defined by the schemas.

## XML Schema example

The snippet below is an extract from Core 4.0:

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>NIEM Core.</xs:documentation>
    <xs:appinfo>
      <term:LocalTerm term="SSN" literal="Social Security Number"/>
      <term:LocalTerm term="ISO" literal="International Organization for Standardization"/>
      <term:LocalTerm term="Alpha3" definition="Three-letter"/>
      <term:LocalTerm term="Alpha2" definition="Two-letter"/>
    </xs:appinfo>
  </xs:annotation>
</xs:schema>
```

This example also includes the namespace definition.  Both are defined in the same schema-level `xs:annotation` block.

## Templates

### Full

This template shows how to define local terminology on the schema's annotation node:

```xml
<xs:schema>
  <xs:annotation>
    <xs:appinfo>
      <term:LocalTerm term="TERM" literal="LITERAL" definition="DEFINITION"/>
    </xs:appinfo>
  </xs:annotation>
</xs:schema>
```

### Literal

This template shows how to define a term with its literal translation:

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" literal="LITERAL"/>
</xs:appinfo>
```

### Definition

This template shows how to define a term with its definition:

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" definition="DEFINITION"/>
</xs:appinfo>
```
