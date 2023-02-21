//// Ngrok
// run a docker container on a dynamic port with a subdomain
await $`docker run --subdomain ${$.env.SUBDOMAIN} --net=host -p 4040 -it ngrok/ngrok http 80`
