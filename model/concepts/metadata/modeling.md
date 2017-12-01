---
  title: Modeling Metadata
  training: modeling
  next: reference
---

- TOC
{:toc}

## Metadata Elements

### Name

A metadata element should end with the representation term `Metadata`.

For general metadata that may be applied to anything, the name `Metadata` is sufficient.  For more specific metadata, a more descriptive name should be used, like `PersonMetadata`.

### Type

A metadata element must have a metadata type.

## Metadata Types

### Name

A metadata type should end with the representation term `MetadataType`.

For general metadata that may be applied to anything, the name `MetadataType` is sufficient.  For more specific metadata, a more descriptive name should be used, like `PersonMetadataType`.

### Parent type

A metadata type must extend `structures:MetadataType`.

There is no need to extend other metadata types in the model.  Elements can link to multiple metadata elements.

### No augmentation points

Metadata types should not contain augmentation points.  Other namespaces can easily define their own metadata elements and types and create references to them in NIEM release elements.
