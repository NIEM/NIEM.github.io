---
  title: NIEM Conformance Targets Attribute Specification
  short: Conformance Targets Attribute
  icon: fa-book
  suiteID: CTAS
  description: The Conformance Targets Attribute Specification (CTAS) defines how NIEM XML documents classify what kind of artifact they are through the use of a conformance targets attribute.
---

The **[NIEM Conformance Targets Attribute Specification (CTAS)]({{site.data.links.ctas}})** defines how NIEM XML documents classify what kind of artifact they are.  This is not always obvious by inspection, so making this information explicit is important; it also supports automated conformance validation by NIEM tools.

- TOC
{:toc}

## Specification Resources

{% include specs/specification-summary.html suiteID=page.suiteID %}

## Background

Certain NIEM specifications define rules for specific kinds of artifacts.  The NDR defines rules for Reference Schema Documents and Extension Schema Documents.  The Code List Specification defines rules for a Code List Document, a CSV Code List Document, and a Genericode Code List Document.  In addition to defining the artifacts and the rules, these specifications also define conformance target identifiers for each kind of artifact.  These are unique string values, formatted as a URL, and include information about the specification, the version, and the kind of artifact.

{:.example}
- The NDR, version 3.0, defines the following conformance target identifier for a Reference Schema Document: `http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ReferenceSchemaDocument` <br><br>
- The Code Lists Specification, version 4.0, defines the following conformance target identifier for a CSV Code List Document: `http://reference.niem.gov/niem/specification/code-lists/4.0/#CSVCodeListDocument`

A NIEM XML document can describe itself as a certain kind of artifact by including special attribute `ct:conformanceTargets` with a value of one or more of the conformance target identifiers described above.

{:.example}
> All conformant NIEM 4.0 release schemas include the `ct:conformanceTargets` attribute with the value of the conformance target identifier specified by the NDR, version 4.0, for Reference Schema Documents:
```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"
```

If an XML document represents more than one kind of artifact, then all applicable conformance target identifiers can be listed together as the `ct:conformanceTargets` attribute value, with each identifier separated by whitespace.

## The conformance targets schema

The `ct:conformanceTargets` attribute is defined by a published schema,  [conformanceTargets.xsd](https://release.niem.gov/niem/utility/conformanceTargets/3.0/conformanceTargets.xsd).  This schema is included with each NIEM release starting with 3.0, and in each NIEM subset generated by the [SSGT](../../tools/ssgt/).  Starting with the NIEM 4.0 release, the schema is located in its own folder under the [niem/utility](https://release.niem.gov/niem/utility/) subdirectory.

The `conformanceTargets.xsd` schema defines a single attribute: `conformanceTargets`.  Its data type is a simple list type for URI values.

## Using the conformance targets attribute

In order for a NIEM XML schema to specify its conformance targets, it is necessary to:

- identify the `conformanceTargets.xsd` schema
- assign the schema a file location where it may be found
- include the `conformanceTargets` attribute with all applicable values

This is demonstrated in the example below from a 4.0 release schema:

```xml
<xs:schema
  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/"

  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"

  xsi:schemaLocation="http://release.niem.gov/niem/conformanceTargets/3.0/
      ../../../utility/conformanceTargets/3.0/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument">

<xs:schema>
```

{:.note}
- The namespace prefix `ct` is assigned to the identifier (target namespace) of the conformance targets schema.
- The namespace prefix `xsi` is represents the XML Schema instance namespace.
- The `xsi:schemaLocation` attribute assigned the target namespace of the conformance targets schema to a relative location of that file.  The file location may also be defined outside of this schema using a [XML Catalog](../../artifacts/xml-catalog/).
- The `ct:conformanceTargets` attribute contains all applicable conformance target identifiers.

## Common Conformance Targets

**NDR 3.0 Reference Schema rules**

Conformance targets attribute used by:

- any conformant schema from the 3.0-series of releases
- IEPD extension schema that follows the stricter NDR 3.0 rule set

```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ReferenceSchemaDocument"
```

**NDR 3.0 Extension Schema rules**

Conformance targets attribute used by:

- IEPD extension schema that follows the more relaxed NDR 3.0 rule set

```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/#ExtensionSchemaDocument"
```

**NDR 4.0 Reference Schema rules**

Conformance targets attribute used by:

- any conformant schema from the 4.0-series of releases
- IEPD extension schema that follows the stricter NDR 4.0 rule set

```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"
```

**NDR 4.0 Extension Schema rules**

Conformance targets attribute used by:

- IEPD extension schema that follows the more relaxed NDR 4.0 rule set

```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ExtensionSchemaDocument"
```

**NDR 5.0 Reference Schema rules**

Conformance targets attribute used by:

- any conformant schema from the 5.0-series of releases
- IEPD extension schema that follows the stricter NDR 5.0 rule set

```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/#ReferenceSchemaDocument"
```

**NDR 5.0 Extension Schema rules**

Conformance targets attribute used by:

- IEPD extension schema that follows the more relaxed NDR 5.0 rule set

```sh
ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/5.0/#ExtensionSchemaDocument"
```
