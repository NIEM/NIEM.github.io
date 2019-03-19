---
  title: Extension Schema
  icon: fa-plus
  description: In an extension schema, an IEPD developer can create new NIEM-conformant properties and types to represent message data requirements that are not available in a NIEM release.  Extensions schemas are used in combination with NIEM subset schemas to define the structure and meaning of a message.
  todo:
  - Reference a list of manual EXT NDR rules for users to review
  - This will eventually need to be refactored into separate XML and JSON pages
---

{{ page.description }}

{:.note}
> The [NIEM Naming and Design Rules (NDR) Specification]({{ site.data.pages.ndr | relative_url }}) defines what an extension schema document (EXT) is and the set of rules it must follow in order to be considered NIEM-conformant.

<!--more-->

New components added to extension schemas are often referred to as "extensions".  These extensions may augment, extend, substitute for, or reuse components from NIEM; or they may simply follow the NIEM syntax rules if no reuse is possible.

{:.note}
> See the [Modeling Concepts]({{ "/reference/concepts/augmentation/element" | relative_url }}) section on this site to learn more about setting up a NIEM-conformant schema, how to add basic properties and types, and how and when to use special NIEM techniques.  This material also includes XML and JSON examples and templates.

## Conformance Targets

An XML extension schema must declare an ExtensionSchemaDocument conformance target as defined by the [NDR]({{ site.data.pages.ndr | relative_url }}).

{:.example}
- The snippet below shows a very general outline of an XML extension schema that has declared its conformance target to be an extension schema document as defined by the NDR, version 4.0:
- Notice that the end of the conformance target identifier in the example is formatted as
  - `/specificationName/version/conformanceTarget`:
  - `/naming-and-design-rules/4.0/#ExtensionSchemaDocument`

```xml
<xs:schema
  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ExtensionSchemaDocument">
<xs:schema>
```
See the page about the [Conformance Target Attribute Specification]({{ site.data.pages.ctas | relative_url }}) for more details about how to declare a conformance target attribute, additional schema declarations that are required to support this attribute, and other conformance target values.

## Extension schemas in an IEPD

An IEPD package might be arranged in the following way, with the `base-xsd` folder containing three sub-folders for:

- the [SSGT]({{ site.data.pages.ssgt | relative_url }})-generated NIEM subset schemas
- the developer-created NIEM extension schemas
- any external standards that do not follow NIEM conformance rules

```bash
myIEPD-2.0/

  base-xsd/

    niem/               # NIEM subset schemas
      adapters/
      codes/
      domains/
      external/
      niem-core/
      ...

    extension/          # NIEM-conformant extension schemas
      extension1.xsd
      extension2.xsd
      ...
      xml-catalog.xml

    external/           # External standards that are not NIEM-conformant
      ic-ism/
      ...
```

The [Model Package Description (MPD) Specification]({{ site.data.pages.mpd | relative_url  }}) page on this site contains more information about how an IEPD package might be structured.

## Reusing NIEM components

In order to reuse components from NIEM, the following steps should be taken:

- Add a NIEM subset to your IEPD package by using the [Schema Subset Generator Tool (SSGT)]({{ site.data.pages.ssgt | relative_url }}).
- Import the relevant NIEM schemas into your extension schema.
- Declare namespace prefixes for the imported NIEM schemas.  If possible, try to use reuse the same namespace prefixes that NIEM uses for better consistency and clarity for other users.
- Reference components from the NIEM schemas.  Do not duplicate NIEM properties and types.

{:.example}
- This simplified example of an extension schema shows how to reuse content from NIEM.
- This snippet assumes that the schemas are located in the same relative directories as the sample IEPD package layout above.
- Note that this snippet is incomplete and only shows the parts of a schema that are relevant to reusing NIEM components.  It is not complete enough to be valid or NIEM-conformant.

```xml
<!-- Declare a prefix for the NIEM Core namespace -->
<xs:schema
  xmlns:nc="http://release.niem.gov/niem/niem-core/4.0/"
>
  <!-- Import the NIEM Core namespace -->
  <xs:import schemaLocation="../niem/niem-core/4.0/niem-core.xsd"
             namespace="http://release.niem.gov/niem/niem-core/4.0/"/>

  <!-- Reuse a NIEM Core type -->
  <xs:element name="Veterinarian" type="nc:PersonType">
    <xs:annotation>
      <xs:documentation>
        A professional who practices veterinary medicine by treating diseases, disorders, and injuries in animals.
      </xs:documentation>
    </xs:annotation>
  </xs:element>

  <!-- Reuse a NIEM Core property (see the element reference below) -->
  <xs:type name="PatientFileType">
    <xs:annotation>
      <xs:documentation>
        A data type for a medical file containing a record health and treatment information for a patient.
      </xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:ObjectType">
        <xs:sequence>
          <!-- NIEM Core element reference -->
          <xs:element ref="nc:Address">
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:type>

</xs:schema>
```

## Checking Conformance

There are several steps to follow when checking the conformance of an XML extension schema:

**Validate XML Schema**

Make sure the extension schema is a valid XML Schema.  Tools like XMLSpy, Oxygen XML Editor, xmllint, and Xerces can run this validation step.

**Declare conformance targets**

Make sure the schema declares a `ct:conformanceTargets` attribute, with the appropriate value as defined by the NDR.

**Check NDR conformance for automated rules**

Make sure the schema is conformant to whatever conformance target(s) are declared in the previous step.

Use the [Conformance Testing Assistant (ConTesA)]({{ site.data.pages.contesa | relative_url }}) or [Schematron validation in Oxygen XML Editor]({{ site.data.pages.ndr | append: "/oxygen-schematron" | relative_url }}) to check the extension schema against all automated NDR rules.

{:.note}
> ConTesA cannot check extension schema conformance without the conformance target attribute specified.  This attribute tells ConTesA which rule set to use for validation.  Without this information, ConTesA will not run any tests.

**Check NDR conformance for manual rules**

Review the extension schema manually against the NDR free-text rules to ensure they are met.

## NIEM JSON and Extension Schemas

In NIEM JSON, it can be easier to define properties and types from different namespaces together in the same JSON schema.  This is because the NIEM conceptual model uses techniques like element substitution and type extension, which do not have the same counterparts in JSON schema.  Because of this, JSON extensions can be added to the same JSON schema that defines the NIEM subset for an IEPD and a separate JSON extension schema is not necessary.

There is currently no automated rule assertions for NIEM JSON schemas.  The guidance for now is to follow the principles and intents of the NDR rules as closely as possible.
