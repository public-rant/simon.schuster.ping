include $(project).env
export
all: README.md 

MODULES = *.mjs

$(MODULES):
	zx $@

%.md: $(MODULES)
	cat $? > $@


ENVIRONMENT_FILES = *.rev *.pub *.env

clean: $(ENVIRONMENT_FILES)
	rm -rf $?
