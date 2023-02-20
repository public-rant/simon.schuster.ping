all: README.md 

MODULES = *.mjs

%.md: $(MODULES)
	zx $?
	zx $@

