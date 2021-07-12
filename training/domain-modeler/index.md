---
  title: Domain Modeler
  icon: fa-book
  description: A domain modeler creates and manages the content in a NIEM domain.
  crossLinks:
  - url: /reference/
  - url: /reference/domain-modeling-guide/
  externalLinks:
  - url: https://www.niem.gov/communities/domain-governance
    title: Domain Governance
    description: Learn about governance committees and domain content management on niem.gov.
  - url: https://www.niem.gov/about-niem/niem-model
    title: About the NIEM Model
    description: Review the NIEM model architecture and model management on niem.gov.
---

{{ page.description}}

{:toc}
- TOC

## General information

There are a large number of tools and reference materials available to help you build and manage a domain. You can see a large list of information resources at the [Reference]({{ "/reference/" | relative_url }}) page.  Some of the sections you may find most immediately useful are the ones highlighted below:

### Other sections on this site

{% include icon-list.html links=page.crossLinks %}

### External resources

{% include icon-list.html links=page.externalLinks %}

## Tools

The **[Tools]({{ "/reference/tools" | relative_url }})** section contains information about tools that will help you search NIEM, build subsets, and check conformance.  It also includes a link to the [NIEM Tools Catalog](https://www.niem.gov/tools-catalog), with information about community and commercial tools available.

| Tool | Domain Uses |
| ---- | ----------- |
| **[SSGT]({{ site.data.pages.ssgt | relative_url }})** | Search and view the content of the model. |
| **[Movement]({{ site.data.pages.movement | relative_url }})** | Search and view the content of the model in the new and easy-to-use open-source tool. |
| **[ConTesA]({{ site.data.pages.contesa | relative_url }})** | During the release development process, do you submit changes to your domain as NIEM-conformant XML Schema?  Use ConTesA to check your XML schema for NDR conformance errors and warnings. |
| **[Migration Tool]({{ site.data.pages.migration | relative_url }})** | N/A - Domain schemas are already migrated to the latest release as part of the release development process. |

## Artifacts

The **[Artifacts]({{ "/reference/artifacts" | relative_url }})** section describes files and packages related to NIEM releases and messages.

| Artifact | Domain Uses |
| -------- | ----------- |
| **[Release]({{ "/reference/artifacts/releases/release" | relative_url }})** | Learn about NIEM major and minor releases. |
| **[Core Supplement]({{ "/reference/artifacts/releases/core-supplement" | relative_url }})** | Learn about NIEM publishes additive changes for the Core namespace between major releases. |
| **[Domain Update]({{ "/reference/artifacts/releases/domain-update" | relative_url }})** | Learn about to publish changes for your domain outside of the normal NIEM release cycle. |
| **[Release Package artifacts]({{ "/reference/artifacts/releases" | relative_url }})** | Learn about the artifacts that can be found in a release package. |
| **[Code Lists](../../reference/artifacts/code-lists)** | Define enhanced code lists in a domain. |

## Specifications

The **[Specifications]({{ "/reference/specifications/" | relative_url }})** section describes the specifications that establish normative rules for NIEM (e.g., the proper naming of documents and elements, what conformance means).

| Specification | Domain Uses |
| ------------- | ----------- |
| **[Naming and Design Rules]({{ site.data.pages.ndr | relative_url }})** | Learn about the architecture of the NIEM data model, its representation in XML, and the conformance rules that are required for domain schemas. |
| **[Code Lists](../../reference/specifications/code-lists)** | Want to use CSV files to define your domain codes instead of XML enumerations? <br> Want to link codes to other codes (like vehicle makes and models) or multiple definitions? <br> Want to use GENC codes from the release?  <br>Learn how NIEM uses CSV files to represent enhanced code lists. |
| **[Conformance]({{ site.data.pages.conformance | relative_url }})** | Learn what it means for a schema, IEPD, or other artifact to be NIEM-conformant. |
| **[Conformance Targets Attribute]({{ site.data.pages.ctas | relative_url }})** | Learn how to declare conformance targets for your extension schemas. <br> This is required both for NIEM conformance and to use ConTesA for conformance testing. |
| **[High-Level Version Architecture]({{ site.data.pages.hlva | relative_url }})** | Learn about major and minor releases, Core Supplements, domain updates, and the NIEM release cycle. |
