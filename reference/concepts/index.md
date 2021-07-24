---
  title: Concepts for data modeling
  short: Concepts
  icon: fa-cog
  description: Learn about properties, types, augmentations, and other building blocks used to construct the model.
  links:
  - url: /reference/concepts/namespace/
    group: Basics
  - url: /reference/concepts/property/
    group: Basics
  - url: /reference/concepts/type/
    group: Basics
  - url: /reference/concepts/facet/
    group: Basics
  - url: /reference/concepts/adapter/
    group: Advanced
  - url: /reference/concepts/association/
    group: Advanced
  - url: /reference/concepts/augmentation/
    group: Advanced
  - url: /reference/concepts/local-term/
    group: Advanced
  - url: /reference/concepts/metadata/
    group: Advanced
  - url: /reference/concepts/reference/
    group: Advanced
  - url: /reference/concepts/representation/
    group: Advanced
  - url: /reference/concepts/role/
    group: Advanced
---

{{ page.description }}

{:toc}
- TOC

The concepts below have NIEM-specific representations in XML and JSON.  Each section has information that demonstrates how to define these concepts in a schema and how sample data would appear in an instance.

{:.tip}
> For a basic introduction to XML or JSON, there are many resources available online, including the W3 Schools [XML Tutorial](https://www.w3schools.com/xml/default.asp) and [XML Schema Tutorial](https://www.w3schools.com/xml/schema_intro.asp), and the json-schema.org tutorial [Understanding JSON Schema](https://json-schema.org/understanding-json-schema/index.html).

## The Basics

Fundamentally, a NIEM release consists of a set of namespaces, each of which define properties and types (referred to more generally as components).  An IEPD reuses components from a release that meet its requirements, and creates new properties and types in local namespaces as needed.  These namespaces, properties, and types are basic building blocks of NIEM.

### Namespaces

Learn about namespaces in NIEM and see schema examples and templates with header information at the XML and JSON links below.

<table>
  {% include functions/getPatternRow.html url="/reference/concepts/namespace/" %}
</table>

### Properties

{% assign property = site.pages | where: "url", "/reference/concepts/property/" | first %}

{{ property.description}}

<table>
  {% include functions/getPatternRow.html url="/reference/concepts/property/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/property/element/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/property/abstract/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/property/substitutable/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/property/attribute/" %}
</table>

{:.tip}
> See the information in the **[Property](property)** page for guidance on **[Naming](property/#naming)**, **[Definitions](property/#definitions)**, and **[Representation terms + Definition Standard Opening Phrases](property/#representation-terms-and-definition-phrases)**.

### Types

{% assign type = site.pages | where: "url", "/reference/concepts/type/" | first %}

{{ type.description}}

<table>
  {% include functions/getPatternRow.html url="/reference/concepts/type/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/type/ccc/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/type/csc/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/type/simple/" %}
</table>

### Code Sets and other Facets

Facets let you constrain the allowable values for a string, number, date, or other simple type.  Codes (enumerations) are the most commonly used facet in NIEM.  Other facets include patterns, length, and maxExclusive.

<table>
  {% include functions/getPatternRow.html url="/reference/concepts/facet/" %}
</table>

## NIEM-Specific Techniques

In addition to the basic concepts described above, NIEM defines or uses additional concepts to reflect its conceptual model, improve reusability, and support well-defined information exchanges.  These topics are defined by the NIEM [Naming and Design Rules (NDR)]({{ site.data.pages.ndr | relative_url }}).

<table>
  {% include functions/getPatternRow.html url="/reference/concepts/adapter/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/association/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/augmentation/point/" %}

  <!-- Augmentation elements do not follow the same pattern and have two XML syntaxes -->
  {% assign augPage = site.pages | where: "url", "/reference/concepts/augmentation/element/" | first %}
  <tr>
    <td><strong>
      <a href="{{ '/reference/concepts/augmentation/element/' | relative_url }}">Augmentation Element</a>
    </strong></td>
    <td>{{ augPage.description }}</td>
    <td>
      <a title="Container"
         href="{{ '/reference/concepts/augmentation/element/#xml-container' | relative_url }}" >XML1</a>
      <br />
      <a title="Direct"
         href="{{ '/reference/concepts/augmentation/element/#xml-direct-substitution' | relative_url }}">XML2</a>
    </td>
    <td><a href="{{ '/reference/concepts/augmentation/element/#json' | relative_url }}">JSON</a></td>
  </tr>

  {% include functions/getPatternRow.html url="/reference/concepts/local-term/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/metadata/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/reference/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/role/" %}
  {% include functions/getPatternRow.html url="/reference/concepts/representation/" %}
</table>
