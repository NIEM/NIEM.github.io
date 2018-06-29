---
  title: Modeling Adapters
  short: Modeling
  ndr:
    rules:
    - number: 10-8
    - number: 10-9
    - number: 10-10
    - number: 10-11
    - number: 10-12
    - number: 10-13
    - number: 10-14
    - number: 10-15
    - number: 10-16
    - number: 10-70
    - number: 10-71
    - number: 10-72
    - number: 10-73
    - number: 10-74
    sections:
    - number: 10.2.3
---

- TOC
{:toc}

## Adapter flag

An adapter type must have attribute `appinfo:externalAdapterTypeIndicator` with a value of `true` in its schema declaration.

## Parent type

An adapter type must extend `structures:ObjectType`.

## External content

The sub-properties from an adapter type must be from external namespaces.

An adapter type simply wraps external content; it should not be used to build larger objects.  Other NIEM types may be created that combine regular content with elements that have adapter types.

## Extra documentation

NIEM requires that all namespaces and components be documented.  Because external standards might not have this documentation, or might not have this documentation in a consistent manner as NIEM, NIEM requires all usages of external namespaces and components to be documented.

## No extensions

Adapter types may not be extended by other types.  Each adapter type is meant to represent a single concept from an external namespace and stand alone.

## No external ID attributes

NIEM defines structures:id to enable references between components.  For consistency, the use of external attributes with an ID type is not allowed so as not to bypass this standard mechanism.

## IEPD exceptions

### External attributes

In an extension namespace, a non-adapter type is allowed to directly contain a reference to an external attribute as long as a definition is also provided with the reference.

## References

{% include ndr-references.html list=page.ndr %}
