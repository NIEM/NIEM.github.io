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
crossLinks:
- url: /reference/artifacts/
- url: /reference/content/
- url: /reference/concepts/
- url: /reference/iepd/
- url: /reference/release/
- url: /reference/specifications/
- url: /reference/tools/
---

{{ page.description}}

The [IEPD]({{ site.data.pages.iepd | relative_url }} "IEPD") allows senders and receivers to exchange information in a manner that both understand. The exchange is typically in the form of XML schema documents that define XML instance documents, and other documents that describe, for example, the version history and contents of the documents.

You are here to learn the steps for developing an IEPD according to the IEPD Lifecycle.

## IEPD Lifecycle

You develop the IEPD according to a six-phase lifecycle, as shown graphically and listed in the following sections. The phases link to pages with detailed, introductory information about that phase. More lifecycle phase information can be found in the [IEPD lifecycle]({{ "/reference/iepd/lifecycle/" | relative_url }}) section.

![IEPD Lifecycle](iepdlifecycle01.png "IEPD Lifecycle")

Start with Scenario Planning and work your way through the list in order. See the tutorial for a step-by-step guide to create a simple IEPD set.

1. **[Scenario Planning](scenario-planning/ "Scenario Planning")**: {{ site.data.iepd.lifecycle.scenario }}

2. **[Analyze Requirements](analyze-requirements/ "Analyze Requirements")**: {{ site.data.iepd.lifecycle.analyze }}

3. **[Map and Model](map-and-model/ "Map and Model")**: {{ site.data.iepd.lifecycle.map }}

4. **[Build and Validate](build-and-validate/ "Build and Validate")**: {{ site.data.iepd.lifecycle.build }}

5. **[Assemble and Document](assemble-and-document/ "Assemble and Document")**: {{ site.data.iepd.lifecycle.assemble }}

6. **[Publish and Implement](publish-and-implement/ "Publish and Implement")**: {{ site.data.iepd.lifecycle.publish }}

## IEPD Tutorial

The Simple IEPD tutorial takes you step-by-step through the creation process starting with the Scenario Planning phase. Future tutorials will reference and build from it.

- [Simple IEPD](simple-iepd-tutorial) - This tutorial shows you how to create a very simple IEPD set. Once you are comfortable with the process and output, you can move on to more complex IEPDs.

## IEPD Developer Resources

There are a large number of tools and reference materials available to help you in your development effort. You can see a comprehensive list of information resources at the **[Reference]({{ "/reference/" | relative_url }})** page.  Some of the sections you may find most immediately useful are the ones highlighted below:

{% include icon-list.html links=page.crossLinks %}
