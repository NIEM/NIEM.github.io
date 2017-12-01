---
  title: Namespaces
  training: overview
  next: property
---

A **namespace** is {% include_relative def.md %}

- TOC
{:toc}

## Overview

{% include_relative intro.md %}

### Categories

By convention, NIEM categorizes release namespaces.  This makes schemas easier to find in the release packages.  In the 4.0 release, the categories are:

| Namespace | Count | Description |
| --------- |:-----:| ----------- |
| Core      |  1 | Defines general properties and types that do not belong to a specific subject area |
| Domain    | 14 | Defines properties and types specific to a given subject area |
| Code      | 36 | Provides NIEM-conformant representations of code sets that are typically defined and managed outside of NIEM |
| Adapter   |  4 | Defines adapter components (the NIEM mechanism to reuse non-conformant external standards in a conformant way)  |
| External  | 5* | A namespace from an external standard that is not NIEM conformant |
| Proxy     |  1 | Defines complex types corresponding to standard XML Schema simple types  |
| Utility   |  4 | Provides components needed to support NIEM methodologies  |

\* - External standards are sometimes made up of multiple namespaces.  The count above simply lists the number of external standards in NIEM, not the total number of namespaces they represent.

- See the [4.0 NIEM release](https://www.github.com/niem/niem-releases/tree/niem-4.0) on GitHub to review the full set of schemas.
- See the [training content pages](../../content) to get an overview of the content in these namespaces.

An IEPD is typically made up of subsetted versions of NIEM release namespaces, plus one or more local namespaces containing user-defined properties and types.  These user-defined namespaces are often referred to as **extension** namespaces.

### Representations

XML Schema has been the traditional representation for NIEM namespaces.  Efforts are currently underway to provide a full JSON schema representation as well, allowing developers to choose the language that bests suits their needs.

### Persistence

NIEM release namespaces are persistent.  Once a release is published, its schemas will not be overwritten with future changes.  Changes go into new schemas.  This ensures that existing exchanges do not break when NIEM publishes a new release.

An exchange can be updated to use a subsequent release if and when the exchange developer chooses to do so.  Older release schemas can continue to be used indefinitely.  In addition, an IEPD is packaged with its own local, customized subset of its NIEM release, avoiding any potential issues about schema availability and persistence.

### Versions

Namespaces are sometimes referred to at a high level (as in "the Core namespace") when the version is already known or doesn't matter in the given context.

To refer to a specific namespace, the version should also be included (e.g., "the Core 4.0 namespace").

## Namespace characteristics

A namespace defines content in the form of [properties](../property) and [types](../type).  Details about these components are provided in their own sections.

In addition, a namespace includes the following characteristics:

### URI

All NIEM-conformant namespaces define a target namespace.  This is an absolute URI that acts as the unique identifier for the namespace.

### Prefix

Target namespace URIs uniquely identify a namespace, but they are lengthy and can be awkward to use when referring to component names:

> `{http://release.niem.gov/niem/niem-core/4.0/}PersonType`

For simplicity and convenience, NIEM namespace URIs are assigned a namespace prefix that acts as an abbreviation.  This prefix is used together with a property or type name to form a qualified name (or QName) with the format `prefix:name`.

> `nc:PersonType`

By itself, a namespace prefix isn't enough to identify a specific namespace.  NIEM uses "nc" by convention to refer to Core, but this doesn't indicate which version.

> In the NIEM 3.0 release, namespace prefix "nc" is assigned to the Core namespace. <br> In the NIEM 4.0 release, the same prefix "nc" is assigned to the Core 4.0 namespace.

Reusing the same prefixes across multiple releases simplifies a lot of things (IEPD development and updates, documentation, etc.).  Make sure to check the namespace prefix declarations to see which URIs the prefixes represent.

### Version

A namespace version field is used to distinguish different drafts or updates of a namespace.  This version does not have to correspond with the release version or any versioning information in the URI.

When the 4.0 NIEM schemas were under development, this version attribute was set to the pre-release stage, e.g., "alpha1", "beta1", "rc1".

When the 4.0 schemas were ready to be published, the version attribute was changed to "1" (the first published version of the given namespace).  NIEM has not published follow-up versions (e.g., "2") to the same URI, but it is an (unlikely) option for changes that do not affect schema validation or model semantics.

### Definition

Each namespace must have a definition that describes what it is.

### Conformance Targets

Each NIEM namespace must define one more conformance targets.  This explicitly identifies which rule sets should be applied for conformance validation.  A conformance target is identified by a URI.

For conformance to the NDR, the target will look like:

`http://reference.niem.gov/niem/specification/naming-and-design-rules/VERSION/#TARGET`

VERSION should be the version of the NDR:

- NIEM 3.0, 3.1, and 3.2 release schemas are based on NDR 3.0 rules.
- NIEM 4.0 release schemas are based on NDR 4.0 rules.

TARGET should be a target defined by the NDR:

- ReferenceSchemaDocument (stricter rules, required for release schemas)
- ExtensionSchemaDocument (looser rules)

A NIEM 3.2 schema using NDR extension rules would use the conformance target:

> `http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ExtensionSchemaDocument`

A NIEM 4.0 schema using the NDR reference rules would use the conformance target:

> `http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument`
