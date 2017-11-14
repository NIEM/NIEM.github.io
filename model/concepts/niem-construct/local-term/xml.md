---
  title: Local Terminology and XML
  tutorial: xml
---

- TOC
{:toc}

## Overview

Local terminology is declared on the annotation element for the schema.  Either a literal or a definition is required for each term.

## Example schema

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

This example also includes the namespace definition in the same `xs:annotation` block via `xs:documentation`.

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
{: #tutorial-term-literal }

{% include copybutton.html id="tutorial-term-literal" %}

### Definition

This template shows how to define a term with its definition:

```xml
<xs:appinfo>
  <term:LocalTerm term="TERM" definition="DEFINITION"/>
</xs:appinfo>
```
{: #tutorial-term-def }

{% include copybutton.html id="tutorial-term-def" %}
