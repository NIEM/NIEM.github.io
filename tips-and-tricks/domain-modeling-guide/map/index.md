---
title: How to map a database, model, dictionary, etc. to NIEM
---
Note that this section is NOT meant to be an in-depth treatise on mapping. It is to provide an overview, some guidance, and suggestions for approaching this task. Mapping is usually hard and can be tedious, but it's also necessary for making a legacy system work with NIEM. 


## Purpose of mapping

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


## How to map to NIEM

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

----

### <&mdash;&mdash; Return to:  [Table of Contents](./index.html)

----
