---
  title: Implementation Cookbook
  description: A catalog of techniques and methods that help to implement NIEM.
  icon: fa-info
  externalLinks:
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Avoid-replicating-data-in-a-NIEM-XML-document
    title: Avoid Replicating Data in a NIEM XML Document
    description: There are several NIEM-specific strategies to avoid replicating data within a NIEM XML document.
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Browsing-the-content-of-NIEM
    title: Browsing NIEM Content
    description: There are several online resources that may help you find out what is in NIEM.
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Efficient-XML-Interchange
    title: Efficient XML Interchange
    description: Efficient XML Interchange (EXI) uses information in the XML Schema for an XML document to optimize compression of XML documents.
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Enterprise-Integration-Patterns
    title: Enterprise Integration Patterns
    description: Enterprise Integration Patterns (EIP) provide a way of thinking about and expressing integration between and across systems, languages, APIs, and databases.
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Fast-Infoset
    title: Fast Infoset
    description: Fast Infoset (FI) is a specification which provides for compression of XML documents.
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Server-output-filter
    title: Server Output Filter
    description: A server output filter can compress XML data being transmitted.
  - url: https://github.com/NIEM/Implementation-Cookbook/wiki/Size-of-NIEM-XML-documents
    title: Size of NIEM XML Documents
    description: Strategies to reduce or compress the size of NIEM documents.
---

{{ page.description }}

When you're creating an information exchange, you rarely ever use NIEM by itself. Depending on business requirements, there are other aspects of information exchange implementations that are required, including access controls, policy automation, transmission protocol, and others.

Based on our NIEM implementation experience, we've identified some common patterns (or "recipes," so to speak) to implement NIEM with other pieces of the information exchange puzzle.

The implementation cookbook serves as a single location for the community to learn and share reusable solutions for implementing NIEM.

With your help, our goal is for the cookbook to define the many ways NIEM-based exchanges can be used within specific environments, with various technologies and standards. This includes programming languages, data formats, query languages, and messaging frameworks.

Remember, NIEM and other data standards are independent of any particular software. However, ensuring NIEM is expressed, defined, and used in various software platforms better enables reusability, portability, and interoperability—which is what this effort is working toward.

{% include icon-list.html links=page.externalLinks %}
