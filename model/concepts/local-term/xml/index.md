---
  title: Local Terminology and XML
  short: XML
---

- TOC
{:toc}

## Instances

Local terminology does not appear in instances.  They are defined in schemas to provide additional context for the properties and types defined there.

## Schema example

The snippet below is an extract from Core 4.0:

```xml
<xs:schema>
  <xs:annotation>
    <xs:documentation>NIEM Core.</xs:documentation>
    <xs:appinfo>
      <appinfo:LocalTerm term="SSN" literal="Social Security Number"/>
      <appinfo:LocalTerm term="ISO" literal="International Organization for Standardization"/>
      <appinfo:LocalTerm term="Alpha3" definition="Three-letter"/>
      <appinfo:LocalTerm term="Alpha2" definition="Two-letter"/>
    </xs:appinfo>
  </xs:annotation>
</xs:schema>
```

This example also includes the namespace definition.  A namespace's definition and local terminology are defined in the same schema-level `xs:annotation` block.

## Literal Template

This template shows how to define a term with its literal translation:

```xml
<xs:appinfo>
  <appinfo:LocalTerm term="TERM" literal="LITERAL"/>
</xs:appinfo>
```

## Definition Template

This template shows how to define a term with its definition:

```xml
<xs:appinfo>
  <appinfo:LocalTerm term="TERM" definition="DEFINITION"/>
</xs:appinfo>
```
