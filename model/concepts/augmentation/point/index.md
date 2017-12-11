---
  title: Augmentation Points
  icon: fa-share
  links:
    - url: /model/concepts/augmentation/point/modeling/
    - url: /model/concepts/augmentation/point/xml/
    - url: /model/concepts/augmentation/point/json/
  training: overview
  next: Augmentation Element
  nextlink: ../element
---

An **augmentation point** is {% include_relative def.md %}.

- TOC
{:toc}

## Overview

![Basic augmentation](images/aug-point-basic.png)

{% include_relative intro.md %}

## Examples

Each of the types in the table of examples below contain the augmentation point element listed next to it.

| Type | Augmentation Point Element | Definition of Augmentation Point Element |
| ---- | -------------------------- | ---------------------------------------- |
| nc:PersonType | nc:PersonAugmentationPoint | An augmentation point for PersonType |
| nc:ContactInformationType | nc:ContactInformationAugmentationPoint | An augmentation point for ContactInformationType |
| em:AccessType | em:AccessAugmentationPoint | An augmentation point for AccessType |
| it:AgentType | it:AgentAugmentationPoint | An augmentation point for AgentType |

Each of these augmentation point elements may be replaced in an instance with other content.
