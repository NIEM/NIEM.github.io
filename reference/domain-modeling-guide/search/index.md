---
title:  Search for NIEM data components
---

## How to search for NIEM data components

Although this section does not address NIEM modeling specifically, given the large number of NIEM data components, most modeling efforts will require searching the NIEM model for content to reuse, duplication, examples of content models, points of extension, etc.  This section introduces some basic methods of searching for NIEM content.


### Schema Subset Generation Tool (SSGT)

The [Schema Subset Generation Tool](https://tools.niem.gov/niemtools/ssgt/index.iepd) (SSGT) is one way to search for NIEM data components.  This tool was designed to build and generate NIEM schema subsets.  However, SSGT also contains a convenient search engine that can be used alone.


#### Basic Search

SSGT provides a full text search capability for a NIEM release.  You can enter a search string into the criteria box and view a list of all NIEM data components that contain a lexical match to that string.  The default is to search all data component text records in a single release, including names, definitions, and other metadata text fields.  Namespaces are not part of the standard search.  This is because namespace prefixes are extremely prevalent throughout the model and would tend to clutter most search results.  As will be described later, the user can configure SSGT to search in particular ways.

Search is case independent.  A search for <code>sonty</code> will return the data component <code>PersonType</code>.

SSGT can only search a single release (Later, we discuss a technique for searching multiple releases at once).  The default is to search the most recent (current) operational release.  If you need to search a previous NIEM release you must select it from the "options" menu.

SSGT always requires that you declare the class of the data component you are looking for, and only that class will be in the scope of the search.  This means you must declare one of the following in the dropdown box:

- Property (the default class) - XSD data elements and attributes in a NIEM release.
- Type - XSD data types in a NIEM release; may be complex or simple.
- Namespace - namespaces used in a NIEM release
- Facet - code values in a NIEM release.
- External - profiles of standards used in a NIEM release that are not NIEM conformant (e.g., GML).
- Association - relationships among two or more objects.

Search results are displayed in a list of NIEM data component qualified names, i.e., QName syntax:  namespace prefix, followed by colon character, followed by component name; for example, <code>nc:PersonFullName</code>.

Depending on the outcome of a simple (default) search, a resulting list will have as many as three parts in this order:

1. Exact match on name:  All data names for which the search criteria exactly matched that entire naem (excluding its namespace prefix).
2. Partial match on name:  All data names for which the search criteria matched a substring within that name (excluding its namespace prefix).
3. Match on other metadata:  All data names for which the search criteria matched a substring within its associated data definition or other metadata (including namespace prefixes that may occur within the metadata).

Each part of the search result (if it exists) is sorted alphabetically by Qname, which includes the namespace prefix so that component names are conveniently grouped by namespace.

SSGT does not indicate the two points (if either exists) at which these parts are joined.  The only way to identify these break points is by visually inspecting the result list to find the locations where alphabetic ordering of names restarts.

Each data name is hyperlinked to its associated metadata and relationships.  For an element this includes its definition, keywords (synonyms, if any), usage information (if any), usage examples (if any), its own type, and the types that use this element.  For a type this includes its definition, content style, elements it contains, elements that are of this type, and base types from which it is derived.  For convenience there are many features that help with identification of data components in the display.  Property names (XML element and attribute names) are displayed in blue, and XML type names are displayed in red.  XML element and attribute names are usually displayed with their associated XML type names.  Hovering over a data component name will reveal its definition.  A "details" link to the right of a property name and associated type name will reveal metadata about that property.

Note for MS Internet Explorer 11 users:  This browser must be reconfigured to "compatibility mode" (not its default) for SSGT to work correctly:

1. In MS Internet Explorer 11, open Compatibility View (Tools / Compatibility View Settings).
2. Add tools.niem.gov and/or niem.gov to Compatibility View.
3. Go to <https://tools.niem.gov/> and SSGT Search will work normally.


#### Advanced Search

In general, the SSGT advanced search capability provides additional constraints that limit the scope of a search.

Click <code>Show Advanced</code> to open the SSGT advanced search capabilities.  Here you can constrain the search criteria:

1. with the exact phrase
2. with at least one of the words
3. without the words

or any combination of these constraints.

You can also constrain search to particular metadata fields that you select.  These are Names, Definitions, Keywords (synonyms), Usage (descriptions of how a data component is commonly used), and Example Content (samples of valid values for the element).

You can limit a search to one or more domains by checking/unchecking the appropriate boxes.  If you want to search content outside of all domains (for example, NIEM Core and all code lists), then just check "other".  If you uncheck all boxes the tool will go back to searching the entire model (same as if all boxes are checked).


##### Multiple search criteria

You can enter multiple search terms separated by spaces in the search criteria box.  In this case, SSGT search will return data component records that contain ALL those terms in any order.


##### Wildcard search

SSGT also has one simple wildcard character, an asterisk.  It can be used as many times as desired within the search criteria box.  For example, the following search criteria:

	son\*nor\*sim\*yp

will return:

	aamva\_d20:PersonOrganDonorCodeSimpleType

because this criteria matches this element name.  A single asterisk in the search criteria box will return all data components in the release.  (NOTE:  After a wildcard search SSGT replaces each asterisk in the criteria with a percent character.)

### Movement

Movement enables you to search and explore the content of the NIEM model. It provides a user friendly interface, and smart search results. It is also open source: the community who inspired its creation can contribute to it.

See more [information]({{ "/movement/" | relative_url }}) about Movement and [visit]({{ site.data.links.movement }}) the tool itself.

### NIEM Model Spreadsheet

For anyone relatively new to NIEM, the Model Spreadsheet is an easier way to search, navigate, and explore the model, and familiarize with NIEM content and structure relatively quickly.

Each NIEM release package contains a model spreadsheet that opens with Microsoft Excel.  If you download and unzip a NIEM release package at <https://release.niem.gov/> the spreadsheet will be <code>niem-m.n.xlsx</code> where <code>m</code> is the major (series) version integer, and <code>n</code> is the minor version integer.

The model spreadsheet is organized into the following tabs:

- NIEM Core data components, followed by ...
- Each domain data component set in alphabetical order, followed by ...
- Type Description - a list of all XML types and their definitions
- Elts sorted by type - a list of all XML elements
- Elts sorted by name - a list of all XML elements
- Attributes - a list of all XML attributes
- Namespaces - a list of all namespaces used in the release
- Class Tree - a list of all XML types arranged in a hierarchical derivation tree

Each tab contains a list that also includes various metadata about the data components listed.  Each type is hyperlinked to the location of its definition.  The model spreadsheet is designed to explore types and their associated properties (sub-elements).

Excel menu <code>Find</code> and <code>Search</code> functions also take wildcards.  Asterisk and question mark characters are used for multi- and single-character wildcards respectively.  To find asterisks and question marks in the text, you must escape these characters with a tilde (<code>~</code>).  So, <code>~*</code> and <code>~?</code> will find asterisks and question marks.  To escape the tilde character itself, enter <code>~~</code>.

Excel offers other kinds of wildcards and features that provide search capability similar to regular expressions.  PC users might look at <https://support.office.com/en-us/article/Find-and-replace-text-by-using-regular-expressions-Advanced-eeaa03b0-e9f3-4921-b1e8-85b0ad1c427f#__toc286834987>.  It would be nice in both PC and Mac Excel had identical user interfaces, but that is not the case.  So, for Mac users should check out <http://searchengineland.com/advanced-filters-excels-amazing alternative-to-regex-143680> (and beware, shortcuts for Mac Excel 2011 don't always seem to work as expected).


### Other methods to search NIEM content


#### Offline

Because NIEM is XML-based, most methods of searching NIEM are text oriented.
Almost any good XML tool can be useful.  Common XML editors that can do this are [Altova XMLSpy](http://www.altova.com/xmlspy.html) and [oXygen](https://www.oxygenxml.com/).

Other methods of searching NIEM use full text search capabilities that can quickly scan through large file sets.  NIEM schemas contain an entire textual data dictionary.  Multiple NIEM releases can be searched simultaneously using some version of grep (originally a Unix utility and available natively on an Apple MacIntosh; there are also version that run under Microsoft Windows).  Grep is simple, fast, and facilitates user customization.  By downloading all the NIEM release packages and placing their XML schemas into a single directory, grep can be customized to find and extract any text that can be described by a grep expression.


#### Online

Another method of searching NIEM schemas is through a Google site search.
All NIEM component names and definitions are online in open text, both in their XSD form as well as XHTML.
For example, <https://release.niem.gov/niem/3.2/> is a Web page that indexes all the NIEM 3.2 schema documents.
Furthermore, at <https://release.niem.gov/> are all the NIEM release products since 2006.
Each release is documented in HTML pages rooted at these links:

- [NIEM 3.2 Namespaces Documentation](https://release.niem.gov/niem/NIEM-3.2-namespaces)
- [NIEM 3.1 Namespaces Documentation](https://release.niem.gov/niem/NIEM-3.1-namespaces)
- [NIEM 3.0 Namespaces Documentation](https://release.niem.gov/niem/NIEM-3.0-namespaces)
- [NIEM 2.1 Namespaces Documentation](https://release.niem.gov/niem/NIEM-2.1-namespaces)
- [NIEM 2.0 Namespaces Documentation](https://release.niem.gov/niem/NIEM-2.0-namespaces)
- [NIEM 1.0 Namespaces Documentation](https://release.niem.gov/niem/NIEM-1.0-namespaces)

You can browse these pages that contain the contents of each NIEM release organized by namespace.
The data components in each namespace are listed alphabetically by name, and each name is linked to a page that displays its definition and other metadata.
Each namespace page also contains a direct link to its associated schema document.

You can also search both the release schemas and HTML documentation pages with Google.
To do this, run a Google *site search* on data component names and definitions in the release schemas (XSD) or the namespace documentation pages (XHTML).

For example, in your browser address field, enter:

	site:release.niem.gov/niem/ PersonType

Google search results will contain links to any Web page within the release.niem.gov/niem/ directory that contains a match to <code>PersonType</code>.

You may enter multiple search terms.  For example, enter:

	site:release.niem.gov/niem/ PersonType location

Search results will return links to pages that contain both <code>PersonType</code> and <code>location</code> in any order.
Character case is ignored.

Note that as an Internet search engine, Google generally only indexes full words (tokens surrounded by space or delimiters).
Google also uses "stemming" (recommend you Google that) and other heuristics to find pages with words related to search terms.
So, while SSGT can NOT find substrings within words (i.e., at the lexical level) that match search terms (such as <code>sonty</code> in the earlier example), Google can find partial matches to sets of words in textual paragraphs, sentences, and phrases.
For example, if you enter:

	site:release.niem.gov/niem/ Pers

Google search returns pages that contain the string <code>pers</code> bound by spaces or other delimiters/separators (i.e., <code>pers</code> as a word), but it does not return pages that contain <code>Person</code> or <code>PersonType</code> because it only indexes words (which are bound by delimiter or separator characters; such as spaces, quotes, and other special characters).

Despite this limitation, Google has a number of powerful operators that can be applied to perform advanced site searches on NIEM schemas and documentation pages.  See
[Google Advanced Search Operators](http://www.googleguide.com/advanced_operators_reference.html).

----

### <&mdash;&mdash; Return to: [Table of Contents](./index.html)

----
