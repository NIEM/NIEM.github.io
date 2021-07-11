---
  title: Local Terminology
  icon: fa-book
  description: Local terminology is a word, phrase, abbreviation, acronym, jargon, or other string of characters specially documented in a namespace because no definition or literal exists in a standard dictionary.
  redirect_from:
    - /reference/concepts/local-term/modeling/
    - /reference/concepts/local-term/xml/
    - /reference/concepts/local-term/json/
---

Local terminology is a word, phrase, acronym, jargon, or other string of characters specially documented in a namespace because it is not defined in a standard dictionary.  Literals or definitions are provided.

{:toc}
- TOC

Because NIEM is designed to be widely reusable, it is important to make sure semantics are clear, even outside of the given subject matter area.

{: .example}
> Core defines "GSM" as a local term with literal "Global System for Mobile communication".

Once defined at the namespace level, local terminology does not need to be redefined each time it is used.

<!--more-->

**Examples from Core:**

| Term | Literal | Definition |
| ---- | ------- | ---------- |
| GSM  | Global System for Mobile communication | |
| SSN | Social Security Number | |
| Alpha2 | | Two-letter |
| Alpha3 | | Three-letter |
{: .table-auto}

## Modeling guidance

### Scope

Local terminology declarations apply to the entire namespace in which they are defined.

This means that:

- A term that is used in multiple properties and/or types in a namespace is only defined once.
- Each namespace must define its own terminology - terminology from Core or other domains cannot be imported or reused.

### Literal or definition

Each local term must have a literal translation or a definition.

## XML

### Instances

Local terminology does not appear in instances.  They are defined in schemas to provide additional context for the properties and types defined there.

### Schema example

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

### Literal Template

This template shows how to define a term with its literal translation:

```xml
<xs:appinfo>
  <appinfo:LocalTerm term="TERM" literal="LITERAL"/>
</xs:appinfo>
```

### Definition Template

This template shows how to define a term with its definition:

```xml
<xs:appinfo>
  <appinfo:LocalTerm term="TERM" definition="DEFINITION"/>
</xs:appinfo>
```

## JSON

JSON guidance is not yet available for local terminology.

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.term %}
