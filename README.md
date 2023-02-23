hello
# Introduction

```js
faker.haker.phrase()


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


test


```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```

```js
import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const container = name(2, "-")
const subdomain = name(3, ".")
const secret = $.env.SECRET || subdomain
const passphrase = $.env.PASSPHRASE
const promise = await openpgp.generateKey({
    type: 'rsa', // Type of the key
    rsaBits: 4096, // RSA key size (defaults to 4096 bits)
    userIDs: [{ name: subdomain, email: `${subdomain}@${container}.com` }], // you can pass multiple user IDs
    passphrase: passphrase || secret // protects the private key
});

const path = `${container}.env`

const fileId = crypto.SHA256(promise.publicKey).toString()
const data = {
  elements: [{type: 'text', text: promise.publicKey }],
  files: { fileId: fileId, url: faker.image.dataUri() }
} // excalidraw drawing: need to render based on image dimensions

const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

const string = `
  RESTIC_REPOSITORY=rest:http://localhost/${container}
  RESTIC_PASSWORD_COMMAND="pass show ${subdomain}"
  CONTAINER=${container}
  SUBDOMAIN=${subdomain}
  PROMPT="${faker.hacker.phrase()}"
  SECRET=${secret}
  ICON_URI=${ciphertext}
  `

fs.outputFile(`/tmp/${container}`, promise.privateKey)
fs.outputFile(`/tmp/${container}.pub`, promise.publicKey)
fs.outputFile(`/tmp/${container}.rev`, promise.revocationCertificate)
fs.outputFile(`/tmp/${container}.env`, string)


```# Introduction

```js
$`faker.haker.phrase()`




```