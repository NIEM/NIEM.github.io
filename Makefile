
no_trailing_newline_files = \
  json/data/simple.json \
  json/data/object-model.json \
  json/names/short-names.json \

targets = \
  ${no_trailing_newline_files:%=tmp/no-newline/%}

default: ${targets}

tmp/no-newline/%: %
	./run remove-trailing-newline $<

