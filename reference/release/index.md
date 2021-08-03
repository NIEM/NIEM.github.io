---
title: Releases
icon: fa-th-large
description: A NIEM release is a versioned set of schemas and supporting artifacts published by the NIEM Management Office.  Release schemas contain reusable properties and types meant for use in information exchanges.  These schemas include NIEM Core, domains, and code tables.
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

Each release is produced in collaboration with the [NIEM Business Architecture Committee]({{site.data.links.nbac}}) (NBAC), the [NIEM Technical Architecture Committee]({{site.data.links.ntac}}) (NTAC), and the general NIEM community.

See these links for more information about the [current release]({{ "/niem-releases/current" | relative_url }}) and the [latest draft release]({{ "/niem-releases/draft" | relative_url }}).

## Kinds of releases

A release can be a major or minor release.

### Major release

A major release may include content changes to NIEM Core and to any other namespace in the release.  It may also include architectural changes, as determined by any updates to the [Naming and Design Rules]({{ site.data.pages.ndr | relative_url }}) and by the NIEM Technical Architecture Committee (NTAC).

The first digit of the release number indicates the major release series.  The second digit will be "0".  For example, NIEM 3.0, 4.0, and 5.0 are all major releases.

### Minor release

The NIEM Core namespace and the architecture are locked in minor releases.  Content changes can be made to domains and to any namespace not imported by Core.

The second digit in the release number indicates the minor release series.  For example, the two minor releases following the NIEM 4.0 major release are NIEM 4.1 and NIEM 4.2.  Because Core is locked in minor releases, NIEM 4.0, 4.1, and 4.2 all share the same NIEM Core schema.

Core supplements (see below) can be used to publish Core-related changes additively during minor releases or anytime outside of the standard release cycle.

Changes were made starting with NIEM 5.0 to remove imports from Core to code namespaces.  Breaking these dependencies now allows these code sets to be updated directly as needed during minor releases, without the need to publish updates via a separate Core Supplement.

### Published updates

NIEM also has the option of publishing updates between official releases to distribute new content or provide workarounds for bugs or other issues in a release.  These updates are published in separate namespaces and do not overwrite content in an existing release.  In an IEPD, content can be reused from both a NIEM release and from any applicable update together.

#### Core Supplements

A Core Supplement is an update to adjust content from Core or a namespace imported by Core, published by the NBAC outside of a major release.  Core supplements can be used in an IEPD together with the corresponding major release or any minor release in that series.  The changes in a Core Supplement will be integrated back into NIEM during the next major release.

See the [Core Supplement](core-supplement/) page in this section for more.

#### Domain Updates

A domain update is an update to adjust content from one or more domains or domain-related code namespaces, published outside of the annual release cycle.  Domain updates can be used in an IEPD together with its corresponding release.  Because the changes in a domain update do not affect Core, they will be integrated back into NIEM during the next major or minor release.

See the [Domain Update](domain-update/) page in this section for more.

## Release cycle

Starting with NIEM 3.0, NIEM has adopted the strategy of publishing annual releases in a **three-year cycle**: major, minor, minor.  A major release one year will be followed by minor releases the next two years.

This cycle allows NIEM to be more responsive to community needs and provide a more predictable schedule, while also maintaining some stability against too-frequent Core and architectural changes that may require updates to specifications, tools, and training.

Core supplements and domain updates allow changes to be published outside of the standard release cycle in an additive manner, so these updates can be used in addition to their corresponding releases.

## Release features

### Persistence

A key feature of NIEM releases is that they are persistent.  Information exchanges that are built based on NIEM will not break or become invalid just because NIEM publishes a new release.  Old releases will remain available.  The determination of if or when to update an exchange to use a newer version of NIEM is a business decision driven by the exchange partners.  NIEM's release cycle does not ever force IEPDs to be updated in lock-step.

### Formats

The NIEM XML schemas in a release are the authoritative source for release content.  Documentation is also provided in a release via a Readme, spreadsheets, and CSV files for easier data imports.

See the [Release Artifacts](artifacts/) page in this section for more about what appears in a NIEM release.

## Publication sites

NIEM releases are now hosted on two sites.

**release.niem.gov**

NIEM releases have traditionally been posted to **<https://release.niem.gov/niem>**.

- Target namespaces of release schemas will resolve to this site.

**GitHub**

Releases are now being also being posted to a GitHub repository at **<https://github.com/NIEM/NIEM-Releases>** for better developer support and release maintenance.

- Click on the [tags](https://github.com/NIEM/NIEM-Releases/tags) link to switch between releases.
- The package can be downloaded in full as a zip file by clicking on the green `Clone or download` button, and then clicking `Download ZIP`.
- The issue tracker is also located here on GitHub at <https://github.com/NIEM/NIEM-Releases/issues>

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

The following are activities and processes relating to updating NIEM releases:

Harmonization

: The process of modifying schemas in an incremental fashion for the purpose of improving the quality with respect to some criteria. For example, schemas may be harmonized to reduce semantic overlap of its components. Schemas may also be harmonized to ensure uniformity of the vocabulary used in component names and definitions.

: Harmonization will be an ongoing process.  As new domains, requirements, and content are added, existing NIEM components may need to be adjusted.

  {:.note}
  > The purpose of harmonization is to reduce duplication, but not necessarily to reduce cross-domain dependencies.  Domains can and should reuse content from another domain if it  is considered to be the authoritative source for the information.  Content should only be refactored into Core if there is no clear, single authoritative source for it and would be better managed collaboratively by the [NBAC]({{site.data.links.nbac}}).

Cross-Domain Harmonization

: During this process, the NBAC may create tiger teams or working groups to resolve inconsistencies, overlaps, and other semantic issues between the domains and Core.  Changes to a domain may be published with the next major or minor release.  Changes to Core will be staged for the next major release.

Core Synchronization

: During this process, NBAC-approved changes are applied to Core and any outstanding Core supplements are merged into the namespace.  Domains will be adjusted and synchronized to the new Core content and namespace.  This set of Core and domain changes will form a major release.

### Areas of responsibilities

Core Content

: The [NIEM Business Architecture Committee (NBAC)]({{ site.data.links.nbac }}) is responsible for the content of Core and for the publication of major and minor releases and Core Supplements, along with the [NIEM Management Office]({{ site.data.links.niem_governance }}).

Domain Content

: The NIEM model is decentralized.  Individual domains are responsible for managing their respective content.  Community feedback may be channeled directly through the domain's point of contact, or may be sent  via the standard feedback mechanisms listed below for the appropriate distribution.

: The NBAC will ensure that domain namespaces meet NIEM conformance rules for major and minor releases.

Architecture

: The [NIEM Technical Architecture Committee (NTAC)]({{ site.data.links.ntac | relative_url }}) is responsible for the architecture of the NIEM model, as defined by the [NIEM Naming and Design Rules (NDR)]({{ site.data.pages.ndr | relative_url }}) and other [NIEM specifications]({{ "/reference/specifications/" | relative_url }}).

## Submitting feedback

Community feedback on the content of a NIEM release may be entered into the [NIEM Release issue tracker]({{site.data.links.release_issues}}) or may be emailed directly to the [NIEM comments mailing list]({{site.data.links.niem_comments}}).

Note that architectural feedback or issues should be submitted to the [NDR issue tracker]({{site.data.links.ndr_issues}}).

## See more

{% include icon-list.html links=page.links %}
