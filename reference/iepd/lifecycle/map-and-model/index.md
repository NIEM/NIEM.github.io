---
title: Map and Model
icon: fa-map-signs
description: Review the data requirements captured during the previous phase and discover if there are similar components in NIEM.  Document results in a mapping spreadsheet.  Begin modeling the data requirements without a match in NIEM; these will be later added added to the IEPD as extensions.
---

{{ page.description}}

{:toc}
- TOC

## Purpose

Some IEPD developers skip the mapping document and go straight from documenting data requirements in the previous step to building schemas in the next step.  This can be done and a mapping document is not a required artifact in an IEPD; however, this kind of mapping can provide the following advantages:

- Provides an easy way to allow others to review and confirm mapping and modeling decisions before beginning to build extension schemas.

  *It can be useful to allow others, especially subject matter experts involved with the exchange, to review the work in progress.  Spreadsheets are typically easier to use when reviewing lists of elements names and definitions, plus can be used to capture comments and feedback.*

- Clearly captures the source data requirement for each of the properties that will appear in the exchange.

  *This information is often fairly obvious during development, but can be easily forgotten over time or lost as the original IEPD developers move on to other projects.  Reverse-engineering where initial requirements came from at a later date can be challenging.*

## Map requirements to NIEM

Identifying and recording mapping is a manual process.  It becomes easier as you gain familiarity with NIEM and learn what's available and where things are, but can be slow-going for those new to NIEM.  There is no automated way of identifying matches.  For each data requirement, NIEM should be searched and the success or failure of that search should be recorded.

### How to search NIEM

There are multiple ways NIEM can be searched for matches.

Tool / Product | Description
--- | ---
**[SSGT]({{ site.data.pages.ssgt | relative_url }})** | Use the SSGT to search any NIEM release.  Property, type, and code information will be available.
**[Movement]({{ site.data.pages.movement | relative_url }})** | Use Movement to search the current NIEM release.  Movement has a fast search capability and a more modern UI, but note that some information about NIEM is not displayed, like abstract elements, associations, code sets, and type details like inherited properties.
**[Model spreadsheet]({{ "/reference/release/artifacts#model-spreadsheet" | relative_url }})** | Download the model spreadsheet that comes with a NIEM release and review property and type information in Core and domain-specific tabs.
**[Release schemas]({{ "/niem-releases/" | relative_url }})** | Download a NIEM release package and explore the model in an XML or text editor.
**[Tools catalog]({{ site.data.links.tools_catalog }})** | Check the Tools Catalog on niem.gov for a listing of third-party tools, some of which can be used to search and discover content in the NIEM model.

### Mapping spreadsheet

A mapping spreadsheet should have three main sections:

**Data requirements for the exchange**

- Data requirements should have been collected as part of the *Analyze Requirements* stage.
- Include as much information as available.  Field / element names are the required minimum.  Additional information like definitions and basic type info should be included if present.
- This is usually captured on the left-hand side of the mapping spreadsheet.

**Mapping status**

- Record whether a match exists in NIEM for the local data requirement.
- When a match isn't found, this status should be recorded explicitly rather than left as a blank.  It can be difficult to tell if a blank value in the mapping status means that there is no match, or if it means that the row simply hasn't been reviewed yet.

**NIEM information**

- At a minimum, capture the namespace prefix and name for the matching property in NIEM.
- If it's helpful, especially for review, also capture additional information like the type and definition of the NIEM property.

#### Simple example

The most basic kind of a mapping spreadsheet is shown below.  This is the minimum amount of information needed to capture mappings between data requirements and NIEM components.

Data requirements | Mapping | NIEM
--- | --- | ---
first | map | nc:PersonGivenName
middle  | map | nc:PersonMiddleName
last | map | nc:PersonSurName
DOB | map | nc:PersonBirthDate
work experience | map | em:PersonEmploymentExperienceText
facebook username | no match |

#### Template and examples

NIEM provides a mapping spreadsheet template that can be used to both document mappings and to begin modeling extensions.  To use the spreadsheet for mappings only, focus on the "Property" tab and ignore the other tabs unless needed.  Customize the spreadsheet by hiding columns that won't be needed.

See the **[Mapping Spreadsheet]({{ "/reference/iepd/artifacts/mapping-spreadsheet/" | relative_url }})** page under the [IEPD Artifacts]({{ "/reference/iepd/artifacts/" | relative_url }}) section for the template and for a spreadsheet with some example data filled in.

## Model extensions

IEPD developers can begin to plan out and model the content that does not map to NIEM and therefore will need to be added in extension schemas.

See the [Mapping Spreadsheet -- Modeling examples]({{ "/reference/iepd/artifacts/mapping-spreadsheet/#modeling-examples" | relative_url }}) section for basic information about modeling new extensions in the mapping spreadsheet.

The following are some very basic tips for getting started with modeling new extensions:

### Create new properties

{:.tip}
> See the **[Property]({{ "/reference/concepts/property/" | relative_url }})** section under *Reference / Concepts* for more details about the various kinds of properties in NIEM, along with naming and definition tips and examples.

Come up with NIEM-conformant property names and definitions.

NIEM property names are composed of class terms, property terms, qualifier terms, and representation terms.

NIEM definitions for properties that carry a value (like a string, boolean, or number) should begin with the standard opening phrases provided by the [NIEM Naming and Design Rules (NDR)]({{ site.data.pages.ndr | relative_url }}).

### Determine what types to use

{:.tip}
> See the **[Type]({{ "/reference/concepts/type/" | relative_url }})** section under *Reference / Concepts* for more details about the various kinds of types in NIEM, along with examples.

#### Reuse a NIEM type

Reuse a type directly from NIEM if possible.

{:.example}
> If `nc:PersonType` already contains everything needed for a new vice principal element, reuse that type from NIEM as is.

IEPDs can reuse types from Core, a domain (even if the domain doesn't directly relate to the IEPD's subject matter), a code set, or any other namespaces in NIEM.

Very frequently reused types in NIEM include `nc:PersonType`, `nc:OrganizationType`, `nc:ActivityType`, `nc:LocationType`, `nc:ContactInformationType`, `nc:ItemType`, `nc:TextType`, and `nc:DateType`.

If a NIEM type is close but doesn't quite fit all of the requirements, then there are several options:

#### Create an augmentation

Create an [augmentation]({{ "/reference/concepts/augmentation/" | relative_url }}) if the NIEM type is semantically a match but needs some extra properties added.

{:.example}
> If `nc:PersonType` seems like a good fit for the new vice principal element but the IEPD needs a few extra person-related properties that aren't specific to a vice principal (like a LinkedIn profile URL), create an augmentation.

#### Create an extension

Create a typical [type]({{ "/reference/concepts/type/" | relative_url }}) extension if the requirements need a specialization of a NIEM type.  This is also known as type inheritance or type specialization.

{:.example}
> If the IEPD needs to model a train, `nc:VehicleType` should be extended.  An augmentation would not make sense here because additional train-specific properties for things like locomotive and number of cars would not apply for other generic vehicles.

#### Create an association

Create an [association]({{ "/reference/concepts/association/" | relative_url }}) if the requirements need to relate two or more peer-level objects, often within a certain date range.

Associations can be especially useful to eliminate duplication in messages for many-to-many relationships.

{:.example}
> If the IEPD needs to relate teachers and students, and also needs to capture information like grade, subject, and class period, create an association.  This can be used to represent that one teacher might instruct one subject all day to different groups of students while another teacher might instruct the same group of students all day.  The basic information about the teachers and students would appear once in the message, and then multiple instances of the association could be used, each containing pointers to the teacher and student data objects, plus the data values for the class-specific information.

#### Create a role

Create a [role]({{ "/reference/concepts/role/" | relative_url }}) if:

1. the requirements need a specialization of a NIEM type,
2. the object being modeled could appear in different contexts or with different functions, and
3. duplication of content is a concern in the messages

{:.example}
> If the IEPD needs to model a vice principal with specific properties for that position, but the person may also need to be represented in the IEPD as a coach and as a study hall monitor, then a role could be created.  The role types for vice principal, coach, and monitor would each contain a pointer to person object, so basic person information does not have to be duplicated in the message.

#### Create a new type

Create a brand new [type]({{ "/reference/concepts/type/" | relative_url }}) when no type in NIEM matches requirements.

{:.tip}
> The type should still likely extend `structures:ObjectType` in NIEM.  This will allow it to be referenced, link to metadata, and contain security markup information.

### Create code sets

If similar code sets exist in NIEM and the local codes from the data requirements can be mapped to them, try to use the NIEM version for better interoperability.

#### Create new code types

If that is not an option or a similar code set does not exist in NIEM, create the [code set]({{ "/reference/concepts/facet/" | relative_url }}).

#### Create a union type

If an existing NIEM code set has most of the code values needed, but the IEPD requires a few extra codes, a [union type]({{ "/reference/concepts/type/simple/union/" | relative_url }}) can be created.  Union types allow separate simple types to be combined together so multiple code sets can be combined into a single simple type without duplication.

#### Add the code element

A new code element should be created for the new code set type.  This element can either then be added directly to an extension type or to a [substitution group]({{ "/reference/concepts/property/substitutable/" | relative_url }}) in NIEM if one exists.

{:.example}
- Add new code element `ext:ClassSubjectCode` as a sub-element of type `ext:ClassType`.
- Add new code element `ext:PersonHairColorCode` as a substitution for NIEM element `nc:PersonHairColorAbstract`

## Output

The mapping spreadsheet, filled with exchange data requirements, matching components in NIEM, and optionally containing information about how to start building extensions, will be used in the next phase of IEPD development, *Build and Validate*.  This spreadsheet should also be included in the final IEPD package.
