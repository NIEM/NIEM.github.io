---
title: Releases
icon: fa-th-large
description: A NIEM release is a coherent set of schemas and supporting artifacts representing a specific version of the NIEM data model, published by the NIEM Management Office.  Release schemas contain reusable properties and types meant for use in information exchanges.  These schemas include NIEM Core, domains, and code tables.
links:
  - url: /reference/release/core-supplement/
    group: update
  - url: /reference/release/domain-update/
    group: update
  - url: /reference/release/artifacts/
    group: more
  - url: /reference/release/versioning/
    group: more
---

- TOC
{:toc}

## Overview

{{ page.description }}

{:.note}
> See the [NIEM Releases](/niem-releases/) section for information and resources for specific releases.

Implementers of IEPDs use components from a NIEM release to define messages that will transmit data in an information exchange implementation. The goal of NIEM is to define common data components that are highly reusable, to improve the economy of implementing information exchanges, to increase comprehension of those exchanges, and to reduce errors in exchanges.

The NIEM version architecture describes how NIEM governance updates the contents and artifacts of NIEM releases.  It seeks to be a balance of various tradeoffs, including:

- release timeliness vs stability
- domain autonomy vs interoperability
- ease for IEPD developers vs ease for domain developers

**Persistence**

A key feature of NIEM releases is that they are persistent.  Information exchanges that are built based on NIEM will not break or become invalid just because NIEM publishes a new release.  Old releases will remain available.  The determination of if or when to update an exchange to use a newer version of NIEM is a business decision driven by the exchange partners.  NIEM's release cycle does not ever force IEPDs to be updated in lock-step.

**Formats**

The NIEM XML schemas in a release are the authoritative source for release content.  Documentation is also provided in a release via a Readme, spreadsheets, and CSV files for easier data imports.

See the [Release Artifacts](artifacts/) page in this section for more about what appears in a NIEM release.

### Governance bodies

The NIEM data model is governed by the following groups:

- The **NIEM Executive Steering Council (ESC)** serves as NIEM's decision-making body regarding membership, funding requirements, program or technical direction, personnel appointments, and other organizational decisions as required for supporting NIEM management.

- The **NIEM Management Office (NMO)** is the operational body that directs and executes NIEM daily operations, development, maintenance, and public relations. The NIEM NMO coordinates with Communities of Interest (COIs), principal stakeholders, and other information-sharing initiatives to promote collaboration and interest in NIEM priorities.

- The **NIEM Technical Architecture Committee (NTAC)** governs the NIEM architecture, which includes writing and maintaining NIEM specifications such as the [NIEM Naming and Design Rules (NDR)]({{ site.data.pages.ndr }}).  Membership includes operational practitioners and subject matter experts, key stakeholder agencies, domains, systems developers, and solution providers.

- The **NIEM Business Architecture Committee (NBAC)** sets the business architecture and requirements of NIEM, manages the NIEM Core namespace, and facilitates the processes for the regulation and support of NIEM domains. The NBAC is also responsible for managing the content of domains temporarily without active stewardship.  Membership includes representatives from each domain.

- The NBAC and NTAC may appoint standing subcommittees and transitory tiger teams who take responsibility for specific issues. Both committees may also make technical recommendations to the NIEM Management Office (NMO).

- **NIEM domains** manage the content within their domain and optional code table namespaces.  As long as their content conforms to the [NDR]({{ site.data.pages.ndr }}), domain stewards have authoritative control and do not require permission from the NBAC to add or make changes to their components.  Domain stewards may collaboratively work with a team of volunteer subject matter experts that collectively represent any involved Communities of Interest (COIs). Stewards and, if applicable, governance committees, manage their domain and bring together domain stakeholders to identify information exchange business requirements.

### Areas of responsibility

**Core Content**

The NBAC is responsible for the content of Core and for the publication of major and minor releases and Core Supplements, along with the [NIEM Management Office]({{ site.data.links.governance }}).

**Domain Content**

The NIEM model is decentralized.  Individual domains are responsible for managing their respective content.  Community feedback may be channeled directly through the domain's point of contact, or may be sent  via the standard feedback mechanisms listed below for the appropriate distribution.

The NBAC will ensure that domain namespaces meet NIEM conformance rules for major and minor releases.  The NBAC will also be responsible for the management of NIEM domains temporarily without active stewardship.

**Architecture**

The NTAC is responsible for the architecture of the NIEM model, as defined by the [NIEM Naming and Design Rules (NDR)]({{ site.data.pages.ndr | relative_url }}) and other [NIEM specifications]({{ "/reference/specifications/" | relative_url }}).

## Release namespaces

The content of a NIEM release is divided up into multiple namespaces, each managed by its own authoritative source.

In NIEM XML, each namespace corresponds to a separate schema file.  In NIEM JSON, each namespace may be represented by its own schema or consolidated into a single schema, with the [JSON-LD context](https://niem.github.io/reference/artifacts/json-ld-context/) providing the target namespace URI and prefix information typically found in XML schema headers.

NIEM releases include namespaces for NIEM Core, domains, code tables, auxiliary content, adapters and external standards, and utilities.

### NIEM Core

{:.box}
> **NIEM Core** is one of the primary namespaces in a NIEM release.  It contains content that does not belong to any one domain or other single authoritative body.  It is thus managed collaboratively by the NBAC, a committee with representatives from each of the domains.

Content in NIEM is typically more generic and common to most domains.  Domains may further specialize this content in their own namespaces via extensions, augmentations, or roles.

Examples of content found in NIEM Core include:

- [nc:Person](https://beta.movement.niem.gov/#/details?entityID=nc:Person)
- [nc:Address](https://beta.movement.niem.gov/#/details?entityID=nc:Address)
- [nc:Location](https://beta.movement.niem.gov/#/details?entityID=nc:Location)
- [nc:Organization](https://beta.movement.niem.gov/#/details?entityID=nc:Organization)
- [nc:ContactInformation](https://beta.movement.niem.gov/#/details?entityID=nc:ContactInformation)
- [nc:Activity](https://beta.movement.niem.gov/#/details?entityID=nc:Activity)
- [nc:Item](https://beta.movement.niem.gov/#/details?entityID=nc:Item)
- [nc:Document](https://beta.movement.niem.gov/#/details?entityID=nc:Document)
- [nc:Facility](https://beta.movement.niem.gov/#/details?entityID=nc:Facility)

### Domains

{:.box}
> A **NIEM domain** is a namespace that represents specialized data requirements for a formally-established NIEM community of interest or line of business.  This term may also refer to the governance group for a domain.

A NIEM domain is sometimes associated with or managed by an organization independent of NIEM, and may have its own rules, procedures, schedule, and priorities, subject to the NIEM principles that require openness, balance, due process, an appeals process, and consensus.

Information about specific NIEM domains is available at <{{ site.data.links.communities }}>.

### Code tables

{:.box}
> A **NIEM code table** is a namespace with content primarily composed of on one or more code sets.

Some NIEM code tables are managed by domains or by governance bodies that are actively engaged in the release process, such as NCIC codes from the FBI.  Other code tables are taken from public code sources and represented in a NIEM conformant manner without any involvement from their authoritative sources, such as USPS state codes and ISO 3166 country codes.

### Auxiliary content

{:.box}
> A **NIEM auxiliary namespace** provides NIEM-conformant content (properties and types, in addition to codes) from authoritative sources that have not stood up official NIEM domains and may or may not actively participate in NIEM releases and governance.

The NIEM 5.0 release introduced auxiliary namespaces to the model.  The governance is similar to that of NIEM code tables, but the content is more similar to domains.

### Adapters and external standards

{:.box}
> An **external standard** is one or more schemas that are not NIEM-conformant but are included in a NIEM release because information exchange is improved by leveraging rather than replicating the existing standard.
>
> An **adapter namespace** is a namespace that defines one or more NIEM-conformant types that wrap elements from external standards so that they can be used in a NIEM-conformant manner.

The Geography Markup Language (GML) is one of the external standards in NIEM.  Because of its widespread use, NIEM provides a way to work with its content as-is in a conformant manner.

See the [Adapters section](/reference/concepts/adapter/) for more about adapters and external standards.

Note that adapter types do not have to be defined solely in adapter namespaces.  They can also be defined in Core, domains, or auxiliary namespaces, but a namespace that only defines adapter types is an adapter namespace.

### Utilities

{:.box}
> A **NIEM utility namespace** provides basic NIEM infrastructure support to be leveraged by the other namespaces in the release and/or by NIEM messages carrying run-time data.

The following are NIEM utility schemas:

- **appinfo** - Defines attributes which provide additional semantics for components

- **code lists instance** - Defines attributes to support the NIEM Code Lists Specification (*) in NIEM XML messages.

- **code lists appinfo** - Defines annotations to support the NIEM Code Lists Specification (*) in NIEM XML schemas.

- **conformance targets** - Defines the attribute that NIEM-conformant schemas use to identify which rule set(s) should be used for conformance validation (e.g., NDR 5.0 REF rules, NDR 4.0 EXT rules, etc.).  [Learn more](/reference/concepts/namespace/#conformance-targets).

- **structures** - Defines root types for NIEM object, association, augmentation, and metadata types.  Also defines common attributes to support ids and referencing, linked data, metadata, and security markup for all NIEM elements.

(*) - The [NIEM Code Lists Specification]({{ site.data.pages.code-lists }}) supports dynamic codes, the representation of codes in alternative formats, such as CSVs and Genericode, and multi-column code tables.

## Release products

{:.box}
> A **NIEM release** is a versioned set of schema documents published by the NIEM Management Office. Each schema document defines data components for use in information exchanges.

A release should:

- be easy to use.
- define each concept in a coherent way.
- be independent of other releases, although any given schema document may occur in multiple releases.
- be of high quality, and vetted by NIEM governance.

A NIEM release can be a major release, a minor release, or a published update.

### Major release

{:.box}
> A **major release** may include content changes to NIEM Core and to any other namespace in the release.  It may also include architectural changes, such as syntax changes to the schemas, as determined by any updates to the [Naming and Design Rules (NDR)]({{ site.data.pages.ndr | relative_url }}) and by the NIEM Technical Architecture Committee (NTAC).

The first digit of the release number indicates the major release series.  The second digit will be "0".  For example, NIEM 3.0, 4.0, and 5.0 are all major releases.

### Minor release

{:.box}
> A **minor release** may include content changes to domains and to code tables and other namespaces that are not imported by NIEM Core.  The NIEM Core namespace, all of its dependencies, and the architecture will remain locked until the next major release.

Although NIEM Core is locked in minor releases, Core Supplements (see below) can be used to publish Core-related changes additively during minor releases or anytime outside of the standard release cycle.

A non-zero second digit in a release number indicates the minor release version.  For example, the two minor releases following the NIEM 4.0 major release are NIEM 4.1 and NIEM 4.2.

**Namespace versions in a minor release**

Only namespaces that have been updated or reuse content from another namespace that has been updated in a minor release will be given a new version number and target namespace identifier.  Because Core is locked in minor releases, NIEM 4.0, 4.1, and 4.2 all share the same NIEM Core 4.0 schema.  This may be true of other namespaces in a minor release as well.

In a minor release, version numbers and target namespace identifiers of updated namespaces are kept in sync with the minor release number.

{:.example}
> An individual namespace in the NIEM 4.0 major release would still remain at version 4.0 in the NIEM 4.1 minor release if it remains unchanged.  If that namespace is then modified in the NIEM 4.2 release, the namespace version would jump directly from 4.0 to 4.2 to stay in sync with the minor release number.

**Code table dependencies**

Beginning with NIEM 5.0, NIEM Core no longer imports code table namespaces if avoidable.  Code properties have been moved from Core to the corresponding code namespaces.  New substitution groups have been set up to allow those code properties to be plugged back into their original locations within NIEM messages.

This refactoring means that these code table namespaces are no longer imported by NIEM Core and thus are no longer locked in minor releases.  This allows for easier annual updates of code sets without the need to publish changes additively via a separate Core Supplement.

### Published updates

{:.box}
> A **published update** is one or more schemas that are issued by a NIEM domain or NIEM governance body outside of the regular release cycle. An update may be new content or may be an update of existing release content.

Published updates are always additive.  These update schemas may be used in IEPDs together with the standard release schemas.  Published updates never overwrite the content in existing release schemas.

The issuing body vets each update before publication, but the update is not subject to review by other NIEM bodies. A published update must be conformant, but otherwise it has fewer constraints on quality than does a NIEM release.

Schemas in a published update have a different base for their target namespace URIs.  Instead of beginning with the standard `http://release.niem.gov/niem/`, they will begin with `http://publication.niem.gov/niem/`.

There are two kinds of published updates: core supplements and domain updates.

#### Core Supplements

{:.box}
> A **core supplement** is an update between major releases to add or adjust content from Core or a namespace imported by Core, published by the NMO at the recommendation of the NBAC and NTAC.

Core supplements can be used in an IEPD together with the corresponding major release or any minor release in that series.  The changes in a core supplement will be integrated back into NIEM during the next major release.

See the [Core Supplement](core-supplement/) page in this section for more.

#### Domain Updates

{:.box}
> A **domain update** is an update to add or adjust content from one or more domains or domain-related code namespaces, published outside of the annual release cycle.

Domain updates can be used in an IEPD together with its corresponding release.  Because the changes in a domain update do not affect Core, they will be integrated back into NIEM during the next release, whether major or minor.

See the [Domain Update](domain-update/) page in this section for more.

## Release cycle

Starting with NIEM 3.0, NIEM has adopted the strategy of publishing annual releases in a **three-year cycle**: major, minor, minor.  A major release one year will be followed by minor releases the next two years.

This cycle allows NIEM to be more responsive to community needs and provide a more predictable schedule, while also maintaining some stability against too-frequent Core and architectural changes that may require updates to specifications, tools, and training.

Core supplements and domain updates allow changes to be published outside of the standard release cycle in an additive manner, so these updates can be used in addition to their corresponding releases.

This release strategy is meant to achieve the following goals:

- The NIEM architecture and NIEM Core remain fixed for three-year periods, providing a measure of stability, especially for tool developers.
- A domain may make content changes within a NIEM release on an annual basis.
- A domain may issue a domain update as needed to publish content changes outside of the regular release cycle.
- IEPDs may reuse content from NIEM releases and domain updates.
- Domain updates are incorporated into the next NIEM release.
- All NIEM content changes are visible via uniquely identified schemas and change logs.
- IEPDs based on older NIEM release are still valid and usable even as new NIEM releases are published.  IEPDs do not need to be updated just to stay in sync with the latest NIEM release.

## Release development

### Draft stages

A release is developed in the following stages:

Alpha

: Major content submissions and issues should be submitted by the input deadline for the alpha stage.  This is to ensure there is adequate time available to review, integrate, and harmonize the changes into the release.

: Alpha releases are published internally to the NIEM committees and domains, who are free to share the package with their communities for review and comment.

Beta

: After major changes and issues have been submitted during the alpha stage, the beta stage allows harmonization between the domains.  Issue resolutions and smaller changes can occur during this stage.

: Beta releases are announced and distributed to the NIEM community for public review and feedback.

Release Candidate

: A release candidate acts as a draft of the final release.  This stage allows for that draft to be double-checked before publication.  Only bug fixes are considered during this stage; other submitted comments and requests will be queued for the following release.

### Processes

The following are activities and processes relating to managing the NIEM data model updating NIEM releases:

#### Harmonization

{:.box}
> **Harmonization** is the process of modifying one or more schemas in an incremental fashion for the purpose of improving the quality with respect to some criteria. For example, schemas may be harmonized to reduce semantic overlap of its components. Schemas may also be harmonized to ensure uniformity of the vocabulary used in component names and definitions.

Harmonization will be an ongoing process.  As new domains, requirements, and content are added, existing NIEM components may need to be adjusted.

{:.note}
> One of the purposes of harmonization is to reduce duplication, but not necessarily to reduce cross-domain dependencies.  Domains can and should reuse content from another domain if it is considered to be the authoritative source for the information.  Content should only be refactored into Core if there is no clear, single authoritative source for it and would thus be better managed collaboratively by the [NBAC]({{site.data.links.nbac}}).

#### Cross-domain harmonization

{:.box}
> **Cross-domain harmonization** is a process through which domains and/or the NBAC collaborate to resolve inconsistencies, overlaps, and other semantic issues between the domains and Core.

The NBAC may stand up special tiger teams or working groups for this purpose. Changes to a domain may be published with the next major or minor release.  Changes to Core will be staged for the next major release.

Component overlap across domains is typically resolved by cross-domain harmonization by one of the following outcomes:

- The overlap is refactored so that the component and its general-purpose sub-properties are moved to Core.  Domains can augment the new Core component as needed with domain-specific components, or extend the component to create a new specialized type.

  {:.example}
  > Several domains defined their own task objects.  To address the overlap during the development of the next major release:
  > - A new task object was created in Core - `nc:TaskType`.
  > - Some of the more generic task sub-properties were moved from the domains to Core, such as for the task ID, start date, and due date.
  > - The remaining domain-specific task sub-properties were then converted into new domain augmentations of `nc:TaskType`.
  >
  > <br/> The result of this process is that multiple domain-specific versions of a task in NIEM were reconciled into a single task object.  The domain task augmentations all work off the new `nc:TaskType` and can be used individually or in combination with the others as needed in IEPDs.

- One domain will be determined to be the appropriate authoritative source for the component.  The object will remain in that domain and other domains are updated to augment or extend to support their own specific needs.  The original domain may optionally make some changes to better support reuse.

  {:.example}
  > An arrest is used by multiple domains.  During harmonization, it was decided that the Justice domain remains the logical place for this object to be located.  Other domains can still reuse, augment, or extend `j:ArrestType` as needed, but moving the type to Core was not the best fit for this object.  The Justice domain has the subject-matter expertise needed to best manage and maintain this object.

#### Core synchronization

{:.box}
**Core Synchronization** is a process through which the changes in any outstanding Core supplements are merged into the primary namespaces.  Domains will be adjusted as needed based on the new Core content.

This synchronized content, plus any additional NBAC-approved chan
These updates to Core, plus This set of Core and domain changes will form a major release.

NBAC-approved changes are applied to Core and

#### Domain reconciliation

{:.box}
> **Domain reconciliation** is a process through which the changes in a domain update are merged back into the domain's primary namespace.  The updated domain, along with any other pending domain changes, is then published as part of the next major or minor release.

Domains typically update their content during the standard NIEM release development cycle.  Major additions and changes are submitted during the alpha stage; while further refinements, harmonization, and minor changes occur during the beta stage.  In addition to these changes being applied to the next major or minor release, any changes in an outstanding domain update are reconciled back into the model:

- Completely new components in a domain update can be moved directly into the domain's namespace.

- Modifications to existing components in a domain update (a separate version of the domain components with changes applied, but located in the separate domain update namespace) may require special handling.  Some changes can be applied as-is to the domain.  Others may require refactoring.  For example, a domain update may put content into a new augmentation; during reconciliation, the new content may be able to be added to the type directly and the augmentation will no longer be needed.

As with other kinds of modifications to a domain, changes that impact other domains will first need to be reconciled.

Note that domain updates are infrequent.  Annual releases have reduced the need for domains to publish changes outside of the standard release cycle.

### Publication sites

There are several data stores that host NIEM release packages.  Schemas and other release artifacts posted to these sites will remain available and unmodified.  New releases and published updates will be posted to separate locations; older releases will not be overwritten or modified.

**Release areas**

All NIEM major and minor releases are published to the release area, hosted on the following two sites:

{:.box}
> **<https://release.niem.gov/niem/>**

- This is the original release area and continues to be supported.
- Target namespaces of release schemas will resolve or be redirected to this site.

{:.box}
> **<https://github.com/NIEM/NIEM-Releases>**

- GitHub was added as a release area for better developer support and release maintenance.
- Click on the [tags](https://github.com/NIEM/NIEM-Releases/tags) link to switch between releases.
- A release package can be downloaded in full as a zip file by clicking on the green `Code` button, and then clicking `Download ZIP`.
- The issue tracker is also located here on GitHub at <https://github.com/NIEM/NIEM-Releases/issues>

**Publication area**

Core supplements and domains updates are published at a separate site:

{:.box}
> **<https://publication.niem.gov/niem/>**

- Published updates may also appear within release packages published to the main release sites for convenience.

## Submitting feedback

Community feedback on the content of a NIEM release may be entered into the [NIEM Release issue tracker]({{site.data.links.release_issues}}) or may be emailed directly to the [NIEM comments mailing list]({{site.data.links.niem_comments}}).

Note that architectural feedback or issues should be submitted to the [NDR issue tracker]({{site.data.links.ndr_issues}}).

## See more

{% include icon-list.html links=page.links %}
