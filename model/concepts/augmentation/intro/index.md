
Augmentations are NIEM's mechanism to add additional content to a type defined by another namespace.

Augmentations are done via element substitution (in XML).  Almost every type with complex content (sub-properties) in NIEM contains an augmentation point element.  These augmentation point elements serve solely as hooks, to be later replaced by additional content defined elsewhere.

{: .example}
> If a domain or an IEPD wanted to define additional properties about a person, it would create a new augmentation element and substitute it for `nc:PersonAugmentationPoint` (contained by `nc:PersonType`).  Any place nc:PersonType is used, the new augmentation may be used as well.

An augmentation may be either the new property to add (e.g., `my:PersonCustomCode`) or a container (e.g., `my:PersonAugmentation`) that has a set of sub-properties.

Adding additional content to a type is typically done using type extension, but NIEM abandoned that approach due to its limitations.  Type extension is limited to a single parent type; augmentations from several different namespaces can be used together because element substitution allows multiple occurrences.
