---
title: NIEM Content Models
---

Content models define the structure and content of data objects in a formal way so that the
content of information exchanges can be understood, used and validated in a consistent and repeatable way.  

The structure and content of data objects is defined in **schema** which are defined when an information
exchange is designed (or redescigned).

The messages in an information exchange contain objects that are **instances** generated from the **schema**
by the sender of the message. At any time, if needed, **instances** may be validated against the
**schema** by either the sender or receiver of the message.

In NIEM information exchanges, **instances** are referred to as **Information Exchange
Packages (IEPs)** and **schemas** are essential artifacts of an **Information Exchange Package
Documentation (IEPD)** that describes an information exchange. Other artifacts in an **IEPD** typically include
sample **instances**, use cases, business rules, and other business and technical documentation 
guiding the implementation of the information exchange.  Each **IEPD** should also include metadata about the 
exchange including the creator, the current version and the change history.

NIEM supports JSON information exchanges including **IEPs** in JSON format and **IEPDs** that include [JSON Schema](../json-schema)

More detail on NIEM [models](/model){:target="_blank"} and their implementations in XML and JSON, including NIEM [concepts](/model/concepts), [content](/model/content), and [releases](/model/releases), is available.

