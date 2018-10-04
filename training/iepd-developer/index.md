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

The [IEPD](/reference/iepd/ "IEPD") allows senders and receivers to exchange information in a manner that both understand. The exchange is typically in the form of XML schema documents that define XML instance documents, and other documents that describe, for example, the version history and contents of the documents.

You are here to learn the steps for developing an IEPD according to the IEPD Lifecycle.

## IEPD Lifecycle

You develop the IEPD according to a six-phase lifecycle, as shown graphically and listed in the following sections. The phases link to pages with detailed, introductory information about that phase. More lifecycle phase information can be found in their [reference section](/reference/iepd/lifecycle/ "Lifecycle Phase Reference").

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

### IEPD Developer Resources

There are a large number of tools and reference materials available to help you in your documentation effort. You can see a comprehensive list of information resources at the [Reference](/reference/ "Reference") page. The sections you should find most immediately useful are the ones that cover the following:

- [Tools](/reference/tools/ "Tools") - use these to search NIEM to find the elements and relationships that match your information exchange requirements. Also, you can determine the NIEM conformance, within limits, of your schemas. For example, one very useful tool is the [Schema Subset Generator Tool (SSGT)](/reference/tools/ssgt/ "Schema Subset Generator Tool (SSGT)"), which is mentioned in the tutorial.
- [Artifacts](/reference/artifacts/ "Artifacts") - the components that you include in your IEPD. Some of them are required; others are not but are good to have in the package.
- [Specifications](/reference/specifications/ "Specifications") - detailed information that establishes normative rules for NIEM (e.g., how the exchange package is constructed; the proper naming of documents and elements).
