---
title: NIEM Snippets
icon: fa-code
description: NIEM XML follows a regular, well-defined syntax.  Snippets can be used to quickly and consistently fill in standard syntax, leaving users to fill in the blank or partially-filled in values for fields like name and definition.
---

{{ page.description }}  Snippets are currently provided for NIEM XML constructs.

{:toc}
- TOC

## Overview

The following is an example of a snippet or a template to create a basic element in NIEM.  It includes the standard schema syntax required by the NDR, but leaves the fields for the element's name, type, and definition blank for the user to fill in:

```xml
<xs:element name="" type="" nillable="true">
  <xs:annotation>
    <xs:documentation></xs:documentation>
  </xs:annotation>
</xs:element>
```

This is a very simple example, but it's the kind of thing schema developers have to do over and over again.  There is often built-in support in XML editors, including Oxygen, for schema syntax, but those provide for a wider range of options than NIEM allows.  These NIEM-specific snippets provide an easy way for developers to quickly stub out the exact syntax the NDR requires and focus on filling in the semantics.  It's easier, for example, to create a new augmentation when all you need to do is fill in the blanks rather than figure out how to get the syntax right as well.

There are over two dozen snippets provided, ranging from simple snippets for an individual concept, snippets that stub out an entire namespace, and snippets that provide templates for related concepts at the same time.

Snippets are also available on this site for users who do not have the Oxygen XML Editor.  Go to the [Reference / Concepts]({{ "/reference/concepts/" | relative_url }}) section, navigate to the appropriate topic, and copy/paste the relevant snippets from the XML or JSON sections to your editor of choice.  For example, a snippet to create a new element is available [here]({{ "/reference/concepts/property/element/xml/#schema-template" | relative_url }}).

## Demo

Load NIEM snippets into Oxygen in order to easily insert common templates into NIEM domain or IEPD extension schemas:

- Load NIEM snippets (see instructions below)
- Type `niem` into an XML schema file
- Hit Ctrl + Space (Windows) or Cmd + Space (Mac) to see a list of applicable snippets with names that begin with "niem"
- Find and select the appropriate snippet
- Fill in the empty or partially-filled fields; update default values as necessary

![NIEM Oxygen snippet demo](./images/niem-snippet-demo.gif)
{:.bordered}

## Available NIEM snippets

{:.note}
> The snippets include some commonly-used default values.  If the given defaults are wrong for your typical scenario, you can customize them in Oxygen.  Some are tailored more for IEPD developers than domain modelers, especially those relating to default cardinalities.  See the instructions on how to [modify a snippet](#modify-a-snippet).

### Property snippets

The following snippets provide template for various kinds of NIEM properties.

<table>
  <thead>
    <th style="width: 20%">Label</th>
    <th style="width: 35%">Description</th>
    <th style="width: 35%">Example pattern</th>
    <th style="width: 10%">Info</th>
  </thead>
  <tr>
    <td>niem-elt</td>
    <td>NIEM element</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/agriculture.xsd#L222-L226">ag:AgricultureProductionPlan</a></td>
    <td><a href="https://niem.github.io/reference/concepts/property/element/">Info</a></td>
  </tr>
  <tr>
    <td>niem-elt-abstract</td>
    <td>NIEM abstract element</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L1578-L1582">st:RoadwayGradeAbstract</a></td>
    <td><a href="https://niem.github.io/reference/concepts/property/abstract/">Info</a></td>
  </tr>
  <tr>
    <td>niem-elt-augPoint</td>
    <td>NIEM augmentation point element (abstract)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/infrastructureProtection.xsd#L214-L218">ip:SectorAugmentationPoint</a></td>
    <td><a href="https://niem.github.io/reference/concepts/augmentation/point/">Info</a></td>
  </tr>
  <tr>
    <td>niem-elt-substitution</td>
    <td>NIEM substitutable element</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L1583-L1587">st:RoadwayGradeCode</a></td>
    <td><a href="https://niem.github.io/reference/concepts/property/substitutable/">Info</a></td>
  </tr>
  <tr>
    <td>niem-attribute</td>
    <td>NIEM attribute</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L2362-L2366">mo:codespaceID</a></td>
    <td><a href="https://niem.github.io/reference/concepts/property/attribute/">Info</a></td>
  </tr>
</table>

### Type snippets

The following snippets provide templates for various kinds of NIEM types.

<table>
  <thead>
    <th style="width: 20%">Label</th>
    <th style="width: 35%">Description</th>
    <th style="width: 35%">Example pattern</th>
    <th style="width: 10%">Info</th>
  </thead>
  <tr>
    <td>niem-type-object</td>
    <td>NIEM object type <br/>(has sub-properties)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/infrastructureProtection.xsd#L87-L102">ip:SectorType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/type/ccc/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-csc</td>
    <td>NIEM complex type with simple content <br/>(has a value and attributes)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L622-L631"> st:MedianCategoryCodeType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/type/csc/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-simple</td>
    <td>NIEM simple type <br/>(has a value)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L776-L787">mo:MGRSCoordinateStringSimpleType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/type/csc/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-enum</td>
    <td>NIEM simple type with enumerations (has a value from a given set of codes)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L570-L621"> st:MedianCategoryCodeSimpleType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/type/simple/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-list</td>
    <td>NIEM simple list type <br/>(has a space-separated list of values)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/niem-core.xsd#L2286-L2291">nc:IntegerListSimpleType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/type/simple/list/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-union</td>
    <td>NIEM simple union type <br/>(combines codes from multiple types)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/biom.xsd#L5402:L5407">biom:FrictionRidgePositionCodeSimpleType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/type/simple/union/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-adapter</td>
    <td>NIEM adapter type <br/>(wraps an element from an external standard)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L2267-L2282">mo:WGS84EllipseType</a></td>
    <td><a href="https://niem.github.io/reference/concepts/adapter/">Info</a></td>
  </tr>
</table>

### Combo snippets

The following snippets provide templates for two or more related NIEM components that are often built at the same time.

<table>
  <thead>
    <th style="width: 20%">Label</th>
    <th style="width: 35%">Description</th>
    <th style="width: 35%">Example pattern</th>
    <th style="width: 10%">Info</th>
  </thead>
  <tr>
    <td>niem-assn-2</td>
    <td>
      NIEM association type <br/>
      NIEM association element
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L122-L136"> mo:AircraftTargetAssociationType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L2387-L2391"> mo:AircraftAssignedTargetAssociation</a>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/association/">Info</a></td>
  </tr>
  <tr>
    <td>niem-assn-3</td>
    <td>
      NIEM association type <br/> NIEM association element <br/> NIEM association augmentation point
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L122-L136"> mo:AircraftTargetAssociationType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L2387-L2391"> mo:AircraftAssignedTargetAssociation</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L2392-L2396"> mo:AircraftTargetAssociationAugmentationPoint</a>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/association/">Info</a></td>
  </tr>
  <tr>
    <td>niem-aug-2</td>
    <td>
      NIEM augmentation type <br/>
      NIEM augmentation element
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/intelligence.xsd#L155-L170"> it:PersonAugmentationType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/intelligence.xsd#L399-L403"> it:PersonAugmentation</a>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/augmentation/element/xml-container/">Info</a></td>
  </tr>
  <tr>
    <td>niem-code-2</td>
    <td>
      NIEM code simple type <br/>
      NIEM code CSC type
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L570-L621"> st:MedianCategoryCodeSimpleType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L622-L631"> st:MedianCategoryCodeType</a> <br/>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/facet/">Info</a></td>
  </tr>
  <tr>
    <td>niem-code-3</td>
    <td>
      NIEM code simple type <br/>
      NIEM code CSC type <br/>
      NIEM code element
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L570-L621"> st:MedianCategoryCodeSimpleType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L622-L631"> st:MedianCategoryCodeType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/st.xsd#L1518-L1522"> st:MedianCategoryCode</a> <br/>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/facet/">Info</a></td>
  </tr>
  <tr>
    <td>niem-code-4</td>
    <td>
      NIEM code simple type <br/>
      NIEM code CSC type <br/>
      NIEM abstract element <br/>
      NIEM substitutable code element
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L1418-L1439"> mo:SignalDirectionCodeSimpleType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L1440-L1449"> mo:SignalDirectionCodeType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L3457-L3461"> mo:SignalDirectionAbstract</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L3462-L3466"> mo:SignalDirectionCode</a> <br/>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/facet/">Info</a></td>
  </tr>
  <tr>
    <td>niem-metadata-2</td>
    <td>
      NIEM metadata type <br/>
      NIEM metadata element
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/niem-core.xsd#L2902-L2939"> cui:DocumentMarkingMetadataType</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/niem-core.xsd#L10138-L10142"> cui:DocumentMarkingMetadata</a> <br/>
    </td>
    <td><a href="https://niem.github.io/reference/concepts/metadata/">Info</a></td>
  </tr>
  <tr>
    <td>niem-type-object-2</td>
    <td>
      NIEM augmentation point element <br/>
      NIEM object type
    </td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/infrastructureProtection.xsd#L214-L218">ip:SectorAugmentationPoint</a> <br/>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/infrastructureProtection.xsd#L87-L102">ip:SectorType</a>
      </td>
    <td><a href="https://niem.github.io/reference/concepts/type/ccc/">Info</a></td>
  </tr>
</table>

### Schema snippets

The following snippets can be used to initialize a NIEM XML schema and includes a general template for the schema header, definition, local terminology section, and import statements.

<table>
  <thead>
    <th style="width: 20%">Label</th>
    <th style="width: 35%">Description</th>
    <th style="width: 35%">Example pattern</th>
    <th style="width: 10%">Info</th>
  </thead>
  <tr>
    <td>niem-schema-4-ref</td>
    <td>NIEM 4.0-style reference schema template (for a release schema)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-4.0/niem/domains/intelligence/4.0/intelligence.xsd#L1-L23">Schema header for the NIEM 4.0 Intelligence domain schema</a></td>
    <td><a href="https://niem.github.io/reference/concepts/namespace/">Info</a></td>
  </tr>
  <tr>
    <td>niem-schema-4-ext</td>
    <td>NIEM 4.0-style extension schema template (for an IEPD schema)</td>
    <td><a href=""></a></td>
    <td><a href="https://niem.github.io/reference/concepts/namespace/">Info</a></td>
  </tr>
  <tr>
    <td>niem-schema-5-ref</td>
    <td>NIEM 5.0-style reference schema template (for a release schema)</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/intelligence.xsd#L1-L39">Schema header for the NIEM 5.0 Intelligence domain schema</a></td>
    <td><a href="https://niem.github.io/reference/concepts/namespace/">Info</a></td>
  </tr>
  <tr>
    <td>niem-schema-5-ext</td>
    <td>NIEM 5.0-style extension schema template (for an IEPD schema)</td>
    <td><a href=""></a></td>
    <td><a href="https://niem.github.io/reference/concepts/namespace/">Info</a></td>
  </tr>
</table>

### Other snippets

The following snippets provide additional NIEM templates.

<table>
  <thead>
    <th style="width: 20%">Label</th>
    <th style="width: 35%">Description</th>
    <th style="width: 35%">Example pattern</th>
    <th style="width: 10%">Info</th>
  </thead>
  <tr>
    <td>niem-enum</td>
    <td>NIEM enumeration</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L199-L203">Code "APPROVED"</a></td>
    <td><a href="https://niem.github.io/reference/concepts/facet/">Info</a></td>
  </tr>
  <tr>
    <td>niem-import</td>
    <td>NIEM import statement for a conformant namespace</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L60">Import NIEM Core</a></td>
    <td><a href="https://niem.github.io/reference/concepts/namespace/">Info</a></td>
  </tr>
  <tr>
    <td>niem-import-external</td>
    <td>NIEM import statement for an external standard</td>
    <td>
      <a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L55-L59">Import GML</a>
      <br/>(not a NIEM-conformant namespace)
    </td>
    <td><a href="https://niem.github.io/reference/concepts/namespace/">Info</a></td>
  </tr>
  <tr>
    <td>niem-term-literal</td>
    <td>NIEM local terminology described by a literal string</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L45">Local term "UTM" with literal</a></td>
    <td><a href="https://niem.github.io/reference/concepts/local-term/">Info</a></td>
  </tr>
  <tr>
    <td>niem-term-def</td>
    <td>NIEM local terminology described by a definition</td>
    <td><a href="https://github.com/NIEM/NIEM-Releases/blob/niem-5.0/xsd/domains/mo.xsd#L47">Local term "Waypoint" with definition</a></td>
    <td><a href="https://niem.github.io/reference/concepts/local-term/">Info</a></td>
  </tr>
</table>

## Conventions

Several conventions were used with the snippets.

Note that these too can be adjusted by [modifying the snippets](#modify-a-snippet) in Oxygen in case you would like the defaults set differently.

### Blanks

Blanks are used for values where no helpful defaults can be provided.

### Dots (...)

A set of '...' characters were used in places where a field has been partially filled in but requires additional text.  Otherwise, it might not be immediately obvious that something is missing.

For example, it may not be obvious that the following element name and type reference are incomplete:

```xml
<xs:element name="Code" type="CodeType" nillable="true">
  <xs:annotation>
    <xs:documentation></xs:documentation>
  </xs:annotation>
</xs:element>
```

Adding dots to indicate missing text helps highlight where updates need to be made.  The dots also have the benefit of being invalid characters in a property or type name.  Although still valid within definitions, Oxygen can at least easily show these as errors when they are left remaining in component names and references:

```xml
<xs:element name="...Code" type="...CodeType" nillable="true">
  <xs:annotation>
    <xs:documentation></xs:documentation>
  </xs:annotation>
</xs:element>
```

> Exception: Oxygen snippets allows you to designate where the cursor should appear.  In cases where an incomplete value appears at the same place the cursor will be set, no dots have been added.  The cursor itself is the cue to fill in the rest of the information.  Dots are used to indicate incomplete information in the fields that follow.

### ALLCAPS

Labels written as ALLCAPS were used in places where Oxygen can be used to autofill the value if it has already been defined.

For example, the snippets for the `niem-code-2` pattern provide templates for a code simple type and a code complex type with simple content (CSC).  If you fill in the information for the simple type first as it appears, Oxygen will let you autofill in the name of the simple type you just created as you fill in the CSC's base type.  Autofill is quicker than editing an alternate default value set as `...CodeSimpleType`.

In order to use autofill, you first need to select the current value in the field.  Once fully highlighted, hit Ctrl/Cmd + Space for a list of available components and begin typing to get to the one you need.

{:.note}
> A value without delimiters like 'ALLCAPS' can be selected in Oxygen from the keyboard in one Ctrl/Cmd-Shift + arrow key jump.  Selecting `...CodeSimpleType` would take Oxygen six jumps to fully highlight, one arrow key stroke for each dot and upper case letter.  This is one of the reasons this ALLCAPS formatting convention has been selected.

### Ordering

Component snippets are ordered by dependencies.  The order for components in the `niem-code-4` snippet is

1. Code simple type
2. Code CSC type (base type is defined in \# 1)
3. Abstract element
4. Code element (type is defined in \# 2; substitution group is defined in \# 3)

This ordering prevents encountering required fields that have not yet been defined.

## Using NIEM snippets with Oxygen

For more information on snippets in Oxygen, please see their page about [Code Templates](https://www.oxygenxml.com/doc/versions/23.0/ug-editor/topics/code-templates-x-editing2.html).

### Import snippets

- Download the **<a href="./niem-snippets-oxygen.xml" download>NIEM Oxygen snippets file</a>**
- In Oxygen, click on menu item **Options** -> **Preferences...**
- In the left panel sidebar, click on **Editor** -> **Content Completion** -> **Code Templates**
- Click the Import button near the bottom right of the panel and select the downloaded snippets file

![Importing snippets](images/import.png)
{:.bordered}

### Use a snippet

{:.note}
> All NIEM snippets begin with `niem-`

- Type "niem" in an XML schema file
- Hit Ctrl/Cmd + Space
- Scroll through the drop-down list to see all snippets that begin with "niem"
- Hit "Tab" or "Enter" to load the snippet
- Fill in fields like names and definitions; adjust default values as needed

![Selecting a snippet](images/select.png)
{:.bordered}

### Modify a snippet

- In Oxygen, click on **Options** -> **Preferences**
- In the left panel sidebar, click **Editor** -> **Content Completion** -> **Code Templates**
- Scroll down and select the snippet to modify
  - The snippet will begin with "niem-"
  - NIEM snippets will appear under "XSD Editor" and/or "JSON Editor" group
- Click the "Edit" button

![View snippets](images/view.png)
{:.bordered}

- Modify the snippet name, description, code, or add a keyboard shortcut.
- Notes:
  - The `${caret}` variable marks the position where the cursor will appear once the snippet is loaded.

![Edit a snippet](images/edit.png)
{:.bordered}

### Reload snippets

- To load an updated snippets file, simply go through the original import steps again.
- Snippets with the same name and editor group will be overwritten.
- Individual snippets can be deleted or snippets can be reset by clicking the **Restore Defaults** button.
