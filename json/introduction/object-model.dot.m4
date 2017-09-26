digraph G {
  graph [M_graph_attrs];
  edge [M_edge_attrs];
  node [M_node_attrs, shape = record];
  
  top [label="<poka>cyfs:PersonOtherKinAssociation\l"];
  top:poka:e -> poka:n;

  poka [label="{<sp>cyfs:SourcePerson\l
       |<tp>cyfs:TargetPerson\l
       |cyfs:PersonOtherKinAssociationCategoryCode: \"Maternal Grandfather\"\l}"];
  poka:sp:w -> sp:n;
  poka:tp:e -> tp:n;

  sp [label="{<pam>nc:PersonAgeMeasure\l
     |<phcc>j:PersonHairColorCode: \"BRO\"\l
     |<pn>nc:PersonName\l}"];
  sp:pam:w -> pam:n
  sp:pn:e -> sp_pn:n;

  tp [label="{<phcc>j:PersonHairColorCode: \"GRY\"\l
     |<pn>nc:PersonName\l}"];
  tp:pn:e -> tp_pn:n;

  pam [label="{nc:MeasureIntegerValue: \"14\"\l|nc:TimeUnitCode: \"ANN\"\l}"];

  sp_pn [label="{nc:PersonGivenName: \"Mortimer\"\l
        |nc:PersonSurName: \"Smith\"\l
        |nc:PersonNameSuffixText: \"Sr\"\l
        |nc:PersonPreferredName: \"Morty\"\l}"];

  tp_pn [label="{nc:PersonGivenName: \"Rick\"\l
        |nc:PersonSurName: \"Sanchez\"\l}"];
       
}
