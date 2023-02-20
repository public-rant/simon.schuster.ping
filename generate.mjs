import * as openpgp from 'openpgp'
import crypto from 'crypto-js'
import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';
const secret = $.env.SECRET
const passphrase = $.env.PASSPHRASE
const name = (n, s) => Array(n).fill(null).map(_ => faker.word.adjective(5)).join(s)


const environment_data = async (x) => {
  const project_name = name(2, "-")
  const container_name = name(3, ".")
  const secret = $.env.SECRET || container_name
  const promise = await openpgp.generateKey({
      type: 'rsa', // Type of the key
      rsaBits: 4096, // RSA key size (defaults to 4096 bits)
      userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs
      passphrase: passphrase || container_name // protects the private key
  });

  const string = `
    CONTAINER_NAME=${container_name}
    PROMPT="${faker.hacker.phrase()}"
    SECRET=${secret}
    ICON_URI=${faker.image.dataUri()}
    `

  const path = `${project_name}.env`

  const data = { foo: 'bar' } // excalidraw drawing: need to render based on image dimensions

  const ciphertext = crypto.AES.encrypt(JSON.stringify(data), secret).toString();

  const bytes  = crypto.AES.decrypt(ciphertext, secret);
  const decryptedData = JSON.parse(bytes.toString(crypto.enc.Utf8));
  console.log(ciphertext)
  console.log(decryptedData)
  fs.outputFile(`${container_name}.env`, string)

  // const hmacDigest = crypto.Base64.stringify(crypto.hmacSHA512(path + hashDigest, promise.privateKey));
}

const value = await Array(2).fill(0).map(environment_data)

console.log(value)

