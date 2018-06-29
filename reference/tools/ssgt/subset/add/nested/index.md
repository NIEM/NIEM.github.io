---
  title: Nested Properties
---

In order to add an element or attribute to a subset as a sub-property of a type, this relationship must be captured explicitly.  The SSGT will not do this automatically.  Many properties belong to more than one type; other times a property may be added to a new type in an exchange.

{:.note}
- Any easy way to tell if a property is going to be added as a sub-property is to look at the **`Add`** button.  For sub-properties, the button also includes a drop-down icon on the right side to allow users to set sub-property options.  Other **`Add`** buttons do not have these options so they do not have this drop-drown.  ![Add Button Comparison](add-buttons.png)

## Adding From Search Results

- Click the **`+`** icon next to a component to expand the list of sub-properties.
- From the sub-property list, click the **`Add`** button next to the property name.
- The property will be added to the appropriate **`Elements`** or **`Attributes`** section of the subset list on the left.
- The type, in not already in the subset, will be added to the **`Types`** section of the subset list on the left.
- Click the **`+`** icon next to the type in the subset list to view all of its sub-properties in the subset.

{:.example}
> In the example below, element **`nc:OrganizationLocation`** is added to the subset as a sub-property of type **`nc:OrganizationType`**.
>
> (1) The user expands the list of sub-properties for type **`nc:OrganizationType`**.<br>
> (2) The user adds element **`nc:OrganizationLocation`** to the subset as a sub-property of **`nc:OrganizationType`**.<br>
> (3) The SSGT adds the element to the subset list.<br>
> (4) The SSGT adds the type to the subset list along with its sub-property.

![Add Sub-Property to Subset](./add-subproperty.png)
{:.bordered}

## Adding From Type Pages

Adding sub-properties to a type will happen automatically for any property added to a subset from a type page, in the **`Contains`** section.

{: .example}
> Adding nc:LengthUnitAbstract to the subset from type type page for type nc:LengthMeasureType will automatically add it as nested under the type.

![Type Page](type-page.png)
{:.bordered}

## Set Cardinality

Click the drop-down on the **`Add`** button to set custom options for the sub-property:

![Set Cardinality](cardinality.png)
{:.bordered}