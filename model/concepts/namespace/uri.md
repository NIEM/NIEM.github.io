---
  title: Namespace URIs
---

- TOC
{:toc}

## Overview

All NIEM-conformant namespaces define a target namespace.  This is an absolute URI that acts as the unique identifier for the namespace.

For NIEM release namespaces, the target namespace URI typically follows the format:

base / (category /) name / version /

The base is http://release.niem.gov/niem/.  The category is included only if there is more than one of that kind of namespace (e.g., the URI for Core does not have a category since there is only one core namespace).

Examples:

| Namespace | Target namespace URI |
| --------- | -------------------- |
| Core 3.2 | http://release.niem.gov/niem/niem-core/3.2/ |
| Core 4.0 | http://release.niem.gov/niem/niem-core/4.0/ |
| Human Services 4.0 domain | http://release.niem.gov/niem/domains/humanServices/4.0/ |
| USPS 4.0 codes | http://release.niem.gov/niem/codes/usps_states/4.0/ |

Developers may choose a different format for local namespace URIs.

Note that the base `https://release.niem.gov/niem` is for NIEM release schemas.  Local schemas should have a URI base appropriate for them.

## XML Schema

The target namespace URI is declared as a schema-level attribute:

`targetNamespace="URI"`

Core 4.0 example:

```xml
<xs:schema targetNamespace="http://release.niem.gov/niem/niem-core/4.0/">
  ...
</xs:schema>
```

## JSON Schema

The target namespace URI is declared as a key-value pair:

`"$id" : "URI"`

Core 4.0 example:

```json
{
  "$id" : "http://release.niem.gov/niem/niem-core/4.0/"
}
```
