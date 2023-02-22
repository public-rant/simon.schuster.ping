# include /tmp/$(project).env
# export
# all: *.json 
#
# /tmp/%.env:
# 	${MAKE} -Be project=$*
#
#
# MODULES = render.bookmarks.mjs
#
# $(MODULES):
# 	zx $@
#
# %.md: $(MODULES)
# 	cat $? > $@
#
#
# ENVIRONMENT_FILES = *.rev *.pub *.env
#
# clean: $(ENVIRONMENT_FILES)
# 	rm -rf $?
#
#
# events.json:
# 	@calcurse -Q -d 01/01/2023 -d 15 --format-recur-event '  - %m\n---' | yq -s > $@
#
# todo.json:
# 	@calcurse -Q -t --format-todo '  - %n\n' | yq -s > $@
#
# make readme is the entrypoint
# it runs calcurse -Q -t 1 which is a special entry containing a record of itself with greater scope
#
# make -e scope=2
#

project ?= default

include $(project).env
export

all: README.md
	zx $?

README.md: #bookmarks.html
	calcurse -Q --from 01/01/2023 -d 2 --format-recur-event "\n\n\`\`\`js\n%N\n\`\`\`" > $@
	calcurse -Q --format-todo "# %m\n\n\`\`\`js\n%N\n\`\`\`\n\n" | grep -v 'completed tasks\|to do' >> $@
	sed -i -e 's/\t//g' $@
