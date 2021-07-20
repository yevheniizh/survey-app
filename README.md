# Survey App

## Description

This is a test project to enhance junior developers' skills in teamwork collaboration and technologies such as Firebase, Github Actions, Github Packages.

##

This project is a monorepo that consists of three parts: `admin`, `consumer`, and `shared` app.

- The `consumer` app represents an average feedback survey for users. Further, `consumer` transforms into an independent component for `shared` app package.

- With a `shared` app you can develop, update and publish a library of common components for use them in different projects. As for now, a `shared` app has

  - a `consumer` as an independent component
  - a firebase API logic (init firebase connection, authentication, and datastorage).

- The `admin` app represents an editor for `consumer` component fields data, which stores in firestore database. Admin can change, update and save existing data or create a new survey example. Before the admin is able to work with an app, he needs to Log In manually or with Google Auth (or Sign Up).

## Table of Contents

1. [Tech stack](#tech-stack)
2. [Development environment](#development-environment)

   - [Admin App](#github-packages)
   - [Consumer App](#consumer-app)
   - [Shared App](#shared-app)
   - [To launch ESLint](#to-launch-eslint)
   - [Firebase Deployment tools](#firebase-deployment-tools)

3. [Firebase Database](#firebase-database)
4. [CI pipelines with Github Actions](#ci-pipelines-with-github-actions)

## Tech Stack

- **Create React App** as a boilerplate
- Typescript / React / React Hooks / React Router
- Material-UI
- ESLint / Prettier / Husky
- Firebase authentication, datastorage and hosting
- Github Actions, CI/CD workflows
- Github Packages

## Development Environment

### Admin App

> Before you start `admin` / `consumer` / `shared` project you should fix `.npmrc` and paste correct `NPM_TOKEN` locally instead of `${NPM_TOKEN}`

```bash
$ cd admin && npm install       // install dependencies
$ npm run start                 // launch dev server
```

**Deployment**

- new version of app automatically deploys to Firebase hosting with merging updates from `admin` app into master branch.
- For deploying manually to Firebase hosting

  ```
  $ npm run build           // generate a production build
  $ firebase deploy --only hosting:admin
  ```

#

### Consumer App

> Before you start `admin` / `consumer` / `shared` project you should fix `.npmrc` and paste correct `NPM_TOKEN` locally instead of `${NPM_TOKEN}`

> With a root route `localhost:3000` you can see a string error, caused by `consumer` needs the correct web address in the format `localhost:3000/surveys/{{id}}` for rendering the page

**Launch App**

```bash
$ cd consumer && npm install    // install dependencies
$ npm run start                 // launch dev server
```

**Deployment**

- new version of app automatically deploys to Firebase hosting with merging updates from `consumer` app into master branch.
- For deploying manually to Firebase hosting

  ```
  $ npm run build
  $ firebase deploy --only hosting:consumer
  ```

#

### Shared App

**Launch App**

```bash
$ cd shared && npm install      // install dependencies
$ npm run start                 // launch dev server
```

**Publishing package**

- You can publish new version of package automatically to Github Packages with merging updates from `shared` app into master branch.
- For publishing manually to Github Packages replace <update-type> with one of the semantic versioning release types (_patch_, _major_, or _minor_):

  > Before you publish new package you should fix `.npmrc` and paste correct `NPM_TOKEN` locally instead of `${NPM_TOKEN}`

  ```
  $ npm version <update-type>
  $ npm publish
  ```

**How to link and run `shared` package in consumer app locally**

- You should link all needed packages from shared library

  ```bash
  $ cd shared && npm run build && npm link
  $ cd node_modules/react && npm link
  $ cd ../react-dom && npm link
  ```

- Then go back to the <consumer-app> and paste linked packages

  ```bash
  $ cd <consumer-app>
  $ npm link react &&
    npm link react-dom &&
    npm link <shared-package-name>
  $ npm run start
  ```

#

### To launch eslint

```bash
$ npm run lint            // search issues over all app
$ npm run lint:fix        // fix issues over all app
```

#

### Firebase deployment tools

You can change Firebase config files (.firebaserc and firebase.json) which are located in a root of a project. But you should [install Firebase CLI globally](https://firebase.google.com/docs/cli#windows) to work with deployment from the local machine.

```bash
$ npm install -g firebase-tools
```

To be sure firebase-tools has been installed

```bash
$ firebase -V
```

Then Log In with console

```bash
$ firebase login
```

##

More info:

- [Github Actions CI/CD workflow to Firebase Hosting](https://github.com/marketplace/actions/deploy-to-firebase-hosting)

- [Multiple sites deployment configuration](https://firebase.google.com/docs/hosting/multisites)

#

## Firebase Database

If you have some problems with writing data to Firestore Database so maybe your access has been expired. Go to **Firebase** > **Project Console** > **Firestore Database** > **Rules** and update code with pasting code below. Change Date if needed.

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if
        request.time < timestamp.date(2030, 8, 30);
    }
  }
}
```

#

## CI pipelines with Github Actions

Github Actions CI/CD workflows are located in a `.github/workflows` and start working on merge to master branch. There are deploying actions from `admin` and `consumer` app, and publishing action from `shared` app.
