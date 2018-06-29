---
  title: Nillable Default
---

In NIEM reference schemas, elements are defined as nillable, which allows for the use of empty tags.

Instance examples:

```xml
<nc:Person/>

<nc:Person>
</nc:Person>

<nc:Person structures:ref="P1"/>
```

Schema example:

```xml
<xs:element name="Person" type="nc:PersonType" nillable="true">
  ...
</xs:element>
```

By default, NIEM subsets are also set to allow empty (nil) values for all elements.  This default may be changed to **`false`** under **`Wantlist Options`** > **`Change Nillable Default Value`**.

{: .bordered}
![Nillable Default](nillable.png)

Nillable may also be set to true or false on specific elements, which will override the default value.
