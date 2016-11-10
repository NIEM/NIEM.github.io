---
title: Representation terms and standard opening phrases
---
NIEM is a large data model, with contributions from many different people at different points in time. In order to attempt to maintain a somewhat singular voice, provide consistency for common cases to users, and to enable some automated conformance testing on otherwise untestable semantics, certain elements and types are required to use standardized representation terms at the end of their names, and to use standard opening phrases at the beginning of their definitions.

## Element with Simple Content
<table border="0" class="table table-hover">
	<tbody>
        <tr>
            <th width="21%">Primary / Alternate <br>
              Representation Terms</th>
            <th width="28%">Typical Uses</th>
            <th width="18%">Typical Data Types</th>
            <th width="33%">Definition Standard Opening Phrase</th>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">Amount</td>
            <td bgcolor="#E3E3E3">Money</td>
            <td bgcolor="#E3E3E3">nc:AmountType</td>
            <td bgcolor="#E3E3E3">A(n) (optional adjectives) amount ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">BinaryObject</td>
            <td bgcolor="#E3E3E3">Binary, Base64 encoding, hexadecimal encoding</td>
            <td bgcolor="#E3E3E3">nc:BinaryType</td>
            <td bgcolor="#E3E3E3">A(n) ...</td>
        </tr>
        <tr>
            <td>- Graphic</td>
            <td>Diagram, graph, mathematical curve, etc.</td>
            <td>nc:ImageType</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td>- Picture</td>
            <td>Picture, photo, image</td>
            <td>nc:ImageType</td>
            <td>A(n) (optional adjectives) (image|picture|photograph) ...</td>
        </tr>
        <tr>
            <td>- Sound</td>
            <td>Sound</td>
            <td>nc:BinaryType</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td>- Video</td>
            <td>Video</td>
            <td>nc:BinaryType</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">Code</td>
            <td bgcolor="#E3E3E3">Code Set</td>
            <td bgcolor="#E3E3E3">custom type</td>
            <td bgcolor="#E3E3E3">A(n) ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">DateTime</td>
            <td bgcolor="#E3E3E3">Date and time</td>
            <td bgcolor="#E3E3E3">nc:DateType</td>
            <td bgcolor="#E3E3E3">A(n) (optional adjectives) date and time ...</td>
        </tr>
        <tr>
            <td>- Date</td>
            <td>Date</td>
            <td>nc:DateType</td>
            <td>A(n) (optional adjectives) date ...</td>
        </tr>
        <tr>
            <td>- Time</td>
            <td>Time</td>
            <td>niem-xs:time</td>
            <td>A(n) (optional adjectives) time ...</td>
        </tr>
        <tr>
            <td>- Duration</td>
            <td>Length of time</td>
            <td>niem-xs:duration</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">ID</td>
            <td bgcolor="#E3E3E3">Unique identifier</td>
            <td bgcolor="#E3E3E3">niem-xs:string</td>
            <td bgcolor="#E3E3E3">A(n) (optional adjectives) identifier ...</td>
        </tr>
        <tr>
            <td>- URI</td>
            <td>URL</td>
            <td>niem-xs:anyURI</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">Indicator</td>
            <td bgcolor="#E3E3E3">True or False; Yes or No</td>
            <td bgcolor="#E3E3E3">niem-xs:boolean</td>
            <td bgcolor="#E3E3E3">True if ...; false (otherwise|if) ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">Measure</td>
            <td bgcolor="#E3E3E3">Measured value with unit</td>
            <td bgcolor="#E3E3E3">nc:MeasureType</td>
            <td bgcolor="#E3E3E3">A(n) ...</td>
        </tr>
        <tr>
            <td bgcolor="#E3E3E3">Numeric</td>
            <td bgcolor="#E3E3E3">Number, no unit</td>
            <td bgcolor="#E3E3E3">nc:NumericType</td>
            <td bgcolor="#E3E3E3">A(n) ...</td>
        </tr>
        <tr>
            <td>- Value</td>
            <td>Calculated number</td>
            <td>nc:NumericType</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td>- Rate</td>
            <td>Ratio comparing two numbers</td>
            <td>nc:NumericType</td>
            <td>A(n) ...</td>
        </tr>
        <tr>
            <td>- Percent</td>
            <td>Ratio representing parts per hundred</td>
            <td>nc:PercentType</td>
            <td>A(n) ...</td>
        </tr>
         <tr>
            <td bgcolor="#E3E3E3">Quantity</td>
            <td bgcolor="#E3E3E3">Numeric count (non-monetary)</td>
            <td bgcolor="#E3E3E3">nc:QuantityType</td>
            <td bgcolor="#E3E3E3">A(n) (optional adjectives) (count|number) ...</td>
        </tr>
         <tr>
            <td bgcolor="#E3E3E3">Text</td>
            <td bgcolor="#E3E3E3">Character string, free text</td>
            <td bgcolor="#E3E3E3">nc:TextType</td>
            <td bgcolor="#E3E3E3">A(n) ...</td>
        </tr>
         <tr>
            <td>- Name</td>
            <td>Word or term used for identification</td>
            <td>nc:TextType</td>
            <td>A(n) (optional adjectives) name...</td>
        </tr>
         <tr>
            <td>- CategoryText</td>
            <td>Kind or type of something</td>
            <td>nc:TextType</td>
            <td>A kind of ...</td>
        </tr>
         <tr>
            <td>- DescriptionText</td>
            <td>Free text description</td>
            <td>nc:TextType</td>
            <td>A description of ...</td>
        </tr>
         <tr>
            <td>- List</td>
            <td>Sequence of values for very large data sets</td>
            <td>various space-delimited lists</td>
            <td>A(n) ...</td>
        </tr>
        
        
    </tbody>
</table>

### Other Elements
<table class="table table-hover">
	<tbody>
        <tr>
            <th width="19%">Representation Terms</th>
            <th width="28%">Typical Uses</th>
            <th width="26%">Typical Data Types</th>
            <th width="27%">Definition Standard Opening Phrase</th>
        </tr>
        <tr>
            <td>Abstract</td>
            <td>Substitution group head for code lists or alternative to xs:choice</td>
            <td>none</td>
            <td>A data concept ...</td>
        </tr>
        <tr>
            <td>Association</td>
            <td>A relationship between elements</td>
            <td>custom [Name]AssociationType</td>
            <td>An (optional adjectives) (relationship|association) ...</td>
        </tr>
        <tr>
            <td>Augmentation</td>
            <td>Additional information about an existing type</td>
            <td>custom [Name]AugmentationType</td>
            <td>Additional information about ...</td>
        </tr>
        <tr>
            <td>AugmentationPoint</td>
            <td>A hook in a complex type to allow others to add additional information (augmentations)</td>
            <td>none</td>
            <td>An augmentation point ...</td>
        </tr>
        <tr>
            <td>Identification</td>
            <td>An identifier plus related info (e.g., expiration date, category, status)</td>
            <td>nc:IdentificationType</td>
            <td>A(n) (optional adjectives) identification ...</td>
        </tr>
        <tr>
            <td>MetaData</td>
            <td>Secondary data about information (e.g., source, last updated, info quality)</td>
            <td>custom MetadataType</td>
            <td>Metadata about ...</td>
        </tr>
        <tr>
            <td>[Other elements]</td>
            <td>&nbsp;</td>
            <td>custom [Name]Type</td>
            <td>A(n) ...</td>
        </tr>
    </tbody>
</table>

### Types
<table class="table table-hover">
	<tbody>
        <tr>
            <th width="18%">Representation Terms</th>
            <th width="31%">Typical Uses</th>
            <th width="26%">Typical Base Types</th>
            <th width="25%">Definition Standard Opening Phrase</th>
        </tr>
        <tr>
            <td>AssociationType</td>
            <td>A relationship between elements</td>
            <td>nc:AssociationType</td>
            <td>A data type for an association ...</td>
        </tr>
        <tr>
            <td>AugmentationType</td>
            <td>Additional information about an existing type</td>
            <td>structures:AugmentationType</td>
            <td>A data type for additional information about ...</td>
        </tr>
        <tr>
            <td>MetadataType</td>
            <td>Secondary data about information (e.g., source, last updated, info quality)</td>
            <td>structures:MetadataType</td>
            <td>A data type for metadata about ...</td>
        </tr>
        <tr>
            <td>CodeType</td>
            <td>Complex type with simple content that wraps a simple code type (NIEM elements are required to have a complex data type)</td>
            <td>custom [Name]CodeSimpleType</td>
            <td>A data type ...</td>
        </tr>
        <tr>
            <td>CodeSimpleType</td>
            <td>Simple type with a code set</td>
            <td>xs:token</td>
            <td>A data type ...</td>
        </tr>
        <tr>
            <td>SimpleType</td>
            <td>Simple type with facets (value constraints)</td>
            <td>XML Schema built-in type</td>
            <td>A data type ...</td>
        </tr>
        <tr>
            <td>Type</td>
            <td>Other types</td>
            <td>structures:ObjectType</td>
            <td>A data type ...</td>
        </tr>
    </tbody>
</table>

### See Also:
* [NDR Rule 7-5: Component naming](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_7-5)
* [NDR Section 10.8: Naming Rules](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_10.8)
* [NDR Table 10-2: Representation Terms](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#table_10-2)
* [NDR Section 11.6.1: Human-readable documentation](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1)
* [NDR Section 11.6.1.1: Data Definition Opening Phrases](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#section_11.6.1.1)
* [NDR Rule 11-31: Standard opening phrase for element](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-31)
* [NDR Rule 11-32: Standard opening phrase for complex type](http://reference.niem.gov/niem/specification/naming-and-design-rules/3.0/niem-ndr-3.0.html#rule_11-32)