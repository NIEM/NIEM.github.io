---
  title: Modeling Attributes
  short: Modeling
---

- TOC
{:toc}

Attributes share the same modeling rules and guidelines as regular properties, with the following exceptions:

## Name case

NIEM attribute names must appear in lower camel case (lowerCamelCase).  The first letter must be in lower case.

## Simple type

Attributes must have a simple type (value only).

## Prohibited types

An attribute may not be assigned any of the following types:

- xs:ID
- xs:IDREF
- xs:IDREFS
- xs:ENTITY
- xs:ENTITIES
- xs:anySimpleType

This prevents attributes from being used for referencing other data (NIEM already supports this with `structures:id`, `structures:ref`, and `structures:uri`), representing data that is not in an XML format, and wildcards.

## No defaults values

An attribute may not have a default value assigned.

A validating parser may take an instance that does not have such an attribute present and construct the attribute with the default value in its place.  A non-validating parser will not.  This rule was established to make sure an instance represents the exact same data, no matter which tool or parser is used.

## No optional fixed values

An optional attribute may not have a fixed value.

Similar to the rule about default values, a validating parser may take an instance in which the optional attribute does not appear and construct an attribute with the fixed value in its place.  A non-validating parser will not.  Again, an instance must represent the exact same data, not matter which tool or parser is used.

This rule does not apply to required fixed attributes.  That is because a required attribute must appear in the message, and it must have the fixed value.  In this case, there is nothing for a validating parser to construct.
