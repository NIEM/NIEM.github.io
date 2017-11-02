---
  title: Conformance Targets
---

### Conformance Targets

The conformanceTargets namespace defines the mechanism NIEM schemas use to declare which set(s) of rules they intend to conform to.  NIEM has multiple classes and versions of NDR rules (reference vs extension, 3.0 vs 4.0, etc.).  This enables a schema to be very explicit about which rules should be applied.

NDR rules are not the only possible conformance target.  Additional NIEM conformance targets may be defined in the future, and local ones be defined as well if desired.

Conformance target for a 4.0 reference schema document:

`ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"`

Conformance target for a 4.0 extension schema document:

`ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ExtensionSchemaDocument"`

Both targets are very similar.  Only the fragment at the end is different (`#ReferenceSchemaDocument` vs `#ExtensionSchemaDocument`).

TODO - import vs xsi:schemaLocation

Like appinfo, the conformanceTargets namespace does not need to be imported.  Schemas use `xsi:schemaLocation` to link its URI to a specific file path.

```xml
<xs:schema
  xmlns:PREFIX="URI"`
  xsi:schemaLocation="URI PATH"
  ct:conformanceTargets="CONFORMANCE_TARGET_1 CONFORMANCE_TARGET_2 ...">
  ...
</xs:schema>
```

Example:

```xml
<xs:schema
  xsi:schemaLocation="http://release.niem.gov/niem/conformanceTargets/3.0/ ../niem/utility/conformanceTargets/3.0/conformanceTargets.xsd"

  ct:conformanceTargets="http://reference.niem.gov/niem/specification/naming-and-design-rules/4.0/#ReferenceSchemaDocument"

  xmlns:ct="http://release.niem.gov/niem/conformanceTargets/3.0/">
  ...
</xs:schema>
```

Note that the 4.0 NIEM release reuses the 3.0 version of the conformanceTargets namespace.  No changes were applied to this namespace for 4.0, so the same namespace is used for both 3.0 and 4.0-based schemas.
