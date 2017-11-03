---
  title: Modeling Facets
  tutorial: modeling
---

## Overview

Facet declarations follow a similar pattern:

- A simple type is declared with a name, definition, base type, and one or more facet declarations.
- Each facet declaration specifies a facet kind, a value, and a definition.

## Simple Type

### Name

The name of a type with enumerations must end with "CodeSimpleType".  All other faceted types must have names that end with with "SimpleType".

### Base type

The base type is the type to be constrained by the facets.  This is typically a string or numeric type.

## Facet

### Kind

The kind of facet must be chosen from a valid set of values.  See the [full list](.#kinds-of-facets).

TBD - Guidance for facets in JSON Schema is only currently available for enumerations.
