
A simple type is a structure that represents a simple value only.

Simple types are data structures like strings, numbers, and booleans.  They can also be customized with [facets](./../../facet) so that only a certain range of numbers, or a certain set of codes, for example, are allowed.

Simple types can be used in two ways in the model:

1. As the type of [attributes](../../../property/attribute), which by definition cannot have a complex type.
1. As the base of corresponding [complex types with simple content (CSCs)](../../csc), which can be assigned to elements.

- Core defines attribute `personNameInitialIndicator`.  Its type is a boolean - a simple type.
- Core defines simple type `AddressCategoryCodeSimpleType`, which constrains a string down to a few possible codes, like `residential` and `business`.
{: .example}
