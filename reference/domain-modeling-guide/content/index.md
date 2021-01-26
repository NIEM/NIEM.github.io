---
title:  Design and build domain content
---

## How to name, define, and structure data components

### Identify data requirements

NIEM was designed to share information across domains (communities of interest or lines of business). You can certainly consider both internal and external data requirements, but you definitely should identify data requirements for sharing information with communities and organizations outside your own. Ask yourself who you share your information with outside your domain? Also, who from outside your domain shares information that you need?

It helps to identify or develop simple scenarios, and within those scenarios identify common use cases for sharing information.
It also helps to examine existing database schemes, data dictionaries, XML schemas, flat files, paper/electronic forms, workflows, etc. for data requirements. Such data sources can provide insights into what data is currently shared and how.

There are likely many variances in data names and definitions that already exist in the sources. To create a good domain model it is necessary to harmonize, i.e., decide on a single name, definition, and structure (type) for each data element; eliminate duplication. Then map the data model elements (and types) back to their authoritative sources (data dictionaries, database schemes, forms, etc.) and record this mapping for reference. This mapping will likely become an critical resource to programmers who will implement information exchanges with the domain model and may have to trace back to the legacy data sources.

### Do not _boil the ocean_

Model data components for real information requirements that are known to exist or that you know are necessary and are based on actual information sharing scenarios or use cases.

Do not create NIEM data components for every possible contingency or likelihood.
Do not create components that might be nice-to-have or that are "likely" future requirements.
That said, this does not mean you shouldn't model new data requirements that are definitely in near term plans.

Note that it is important to consider real information exchange scenarios and associated use cases that will identify both the existing and new near term requirements.
If possible, envision what the domain should look like in the (not too distant) future and build the to-be model from the as-is baseline.

### Start small scale

Scale back the effort rather than create data components that may have to be deleted or changed in later release cycles, and will subsequently confuse your domain community. Try to ensure the key domain classes (object types) are present in the model, but it is not necessary to be absolutely complete. It is easy to add properties to a type later (in a release or domain update). Furthermore, NIEM types are easily extended with additional elements in IEPDs using augmentation points. IEPD extensions confirm the need for new requirements, and feed them back to the reference model for future additions to NIEM.

Grow your domain model over time as you build NIEM experience. NIEM allows you to publish a domain update anytime outside of the annual release cycle. So, there is always time to catch up and never a need to rush for NIEM's sake.

Do not overbuild data components. Keep them simple: A type represents a real world object or concept. Elements describe the characteristics or parts of that object or concept. A complex type has elements, elements are typed, and so on down to primitive simple elements (of type string, text, name, date, amount, or token, etc.). For example:

- element Kk, complexType Xx has
  - element Aa, complexType (with simple content) string
  - element Bb, complexType (with simply content) date
  - element Cc, complexType (with simply content) amount
  - element Dd, complexType Yy has
    - element Ee, complexType (with simply content) name
    - element Ff, complexType (with simply content) text
    - element Gg, complexType Zz has
      - element Hh, complexType (with simply content) string
      - element Ii, complexType (with simply content) percent
      - element Jj, complexType (with simply content) text

All NIEM elements are defined as complexTypes that are extensions or ancestors of a complex base type in [<code>structures.xsd</code>](https://release.niem.gov/niem/structures/3.0/structures.xsd). These base types contain a simple object attribute group that supports NIEM built-in capabilities such as metadata and referencing.

Code lists also contain the simple object attribute group; however, code lists get that attribute group somewhat differently from elements. Code lists require both a complex type and a simple type. Each code element is defined by an associated <code>CodeType</code> (for example, <code>EyeColorCode</code> is defined by <code>EyeColorCodeType</code>). This <code>CodeType</code> was derived from a <code>CodeSimpleType</code> (following the example, <code>EyeColorCodeSimpleType</code>). The <code>CodeSimpleType</code> contains the code values as XML enumerations, while the <code>CodeType</code> extends the <code>CodeSimpleType</code> by adding the simple object attribute group, and the <code>CodeType</code> becomes an XML complexType with simple content.

### Map data requirements to NIEM

- Reuse existing data components where possible.
- Identify missing requirements (gap analysis).
- Create new NIEM data components ONLY when needed to cover gaps.
- Consistent with the NIEM NDR and releases (reference schemas).
- Use elements for object properties; elements are far more flexible.
- Use attributes only if absolutely necessary; e.g., very tightly coupled metadata on an element, as attribute `xml:lang` is to an element of type `TextType`.

### Clearly identify data components that will require future harmonization

with the Core (or with other domains if inputting a domain update).

### Use reference materials to model various NIEM techniques

- Simple examples exist as [IEPD Starter Kit patterns]({{ "/reference/artifacts/messages/iepd/iepd-starter-kit/reusable-xml-snippets/" | relative_url }})
that illustrate NIEM techniques such as:  augmentation, association, role, references, metadata, abstract elements and substitution groups, type extension, type adapter, etc.
- Review existing [release reference schemas](https://release.niem.gov/).
- The [change request](https://reference.niem.gov/niem/resource/change-request/) contains examples.
- Use the [reference tools](https://tools.niem.gov), e.g.,Schema Subset Generator, ConTesA, Code List Schema Generator, Migration Assistant, etc.

### During release cycle, provide initial input in NIEM-conformant

[XML Schema document](https://reference.niem.gov/niem/specification/nameing-and-design-rules/3.0/) (XSD)
or [Change Request](https://reference.niem.gov/niem/resource/change-request/) (XLS) format.

### Domain data models vs. IEPDs

- Domains contain the reusable building blocks for creating IEPDs; IEPDs are definitions for information exchanges.
- An IEP (Information Exchange Package) is an instance XML document that conforms to an IEPD.
- Differences in purpose, scope, reusability, NDR rules.
- IEPD extensions are candidates for domain content, but each should be evaluated and potentially remodeled.
- Use IEPD repositories to share IEPDs.
- Example IEPD:  Cursor-on-Target MilOps Future Namespace.
- [IEPD versioning]({{ site.data.pages.iepd | append: "iepd-versions/" | relative_url }})
- When building a domain model, concentrate on designing XML data components that can be reused within any IEPD that any domain might build to share data with you. Do NOT build an IEPD for a domain model. To do this, try to design small parts that can be reused independently and are potentially standalone. Do not build a couple of very large monolithic structures. Think in terms of the kinds of small objects you need to represent, so they can be reused in multiple IEPDs.

### The NIEM Lead Developer (GTRI) can and will help you

- Assists with conformance, quality, and modeling.
- Integrates inputs into the release or DU for your review.
- Can save you extra work and time if you make systemic errors.
- Get preliminary inputs in early for review, feedback, and assistance.

### NIEM Data Component Names and Definitions

A scalable vocabulary that will be used by many different communities to exchange information must be understandable to all parties involved.  To facilitate consistency and understanding NIEM has established rules for naming and defining its data components.  These rules apply to all types, elements, and attributes.  They were derived from [ISO/IEC Standard 11179](http://metadata-standards.org/11179/), Information Technology -- Metadata Registries (MDR).  This standard has been around since the 1990's and continues to be updated.  For this reason, please do not expect that NIEM rules for names and definitions are exactly synchronous with Standard 11179.  Yet, for the most part, the NIEM Naming and Design Rules (NDR) still generally follow 11179 rules and guidance for designing metadata [definitions](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.4) and [names](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.5).

#### How to Draft Data Component Definitions

Each NIEM element, attribute, and type must be clearly defined before it will be accepted for a NIEM domain update or release.  [ISO/IEC Standard 11179](http://metadata-standards.org/11179/) Part 4 is the guidance upon which NIEM definitions are formulated.  The salient points of that guidance and the NIEM NDR rules are repeated here:
- Each data component definition must be unique from all others and distinguishable in meaning.  No two definitions can be identical in wording or so close in meaning that they could refer to the same data component.

- Try to keep definitions simple and straight forward.  This is not always possible, at least make them understandable to others who are not a part of your community of interest (i.e., domain).

- Element definitions almost always begin with an indefinite article (i.e., "a" or "an"), never a definite article (i.e., "the").

- Since it is often the case that a type and an element of that type can be defined with identical or similar words (for example, Person and PersonType), it is a NIEM best practice to begin a type definition with the phrase "A data type for ..." This ensures that the definition for the element and its associated type are easily distinguishable.

- Best practices for the opening phrase of the definitions of other kinds of NIEM data components are:
  - abstract elements:      "A data concept for ..."
  - association elements:   "An association for/between/among ..."
  - augmentation elements:  "An augmentation point for ..."
  - role elements:          "A role of a(n) ..."
  - types: "A data type for ..."

- If you have trouble designing a good definition for a data component, refer to the current NIEM release for examples.

- Avoid using the terms in the name of a data component to define it. That said, a good data component name may be self-defining. If there are no good synonyms to employee in the definition, and you must use one or more terms from the name, it is not an error.

- Aside from the typing implications of opening phrases mentioned above, do not put data typing information in a data component definition. An example of a bad definition is: <code>SocialSecurityID</code> - "A 9-digit number with hyphens that identifies a person in the U.S." The fact this element is a "9-digit number with hyphens" should not be included in its definition. In most cases separators are meaningless and unnecessary visual aids for human readability. The correct way to define this identifier is to use the <code>xs:pattern</code> attribute to restrict it to nine digits and without hyphens. Note that non-alphanumeric characters may be used within identifiers if they are an integral part of the identifier itself (for example, passwords), and are NOT merely being used as visual separators.

- Based on the foregoing, it is good practice to avoid use of the word "type" within definitions, because in most cases,"type" refers to data typing. Instead, in the appropriate cases, a definition should use terms such as kinds, class, category, nature, genre, or form to refer to classifications (another relatively common word-sense of "type").

- Code list type definitions &mdash; A code list must have a definition for both its associated <code>CodeType</code> and <code>CodeSimpleType</code>. Both of these data types can have the same definition (one of the few exceptions to the unique definition rule) since they are semantically the same type. The difference is that the complex type extends the simple type to add several common properties that are part of the NIEM infrastructure. The definition should NOT refer to the code values or the code literals. For example, the definition for <code>DayOfWeekCodeSimpleType</code> could be "A code for a day in a week".  It should NOT include Su=Sunday, Mo=Monday, etc. These values and associated literals will be recorded in the <code>xs:enumeration</code> elements within the XSD for the <code>CodeSimpleType</code>.

- Type definitions should describe what a type is, not list and define its contents.  Describe it as an object not a container of attributes.  For example, <code>VehicleType</code>:

  - <code>VehicleType</code> &mdash; (bad definition) A data type that contains the following (properties or characteristics) VehicleColorInteriorText, VehicleDoorQuantity, VehicleIdentification, VehicleMake, VehicleModel, ...
  - <code>VehicleType</code> &mdash; (good definition) A data type for a means of ground transportation designed to carry an operator, passengers, and/or cargo.
- An element definition should describe what the element is, not reference its data type or generic necessary data elements or related information.  The following are all examples of bad element definitions for the element named <code>Neoskizzle</code>:
  - A <code>Neoskizzle</code> container containing many references to elements as defined in <code>NeoskizzleType</code>.
  - A <code>Neoskizzle</code> contains identification information as well as many other characteristics. See type definition.
  - A <code>Neoskizzle</code> containing necessary data elements.
  - <code>Neoskizzle</code> related information.
  - A person who neoskizzles. &mdash; This definition still uses the element name (or a derivative) to define itself. This may be fine if the word is very common. In this case, that does not work.

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; At this point, do you have any idea what "neoskizzle" means or is by reading any one of the definitions above? Of course not. So, here is an example of a good definition: A person who takes part in an event, activity, meeting, or other social function. Apparently, a synonym for "neoskizzle" is "participant". So, why not use the term "Participant" for the element name? (By the way, in case you hadn't guessed, there is no such word as "neoskizzle".  It's made up.)

#### How to Design Data Component Names

The [NIEM NDR](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/) provides fairly clear rules and guidance regarding the naming of data components. The most important NDR sections for understanding NIEM data naming are:

- [Consistent Naming](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_6.5.2). This helps to establish clear meaning. NIEM also follows [ISO/IEC Standard 11179](http://metadata-standards.org/11179/) syntax for data names.
- [ISO 11179 Part 5](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.5)
- [Naming Rules](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8)

##### Summary of naming syntax

The syntax of NIEM data names comes from [IEC/ISO 11179 Part 5](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.5).

A single NIEM data name may consist of a number of terms. A term is a meaningful word, an abbreviation for a word, or an acronym. Word terms are one of:

1. The preferred U.S. spelling of words defined in the [Oxford English Dictionary](http://www.oed.com) (The OED is a subscription based dictionary. A free version is available at [Oxford Dictionaries](http://www.oxforddictionaries.com/)).
2. <code>ID</code>, the authorized abbreviation for <code>Identifier</code>.
3. <code>URI</code>, the authorized abbreviation for <code>Uniform Resource Identifier</code>.
4. Local terminology, acronyms, or abbreviations that must be defined within schema documents per the NDR Section [Use of Acronyms, Initialisms, Abbreviations, and Jargon](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8.2.1).

In accordance with IEC/ISO 11179 Part 5, terms that make up a NIEM data name are classified into four basic parts according to their placement and function. A term in a data name can be one of these:

- Object term - (may not be present if the property is generic enough) describes the real world object or concept to which this data name applies.
- Property term - describes the characteristic or portion of the object to which this data name applies.
- Representation term - describes the NIEM data type of this data name.
- Qualifier term - (optional) describes more specific information applicable to the object, property, or representation term; multiple qualifier terms may be used.

Example: <code>VehicleTrafficControlDeviceCategoryCode</code> &mdash; A data type for a kind of traffic control device (TCD) applicable to this motor vehicle at the crash location.

- <code>Vehicle</code> = object term
- <code>Traffic</code>, <code>Control</code>, <code>Device</code> = all qualifier terms modifying <code>Category</code>
- <code>Category</code> = property term
- <code>Code</code> = representation term

##### Other naming guidance

- __Avoid use of the term <code>Type</code>__ (except as a representation term to identify the name of a NIEM type). This is reserved for the representation term indicating data typing; instead use <code>Category</code>. Because it is an extremely common concept in all domains, the only current exception is <code>BloodType</code>.

- __Avoid use of the term <code>Number</code> in data names__. Its use is usually too generic to be meaningful or helpful, unless a name is extremely common across all domains (not just a few). For example, the data name <code>TelephoneNumber</code> is common across all domains; in this case, it is most useful for clear meaning. Otherwise, a number should usually be an ID (Identifier), Quantity, Numeric (or Value), Amount, Measure, or Duration (of time) (See: <https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8.7>).

- __Do NOT use double terms__ (i.e., consecutive identical terms such TypeType or NameName) unless such a term has very specific meaning. Double terms should be replaced with a single instance of the term (as long as it does not detract from the real meaning).

- __ID (Identifier) vs. Identification__ &mdash; <code>ID</code> and <code>Identification</code> elements are easy to confuse. An <code>ID</code> is a string element that uniquely identifies an entity; so, an <code>ID</code> has simple content. An <code>Identification</code> element is a set of sub-elements.  For example, an <code>Identification</code> element for a person usually has sub-elements such as <code>PersonName</code>, <code>PersonHeight</code>, <code>PersonWeight</code>, <code>PersonEyeColor</code>, <code>PersonHairColor</code> <code>IssueDate</code>, <code>ExpirationDate</code>, etc.; so, an <code>Identification</code> element has complex content (i.e., sub-elements). Usually one or more of its sub-elements will be <code>ID</code> elements.

- __<code>Text(Type)</code> vs. <code>Name(Type)</code>__ &mdash; In the construction of NIEM element names, <code>Name</code> and <code>Text</code> are authorized representation terms (of type <code>NameType</code> and <code>TextType</code> respectively). The term <code>Name</code> is a word or phrase that constitutes the distinctive designation of and applies to a specific person, place, thing or concept. This is not necessarily an identifier, for example, there are multiple persons with the name "Bob". <code>Text</code> is a word or phrase in some language (usually English). A <NameType> is a special subset of <TextType>.

- __<code>Date(Type)</code>__ &mdash; The only date and time format supported by W3C XML Schema is a subset of [ISO 8601](https://www.w3.org/TR/xmlschema-2/#isoformats). NIEM uses this for date and time.

- __<code>Indicator(Type)</code>__ &mdash; This term designates NIEM Booleans whose valid values are TRUE or FALSE. Do NOT change these values to YES/NO or 1/0. If required, translation to and from TRUE or FALSE is not difficult.

- __Best examples of data names__ are in the current [NIEM releases](https://release.niem.gov/), in particular NIEM Core [<code>niem-core.xsd v3.0</code>](https://release.niem.gov/niem/niem-core/3.0/niem-core.xsd), or the Core from the most current major release.

----

### <&mdash;&mdash; Return to: [Table of Contents](./index.html)

----
