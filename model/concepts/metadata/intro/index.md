
Metadata is data about data.  It might describe such things as who provided the content, and when it was last updated.

Because this is data that could potentially be provided about any and every property in the model (e.g., when the person name was last updated, when the address was last updated, when the vehicle tag was last updated, and so on), metadata should be defined separately from other types.  This avoids duplication and clutter across the model.

Almost all properties in NIEM (those with complex types) have the ability to reference one or more metadata properties.

{: .example}
> Core defines metadata element `nc:Metadata`, which contains properties like `nc:ReportedDate` and `nc:SourceText`.  Any element, like `nc:Person`, `j:PersonEmploymentIndicator`, or an element defined in an IEPD, may use this to provide metadata.
