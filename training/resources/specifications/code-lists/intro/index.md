
The [NIEM Code Lists Specification]({{site.data.links.code_list_spec}}) was published in June 2016 and updated in November 2017. It was created to enhance the functionality of code lists in NIEM beyond the basic enumerations that XML and JSON schema provide (simple sets of schema-defined code values and definitions).

This specification provides:

- Additional machine-readable formats for code lists:
  - Spreadsheet **CSVs** (comma-separated values)
  - **Genericode** (OASIS) XML formats
- Design-time or run-time binding of code lists elements to a specific code list file
  - Specify bindings **design-time** via schema annotations to require designated code lists
  - Specify bindings **run-time** via instance message attributes to allow for dynamic code lists
- XML catalog support for resolving code list identifiers (URIs) to actual code lists (CSV or Genericode files) within an IEPD
- Rules for matching values in messages to values in corresponding code lists.  This enables **validation** and adds **multi-column code table support** (e.g., linked county and state codes, or linked vehicle make and model codes)

{:.note}
> The Code Lists Specification does not replace the existing XML and JSON schema enumerations, which still represent the majority of code lists in NIEM 4.0.  This specification is additive, providing additional code list formats and support for new features, like dynamic code lists and linked columns.

| Role | Use Cases |
| ---- | --- |
| Domain modeler | Define enhanced code lists in a domain |
| IEPD developer | Define enhanced code lists for an exchange <br> Specify static bindings for NIEM code lists (e.g., GENC) |
| IEPD implementer | Interpret static or run-time code list bindings <br> Specify run-time bindings |
