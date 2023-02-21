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
