---
  title: NIEM Information Exchange Package Documentation (IEPD) Specification
  short: Information Exchange Package Documentation (IEPD)
  icon: fa-book
  classID: IEPD
  redirect_from: /reference/specification/mpd/
  description:  The NIEM Information Exchange Package Documentation (IEPD) Specification specifies normative rules and non-normative guidance for building NIEM information exchange messages.  It defines IEPD artifacts like subset schemas, extension schemas, and IEPD catalogs; and recommends how the package should be structured.
  links:
  - url: /reference/specifications/iepd/changes/
---

The **[NIEM Information Exchange Package Documentation (IEPD) Specification]({{ site.data.links.mpd_spec }})** specifies normative rules and non-normative guidance for building NIEM information exchange messages.

{:.note}
> This specification was previously known as the **NIEM Model Package Description (MPD) Specification**.  For 5.0, the MPD specification was simplified to focus specifically on IEPDs (one of the specialized kinds of model packages) and renamed.

- TOC
{:toc}

## Specification Resources

{% include specs/specification-summary.html classID=page.classID %}

## Conformance Targets

The IEPD Specification includes the following conformance targets:

{% include specs/targets-table.html classID=page.classID %}

## Artifacts

The IEPD Specification describes the following artifacts:

### Schemas

{% assign subsetPage = site.pages
    | where: "url", "/reference/artifacts/message/subset-schema/" | first %}

{% assign extensionPage = site.pages
    | where: "url", "/reference/artifacts/message/extension-schema/" | first %}

| Artifact | Description |
| -------- | ----------- |
| Reference Schema Document | A NIEM schema that represents the full authoritative schema document for its target namespace. |
| [Subset Document Schema]({{ subsetPage.url | relative_url }}) | {{ subsetPage.description }} |
| [Extension Schema Document]({{ extensionPage.url | relative_url }}) | {{ extensionPage.description }} |
| External Schema Document | A schema included in an IEPD that does not conform to NIEM.  Content from external schemas must be accessed via NIEM [adapters](../../concepts/adapter). |
| Constraint-Schema Document Set | A set of schemas that define additional constraints outside of what is permitted in a regular NIEM-conformant schema. Used as second-pass validation for IEPs (IEPs must first validate to the original reference or subset schemas). |

### Required Documents

{% assign iepdCatalogPage = site.pages
    | where: "url", "/reference/artifacts/message/iepd-catalog/" | first %}

{% assign xmlCatalogPage = site.pages
    | where: "url", "/reference/artifacts/xml-catalog/" | first %}

{% assign conformanceReportPage = site.pages
    | where: "url", "/reference/artifacts/conformance-report/" | first %}

| Artifact | Description |
| -------- | ----------- |
| [IEPD Catalog]({{ iepdCatalogPage.url | relative_url }}) | {{ iepdCatalogPage.description }} |
| Change Log | An artifacts that describes the changes applies to an IEPD since its previous version. |
| ReadMe | The initial source of human-readable information about the IEPD. |
| [XML Catalog]({{ xmlCatalogPage.url | relative_url }}) | {{ xmlCatalogPage.description }} |
| Sample instances | A sample instance is an example of the message, with actual or example data.  These can be very helpful for implementers of the IEPD. |
| [Conformance Report / Assertion]({{ conformanceReportPage.url | relative_url }}) | {{ conformanceReportPage.description }} |

### Optional Artifacts

Aside from the required artifacts, IEPD content is relatively flexible. A variety of other optional documentation files may be incorporated into an IEPD. When applicable, these may include (but are not limited to) files that describe or explain:

- Implementation details (hardware, software, configuration, etc.)
- Use of multiple root elements
- Use of multiple subsets or mixed releases
- How to use/reuse an IEPD for various purposes (such as Web Services)
- Rationales and/or business purposes

| Artifact | Description |
| -------- | ----------- |
| NIEM Wantlist | A wantlist is an abbreviated XML representation of a NIEM schema document subset, and identifies only the data components a user selected to build a schema document subset. A wantlist file is required to be able to reload a NIEM subset into the [SSGT]({{ site.data.pages.ssgt | relative_url }}) for future editing. |
| Business Rules | Business rules constrain a message. They may be written as descriptive text or in a language that enables validation, such as [Schematron](http://schematron.com/). |

## Packaging an IEPD

The IEPD Specification does not contain normative rules on how to structure the folders and place the files in an IEPD, but guidance is provided. A recommended layout is provided below:

{:.note}
> See [Appendix E. Guidance for IEPD Directories (non-normative)]({{ site.data.links.mpd_spec }}#appendix_E) from the IEPD Specification for more information and helpful tips on how to organize an IEPD.

```bash
myIEPD-2.0/

  iepd-catalog.xml
  changelog.*
  conformance-assertion.*
  readme.*

  base-xsd/

    niem/               # NIEM subset schemas
      xsd/
        adapters/
        codes/
        domains/
        external/
        utility/
        niem-core.xsd
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

## Additional Resources

See more information about the IEPD Specification:

{% include icon-list.html links=page.links %}
