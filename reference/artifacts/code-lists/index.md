---
  title: Code Lists
  short: Code Lists
  icon: fa-sitemap
  description: Code Lists
  links:
    - url: /reference/artifacts/code-lists/structure/
    - url: /reference/artifacts/code-lists/usage/
---

Code List Artifacts (Code Lists) provide a method to specify categorical
descriptors for data used within exchanges and IEPs. Code Lists in NIEM
use one of two formats: Comma-Separated Values (CSV), or Genericode.

{:.features}
>
>- simple machine-readable formats (CSV or Genericode)
>- ability to specify code list references at Schema-Time (static) or Run-Time (dynamic)
>- XML catalog support for URIs to actual code list files
>- rules for matching abbreviated values to corresponding codes specified within a code list file
>- serves as the basis for IEPDs and Extension Schema Documents

{:.note}
> Code Lists, while functionally identical to schema enumerations, do not replace the established convention or deprecate the use of schema enumeration.

<!--more-->

## Why Code Lists

In general, data exchanged between senders and receivers tend to be categorical or
have distinct value ranges. One method of specifying that data within an exchange is
by codifying them into [NIEM Enumeration Facets](/reference/concepts/facet/#enumerations-). However, it might be easier to create a self-contained artifact to hold the associations. We call this artifact a Code List.

"Codes" is the general term NIEM uses to identify associative identifiers with more
verbose data or data ranges (e.g., MON for Monday; 2000-3000 for sets of numbers).
Code Lists provide a tabular format for specifying *codes* and their associated data. Code Lists are most often used to limit possible values for an element. If Code Lists are reusable by many exchanges, they have the potential to be integrated into NIEM Core or a NIEM domain. An example of a code list in NIEM core is `nc:LocationCountryFIPS10-4Code`, which is used in the example below. The possible values for that particular element are country codes.

## Quick Example

We can summarize [Section 2.9, *Code Lists*](https://reference.niem.gov/niem/specification/code-lists/4.0/niem-code-lists-4.0.html#section_2.9) as follows:

```
A code list is a set of distinct entries with a corresponding set of columns.
Think of it as a table: rows are distinct entries, columns are code list columns,
and individual cells are code values.
```

{:.example}
>In this example of a code list for vehicle makes and models, note the following:
>
>- The code list is the table
>- The distinct entries are the rows (excluding the header)
>- The code values are the entries of the individual table cells (e.g., **FORD**, **Toyota**, **Camry**, etc.)
>
>Make code | Make description | Model code | Model description | Class
>|---|---|---|---|---|
>FORD | Ford | FUS | Fusion | Auto
>FORD | Ford | F15 | F-150 | Pickup
>HOND | Honda | CIV | Civic | Auto
>HOND | Honda | CRV | CRV | SUV
>HOND | Honda | ACC | Accord | Auto
>TOYT | Toyota | COA | Corolla | Auto
>TOYT | Toyota | CAM | Camry | Auto

## Detailed Reference

{% include icon-list.html links=page.links %}
