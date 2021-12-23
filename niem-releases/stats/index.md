---
  title: Statistics Across Releases
  description: An overview of the draft NIEM 5.1 release, currently under development.
  right: [1,2,3,4,5,6,7,8,9,10,11,12]
---

{:toc}
- TOC

{:.note}
> Please see the "Release Statistics" section available from specific release pages for additional counts for types and codes.  For example, the latest release statistics are available from the [NIEM {{ site.data.release.current.releaseNumber }}](../{{site.data.release.current.releaseNumber}}/#release-stats) page.

Expand the groups below to see statistics for individual namespaces.  Hover over namespace prefixes to see the full names.

## Property counts

{% include page/release-stats-all-category.html csv=site.data.model.stats.stats-all-properties category="property" %}

## Type counts

{% include page/release-stats-all-category.html csv=site.data.model.stats.stats-all-types category="type" %}

## Code counts

{% include page/release-stats-all-category.html csv=site.data.model.stats.stats-all-codes category="code" %}
