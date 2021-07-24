---
title: IEPD Catalog
icon: fa-info
redirect_from: /reference/artifacts/messages/mpd-catalog/
description: An IEPD Catalog is an XML document that contains basic information about the package (name, description, purpose, etc.) and a listing of the package's key artifacts.  It is a required artifact in an IEPD.
---

{{ page.description }}

{:toc}
- TOC

The IEPD Catalog establishes identification metadata, conformance targets, purpose, general content, lineage, and other metadata. Metadata includes:

- Uniform Resource Identifier (URI)
- Name
- Version number
- The conformance target identifier
- A copy of all schema documents needed to validate any instance document class it defines
- (Optional) Alternate representations in addition to XML Schema (e.g., generic diagram, UML/XMI, database format, spreadsheet, etc.)
- (Optional) Miscellaneous other documentation or file artifacts for assisting with usage or implementation

## Conformance

The [IEPD Specification]({{ site.data.pages.mpd | relative_url }}) defines a IEPD Catalog as a conformance target, with a set of rules that must be followed in order to be considered conformant.

{:.note}
> The first step is to make sure that the catalog file validates against its **[IEPD Catalog XML Schema]({{ site.data.links.mpd_catalog_xsd }})**.

## Example

The following is an example IEPD catalog from the Cursor on Target IEPD, provided by the IEPD specification.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<c:IEPDCatalog xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://reference.niem.gov/niem/resource/iepd/catalog/5.0/ iepd-catalog.xsd"
    xmlns:c="http://reference.niem.gov/niem/resource/iepd/catalog/5.0/"
    xmlns:nc="http://release.niem.gov/niem/niem-core/5.0/"
    xmlns:structures="http://release.niem.gov/niem/structures/5.0/"
    xmlns:cot="http://example.com/cot-niem/0.9/" c:iepdURI="http://example.com/cot-iepd/0.9rc2/"
    c:iepdConformanceTargetIdentifierURIList="http://reference.niem.gov/niem/specification/model-package-description/4.0/#IEPD"
    c:iepdName="cot-iepd" c:iepdVersionID="0.9rc1">
    <c:IEPDInformation>
        <c:AuthoritativeSource>
            <nc:EntityOrganization>
                <nc:OrganizationName>CoT Program Office</nc:OrganizationName>
                <nc:OrganizationPrimaryContactInformation>
                    <nc:ContactWebsiteURI> https://partners.mitre.org/sites/CoTUserGroup/
                    </nc:ContactWebsiteURI>
                </nc:OrganizationPrimaryContactInformation>
            </nc:EntityOrganization>
        </c:AuthoritativeSource>
        <c:CreationDate>2014-08-04</c:CreationDate>
        <c:StatusText>Release Candidate</c:StatusText>
    </c:IEPDInformation>
    <c:IEPConformanceTarget structures:id="CoT-NIEM-IEP">
        <nc:DescriptionText>
                An IEP class equivalent to Cursor-on-Target 2.0 messages
            </nc:DescriptionText>
        <c:HasDocumentElement c:qualifiedNameList="cot:Event"/>
        <c:XMLSchemaValid>
            <c:XMLCatalog c:pathURI="base-xsd/xml-catalog.xml"/>
        </c:XMLSchemaValid>
        <c:SchematronValid>
            <c:SchematronSchema c:pathURI="schematron/business-rules.sch"/>
        </c:SchematronValid>
        <c:EXIXMLSchema>
            <c:XMLCatalog c:pathURI="exi-xsd/exi-xml-catalog.xml"/>
            <c:XMLSchemaDocument c:pathURI="extension/cot-niem.xsd"/>
        </c:EXIXMLSchema>
        <c:IEPSampleXMLDocument c:pathURI="iep-samples/iep1.xml"/>
    </c:IEPConformanceTarget>
    <c:ReadMe c:pathURI="00-README.txt"/>
    <c:IEPDChangeLog c:pathURI="01-changelog.txt"/>
    <c:ConformanceAssertion c:pathURI="02-conformance.txt"/>
    <c:Wantlist c:pathURI="base-xsd/niem/wantlist.xml"/>
    <c:ExtensionSchemaDocument c:pathURI="base-xsd/extension/cot-niem.xsd"/>
    <c:ExtensionSchemaDocument c:pathURI="base-xsd/extension/cot-niem-codes.xsd"/>
    <c:ReferenceSchemaDocument c:pathURI="base-xsd/extension/milops-future-ref.xsd"/>
</c:IEPDCatalog>
```

## IEPD Specification references

See the following sections from the `IEPD Specification` for more information about the catalog file:

- [5.1. NIEM IEPD Catalog]({{ site.data.links.mpd_spec }}#section_5.1)
- [5.2 Metadata Concepts]({{ site.data.links.mpd_spec }}#section_5.2)
- [Appendix A. IEPD Catalog XML Schema Document]({{ site.data.links.mpd_spec }}#appendix_A)
- [Appendix B. Example IEPD Catalog Document for Cursor on Target]({{ site.data.links.mpd_spec }}#appendix_B)
