---
  title: Representation Pattern
  short: Representations
  icon: fa-tags
  description: The representation pattern is a mechanism to support multiple representations of a concept, along with additional properties.
  links:
  - url: /model/concepts/representation/modeling/
  - url: /model/concepts/representation/xml/
  - url: /model/concepts/representation/json/
---

- TOC
{:toc}

## Overview

{% include_relative intro/index.md %}

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
