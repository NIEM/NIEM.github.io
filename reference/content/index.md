---
  title: Content
  icon: fa-sitemap
  description: A high-level perspective on the kinds of content that appear in Core and the domains.
---

NIEM is a large data model, with over 12,000 elements.  Because of the size, it might seem overwhelming to new users, but it isn't necessary to try to review each element.  A basic familiarity with Core and the domains and the ability to search the model is enough to get started.

{:toc}
- TOC

A good way to begin is to browse through the lists of common terms below to get a very high level overview   of the kinds of components that are in Core and the domains.  After that basic overview, follow the links that are most relevant to you to learn more.

These terms are counted by the number of times they appear within NIEM property names.  This list is provided as a starting point for learning about what kind of content is represented in these namespace.  The links will take you to search results in the Movement tool.

{: .note}
> - Want to view components in the [SSGT](../tools/ssgt)? Click [here]({{ site.data.links.ssgt }}) to open the tool, enter the terms manually in the search box and click on "Advanced Search" to filter by namespace.

## Core

<ul>
{% for term in site.data.namespaces.nc.terms %}
  <li>{%- include functions/getMovementSearchURL.html terms=term prefix="nc" -%}</li>
{% endfor %}
</ul>

## Domains

{% assign domains = site.data.namespaces | where: "style", "Domain" %}
{%- for domain in domains -%}

### {{ domain.name }}

  <ul>
  {% for term in domain.terms %}
    <li>{%- include functions/getMovementSearchURL.html terms=term prefix=domain.prefix -%}</li>
  {% endfor %}
  </ul>

{%- endfor -%}
