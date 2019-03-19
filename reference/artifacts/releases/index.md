---
title: Release Artifacts...
icon: fa-sitemap
description: These artifacts are different kinds of NIEM releases and the files that make up the release packages.
links:
  - url: /reference/artifacts/releases/release/
    group: release
  - url: /reference/artifacts/releases/core-supplement/
    group: release
  - url: /reference/artifacts/releases/domain-update/
    group: release
  - url: /reference/artifacts/releases/xml-schemas/
    group: artifact
  - url: /reference/artifacts/releases/readme/
    group: artifact
  - url: /reference/artifacts/releases/model-spreadsheet/
    group: artifact
  - url: /reference/artifacts/releases/code-spreadsheet/
    group: artifact
  - url: /reference/artifacts/releases/changelog-spreadsheet/
    group: artifact
  - url: /reference/artifacts/releases/csv/
    group: artifact
todo:
  - add domain update (release)
---

## Kinds of NIEM Releases

{% assign release = page.links | where: "group", "release" %}
{% include icon-list.html links=release %}

## NIEM Release Artifacts

Each NIEM release comes bundled as a zip file containing schemas and other supporting files.

{:.example}
> The image below shows the [NIEM 4.0 release package]({{ site.data.links.release_repo}}/tree/maintain-niem-4.0) on GitHub, with labels superimposed to point out the various artifacts.

![Release artifacts](assets/release.png)
{:.bordered}

{% assign artifact = page.links | where: "group", "artifact" %}
{% include icon-list.html links=artifact %}
