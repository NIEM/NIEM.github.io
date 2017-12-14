---
  title: Modeling Abstract Elements
  short: Modeling
---

- TOC
{:toc}

## Name

The name of an abstract element must end with **"Abstract"**.

See the [Representation Pattern](../../../representation) section for cases when the representation term "Representation" should be used instead.

## Definition

An abstract element should begin with the standard opening phrase: **"A data concept for "**.

## No type

In NIEM, an abstract element should most likely not have a type.

In XML Schema, abstract elements may or may not be assigned types.  An abstract element that has no type can be replaced by any element.  An abstract element with a type can only be replaced by an element with the same type, or with a type that is derived from that type.  This prevents conflicts - an element that is specifically supposed to be a person element should not be replaced by a location element.

If you want to create an abstract element that may be replaced by divergent types (like free text and code sets types, or like PersonType and OrganizationType), the abstract element must not have a type.
