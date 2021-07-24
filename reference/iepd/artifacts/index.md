---
title: IEPD Artifacts
icon: fa-files-o
description: Each IEPD is a package that contains schemas and other supporting files.
links:
- url: /reference/iepd/artifacts/subset-schema/
- url: /reference/iepd/artifacts/extension-schema/
- url: /reference/iepd/artifacts/iepd-catalog/
- url: /reference/iepd/artifacts/conformance-report/
---

{{ page.description }}

{:toc}
- TOC

See the [Information Exchange Package Documentation (IEPD) Specification]({{ site.data.links.mpd_spec | relative_url }}) for more information about these artifacts.

## Required artifacts

### NIEM subset schemas

An IEPD must include either a local copy of the schemas from a NIEM release or a custom subset of that NIEM release.  Because NIEM is a large data model, a subset is usually much easier to deal with in an IEPD.  A subset should include only the properties and types from the release that are actually needed by the IEPD, plus any dependencies.

{:.note}
> The [SSGT]({{ site.data.pages.ssgt | relative_url }}) can be used to generate a NIEM XML schema subset.

See the [Subset schemas]({{ "/reference/iepd/artifacts/subset-schema/" | relative_url }}) page in this section for more details.

### Extension schema

An IEPD will include one or more extension schemas.  These are schemas created by the IEPD developer in order to define properties and types needed by the IEPD that do not already exist in NIEM.

The [NIEM Naming and Design Rules (NDR) specification]({{ site.data.links.ndr }}) provides rules and guidance on how components for both release schemas and IEPD extension schemas should be modeled.  in [Reference / Concepts]({{ "/reference/concepts/" | relative_url }}) section on this site explains some of Artifacts section for more.that information.

{:.note}
> Many of the rules from the NDR are defined in Schematron so that conformance testing can be automated against NIEM XML schemas.  [ConTesA]({{ site.data.pages.contesa | relative_url }}) and [Oxygen]({{ site.data.pages.oxygen_ndr | relative_url }}) are both capable of evaluating these NDR Schematron rules.
>
> - ConTesA is free to use and will generate a conformance report that can be included in the IEPD.
> - Oxygen requires a paid license but may be easier to use frequently during schema development because Schematron errors are checked and displayed similarly to standard XML validation errors.

See the [Extension schema]({{ "/reference/iepd/artifacts/extension-schema/" | relative_url }}) page in this section for more details.

### IEPD catalog

An IEPD Catalog is an XML document that contains basic information about the package (name, description, purpose, point of contact, etc.) and a listing of the package's key artifacts.  This file has the name `iepd-catalog.xml` and resides in the IEPD root directory.

See the [IEPD Catalog]({{ "/reference/iepd/artifacts/iepd-catalog/" | relative_url }}) page in this section for more details.

### Change log

A change log can be a summary or a detailed description of the changes in this IEPD since the previous versions.  NIEM release provide change logs in the form of a spreadsheet but free text descriptions in a document or text file are fine.

### Conformance assertion

A conformance assertion is a document that declares the IEPD conforms to relevant NIEM specifications and associated rules. Although it increases the level of confidence that an IEPD was checked for NIEM conformance and quality, it does NOT constitute a guarantee or contract because it can be self-asserted.

Inclusion of a conformance assertion made by a reputable, independent, trusted entity (person or organization) can increase confidence in conformance, especially if it includes information such as a formal conformance test report or similar artifact.

A conformance assertion can also contain information about any known issues in the IEPD and the reasons for which they may have been necessary.

As part of a conformance assertion, additional artifacts may also be included in the IEPD:

[Conformance report]({{ site.data.pages.contesa | relative_url }})
: [ConTesA]({{ site.data.pages.contesa | relative_url }}) can be used to check if IEPD extension schemas conform to the [NIEM Naming and Design Rules (NDR) specification]({{ site.data.pages.ndr | relative_url }}) and provides the results in a conformance report.

### Readme

A readme artifact is mandatory for all IEPDs.  Additional documentation can be included in an IEPD as desired, but a readme will serve as the common starting point and is the required minimum for human-readable documentation.

A readme should include information that describes the following:

{:.box}
- Purpose of the IEPD
- Scope of its deployment, usage, and information content
- Business value and rationale for developing it
- Type of information it is intended to exchange, in business terms
- Identification (or types) of senders and receivers
- Typical interactions between senders, receivers, and systems
- References to other documentation within the IEPD
- Links to external documents that may be needed to understand and implement the IEPD

The readme does not have a required file format.  Word documents, text, and markdown are common formats.

### Sample messages

A sample message (also known as sample instances or sample IEPs) is an example of an actual message that will be exchanged based on the IEPD.  The data should be realistic and the sample message should clearly illustrate to IEPD implementers what the real-world messages should look like.

More than one kind of message can be defined within a single IEPD.  At least one sample message should be provided for each.

Sample messages in an IEPD also provide the IEPD developer with the opportunity to better test the IEPD schemas that are being developed.  Confirming that sample messages can carry all of the expected data from the data requirements helps to ensure that the schemas are wired up correctly and that little things haven't been forgotten, like missing substitutions, incomplete subsets, or properties that haven't been added to the right types.

## Optional artifacts

Aside from the required artifacts, IEPD content is relatively flexible. A variety of other optional documentation files may be incorporated into an IEPD. When applicable, these may include (but are not limited to) files that describe or explain:

- Implementation details (hardware, software, configuration, etc.)
- Use of multiple root elements
- Use of multiple subsets or mixed releases
- How to use/reuse an IEPD for various purposes (such as Web Services)
- Rationales and/or business purposes

### Business rules

Business rules are defined in artifacts with informal text or formally coded machine-readable statements that describe business policy or procedure or special data constraints that may be difficult or impossible to specify in schema.  Schematron is the recommended format for specifying additional data constraints on XML messages.  Informally written rules may be very difficult or impossible to validate but allow the author to present them in the IEPD.

### Code lists

NIEM supports enhanced code lists in addition to typical schema enumerations.  These code lists may be static (defined in the IEPD) or dynamic (defined at a URL and potentially updated after the IEPD is locked and published) and can be defined as CSVs or Genericode.

See [Code Lists]({{ "/reference/artifacts/code-lists" | relative_url }}) in the Reference / Artifacts section for more.

### Constraint schemas

A constraint schema is a schema that usually starts from a subset schema and is modified by hand in order to add custom-tailored constraints and restrictions on instance messages that go beyond setting cardinality limits.

Some things in a constraint schema must remain the same in order to maintain fidelity with the original schemas.  For example, property names and the order in which they appear cannot be changed because this would affect the tags in the instances.  However, because type information usually does not appear in an instance, properties can be rewritten with customized local types.

{:.example}
- Properties with type `nc:TextType` or `niem-xs:string` can be rewritten to have custom string types with individual maximum character lengths or patterns.
- Properties that leverage the same type but need to use it in different ways can be rewritten.  For example, if a message contains information about a child and other adults, these properties would all leverage the same type `nc:PersonType` in the NIEM release or subset schemas and `nc:PersonType` would include the superset of all of the person-related requirements.  In a constraint schema, however, the child property could be rewritten so that it only includes the exact properties that are allowed to be shared (perhaps like first name and age only) while the other kinds of persons in the message could be defined with additional fields.

The use of constraint schemas requires instance validation to be performed in two passes:

- To ensure NIEM conformance, IEPs must be valid against the original set of NIEM subset and/or IEPD extension schemas.
- To ensure conformance to the additional set of rules, IEPs must also be valid against the constraint schemas.

XML catalogs can be used to assign different file locations to schema namespaces for the separate validation passes.

Constraint schemas do not provide clear visibility or explanation of the constraints they enforce; nor do they provide clear validation failure messages. Thus the use of constraint schemas is discouraged.  A generally better way to impose additional rules on an IEP is to use Schematron. It provides facilities for better understanding of the business rules, their intent, and error handling of failures.  Constraint schemas do remain an option, however, that may be useful for situations where the XML schemas themselves are required to be tightened down as much as possible.

### External standards

External standards may be included in IEPDs for information that is already commonly shared within the exchange's target community according to a standard defined outside of NIEM.  GML is one such external standard already included with NIEM releases, but IEPDs may require others. In these cases, it may not make sense to provide an alternate NIEM-representation of data that already has a well-defined and commonly understood format.

To use an external standard:

{:.box}
- Add the schemas for the external standard to the IEPD.  The IEPD specification recommends adding these to a separate `external` folder under the `base-xsd` folder, next to other folders for the NIEM subset and IEPD extension schemas.
- Define [adapter types]({{ "/reference/concepts/adapter/" | relative_url }}) to wrap external properties.  An adapter type is a way to identify where the external, non-NIEM conformant properties are in an exchange and enables NIEM NDR rules to avoid throwing errors at these known exceptions.

### Wantlist

A wantlist is a custom XML file generated by the [SSGT]({{ site.data.pages.ssgt | relative_url }}) that saves the list of properties and types that were added to the subset.  In other words, it describes what an exchange "wants" from the NIEM data model.

If the IEPD includes a NIEM subset and that subset was generated by the SSGT, the wantlist should be included in the IEPD as well.  This ensures that the subset can be reloaded in the SSGT for future updates without having to start the subset over.

### XML catalog

XML catalog files can be used to specify or override the file locations associated with schema namespaces.

See [XML Catalog]({{ "/reference/artifacts/xml-catalog/" | relative_url }}) in the Reference / Artifacts section for more.Artifacts section for more.

## Recommended folder layout

The IEPD Specification does not contain normative rules on how to structure the folders and place the files in an IEPD, but guidance is provided. A recommended layout is provided below:

{:.note}
> See **[Appendix E. Guidance for IEPD Directories (non-normative)]({{ site.data.links.mpd_spec }}#appendix_E)** from the IEPD Specification for more information and helpful tips on how to organize an IEPD.

```bash
myIEPD-2.0/

  iepd-catalog.xml          # IEPD catalog
  changelog.*               # Change log
  conformance-assertion.*   # Conformance assertion
  readme.*                  # Readme

  base-xsd/                 # Schema folder

    niem/                   # NIEM subset schemas
      xsd/
        adapters/
        codes/
        domains/
        external/
        utility/
        niem-core.xsd
        wantlist.xml        # SSGT wantlist
        xml-catalog.xml

    extension/              # IEPD extension schemas
      extension1.xsd
      extension2.xsd
      ...
      xml-catalog.xml

    external/               # Schemas from external standards
      ic-ism/
      ...
      xml-catalog.xml

  iep-sample/               # Sample messages
    message1.xml
    message2.xml

  documentation/            # Human-readable documentation
    ...

```

## Additional details

For more details on some of the artifacts described above, please see the following pages in this section:

{% include icon-list.html links=page.links %}
