---
title: IEPD Version Control
short: Version Control
icon: fa-book
description: Best practices for NIEM IEPD change control and version management.
---

{:toc}
- TOC

This FAQ relates best practices for NIEM IEPD change control and versioning.  Before discussing these concepts as they relate specifically to an IEPD, we begin with an overview of the NIEM architecture, and follow that with several applicable FAQs about NIEM change control in general.

The audience is intended to be NIEM Information Exchange Package Documentation (IEPD) developers and implementers who transmit or share NIEM IEPs (Information Exchange Packages, i.e., instance XML documents) based on one or more IEPDs.

The scope covers all aspects of IEPD change control and versioning based on NIEM releases, including how NIEM releases relate to IEPDs and their implementations, compatibility, and what users and implementers should expect. The intent is to help the NIEM community understand how to implement NIEM effectively
in the context of annual releases, and know the limitations and trade-offs.

## IEPD change control and versioning

### How are IEPDs versioned?

The method and scheme for versioning IEPDs is very similar to that used for NIEM releases.  An IEPD is assigned a unique URI that is under the control of the IEPD author or sponsor.  If significant changes are made to an IEPD then authors are expected to change the URI for that IEPD.  This is a MUST if changes will impact XML instance document validation with the IEPD schema.

Insignificant changes may not require a change in URI.  For example, text corrections or minor clarifications to IEPD documentation (where it does not impact schema validation) might not require a URI change.  This decision is left to the judgement of IEPD authors, sponsors, or certification authorities.

See the [NIEM Information Exchange Package Documentation 5.0 - Section 5.2.4.1](http://reference.niem.gov/niem/specification/model-package-description/5.0/niem-iepd-spec-5.0.html#section_5.2.4.1) for IEPD
URI syntax details and rationales.

### Who is responsible for managing versions of a NIEM IEPD?

While related to NIEM by reusing data components in published representations of the reference model (releases), an IEPD is authored independently of NIEM.  The IEPD author, developer, or sponsor is responsible for managing IEPD versions.

### What does IEPD versioning look like for implementations?

Information producers and consumers must synchronize any IEP (XML instance document) exchanged through the XML schema definitions in the IEPD that define the IEP.  This means that (1) the IEPD implementation
must understand the IEPD schema assembled from the IEPD schema document set; so that (2) the implementation must recognize and correctly process all elements of an incoming IEP (XML instance document) defined by the IEPD; and (3) the IEP must be schema-valid to the IEPD schema document set.  Therefore, producer and consumer
implementations of an IEPD must be aware of the IEPD versions their software implementations are based on.

### How can I support multiple versions of an IEPD?

A software implementation can process one or more versions of an IEPD.  The software should have a set of data structures for the data set defined by each IEPD (for example, a set of Java objects for each IEPD).  The software will associate an incoming IEP (XML instance) with one of two namespaces to determine which set of data structures to use for the incoming IEP.  To do this, it parses the IEP document element to identify the unique namespace of the schema that defines that element.  This namespace identifies which set of data structures to load with the incoming IEP data and subsequently process.

## Using a NIEM release in an IEPD

### Which NIEM release is being used in an IEPD?

There are at least two ways to determine the NIEM release used by an IEPD.  First, an IEPD author should identify the NIEM release version(s) in use within the documentation.  A second method is to inspect `targetNamespace` attributes within the IEPD's schema documents and compare them to their respective reference schema documents (within the releases).

Core related schemas documents such as `niem-core.xsd` and `structures.xsd` can only identify the major series (1.0, 2.0, 3.0, etc.).  This is because Core does not change from one minor release to the next within a major series.  For example, NIEM 2.0 and 2.1 both contain the same 2.0 core schema document with same `targetNamespace`.  Domain and code list schema documents can help to identify the minor release series (second integer).  But be sure to compare to the release schema documents, because some domains (such as Justice) and some code lists have legacy versioning schemes that do not correspond directly to the release version.  For example, the current version number in the Justice `targetNamespace` URI is 7.0, not 5.0.

### Can an IEPD use more than one NIEM release?

The NIEM [Information Exchange Package Documentation Specification]({{ site.data.pages.mpd | relative_url }}) allows an IEPD to employ XML data components from multiple NIEM releases.  This means that schema subsets from multiple releases can be used together in a single IEPD.

That said, mixing releases in an IEPD can introduce multiple versions of the same XML elements and types (sometimes with slightly different structures) resulting in semantic duplication, overlap, and potential ambiguity.  On the other hand, each NIEM release has been harmonized to remove as much duplication as possible.

Therefore, we strongly recommend that an IEPD be designed to use a single NIEM release version.  This practice is easier to control, less complex, and less error-prone.

### Can I use NIEM domain updates and core supplements?

A NIEM domain update contains one or more schema documents representing changes to one or more domains.  A NIEM core supplement contains one or more schema documents representing additive-only changes to a published  NIEM Core.  An IEPD may incorporate domain updates and core supplements.

That said, semantic overlap and duplication that can occur by mixing multiple NIEM releases within an IEPD (See FAQ above), may also happen when using a domain update or core supplement. This is because a domain update changes a given domain's published `targetNamespace` by creating a new `targetNamespace` and applying the changes there. In doing so, it may replicate data components defined by the `targetNamespace` it changes.
(See the [NIEM High Level Version Architecture 3.0]({{ site.data.links.hlva | relative_url }})</a>.)

Furthermore, the trade-off for allowing NIEM domains to reuse (and reference) each others' data components while also independently publish changes outside the regular release cycle, is that over time the level of semantic overlap can increase across a given release and its associated domain updates and core supplements.

To the extent possible, within an IEPD avoid mixing duplicate versions of the same data component.  Use the subset technique where possible to reduce duplication; but realize that some level of semantic duplication and overlap may be unavoidable.

## Future NIEM release updates

### What does "An IEPD is the point of NIEM interoperability" mean?

Once published, a NIEM release is always available as-is under a unique `targetNamespace`.  So, once designed and built from an existing NIEM release (and optionally any existing domain updates or core supplements, an IEPD implementation establishes interoperability among senders/receivers of XML instance documents (IEPs) that validate to the IEPD's schema document set.

This means that a NIEM implementation is immune to NIEM changes (new releases, domain updates, and core supplements), and will continue to work as long as IEPs (instance XML documents) are schema-valid to the original IEPD schema document set.

Furthermore, if the IEPD schemas change and the implementation changes accordingly, and the changes are such that the schema document set is backward compatible (see <i>backward compatibility above</i>) with the previous set before the changes, then the implementation will continue to work with the old and new XML instance documents.

### Must an IEPD be updated when a new NIEM release is published?

No, an IEPD is not required to change as a result of NIEM evolution. If the data exchange requirements for which the IEPD was developed are still valid, then there is no reason to update the IEPD (even if new content in a recent NIEM release or domain update is available).

### When must an IEPD be updated to a new NIEM release?

All previously published NIEM releases are always available at the <a href="https://release.niem.gov/">NIEM release</a> Web site. Therefore, if an IEPD continues to satisfy its information sharing requirements as designed or implemented, then it is not necessary to update it because there is a newer NIEM release.

When an IEPD author, sponsor, implementer, or the exchanging parties determine that:

(1) data exchange requirements have evolved significantly enough; or
(2) newer NIEM content is available and the need to use it within data exchanges exists;

then, it may also be worthwhile to consider an IEPD update and likely an update to all corresponding IEPD implementations.

## Backward compatibility

### What is <i>backward compatibility</i> in XML Schema?

Consider a single XML schema document that defines a set of XML instance documents.  This means that each XML instance document in the set is schema valid to the schema document.  If the schema document is changed, then the nature of the changes will determine how different the set of valid XML instance documents is now as a result of changes.

Schema document changes might be such that the original set of valid XML instance documents are still valid for the new (modified) schema, and other new XML instance documents are also valid.  This can happen if, for example, one or more additional XML elements are added to an XML type definition with cardinality  (`minOccurs`) set to zero (i.e., use of these elements is optional).  This is essentially backward compatibility, i.e., the new changed XML schema is backward compatible with the previous XML schema, because the original set of valid XML instance documents are still valid to the new schema document.

### Does NIEM support backward compatibility?

No, NIEM does not support backward compatibility out-of-the-box. NIEM does not and cannot guarantee that an IEPD built from any given major or minor release version will be backward compatible with an IEPD built from an earlier release.  However, under certain conditions it may be possible to design, build, and change an IEPD such that it is backward compatible for the same set of schema-valid IEPs it defined before it was changed.  See the next question below.

### How can an IEPD maintain backward compatibility?

To design and build such an IEPD requires some degree of pre-planning.  The author must be prepared to limit the kinds of changes he can apply to later versions of the IEPD.  Subsequent changes to the IEPD schema documents must preserve the original set of valid IEPs, while allowing for new valid members of that set.

Such changes are generally additive-only and may include (but are not
limited to):

- add elements with `minOccurs="0"` to types;
- add elements to existing substitution groups; relax (not restrict)
cardinality constraints; and
- employ wildcards (as appropriate).

As long as changes to the IEPD schema documents do not render previously schema-valid IEPs invalid, then backward compatibility is preserved.
