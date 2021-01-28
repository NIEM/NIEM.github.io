---
title: Specifications
short: Specifications
icon: fa-book
description: NIEM specifications provide rules and guidance in order to design consistent and well-defined information exchanges.
links:
- url: /reference/specifications/rule-browser/
- url: /reference/specifications/ndr/
  group: specs
- url: /reference/specifications/mpd/
  group: specs
- url: /reference/specifications/conformance/
  group: specs
- url: /reference/specifications/conformance-targets/
  group: specs
- url: /reference/specifications/code-lists/
  group: specs
- url: /reference/specifications/hlva/
  group: specs
todo:
- HLVA
deferred:
- SIX
- UML Profile
---

{{ page.description }}

{:.note}
> View and search rules from the specifications below in the **[NIEM Specification Rule Browser](./rule-browser)**.

{% assign specs = page.links | where: "group", "specs" %}
{% include icon-list.html links=specs %}
