---
title: IEPD Developer
icon: fa-envelope-o
description: An Information Exchange Package Documentation (IEPD) Developer designs, builds, and validates the components (artifacts) of an Information Exchange Package (IEP).
links:
- url: /training/iepd-developer/scenario-planning/
- url: /training/iepd-developer/analyze-requirements/
- url: /training/iepd-developer/map-and-model/
- url: /training/iepd-developer/build-and-validate/
- url: /training/iepd-developer/assemble-and-document/
- url: /training/iepd-developer/publish-and-implement/
- url: /training/iepd-developer/simple-iepd-tutorial/
---

{{ page.description}}

The [IEPD]({{ site.data.pages.iepd | relative_url }} "IEPD") allows senders and receivers to exchange information in a manner that both understand. The exchange is typically in the form of XML schema documents that define XML instance documents, and other documents that describe, for example, the version history and contents of the documents.

You are here to learn the steps for developing an IEPD according to the IEPD Lifecycle.

## IEPD Lifecycle

You develop the IEPD according to a six-phase lifecycle, as shown graphically and listed in the following sections. The phases link to pages with detailed, introductory information about that phase. More lifecycle phase information can be found in their [lifecycle reference section]({{ "/reference/artifacts/messages/iepd/lifecycle/" | relative_url }}).

![IEPD Lifecycle](iepdlifecycle01.png "IEPD Lifecycle")

Start with Scenario Planning and work your way through the list in order. See the tutorial for a step-by-step guide to create a simple IEPD set.

1. [Scenario Planning](scenario-planning/ "Scenario Planning"): During the Scenario Planning phase, you review background information related to your information exchange, assess resource impact, understand business context, and identify information exchange business scenarios.
2. [Analyze Requirements](analyze-requirements/ "Analyze Requirements"): During the Analyze Requirements phase, the selected information exchange scenario is further elaborated to understand and document the business context and data requirements.
3. [Map and Model](map-and-model/ "Map and Model"): During the Map and Model phase, you begin the creation of IEPD components for your exchange content model based on your information exchange requirements.  You start with a mapping document, which matches your exchange data elements to the NIEM data model.
4. [Build and Validate](build-and-validate/ "Build and Validate"): During the Build and Validate phase, you create a set of exchange-specific, NIEM-conformant XML schemas that implement the exchange content model created for the exchange and validate them. Components in this phase also include other XML documents generated from NIEM tools (e.g., Wantlist).
5. [Assemble and Document](assemble-and-document/ "Assemble and Document"): During the Assemble and Document Phase, you prepare and package all related files for the IEPD into a single, self‐contained, self-documented, portable archive file. You then should perform a peer review to ensure artifact consistency within the IEPD and with other IEPDs.
6. [Publish and Implement](publish-and-implement/ "Publish and Implement"): During the last phase, Publish and Implement, you implement the IEPD into production and publish the IEPD for search, discovery, and reuse.

## IEPD Tutorial

The Simple IEPD tutorial takes you step-by-step through the creation process starting with the Scenario Planning phase. Future tutorials will reference and build from it.

- [Simple IEPD](simple-iepd-tutorial) - This tutorial shows you how to create a very simple IEPD set. Once you are comfortable with the process and output, you can move on to more complex IEPDs.

## IEPD Developer Resources

There are a large number of tools and reference materials available to help you in your development effort. You can see a comprehensive list of information resources at the **[Reference]({{ "/reference/" | relative_url }})** page.  Some of the sections you may find most immediately useful are the ones highlighted below:

### Tools

The **[Tools]({{ "/reference/tools" | relative_url }})** section contains information about tools that will help you search NIEM, build subsets, and check conformance.  It also includes a link to the [NIEM Tools Catalog](https://www.niem.gov/tools-catalog), with information about community and commercial tools available.

| Tool | IEPD Developer Uses |
| ---- | ----------- |
| **[SSGT]({{ site.data.pages.ssgt | relative_url }})** | Search and view the content of the model. <br> Build XML Schema subsets to use with your XML-based IEPD. |
| **[Movement]({{ site.data.pages.movement | relative_url }})** | Search and view the content of the model in the new and easy-to-use open-source tool. <br> Build simplified JSON Schema subsets to use with your JSON-based IEPD. |
| **[ConTesA]({{ site.data.pages.contesa | relative_url }})** | Check your XML extension schemas for NDR conformance errors and warnings. |
| **[Migration Tool]({{ site.data.pages.migration | relative_url }})** | Take the first step in migrating your IEPD to a subsequent release by migrating your NIEM XML subset. <br> (Extension schemas require manual migration.) |

### Artifacts

The **[Artifacts]({{ "/reference/artifacts" | relative_url }})** section describes files and packages related to NIEM releases and messages.

| Artifact | IEPD Developer Uses |
| -------- | ------------------- |
| **[IEPD]({{ "/reference/artifacts/messages/iepd" | relative_url }})** | Create a package that defines a NIEM message. |
| **[Extension Schema]({{ "/reference/artifacts/messages/extension-schema" | relative_url }})** | Create new NIEM elements and data types needed for an exchange. |
| **[Subset Schema]({{"/reference/artifacts/messages/subset-schema" | relative_url }})** | Create a smaller set of NIEM schemas that contains only the properties and types that are needed for an exchange. |
| **[IEPD Catalog]({{"/reference/artifacts/messages/iepd-catalog" | relative_url }})** | Document metadata about your message. |
| **[Conformance Report]({{"/reference/artifacts/messages/conformance-report" | relative_url }})** | Document the steps that were taken to ensure an IEPD is NIEM conformant and record any known exceptions. |
| **[Release]({{ "/reference/artifacts/releases" | relative_url }})** | Learn about NIEM major and minor releases and the artifacts that can be found in a release package. |
| **[Core Supplement]({{ "/reference/artifacts/releases/core-supplement" | relative_url }})** | Learn about how NIEM publishes incremental changes to the Core namespace between major releases and how to use these supplements in your IEPD. |
| **[Domain Update]({{ "/reference/artifacts/releases/domain-update" | relative_url }})** | Learn about domains can publish changes outside of the standard release cycle and how to use these updates in your IEPD. |
| **[Code Lists]({{"/reference/artifacts/code-lists" | relative_url }})** | Define enhanced code lists for an exchange.<br>Specify static or run-time bindings for NIEM code lists (e.g., GENC). |

### Specifications

The **[Specifications]({{ "/reference/specifications/" | relative_url }})** section describes the specifications that establish normative rules for NIEM (e.g., how the exchange package is constructed; the proper naming of documents and elements).

| Specification | IEPD Developer Uses |
| ------------- | ------------------- |
| **[Naming and Design Rules]({{ site.data.pages.ndr | relative_url }})** | Learn about the architecture of the NIEM data model, its representation in XML, and the conformance rules that are required for your extension schemas. |
| **[Information Exchange Package Documentation]({{ site.data.pages.mpd | relative_url }})** | Read about rules and guidance for creating an IEPD. |
| **[Code Lists]({{ site.data.pages.code-lists | relative_url }})** | Want to use CSV files to define your IEPD codes instead of XML enumerations? <br> Want to link codes to other codes (like vehicle makes and models) or multiple definitions? <br> Want to use GENC codes from the release?  <br>Learn how NIEM uses CSV files to represent enhanced code lists. |
| **[Conformance]({{ site.data.pages.conformance | relative_url }})** | Learn what it means for a schema, IEPD, or other artifact to be NIEM-conformant. |
| **[Conformance Targets Attribute]({{ site.data.pages.ctas | relative_url }})** | Learn how to declare conformance targets for your extension schemas. <br> This is required both for NIEM conformance and to use ConTesA for conformance testing. |
| **[High-Level Version Architecture]({{ site.data.pages.hlva | relative_url }})** | Learn about major and minor releases, Core Supplements, domain updates, and the NIEM release cycle. |
