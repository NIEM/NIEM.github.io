
source_dot_files = ${wildcard *.dot}

png_files = ${source_dot_files:%.dot=%.png}

.PHONY: default

default: ${png_files}

%.png: %.dot
	dot -Tpng -o$@ $<

.PHONY: spell # check spelling
spell: index.md
	aspell --home-dir=. -p aspell-exceptions.txt list < $< | sort -uf

