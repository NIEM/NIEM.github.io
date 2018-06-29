---
  title: Representation Pattern
  short: Representations
  icon: fa-tags
  description: The representation pattern is a mechanism to support multiple representations of a concept, along with additional properties.
  links:
  - url: /reference/concepts/representation/modeling/
  - url: /reference/concepts/representation/country-codes/
  - url: /reference/concepts/representation/xml/
  - url: /reference/concepts/representation/json/
---

In NIEM, multiple representations of a concept are typically handled via abstract elements and substitution groups.  This allows for replacement of the abstract element in an instance with one or more of the substitutions.

{:.example}
> Abstract element nc:PersonHairColorAbstract has multiple substitutions, allowing for free-text or code value representations.

In cases where the concept not only has multiple representations but also additional properties describing the concept, a new type is needed to bundle the representations and additional properties together.  This is the representation pattern.

{:.example}
- Type nc:DateType contains...
  - An abstract date representation element
  - Additional date-related properties

The major difference between the two examples is that there are other date-related properties in addition to the multiple date representations; hair color has multiple representations only.

<!--more-->

## Comparison

The table below shows an example outlining the difference between abstract elements + substitutions versus the representation pattern.

{:.note}
- Multiple representations are handled the same in both cases - an abstract element with multiple substitutions.
- The representation pattern adds additional content and a type to bundle it with the abstract element.

<table>
  <thead>
    <tr>
      <th>Pattern</th>
      <th>Abstract Element + Substitutions</th>
      <th>Representation Pattern</th>
    </tr>
  </thead>
  <tr>
    <td>Type</td>
    <td>n/a</td>
    <td>nc:DateType</td>
  </tr>
  <tr>
    <td>--Multiple representations</td>
    <td>
      nc:PersonHairColorAbstract
      <ul>
        <li>substitutions:</li>
        <li>nc:PersonHairColorText</li>
        <li>j:PersonHairColorCode</li>
      </ul>
    </td>
    <td>
      nc:DateRepresentation
      <ul>
        <li>substitutions:</li>
        <li>nc:Date</li>
        <li>nc:DateTime</li>
        <li>nc:ZuluDateTime</li>
        <li>...</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>--Additional Content</td>
    <td>n/a</td>
    <td>
      <ul>
        <li>nc:DateAccuracyAbstract</li>
        <li>nc:DateMarginOfErrorDuration</li>
      </ul>
    </td>
  </tr>
</table>

{:.note}
> Just because an abstract element is contained in a type does not mean it follows the representation pattern.  Element nc:PersonHairColorAbstract is used in type nc:PersonType, but hair color is simply a property of a person, not a full representation of a person.
