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

# all: README.md
# 	zx $?

ZX_LANG=js
FILTER ?= 1 # FIXME

HEADING = 'public-rant'

SUBHEADING = 'releases'
SED1 = 's/to do\:/hello/'
SED2 = 's/01.02.23\:$$/test/'
FORMAT_TODO=
FORMAT_RECUR_EVENT=
# calcurse -Q --from 01/01/2023 -d 2 --format-recur-event  > $@
# calcurse -Q --format-todo  | grep -v 'completed tasks\|to do' >> $@
README.md: #bookmarks.html
	calcurse -Q --from 01/01/2023 --days 2 --format-todo "# %m\n\n\`\`\`$(ZX_LANG)\n%N\n\`\`\`\n\n" --format-recur-event "\n\n\`\`\`$(ZX_LANG)\n%N\n\`\`\`" | sed $(SED1) | sed $(SED2) > $@
	sed -i -e 's/\t//g' $@
	cat $@
