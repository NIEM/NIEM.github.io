---
  title: Reference Schema Document Usage
  short: Usage
  icon: fa-sitemap
  description: Reference Schema Document Usage
---

A NIEM reference schema document (REF) is an authoritative definition
schema document for a NIEM target namespace, therefore, all NIEM releases, core
updates, and domain updates are composed of REFs and their associated namespaces.
As a standalone artifact, REFs are always harmonized such that all types and
properties are semantically unique, i.e., multiple versions of semantically identical
types or properties do not exist within the documents. This page explains how REFs
are integrated into a NIEM conformant document or package.

## Specifying a Reference Schema Document

REFs are most easily specified through an XML Catalog. An XML catalog document is an
instance XML document that describes a mapping between external entity references and
locally-cached equivalents. It associates a URI reference with information about an
external reference that appears in an XML document. An XML catalog document can be
used to locate the replacement text for an external entity, or an alternate URI
reference for a resource. Specifying a REF in an XML Catalog document is as follows:

- You specify the absolute path of the REF as the `name` attribute of the `uri` element of the XML Catalog. Generally this is the URL of the schema document.
- You specify the relative path of the REF as the `uri` attribute of the `uri` element of the XML Catalog. Generally this is a Unix style path to a file.
- The `name` attribute specified in the XML Catalog of some `uri` element must exactly match the `targetNamespace` attribute of the named REF.

### XML Catalog Example for REF

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<!DOCTYPE catalog PUBLIC "-//OASIS//DTD Entity Resolution XML Catalog V1.0//EN" "http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd">
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
  <uri name="http://release.niem.gov/niem/appinfo/4.0/" uri="utility/appinfo/4.0/appinfo.xsd"/>
  <uri name="http://release.niem.gov/niem/conformanceTargets/4.0/" uri="utility/conformanceTargets/4.0/conformanceTargets.xsd"/>
  <uri name="http://release.niem.gov/niem/niem-core/4.0/" uri="niem-core/4.0/niem-core.xsd"/>
</catalog>
```
