---
  title: Modeling Adapters
  short: Modeling
  training: modeling
  next: association
---

- TOC
{:toc}

## Adapter types

### Attribute appinfo:externalAdapterTypeIndicator

An adapter type must have attribute `appinfo:externalAdapterTypeIndicator` with a value of `true` in its schema declaration.

### Parent type

An adapter type must extend `structures:ObjectType`.

### Sub-properties must be from external namespaces

The sub-properties from an adapter type must be from external namespaces.

An adapter type simply wraps external content; it should not be used to build larger objects.  Other NIEM types may be created that combine regular content with adapter content.

### Sub-properties usages must be documented

Any reference to an external property from an adapter type must also include documentation for that property.

### Adapter types may not be extended

Similar to the requirement above, adapter types may not be extended by other types.  Each adapter type is meant to represent a single concept from an external namespace and stand alone.

## External namespaces

### Definition required

Because an external namespace may or may not have its own definition, a definition for it is required to be provided by the NIEM namespace that references content from it in an adapter type.

## External properties

### External attributes with an ID type are not permitted

NIEM defines structures:id to enable references between components.  For consistency, the use of external attributes is not allowed to bypass this standard mechanism.

## IEPD exceptions

### External attributes allowed outside of adapter types

In an extension namespace, a non-adapter type is allowed to directly contain a reference to an external attribute as long as a definition is also provided with the reference.
