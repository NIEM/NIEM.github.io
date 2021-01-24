---
  title: Schema Subset Generation Tool (SSGT)
  short: SSGT
  description: The Schema Subset Generation Tool (SSGT) enables users to search and view the content of the NIEM model, and build XML Schema subsets for use in exchanges.
  icon: fa-search
  links:
  - url: /reference/tools/ssgt/search/
  - url: /reference/tools/ssgt/results/
  - url: /reference/tools/ssgt/subset/
  - url: /reference/tools/ssgt/options/
---

The **[Schema Subset Generation Tool (SSGT)]({{ site.data.links.ssgt }})** enables you to search and explore the content of the NIEM model. Additionally, you have the option of building XML Schema subsets of a NIEM release for use in NIEM XML exchanges. Based on the list of components selected by you for the subset, the tool will calculate dependencies and generate a valid set of schemas that are a subset of a release for download as a zip file.

{:.features}
- Search and explore the content of NIEM
- Build XML Schema subsets of a release
  - Automatic management of component dependencies
  - Customize cardinality and nillable values
- Multi-release support
- API for selecting NIEM subset components (wantlist)

{:.note}
> A NIEM subset will contain only the user-selected elements and types from a release, plus any required dependencies. The subset will likely be much smaller than the corresponding full NIEM release.

<!--more-->

## Explore SSGT

{% include icon-list.html links=page.links %}
