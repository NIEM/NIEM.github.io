---
title: Country Codes and the Representation Pattern
short: Country Codes
code_lists: /reference/specifications/code-lists/country-codes/
---

- TOC
{:toc}

## Overview

Country codes are one example of the representation pattern in NIEM.

Two of the authoritative sources for country codes in the NIEM 4.0 release are **GENC** (Geopolitical Names, Entities, and Codes) and **ISO 3166-1**.  Both of these standards have 2-character, 3-character, and numeric representations.  In addition to these, NIEM also includes a text representation.

In NIEM 4.0, country codes were refactored in order to use the representation pattern.  This provided multiple benefits:

- It simplified the creation of new country code elements.
- It reduced the number of existing elements with the same semantic meaning.
- It improved consistency, by making the same set of substitutions easily reusable.

{:.note}
> See [Country Code Representations]({{ page.code_lists }}) for information about the different representation formats used with country codes, including CSV files for GENC codes.

## Representation Pattern

Because NIEM (1) has multiple representations for country codes and (2) country codes are used in many different contexts throughout the model, they were a good candidate for the representation pattern.

### Before

In NIEM 3.2, before the representation pattern was used, a new country code element was created for each usage of a code set.  These elements include:

| NIEM 3.2 Element | Type |
| ---------------- | ---- |
| nc:DocumentCountryISO3166Alpha2Code | iso_3166:CountryAlpha2CodeType |
| nc:LocationCountryISO3166Alpha2Code | iso_3166:CountryAlpha2CodeType |
| nc:LocationCountryGENCCode | genc:CountryAlpha3CodeType |
| nc:MilitaryCountryGENCCode | genc:CountryAlpha3CodeType |
| nc:PersonCitizenshipISO3166Alpha2Code | iso_3166:CountryAlpha2CodeType |
| nc:PersonNationalityISO3166Alpha2Code | iso_3166:CountryAlpha2CodeType |
| biom:ForensicSourceCountryISO3166Alpha2Code | iso_3166:CountryAlpha2CodeType |
| biom:RecordingSourceCountryISO3166Alpha2Code | iso_3166:CountryAlpha2CodeType |
| mo:FacilityAllegianceCountryCode | genc:CountryAlpha3CodeType |

### After

In order to simplify and enable reuse, the representation pattern was used in NIEM 4.0 and type `nc:CountryType` was created.  This type contains abstract element `nc:CountryRepresentation`, which allows for substitution by GENC and ISO 3166 code elements, as well as other NIEM and local elements.

Using the representation pattern, NIEM 4.0 country code elements include:

| NIEM 4.0 Element | Type |
| ---------------- | ---- |
| nc:DocumentCountry | nc:CountryType |
| nc:LocationCountry | nc:CountryType |
| nc:MilitaryCountry | nc:CountryType |
| biom:ForensicSourceCountry | nc:CountryType |
| biom:RecordingSourceCountry | nc:CountryType |
| mo:FacilityAllegianceCountry | nc:CountryType |

This approach adds greater consistency with less duplication.  Any element of type `nc:CountryType` may use one or more of the different country code representations.  And each semantic concept only has to be defined once.

### Comparison

In NIEM 4.0, the addition of `nc:CountryType` made it possible to reuse multiple representations, rather than requiring a new element to be created for each usage.

<table>
  <thead>
    <tr>
      <th>Release</th>
      <th>Location Country Elements</th>
      <th>Types</th>
    </tr>
  </thead>
  <tr>
    <td>
      <ul>
        <li>NIEM 3.2</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>nc:LocationCountryISO3166Alpha2Code</li>
        <li>nc:LocationCountryGENCCode</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>iso_3166:CountryAlpha2CodeType</li>
        <li>genc:CountryAlpha3CodeType</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>
      <ul>
        <li>NIEM 4.0</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>nc:LocationCountry</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>nc:CountryType</li>
      </ul>
    </td>
  </tr>
</table>

## Diagram

The following diagram shows type `nc:CountryType`, which carries representations
of a country across NIEM exchanges.

{:.note}
- type `nc:CountryType` is used by `nc:LocationType` and `nc:DocumentType`
- `nc:CountryType` has an element `nc:CountryRepresentation`,
which may be replaced in an instance by a number of ways to identify a country.

![Core XML schema for country](schema-top.png)

## XML Examples

### Schema

The example below shows the declaration of type `nc:CountryType` and one element that uses this type:

```xml
<xs:complexType name="CountryType">
  <xs:annotation>
    <xs:documentation>A data type for a country, territory, dependency, or other such geopolitical subdivision of a location.</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="structures:ObjectType">
      <xs:sequence>
        <xs:element ref="nc:CountryRepresentation" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:CountryAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="LocationCountry" type="nc:CountryType" nillable="true">
  <xs:annotation>
    <xs:documentation>A country, territory, dependency, or other such geopolitical subdivision of a location.</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Instance example

The following shows three different examples of element `nc:LocationCountry`, each using a different representation provided by `nc:CountryType`:

```xml
<nc:LocationCountry>
  <nc:LocationCountryISO3166Alpha2Code>US</nc:LocationCountryISO3166Alpha2Code>
</nc:LocationCountry>

<nc:LocationCountry>
  <nc:CountryCode>USA</nc:CountryCode>
</nc:LocationCountry>

<nc:LocationCountry>
  <nc:LocationCountryName>United States</nc:LocationCountryName>
</nc:LocationCountry>
```

## Other Representations

In addition to the GENC and ISO 3166 representations, other representations may be used with
NIEM 4, either by additional substitutions for `nc:CountryRepresentation`, or by
providing additional code list URIs with `nc:CodeType` ([see Code Lists for more]({{ page.code_lists }})).

An IEPD (information exchange package definition), which specifies a message,
may include one or more of these representations to convey countries. Which
representations are used is determined by the community of interest developing
the message specification.
