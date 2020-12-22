---
  title: Modeling Namespaces
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 9-82
    - number: 9-83
    - number: 9-84
    - number: 9-85
    - number: 10-68
    - number: 10-69
    - number: 10-70
    - number: 10-78
    - number: 11-48
    - number: 11-49
    - number: 11-50
    - number: 11-51
    - number: 11-52
    - number: 11-53
    - number: 11-54
    - number: 11-55
    - number: 12-1
    - number: 12-2
  - spec:
    version: "4.0"
    rules:
    - number: 9-82
    - number: 9-83
    - number: 9-84
    - number: 9-85
    - number: 10-67
    - number: 10-68
    - number: 10-69
    - number: 10-77
    - number: 11-46
    - number: 11-47
    - number: 11-48
    - number: 11-49
    - number: 11-50
    - number: 11-51
    - number: 11-52
    - number: 11-53
    - number: 12-1
    - number: 12-2
---

- TOC
{:toc}

A namespace should be designed so that its components are consistent, may be used together, and may be updated at the same time.

## Unique URI

A target namespace acts as the unique ID for a namespace.  Each namespace must have its own target namespace.  This makes all schemas easy to reference individually and prevents one namespace from being defined across multiple files.

## Absolute URI

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

## URI conventions

For NIEM release namespaces, the target namespace URI typically follows the format:

{: .box}
> `base / category / name / version /`

{: .example}
> `http://release.niem.gov/niem/domains/immigration/4.0/`<br>
> `-------------base-----------/--cat--/---name----/ver/`

{: .note}
> The category is included only if there are multiple schemas for that kind of namespace. <br> Since there is only one Core namespace, the URI for Core omits the category.

More examples:

| Namespace | Target namespace URI |
| --------- | -------------------- |
| Core 3.2  | http://release.niem.gov/niem/niem-core/3.2/ |
| Core 4.0  | http://release.niem.gov/niem/niem-core/4.0/ |
| Immigration 4.0 domain | http://release.niem.gov/niem/domains/immigration/4.0/ |
| USPS 4.0 codes | http://release.niem.gov/niem/codes/usps_states/4.0/ |

User-defined namespaces can follow different conventions for their URIs.

## URI bases

For user-defined namespaces, a different URI base should be chosen - preferably a domain that the user controls.

{: .box}
> Replace `http://release.niem.gov/niem/` with a different domain.

## Definition

A namespace-level definition is required.

## References

{% include ndr-references.html list=page.ndr %}
