---
  title: Release Statistics
  description: Summary and detailed counts of properties, types, and codes across NIEM releases.
---

{:toc}
- TOC

{:.note}
- See the release pages for single-release statistics, with property, type, and code counts listed together, e.g., [NIEM {{ site.data.release.current.releaseNumber }} release stats](../{{site.data.release.current.releaseNumber}}/#release-stats).
- Expand the groups below to see statistics for individual namespaces.
- Hover over namespace prefixes to see the full names.

These release statistics are also available for download as a <a href="niem-release-stats.xlsx" target="_blank" download>spreadsheet</a>.

## Property counts

{% include page/release-stats-all-category.html csv=site.data.model.stats.stats-all-properties category="property" %}

{:.note}
- The Family Services (fs) domain from NIEM 2.1 was renamed as Children, Youth, and Family Services (cyfs) in NIEM 3.0.  This domain was then merged into the Human Services (hs) domain in NIEM 4.0.

<br/>

## Type counts

{% include page/release-stats-all-category.html csv=site.data.model.stats.stats-all-types category="type" %}

<br/>

## Code counts

{% include page/release-stats-all-category.html csv=site.data.model.stats.stats-all-codes category="code" %}

<br/>
