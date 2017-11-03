---
   title: edxl_rm
---

**Prefix:** edxl_rm

Source: EDXL Resource Messaging (RM) Standards Working Group (SWG); 
Publication: Emergency Data Exchange Language Resource Messaging (EDXL-RM) specification; 
Version: 1.0; 
Date: 22 Dec 2009;   
http://docs.oasis-open.org/emerge

<a href="http://release.niem.gov/niem/codes/edxl_rm/4.0/edxl_rm.xsd">XML Schema</a>

## Type Index

| Type | Definition | Code Count |
| --- | --- | --- |
| <a href="#contentcategorycodesimpletype">ContentCategoryCodeSimpleType</a> | A data type code indicating the purpose or kind of resource content or payload being sent | 22 |
| <a href="#responsecodesimpletype">ResponseCodeSimpleType</a> | A data type code  indicating an accept or decline of a Request | 2 |

## ContentCategoryCodeSimpleType

A data type code indicating the purpose or kind of resource content or payload being sent

| Code | Definition |
| --- | --- |
| Accept | In response to a resource message; "I'll get back to you with an answer one way or the other (could still result in a "decline")" |
| Acknowledge | In response to any resource message, "I have received your message but have not yet processed it" |
| Cancel | Message used to revoke any previous resource message.  NOTE:  This message may be used to "cancel" or "recall" resource:  Resource requested and perhaps en route, but no longer needed. |
| Commit Resource | Message used to agree or commit specific resource in response to a  Resource Request or Requisition, or to a "Request Return" |
| Decline | In response to a resource message; "I cannot meet your request" |
| Notify Auxiliary Recipients | Message used to advise or notify an auxiliary recipient (e.g. a government official) about any resource message as an "FYI", where the auxiliary recipient was not included on original distribution. |
| Notify Resource Request Disposition | Message used to report on the current "status" of any resource in relation to a Resource Requisition, Release Resource, or Request to Return Resource. |
| Offer Unsolicited Resources | Message used to offer available resources (that have not been requested) to assist with an emergency response. |
| Release Resource | Message used by authorities at the incident to "release" (demobilize) resource back to its original point of assignment or to another location / assignment. |
| Request Extension | A request initiated by the requester / receiver of resource, "I want to extend how long I need to keep this resource" |
| Request Information (RFI) | Message used to ask resource questions or provide general description of situation and general resources needs. |
| Request Quote | Message used to request a price quote from a seller or supplier. |
| Request Resource | Message used to request needed resources from one or many recipients, possibly spawning multiple responses. |
| Request Resource Disposition | Message used to request current "status" of resource in relation to a previous Resource Requisition or Release Resource. |
| Request Return | Message used to request release (demobilize) of resources back to its original point of assignment or to another location / assignment ("I want my stuff back"). |
| Requisition Resource | Message used to "order" specific resource, or to confirm specific resource to be "ordered" relating to one or more responses to a "Request Resource". |
| Response to Offer Unsolicited Resources | Message used as the response to an offer of unsolicited resources, indicating accept or decline. |
| Response to Request Information (RFI) | Message used as the response to an RFI message providing general information or to list resource that may meet the specified need. |
| Response to Request Quote | Message used as the response to a "Request Quote".  Allows sender to list resource(s) which they feel represent suitable match with the request, with pricing information. |
| Response to Request Resource | Message used as the response to a "Request Resource".  Allows sender to list resource(s) which they feel represent suitable match with a resource request. |
| Response to Request Return | Message used as the response to a "Request Return" indicating whether the resource may be released, with relevant time-line information. |
| Update | Message used to provide information superseding a previously sent Resource Message (change/modify one or more information elements of the message).  Example:  Change requested resource quantity. |

<a href="#type-index">Back to type index</a>
## ResponseCodeSimpleType

A data type code  indicating an accept or decline of a Request

| Code | Definition |
| --- | --- |
| Accept | Accept |
| Decline | Decline |

<a href="#type-index">Back to type index</a>
