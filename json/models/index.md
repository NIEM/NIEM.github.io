---
title: NIEM Content Models
---

Content models define the structure and content of data objects in a formal way so that their
content (properties) can be understood, used and validated in a consistent and repeatable way.  

The structure and content of data objects is defined in **schema**.  Messages that contain
objects that conform to **schema** are **instances** of that **schema**.  Typically, **schema**
are defined when the information exchange is being designed (or redesigned), and  **instances**
are generated from the **schema** to implement the information exchanges. At any time, if needed, 
**instances** may be validated against the **schema** by either the sender or receiver of the exchange.

In NIEM information exchanges, **instances** are referred to as **Information Exchange
Packages (IEPs)** and **schemas** are essential artifacts of an **Information Exchange Package
Documentation (IEPD)** that describes an information exchange. Other artifacts in an **IEPD** typically include
sample **instances**, use cases, business rules, and other business and technical documentation 
guiding the implementation of the information exchange.  Each **IEPD** should also include metadata about the 
exchange including the creator the current version and the change history.

NIEM supports JSON information exchanges including **IEPs** in JSON format and **IEPDs** that include [JSON Schema](../schema)


