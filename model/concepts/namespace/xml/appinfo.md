---
  title: Appinfo
---


### Appinfo

The appinfo namespace is used to support machine-readable documentation.

TODO - import vs xsi:schemaLocation

Because it is used only within annotation blocks, it is not necessary to import the namespace.  In addition to the namespace prefix declaration, `xsi:schemaLocation` is used to link the URI of this namespace to a specific file path:

```xml
<xs:schema
  xmlns:PREFIX="URI"`
  xsi:schemaLocation="URI PATH">
  ...
</xs:schema>
```

"xsi" stands for XML Schema Instance.

The `xsi:schemaLocation` attribute may contain multiple URI-Path pairs:

`xsi:schemaLocation="URI1 PATH1 URI2 PATH2"`

Example:

```xml
<xs:schema
  xsi:schemaLocation="http://release.niem.gov/niem/appinfo/4.0/ ../niem/utility/appinfo/4.0/appinfo.xsd

  xmlns:appinfo="http://release.niem.gov/niem/appinfo/4.0/">
  ...
</xs:schema>
```
