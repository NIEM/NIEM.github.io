---
title: Tutorials
---
The tutorial area will provide step-by-step instructions on how to build a moderately complex IEPD. Material from the "Hello World" series, patterns, and the NDR section of the developer support network will be used in the tutorials.

---

## How to create an Information Exchange Package Documentation&nbsp;(IEPD)

{% assign iepd_url = "http://reference.niem.gov/niem/specification/model-package-description/3.0/model-package-description-3.0.html#definition_information_exchange_package_documentation" %}

The [NIEM](https://www.niem.gov) [IEPD]({{ iepd_url }}) is the primary artifact of a [NIEM](http://NIEM.gov) data exchange, containing all schema necessary to validate the content of a data exchange. It is also contains documentation, business rules, search and discovery metadata, sample instances and any other artifacts included by developers. The [IEPD]({{ iepd_url }}) development process outlined here is a nominal procedure for developers to give an outline of the steps necessary to create an [IEPD]({{ iepd_url }}). It has been written to address the needs of all developers. Some steps may not apply for a specific development team and the process should be customized as required.

1. Analyze IEPD requirements
1. Search and generate subset using NIEM SSGT for components that meet the IEPD data requirements.
1. Create IEPD Extension for extensions, restrictions and new content
1. Create IEPD additional artifacts for such as mpd-catalog, schematron rules, xml-catalogs, example instances, documentation etc.
1. Validate the IEPD with MPD Specification and ConTesa
1. Publish an IEPD in the appropriate registry.

### Analyze IEPD requirements

Each IEPD stakeholder will have different methods on how to analyze IEPD data requirements, security requiremnts, etc. NIEM does not prescribe how this step should be performed.

### Searching and genearting a subset using NIEM SSGT

Each IEPD stakeholder will have different methods on how to analyze IEPD data requirements, security requiremnts, etc. NIEM does not prescribe how this step should be performed.


1. Open the NIEM <a href="http://tools.niem.gov/niemtools/ssgt/index.iepd">SSGT Tool</a>
1. Search for components that meet the IEPD data requirements and add them to the subset.
1. Generate a subset schema
1. Save subset in working directory

---

## How to write an extension schema

The extension schema is utilized to extend components in a NIEM reference schema or create new components. Generally at least one extension schema is needed, however, are not required.


1. Create a new Schema (.xsd) file using your preferred editor.
1. Copy the conformant schema framework into your Schema editor.
1. Add namespace prefixes to the schema.
1. Import namespaces in the schema.
1. Develop schema components as required.
1. When finished, save the extension schema to the *extension* folder in your IEPD package.

### Example extention schema

**SuperHero-extension.xsd**  
![A screenshot of the SuperHero-extension.xsd XML code](./assets/extension-schema.jpg)

### How to create additional artifact

Additional artifacts are required in an IEPD. An mpd-catlog is required and must conform to the mpd specification. Other artifacts such as schematron rules, xml-catalogs, example instances, documentation etc. are also required however will not be covered in this tutorial. Schematron rules are not required but can be used to ensure the IEPD is following required business rules. A basic xml-catlog will get generated with the subset and can be modified as necessary. A sample xml instances is required per the MPD Specification and an be generated using any XML tool.


1. Creating an mpd-catlog.

### Creating an mpd-catalog

*Future work*

---

## How to develop NIEM conformant schema components

The following are the NIEM types and properties available for use in NIEM conformant schema. Not all types and properties will be utilized in every schema. Many extension schema will consist only of a few complex object types and their property declarations. Types and properties should be selected based on the exchange requirements.

<table class="table table-hover">
  <thead>
    <tr>
      <th style="width: 200px;">Basic Objects</th>
      <th style="width: 250px;">Patterns</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Simple</td>
      <td>
        Develop a simple object type<br />
        Develop a simple object property
      </td>
      <td>A simple object asserts the existence of an object that is fully described by a single fact or datum. A simple object is based on a Schema built-in type and may restrict possible values using Schema constraining facets.</td>
    </tr>
    <tr>
      <td>Code</td>
      <td>Develop a code object type</td>
      <td>A code object is a specialized form of a simple object that constrains a Schema built-in type to a set of enumerated values(i.e. a "code list").</td>
    </tr>
    <tr>
      <td>Complex</td>
      <td>Develop a complex object property</td>
      <td>A complex object asserts the existence of an object that is described by one or more properties. Each property asserts a characteristic of that object.</td>
    </tr>
    <tr>
      <td>Association</td>
      <td>
        Develop an association type<br />
        Develop an association property
      </td>
      <td>An association asserts that a relationship exists between one or more objects. The objects associated are properties of the association.</td>
    </tr>
    <tr>
    </tr>
  </tbody>
</table>


<table class="table table-hover" style="margin-top: 2em;">
  <thead>
    <tr>
      <th style="width: 200px">Special-case Objects</th>
      <th style="width: 250px">Patterns</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Metadata</td>
      <td>
        Develop a metadata type<br />
        Develop an metadata property
      </td>
      <td>A metadata object asserts extra characteristics about another object that are not necessary for describing the other object outside of the data exchange.</td>
    </tr>
    <tr>
      <td>Augmentation</td>
      <td>
        Develop an augmentation type<br />
        Develop an augmentation property
      </td>
      <td>An augmentation asserts a characteristic of an object that is a set of reusable properties. An augmentation may be used to add properties to a objects without having to use direct type inheritance. (e.g. a <em>MilitaryPersonAugmentation</em> property may be used to add extra properties to a <em>Person</em> object without using type inheritance).</td>
    </tr>
    <tr>
      <td>Adapter</td>
      <td>
        Develop an adapter type<br />
        Develop an adapter property
      </td>
      <td>An adapter allows schema components from external schema to be used in NIEM.</td>
    </tr>
  </tbody>
</table>

<table class="table table-hover" style="margin-top: 2em;">
  <thead>
    <tr>
      <th style="width: 200px">Special-case Properties</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Develop a role property</td>
      <td>A role property asserts a characteristic of an object that can be described by a role that an object may function in (e.g. a "person" object may function in the "role of victim" or the "role of witness" or both).</td>
    </tr>
    <tr>
      <td>Develop an abstract property</td>
      <td>An abstract property asserts a characteristic of an object that can be described by a set of possible objects (e.g. a region is described by a shape, which could be a circle, square, triangle, etc.).</td>
    </tr>
  </tbody>
</table>
