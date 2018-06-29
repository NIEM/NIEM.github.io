---
  title: Metadata
  icon: fa-info
  description: Metadata is a set of data that describes characteristics of other data.
  links:
    - url: /reference/concepts/metadata/modeling/
    - url: /reference/concepts/metadata/xml/
    - url: /reference/concepts/metadata/json/
---

Metadata is data about data.  It might describe such things as who provided the content, and when it was last updated.

Because this is data that could potentially be provided about any and every property in the model (e.g., when the person name was last updated, when the address was last updated, when the vehicle tag was last updated, and so on), metadata should be defined separately from other types.  This avoids duplication and clutter across the model.

Almost all properties in NIEM (those with complex types) have the ability to reference one or more metadata properties.

{: .example}
> Core defines metadata element `nc:Metadata`, which contains properties like `nc:ReportedDate` and `nc:SourceText`.  Any element, like `nc:Person`, `j:PersonEmploymentIndicator`, or an element defined in an IEPD, may use this to provide metadata.

<!--more-->

## Using metadata

Metadata should not be embedded in the primary content.  All elements in NIEM inherit attribute `structures:metadata`.  This attribute can carry a list of ID references, meaning each element can link to one or more metadata elements, as applicable.

Elements and metadata have a many-to-many relationship.

1. One element can link to multiple metadata elements.  This means that metadata elements from Core, one or more domains, and/or an extension namespace may all be used, if needed.
2. One metadata element can be referenced by many elements.  This means that if there are multiple elements that share the same metadata in an instance (for example, if they all come from the same database record that will have the same update date), then they can all link to the same metadata value(s) rather than duplicating the information.

## Metadata is a set

A metadata element in NIEM has a metadata type that bundles up one or more informational properties, such as `nc:EffectiveDate` and `nc:LastUpdatedDate`.  This simplifies the usage - an element references a metadata bundle once, rather than each of its contents individually.

NIEM's rules and guidance about metadata applies to those elements and types that act as the bundles, like element `nc:Metadata` and type `nc:MetadataType`.  The informational properties, like `nc:EffectiveDate`, have no special rules and are created and treated like any other property in the model.

## Where to reference metadata

Metadata can be referenced from any element.  It may not be necessary though to repeat the same references on each element in an instance.  Metadata on a higher level element, like `nc:Person`, may be considered to carry through to children elements, such as `nc:PersonBirthDate`, unless specifically overridden.
