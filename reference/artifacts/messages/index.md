---
title: IEPD Artifacts...
description: IEPD artifacts are related to the packages and files that describe and represent NIEM information exchanges.
icon: fa-envelope-o
links:
  - url: /reference/artifacts/messages/iepd/
    group: message
  - url: /reference/artifacts/messages/iep/
    group: message
  - url: /reference/artifacts/messages/subset-schema/
    group: artifact
  - url: /reference/artifacts/messages/extension-schema/
    group: artifact
  - url: /reference/artifacts/messages/iepd-catalog/
    group: artifact
  - url: /reference/artifacts/messages/conformance-report/
    group: artifact
---

The following are artifacts that normatively define NIEM messages and message specifications:

{% assign messageLinks = page.links | where: "group", "message" %}
{% include icon-list.html links=messageLinks %}

---

## Artifacts within an IEPD

The list below contains required or common artifacts for an IEPD.

See the [Information Exchange Package Documentation (IEPD) Specification]({{ site.data.pages.mpd | relative_url }}) page on this site for information on how these artifacts can be arranged in an IEPD package.

{% assign artifactLinks = page.links | where: "group", "artifact" %}
{% include icon-list.html links=artifactLinks %}

### README

A `README` artifact (formerly known as a master document) is mandatory for all IEPDs. IEPDs are often built by different developers, and may be registered into a repository for reuse by many other users, developers, and implementers; therefore, a minimal form of documentation is absolutely necessary. An IEPD `README` file is the primary source and starting point for human readable documentation, and should reference (and describe) any other separate documentation artifacts. This requirement ensures that baseline documentation is consistently rooted in a clearly visible artifact within each IEPD.

### Sample Instance Documents

A sample instance is an example of the message, with actual or example data.  These can be very helpful for implementers of the IEPD.

### Change Log

A change log can be a summary or a detailed description of the changes in this IEPD since the previous versions.
