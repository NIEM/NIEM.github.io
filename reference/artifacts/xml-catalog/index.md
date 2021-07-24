---
title: XML Catalog
description: An XML catalog is a XML document that assigns locations to files.  This can be used to override the file locations assigned by NIEM XML schema import statements without having to modify the original schema itself.
icon: fa-code
tools:
  - url: /reference/tools/oxygen/xml-catalog/
  - url: /reference/tools/xmlspy/xml-catalog/
---

## Overview

{{page.description}}

[XML catalogs](https://www.oasis-open.org/standards#xmlcatalogsv1.1) are an [OASIS](https://www.oasis-open.org/) standard.

{:toc}
- TOC

<!--more-->

While XML catalogs provide a broader set of features that may be used as needed by developers and implementers for namespace resolution, the primary ways that NIEM uses XML Catalogs for releases are presented here.

A XML catalog has a root-level `catalog` element.  NIEM releases use `uri` elements under the `catalog` element to associate namespaces with file locations.  A subset of the XML Catalog file from the 4.0 release, [xml-catalog.xml](https://github.com/NIEM/NIEM-Releases/blob/niem-4.0/niem/xml-catalog.xml), is shown below.

{:.note}
- The `name` attribute holds the target namespace of the XML schema file
- The `uri` attribute holds the absolute or relative file location

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<!DOCTYPE catalog PUBLIC "-//OASIS//DTD Entity Resolution XML Catalog V1.0//EN" "http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd">
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
  <uri name="http://release.niem.gov/niem/appinfo/4.0/" uri="utility/appinfo/4.0/appinfo.xsd"/>
  <uri name="http://release.niem.gov/niem/conformanceTargets/3.0/" uri="utility/conformanceTargets/3.0/conformanceTargets.xsd"/>
  <uri name="http://release.niem.gov/niem/niem-core/4.0/" uri="niem-core/4.0/niem-core.xsd"/>
</catalog>
```

## Template

The template below may be used as a starting point for creating an XML catalog:

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<!DOCTYPE catalog PUBLIC "-//OASIS//DTD Entity Resolution XML Catalog V1.0//EN" "http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd">
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
  <uri name="" uri=""/>
</catalog>
```

## Using with NIEM CSV Code Lists

In addition to mapping target namespaces of XML schemas to file locations, XML catalogs can also be used to map a [CSV Code List](../code-lists/) file to a source identifier.

{:.example}
> The example catalog below maps:
> - the target namespace of the NIEM Core 4.0 schema to a relative file location.
> - the source identifier for GENC 3-7 3-character country codes to a relative file location for the CSV file.

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<!DOCTYPE catalog PUBLIC "-//OASIS//DTD Entity Resolution XML Catalog V1.0//EN" "http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd">
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
  <uri name="http://release.niem.gov/niem/niem-core/4.0/" uri="niem-core/4.0/niem-core.xsd"/>
  <uri name="http://api.nsgreg.nga.mil/geo-political/GENC/3/3-7" uri="codes/genc/geo-political/3-7/genc_geo-political_3-7_char3.csv"/>
</catalog>
```

## Tool support

XML Catalogs are supported by many common XML tools, such as Oxygen XML Editor, XMLSpy, and Xerces.  See the following for more information about XML catalogs.

{% include icon-list.html links=page.tools %}
