---
  title: Modeling Namespaces
  tutorial: modeling
---

- TOC
{:toc}

## Rules and guidance

### Each namespace must have its own target namespace

This makes all schemas easy to reference individually and prevents one namespace from being defined across multiple files.

### A target namespace must be an absolute URI

Relative URIs are not allowed. An absolute URI, such as a URL or a URN, is universally identifiable.

### Namespaces should maximize cohesion

A namespace should be designed so that its components are consistent, may be used together, and may be updated at the same time.
