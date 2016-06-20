---
title: The NIEM Code Lists Specification
current_code_lists_version: 1.0
current_code_lists_date: 2016-06-20
---

[The NIEM Code Lists Specification](http://reference.niem.gov/niem/specification/code-lists/{{page.current_code_lists_version}}/niem-code-lists-{{page.current_code_lists_version}}-{{page.current_code_lists_date}}.html)
is a technical document that provides XML
syntax and rules that support the use of code lists in NIEM XML Schemas, IEPDs,
and information exchange packages (IEPs). One major topic for developers and
users of code lists with NIEM information exchanges is the development,
distribution, maintenance, and use of code lists. This specification addresses
this need.

The specification includes:

* Additional machine-readable formats for code lists: in addition to XML Schema
  simple types supported by previous versions of NIEM, this specification
  provides for using spreadsheets in CSV format (comma-separated values format),
  as well as Genericode, an OASIS format defining code lists in XML.
* Methods of using code lists in XML Schemas or in XML messages; this enables
  code lists to be identified at run-time (as attributes in a message), or at
  schema-time, as annotations on components of a schema.
* Use of the XML Catalog format for resolving code list identifiers to actual
  code lists within an IEPD.
* Rules for how to match values in messages to values in code lists. This
  enables validation of messages against code lists, and the use of multiple
  columns in messages (e.g. county code & state code, or vehicle make & model).

The NIEM Code Lists Specification is published at:

1. [The NIEM Code Lists Specification, version
   {{page.current_code_lists_version}} is on
   reference.niem.gov](http://reference.niem.gov/niem/specification/code-lists/{{page.current_code_lists_version}}/niem-code-lists-{{page.current_code_lists_version}}-{{page.current_code_lists_date}}.html).
1. [The complete set of files that accompany the NIEM Code Lists Specification
   are on reference.niem.gov](http://reference.niem.gov/niem/specification/code-lists/{{page.current_code_lists_version}}), and are [available as a zip file](http://reference.niem.gov/niem/specification/code-lists/{{page.current_code_lists_version}}/niem-code-lists-{{page.current_code_lists_version}}.zip)
1. [All files are published to a GitHub repository](https://github.com/niem/niem-code-lists-spec).
   This repository has [drafts of the specifcation](https://github.com/NIEM/niem-code-lists-spec/tree/dev-1.0), [releases](https://github.com/NIEM/niem-code-lists-spec/releases), and an [issue tracker](https://github.com/NIEM/niem-code-lists-spec/issues).

Please review the specification and let us know your thoughts. Comments may be
emailed to
[niem-comments@lists.gatech.edu](mailto:niem-comments@lists.gatech.edu?subject=NIEM%20Code%20Lists%20Specification,%20version%20{{page.current_code_lists_version}}&cc=webb.roberts@gtri.gatech.edu), or may
be [submitted as tracked issues at the GitHub issue
tracker](https://github.com/NIEM/niem-code-lists-spec/issues).
