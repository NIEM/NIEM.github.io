---
  title: NIEM JSON Specification
  short: NIEM JSON
  classID: JSON
  icon: fa-book
  description: The NIEM JSON Specification establishes the technical basis for using JavaScript Object Notation (JSON) as a data format for exchange of information consistent with NIEM-conformant schemas and message specifications.
---

The **[NIEM JSON Specification]({{ site.data.links.json }})**  establishes the technical basis for using JavaScript Object Notation (JSON) as a data format for exchange of information consistent with NIEM-conformant schemas and message specifications.

- TOC
{:toc}

## Resources

{% include specs/specification-summary.html classID=page.classID %}

## Conformance Targets

NIEM-conformance of JSON data is primarily focused on the relationship between the data in the JSON file and the definitions established by a NIEM-conformant schema, e.g., the schema defined by a NIEM IEPD.

There are two forms of conformance of a NIEM JSON document to a NIEM-conformant schema:

{% include specs/targets-table.html classID=page.classID %}

## Additional Resources

- [NIEM JSON normalization](https://github.com/NIEM/NIEM-JSON-Spec/wiki/NIEM-JSON-normalization) - Describes how a full NIEM JSON-LD document can be translated to a much more simple JSON representation.

- From the [NIEM JSON]({{ "/json" | relative_url }}) section on this site, see especially:

  - [Guidance in Using NIEM with JSON]({{ "/json/reference/guidance/" | relative_url }})
  - [NIEM JSON tutorial]({{ "/json/tutorial/" | relative_url }})
