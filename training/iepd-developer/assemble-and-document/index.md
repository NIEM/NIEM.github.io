---
title: Assemble and Document
icon: fa-envelope-o
description: Assemble and Document is the next phase in IEPD development after the Build and Validate phase.
---

{{ page.description}}

{% include icon-list.html links=page.links %}

You have all of your mandatory and recommended artifacts ready. Now you need to gather all of it in one electronic package.

## Mandatory Artifacts Examples

### Readme Artifact

As a starting point, logically organize the Readme document in chronological order of the development artifacts. Existing IEPD master documents can be used as a general guide. The Readme document can be a simple-text file and should not include XML code.

{:.example}
>The following is a recommended, general-purpose table of contents.
>
>1. Executive Summary
>1. [Name] Information Exchange
>       - Overview of the [Name] Exchange
>       - Exchange Partner Interaction
>1. Business Models
>1. Business Rules and Requirement
>1. Exchange Content Model
>1. Development Information
>       - IEPD Definition
>       - Tools and Methodologies
>       - Testing and Conformance
>1. Appendices
>       - List of IEPD Artifacts
>       - IEPD Catalog

### Change Log Artifact

The Change Log can be a simple-text file.

{:.example}
>| Version | Date | Description | Author |
>| --- | --- | --- | --- |
>| 1.0 | 2/2/03 | Original Version | Bob |
>| 1.1 | 4/16/03 | Added new elements to subset schema. | Bill |
>| 2.0 | 5/9/18 | Updated requirements and constraint schema. | Sara |

## Assemble the IEPD

Once all the artifacts have been compiled, the next step is to properly name, file, and archive the final package.

A standardized file structure promotes consistency and creates logical navigation through a large number of IEPD artifacts. Moreover, this consistency enables a greater degree of discovery and IEPD reuse because you can easily access information in a structured and uniform manner. Note that the catalog enables IEPD developers to locate artifacts in a directory and label them as specific IEPD artifacts no matter where they exist in the package.

1. **Name** each artifact for your exchange with a consistent naming convention.
2. **File** each artifact in a logical, consistent folder structure.
3. **Archive** (e.g., zip) the file structure, including artifacts, into the final package.

The following example shows a recommended IEPD folder structure and file location.

{:.note}
>The documentation produced by the [SSGT]({{ site.data.pages.ssgt | relative_url }}) creates some of the structure for you.

{:.example}
>The root directory name should be meaningful and include the NIEM version and a revision number.
>
>my-iepd-4.0-rev-04
>
>- base-xsd
>   - extension
>      - *extension.xsd
>   - niem
>      - niem-core/4.0
>      - proxy/xsd/4.0
>      - utility
>         - appinfo/4.0
>         - conformanceTargets/3.0
>         - structures/4.0
>      - wantlist.xml
>      - xml-catalog.xml
>   - xml-catalog.xml (references extension uri and nextCatalog niem/xml-catalog.xml)
>- documentation (miscellaneous, binaries)
>- iep-sample (contains sample xml instances; must be in root directory)
>- iepd-catalog.xml (must be in root directory)
>- changelog.txt (.md, .htm, .pdf; must be in root directory)
>- readme.txt (.md, .htm, .pdf; must be in root directory)
>- conformance-assertion.txt (.md, .htm, .pdf; should be in root directory)
>- schematron (if Schematron is used; should be in root directory)

## Review the IEPD

You should perform a peer review of your IEPD. This has several benefits:

- Maintains consistent quality of artifact content and presentation.
- Decreases the occurrence of published IEPDs that are difficult to reuse.
- Peer participation in a review also increases individual knowledge of information exchanges and promotes accountability in verifying that the exchange meets established requirements.

A good way to review an IEPD is to compare it to a checklist. The checklist should include the following:

- The readme document contains documentation necessary to effectively describe the information exchange.
- The exchange content model file is included and accurately represents the XML code in the schemas.
- The XML catalog validates with the NIEM Information Exchange Package Documentation (IEPD) catalog schema (XSD) and resides in the root directory of the IEPD bearing the file name “iepd-catalog.xml.”
- The change log is in the root directory of the IEPD, begins with the substring “changelog,” and records changes to previous IEPD schemas that are represented.
