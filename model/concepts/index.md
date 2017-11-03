---
  title: Concepts
---

The architecture of NIEM is based on an underlying conceptual model, with XML and JSON-based implementations.  To promote consistency across a broad NIEM community, NIEM limits some of the features available in standard XML Schema and JSON that provide flexibility but may hurt interoperability, and adds additional rules, guidelines, and features of its own.

The first table below describes fundamental concepts that form the basis of the NIEM model.  These concepts can be found in most modeling languages, with variations in names and syntax.  This is a great starting place to learn about the basic building blocks of NIEM.

The second table describes special concepts and features NIEM has added specifically to support the conceptual model and well-defined information exchanges.

Information about the different concepts are broken out into separate pages.  This is to make it easier for readers to find the content that is relevant to them.

- Overview pages should be suitable for all readers looking for a general understanding of NIEM.
- Modeling pages describe rules and guidelines for building those concepts.
- XML and JSON pages show how NIEM concepts are represented in those languages.
  - Note that these pages do not provide training on XML or JSON itself - there are many resources available that do this already.

The tables currently provide direct links to the available pages for each concept.  The layout of the website is also under development at this time; it is expected that page navigation will become simpler and more intuitive in the near future.

## General concepts

These concepts describe the basics of the NIEM model.  Namespaces provide organization and modularity for the content defined by the model.  Properties and types make up that content.  Properties (or elements and attributes) provide semantic meaning and are the fields that show up in instance documents.  Types define the structures of those properties, and what values are allowed.  Facets are one way of further constraining allowable values in a type.

| Concept | Definition | Overview | Modeling | XML | JSON |
| ------- | ---------- | -------- | -------- | --- | ---- |
| Property | {% include_relative component/property/def.md %} | [overview](component) |  | element<br>attribute | [json](../../json/guidance/#element-content-of-an-object-or-association-type) |
| Type | {% include_relative component/type/def.md %} | [overview](component) |  | xml | json |
| Facet | {% include_relative facet/def.md %} | [overview](facet/) | [modeling](facet/modeling) | [xml](facet/xml) | [json](facet/json) |
| Namespace | {% include_relative namespace/def.md %} | [overview](namespace) | [modeling](namespace/modeling) | [xml](namespace/xml) | [json](namespace/json) |

## NIEM-specific concepts

The concepts below are more advanced and may or may not have logical counterparts in other modeling languages.  They describe things like how NIEM allows for the use of non-conformant external standards, how to specify metadata, and define and use additional content with existing types.

| Concept | Definition | Overview | Modeling | XML | JSON |
| ------- | ---------- | -------- | -------- | --- | ---- |
| Adapter | {% include_relative niem-construct/adapter/def.md %} |  |  |  | [json](../../json/guidance/#adapter-elements) |
| Association | {% include_relative niem-construct/association/def.md %} |  |  |  | [json](../../json/guidance/#element-content-of-an-object-or-association-type) |
| Augmentation | {% include_relative niem-construct/augmentation/def.md %} | [overview](niem-construct/augmentation) | [modeling](niem-construct/augmentation/modeling) | [xml](niem-construct/augmentation/xml) | [json](niem-construct/augmentation/json) |
| Local Terminology | {% include_relative niem-construct/local-term/def.md %} | [overview](niem-construct/local-term) | [modeling](niem-construct/local-term/modeling) | [xml](niem-construct/local-term/xml) | [json](niem-construct/local-term/json) |
| Metadata | {% include_relative niem-construct/metadata/def.md %} |  |  |  | [json](../../json/guidance/#metadata) |
| References | | | | |
| Role | {% include_relative niem-construct/role/def.md %} |  |  |  | [json](../../json/guidance/#references-and-idref-attributes) |