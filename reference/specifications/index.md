---
title: Specifications
icon: fa-book
description: NIEM specifications provide rules and guidance in order to design consistent and well-defined information exchanges.  Specifications are managed by the NIEM Technical Architecture Committee (NTAC).
links:
- url: /reference/specifications/rule-browser/
- url: /reference/specifications/ndr/
  suiteID: NDR
  group: specs
- url: /reference/specifications/iepd/
  suiteID: IEPD
  group: specs
- url: /reference/specifications/json/
  suiteID: JSON
  group: specs
- url: /reference/specifications/conformance/
  suiteID: Conformance
  group: specs
- url: /reference/specifications/conformance-targets/
  suiteID: CTAS
  group: specs
- url: /reference/specifications/code-lists/
  suiteID: CodeLists
  group: specs
- url: /reference/specifications/hlva/
  suiteID: HLVA
  group: specs
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
> {% assign suite = site.data.specs.niem-suites | where: "id", draft.suiteID | first %}
> - **[{{ suite.name }}, Version {{ draft.specVersion }}]({{ draft.specURL }})**
>  <br/>See [changes]({{ draft.specChangeHistory }}). Submit feedback [here]({{ suite.repo | append: "/issues/new" }}).<br/><br/>
>
>{% endfor %}
{% endif %}

<!-- Loop through specifications -->

{% assign specs = page.links | where: "group", "specs" %}
{% include icon-list.html links=specs %}
