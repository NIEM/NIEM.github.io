---
  title: Extension Schema Document Usage
  short: Usage
  icon: fa-sitemap
  description: Extension Schema Document Usage
---

Extension Schema Documents (EXTs) contain components that use or are derived from the components in Reference Schema Documents (REFs) or other EXTs. EXTs are intended to express additional vocabulary above and beyond the vocabulary available from REFs. This page explains how EXTs are integrated into a NIEM conformant document or package.

## Specifying an Extension Schema Document

EXTs are most easily specified through an XML Catalog. Like REFs, they follow a similar format
for specification through an XML Catalog. Specifying an EXT in an XML Catalog document is as follows:

- You specify the absolute path of the EXT as the `name` attribute of the `uri` element of the XML Catalog (generally this is the URL of the schema document)
- You specify the relative path of the EXT as the `uri` attribute of the `uri` element of the XML Catalog (generally this is a unix style path to a file)
- The `name` attribute specified in the XML Catalog of some `uri` element must exactly match the `targetNamespace` attribute of the named EXT

### XML Catalog Example for EXT

```xml
<?xml version="1.0" encoding="US-ASCII"?>
<!DOCTYPE catalog PUBLIC "-//OASIS//DTD Entity Resolution XML Catalog V1.0//EN" "http://www.oasis-open.org/committees/entity/release/1.0/catalog.dtd">
<catalog prefer="public" xmlns="urn:oasis:names:tc:entity:xmlns:xml:catalog">
  <uri name="http://target.path.to.extension.namespace/" uri="extension/name_of_niem_extension.xsd"/>
</catalog>
```
