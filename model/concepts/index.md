---
  title: Concepts
---

- TOC
{:toc}

## Overview

| Construct | Definition | Overview | XML | JSON |
| --------- | ---------- | -------- | --- | ---- |
| Namespace | {% include_relative namespace/def.md %} | <a href="namespace/index.html">overview</a> | <a href="namespace/xml.html">xml</a> | <a href="http://niem.github.io/json/guidance/#niem-json-template">json</a> |
| Component | {% include_relative component/def.md %} | <a href="component/index.html">overview</a> | n/a | n/a |
| Property | {% include_relative component/property/def.md %} |  | n/a | n/a |
| Type | {% include_relative component/type/def.md %} |  | n/a | n/a |
| Facet | {% include_relative facet/def.md %} | <a href="./facet/index.html">overview</a> | <a href="./facet/xml.html">xml</a> | TBD |

See below for XML and JSON representations of specific kinds of properties and types.

## Kinds of Properties

| Property |     | Definition | Overview | XML | JSON |
|--------- | --- | ---------- | -------- | --- | ---- |
| Element |  | {% include_relative component/property/element/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#element-content-of-an-object-or-association-type">json</a> |
|  | Abstract | {% include_relative component/property/element/abstract/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#abstract-elements-and-substitution-groups">json</a> |
|  | Substitution | {% include_relative component/property/element/substitution/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#abstract-elements-and-substitution-groups">json</a> |
| Attribute |  | {% include_relative component/property/attribute/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#element-witd-simple-content-and-attributes">json</a> |

## Kinds of Types

| Type | Content | Definition | Overview | XML | JSON |
| ---- | ------- | ---------- | -------- | --- | ---- |
| Simple Type |  | {% include_relative component/type/simple/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#element-witd-simple-content-and-no-attributes">json</a> |
| Complex Type | Simple Content | {% include_relative component/type/csc/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#element-witd-simple-content-and-attributes">json</a> |
| Complex Type | Complex Content | {% include_relative component/type/ccc/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#element-witd-complex-content-and-attributes">json</a> |

## NIEM-specific constructs

| Construct | Definition | Overview | XML | JSON |
| --------- | ---------- | -------- | --- | ---- |
| Adapter | {% include_relative niem-construct/adapter/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#adapter-elements">json</a> |
| Association | {% include_relative niem-construct/association/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#element-content-of-an-object-or-association-type">json</a> |
| Augmentation | {% include_relative niem-construct/augmentation/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#augmentations">json</a> |
| Metadata | {% include_relative niem-construct/metadata/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#metadata">json</a> |
| Role | {% include_relative niem-construct/role/def.md %} |  |  | <a href="http://niem.github.io/json/guidance/#references-and-idref-attributes">json</a> |