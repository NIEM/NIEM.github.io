---
title: Specifications
short: Specifications
icon: fa-book
description: NIEM specifications provide rules and guidance in order to design consistent and well-defined information exchanges.
links:
- url: /reference/specifications/normative-rules/
  group: other
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

See the [Normative Rules](normative-rules) section for a compiled list of the normative rules from NIEM specifications, including the NDR and the MPD Specification.

{% assign specs = page.links | where: "group", "specs" %}
{% include icon-list.html links=specs %}
