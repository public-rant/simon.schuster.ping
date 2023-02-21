// # Onlyplans
//
// ###### Contraints
//
// 13 keys. `reduce(13) { i+=1 } = 91`
//
// 91 days is ~3 months.

await $`restic -r rest:http://${$.env.SUBDOMAIN}.rant.local/${$.env.CONTAINER} --password-command "pass show ${$.env.SUBDOMAIN}" init`
