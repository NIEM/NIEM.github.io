---
title: Release Version Control
short: Version Control
icon: fa-book
description: Information about NIEM release change control and version management.
---

{:toc}
- TOC

This FAQ relates to NIEM change control in general, particularly how it relates to NIEM releases.

## NIEM schema versions

### How are NIEM release schemas versioned?

A NIEM schema document identifies its version within the schema-level `targetNamespace` attribute. The [NDR]({{ site.data.pages.ndr | relative_url }}) requires that every NIEM conformant schema document have a unique `targetNamespace`.  This includes all NIEM schemas in releases, domain updates, and IEPDs.

For example, within NIEM 3.0:

- The `targetNamespace` for the Biometrics Domain is `http://release.niem.gov/niem/domains/biometrics/3.0/`
- The `targetNamespace` for the Justice Domain is `http://release.niem.gov/niem/domains/jxdm/5.0/`

*NOTE: The only exception to this rule is a NIEM subset schema.  See the next FAQ about subsets.*

If no changes to a schema document are required, then its `targetNamespace` will not change, and the schema document will go forward into future releases as-is.  Only when the content of a schema document changes must its `targetNamespace` change.  When changed, generally only the version identifier (`3.0`, `5.0`, etc.) portion of the `targetNamespace` URI will be modified.  However, this is only a convention, not a normative rule, so in reality the entire `targetNamespace` string determines the version of a NIEM schema document.

### How are NIEM subset schemas versioned?

In NIEM, the `targetNamespace` of a subset schema document based on a reference schema document (within a release) is never unique.  A subset schema document always takes the `targetNamespace` of the reference schema document from which it was built.

(See <a href="http://reference.niem.gov/niem/specification/model-package-description/5.0/niem-iepd-spec-5.0.html#section_4.2.2">Information Exchange Package Documentation 5.0</a> for subsetting operations.)

This is because a subset schema is essentially a reduced copy (i.e., a subset) of that reference schema document.  So, an XML document instance defined by a subset schema document is also defined by its associated reference schema document.  And in fact, a conformant subset schema document must be replaceable by the full reference schema.  This also explains why the `targetNamespace` for a subset schema document does not change; each is based on a published reference schema document.

## Persistence and compatibility

### Can published NIEM schemas be changed?

An important practice is that after a NIEM XML schema document has been officially released and published, neither its content nor its `targetNamespace` can be changed.  We say that published NIEM reference schemas (releases) live forever.  This policy ensures that the official NIEM releases (i.e., reference models) are always available to support information exchanges until an author or sponsor is ready to change them.

### Is a NIEM minor release is backward compatible?

There is a bit of truth to this statement.  A NIEM major series of releases is numbered as follows: 3.0, 3.1, 3.2, etc.  One and only one NIEM core schema document (version 3.0) and `targetNamespace` is common to all of these releases. The next NIEM major release (version 4.0) will change the NIEM core schema document.  So, release 4.0 will not use the 3.0 core schema document.  Thus, one might say that the NIEM 3.0 series (i.e., versions 3.0, 3.1, 3.2, etc.)  is compatible in terms of Core because all versions in the series use the same NIEM core schema document. However, domain schema documents may change in ways that prevent backward compatibility between minor releases within a major series.

## General

### Are NIEM versioning policies in standard practice?

No.  Some standards development organizations (SDO) do not follow the NIEM versioning policies.  Some change content directly within a published `targetNamespace`.  Others use a similar technique, but add a version identifier that is not a part of the namespace.  In such cases, it can be difficult to know if the content of a namespace has changed (and which version you have).  The NIEM namespace policy ensures absolute transparency of change.  If two NIEM schema documents bear different target namespaces, then their content is different.  Furthermore, within NIEM artifacts that use them (such as IEPDs), subset schema documents must be explicitly identified.

### What is <i>XML schema validation</i>?

<i>XML schema validation</i> is the process of checking an XML document to determine if it conforms to (or is defined by) an XML schema with which it has been associated.  Although not considered part of validation, all valid XML documents must also be syntactically well-formed.  Essentially, this means its XML open/close tags are complete and balanced.  A <i>schema-valid</i> XML document has passed a validation check against an associated schema.  In NIEM, these terms refer to <a href="http://www.w3.org/XML/Schema#dev">W3C XML Schema</a> validity.
