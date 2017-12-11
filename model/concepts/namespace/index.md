---
  title: Namespaces
  icon: fa-files-o
  description: A collection of properties and types, managed by a common authoritative source
  links:
    - url: /model/concepts/namespace/modeling/
    - url: /model/concepts/namespace/xml/
    - url: /model/concepts/namespace/json/
  training: overview
  next: property
---

{{ page.description }}

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

{: .note}
> Because release namespaces are persistent, exchanges do not have to be updated when a new release is published.  Older release schemas can continue to be used indefinitely.

### Versions

Namespaces are sometimes referred to at a high level (like "Core") when the release version is already known or doesn't matter in the given context.

If necessary to be specific, the version should also be included (like "Core 4.0").

## Namespace characteristics

A namespace defines content in the form of [properties](../property) and [types](../type).  Details about these components are provided in their own sections.

In addition, a namespace includes the following characteristics:

### URI

All NIEM-conformant namespaces define a target namespace.  This is an absolute URI that acts as the unique identifier for the namespace.

{: .example}
> The Core 4.0 target namespace URI is **`http://release.niem.gov/niem/niem-core/4.0/`**.

### Prefix

Namespace prefixes act as abbreviations for the full namespace URI.

{: .example}
> The namespace prefix for Core 4.0 is **`nc`**.

Target namespace URIs uniquely identify a namespace, but they are lengthy and can be awkward to use when referring to components (option 1, below).  Namespace prefixes allow use to use a much simpler syntax (option 2).

{: .box}
- Option 1: `{http://release.niem.gov/niem/niem-core/4.0/}PersonType`
- Option 2: `nc:PersonType`

The URIs are still necessary, however, for two reasons:

1. Namespace prefixes are not unique.
2. Namespace prefixes are locally assigned.

The NIEM 3.0 release uses "nc" as the namespace prefix for Core.  The 4.0 release does the same.  This is done on purpose since it requires less work to update IEPDs and documentation, among other things.  The side effect, though, is that "nc" does not refer to any one specific version of Core.  Furthermore, an IEPD could choose to assign a completely different prefix to whichever version of Core it is using.

All of this means...

{: .box}
**For formal usage, a namespace prefix must be linked to the URI that it represents.**

This enables us to use the simpler syntax provided by the prefixes while maintaining the precision provided by the URIs.

### Version

A namespace version field is used to distinguish different drafts or updates of a namespace.  This version does not have to correspond with the release version or any versioning information in the URI.

{: .example}
> During the alpha 1 stage of the 4.0 development process, the Core namespace version was **alpha1**.

When the 4.0 NIEM schemas were under development, this version attribute was set to the corresponding pre-release stage - "alpha1", "beta1", "rc2", etc.

{: .example}
> In the final release, the Core 4.0 namespace has version **1**.

Version "1" represents that this is the first published version of the 4.0 Core namespace.  NIEM has not published follow-up versions (e.g., "2") to any namespace at the same URI, but it is an (unlikely) option for changes that do not affect schema validation or model semantics.

### Definition

Each namespace must have a definition that describes what it is.

### Conformance Targets

Each NIEM namespace must define one more conformance targets.  This explicitly identifies which rule sets should be applied for conformance validation.  A conformance target is identified by a URI.

For conformance to the NDR, the target will look like:

{: .box}
http://reference.niem.gov/niem/specification/naming-and-design-rules/VERSION/#TARGET

VERSION should be the version of the NDR:

- **3.0** - For schemas based on NDR 3.0 rules, like those in the NIEM 3.0, 3.1, and 3.2 releases.
- **4.0** - For schemas based on NDR 4.0 rules, like those in the NIEM 4.0 release.

TARGET should be a target defined by the NDR:

- **ReferenceSchemaDocument** - For schemas following the NDR's stricter rule set, like the NIEM release schemas.
- **ExtensionSchemaDocument** - For schemas following the NDR's less rigid rule set.

{: .example}
> A NIEM 3.2 schema using NDR extension rules would use the conformance target:
> http://reference.niem.gov/niem/specification/naming-and-design-rules**/3.0/#ExtensionSchemaDocument**

{: .example}
> A NIEM 4.0 schema using the NDR reference rules would use the conformance target:
> http://reference.niem.gov/niem/specification/naming-and-design-rules/**4.0/#ReferenceSchemaDocument**

{: .note}
> Release schemas must follow the reference rules, but locally-defined namespaces (like extension schemas) may choose which rule set to target.
