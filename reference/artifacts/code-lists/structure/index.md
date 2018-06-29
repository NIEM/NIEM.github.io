---
  title: Code List Structure
  short: Structure
  icon: fa-sitemap
  description: Code List Structure
---

The following sections provide details on the parts that make up a code list.

## Terminology

**binding**

{:. box}
>the correspondence between a set of data values, such as data within an XML document, and a set of columns within a code list

**code list identifier**

{:. box}
>an absolute URI that identifies a code list

**column identifier**

{:. box}
>an absolute URI in a Genericode code list document (GC-CLD) that identifies a column as a well-known column

**column name**

{:. box}
>a string in a CSV file code list document (CSV-CLD) file that identifies a column as a well-known column

**well-known column**

{:. box}
>a column in a CSV-CLD or GC-CLD that has welll-understood semantics, i.e., the semantics are generally understood

**\#code**

{:. box}
>a binding that uses the column name "code" to refer to a well-known column

**\#range**

{:. box}
>a binding that uses the column name "range" to refer to range columns (columns that describe ranges of values)

## Comma-Separated Values (CSV) Files

A CSV code list document MUST be a CSV file with the following features:

- Has a CSV header.
- No column names are empty.

A CSV file may act as a CSV code list document when it has the following characteristics:

- **Code list identifiers** - the CSV file does not specify its code list identifiers. Each CSV file contains a single code list. The CSV file MAY be resolved to any code list identifier.
- **Distinct entries** - each CSV record of the CSV file constitutes a distinct entry.
- **Code values** - each CSV field corresponds to a code value.
- **Column names** - the column name of a code value is the CSV column name corresponding by position within the CSV header to the position of the CSV field within its CSV record.

A column in a CSV file is a well-known column when its CSV column name is the same as the column name of a well-known column.

A reference to column #code is matched, in order, to the following:

- a column with CSV column name of code, or
- the first column of the CSV file.

A code value in a CSV file has no type; its data type is empty.
