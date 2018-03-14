
The Schema Subset Generator Tool (SSGT) enables users to search and view the content of the NIEM model, and optionally build XML Schema subsets of a NIEM release for use in NIEM XML exchanges.

{:.note}
- The NIEM 4.0 release has over 11,000 elements and almost 4,000 types across Core, the domains, and the code list schemas.
- The SSGT enables users to start with an empty XML Schema subset of a release and add in only those elements and types needed for an exchange, along with any required dependencies.
- The resulting subset will be MUCH smaller than the corresponding release, often containing a small number of namespaces and components.
- A new, custom subset may be created for each exchange.

Key Features:

- Search and explore the content of NIEM
- Build XML Schema subsets of a release
- Automatic management of component dependencies
- Multi-release support
- Customize cardinality and whether elements may have nil values
- API that generates a subset given a list of component selections (wantlist)

{:.example}
> The following is a snippet showing the full declaration of type `PersonNameType` from the Core namespace in the 4.0 release:

```xml
  <xs:complexType name="PersonNameType">
    <xs:annotation>
      <xs:documentation>A data type for a combination of names and/or titles by which a person is known.</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:ObjectType">
        <xs:sequence>
          <xs:element ref="nc:PersonNamePrefixText" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonGivenName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonMiddleName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonSurName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonNameSuffixText" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonMaidenName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonFullName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonNameCategoryAbstract" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonNameSalutationText" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonOfficialGivenName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonPreferredName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonSurNamePrefixText" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonNameAugmentationPoint" minOccurs="0" maxOccurs="unbounded"/>
        </xs:sequence>
        <xs:attribute ref="nc:personNameCommentText" use="optional"/>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
```

{:.example}
- The following shows a corresponding snippet from a subset of Core.
- In this case, only three elements from `nc:PersonNameType` were added to the subset.  Since the other elements in this type are not being used, they do not appear in this subset version of the Core schema.
- The cardinality in this subset has also been tightened from the typically optional and over-inclusive cardinality defined in the release.  In this case, the given name and surname must and may only occur once, while the middle name is optional and may be repeated.

```xml
  <xs:complexType name="PersonNameType">
    <xs:annotation>
      <xs:documentation>A data type for a combination of names and/or titles by which a person is known.</xs:documentation>
    </xs:annotation>
    <xs:complexContent>
      <xs:extension base="structures:ObjectType">
        <xs:sequence>
          <xs:element ref="nc:PersonGivenName" minOccurs="1" maxOccurs="1"/>
          <xs:element ref="nc:PersonMiddleName" minOccurs="0" maxOccurs="unbounded"/>
          <xs:element ref="nc:PersonSurName" minOccurs="1" maxOccurs="1"/>
        </xs:sequence>
      </xs:extension>
    </xs:complexContent>
  </xs:complexType>
```

| Role | Use Cases |
| ---- | --- |
| Domain modeler | Search and explore content from a domain or release |
| IEPD developer | Search and explore NIEM components while mapping source requirements <br> Search NIEM while modeling local extensions <br> Create an XML schema subset of a release for use in an exchange<br>  |
| IEPD implementer | IEPD implementers may choose to use the SSGT to search and review NIEM content, but it should not be necessary.  The IEPD itself should include all information and documentation necessary to implement the exchange. |
