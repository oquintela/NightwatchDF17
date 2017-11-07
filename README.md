# NightwatchDF17
## Setting up environment

1. Install the dependencies `npm install`
2. Authorize Dev Hub
3. sfdx force:org:create -s -f config/project-scratch-def.json -a scratch1
4. sfdx force:user:password:generate -u scratch1
5. sfdx force:org:display -u scratch1 --json > MyOrgDesc.json
6. node nightwatch.js tests/login-test.js



