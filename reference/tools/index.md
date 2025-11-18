---
  title: Tools
  icon: fa-wrench
  description: NIEM tools provide support for searching and exploring NIEM content and developing NIEM domains and exchanges.
  links:
  - url: /reference/tools/ssgt/
    group: niem
  - url: /reference/tools/contesa/
    group: niem
  - url: /reference/tools/movement/
    group: niem
  - url: /reference/tools/migration/
    group: niem
  - url: /reference/tools/oxygen/
    group: other
  - url: /reference/tools/xmlspy/
    group: other
  todo:
  - Set standard table widths for consistency
---

{{ page.description }}

{:toc}
- TOC

## NIEM program tools

{: .note}
> The following is information about the tools that are developed and supported by the NIEM program.  Information about community and commercially-available tools can be found in the **[NIEM Tools Catalog]({{ site.data.links.tools_catalog }})**.

{% assign links = page.links | where: "group", "niem" %}
{% include icon-list.html links=links %}

---

## NIEM resources for other tools

{% assign links = page.links | where: "group", "other" %}
{% include icon-list.html links=links %}
