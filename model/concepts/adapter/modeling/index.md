---
  title: Modeling Adapters
  short: Modeling
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
