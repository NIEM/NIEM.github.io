---
  title: Modeling Augmentation Elements
  short: Modeling
  ndr:
  - spec:
    version: "5.0"
    rules:
    - number: 10-32
    - number: 10-33
    - number: 10-34
    - number: 10-35
    - number: 10-36
    - number: 10-37
    - number: 11-32
    - number: 11-44
    sections:
    - number: 10.4.4
    - number: 10.4.5
  - spec:
    version: "4.0"
    rules:
    - number: 10-32
    - number: 10-33
    - number: 10-34
    - number: 10-35
    - number: 10-36
    - number: 10-37
    - number: 11-30
    - number: 11-42
    sections:
    - number: 10.4.4
    - number: 10.4.5
---

- TOC
{:toc}

![Augmentation container element](../images/aug-elt-container.png)

## Name

The element name must correspond with the augmented type name, with the `"Type"` representation term being replaced by `"Augmentation"`.

{: .example}
> The Immigration domain augmentation container element for `nc:PersonType` is `"im:PersonAugmentation"`.

## Substitution group

The element must be declared to be substitutable for an augmentation point element.

{: .example}
> `im:PersonAugmentation` (augmentation element) is substitutable for `nc:PersonAugmentationPoint` (augmentation point).

## Augmentation Type

An augmentation container element must have a corresponding augmentation type.

![Augmentation container type](../images/aug-type-container.png)

{: .example}
> Augmentation element `im:PersonAugmentation` has augmentation type `im:PersonAugmentationType`.

### Name

The type name must correspond with the augmented container element name, with the addition of the `"Type"` representation term.

{: .example}
> Augmentation element `im:PersonAugmentation` has an augmentation type with the name `im:PersonAugmentationType`.

### Parent type

An augmentation type must extend `structures:AugmentationType`.

{: .example}
> Augmentation type `im:PersonAugmentationType` extends type `structures:AugmentationType`.

### No further augmentation points

Each augmentation element should replace the augmentation point of the original type.  Augmentations of augmentations are not allowed.

{: .example}
- Augmentation type `im:PersonAugmentationType` should not contain its own augmentation point element like `im:PersonAugmentationPoint`.
- Any substitutions from other namespaces should be made directly on the original augmentation point element for `nc:PersonType` - `nc:PersonAugmentationPoint`.

## References

{% include ndr-references.html list=page.ndr %}
