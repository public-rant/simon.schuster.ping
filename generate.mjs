import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const secret = $.env.SECRET
const passphrase = $.env.PASSPHRASE
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const environment_data = async (x) => {
  const container = name(2, "-")
  const subdomain = name(3, ".")
  const secret = $.env.SECRET || subdomain
  const promise = await openpgp.generateKey({
      type: 'rsa', // Type of the key
      rsaBits: 4096, // RSA key size (defaults to 4096 bits)
      userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
      passphrase: passphrase || secret // protects the private key
  });

  const path = `${container}.env`

  const data = { files: faker.image.dataUri() } // excalidraw drawing: need to render based on image dimensions

  const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

  const string = `
    CONTAINER=${container}
    SUBDOMAIN=${subdomain}
    PROMPT="${faker.hacker.phrase()}"
    SECRET=${secret}
    ICON_URI=${ciphertext}
    `

  // const bytes  = crypto.AES.decrypt(ciphertext, secret);
  // const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
  fs.outputFile(`${container}`, promise.privateKey)
  fs.outputFile(`${container}.pub`, promise.publicKey)
  fs.outputFile(`${container}.rev`, promise.revocationCertificate)
  fs.outputFile(`${container}.env`, string)

  // const hmacDigest = crypto.Base64.stringify(crypto.hmacSHA512(path + hashDigest, promise.privateKey));
}

await Array(2).fill(0).map(environment_data)

