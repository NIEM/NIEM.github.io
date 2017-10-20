---
  title: Namespaces and XML
---

- TOC
{:toc}

## XML Overview

XML Schema has been the typical representation for a NIEM namespace.

## Key rules and guidance

### Each namespace must have its own target namespace

This makes all schemas easy to reference individually and prevents one namespace from being defined across multiple files.

### A target namespace must be an absolute URI

Relative URIs are not allowed. An absolute URI, such as a URL or a URN, is universally identifiable.

### xs:include statements are not allowed

Imports are declared to reuse content from a schema with a target namespace; includes are declared for schemas without a target namespace.  Since NIEM schemas must have a target namespace, include statements may not be used.

- [XML Schema Template](template)
- [Namespace Basics](basics)
- [Conformance Targets](conformance-target)
- [Local Terminology](local-term)
- [XML instances](instance)
- Referencing content from other namespaces
  - [Imports](imports)
  - xsi:schemaLocation
    - [Appinfo](appinfo)


### Content

All of the information above is used to describe the given namespace and set up ways to reuse other namespaces.  The bulk of each namespace will be the list of type, element, and attribute declarations.  Examples of these are not provided here because each are described in detail in their own sections.


