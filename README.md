How to link and run packege in app:
* cd shared
* npm run start
* cd node_modules/react
* npm link
* cd ..
* cd react-dom
* npm link
* cd ../../../
* cd admin-v2
* npm link react
* npm link react-dom
* npm run start

**Development Environment**
- link shared library to the consumer apps
- cd shared && yarn build
- cd {consumerApp} && yarn link {{package name}}
