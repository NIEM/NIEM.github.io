---
title: NIEM Code Lists Frequently Asked Questions (FAQ)
---

These are some questions that have been frequently asked about code lists,
Genericode, and the NIEM Code Lists Specification. If you have questions you'd
like added here, please [let us know]({{site.submit_feedback_link}}).

1. **What if simple type enumerations don't match code list values?**

   Any code lists constraint (e.g., an element value must match a code list) is
   layered on top of any other constraints, from XML Schema, Schematron, or even
   other code lists. So, if a simple type enumeration allowed codes <q>red</q>,
   <q>green</q>, and <q>blue</q>, while the Genericode code list allowed only
   <q>blue</q> and <q>purple</q>, then the only valid value for the element
   would be <q>blue</q>.

1. **Do you have to create a new code list type for each different code list you use?**

   No. You have lots of options. If you're binding the code lists in schema
   (rather than run-time binding), you can encode each different code list in a
   separate element.

   If you're doing run-time binding, you can use <code>cli:CodeType</code>, or
   you can hang the <code>cli:codeListURI</code> attribute on each type for
   which you want *run-time code list binding*.

1. **Can an authoritative source update a code list without updating NIEM?**

   Absolutely. That's one of the main driving factors in the way the code lists
   specification is built and used. We expect authoritative sources to update
   code lists as they need to. It will be up to the code list publishers and
   users to make sure they are using the same versions of the code lists.

1. **Can an authoritative source update a code list without updating an IEPD?**

   Yes, but you need to make sure that all the partner implementations of the
   IEPD are using the same strategy for updating their code lists. You probably
   don't want some systems using v1 of a code list and others using v13 of the
   code list. 

1. **What if my Genericode file has no unique key column?**

   It is a requirement of Genericode that every Genericode file have at least
   one key constraint. The NIEM Code Lists Specification respects that, and it
   means that people who create Genericode files need to make sure that their
   code lists files are valid and maintain key constraints.

1. **Does a referenced column have to be a key column?**

   No. A reference to non-key columns might mean that you get multiple distinct
   entries that match your values. That's OK; that's how it is designed, but use
   caution.

1. **Can I only use Genericode code lists with NIEM 3.2?**

   No. You can use it with any NIEM 3-based IEPD. This includes NIEM 3.0, 3.1,
   and 3.2. We're not even telling you that you **can't** use it with other XML
   Schemas; you're just likely going to run into difficulties.

1. **Does a Genericode file have multiple code lists in it?**

   No. The NIEM Code Lists Specification uses Genericode documents with document
   element <code>gc:CodeList</code>, which allow only one code list per
   document. If you need multiple code lists, use multiple code list documents.

1. **Can you convert Excel files to Genericode?**

   Maybe. There are existing tools for working with Genericode files, as well as
   tools under development within the NIEM community. See [our Genericode
   page](../genericode) for more details.

1. **When will I get a Genericode file from the NIEM Schema Subset Generation
   Tool (SSGT)?**

   The SSGT will yield a Genericode file when one is referenced by a component
   that is selected for a wantlist. If an XML Schema type references a code
   list, that code list will be included in your subset. This is currently under
   development; if you have an opinion, please [let us
   know]({{site.niem_comments_link}}).

1. **In the NIEM Schema Subset Generation Tool (SSGT), which Genericode file
   will I get when a component identifies a code list identifier for which there are
   multiple versions?**

   This is still to be decided. It might be best for the SSGT to keep one
   particular version for a release, or it might be best for the SSGT to provide
   the most recent code list version corresponding to a code list
   identifier. Please [let us know your opinion on
   this]({{site.niem_comments_link}}).

1. **Where should I publish my code list documents?**

   You should consider your code list documents to be part of a schema set, like
   XML Schema documents. If you are building an IEPD, then code list documents
   should be provided alongside the schemas in your IEPD. If you are publishing
   a domain update, code list documents should be part of your domain update.

   The NTAC will be providing guidelines on how to provide updates to code
   lists.

1. **How do I validate a Genericode file?**

   See [our Genericode page](../genericode) for code list tools that can
   validate Genericode documents.

1. **How do I validate a message against a Genericode file?**

   Software to validate messages against code list documents is under
   development. Updates will be provided on [our code lists page](..).

1. **How do I describe use of code lists in an IEPD?**

   The IEPD specification uses XML Catalogs to define XML Schemas for
   validation. The NIEM Code Lists Specification describes how to use XML
   Catalogs to resolve code lists. Add your code lists to your IEPD's XML
   catalog. Additional guidance will be provided in the future.

