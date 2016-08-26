<p>
<a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg"/></a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-mit-blue.svg"/></a>

<a href="https://travis-ci.org/Skahrz/project-skeleton">
<img src="https://travis-ci.org/Skahrz/project-skeleton.svg?branch=master"/>
</a>

<a href='https://coveralls.io/github/Skahrz/project-skeleton?branch=master'>
<img src='https://coveralls.io/repos/github/Skahrz/project-skeleton/badge.svg?branch=master' alt='Coverage Status' /></a>
</p>


# Project skeleton

This is a simple **project** starter. If you need to quickly kickstart a module or a library, you'd better work with [Yeoman](http://yeoman.io/) and [this](https://github.com/yeoman/generator-node) generator.

# Prerequisites

## Nodejs

You need to have a Nodejs version installed to make this project works. You can get one on [Nodejs website](https://nodejs.org/en/) or using the [NVM tool](https://github.com/creationix/nvm). Actually, Travis covers nodejs v0.10, v0.11, v0.12, v4.x and v6.x.

You also need to install globally [gulp](https://github.com/gulpjs/gulp), [esdoc@0.4.3](https://github.com/esdoc/esdoc) and [standard](https://github.com/feross/standard) using

```
npm install -g standard gulp esdoc@0.4.3
```

## Docker (optional)

This project provides a Dockerfile if you need to build your own based on [the phusion baseimage](https://github.com/phusion/baseimage-docker) that could be configure to launch your application.

If you need to know more about Docker, let's start on [their website](https://www.docker.com/) otherwise, build the image and launch it inside a container :

```
docker build -t my-image .
```

And then run it :

```
docker run -d my-image
```

# Tools

This project provides some standard stuff to quickly start a project :

- [Babeljs](https://babeljs.io/) (gulp-babel) for ES6 transpiling
- [Isparta](https://github.com/douglasduteil/isparta) / [Istanbul](https://github.com/gotwarlost/istanbul) for ES6 code coverage
- [Mocha](https://github.com/mochajs/mocha) / [Chai](http://chaijs.com/) / [Sinon](http://sinonjs.org/) as tools for unit testing
- [Standard](https://github.com/feross/standard) as the default linter
- [Bunyan](https://github.com/trentm/node-bunyan) as the default logger ([ELK](https://www.elastic.co/webinars/introduction-elk-stack) pluggable)
- YML configuration files
- [Travis CI](https://travis-ci.org/) status build (don't forget to change the badge)
- [Coveralls](https://coveralls.io/) for code coverage preconfigure (don't forget to change the badge)
- [Dockerfile](https://www.docker.com/) to create your own image
- Pre-filled CONTRIBUTING file to have a base for writing
- Pre-filled TODO file to have a base for writing
- [Esdoc](https://esdoc.org/) for ES6 code documentation

# Commands

Start the project with the dev environnement:
```
npm start
```

Start the project with the prod environnement:
```
npm run prod
```

*NB : you can add more environnement by adding a conf file and adding a new script in your package.json script. For example, if you need to use my new integration-server.yml configuration file, you can add this new script line to start the project :*
```
"integration": "npm run lint && gulp && node ./dist/app integration-server"
```

Running unit testing and generating the coverage report in ./coverage :
```
npm test
```

Running the linter in standalone :
```
npm run lint
```

Generate the documentation :
```
npm run docs
```
