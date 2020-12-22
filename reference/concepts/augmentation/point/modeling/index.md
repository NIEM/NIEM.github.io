---
  title: Modeling Augmentation Points
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 10-25
    - number: 10-26
    - number: 10-27
    - number: 10-28
    - number: 10-29
    - number: 10-30
    - number: 10-31
    - number: 11-31
    sections:
    - number: 10.4.2
    - number: 10.4.3
  - spec:
    version: "4.0"
    rules:
    - number: 10-25
    - number: 10-26
    - number: 10-27
    - number: 10-28
    - number: 10-29
    - number: 10-30
    - number: 10-31
    - number: 11-29
    sections:
    - number: 10.4.2
    - number: 10.4.3
---

- TOC
{:toc}

![Augmentation point element](../images/aug-point.png)

## Name

The augmentation point element name must correspond with the type name it appears in, with the `"Type"` representation term being replaced by `"AugmentationPoint"`.

{: .example}
The name of the augmentation point element for `nc:PersonType` is `"nc:PersonAugmentationPoint"`.

## Abstract

An augmentation point element has no content of its own and is merely a construct to support additional content from other namespaces.  Making this element abstract ensures that it must be omitted or replaced in an instance by another element.

## No type

An augmentation point element does not have a type.  This ensures that there will not be a type conflict when it is later substituted by one or more augmentation elements.

## Sub-element position

The augmentation point element must appear as the final sub-element in its type.  This makes it easy to find and makes sure the type's original content appears in instances before the augmentations do.

## IEPD exceptions

Augmentation point elements are required in NIEM release schemas, but not for IEPDs.

NIEM releases are required to define augmentation points in order to make it as easy as possible for IEPDs to later add additional content.  IEPDs may, but are not required to, provide this same level of support.

## References

{% include ndr-references.html list=page.ndr %}
