
In NIEM, multiple representations of a concept are typically handled via abstract elements and substitution groups.  This allows for replacement of the abstract element in an instance with one or more of the substitutions.

{:.example}
> Abstract element nc:PersonHairColorAbstract has multiple substitutions, allowing for free-text or code value representations.

In cases where the concept not only has multiple representations but also additional properties describing the concept, a new type is needed to bundle the representations and additional properties together.  This is the representation pattern.

{:.example}
- Type nc:DateType contains...
  - An abstract date representation element
  - Additional date-related properties

The major difference between the two examples is that there are other date-related properties in addition to the multiple date representations; hair color has multiple representations only.
