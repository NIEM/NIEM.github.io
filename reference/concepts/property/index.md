---
  title: Properties
  icon: fa-lightbulb-o
  description: A property represents a concept, idea, or thing.
  links:
    - url: /reference/concepts/property/element/
    - url: /reference/concepts/property/abstract/
    - url: /reference/concepts/property/substitutable/
    - url: /reference/concepts/property/attribute/
  redirect_from:
    - /reference/concepts/property/modeling/
    - /reference/concepts/property/modeling/names/
    - /reference/concepts/property/modeling/definition/
    - /reference/concepts/property/modeling/table/
---

A property represents a concept, idea, or thing.  It defines specific semantics and appears in exchanges as the tag or label for a field.

Properties may be more commonly known as as elements, attributes, fields, tags, keys, or keywords.

{: .example}
> One of the properties defined in Core is `PersonBirthDate`.  It represents a person's birthday and will carry that value in an exchange.
>
> - The type of the property will define the value's structure (e.g., free text or a specific date format).
> - The property itself is what gives this date value its meaning and distinguishes it from other kinds of dates that might appear, such as a driver license expiration date.

{:toc}
- TOC

On its own, a property has meaning but no inherent structure.

{: .example}
>
> Without a type, any kind of value could be provided for property `PersonBirthDate` above, like the following:
>- 06/30/1950
>- 1950-06-30
>- June 30th, 1950
>- green (without a type, any value is valid)

A property must have an assigned type in order to have both clear semantics and a well-defined structure.

<!--more-->

## Elements vs Attributes

In NIEM, there are two basic kinds of properties: elements and attributes.

**Attributes** can only ever be used to represent simple content (a value).  They do not exist independently; they must be carried by an element.

**Elements** can be used to represent simple content (a value) or complex content (an object).  In either case, an element can also carry attributes.

{:.example}
>This example lists 5 elements (each beginning with `nc:Person`) and 2 attributes (`structures:id` and `nc:personNameInitialIndicator`):

```xml
<nc:Person>
  <nc:PersonName structures:id="a123">
    <nc:PersonGivenName>John</nc:PersonGivenName>
    <nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
    <nc:PersonSurName>Smith</nc:PersonSurName>
  </nc:PersonName>
</nc:Person>
```

Attributes cannot be extended, substituted, augmented, or have multiple occurrences.  Additionally, because NIEM uses attributes for referencing and linking data, metadata, and security markup, elements should be used over attributes whenever possible in order to support these features.  Over 99% of the properties in NIEM are elements.

{:.note}
> The information on this page describes a general property in NIEM.  Information about specific kinds of properties, their XML representations, and their JSON representations or alternatives appear as sub-pages under this section:

{% include icon-list.html links=page.links %}

## Modeling Guidance

Information about property names and definitions are provided separately in the pages that follow.  Other rules and guidance for modeling properties are provided below.

### Global

All properties must be declared globally as top-level elements in a schema.  One of the key principles of NIEM is to maximize reuse.  A local property cannot be reused outside of the one type in which it is defined.

### Conformant type

A property type must be NIEM-conformant.

{:.note}
>Only an abstract element may be defined without a type.

### Naming

A single NIEM component name may consist of multiple terms. A term is a meaningful word, an abbreviation for a word, or an acronym.

The following provides rules and guidance for naming properties.

#### OED Terms

Besides the additional accepted terms listed below, terms should be real words as defined by the [Oxford English Dictionary](http://www.oxforddictionaries.com/).

#### Spelling

For consistency, words should use the preferred U.S. spelling as defined in the [Oxford English Dictionary](http://www.oxforddictionaries.com/).

**Additional terms**

Additional terms that may be used are:

- `ID`, the authorized abbreviation for `Identifier`
- `URI`, the authorized abbreviation for `Uniform Resource Identifier`
- [Local terminology]({{ "/reference/concepts/local-term" | relative_url }}), defined by a NIEM namespace.

#### Parts of a name

In accordance with [IEC/ISO 11179 Part 5](http://metadata-standards.org/11179/), terms that make up a NIEM property name are classified into four basic parts according to their placement and function:

- Object
- Qualifier
- Property
- Representation

**Object term**

An object term is the real world object or concept to which this name applies.
This may be omitted if the property is very generic and no specific class applies.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Aircraft` is the object term.  In this example, that is the object being modeled.

**Qualifier term**

A qualifier term indicates more specific information applicable to the object, property, or representation term.

- Multiple qualifier terms may be used if needed.
- Qualifiers are optional.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Fuselage` is a qualifier term.  In this example, it describes what kind of color is expected.
>- A related element in NIEM is `AircraftWingColorCode`.  `Wing` would be the qualifier term in that example.

**Property term**

A property term is the characteristic, or portion of the object, to which this name applies.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Color` is the property term.  This is the primary characteristic of the property name.  The value of this property will be a color.

**Representation term**

A representation term indicates the kind of value a property carries.

- A representation term, if present, must appear as the final term of the name.
- Representation terms are required for properties that carry a simple value, like a string or a number.
- Representation terms are required for other properties with specific types.

See the [Representation Terms and Definitions Phrases](#representation-terms-and-definition-phrases) reference table on this page for the list of representation terms.

{: .example}
>
>- `AircraftFuselageColorCode` - a color of the main body of an aircraft.
>- `Code` is the representation term.  It indicates the general kind of value to expect.

#### Restricted terms

**Type**

Avoid use of the term `Type`.  `Type` is reserved as the representation term for NIEM types; it indicates a structure.  Properties should use the term `Category` instead to represent type / category / kind.

NIEM does allow for exceptions when the use of the term `Category` causes confusion over very well-known concepts that use the term `type`.  One such exception is for the element `j:PersonBloodTypeCode`.

**Number**

Avoid use of the term `Number` in data names.  Its use is usually too generic to be meaningful or helpful.  A number should usually be an ID (Identifier), Quantity, Numeric (or Value), Amount, Measure, or Duration (of time).

#### No double terms

Do not use double terms (i.e., consecutive identical or similar terms such as IDID or NumberNumeric).  Double terms should be replaced with a single instance of the term if it makes sense to do so.

This can sometimes cause different parts of a name, like the property term and the representation term, to be combined into one.

#### ID vs Identification

In NIEM, **`ID`** is used as the abbreviation for `Identifier`.  This term is used for simple properties; it represents a unique string or number.

NIEM uses **`Identification`** as the representation term for a complex representation of an ID. This term carries a unique string or number, and additional information, like expiration date and the issuer.  It is typically used by properties with the type `nc:IdentificationType`.

### Definitions

The following provides rules and guidance for constructing property definitions.

#### Required

All properties must have a definition.

#### Human-readable

Definitions are meant to be human-readable.

#### Informative

Definitions should provide more information than the terms in the property's name, when possible.

{: .note}
> In some cases, a property name may be so obvious (e.g., `PersonHairColorText`) that attempts to provide synonyms or alternate phrasing would be counterproductive.  A definition does not have to be elaborate if the property name would be obvious to the general public.

#### Unique

Each data component definition must be unique from all others and distinguishable in meaning.  No two definitions can be identical in wording or so close in meaning that they could refer to the same data component.

{: .note}
> There is an exception for a property with multiple representations, like various substitutions of an abstract property.  Since each substitution represents the same concept, they may each share the same definition.

#### No duplication

Definitions of a part do not need to redefine the whole.

{: .example}
> Definitions for elements like `nc:PersonHairColorText`, `nc:PersonName`, and `nc:PersonAgeMeasure` do not need to each define what a person is.  That should be defined once by element `nc:Person`.

#### No type info

Type information should not appear in a property definition

A property definition is intended to describe semantic meaning only and should be decoupled from specific representation or structure.  The representation term of a property and the standard opening phrase of a definition provide enough context to determine if a property is a string, a date, an ID, etc.

{: .tip}
> More specific typing information usually belongs with the types (the structures) rather than the properties (the concepts).  Things like patterns, code values, and the number of characters should usually not be embedded in property definitions.

There may be a few cases where providing such information is essential to the semantics of the property.  In this case, it is permitted.

#### Standard opening phrases

Definitions of properties with simple content or designated types should use a standard opening phrase as defined by the NDR.

See the [Representation terms and definition phrases](#representation-terms-and-definition-phrases) reference table on this page for more.

#### Begin with "A(n)"

Property definitions almost always begin with an indefinite article (i.e., "a" or "an"), never a definite article (i.e., "the").  This is based on ISO 11179 guidance.

#### Follow ISO 11179-4

Definitions must follow [11179-4](http://metadata-standards.org/11179/) requirements, and should follow its recommendations.

## Representation terms and definition phrases

The tables below pair property representation terms (primary and alternates) with the recommended definition standard opening phrases.

### Simple value properties

{% include csv-table.html csv=site.data.model.concepts.repTermsPhrases-simple %}

### Other properties

{% include csv-table.html csv=site.data.model.concepts.repTermsPhrases-complex %}

## NDR references

### General property info

{% include ndr-references.html list=site.data.ndr.concepts.property_all %}

### Name info

{% include ndr-references.html list=site.data.ndr.concepts.property_names %}

### Definition info

{% include ndr-references.html list=site.data.ndr.concepts.property_defs %}
