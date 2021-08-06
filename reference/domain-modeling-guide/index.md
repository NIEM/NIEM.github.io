---
title: NIEM Domain Modeling Guide
description: How to design a Community of Interest
short: Domain Modeling Guide
---
Version: September 29, 2016

{:toc}
- TOC

## Prologue

**Purpose of NIEM**

The National Information Exchange Model (NIEM) is a joint partnership across all levels of government (federal, state, tribal, and local) as well as private industry.  It is a uniform, harmonized, well-defined set of metadata structures normatively represented in the W3C XML Schema Definition (XSD) Language.  We refer to the structures in this set as *NIEM data components*.  They are openly available for use (and reuse) for designing, developing, and implementing standard XML-based information exchange specifications (IEPDs).

The primary purpose for the NIEM is to exchange information and data at the message level across different communities of interest.  This does not limit its aptness for sharing information within a single community.  However, it does drive its foundational design principles and rules.  To achieve consensus for a large common vocabulary, with well-defined semantics, and consistent structure that enables numerous communities of interest to share information at the message level, requires a careful balance of rational constraints, flexibility, compromise, and collaboration.  NIEM is designed to develop, distribute, and support large-scale enterprise-wide information exchange standards and associated procedures.  In turn, this enables a variety of jurisdictions to automate information sharing during both emergencies and daily routine operations.  Meeting this goal requires that all participating communities of interest model and maintain their NIEM data components according to NIEM specifications, even when to doing so may compromise long standing traditions within a community (for example, simple data names, terse definitions, or complex data structures).  This is necessary (1) to ensure different communities can share message level information and its associated semantics accurately, and (2) to facilitate model consensus and continued scalability.

**NIEM Domains**

A NIEM *domain* is a Community of Interest (CoI) aligned around a common interest.  For NIEM the common interest is generally based on a Line of Business (LoB) (or related group of such) for which information must be shared or exchanged.

A NIEM *domain steward* is responsible to ensure a given domain model (namespace or namespaces) is governed and maintained under the NIEM specifications.  To do this effectively, the domain steward should commission team of subject matter experts with technical skills that collectively represent various levels of government for that CoI or LoB.  However, the reality is that a domain is sometimes sponsored and governed by one organization because it may be difficult to identify volunteers from various levels of government within the CoI or LoB who can or will participate.  These are usually the smaller domains with less content to govern.

Domains are a key aspect of the NIEM architecture for several reasons.  NIEM was designed with one set of common Core data components governed by the NIEM Business Architecture Committee (NBAC), and multiple sets of domain data components (derived from the Core) each semi-independently governed by a domain technical team.  By design, NIEM partitioning corresponds directly to its governance, and in turn, this facilitates both its version architecture and its ability to scale up (by onboarding new domains).  Furthermore, almost every NBAC member is also a member of at least one domain team which provides significant cross-pollination for collaborating on issue resolution, harmonization, refactorization, refinement of data components during NIEM release development cycles.
`:w

Finally, the NIEM architecture is flexible enough to allow the establishment of domains at-large that intentionally do not participate in governance, and yet, can still use NIEM to share information with member domains or other domains at large.

**What this guide covers**

- Technical aspects of domain model management.
- How to start a new domain model.
- How to evaluate the quality of NIEM data components.
- Data component naming and definitions.
- Creating NIEM code lists quickly.
- Technical responsibilities of a domain:
  - Structure its domain content so other domains can reuse it.
  - Design its data components so it can be understood by other domains.
  - Participate in harmonization and issue resolution when its domain is involved.
  - Consider impacts that changes to its domain will have on other domains (or Core).
  - Maintain representation in NBAC and participate.
- What impacts my domain model?  What does my domain model impact?
- Maintaining a domain model (what to model, when to change it, etc.)
- Harmonization
- Participating in a release cycle, domain update, and other NIEM technical processes.
- Technical assistance, tools, templates, best practices, references, etc.

This guide does not necessarily detail all topics it discusses.  However, the guide often references other NIEM documents or Web pages for more information.  It also includes an extensive appendix of references to other NIEM resources.

**What you should be familiar with to use this guide**

To use this guide, you should be somewhat familiar with the following topics and documents:

- [Extensible Markup Language (XML) 1.0 (5th Edition)](https://www.w3.org/TR/2008/REC-xml-20081126/)
- W3C XML Schema Definition (XSD) Language
  - [Part 1: Structures](https://www.w3.org/TR/xmlschema11-1/)
  - [Part 2: Datatypes](https://www.w3.org/TR/xmlschema11-2/)
- General NIEM concepts; for example, as presented in:
  - [NIEM Introduction](https://reference.niem.gov/niem/guidance/introduction/0.3/)
  - [NIEM Concept of Operations](https://reference.niem.gov/niem/guidance/concept-of-operations/0.5/)
  - [NIEM Training]({{ "/training/" | relative_url }})
  - [NIEM IEPD Starter Kit](http://niem.github.io/reference/iepd/iepd-starter-kit/)
- [NIEM Conformance](https://reference.niem.gov/niem/specification/conformance/3.0/)
- [NIEM High Level Version Architecture (HLVA)](https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/)
- [NIEM Naming and Design Rules (NDR)](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/)

**Audience**

This document is intended for use by technical personnel who support NIEM domain modeling and harmonization during major and minor release cycles, including domain updates.  In particular, we have tried to make it most useful to new or emerging domains that are building their initial content.  Guidance in this document is useful to NIEM working level governance (NBAC, NTAC, PMO staff, and lead developer) who often evaluate the need to harmonize, refine, or refactor NIEM domain models.  It may also be useful to organizations or groups interested in using NIEM but that do not intend to join its governance.

## Technical Basics

### HLVA

The [NIEM High-Level Version Architecture (HLVA) 3.0](https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/) identifies processes, artifacts, governance responsibilities and how they interact to produce new releases of and updates to the NIEM model. The HLVA discusses issues with inherently conflicting tradeoffs including (but not limited to):

- Timeliness vs. stability
- Domain autonomy vs. interoperability
- Ease for information exchange developers vs. ease for domain developers

Under PMO direction and with technical assistance from the lead developer, the NBAC, NTAC, and domains execute NIEM governance at the operational level. Practicing the HLVA has demonstrated the following results:

- There will be reliable and consistent schedules for activities that produce a NIEM major or minor release ensuring that activity participants know the work timelines and when their input is due, and the NIEM users can plan for release dates.
- Between regular major and minor release cycles, any domain may independently publish updates on its own timeline and make them available for immediate use (with the knowledge that their changes may impact other domains that extend or reuse their data components).
- Domain updates are incorporated into the next NIEM release. So, periodic releases remove negative impacts, inconsistencies, or incoherence resulting from independent domain updates.
- Information exchange developers are provided with a NIEM release, which is an updated schema document set that is coherent, for increased usability.
- A specific, concrete path exists for domains to feed input into NBAC's update, core synchronization, and harmonization processes, for inclusion in a future NIEM release. Domain, NBAC, and NTAC work on new content and changes is more evenly spread over time periods between release cycles instead of intensifying them.
- All changes are visible. Each namespace URI is used for exactly one version of a schema document, and any changes to a schema result in a new namespace URI.
- Change logs support descriptions of changes made to each namespace.

----

- Domain independence
- Release optimization
- Types of reference content (major, minor, micro, domain update, core supplement)
- Repositories (release, publication)
- Collaboration

### Namespaces and versions

- Important to domains who submit content in XSD.
- Describe the correlation of target namespaces and XML schema documents.
- Each schema document is assigned a unique target namespace.
- Namespace Syntax.
- URIs (Uniform Resource Identifiers), syntax, purpose, etc.

### NIEM release cycle

- Release types:  major, minor, micro, core supplement
- Scheduling:  standard timeframes, milestones, reviews, stages
(pre-alpha, alpha, beta, release candidate)
- Harmonization (who, what, how, the process, concepts, etc.)
- Issue resolution (who, what, how, the process, voting, tracking, etc.)
- Input formats
  - XSD (NIEM conformant XML Schema documents)
  - XLS (Microsoft Excel spreadsheet)
[Change Request](https://reference.niem.gov/niem/resource/change-request/)
(Christina's latest modifications)
  - Simple text explanations in email for very minor changes.
- Technical assistance (who, what, how)

### Domain updates

- Domain independence and self-serviced
- Types of domain updates: incremental vs. replacement
- Multi-domain coordinated domain update
- Change content preparation and model management
- Metadata, lineage, change log

### Conformance and QA

- General and specific conformance
- Verification (who, what, how, when, etc.)

## Model data components

How to name, define, and structure data components:

**Identify data requirements**

NIEM was designed to share information across domains (communities of interest or lines of business). You can certainly consider both internal and external data requirements, but you definitely should identify data requirements for sharing information with communities and organizations outside your own. Ask yourself who you share your information with outside your domain? Also, who from outside your domain shares information that you need?

It helps to identify or develop simple scenarios, and within those scenarios identify common use cases for sharing information.
It also helps to examine existing database schemes, data dictionaries, XML schemas, flat files, paper/electronic forms, workflows, etc. for data requirements. Such data sources can provide insights into what data is currently shared and how.

There are likely many variances in data names and definitions that already exist in the sources. To create a good domain model it is necessary to harmonize, i.e., decide on a single name, definition, and structure (type) for each data element; eliminate duplication. Then map the data model elements (and types) back to their authoritative sources (data dictionaries, database schemes, forms, etc.) and record this mapping for reference. This mapping will likely become an critical resource to programmers who will implement information exchanges with the domain model and may have to trace back to the legacy data sources.

**Do not _boil the ocean_**

Model data components for real information requirements that are known to exist or that you know are necessary and are based on actual information sharing scenarios or use cases.

Do not create NIEM data components for every possible contingency or likelihood.
Do not create components that might be nice-to-have or that are "likely" future requirements.
That said, this does not mean you shouldn't model new data requirements that are definitely in near term plans.

Note that it is important to consider real information exchange scenarios and associated use cases that will identify both the existing and new near term requirements.
If possible, envision what the domain should look like in the (not too distant) future and build the to-be model from the as-is baseline.

**Start small scale**

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

**Map data requirements to NIEM**

- Reuse existing data components where possible.
- Identify missing requirements (gap analysis).
- Create new NIEM data components ONLY when needed to cover gaps.
- Consistent with the NIEM NDR and releases (reference schemas).
- Use elements for object properties; elements are far more flexible.
- Use attributes only if absolutely necessary; e.g., very tightly coupled metadata on an element, as attribute `xml:lang` is to an element of type `TextType`.

**Clearly identify data components that will require future harmonization**

with the Core (or with other domains if inputting a domain update).

**Use reference materials to model various NIEM techniques**

- Simple examples exist in the Reference [Concepts]({{ "/reference/concepts/" | relative_url }}) section
that illustrate NIEM techniques such as:  augmentation, association, role, references, metadata, abstract elements and substitution groups, type extension, type adapter, etc.
- Review existing [release reference schemas](https://release.niem.gov/).
- The [change request](https://reference.niem.gov/niem/resource/change-request/) contains examples.
- Use the [reference tools](https://tools.niem.gov), e.g.,Schema Subset Generator, ConTesA, Code List Schema Generator, Migration Assistant, etc.

**During release cycle, provide initial input in NIEM-conformant**

[XML Schema document](https://reference.niem.gov/niem/specification/nameing-and-design-rules/3.0/) (XSD)
or [Change Request](https://reference.niem.gov/niem/resource/change-request/) (XLS) format.

**Domain data models vs. IEPDs**

- Domains contain the reusable building blocks for creating IEPDs; IEPDs are definitions for information exchanges.
- An IEP (Information Exchange Package) is an instance XML document that conforms to an IEPD.
- Differences in purpose, scope, reusability, NDR rules.
- IEPD extensions are candidates for domain content, but each should be evaluated and potentially remodeled.
- Use IEPD repositories to share IEPDs.
- Example IEPD:  Cursor-on-Target MilOps Future Namespace.
- [IEPD versioning]({{ site.data.pages.iepd | append: "versioning/" | relative_url }})
- When building a domain model, concentrate on designing XML data components that can be reused within any IEPD that any domain might build to share data with you. Do NOT build an IEPD for a domain model. To do this, try to design small parts that can be reused independently and are potentially standalone. Do not build a couple of very large monolithic structures. Think in terms of the kinds of small objects you need to represent, so they can be reused in multiple IEPDs.

**The NIEM Lead Developer (GTRI) can and will help you**

- Assists with conformance, quality, and modeling.
- Integrates inputs into the release or DU for your review.
- Can save you extra work and time if you make systemic errors.
- Get preliminary inputs in early for review, feedback, and assistance.

**NIEM Data Component Names and Definitions**

A scalable vocabulary that will be used by many different communities to exchange information must be understandable to all parties involved.  To facilitate consistency and understanding NIEM has established rules for naming and defining its data components.  These rules apply to all types, elements, and attributes.  They were derived from [ISO/IEC Standard 11179](http://metadata-standards.org/11179/), Information Technology -- Metadata Registries (MDR).  This standard has been around since the 1990's and continues to be updated.  For this reason, please do not expect that NIEM rules for names and definitions are exactly synchronous with Standard 11179.  Yet, for the most part, the NIEM Naming and Design Rules (NDR) still generally follow 11179 rules and guidance for designing metadata [definitions](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.4) and [names](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.5).

**How to Draft Data Component Definitions**

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

**How to Design Data Component Names**

The [NIEM NDR](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/) provides fairly clear rules and guidance regarding the naming of data components. The most important NDR sections for understanding NIEM data naming are:

- [Consistent Naming](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_6.5.2). This helps to establish clear meaning. NIEM also follows [ISO/IEC Standard 11179](http://metadata-standards.org/11179/) syntax for data names.
- [ISO 11179 Part 5](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_7.5)
- [Naming Rules](https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8)

**Summary of naming syntax**

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

**Other naming guidance**

- __Avoid use of the term <code>Type</code>__ (except as a representation term to identify the name of a NIEM type). This is reserved for the representation term indicating data typing; instead use <code>Category</code>. Because it is an extremely common concept in all domains, the only current exception is <code>BloodType</code>.

- __Avoid use of the term <code>Number</code> in data names__. Its use is usually too generic to be meaningful or helpful, unless a name is extremely common across all domains (not just a few). For example, the data name <code>TelephoneNumber</code> is common across all domains; in this case, it is most useful for clear meaning. Otherwise, a number should usually be an ID (Identifier), Quantity, Numeric (or Value), Amount, Measure, or Duration (of time) (See: <https://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8.7>).

- __Do NOT use double terms__ (i.e., consecutive identical terms such TypeType or NameName) unless such a term has very specific meaning. Double terms should be replaced with a single instance of the term (as long as it does not detract from the real meaning).

- __ID (Identifier) vs. Identification__ &mdash; <code>ID</code> and <code>Identification</code> elements are easy to confuse. An <code>ID</code> is a string element that uniquely identifies an entity; so, an <code>ID</code> has simple content. An <code>Identification</code> element is a set of sub-elements.  For example, an <code>Identification</code> element for a person usually has sub-elements such as <code>PersonName</code>, <code>PersonHeight</code>, <code>PersonWeight</code>, <code>PersonEyeColor</code>, <code>PersonHairColor</code> <code>IssueDate</code>, <code>ExpirationDate</code>, etc.; so, an <code>Identification</code> element has complex content (i.e., sub-elements). Usually one or more of its sub-elements will be <code>ID</code> elements.

- __<code>Text(Type)</code> vs. <code>Name(Type)</code>__ &mdash; In the construction of NIEM element names, <code>Name</code> and <code>Text</code> are authorized representation terms (of type <code>NameType</code> and <code>TextType</code> respectively). The term <code>Name</code> is a word or phrase that constitutes the distinctive designation of and applies to a specific person, place, thing or concept. This is not necessarily an identifier, for example, there are multiple persons with the name "Bob". <code>Text</code> is a word or phrase in some language (usually English). A <NameType> is a special subset of <TextType>.

- __<code>Date(Type)</code>__ &mdash; The only date and time format supported by W3C XML Schema is a subset of [ISO 8601](https://www.w3.org/TR/xmlschema-2/#isoformats). NIEM uses this for date and time.

- __<code>Indicator(Type)</code>__ &mdash; This term designates NIEM Booleans whose valid values are TRUE or FALSE. Do NOT change these values to YES/NO or 1/0. If required, translation to and from TRUE or FALSE is not difficult.

- __Best examples of data names__ are in the current [NIEM releases](https://release.niem.gov/), in particular NIEM Core [<code>niem-core.xsd v3.0</code>](https://release.niem.gov/niem/niem-core/3.0/niem-core.xsd), or the Core from the most current major release.

## Search NIEM

How to search for NIEM data components:

Although this section does not address NIEM modeling specifically, given the large number of NIEM data components, most modeling efforts will require searching the NIEM model for content to reuse, duplication, examples of content models, points of extension, etc.  This section introduces some basic methods of searching for NIEM content.

### Schema Subset Generation Tool (SSGT)

The [Schema Subset Generation Tool](https://tools.niem.gov/niemtools/ssgt/index.iepd) (SSGT) is one way to search for NIEM data components.  This tool was designed to build and generate NIEM schema subsets.  However, SSGT also contains a convenient search engine that can be used alone.

**Basic Search**

SSGT provides a full text search capability for a NIEM release.  You can enter a search string into the criteria box and view a list of all NIEM data components that contain a lexical match to that string.  The default is to search all data component text records in a single release, including names, definitions, and other metadata text fields.  Namespaces are not part of the standard search.  This is because namespace prefixes are extremely prevalent throughout the model and would tend to clutter most search results.  As will be described later, the user can configure SSGT to search in particular ways.

Search is case independent.  A search for <code>sonty</code> will return the data component <code>PersonType</code>.

SSGT can only search a single release (Later, we discuss a technique for searching multiple releases at once).  The default is to search the most recent (current) operational release.  If you need to search a previous NIEM release you must select it from the "options" menu.

SSGT always requires that you declare the class of the data component you are looking for, and only that class will be in the scope of the search.  This means you must declare one of the following in the dropdown box:

- Property (the default class) - XSD data elements and attributes in a NIEM release.
- Type - XSD data types in a NIEM release; may be complex or simple.
- Namespace - namespaces used in a NIEM release
- Facet - code values in a NIEM release.
- External - profiles of standards used in a NIEM release that are not NIEM conformant (e.g., GML).
- Association - relationships among two or more objects.

Search results are displayed in a list of NIEM data component qualified names, i.e., QName syntax:  namespace prefix, followed by colon character, followed by component name; for example, <code>nc:PersonFullName</code>.

Depending on the outcome of a simple (default) search, a resulting list will have as many as three parts in this order:

1. Exact match on name:  All data names for which the search criteria exactly matched that entire naem (excluding its namespace prefix).
2. Partial match on name:  All data names for which the search criteria matched a substring within that name (excluding its namespace prefix).
3. Match on other metadata:  All data names for which the search criteria matched a substring within its associated data definition or other metadata (including namespace prefixes that may occur within the metadata).

Each part of the search result (if it exists) is sorted alphabetically by Qname, which includes the namespace prefix so that component names are conveniently grouped by namespace.

SSGT does not indicate the two points (if either exists) at which these parts are joined.  The only way to identify these break points is by visually inspecting the result list to find the locations where alphabetic ordering of names restarts.

Each data name is hyperlinked to its associated metadata and relationships.  For an element this includes its definition, keywords (synonyms, if any), usage information (if any), usage examples (if any), its own type, and the types that use this element.  For a type this includes its definition, content style, elements it contains, elements that are of this type, and base types from which it is derived.  For convenience there are many features that help with identification of data components in the display.  Property names (XML element and attribute names) are displayed in blue, and XML type names are displayed in red.  XML element and attribute names are usually displayed with their associated XML type names.  Hovering over a data component name will reveal its definition.  A "details" link to the right of a property name and associated type name will reveal metadata about that property.

Note for MS Internet Explorer 11 users:  This browser must be reconfigured to "compatibility mode" (not its default) for SSGT to work correctly:

1. In MS Internet Explorer 11, open Compatibility View (Tools / Compatibility View Settings).
2. Add tools.niem.gov and/or niem.gov to Compatibility View.
3. Go to <https://tools.niem.gov/> and SSGT Search will work normally.

**Advanced Search**

In general, the SSGT advanced search capability provides additional constraints that limit the scope of a search.

Click <code>Show Advanced</code> to open the SSGT advanced search capabilities.  Here you can constrain the search criteria:

1. with the exact phrase
2. with at least one of the words
3. without the words

or any combination of these constraints.

You can also constrain search to particular metadata fields that you select.  These are Names, Definitions, Keywords (synonyms), Usage (descriptions of how a data component is commonly used), and Example Content (samples of valid values for the element).

You can limit a search to one or more domains by checking/unchecking the appropriate boxes.  If you want to search content outside of all domains (for example, NIEM Core and all code lists), then just check "other".  If you uncheck all boxes the tool will go back to searching the entire model (same as if all boxes are checked).

**Multiple search criteria**

You can enter multiple search terms separated by spaces in the search criteria box.  In this case, SSGT search will return data component records that contain ALL those terms in any order.

**Wildcard search**

SSGT also has one simple wildcard character, an asterisk.  It can be used as many times as desired within the search criteria box.  For example, the following search criteria:

	son\*nor\*sim\*yp

will return:

	aamva\_d20:PersonOrganDonorCodeSimpleType

because this criteria matches this element name.  A single asterisk in the search criteria box will return all data components in the release.  (NOTE:  After a wildcard search SSGT replaces each asterisk in the criteria with a percent character.)

### Movement

Movement enables you to search and explore the content of the NIEM model. It provides a user friendly interface, and smart search results. It is also open source: the community who inspired its creation can contribute to it.

See more [information]({{ "/movement/" | relative_url }}) about Movement and [visit]({{ site.data.links.movement }}) the tool itself.

### NIEM Model Spreadsheet

For anyone relatively new to NIEM, the Model Spreadsheet is an easier way to search, navigate, and explore the model, and familiarize with NIEM content and structure relatively quickly.

Each NIEM release package contains a model spreadsheet that opens with Microsoft Excel.  If you download and unzip a NIEM release package at <https://release.niem.gov/> the spreadsheet will be <code>niem-m.n.xlsx</code> where <code>m</code> is the major (series) version integer, and <code>n</code> is the minor version integer.

The model spreadsheet is organized into the following tabs:

- NIEM Core data components, followed by ...
- Each domain data component set in alphabetical order, followed by ...
- Type Description - a list of all XML types and their definitions
- Elts sorted by type - a list of all XML elements
- Elts sorted by name - a list of all XML elements
- Attributes - a list of all XML attributes
- Namespaces - a list of all namespaces used in the release
- Class Tree - a list of all XML types arranged in a hierarchical derivation tree

Each tab contains a list that also includes various metadata about the data components listed.  Each type is hyperlinked to the location of its definition.  The model spreadsheet is designed to explore types and their associated properties (sub-elements).

Excel menu <code>Find</code> and <code>Search</code> functions also take wildcards.  Asterisk and question mark characters are used for multi- and single-character wildcards respectively.  To find asterisks and question marks in the text, you must escape these characters with a tilde (<code>~</code>).  So, <code>~*</code> and <code>~?</code> will find asterisks and question marks.  To escape the tilde character itself, enter <code>~~</code>.

Excel offers other kinds of wildcards and features that provide search capability similar to regular expressions.  PC users might look at <https://support.office.com/en-us/article/Find-and-replace-text-by-using-regular-expressions-Advanced-eeaa03b0-e9f3-4921-b1e8-85b0ad1c427f#__toc286834987>.  It would be nice in both PC and Mac Excel had identical user interfaces, but that is not the case.  So, for Mac users should check out <http://searchengineland.com/advanced-filters-excels-amazing alternative-to-regex-143680> (and beware, shortcuts for Mac Excel 2011 don't always seem to work as expected).

### Other methods to search NIEM content

**Offline**

Because NIEM is XML-based, most methods of searching NIEM are text oriented.
Almost any good XML tool can be useful.  Common XML editors that can do this are [Altova XMLSpy](http://www.altova.com/xmlspy.html) and [oXygen](https://www.oxygenxml.com/).

Other methods of searching NIEM use full text search capabilities that can quickly scan through large file sets.  NIEM schemas contain an entire textual data dictionary.  Multiple NIEM releases can be searched simultaneously using some version of grep (originally a Unix utility and available natively on an Apple MacIntosh; there are also version that run under Microsoft Windows).  Grep is simple, fast, and facilitates user customization.  By downloading all the NIEM release packages and placing their XML schemas into a single directory, grep can be customized to find and extract any text that can be described by a grep expression.

**Online**

Another method of searching NIEM schemas is through a Google site search.
All NIEM component names and definitions are online in open text, both in their XSD form as well as XHTML.
For example, <https://release.niem.gov/niem/3.2/> is a Web page that indexes all the NIEM 3.2 schema documents.
Furthermore, at <https://release.niem.gov/> are all the NIEM release products since 2006.
Each release is documented in HTML pages rooted at these links:

- [NIEM 3.2 Namespaces Documentation](https://release.niem.gov/niem/NIEM-3.2-namespaces)
- [NIEM 3.1 Namespaces Documentation](https://release.niem.gov/niem/NIEM-3.1-namespaces)
- [NIEM 3.0 Namespaces Documentation](https://release.niem.gov/niem/NIEM-3.0-namespaces)
- [NIEM 2.1 Namespaces Documentation](https://release.niem.gov/niem/NIEM-2.1-namespaces)
- [NIEM 2.0 Namespaces Documentation](https://release.niem.gov/niem/NIEM-2.0-namespaces)
- [NIEM 1.0 Namespaces Documentation](https://release.niem.gov/niem/NIEM-1.0-namespaces)

You can browse these pages that contain the contents of each NIEM release organized by namespace.
The data components in each namespace are listed alphabetically by name, and each name is linked to a page that displays its definition and other metadata.
Each namespace page also contains a direct link to its associated schema document.

You can also search both the release schemas and HTML documentation pages with Google.
To do this, run a Google *site search* on data component names and definitions in the release schemas (XSD) or the namespace documentation pages (XHTML).

For example, in your browser address field, enter:

	site:release.niem.gov/niem/ PersonType

Google search results will contain links to any Web page within the release.niem.gov/niem/ directory that contains a match to <code>PersonType</code>.

You may enter multiple search terms.  For example, enter:

	site:release.niem.gov/niem/ PersonType location

Search results will return links to pages that contain both <code>PersonType</code> and <code>location</code> in any order.
Character case is ignored.

Note that as an Internet search engine, Google generally only indexes full words (tokens surrounded by space or delimiters).
Google also uses "stemming" (recommend you Google that) and other heuristics to find pages with words related to search terms.
So, while SSGT can NOT find substrings within words (i.e., at the lexical level) that match search terms (such as <code>sonty</code> in the earlier example), Google can find partial matches to sets of words in textual paragraphs, sentences, and phrases.
For example, if you enter:

	site:release.niem.gov/niem/ Pers

Google search returns pages that contain the string <code>pers</code> bound by spaces or other delimiters/separators (i.e., <code>pers</code> as a word), but it does not return pages that contain <code>Person</code> or <code>PersonType</code> because it only indexes words (which are bound by delimiter or separator characters; such as spaces, quotes, and other special characters).

Despite this limitation, Google has a number of powerful operators that can be applied to perform advanced site searches on NIEM schemas and documentation pages.  See
[Google Advanced Search Operators](http://www.googleguide.com/advanced_operators_reference.html).

## Mapping to NIEM

This section describes how to map a database, model, dictionary, etc. to NIEM.

Note that this section is NOT meant to be an in-depth treatise on mapping. It is to provide an overview, some guidance, and suggestions for approaching this task. Mapping is usually hard and can be tedious, but it's also necessary for making a legacy system work with NIEM.

**Purpose of mapping**

niem adopters generally do not start without pre-existing data requirements.
they often begin with existing legacy metadata associated with a database or data model.
this metadata usually contains most or all of their data requirements.
niem is designed for sharing information with organizations and communities outside their sphere of influence.
so, the primary targets for mapping to niem are those data requirements that will be shared externally.
That said, a NIEM adopter may choose to map all his/her metadata to NIEM; however, this is not necessary.

Mapping is an important step to NIEM adoption because it:

1. Provides familiarity with the contents of NIEM.
2. Helps a NIEM adopter to consider and evaluate the scope of effort.
For example, it may only be necessary to identify data requirements for sharing information with external entities (and map associated metadata to NIEM).
3. Establishes a detailed record of the semantic and structural associations between existing legacy metadata and NIEM representations.
4. Provides programmers (who will code or modify code for implementing NIEM information exchanges) the guidance for transforming source components to NIEM components and the reverse.

In computing and data management, data mapping is the process of identifying/recording semantic similarity between data elements of different data models or schemas.
Data mapping is used as a first step for a wide variety of data integration tasks that often include data transformation or data mediation between a data source and a destination.

A mapping from a source (model, schema, database, etc.) to NIEM will have three functionally useful parts:

- A record of semantically equivalent data component matches from the source to NIEM.
- A gap analysis that identifies how well NIEM covers the source model or schema. This provides guidance for creating new NIEM components to meet missing data requirements.
- A description (or guidance) that indicates how the source and NIEM can be translated or mediated from one to the other.

### How to map to NIEM

Although heuristics can be applied, few, if any, tools exist that automatically, accurately, and completely map between data models.
There are far too many ways to represent and define data, and everyone has a different perspectives.
A few tools exist that provide some degree of intelligent (often heuristic-based) help by "suggesting" possible matches.
However, mapping between different data models, databases, or data schemas will still require tedious human review.
Most tools that support mapping, help with the organizational and recording aspects.
A spreadsheet is one of the simplest tools for documenting a map between a source (database, model, etc.) and NIEM.
The basic concept of mapping is to match (and align) appropriate metadata components from the source to semantically equivalent or nearly equivalent components in NIEM.

Referring to <https://en.wikipedia.org/wiki/Schema_matching>, two terms are used to describe data mapping and are often used interchangeably: *schema matching* and *mapping*.

- *Schema matching* is the process of identifying that two data objects are semantically related (or equivalent).
- *Mapping* refers to transformations between the data objects or components mapped that translate meaning and preserve meaning from one model to the other.

This NIEM guidance will use the term *mapping* to refer to both, because both schema matching and mapping can be combined into a single document.

### Map construction

Given a spreadsheet paradigm, a row identifies a semantic association (i.e., a match) between a source component and a NIEM component, and describes the nature of that association.

There are generally three possible outcomes for an association: exact, partial, or none.
An *exact match* means that the components are semantically equivalent (or close enough).
At the other extreme, *no match* (none) means that there are no NIEM components that can match or even partially match the source component.
In this case, there will be no NIEM component identified with this record (until one is designed).
This indicates a gap in the mapping for which a new NIEM component is required; that component will be designed (and proposed) later as part of the NIEM adoption and on-boarding process for new domains.
And of course, somewhere between an *exact match* and *no match* lies a *partial match*.

Various types of information may be used to evaluate a match, including (but not limited to):

- Model or schema metadata such as element names, data types, structures, constraints (e.g., cardinality), etc.
- Instance data and usage information.
- Information from dictionaries, thesauri, ontologies, previous matching decisions, and feedback from others.

At present, a small number of NIEM components also include synonym, usage, and sample value information that may be helpful. This information can be found within SSGT (when it exists). The NBAC and Domains are always welcomed and encouraged to suggest additions to this kind of information.

Thus, for a given component of the source model, a matching generally requires three basic parts:

**Source model component**&nbsp;&nbsp;&nbsp;&nbsp; | **NIEM component**&nbsp;&nbsp;&nbsp;&nbsp; | **Description of mapping**
Name                 | Name         |  Nature of semantic match (one of):
Definition           | Definition   |  - exact match
Datatype             | Datatype     |  - partial match
etc.                 | etc.         |  - none (missing in NIEM)
&nbsp;               | &nbsp;       | &nbsp;

For convenience and completeness mappings usually incorporate any additional metadata associated with each source and NIEM component (such as definition, datatype, cardinality, etc.).
Also, a column for general comments/notes (not shown above) is incorporated into most mapping documents to ensure clarity and to record rationales for difficult associations.

### Mapping strategy

While many strategies may exist for performing mapping between models and/or schemas, most of these can be classified into one of two general approaches: top down and bottom up.

Our own experience with mapping to NIEM indicates that a top down approach works best.
This is probably because NIEM tends to employ a top down structure for data representations.
NIEM is object-oriented, and therefore, models real world entities and concepts as collections of properties. The objects/concepts are usually complex and often the properties for such are also complex. So, for example a Person is a complexType, PersonType.
PersonType has properties such as PersonBirthDate, PersonHairColorCode, PersonEyeColorCode, and PersonName. While the first three properties mentioned are simpleTypes, PersonName is type PersonNameType which is a complexType.
PersonNameType breaks down into several simpleType elements representing the various parts of a person's name (such as first, middle, last, etc.).

Using a top down approach, identify the entities represented in your own model (or schemas) and match them to the same objects/concepts in NIEM (if they exist).
There will likely be differences in the properties contained in each pairing.
However, by starting with the top level entities you will likely narrow your search for matching properties at the atomic level.
Map objects and their properties based on semantics not datatype.

Even if semantics of two properties are identical, datatypes will not always be the same. For example, you may determine that the source model represents a person's name as a simple string, <code>Name</code> that concatenates first, middle, and last names.
NIEM represents a person's name as a complex element, <code>PersonName</code>, consisting of three separate string elements <code>PersonGivenName</code> (first), <code>PersonMiddleName</code>, <code>PersonSurName</code> (last).
Each of these is only a partial match to the source element for a person's name.
However, in this example, <code>Name</code> is an exact match to <code>PersonName</code>, and the transformation from one to the other (or reverse) is a simple set of operations that involve either concatenation or parsing depending on the direction of the transform.

If an object or concept in your model does not have an equivalent or similar entity in NIEM, flag it as a potential shortfall. Later you will build this object into NIEM as part of your new domain model (to be discuss later). Likewise, when comparing atomic level object/concept properties you should also flag properties in your model that are not represented in NIEM.

### Handling partial matches

Exact matches and no matches are fairly easy to handle.
An "exact match" reuses a NIEM component as-is, and a "no match" generates a new NIEM component.

However, partial semantic matches tend to be the norm.
Sometimes they can be resolved by breaking down complex types into constituent components and subsequently mapping to them.
However, most schemes and models for data representation have many dimensions that can complicate what would otherwise appear to be an exact or near exact match, including names, semantics, stucture, constraints, datatype, usage, and others.
For this reason, sometimes treating a partial match as "no match" (and subsequently designing new NIEM components) may be more practical and productive.

**[ More to follow, including examples, Change Request, Component Mapping Template ]**

## Evaluate component quality

Considerations in identifying, designing, defining, and structuring data components

Questions to ask or consider about metadata, semantics, and structure while modeling NIEM content.
These can help you decide what to model, how, and what NIEM structures to employ or consider.

For each potential NIEM Core data component (type/property):

1. Is it a NIEM property or type?
- Is it common enough to be part of NIEM Core? (depth of NIEM Core)
- Or is it better used as a Domain extension to NIEM Core?
- Is it required in NIEM information exchanges (IEPD) or messages? (scope)
- What kinds of data exchanges use it or would use it?
- Is it reusable in other messages?
- Can it be used in composing IEPDs?
- Does it overlap multiple requirement sources (models)?
- What data models contain this component or one similar to it? (source/requirement)

2. Is it a characteristic property or subpart of the appropriate NIEM object (type)?
3. Is it too specific (not reusable)?
- Should it be generalized to include in NIEM Core?
- Better used as a Domain extension to NIEM Core?

4. Does this property or type overlap with another? Not distinct?
- Should it be joined with another component?
- Should it be split into multiple components? (too broad)
- Select one; remove the other(s)?

5. Is its name meaningful to NIEM?
- Is it properly named?
- Are the terms of its name meaningful?
- Are there meaningful definitions for each term?
- Are the proper word senses clear or identified within the definition?
- If a name term is local language (i.e., not in OED, or in OED but not using an OED word sense), jargon, acronym, or abbreviation are these terms defined with appInfo in the schema documents in which they are used?

6. Is its definition meaningful in NIEM?
- Is it defined distinctly from other NIEM Core data components?
- Is it distinct from other Domain components?

7. Is it modeled correctly (structurally correct; correspond to real-world)?
- Does it have the right base-types and properties?
- Is it missing common characteristic or subpart properties (simple/complex)?
- Does it contain properties that should be deleted, replaced, or changed?

8. How is it related to other objects (types)?
- Use NIEM associations?
- Use NIEM roles?

9. How is it used? (primary context? multiple contexts?)

## Appendix A - Governance

### Regular meetings

- __NIEM Business Architecture Committee (NBAC)__ &mdash; [NBAC](https://www.niem.gov/about-niem/niem-governance) meets (by teleconference) on the last Thursday of every month from 2:00-3:00pm.  Its primary missions are to identify the data requirements for NIEM, govern NIEM [Core], and assist the domains with the management of their models.  NBAC coordinates with NTAC, the PMO, and the domains.
- __NBAC Content Subcommittee__ &mdash; This group is a standing subcommittee under [NBAC][NBAC] that meets (by teleconference) as often as necessary to resolve issues, refactor (remodel) NIEM content, and harmonize. During a NIEM release cycle this subcommittee meets fairly regularly to prepare for the initial alpha release. Meeting times and dates are subject to change and are established by the lead developer in coordination with subcommittee members.
- __NIEM Technical Architecture Committee (NTAC)__ &mdash; [NTAC](https://www.niem.gov/about-niem/niem-governance) meets (by teleconference) every other week on Wednesday from 1:30-3:00pm.  Its primary missions are to identify new NIEM technical requirements, govern the NIEM architecture (the structure of the model), oversee the NIEM technical specifications and the tool strategy. NTAC coordinates with NBAC, the PMO, and the domains.
- __Program Management Office (PMO)__ &mdash; [PMO](https://www.niem.gov/about-niem/niem-governance) holds a regular coordination meeting (via teleconference) every other Monday from 1:00-2:00pm. This meeting is generally for the PMO staff, goverance committee co-chairs, lead developer, and key representatives of the largest domains.
- A __Joint NTAC/NBAC Face-to-Face meeting__ is generally hosted twice a year by the PMO in the Washington DC area. Exact dates vary, but meetings are generally 2-3 days in Apr/May and Oct/Nov timeframes. Dates are usually timed to coincide with key milestones in a release cycle.  These meetings are generally for all NBAC and NTAC members, all domain stewards or representatives, the lead developer, and the PMO staff. These meetings have multiple purposes, including reviewing material for a developing release, technical updates, reviewing the previous year, planning the next year, coordination between NBAC and NTAC, etc.

### Email lists

If you are a domain representative, an NBAC member, or an NTAC member you may want to register for one or more of the following resources in order to participate more fully in NIEM governance and its associated processes.

- [NIEM Technical Architecture Committee](mailto:ntac@lists.gatech.edu (NTAC); [request to be added](mailto:ntac-request@lists.gatech.edu) (requires PMO approval).
- [NIEM Business Architecture Committee](mailto:nbac@lists.gatech.edu) (NBAC); [request to be added](mailto:nbac-request@lists.gatech.edu) (requires PMO approval).
- [NIEM Configuration Control Tool (NCCT)](https://niem.gtri.gatech.edu/ncct/); for PMO, governance, and domain staffs; [request account](mailto:pgmw-system@gtri.gatech.edu)
- Collaboration zones for PMO, governance, and domain staffs; [request to be added](https://www.niem.gov/contact-us)
- [Conformance Testing Assistant](https://tools.niem.gov/contesa/) (ConTesA); public; [request account](https://tools.niem.gov/contesa/registration)
- [NIEM GitHub](https://niem.github.io/); public; [sign-up for GitHub account](https://github.com/)

### Questions and feedback

If you are a domain representative developing NIEM content or maintaining your domain namespace, or if you are an NBAC or NTAC member, then please talk directly to the lead developer for technical assistance. This is your privilege as a member of NIEM governance. The lead developer (GTRI) participates in all NIEM governance meetings, so please don't hesitate to ask the lead developer for technical help. They will be happy to schedule a telephone appointment to talk with you. Asking questions, making suggestions or recommendations through these resources are more for your constituents. You can use these resources too, but for technical assistance it is usually faster to contact the lead developer directly.

- General technical comments and feedback:  <niem-comments@lists.gatech.edu>
- NIEM Contact Center:  <information@niem.gov>
- NIEM Contact Center:  <https://www.niem.gov/contact-us>

## Appendix B - Resources

URLs to releases, technical references, tools, templates, and other aids

----

**Releases** | **URL** | **Notes**
------------ | ------- | ---------
All NIEM release packages             | <https://release.niem.gov/>          |
NIEM domain updates, core supplements | <https://publication.niem.gov/>      |
NIEM 5.0 release                      | <https://release.niem.gov/niem/5.0/> |

----

**References** | **URL** | **Notes**
-------------- | ------- | ---------
NIEM technical references            | <https://niem.github.io/reference/>           |
NDR Schematron rules | <https://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/niem-ndr-5.0.zip> | use with Oxygen |
NIEM 2.1 UML profile                 | <http://www.omg.org/spec/NIEM-UML/1.0/>       | for NIEM 2.1 only
NIEM 3.0 UML profile                 | <http://www.omg.org/spec/NIEM-UML/3.0/Beta1/> | NIEM 3.0, 3.1, 3.2
Conformance Specification v5.0       | <https://reference.niem.gov/niem/specification/conformance/5.0/>                     |
Naming and Design Rules (NDR) v5.0   | <https://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/>         |
Conformance Targets Attribute Specification v3.0     | <https://reference.niem.gov/niem/specification/conformance-targets-attribute/3.0/> |
Code Lists Specification v4.0        | <https://reference.niem.gov/niem/specification/code-lists/4.0/>                          |
Information Exchange Package Documentation (IEPD) Specification v5.0 | <https://reference.niem.gov/niem/specification/model-package-description/5.0/>   |
High Level Version Architecture v3.0 | <https://reference.niem.gov/niem/specification/high-level-version-architecture/3.0/> |
Change request v1.0                  | <https://reference.niem.gov/niem/resource/change-request/>                           |
Wantlist schemas (all versions)      | <https://reference.niem.gov/niem/resource/wantlist/>                                 |

----

**Reference Tools** | **URL/Email** | **Notes**
------------------- | ------------- | ---------
NIEM online reference tools                | <https://tools.niem.gov/>                              |
Schema Subset Generation Tool (SSGT) &nbsp;| <https://tools.niem.gov/niemtools/ssgt/index.iepd>     | Search, XML subsets
Conformance Testing Assistant (ConTesA)    | <https://tools.niem.gov/contesa/>                      |
Code List Schema Generator                 | <https://tools.niem.gov/niemtools/codelist/index.iepd> | Legacy; for NIEM 2.0
NIEM GitHub                                | <https://niem.github.io/>                              |
NIEM Releases Issue Tracker                | <https://github.com/niem/niem-releases/issues>         | For content-related issues

----

**Other Tools** | **URL/Email** | **Notes**
--------------- | ------------- | ---------
Wayfarer (online; by Tom Carlson)       | <http://niemwayfarer.org/>                       | search NIEM
Wayfarer (for download; by Tom Carlson) | <http://niemwayfarer.org/tools/niemsaw/>         | search NIEM
Oracle Content Assembly Mechanism (CAM) | <https://sourceforge.net/projects/camprocessor/> | XML editor, validator, designer
MITRE Openii                            | <http://openii.sourceforge.net/>                 | information integration tool suite
Altova XMLSpy                           | <http://www.altova.com/xmlspy.html>              | XML editor (not free)
Altova NIEM solutions                   | <http://www.altova.com/solutions/niem.html>      | other Altova support for NIEM
Oxygen XML Editor                       | <https://www.oxygenxml.com/>                     | XML editor (not free)

----

**Other Resources** | **URL** | **Notes**
------------------- | ------- | ---------
NIEM home                              | <https://www.niem.gov/>                                             |
Change request                         | <https://reference.niem.gov/niem/resource/change-request/>      |
IEPD Clearinghouse                     | <https://www.it.ojp.gov/niss/> | mostly older IEPDs
ISO/IEC Standard 11179 Information Technology -- Metadata Registries (MDR) | <http://metadata-standards.org/11179/> | guidance for names and definitions

## Appendix C - NIEM glossary

This appendix defines terminology associated with NIEM. The first section defines common terms that are not formally defined in NIEM specifications. Subsequent sections reference the definitions for terms used in the NIEM specifications. Each list is sorted alphabetically.

**Common NIEM terms**

- __coordinated domain update__ &mdash; A NIEM [domain update] that is a collaborative effort among multiple (two or more) domains. Simultaneously, each domain releases a new version of (update to) its namespace(s). Together these updates will be [harmonized][harmonization] and [coherent][coherence].
- __data component__ &mdash; An NIEM XML element, attribute, or type.
- __funneling__ &mdash; Describes a process for subjective reviewing of an intermediate [NIEM release]. Once governance has reviewed, identified, and resolved a subjective modeling issue within an intermediate release, the issue is closed and will not be reopened in a subsequent review during that [release cycle].  Funneling begins at the start of a [beta] release. Note that funneling is only applicable to subjective issues; errors in the model will be corrected at anytime during the [release cycle].
- __intermediate release__ &mdash; An [alpha], [beta], or [release candidate] release (i.e., not an operational release).
- __term__ &mdash; A word, acronym, or abbreviation concatenated in upper camel case with other terms to form a NIEM data component name.  For example, the NIEM data component name <code>nc:PersonSSNIdentification</code> consists of three terms: <code>Person</code>, <code>SSN</code> (an acronym for Social Security Number), and <code>Identification</code>.
