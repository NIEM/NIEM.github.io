---
  title: Artifacts
  icon: fa-sitemap
  description: Learn about the kinds of files that make up NIEM releases and IEPDs.
  links:
  - url: /reference/artifacts/releases/
    group: specialized
  - url: /reference/artifacts/messages/
    group: specialized
  - url: /reference/artifacts/code-lists/
    group: niem
  - url: /reference/artifacts/json-ld-context/
    group: other
  - url: /reference/artifacts/xml-catalog/
    group: other
---

NIEM artifacts are individual files or packages relating to NIEM releases or information exchanges.

---

## Release Artifacts

Some of the artifacts below are specific to NIEM releases; others show how NIEM releases implement common kinds of artifacts like documentation spreadsheets and change logs.

Click on the `Release Artifacts...` section in the sidebar for more or jump directly to a NIEM release artifact below:

{% assign releasesPage = site.pages
    | where: "url", "/reference/artifacts/releases/" | first %}
{% include icon-list.html links=releasesPage.links %}

---

## IEPD Artifacts

These artifacts are specific to NIEM messages.

Click on the `IEPD Artifacts...` section in the sidebar for more or jump directly to an IEPD artifact below:

{% assign messagesPage = site.pages
    | where: "url", "/reference/artifacts/messages/" | first %}
{% include icon-list.html links=messagesPage.links %}

---

## General NIEM Artifacts

The artifacts below can be used with either NIEM releases or IEPDs.

{% assign niem = page.links | where: "group", "niem" %}
{% include icon-list.html links=niem %}

---

## Other Artifacts

The artifacts below are used by NIEM but are defined by outside specifications or sources.

{% assign other = page.links | where: "group", "other" %}
{% include icon-list.html links=other %}
