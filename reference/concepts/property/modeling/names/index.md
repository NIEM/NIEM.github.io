---
  title: Property Names
  short: Names
  ndr:
    rules:
    - number: 10-44
    - number: 10-45
    - number: 10-46
    - number: 10-47
    - number: 10-49
    - number: 10-50
    - number: 10-53
    - number: 10-54
    - number: 10-55
    - number: 10-56
    - number: 10-57
    - number: 10-58
    - number: 10-59
    - number: 10-60
    - number: 10-61
    - number: 10-62
    sections:
    - number: 10.8
---

The following provides rules and guidance for naming properties.

## Basics

A single NIEM component name may consist of multiple terms. A term is a meaningful word, an abbreviation for a word, or an acronym.

### OED Terms

Besides the additional accepted terms listed below, terms should be real words as defined by the [Oxford English Dictionary](http://www.oxforddictionaries.com/).

### Spelling

For consistency, words should use the preferred U.S. spelling as defined in the [Oxford English Dictionary](http://www.oxforddictionaries.com/).

### Additional terms

Additional terms that may be used are:
- `ID`, the authorized abbreviation for `Identifier`
- `URI`, the authorized abbreviation for `Uniform Resource Identifier`
- [Local terminology]({{ "/reference/concepts/local-term" | relative_url }}), defined by a NIEM namespace.

## Parts of a name

In accordance with [IEC/ISO 11179 Part 5](http://metadata-standards.org/11179/), terms that make up a NIEM property name are classified into four basic parts according to their placement and function:

- Object
- Qualifier
- Property
- Representation

### Object term

An object term is the real world object or concept to which this name applies.
This may be omitted if the property is very generic and no specific class applies.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Aircraft` is the object term.  In this example, that is the object being modeled.

### Qualifier term

A qualifier term indicates more specific information applicable to the object, property, or representation term.

- Multiple qualifier terms may be used if needed.
- Qualifiers are optional.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Fuselage` is a qualifier term.  In this example, it describes what kind of color is expected.
>- A related element in NIEM is `AircraftWingColorCode`.  `Wing` would be the qualifier term in that example.

### Property term

A property term is the characteristic, or portion of the object, to which this name applies.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Color` is the property term.  This is the primary characteristic of the property name.  The value of this property will be a color.

### Representation term

A representation term indicates the kind of value a property carries.

- A representation term, if present, must appear as the final term of the name.
- Representation terms are required for properties that carry a simple value, like a string or a number.
- Representation terms are required for other properties with specific types.

See the [Reference Table]({{ "/reference/concepts/property/modeling/table" | relative_url }}) for the list of representation terms.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Code` is the representation term.  It indicates the general kind of value to expect.

## Restricted terms

### Type

Avoid use of the term `Type`.  `Type` is reserved as the representation term for NIEM types; it indicates a structure.  Properties should use the term `Category` instead to represent type / category / kind.

NIEM does allow for exceptions when the use of the term `Category` causes confusion over very well-known concepts that use the term `type`.  One such exception is for the element `j:PersonBloodTypeCode`.

### Number

Avoid use of the term `Number` in data names.  Its use is usually too generic to be meaningful or helpful.  A number should usually be an ID (Identifier), Quantity, Numeric (or Value), Amount, Measure, or Duration (of time).

## Other guidance

### No double terms

Do not use double terms (i.e., consecutive identical or similar terms such as IDID or NumberNumeric).  Double terms should be replaced with a single instance of the term if it makes sense to do so.

This can sometimes cause different parts of a name, like the property term and the representation term, to be combined into one.

### ID vs Identification

In NIEM, **`ID`** is used as the abbreviation for `Identifier`.  This term is used for simple properties; it represents a unique string or number.

NIEM uses **`Identification`** as the representation term for a complex representation of an ID. This term carries a unique string or number, and additional information, like expiration date and the issuer.  It is typically used by properties with the type `nc:IdentificationType`.

## References

{% include ndr-references.html list=page.ndr %}
