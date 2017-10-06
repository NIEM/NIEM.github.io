---
  title: Constructs
---

- TOC
{:toc}

## Overview

<table class="table table-bordered table-hover table-striped">
  <tr>
    <th>Construct</th>
    <th>Definition</th>
    <th>Overview</th>
    <th>XML</th>
    <th>JSON</th>
  </tr>
  <tr>
    <td>Namespace</td>
    <td>{% include_relative namespace/def.md %}</td>
    <td><a href="namespace/index.html">overview</a></td>
    <td><a href="namespace/xml.html">xml</a></td>
    <td><a href="http://niem.github.io/json/guidance/#niem-json-template">json</a></td>
  </tr>
  <tr>
    <td>Component</td>
    <td>{% include_relative component/def.md %}</td>
    <td><a href="component/index.html">overview</a></td>
    <td>n/a</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Property</td>
    <td>{% include_relative component/property/def.md %}</td>
    <td></td>
    <td>n/a</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Type</td>
    <td>{% include_relative component/type/def.md %}</td>
    <td></td>
    <td>n/a</td>
    <td>n/a</td>
  </tr>
  <tr>
    <td>Facet</td>
    <td>{% include_relative facet/def.md %}</td>
    <td><a href="./facet/index.html">overview</a></td>
    <td><a href="./facet/xml.html">xml</a></td>
    <td>TBD</td>
  </tr>
</table>

\* n/a - See below for XML and JSON representations of specific constructs.

## Kinds of Properties

<table class="table table-bordered table-hover table-striped">
  <tr>
    <th>Property</th>
    <th></th>
    <th>Definition</th>
    <th>Overview</th>
    <th>XML</th>
    <th>JSON</th>
  </tr>
  <tr>
    <td>Element</td>
    <td></td>
    <td>{% include_relative component/property/element/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#element-content-of-an-object-or-association-type">json</a></td>
  </tr>
  <tr>
    <td></td>
    <td>Abstract</td>
    <td>{% include_relative component/property/element/abstract/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#abstract-elements-and-substitution-groups">json</a></td>
  </tr>
  <tr>
    <td></td>
    <td>Substitution</td>
    <td>{% include_relative component/property/element/substitution/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#abstract-elements-and-substitution-groups">json</a></td>
  </tr>
  <tr>
    <td>Attribute</td>
    <td></td>
    <td>{% include_relative component/property/attribute/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#element-with-simple-content-and-attributes">json</a></td>
  </tr>
</table>

## Kinds of Types

<table class="table table-bordered table-hover table-striped">
  <tr>
    <th>Type</th>
    <th>Content</th>
    <th>Definition</th>
    <th>Overview</th>
    <th>XML</th>
    <th>JSON</th>
  </tr>
  <tr>
    <td>Simple Type</td>
    <td></td>
    <td>{% include_relative component/type/simple/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#element-with-simple-content-and-no-attributes">json</a></td>
  </tr>
  <tr>
    <td>Complex Type</td>
    <td>Simple Content</td>
    <td>{% include_relative component/type/csc/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#element-with-simple-content-and-attributes">json</a></td>
  </tr>
  <tr>
    <td>Complex Type</td>
    <td>Complex Content</td>
    <td>{% include_relative component/type/ccc/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#element-with-complex-content-and-attributes">json</a></td>
  </tr>
</table>

## NIEM-specific constructs

<table class="table table-bordered table-hover table-striped">
  <tr>
    <th>Construct</th>
    <th>Definition</th>
    <th>Overview</th>
    <th>XML</th>
    <th>JSON</th>
  </tr>
  <tr>
    <td>Adapter</td>
    <td>{% include_relative niem-construct/adapter/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#adapter-elements">json</a></td>
  </tr>
  <tr>
    <td>Association</td>
    <td>{% include_relative niem-construct/association/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#element-content-of-an-object-or-association-type">json</a></td>
  </tr>
  <tr>
    <td>Augmentation</td>
    <td>{% include_relative niem-construct/augmentation/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#augmentations">json</a></td>
  </tr>
  <tr>
    <td>Metadata</td>
    <td>{% include_relative niem-construct/metadata/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#metadata">json</a></td>
  </tr>
  <tr>
    <td>Role</td>
    <td>{% include_relative niem-construct/role/def.md %}</td>
    <td></td>
    <td></td>
    <td><a href="http://niem.github.io/json/guidance/#references-and-idref-attributes">json</a></td>
  </tr>
</table>