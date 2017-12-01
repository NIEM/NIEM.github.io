---
  title: Metadata
  training: overview
  next: reference
---

**Metadata** is {% include_relative def.md %}

- TOC
{:toc}

## Overview

{% include_relative intro.md %}

## Using metadata

As stated above, metadata should not be embedded in the primary content.  All elements in NIEM inherit attribute `structures:metadata`.  This attribute can carry a list of ID references, meaning each element can link to one or more metadata elements, as applicable.

Elements and metadata have a many-to-many relationship.  One element can link to multiple metadata elements if each apply.  One metadata element can be referenced by many elements if each apply.

## Metadata represents a set of elements

A metadata element in NIEM has a metadata type that bundles up one or more informational properties, such as `nc:EffectiveDate` and `nc:LastUpdatedDate`.  This simplifies the usage - an element references a metadata bundle once, rather than each of its contents individually.

NIEM's rules and guidance about metadata applies to those elements and types that act as the bundles, like element `nc:Metadata` and type `nc:MetadataType`.  The informational properties, like `nc:EffectiveDate`, have no special rules and are created and treated like any other property in the model.

## Where to reference metadata

Metadata can be referenced from any element.  It is not necessary though to repeat the same references on each element in an instance.  Metadata on a higher level element, like `nc:Person`, may be considered to carry through to children elements, such as `nc:PersonBirthDate`, unless specifically overridden.

## Applicability

A metadata element may be able to be used by any NIEM element or type, or it may be constrained to only certain ones.

If a metadata element is constrained to a given type, then any element of that type or of a type that extends from that type may reference it.  For example, a metadata element constrained to type `structures:AssociationType` may be used by any association element.

Use the attributes `appinfo:appliesToElements` and  `appinfo:appliesToTypes` to limit the metadata element to one or more elements and/or types.