---
title: NIEM and JSON
links:
  - url: /json/tutorial/
  - url: /json/faq/
  - url: /json/reference/
---

Until recently, XML has been the single format for NIEM data. NIEM is now in the
process of adopting [JSON (Javascript Object Notation)](faq/data/simple) as a second
standard format for representing data based on the NIEM data model.

These pages are designed to provide an easy introduction to the purpose of NIEM,
the reasons to use NIEM with JSON data, and the developer knowledge needed to
put NIEM JSON into practice. They are intended for:

* Developers who know JSON but know nothing of NIEM or XML
* Developers familiar with NIEM XML who need a JSON version of a data exchange
* Data scientists wanting to understand or provide JSON data sources
* Managers wondering if NIEM JSON is right for their project

This is the starting page for learning about NIEM and JSON. Readers will
probably follow links to the content of interest and bypass the rest. Some
starting choices are:

{% include icon-list.html links=page.links %}

> NIEM JSON is a work in progress. These pages are intended to help developers,
data scientists, and managers understand the different ways they might use NIEM
and JSON together. Technical specifications now on the drawing board will define
NIEM JSON conformance targets to accompany the existing NIEM XML conformance
targets. Open source tools in the planning stage will help developers switch
between JSON and XML (and perhaps other serializations) by creating translators
for runtime data and conversions for build-time artifacts.

The intent is to make the NIEM approach valuable to anyone wanting to
create or apply community agreement on data semantics, using these to
provide precise definitions of data available through any sort of API,
or to document and harmonize published data resources for data
analytics.
