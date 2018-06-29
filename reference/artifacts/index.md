---
  title: Model Artifacts
  short: Model Artifacts
  icon: fa-sitemap
  description: Learn about the kinds of files that make up NIEM releases and IEPDs.
  links:
  - url: /reference/artifacts/overview/
  - url: /reference/artifacts/reference-schema-document/
    group: schema
  - url: /reference/artifacts/extension-schema-document/
    group: schema
  - url: /reference/artifacts/reference-vs-extension/
  - url: /reference/artifacts/subset-schema-document/
    group: schema
  - url: /reference/artifacts/code-lists/
    group: special
  - url: /reference/artifacts/schema-document-set/
    group: special
  - url: /reference/artifacts/iepd/
    group: package
  - url: /reference/artifacts/iep/
    group: package
---

The NIEM Model artifacts are the substantive components created to represent the exchange data model. Typically they are packaged into several collections of text, JSON, XML, and binary files.

See a [one-page overview](overview) for excerpts of each of the major artifacts. You may also choose an item on this page for which you need more information

## Schema Artifacts

The NIEM artifacts are the physical components created to package and represent the data model divided into several files.

{% assign basicLinks = page.links | where: "group", "schema" %}
{% include icon-list.html links=basicLinks %}

## Special Artifacts

{% assign advancedLinks = page.links | where: "group", "special" %}
{% include icon-list.html links=advancedLinks %}

## Model Package Artifacts

{% assign advancedLinks = page.links | where: "group", "package" %}
{% include icon-list.html links=advancedLinks %}
