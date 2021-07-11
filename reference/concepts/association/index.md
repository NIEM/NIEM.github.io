---
  title: Associations
  icon: fa-share-alt
  description: An association is a complex relationship between objects, with optional additional characteristics.
  redirect_from:
  - /reference/concepts/association/modeling/
  - /reference/concepts/association/xml/
  - /reference/concepts/association/json/
---

Associations are relationships between properties.  An association may have additional characteristics that further describe the relationship.

{:toc}
- TOC

{:.example}
> A marriage can be an association between two people, with additional characteristics like marriage date.

<!--more-->

## Modeling guidance

### Association element

#### Name

The name of an association element must end with the representation term "Association".

#### Definition

The definition of an association element should begin with the phrase:

```
An (optional adjectives) (relationship|association)...
```

#### Type

The type of an association element must be an association type.

### Association type

#### Name

The name of an association type must end with the representation term "AssociationType".

#### Definition

The definition of an association should begin with the phrase:

#### Parent type

An association type must extend `structures:AssociationType` or a type derived from it.

Typically, association types extend `nc:AssociationType`, which meets this requirement plus adds properties to capture the beginning and end date of the association.

```
A data type for (a relationship|an association)...
```

## XML

### Instance example

{:.note}
- The following two examples show an association between a person and a telephone number.
- The date range and description elements are additional properties relating to this association.

#### Inline

The content of the elements in this association are inline.

```xml
<scr:PersonPhoneAssociation>

  <nc:AssociationDateRange>
    <nc:StartDate>
      <nc:Date>2015-01-01</nc:Date>
    </nc:StartDate>
    <nc:EndDate>
      <nc:Date>2016-06-30</nc:Date>
    </nc:EndDate>
  </nc:AssociationDateRange>

  <nc:AssociationDescriptionText>The person made multiple calls to the given telephone number.</nc:AssociationDescriptionText>

  <nc:Person>
    <nc:PersonName>
      <nc:PersonFullName>John Doe</nc:PersonFullName>
    </nc:PersonName>
  </nc:Person>

  <nc:TelephoneNumber>
    <nc:FullTelephoneNumber>
      <nc:TelephoneNumberFullID>212-555-1212</nc:TelephoneNumberFullID>
    </nc:FullTelephoneNumber>
  </nc:TelephoneNumber>
</scr:PersonPhoneAssociation>
```

#### Reference

The person element in this association is defined as a reference to a person described elsewhere in this document, outside of the association.  It can be common for one or more properties to be represented as references rather than inline.

```xml
<scr:PersonPhoneAssociation>

  <nc:AssociationDateRange>
    <nc:StartDate>
      <nc:Date>2015-01-01</nc:Date>
    </nc:StartDate>
    <nc:EndDate>
      <nc:Date>2016-06-30</nc:Date>
    </nc:EndDate>
  </nc:AssociationDateRange>

  <nc:AssociationDescriptionText>The person made multiple calls to the given telephone number.</nc:AssociationDescriptionText>

  <nc:Person structures:ref="P1" xsi:nil="true"/>

  <nc:TelephoneNumber>
    <nc:FullTelephoneNumber>
      <nc:TelephoneNumberFullID>212-555-1212</nc:TelephoneNumberFullID>
    </nc:FullTelephoneNumber>
  </nc:TelephoneNumber>
</scr:PersonPhoneAssociation>

<nc:Person structures:id="P1">
  <nc:PersonName>
    <nc:PersonFullName>John Doe</nc:PersonFullName>
  </nc:PersonName>
</nc:Person>
```

### Schema example

This example shows the creation of an association type and element.

For both the inline and the reference examples above, the schema will be created the same way.  IDs and references are inherited by or added to all NIEM element types, so no further actions are required for their use in an instance.

{:.note}
- The association type...
  - name ends with "AssociationType"
  - definition begins with "A data type for a relationship"
  - extends nc:AssociationType, allowing it to inherit the association date range and description properties
- The association element...
  - name ends with "Association"
  - definition begins with "An association ..."

```xml
<xs:complexType name="PersonPhoneAssociationType">
  <xs:annotation>
    <xs:documentation>A data type for a relationship between a PERSON and a PHONE.</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="nc:AssociationType">
      <xs:sequence>
        <xs:element ref="nc:Person" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="nc:TelephoneNumber" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="PersonPhoneAssociation" type="scr:PersonPhoneAssociationType" nillable="true">
  <xs:annotation>
    <xs:documentation>An association between a PERSON and a PHONE.</xs:documentation>
  </xs:annotation>
</xs:element>
```

### Schema template

The template below declares an association type and element.

Multiple properties may be added to the association type to capture the primary objects of the association, and optionally any additional properties that further describe the association.

```xml
<xs:complexType name="NAMEAssociationType">
  <xs:annotation>
    <xs:documentation>A data type for a relationship ...</xs:documentation>
  </xs:annotation>
  <xs:complexContent>
    <xs:extension base="nc:AssociationType">
      <xs:sequence>
        <xs:element ref="ASSOCIATION-OBJECT" minOccurs="0" maxOccurs="unbounded"/>
        <xs:element ref="ASSOCIATION-PROPERTY" minOccurs="0" maxOccurs="unbounded"/>
      </xs:sequence>
    </xs:extension>
  </xs:complexContent>
</xs:complexType>

<xs:element name="NAMEAssociation" type="scr:NAMEAssociationType" nillable="true">
  <xs:annotation>
    <xs:documentation>An association ...</xs:documentation>
  </xs:annotation>
</xs:element>
```

## JSON

### Instance example

{:.note}
- The following two examples show an association between a person and a telephone number.
- The date range and description elements are additional properties relating to this association.

#### Inline

The content of the elements in this association are inline.

```json
{
  "scr:PersonPhoneAssociation": {
    "nc:AssociationDateRange": {
      "nc:StartDate": {
        "nc:Date": "2015-01-01"
      },
      "nc:EndDate": {
        "nc:Date": "2016-06-30"
      }
    },

    "nc:AssociationDescriptionText": "The person made multiple calls to the given telephone number.",

    "nc:Person": {
      "nc:PersonName": {
        "nc:PersonFullName": "John Doe"
      }
    },

    "nc:TelephoneNumber": {
      "nc:FullTelephoneNumber": {
        "nc:TelephoneNumberFullID": "212-555-1212"
      }
    }
  }
}
```

#### Reference

The person element in this association is defined as a reference to a person described elsewhere in this document, outside of the association.  It can be common for one or more properties to be represented as references rather than inline.

```json
{
  "scr:PersonPhoneAssociation": {
    "nc:AssociationDateRange": {
      "nc:StartDate": {
        "nc:Date": "2015-01-01"
      },
      "nc:EndDate": {
        "nc:Date": "2016-06-30"
      }
    },

    "nc:AssociationDescriptionText": "The person made multiple calls to the given telephone number.",

    "nc:Person": {
      "@id": "P1"
    },

    "nc:TelephoneNumber": {
      "nc:FullTelephoneNumber": {
        "nc:TelephoneNumberFullID": "212-555-1212"
      }
    }
  },

  "nc:Person": {
    "@id": "P1"
    "nc:PersonName": {
      "nc:PersonFullName": "John Doe"
    }
  }
}
```

### Schema example

This example shows the creation of an association type and element.

For both the inline and the reference examples above, the schema will be created the same way.

{:.note}
- The association type...
  - name ends with "AssociationType"
  - definition begins with "A data type for a relationship"
  - extends nc:AssociationType, allowing it to inherit the association date range and description properties
- The association element...
  - name ends with "Association"
  - definition begins with "An association ..."

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "scr:PersonPhoneAssociation": {
      "description": "An association between a PERSON and a PHONE.",
      "oneOf": [
        {
          "$ref": "#/definitions/scr:PersonPhoneAssociation"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/scr:PersonPhoneAssociation"
          }
        }
      ]
    }
  }

  "definitions": {
    "scr:PersonPhoneAssociationType": {
      "description": ">A data type for a relationship between a PERSON and a PHONE.",
      "allOf": [
        {
          "$ref": "#/definitions/nc:AssociationType"
        },
        {
          "type": "object",
          "properties": {
            "nc:Person": {
              "$ref": "#/properties/nc:Person"
            },
            "nc:TelephoneNumber": {
              "$ref": "#/properties/nc:TelephoneNumber"
            }
          }
        }
      ]
    }
  }
}
```

### Schema template

The template below declares an association type and element.

Multiple properties may be added to the association type to capture the primary objects of the association, and optionally any additional properties that further describe the association.

```json
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "additionalProperties": false,
  "properties": {
    "NAMEAssociation": {
      "description": "An association between ...",
      "oneOf": [
        {
          "$ref": "#/definitions/NAMEAssociation"
        },
        {
          "type": "array",
          "items": {
            "$ref": "#/definitions/NAMEAssociation"
          }
        }
      ]
    }
  }

  "definitions": {
    "NAMEAssociationType": {
      "description": ">A data type for a relationship ...",
      "allOf": [
        {
          "$ref": "#/definitions/nc:AssociationType"
        },
        {
          "type": "object",
          "properties": {
            "ASSOCIATION-OBJECT": {
              "$ref": "#/properties/ASSOCIATION-OBJECT"
            },
            "ASSOCIATION-PROPERTY": {
              "$ref": "#/properties/ASSOCIATION-PROPERTY"
            }
          }
        }
      ]
    }
  }
}
```

## NDR references

{% include ndr-references.html list=site.data.ndr.concepts.association %}
