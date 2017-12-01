
Adapters are the mechanism NIEM uses to allow content from external standards without causing conformance validation errors.

An adapter is a type that contains an external property.  It is marked as an adapter in the schema, so NIEM conformance rules are not applied to any of its contents.  Otherwise, it acts like a standard NIEM type.

> For example, geo:SurfaceType is an adapter type in NIEM that contains element "Surface" from GML, an external standard.  This adapter type can be used normally by other NIEM components, and allows for the NIEM use of external element gml:Surface.
