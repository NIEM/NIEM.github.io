---
  title: Domain Modeler
  icon: fa-book
  description: A domain modeler creates and manages the content in a NIEM domain.
  links:
  - url: /reference/
  - url: https://www.niem.gov/communities/create-a-domain
    title: Create a Domain
    description: Discover the NIEM Domain Onboarding Process on niem.gov.
  - url: https://www.niem.gov/communities/domain-governance
    title: Domain Governance
    description: Learn about governance committees and domain content management on niem.gov.
  - url: /reference/domain-modeling-guide/
    description: Learn how to start a domain and manage its content.
  - url: https://www.niem.gov/techhub/niem-model
    title: About the NIEM Model
    description: Review the NIEM model architecture and model management on NIEM TechHub.
---

{{ page.description}}

## General Resources for Domain Modelers

{% include icon-list.html links=page.links %}

## Tools for Domain Modelers

See the [NIEM Tools Catalog](https://www.niem.gov/tools-catalog) for information about community and commercially-available tools.

| Tool | Domain Uses |
| ---- | ----------- |
| **[SSGT](../../reference/tools/ssgt)** | Search and view the content of the model. |
| **[Movement](../../reference/tools/movement)** | Search and view the content of the model in the new and easy-to-use open-source tool. |
| **[ConTesA](../../reference/tools/contesa)** | During the release development process, do you submit changes to your domain as NIEM-conformant XML Schema?  Use ConTesA to check your XML schema for NDR conformance errors and warnings. |
| **[Migration Tool](../../reference/tools/migration)** | N/A - Domain schemas are already migrated to the latest release as part of the release development process. |

## Artifacts for Domain Modelers

| Artifact | Domain Uses |
| -------- | ----------- |
| **[Code Lists](../../reference/artifacts/code-lists)** | Define enhanced code lists in a domain. |
| **[Reference Schema](../../reference/artifacts/reference-schema-document)** | Create a set of reuseable components defining conformance to the domain structure. |

## Specifications for Domain Modelers

| Specification | Domain Uses |
| ------------- | ----------- |
| NDR | Information about the NIEM **[Naming and Design Rules specification]({{ site.data.links.ndr }})** is coming soon. |
| **[Code Lists](../../reference/specifications/code-lists)** | Want to use CSV files to define your domain codes instead of XML enumerations? <br> Want to link codes to other codes (like vehicle makes and models) or multiple definitions? <br> Want to use GENC codes from the release?  <br>Learn how NIEM uses CSV files to represent enhanced code lists. |
| High-Level Version Architecture | Learn about version architecture - processes, artifacts, responsibilities and how they interact to produce new releases of the NIEM model. <br> Information about the **[High-Level Version Architecture specification]({{ site.data.links.hlva }})** is coming soon. |
