---
  title: NIEM Model Package Description (MPD) Specification
  short: Model Package Description (MPD)
  icon: fa-book
  classID: IEPD
  description:  The NIEM Model Package Description (MPD) Specification specifies normative rules and non-normative guidance for building NIEM information exchange messages.  It defines IEPD artifacts like subset schemas, extension schemas, and MPD catalogs; and recommends how the package should be structured.
---

The **[NIEM Model Package Description (MPD) Specification]({{ site.data.links.mpd_spec }})** specifies normative rules and non-normative guidance for building NIEM information exchange messages.

- TOC
{:toc}

{:.note}
> The MPD Specification is currently out of date.  It targets NIEM 3.0, but the information still applies to the NIEM 4.x series of releases.  Use the corresponding NDR version 4.0 as appropriate.  Development of an updated NIEM message specification is in progress for 5.0.

## Conformance Targets

The MPD Specification includes the following conformance targets:

{% include specs/targets-table.html classID=page.classID %}

## Artifacts

The MPD Specification describes the following artifacts:

### Schema Artifacts

{% assign subsetPage = site.pages
    | where: "url", "/reference/artifacts/message/subset-schema/" | first %}

{% assign extensionPage = site.pages
    | where: "url", "/reference/artifacts/message/extension-schema/" | first %}

| Artifact | Description |
| -------- | ----------- |
| Reference Schema Document | A NIEM schema that represents the full authoritative schema document for its target namespace. |
| [Subset Document Schema]({{ subsetPage.url | relative_url }}) | {{ subsetPage.description }} |
| [Extension Schema Document]({{ extensionPage.url | relative_url }}) | {{ extensionPage.description }} |
| External Schema Document | A schema included in a MPD that does not conform to NIEM.  Content from external schemas must be accessed via NIEM [adapters](../../concepts/adapter). |
| Constraint-Schema Document Set | A set of schemas that define additional constraints outside of what is permitted in a regular NIEM-conformant schema. Used as second-pass validation for IEPs (IEPs must first validate to the original reference or subset schemas). |

### Required Document Artifacts

{% assign mpdCatalogPage = site.pages
    | where: "url", "/reference/artifacts/message/mpd-catalog/" | first %}

{% assign xmlCatalogPage = site.pages
    | where: "url", "/reference/artifacts/xml-catalog/" | first %}

{% assign conformanceReportPage = site.pages
    | where: "url", "/reference/artifacts/conformance-report/" | first %}

| Artifact | Description |
| -------- | ----------- |
| [MPD Catalog]({{ mpdCatalogPage.url | relative_url }}) | {{ mpdCatalogPage.description }} |
| Change Log | An artifacts that describes the changes applies to an MPD since its previous version. |
| ReadMe | The initial source of human-readable information about the MPD. |
| [XML Catalog]({{ xmlCatalogPage.url | relative_url }}) | {{ xmlCatalogPage.description }} |
| Sample instances | A sample instance is an example of the message, with actual or example data.  These can be very helpful for implementers of the IEPD. |
| [Conformance Report / Assertion]({{ conformanceReportPage.url | relative_url }}) | {{ conformanceReportPage.description }} |

### Optional Artifacts

Aside from the required artifacts, MPD content is relatively flexible. A variety of other optional documentation files may be incorporated into an MPD. When applicable, these may include (but are not limited to) files that describe or explain:

- Implementation details (hardware, software, configuration, etc.)
- Use of multiple root elements
- Use of multiple subsets or mixed releases
- How to use/reuse an MPD for various purposes (such as Web Services)
- Rationales and/or business purposes

| Artifact | Description |
| -------- | ----------- |
| NIEM Wantlist | A wantlist is an abbreviated XML representation of a NIEM schema document subset, and identifies only the data components a user selected to build a schema document subset. A wantlist file is required to be able to reload a NIEM subset into the [SSGT]({{ site.data.pages.ssgt | relative_url }}) for future editing. |
| Business Rules | Business rules constrain a message. They may be written as descriptive text or in a language that enables validation, such as [Schematron](http://schematron.com/). |

## Packaging a IEPD

The MPD Specification does not contain normative rules on how to structure the folders and place the files in an IEPD, but guidance is provided. A recommended layout is provided below:

{:.note}
> See [Appendix E. Guidance for IEPD Directories (non-normative)]({{ site.data.links.mpd_spec }}#appendix_E) from the MPD Specification for more information and helpful tips on how to organize an IEPD.

```bash
myIEPD-2.0/

  mpd-catalog.xml
  changelog.*
  conformance-assertion.*
  readme.*

  base-xsd/

    niem/               # NIEM subset schemas
      adapters/
      codes/
      domains/
      external/
      niem-core/
      proxy/
      utility/
      wantlist.xml
      xml-catalog.xml

    extension/
      extension1.xsd
      extension2.xsd
      ...
      xml-catalog.xml

    external/
      ic-ism/           # Example external standard
      ...
      xml-catalog.xml

  iep-sample/
    message1.xml
    message2.xml

  documentation/        # Human-readable documentation
    ...

```
