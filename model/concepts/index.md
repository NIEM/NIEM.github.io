---
  title: Concepts
---

- TOC
{:toc}

## Overview

Each NIEM release and IEPD defines a set of namespaces.  Namespaces in turn define components - properties and types.

## General concepts

| Construct | Definition | Overview | XML | JSON |
| --------- | ---------- | -------- | --- | ---- |
| Namespace | {% include_relative namespace/def.md %} | [overview](namespace) | [xml](namespace/xml) | [json](../../json/guidance/#niem-json-template) |
| Property | {% include_relative component/property/def.md %} | [overview](component) | element<br>attribute | [json](../../json/guidance/#element-content-of-an-object-or-association-type) |
| Type | {% include_relative component/type/def.md %} | [overview](component) | xml | json |
| Facet | {% include_relative facet/def.md %} | [facet](facet/overview) | [xml](facet/xml) | TBD |

## NIEM-specific constructs

| Construct | Definition | Overview | XML | JSON |
| --------- | ---------- | -------- | --- | ---- |
| Adapter | {% include_relative niem-construct/adapter/def.md %} |  |  | [json](../../json/guidance/#adapter-elements) |
| Association | {% include_relative niem-construct/association/def.md %} |  |  | [json](../../json/guidance/#element-content-of-an-object-or-association-type) |
| Augmentation | {% include_relative niem-construct/augmentation/def.md %} |  |  | [json](../../json/guidance/#augmentations) |
| Metadata | {% include_relative niem-construct/metadata/def.md %} |  |  | [json](../../json/guidance/#metadata) |
| References | | | |
| Role | {% include_relative niem-construct/role/def.md %} |  |  | [json](../../json/guidance/#references-and-idref-attributes) |