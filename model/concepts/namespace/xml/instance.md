---
  title: XML instance
---

## XML instance template

```xml
<?xml version="1.0" encoding="UTF-8"?>
<PREFIX:ROOT_ELEMENT_NAME
  xmlns:PREFIX="URI"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="URI PATH">

  <!-- instance content -->

</PREFIX:ROOT_ELEMENT_NAME>
```

Example:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<ext:SampleReport
  xmlns:ext="http://example.com/sample/extension/1.1/"
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://example.com/sample/extension/1.1/ ../xsd/extension/TemplateExtension.xsd">
  <nc:DateTime>2006-05-04T18:13:51.0Z</nc:DateTime>
</ext:SampleReport>
```

Namespace prefix declarations are made for the schema that the given instance is based on.  The URI of that schema must be link to a file path via `xsi:schemaLocation`, or alternatively, a XML catalog file must be used to specify this binding.

TODO: XML Catalog example

