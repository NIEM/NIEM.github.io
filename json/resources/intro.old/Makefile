
targets = object-model.png

default: ${targets}

%.png: %.dot
	dot -Tpng -o$@ $<

%.dot: dot_macros.m4 %.dot.m4 
	m4 -P $^ > $@

