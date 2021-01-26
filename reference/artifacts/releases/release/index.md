---
  title: Release
  icon: fa-files-o
  description: A release is a versioned set of schemas and supporting artifacts published by the NIEM Management Office.  Release schemas include NIEM Core, domains and code tables.
---

- TOC
{:toc}

## Overview

A NIEM release is a coherent set of schemas and supporting artifacts representing a specific version of the NIEM data model.  Each release is produced in collaboration with the [NIEM Business Architecture Committee]({{site.data.links.nbac}}) (NBAC), the [NIEM Technical Architecture Committee]({{site.data.links.ntac}}) (NTAC), and the general NIEM community.

The NIEM XML schemas are the authoritative source for release content.

Visit [this link]({{ "/niem-releases/" | relative_url }}) to find out more about the current release.

{:.note}
> See the [NIEM High-Level Version Architecture (HLVA) Specification]({{ site.data.pages.hlva | relative_url }}) for more information about releases, including harmonization, coherence, the 3-year release cycle, and the alpha, beta, and release candidate development stages.

## Kinds of releases

A release can be a major or minor release.

A **major release** may include architectural changes, as well as content changes to any namespace.

Version numbers of major releases end with ".0".  For example, NIEM 3.0 and NIEM 4.0 are major releases.

A **minor release** allows domain content changes only - Core and the architecture are locked.

Core and all namespaces imported by Core will be locked until the next major release. A core supplement may be published as an interim solution, with changes published in newly created schemas that can be used additive to the release .

The second number in a NIEM release version is incremented for a minor release (for example, NIEM 2.1, NIEM 3.2).

NIEM has the option however of publishing a **Core Supplement** to make incremental Core updates or additions available as needed.

Domains also have the option of distributing supplemental or replacement schemas if needed outside of the regular release schedule by publishing a **Domain Update**.

## Release cycle

NIEM has adopted the strategy of publishing annual releases in a **three-year cycle**: major - minor - minor.  A major release one year will be followed by minor releases the next two years.  This process has allowed NIEM to become more responsive to community needs while also providing a more predictable schedule.

A key feature of NIEM releases is that they are **persistent**.  Information exchanges that are built based on NIEM will not break or become invalid just because NIEM publishes a new release.  Old releases will remain available.  The determination of if or when to update an exchange to use a newer version of NIEM is a business decision.  NIEM's release cycle does not dictate exchange development or updates.

## Locations

NIEM releases are now hosted on two sites.

**release.niem.gov**

NIEM releases have traditionally been posted to **<https://release.niem.gov/niem>**.

- Target namespaces of release schemas will resolve to this site.

**GitHub**

Releases are now being also being posted to a GitHub repository at **<https://github.com/NIEM/NIEM-Releases>** for better developer support and release maintenance.

- Click on the [tags](https://github.com/NIEM/NIEM-Releases/tags) link to switch between releases.
- The package can be downloaded in full as a zip file by clicking on the green `Clone or download` button, and then clicking `Download ZIP`.
- The issue tracker is also located here on GitHub at <https://github.com/NIEM/NIEM-Releases/issues>

## Feedback

To submit comments or suggestions about the content of a release, please [file a new issue]({{site.data.links.release_issues}}) at the [NIEM Releases repo]({{site.data.links.release_repo}}) or [send an email]({{site.data.links.niem_comments}}).

Note that architectural feedback or issues should be submitted to the [NDR issue tracker]({{site.data.links.ndr_issues}}).
