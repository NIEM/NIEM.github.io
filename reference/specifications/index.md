---
title: NIEM Specifications
short: Specifications
icon: fa-book
description: NIEM specifications provide rules and guidance in order to design consistent and well-defined information exchanges.  Specifications are managed by the NIEM Technical Architecture Committee (NTAC).
links:
- url: /reference/specifications/rule-browser/
- url: /reference/specifications/ndr/
  classID: NDR
  group: specs
- url: /reference/specifications/mpd/
  classID: IEPD
  group: specs
- url: /reference/specifications/json/
  classID: JSON
  group: specs
- url: /reference/specifications/conformance/
  classID: Conformance
  group: specs
- url: /reference/specifications/conformance-targets/
  classID: CTAS
  group: specs
- url: /reference/specifications/code-lists/
  classID: CodeLists
  group: specs
- url: /reference/specifications/hlva/
  classID: HLVA
  group: specs
todo:
- JSON
deferred:
- SIX
- UML Profile
---

{{ page.description }}

View and search rules from the specifications below in the **[NIEM Specification Rule Browser](./rule-browser)**.

{% assign announcement = site.data.specs.announcement.message %}

{% if announcement %}
{% assign drafts = site.data.specs.niem-specs | where: "specStatus", "draft" %}

## Announcements

{:.note}
> {{ announcement }}
>
> {% for draft in drafts %}
> {% assign class = site.data.specs.niem-spec-classes | where: "id", draft.classID | first %}
> - **[{{ class.name }}, Version {{ draft.specVersion }}]({{ draft.specURL }})**
>  <br/>See [changes]({{ draft.specChangeHistory }}). Submit feedback [here]({{ class.repo | append: "/issues/new" }}).<br/><br/>
>
>{% endfor %}
{% endif %}

<!-- Loop through specifications -->

{% assign specs = page.links | where: "group", "specs" %}

<div>
  <ul class="list-fa-icon">
    {% for spec in specs %}
      <li>
        {% include specs/specification-summary.html classID=spec.classID link=spec.url %}
      </li>
    {% endfor %}
  </ul>
</div>
