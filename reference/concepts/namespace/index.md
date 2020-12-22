---
  title: Namespaces
  excerpt_separator: <!--more-->
  icon: fa-files-o
  description: A namespace is a collection of properties and types, managed by a common authoritative source.
  links:
    - url: /reference/concepts/namespace/modeling/
    - url: /reference/concepts/namespace/xml/
    - url: /reference/concepts/namespace/json/
---

Namespaces act like collections, logically grouping related properties and types together.  They also have additional characteristics, like a target namespace URI (a unique ID) and a namespace prefix (used as shorthand for the URI).

Components are often referred to by their qualified names, like `nc:Person`.  Using the namespace prefix in front of the component name helps to identify and distinguish it, especially in cases where the same name may appear in multiple namespaces.

{: .example}
>
>- The `Human Services` domain is a namespace.
>- In the 4.0 release, it uses the namespace prefix `hs` and defines components like property `hs:RequestedService` and type `hs:PlacementType`.

NIEM primarily creates namespaces in order to group components together based on governance.

- Core contains content typically too general to belong to any one domain, so it is managed by the NIEM Business Architecture Committee (NBAC), a governance body with cross-domain and community representation.
- Domain namespaces are managed by governance bodies in specific subject areas.
- Code namespaces typically reflect standards managed outside of NIEM.

A domain or IEPD may reuse any component from any NIEM release namespace.  Reuse is not limited to only Core and the most closely-related domains.

<!--more-->

### Categories

By convention, NIEM categorizes release namespaces.  This makes schemas easier to find in the release packages.  In the 4.0 release, the categories are the following:

| Namespace | Count | Description |
| --------- |:-----:| ----------- |
| Core      |  1 | Defines general properties and types (e.g., person, organization, activity) that do not belong to a specific subject area. Objects defined in Core leverage base XML objects defined in the Proxy and Structures schemas, and can be used as base objects for definitions in domain-specific schemas as well as extension schemas. |
| Domain    | 14 | Defines properties and types specific to a given subject area. |
| Code      | 36 | Provides NIEM-conformant representations of code sets that are typically defined and managed outside of NIEM. |
| Adapter   |  4 | Defines adapter components (the NIEM mechanism to reuse non-conformant external standards in a conformant way). |
| External  | 5* | Defines a namespace from an external standard that is not NIEM conformant. External standards are integrated into NIEM through the schemas in this namespace. |
| Proxy     |  1 | Defines complex types corresponding to standard XML Schema simple types. |
| Utility   |  4 | Provides components needed to support NIEM methodologies. |
| Support | 1 | Defines the underlying standardized structure for data objects in NIEM. Each of the data objects in the other namespaces reuse the basic data objects in Support:<br>`structures` contains NIEM base types to provide a set of generic types from which all types should derive.<br>`appinfo` contains definitions used in high-level data modeling and also for validation of NIEM-conformant instances. |

\* - External standards are sometimes made up of multiple namespaces.  The count above simply lists the number of external standards in NIEM, not the total number of namespaces they represent.

- See the [5.0 NIEM release](https://www.github.com/niem/niem-releases/tree/niem-5.0) on GitHub to review the full set of schemas.
- See the [training content pages](../../content) to get an overview of the content in these namespaces.

An IEPD is typically made up of subsetted versions of NIEM release namespaces, and one or more local namespaces that contain user-defined properties and types.  These user-defined namespaces are often referred to as **extension** namespaces.

{:.example}
>The Domain namespace category provides a mission-based and domain-specific layer of data objects that specialize base objects from the NIEM Core and Structures namespaces.
>![Domain Abstraction Layer](domainabstractionlayer.png "Domain Abstraction Layer")

### Representations

XML Schema has been the traditional representation for NIEM namespaces.  Efforts are currently underway to provide a full JSON schema representation to allow developers to choose the language that bests suits their needs.

### Persistence

NIEM release namespaces are persistent.  Once a release is published, its schemas will not be overwritten with future changes.  Changes go into new schemas.  This ensures that existing exchanges do not break when NIEM publishes a new release.

{: .note}
> Because release namespaces are persistent, exchanges do not have to be updated when a new release is published.  Older release schemas can continue to be used indefinitely.

### Versions

Namespaces are sometimes referred to at a high level (like "Core") when the release version is already known or doesn't matter in the given context. To be unambiguous, the version should also be included (e.g., "Core 4.0").

## Characteristics

A namespace defines content in the form of [properties](../property) and [types](../type).  Details about these components are provided in their own sections.

In addition, a namespace includes the following characteristics:

### URI

All NIEM-conformant namespaces define a target namespace.  This is an absolute URI that acts as the unique identifier for the namespace.

{: .example}
> The Core 4.0 target namespace URI is [`https://release.niem.gov/niem/niem-core/4.0/`](https://release.niem.gov/niem/niem-core/4.0/).

### Prefix

Namespace prefixes act as abbreviations for the full namespace URI.

{: .example}
> The namespace prefix for Core 4.0 is `nc`.

Target namespace URIs uniquely identify a namespace, but they are lengthy and can be awkward to use when referring to components (option 1, below).  Namespace prefixes allow use to use a much simpler syntax (option 2).

{: .box}
- option 1: `{https://release.niem.gov/niem/niem-core/4.0/}PersonType`
- option 2: `nc:PersonType`

The URIs are still necessary, however, for two reasons:

- Namespace prefixes are not unique.
- Namespace prefixes are locally assigned.

The NIEM 3.0 release uses `nc` as the namespace prefix for Core.  The 4.0 release does the same.  This is done on purpose since it requires less work to update IEPDs and documentation among other things.  The side effect, however, is that `nc` does not refer to any one specific version of Core.  Furthermore, an IEPD could choose to assign a completely different prefix to whichever version of Core it is using.

All of this leads to the following guidance:

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

### Language - [new in 5.0]

Each namespace must define the language in which its components are defined.  The language for NIEM release schemas is `en-US`.

### Conformance Targets

Each NIEM namespace must define one more conformance targets.  This explicitly identifies which rule sets should be applied for conformance validation.  A conformance target is identified by a URI.

For conformance to the NDR, the target will look like:

{: .box}
https://reference.niem.gov/niem/specification/naming-and-design-rules/VERSION/#TARGET

VERSION should be the version of the NDR:

- **3.0** - for schemas based on NDR 3.0 rules, like those in the NIEM 3.0, 3.1, and 3.2 releases.
- **4.0** - for schemas based on NDR 4.0 rules, like those in the NIEM 4.0 release.
- **5.0** - for schemas based on NDR 5.0 rules, like those in the NIEM 5.0 release.

TARGET should be a target defined by the NDR:

- **ReferenceSchemaDocument** - for schemas following the NDR's stricter rule set, like the NIEM release schemas.
- **ExtensionSchemaDocument** - for schemas following the NDR's less rigid rule set.

{: .example}
> A NIEM 3.2 schema using NDR extension rules would use the conformance target:
> https://reference.niem.gov/niem/specification/naming-and-design-rules**/3.0/#ExtensionSchemaDocument**

{: .example}
> A NIEM 4.0 schema using the NDR reference rules would use the conformance target:
> https://reference.niem.gov/niem/specification/naming-and-design-rules/**4.0/#ReferenceSchemaDocument**

{: .note}
> Release schemas must follow the reference rules, but locally-defined namespaces (like extension schemas) may choose which rule set to target.

See the section about the [Conformance Targets Attribute Specification](../../specifications/conformance-targets/) for more information.
