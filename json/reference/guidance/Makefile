
SHELL = /bin/bash
.SECONDARY:

target_files = \
	object-model.merged.txt \
	object-model.png \

valid_xml_files = \
	full-example.xml \
	aux/object-model.xml \

xml_valid_tokens = ${valid_xml_files:%=tmp/valid_to_iepd_xsd/%}

default: ${target_files}

%.png: aux/%.dot
	dot -Tpng -o$@ $<

aux/%.dot: aux/dot_macros.m4 aux/%.dot.m4
	m4 -P $^ > $@

object-model.merged.txt: aux/object-model.xml aux/object-model.json
	paste <( cat aux/object-model.xml && echo " " ) aux/object-model.json | column -s $$'\t' -t > $@

.PHONY: valid
valid: ${xml_valid_tokens}

tmp/valid_to_iepd_xsd/full-example.xml: full-example.xml
	xs-validate --catalog=aux/sample-iepd/base-xsd/xml-catalog.xml $<
	mkdir -p ${dir $@}
	touch $@

tmp/valid_to_iepd_xsd/aux/object-model.xml: aux/object-model.xml
	xs-validate --catalog=aux/object-model-iepd/niem/xml-catalog.xml $<
	mkdir -p ${dir $@}
	touch $@

.PHONY: spell # check spelling
spell:
	@echo Any words that follow are bad...
	aspell --home-dir=. -p aux/aspell-exceptions.txt list < index.md | LC_ALL=C sort -uf

.PHONY: clean
clean:
	${RM} ${wildcard *~} object-model.png object-model.dot object-model.merged.txt
	${RM} -r tmp

