# Introduction

```js
$`faker.haker.phrase()`


```

# Library

```js
// The standard bookmarks format uses datauri format

import { Liquid } from 'liquidjs';
const engine = new Liquid();
const string = `
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL><p>
    <DT><H3 ADD_DATE="1675628554" LAST_MODIFIED="1676181591" PERSONAL_TOOLBAR_FOLDER="true">Bookmarks bar</H3>
    <DL><p>
        {% for entry in entries %}
        <DT><A HREF="https://{{ entry.hostname }}/#room={{entry.tags[0]}},{{ entry.tags[1] }}" ADD_DATE={{ entry.time }} ICON="{{ entry.decodedUri }}">{{ entry.tags[2] }}</A></DT>
        {% endfor %}
    </DL>
</DL>
`

// TODO map with decodedIconUri
// const snapshots = await $`restic snapshots`
// const bytes = crypto.AES.decrypt(snapshot.tags[0], snapshot.tags[1]);
// const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
// const decodedIconUri = excalidraw.decode(decryptedData)
const entries = await fs.readJSON('snapshots.json')
const values = { entries: entries }
const res = await engine.parseAndRender(string, values)

fs.outputFile(`bookmarks.html`, res)



```

# Snapshots

```js
// Create a JSON version of snapshots

await $`restic -r ${$.env.RESTIC_REPOSITORY} --password-command "pass show ${$.env.SUBDOMAIN}" snapshots --json > snapshots.json



```

# Events

```js
# Events 

Events are scheduled according to the logic outlined in the episode of Tim Ferriss podcast.

<Events start days />

await $`calcurse -Q -d 01/01/2023 -d 15 --format-recur-event '  - %m\n  - %n\n---' | yq -s > events.json`


```

# passwords

```js
$`pass generate ${$.env.SUBDOMAIN}`


```

# restic backup

```js
# Create a snapshot of the files


```

# todo.json

```js
# TODO

Export todo items for printing README.md

Use priority to schedule build steps


```

# restic init

```js
# Initialize a restic repo


```

# todo

```js
# The scaffold of a todo

- faker.hacker.phrase()
- what.three.words


```

# chrome extension

```js
# Chrome extension


```

# language server

```js
# Language server


```

# tree sitter grammar

```js
# Tree sitter grammar


```

# docker extension

```js
# Docker extension


```

