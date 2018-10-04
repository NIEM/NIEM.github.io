---
title: IEPD Lifecycle
short: Lifecycle
icon: fa-envelope-o
description: An Information Exchange Package Documentation (IEPD) developer designs, builds, and validates the components (artifacts) of an Information Exchange Package(IEP). The process consists of a six-phase lifecycle.
links:
- url: /reference/iepd/lifecycle/scenario-planning/
- url: /reference/iepd/lifecycle/analyze-requirements/
- url: /reference/iepd/lifecycle/map-and-model/
- url: /reference/iepd/lifecycle/build-and-validate/
- url: /reference/iepd/lifecycle/assemble-and-document/
- url: /reference/iepd/lifecycle/publish-and-implement/
---

{{ page.description}}

![IEPD Lifecycle](assets/iepdlifecycle01.png "IEPD Lifecycle")

## Lifecycle Phases

1. **[Scenario Planning](scenario-planning/ "Scenario Planning")**: During the Scenario Planning phase, you review background information related to your information exchange, assess resource impact, understand business context, and identify information exchange business scenarios.
2. **[Analyze Requirements](analyze-requirements/ "Analyze Requirements")**: During the Analyze Requirements phase, the selected information exchange scenario is further elaborated to understand and document the business context and data requirements.
3. **[Map and Model](map-and-model/ "Map and Model")**: During the Map and Model phase, you begin the creation of IEPD components for your exchange content model based on your information exchange requirements.  You start with the mapping document, which matches your exchange data elements to the NIEM data model.
4. **[Build and Validate](build-and-validate/ "Build and Validate")**: During the Build and Validate phase, you create a set of exchange-specific, NIEM-conformant XML schemas that implement the exchange content model created for the exchange and validate them. Components in this phase also include other XML documents generated from NIEM tools (e.g., Wantlist).
5. **[Assemble and Document](assemble-and-document/ "Assemble and Document")**: During the Assemble and Document Phase, you prepare and package all related files for the IEPD into a single, self‐contained, self-documented, portable archive file. You then should perform a peer review to ensure artifact consistency within the IEPD and with other IEPDs.
6. **[Publish and Implement](publish-and-implement/ "Publish and Implement")**: During the last phase, the Publish and Implement phase, you implement the IEPD into production and publish the IEPD for search, discovery, and reuse.
