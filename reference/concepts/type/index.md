---
  title: Types
  icon: fa-sitemap
  description: A type represents a data structure that defines a set of allowable values.
  links:
    - url: /reference/concepts/type/modeling/
    - url: /reference/concepts/type/ccc/
      group: kind
    - url: /reference/concepts/type/csc/
      group: kind
    - url: /reference/concepts/type/simple/
      group: kind
---

A type defines a structure - an allowable set of values.  A type might describe
a simple value (e.g., a string, a number) or a complex object (e.g., `PersonType`).

{:.example}
>
>- A type for a person's last name property might be a string.
>- A type for an address property might represent an object, with its own set of properties for street, city, state, and zip.

<!--more-->

Types tend to be less specific than properties. That is by design in order to
increase reusability.

{: .example}
>The properties `nc:PersonBirthDate`, `nc:ActivityDate`, and
>`it:ItineraryDepartureDate` are all dates and can each reuse the same `nc:DateType`
>type.

## Kinds

There are three fundamental representations for a NIEM type.  This list corresponds directly with XML type styles.  NIEM defines corresponding representations of these types for JSON, which is structured differently.

{% assign links = page.links | where: "group", "kind" %}
{% include icon-list.html links=links %}
