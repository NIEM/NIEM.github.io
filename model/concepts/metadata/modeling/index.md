---
  title: Modeling Metadata
  short: Modeling
---

- TOC
{:toc}

## Metadata Elements

### Name

A metadata element should end with the representation term `Metadata`.

For general metadata that may be applied to anything, the name `Metadata` is sufficient.  For more specific metadata, a more descriptive name should be used, like `PersonMetadata`.

### Type

A metadata element must have a metadata type.

## Applicability

A metadata element may be able to be used by any NIEM element or type, or it may be constrained to only certain ones.

If a metadata element is constrained to a given type, then any element of that type or of a type that extends from that type may reference it.  For example, a metadata element constrained to type `structures:AssociationType` may be used by any association element.

Use the attributes `appinfo:appliesToElements` and  `appinfo:appliesToTypes` to limit the metadata element to one or more elements and/or types.

## Metadata Types

### Name

A metadata type should end with the representation term `MetadataType`.

For general metadata that may be applied to anything, the name `MetadataType` is sufficient.  For more specific metadata, a more descriptive name should be used, like `PersonMetadataType`.

### Parent type

A metadata type must extend `structures:MetadataType`.

There is no need to extend other metadata types in the model.  Elements can link to multiple metadata elements.

### No augmentation points

Metadata types should not contain augmentation points.  Other namespaces can define their own metadata elements and types and create references to them in NIEM release elements.
