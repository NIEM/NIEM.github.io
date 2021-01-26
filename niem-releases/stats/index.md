---
  title: Release Statistics
  short: Stats
  icon: fa-list-ol
  links:
  - url: /niem-releases/stats/4.0/
  right: [1,2,3]
  widths: ["110px", "150px", "150px", "150px"]
---

- TOC
{:toc}

The following are statistics for the **5.0 release**.

## Number of Domains

NIEM 5.0 has [14 domains]({{ "reference/content#domains" | relative_url }}) and 2 auxiliary namespaces.

## Summary Counts

The table below breaks down property, type, and code counts by namespace group.

- The "Core" group represents a single namespace (NIEM Core).
- The "Domain" and "Code Set" groups combine the counts from multiple namespaces and are broken out in the subsequent tables.

{% include csv-table.html
      csv=site.data.model.stats.5_0.summary
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

## Domain Counts

The counts in the following table represent the namespaces that make up the "Domain" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.5_0.domains
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

## Auxiliary Counts

The counts in the following table represent the namespaces that make up the "Auxiliary" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.5_0.auxiliary
      classes="table-auto"
      right=page.right
      widths=page.widths
%}

## Code Counts

The counts in the following table represent the namespaces that make up the "Code Set" group in the summary table above.

{% include csv-table.html
      csv=site.data.model.stats.5_0.codes
      classes="table-auto"
      right=page.right
      widths=page.widths
%}
