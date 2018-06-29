---
  title: Information Exchange Package Documentation
  short: IEPD
  icon: fa-sitemap
  description: Description of Information Exchange Package Documentations.
  links:
    - url: /reference/artifacts/iepd/structure/
    - url: /training/iepd-developer/
---

Information Exchange Package Documenations (IEPDs) are the core NIEM artifacts.
They represent the context, content, semantics, and structure of a defined
information exchange. An IEPD consists of a set of artifacts that together define
and describe one or more implementable information exchanges.

{:.features}
>
> - Explicit Conformance Target specified in the Model Package Description Specification (MPD-Spec)
> - The definitive artifact defining information exchanges
> - Provides authoritative semantics for Information Exchange Packages (IEPs)
> - Provides example derived IEPs and documentation

{:.note}
> The rules for constructing IEPDs are defined by the Model Package Description
> Specification (MPD-Spec). IEPDs are a kind of MPD composed from other NIEM
> artifacts including, but not limited to: Code Lists, Extension Schema Documents,
> and Subset Schema Documents. IEPDs provide a self-contained definition for
> derived information exchanges, thus they must be self documenting.

<!--more-->

## Why IEPDs

An Information Exchange Package Documentation (IEPD) is a NIEM message specification. It is a set of artifacts that define and document a message, using applicable content from NIEM and custom content as needed. Extra work goes into creating an IEPD so that it contains all of the information needed by developers to implement it.

To NIEM, the IEPD is considered the point of interoperability. Creation and management of IEPDs is the responsibility of their stakeholders and developers. As such, IEPDs have their own versioning processes, and are managed independently of NIEM and NIEM Domains. NIEM PMO defines IEPD conformance, but IEPD development and management fall outside its scope.

An IEPD contains a NIEM-conformant Schema Document Set (SET) that may include portions of NIEM Core and Domain Reference Schema Documents (REFs), and enterprise-specific or IEPD-specific Extension Schema Documents (EXTs). The schema documents contained in an IEPD work together to define one or more classes of instance documents that consistently encapsulate data for meaningful information exchanges. Any instance document that is valid for the SET, and that satisfies the conditions which define an IEP, is a member of a class of IEPs.

Schema documents in an IEPD conform to the NIEM Naming and Design Rules and may use or extend data component definitions drawn from NIEM. An IEPD may also incorporate and use schema documents from other standards that do not conform to NIEM. An IEPD consists of a set of artifacts (schema documents, documentation, sample instance documents, etc.) that together define and describe one or more implementable information exchanges. An IEPD should contain all materials necessary to:

- Understand information exchange context, content, semantics, and structure.
- Create and validate documents defined by the IEPD, and used for information exchanges.
- Identify the lineage of the IEPD itself and optionally its artifacts.

## Detailed Reference

{% include icon-list.html links=page.links %}
