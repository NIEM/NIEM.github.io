---
  title: Augmentation Points
  icon: fa-share
  links:
    - url: /reference/concepts/augmentation/point/modeling/
    - url: /reference/concepts/augmentation/point/xml/
    - url: /reference/concepts/augmentation/point/json/
  description: An augmentation point is a special substitution group to allow for later replacement by additional content from other namespaces.
---

An augmentation point is a special substitution group created to allow for later replacement by additional content from other namespaces.

Every NIEM release type that contains sub-elements also contains an augmentation point element.  These elements are abstract, have no type, and cannot appear in any instance.  They serve strictly as substitution points, to be replaced by other content - the augmentation elements.

The name of each augmentation point element corresponds to the type in which it appears, with the representation term `"Type"` being replaced by `"AugmentationPoint"`.

<!--more-->

![Basic augmentation](images/aug-point-basic.png)

## Examples

Each of the types in the table of examples below contain the augmentation point element listed next to it.  The names and definitions follow a regular pattern.

| Type | Augmentation Point Element | Definition of Augmentation Point Element |
| ---- | -------------------------- | ---------------------------------------- |
| nc:PersonType | nc:PersonAugmentationPoint | An augmentation point for PersonType |
| nc:ContactInformationType | nc:ContactInformationAugmentationPoint | An augmentation point for ContactInformationType |
| em:AccessType | em:AccessAugmentationPoint | An augmentation point for AccessType |
| it:AgentType | it:AgentAugmentationPoint | An augmentation point for AgentType |

Each of these augmentation point elements may be replaced in an instance with other content.
