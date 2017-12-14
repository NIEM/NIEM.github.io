---
  title: Types
  icon: fa-sitemap
  description: A type represents a data structure that defines a set of allowable values.
  links:
    - url: /model/concepts/type/modeling/
    - url: /model/concepts/type/ccc/
      group: kind
    - url: /model/concepts/type/csc/
      group: kind
    - url: /model/concepts/type/simple/
      group: kind
---

- TOC
{:toc}

{% include_relative intro/index.md %}

Types tend to be less specific than properties - that is by design.  It increases reusability.

{: .example}
> Properties `nc:PersonBirthDate`, `nc:ActivityDate` and `it:ItineraryDepartureDate` are all dates and can each reuse the same type - `nc:DateType`.

## Kinds

There are three fundamental representations for a NIEM type.  This list corresponds directly with XML type styles.  NIEM defines corresponding representations of these types for JSON, which is structured differently.

{% assign links = page.links | where: "group", "kind" %}
{% include icon-list.html links=links %}
