---
  title: Attributes in JSON
  short: JSON
  todo: Add JSON schema
---

- TOC
{:toc}

## Basics

JSON does not have a similar notion to attributes as in XML.  Because of this, attributes must be represented in JSON in a different manner.

Looking at the example of a person with a name from before, we can see how elements and attributes appear in XML:

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

In JSON, this would appear as:

```json
{
  "nc:Person": {
    "nc:PersonName" : {
      "structures:id": "a123",
      "nc:PersonGivenName": "John",
      "nc:PersonMiddleName": {
        "rdf:value": "Q",
        "nc:personNameInitialIndicator": true
      },
      "nc:PersonSurName": "Smith"
    }
  }
}
```

Here, we see that JSON properties just contain objects or values - no attributes.  NIEM attributes are represented as regular properties.

## Complex content

For NIEM elements that contain an attribute and complex content (child elements), the translation is straight-forward: the attribute should appear in JSON in the same manner as the other elements.

XML example:

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

{: .note}
> XML element `nc:PersonName` contains one attribute and two elements.

JSON example:

```json
{
  "nc:Person": {
    "nc:PersonName" : {
      "structures:id": "a123",
      "nc:PersonGivenName": "John",
      "nc:PersonSurName": "Smith"
    }
  }
}
```

{: .note}
> JSON property `nc:PersonName` contains three properties.

## Simple content

A bigger change occurs for XML elements that contain attributes and simple content (a value).

XML example:

```xml
<nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
```

{: .note}
> XML element `nc:PersonMiddleName` contains one attribute and one value.

JSON example:

```json
{
  "nc:PersonMiddleName": {
    "rdf:value": "Q",
    "nc:personNameInitialIndicator": true
  }
}
```

{: .note}
- JSON property `nc:PersonMiddleName` contains two properties.
- `rdf:value` is a new property that only appears in JSON.

Because JSON does not have attributes, the NIEM attribute `nc:personNameInitialIndicator` must be treated like a regular property.  This requires the addition of a new property to hold the element's original value, so a new name must be provided.  NIEM uses the name `rdf:value` for this kind of case.
