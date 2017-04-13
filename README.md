<p>
<a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg"/></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-mit-blue.svg"/></a>
</p>

A simple Node.js (v4+) project starter.

### Features

- Quick bootstrap with [gulp]() and [Babel]()
- Testing with [Ava]()
- Prefilled .travis.yml file
- [Coveralls]() support included
- [Dockerfile](#run-with-docker) ready to use
- Configuration reader from YML files
- Javascript documentation with [esdoc]()
- Minimal size artifact when building
- Prefilled .md files ([TODO](TODO.md), [CONTRIBUTING](CONTRIBUTING.md), [README](PROJECT_README.md))

### Installation

```javascript
// install yarn
npm install -g yarn

// clone project in the wanted directory
git clone https://github.com/Skahrz/project-skeleton my-app

// position yourself in the folder
cd my-app

// run the bootstrap script
yarn run bootstrap

// start the project with the dev configuration
npm start
```

[GIF ANIME POUR MONTRER COMMENT CA MARCHE]

It installs the dev dependencies for the `.` folder and creates the `./dist` folder with the production dependencies and the minified code.

The `./dist` folder is now completely independent and can be delivered in your different environments.

#### Building the project

```
npm run build
```

builds the project for any environments. The configuration to use will be managed while launching the application using

```javascript
// move inside of the dist folder
cd ./dist

// uses the dev configuration file
node app dev

// uses the prod configuration file
node app prod
```

#### Usage with Docker

```javascript
// create the docker image from the dist folder
docker build -t my-app-name .

// run a new container using the my-app-name image
docker run my-app-name
```

It passes all the files into docker that install the dependencies, build the project, and start a the application
