---
  title: Augmentation Points
  icon: fa-share
  links:
    - url: /model/concepts/augmentation/point/modeling/
    - url: /model/concepts/augmentation/point/xml/
    - url: /model/concepts/augmentation/point/json/
  description: An augmentation point is a special substitution group to allow for later replacement by additional content from other namespaces.
---

- TOC
{:toc}

## Overview

{% include_relative intro/index.md %}

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
