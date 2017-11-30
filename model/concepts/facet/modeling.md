---
  title: Modeling Facets
  training: modeling
  next: Adapter
---

Facet declarations follow a similar pattern:

- A simple type is declared with a name, definition, base type, and one or more facet declarations.
- Each facet declaration specifies a facet kind, a value, and a definition.

## Simple Type

### Name

- The name of a type with enumerations must end with "CodeSimpleType".
- All other faceted types must have names that end with with "SimpleType".

### Base type

- The base type is the type to be constrained by the facets.  This is typically a string or numeric type.

## Facet

### Kind

- The kind of facet must be chosen from a valid set of values.  See the [full list](.#kinds-of-facets).
- Most XML Schema facets have translations for JSON Schema.

## Notes

Keep in mind that overly-restrictive facets limit reusability, particularly in NIEM release schemas.  Facets that restrict a string to the number of characters allowed in a corresponding database field, for example, may limit other users with different systems.
