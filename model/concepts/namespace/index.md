---
  title: Namespaces
---

A **namespace** is {% include_relative def.md %}

- TOC
{:toc}

## Overview

Namespaces define properties and types.  They are represented by schemas, which are structured in a way to maximize reuse and facilitate governance and version management.  Every NIEM release and IEPD is primarily made up of these schema-defined namespaces.

### Categories

The 4.0 NIEM release has the following namespaces:

| Namespace | Count | Description |
| --------- |:---------:| ----------- |
| Core      |  1 | Defines general properties and types that do not belong to a specific subject area |
| Domain    | 14 | Defines properties and types specific to a given subject area |
| Code      | 36 | Provides NIEM-conformant representations of code sets that are typically defined and managed outside of NIEM |
| Adapter   |  4 | Defines adapter components (the NIEM mechanism to reuse non-conformant external standards in a conformant way)  |
| External  | 5* | A namespace from an external standard that is not NIEM conformant |
| Proxy     |  1 | Defines complex types corresponding to standard XML Schema simple types  |
| Utility   |  4 | Provides components needed to support NIEM methodologies  |

\* - External standards are sometimes made up of multiple namespaces.  The count above simply lists the number of external standards, not the total number of namespaces they represent.

An IEPD is typically made up of subsetted versions of NIEM release namespaces, plus one or more local namespace containing user-defined properties and types.

### Schema representations

XML Schema has been the most common representation for NIEM namespaces.  Efforts are currently underway to provide a full JSON schema representation as well, allowing developers to choose the language that bests suits their needs.

### Governance

Governance is the key factor that determines where properties and types should belong:

- Components that have no clear authoritative source are typically added to the Core namespace, which is managed by a committee made up of domain representatives and NIEM community members.
- Domain namespaces are made up of components that are best managed by their subject matter experts.
- Code namespaces tend to be NIEM-conformant representations of code standards governed outside of NIEM.

Components from any namespace in a NIEM release may be reused in an IEPD. There is no need to limit reuse to just Core and the domain that most closely aligns to the subject area of the exchange.

### Benefits

The use of namespaces to organize components by authoritative source provides several benefits:

**Namespaces distinguish components that share the same name**

The Justice and MilOps domains may both define a Target element, but with different meanings.  Because these elements live in separate namespaces, there are no naming conflicts - j:Target and mo:Target are distinct and can coexist without issue.

**Simplified model management**

All components in a namespace are governed by a designated authoritative source.  This is a clear way to delineate control.

**Modularity**

Each individual namespace may be updated outside the regular release cycle as needed, according to the needs and timeline of the authoritative source.  Coordination with other entities is not required.

### Versioning

A key principle that influences the design of NIEM is namespace persistence.  Published namespaces always remain available, even after newer versions are released.  This ensures that existing exchanges do not break when NIEM publishes a new release.  An exchange can be updated to use a later release if and when the exchange developer chooses to do so - the older schemas will remain available and can continue to be used indefinitely.

Namespaces are sometimes referred to at a high level (as in "the Core namespace") when the version is already known or is not important in the given context.  To refer to a namespace specifically, the version should also be included (e.g., "the Core 4.0 namespace").

## Namespace characteristics

### Target namespace URI

All NIEM-conformant namespaces define a target namespace.  This is an absolute URI that acts as the unique identifier for the namespace.

For NIEM release namespaces, the target namespace URI typically follows the format:

base / (category /) name / version /

The base is https://release.niem.gov/niem/.  The category is included only if there is more than one of that kind of namespace (e.g., the URI for Core does not have a category since there is only one core namespace).

Examples:

| Namespace | Target namespace URI |
| --------- | -------------------- |
| Core 3.2 | http://release.niem.gov/niem/niem-core/3.2/ |
| Core 4.0 | http://release.niem.gov/niem/niem-core/4.0/ |
| Human Services 4.0 domain | http://release.niem.gov/niem/domains/humanServices/4.0/ |
| Immigration 4.0 domain | http://release.niem.gov/niem/domains/immigration/4.0/ |
| ISO 3166 4.0 codes | http://release.niem.gov/niem/codes/iso_3166-1/4.0/ |
| USPS 4.0 codes | http://release.niem.gov/niem/codes/usps_states/4.0/ |

Note that for user-defined namespaces, this URI pattern does not have to be followed and a different base should be chosen.

### Namespace Prefix

Target namespace URIs uniquely identify a namespace, but they are lengthy and can be awkward to use when referring to component names:

`{http://release.niem.gov/niem/niem-core/4.0/}PersonType`

For simplicity and convenience, NIEM namespace URIs are assigned a namespace prefix that acts as an abbreviation.  This prefix is used together with a property or type name to form a qualified name (or QName) with the format `prefix:name`:

`nc:PersonType`

By itself, a namespace prefix isn't enough to identify a namespace.  NIEM uses "nc" by convention to refer to Core, but this doesn't indicate the specific version.  It's also possible a local schema may assign this prefix to a different namespace.  Make sure to check the namespace prefix declarations to see which URIs the prefixes represent.

### Version

A namespace version field is used to distinguish different drafts or updates of a namespace.

This version does not have to correspond with the release version or any versioning information in the URI.  When the 4.0 NIEM schemas were under development, this version attribute was set to the pre-release stage, e.g., "alpha1", "beta1", "rc1".  When the 4.0 schemas were ready to be published, the version attribute was changed to "1" (the first published version of the given namespace).

### Definition

Each namespace must have a definition.
