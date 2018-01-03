
no_trailing_newline_files_default := ${shell find json -type f -name '*.json'}

no_trailing_newline_files = ${no_trailing_newline_files_default}

targets = \
  ${no_trailing_newline_files:%=tmp/no-newline/%}

default: ${targets}

tmp/no-newline/%: %
	./run remove-trailing-newline $<

