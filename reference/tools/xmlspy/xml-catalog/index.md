---
title: Using XML Catalogs with XMLSPy
short: XML Catalogs
icon: fa-code
description: Use XML catalog files in XMLSpy to specify or override schema file locations.
---

{{ page.description }}

Add custom file associations to the Altova `CustomCatalog.xml` file.  Add one or more `nextCatalog` elements in order for XMLSpy to use user-created catalog files.

Steps:

- Go to File > Open.
- Browse to the Altova/XMLSpy#### data directory
- Open `CustomCatalog.xml` (see below)
- Add a `nextCatalog` element that specifies the location of your catalog file (example below)
- Restart XMLSpy

```xml
<?xml version="1.0" encoding="UTF-8"?>
<catalog
  xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="urn:oasis:names:tc:entity:xmlns:xml:catalog Catalog.xsd">

  <nextCatalog catalog="https://example.com/xml-catalog.xml"</u>/>

</catalog>
```

For more information, please see Altova's [Catalogs in XMLSpy](https://www.altova.com/manual/xmlspy/spyenterprise/xsdtdandxsd_catalogs.html).
