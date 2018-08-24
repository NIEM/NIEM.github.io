---
  title: Model Concepts
  short: Concepts
  icon: fa-cog
  description: Learn about properties, types, augmentations, and other building blocks used to construct the model.
  links:
  - url: /reference/concepts/overview/
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

Click here for a [one-page summary](overview) of each of the major concepts.

{: .note}
> The concepts below have NIEM-specific representations in XML and JSON.  Each section has pages that demonstrate how to define these concepts in a schema and how sample data would appear in an instance.  For a basic introduction to XML or JSON, there are many resources available online, including W3 Schools [XML Tutorial](https://www.w3schools.com/xml/default.asp) and [XML Schema Tutorial](https://www.w3schools.com/xml/schema_intro.asp), and the Space Telescope Science Institute [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/).

## The Basics

Fundamentally, a NIEM release consists of a set of namespaces, each of which define properties and types (referred to more generally as components).  An IEPD reuses components from a release that meet its requirements, and creates new properties and types in local namespaces as needed.  These namespaces, properties, and types are basic building blocks of NIEM.

{% assign basicLinks = page.links | where: "group", "Basics" %}
{% include icon-list.html links=basicLinks %}

## Advanced

In addition to the basic concepts described above, NIEM defines or uses additional concepts to reflect its conceptual model, improve reusability, and support well-defined information exchanges.

{% assign advancedLinks = page.links | where: "group", "Advanced" %}
{% include icon-list.html links=advancedLinks %}
