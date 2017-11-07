rem sfdx force:auth:jwt:grant --clientid connectedappclientid --username username --jwtkeyfile server.key --setdefaultdevhubusername
sfdx force:org:create -s -f config/project-scratch-def.json -a scratch1
sfdx force:user:password:generate -u scratch1
sfdx force:org:display -u scratch1 --json > MyOrgDesc.json
node nightwatch.js tests/login-test.js
