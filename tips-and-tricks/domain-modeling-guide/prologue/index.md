---
title:  1.0  Prologue
---

### 1.1 Background

#### 1.1.1 Purpose of NIEM

The National Information Exchange Model (NIEM) is a joint partnership across all levels of government (federal, state, tribal, and local) as well as private industry.  It is a uniform, harmonized, well-defined set of metadata structures normatively represented in the W3C XML Schema Definition (XSD) Language.  We refer to the structures in this set as *NIEM data components*.  They are openly available for use (and reuse) for designing, developing, and implementing standard XML-based information exchange specifications (IEPDs).

The primary purpose for the NIEM is to exchange information and data at the message level across different communities of interest.  This does not limit its aptness for sharing information within a single community.  However, it does drive its foundational design principles and rules.  To achieve consensus for a large common vocabulary, with well-defined semantics, and consistent structure that enables numerous communities of interest to share information at the message level, requires a careful balance of rational constraints, flexibility, compromise, and collaboration.  NIEM is designed to develop, distribute, and support large-scale enterprise-wide information exchange standards and associated procedures.  In turn, this enables a variety of jurisdictions to automate information sharing during both emergencies and daily routine operations.  Meeting this goal requires that all participating communities of interest model and maintain their NIEM data components according to NIEM specifications, even when to doing so may compromise long standing traditions within a community (for example, simple data names, terse definitions, or complex data structures).  This is necessary (1) to ensure different communities can share message level information and its associated semantics accurately, and (2) to facilitate model consensus and continued scalability.

#### 1.1.2 NIEM *Domains*

A NIEM *domain* is a Community of Interest (CoI) aligned around a common interest.  For NIEM the common interest is generally based on a Line of Business (LoB) (or related group of such) for which information must be shared or exchanged. 

A NIEM *domain steward* is responsible to ensure a given domain model (namespace or namespaces) is governed and maintained under the NIEM specifications.  To do this effectively, the domain steward should commission team of subject matter experts with technical skills that collectively represent various levels of government for that CoI or LoB.  However, the reality is that a domain is sometimes sponsored and governed by one organization because it may be difficult to identify volunteers from various levels of government within the CoI or LoB who can or will participate.  These are usually the smaller domains with less content to govern. 

Domains are a key aspect of the NIEM architecture for several reasons.  NIEM was designed with one set of common Core data components governed by the NIEM Business Architecture Committee (NBAC), and multiple sets of domain data components (derived from the Core) each semi-independently governed by a domain technical team.  By design, NIEM partitioning corresponds directly to its governance, and in turn, this facilitates both its version architecture and its ability to scale up (by onboarding new domains).  Furthermore, almost every NBAC member is also a member of at least one domain team which provides significant cross-pollination for collaborating on issue resolution, harmonization, refactorization, refinement of data components during NIEM release development cycles.
`:w

Finally, the NIEM architecture is flexible enough to allow the establishment of domains at-large that intentionally do not participate in governance, and yet, can still use NIEM to share information with member domains or other domains at large.


### 1.2 Scope


#### 1.2.1 What this guide covers

- Technical aspects of domain model management.
- How to start a new domain model.
- How to evaluate the quality of NIEM data components.
- Data component naming and definitions.
- Creating NIEM code lists quickly.
- Technical responsibilities of a domain:
  - Structure its domain content so other domains can reuse it.
  - Design its data components so it can be understood by other domains. 
  - Participate in harmonization and issue resolution when its domain is involved.
  - Consider impacts that changes to its domain will have on other domains (or Core).
  - Maintain representation in NBAC and participate.
- What impacts my domain model?  What does my domain model impact?
- Maintaining a domain model (what to model, when to change it, etc.)
- Harmonization
- Participating in a release cycle, domain update, and other NIEM technical processes.
- Technical assistance, tools, templates, best practices, references, etc.

This guide does not necessarily detail all topics it discusses.  However, the guide often references other NIEM documents or Web pages for more information.  It also includes an extensive appendix of references to other NIEM resources.   


#### 1.2.2 What you should be familiar with to use this guide

To use this guide, you should be somewhat familiar with the following topics and documents:

- [Extensible Markup Language (XML) 1.0 (5th Edition)](https://www.w3.org/TR/2008/REC-xml-20081126/)
- W3C XML Schema Definition (XSD) Language
  - [Part 1: Structures](https://www.w3.org/TR/xmlschema11-1/) 
  - [Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/)
- General NIEM concepts; for example, as presented in:
  - [NIEM Introduction](https://reference.niem.gov/niem/guidance/introduction/0.3/)
  - [NIEM Concept of Operations](https://reference.niem.gov/niem/guidance/concept-of-operations/0.5/)
  - [NIEM training](https://www.niem.gov/training)
  - [NIEM IEPD Starter Kit](http://niem.github.io/iepd-starter-kit/)
- [NIEM Conformance](https://reference.niem.gov/niem/specification/conformance/3.0/)
- [NIEM High Level Version Architecture (HLVA)](https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/)
- [NIEM Naming and Design Rules (NDR)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/)


### 1.3 Audience

This document is intended for use by technical personnel who support NIEM domain modeling and harmonization during major and minor release cycles, including domain updates.  In particular, we have tried to make it most useful to new or emerging domains that are building their initial content.  Guidance in this document is useful to NIEM working level governance (NBAC, NTAC, PMO staff, and lead developer) who often evaluate the need to harmonize, refine, or refactor NIEM domain models.  It may also be useful to organizations or groups interested in using NIEM but that do not intend to join its governance. 

----

### <&mdash;&mdash; Return to:  [Table of Contents](./index.html)

----

