---
  title: Concepts
  icon: fa-cog
  description: This section describes the building blocks used to construct the model.
  links:
  - url: /model/concepts/namespace/
    group: Basics
  - url: /model/concepts/property/
    group: Basics
  - url: /model/concepts/type/
    group: Basics
  - url: /model/concepts/facet/
    group: Basics
  - url: /model/concepts/adapter/
    group: Advanced
  - url: /model/concepts/augmentation/
    group: Advanced
  - url: /model/concepts/local-term/
    group: Advanced
  - url: /model/concepts/metadata/
    group: Advanced
  todo: Additional sections
  future:
  - url: /model/concepts/reference/
    group: Basics
  - url: /model/concepts/association/
    group: Advanced
  - url: /model/concepts/code-lists/
    group: Advanced
  - url: /model/concepts/representation/
    group: Advanced
  - url: /model/concepts/security-markup/
    group: Advanced
---

{{ page.description }}

[Click here](overview) for a one-page overview of each of the major concepts; otherwise continue on to go through the concepts one-by-one - or jump directly to the one you need more information about.

## The Basics

Fundamentally, a NIEM release consists of a set of namespaces, each of which define properties and types (referred to more generally as components).  An IEPD reuses components from a release that meet its requirements, and creates new properties and types in local namespaces as needed.  These namespaces, properties, and types are basic building blocks of NIEM.

{% assign basicLinks = page.links | where: "group", "Basics" %}
{% include icon-list.html links=basicLinks %}

## Advanced

In addition to the basic concepts described above, NIEM defines or uses additional concepts to reflect its conceptual model, improve reusability, and support well-defined information exchanges.

{% assign advancedLinks = page.links | where: "group", "Advanced" %}
{% include icon-list.html links=advancedLinks %}
