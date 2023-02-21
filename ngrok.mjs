//// Ngrok
// run a docker container on a dynamic port with a subdomain
await $`docker run --net=host -p 4040 -it ngrok/ngrok http 80 --subdomain ${$.env.SUBDOMAIN}`
