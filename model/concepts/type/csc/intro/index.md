
A complex type with simple content (CSC) is a common type style in XML, but does not exist in JSON.  "Complex type" means that the type may carry attributes.  "Simple content" means that the type carries a value, rather than an object.

Example:

```xml
<nc:PersonMiddleName nc:personNameInitialIndicator="true">Q</nc:PersonMiddleName>
```

Element `nc:PersonMiddleName` above carries value "Q" (because the type has simple content) and an attribute (because the type is complex).
