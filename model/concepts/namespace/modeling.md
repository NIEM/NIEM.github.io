---
  title: Modeling Namespaces
  training: modeling
  next: Property
---

- TOC
{:toc}

A namespace should be designed so that its components are consistent, may be used together, and may be updated at the same time.

## Target Namespace

A target namespace acts as the unique ID for a namespace.

### Unique

Each namespace must have its own target namespace.  This makes all schemas easy to reference individually and prevents one namespace from being defined across multiple files.

### Absolute URI

A target namespace must be an absolute URI.  Relative URIs are not allowed. An absolute URI, such as a URL or a URN, is universally identifiable.

Absolute URL example:

> http://release.niem.gov/niem/niem-core/4.0/
{:.valid}

Relative path URL:

> niem/niem-core/4.0/
{:.invalid}

Relative root URL :

> /niem/niem-core/4.0/
{:.invalid}

Relative protocol URL:

> //niem/niem-core/3.2/
{:.invalid}

### Pattern conventions

For NIEM release namespaces, the target namespace URI typically follows the format: 

> base / (category /) name / version /

- The base is `http://release.niem.gov/niem/`.
- The category is included only if there is more than one of that kind of namespace (e.g., the URI for Core does not have a category since there is only one core namespace).

Examples:

| Namespace | Target namespace URI |
| --------- | -------------------- |
| Core 3.2  | http://release.niem.gov/niem/niem-core/3.2/ |
| Core 4.0  | http://release.niem.gov/niem/niem-core/4.0/ |
| Immigration 4.0 domain | http://release.niem.gov/niem/domains/immigration/4.0/ |
| USPS 4.0 codes | http://release.niem.gov/niem/codes/usps_states/4.0/ |

User-defined namespaces can follow different conventions for their URIs.

### URI bases

For user-defined namespaces, a different URI base should be chosen - a domain that the user has authority over.

Replace `http://release.niem.gov/niem/` with a different domain.
