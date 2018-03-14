---
  title: Schema Subset Generation Tool (SSGT)
  short: SSGT
  description: The SSGT enables users to search and view the content of the NIEM model, and build XML Schema subsets for use in exchanges.
  links:
  - url: /training/resources/tools/ssgt/search/
  - url: /training/resources/tools/ssgt/subset/
  - url: /training/resources/tools/ssgt/options/
---

{{ page.description }}

{% include_relative intro/index.md %}

{:.note}
> This tool does not have user accounts.  To save your work, generate a subset.  To modify the subset later, upload the wantlist from the subset.

### Tutorial

- [ ] Overview
- [ ] Search and Discovery
  - [ ] Search Page
  - [ ] Basic search
    - [ ] Property
    - [ ] Type
    - [ ] Namespace
    - [ ] Facet
  - [ ] Advanced search
  - [ ] Search results
    - [ ] Showing Properties
    - [ ] Showing Details
    - [ ] Namespace page
    - [ ] Type Page
    - [ ] Property page
  - [x] Options
    - [x] Change Release
  - [ ] Add a property to the subset
    - [ ] Add a sub-property of a type to the subset
    - [ ] Add all sub-properties of a type to the subset
    - [ ] Add a type to the subset
    - [ ] Delete a type or property from the subset
    - [ ] Clear the subset
    - [ ] Edit cardinality of all properties in the subset
    - [ ] Edit cardinalities of properties in the subset
    - [ ] Options Page
      - [ ] Add all NIEM components to subset
      - [ ] Generate documents
      - [ ] Options page
- [ ] Load wantlist
  - [ ] Options page
  - [ ] Download wantlist schema specification
- [ ] Generate documents
  - [ ] Generate subset
  - [ ] Browsing the subset
  - [ ] Editing contents

### Outline

- Overview
- Search
  - Advanced Search
- Search Results
- Subsets
  - Individual property / type adds
  - Add property to type
  - Cardinality
  - Nillable
  - Dependencies
- Wantlists
- Options
- Generate
- API

The Schema Subset Generation Tool (SSGT) enables users to search and explore content from NIEM releases.   
presents the schema designer with an interface that permits searching through the National Information Exchange Model (NIEM) for desired types and properties by substrings in names, definitions, and other fields of NIEM. 

When appropriate types or properties are found, the user may select them for inclusion in a schema subset. SSGT applies the appropriate rules and automatically includes any types and elements that the user selections depend on. The designer does not have to manage subsetting rules or dependencies. 

After selecting all of the desired types and properties, the designer can generate the schema subset. The result is a zip archive file containing the relevant, valid subset schemas derived from the NIEM reference schemas and any referenced code list schemas. The [zip] archive directory structure and file placement is arranged automatically.
