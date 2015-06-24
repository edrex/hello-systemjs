# Hello, System.js

Demonstrates a browser app development workflow using [JSPM](http://jspm.io/) and [System.js](https://github.com/systemjs/systemjs). See the rather silly end product [here](https://edrex.github.io/hello-systemjs/).

- Use ES6/7 language features via [Babel](https://babeljs.io/)
- **Frictionlessly** load ES6, CommonJS, and AMD modules in the same app.
- Load modules in other languages such as TypeScript
- [Multiple loading strategies](https://github.com/jspm/jspm-cli/wiki/Production-Workflows) under one API.
  - individually, with external dependencies loading either from a same origin cache (`jspm_modules`) or from jspm.io HTTP/2 CDN, which proxies Github and NPM
  - as local factor bundles with [arithmetic](https://github.com/jspm/jspm-cli/wiki/Production-Workflows#creating-a-bundle-with-arithmetic) (`jspm bundle`)
  - as a monolithic/standalone bundle (`jspm bundle-sfx`)
- `config.js` is a single place to describe your current dependency tree, like `Gemfile.lock` in Ruby's [Bundler](http://bundler.io/). It allows locking/overriding versions and even mapping dependencies from other registries/module systems as needed. It's enormously useful. Unless you want to override something, JSPM will smartly manage this file for you.

## Local development

### Run

Just serve this directory via HTTP, like

```
npm install -g serve && serve
```

### Install dependencies

```shell
export PATH=./node_modules/bin:$PATH
npm install
```

This just installs dev dependencies. App dependencies are still loaded from a remote CDN.

```shell
# switch to local mode
jspm set-mode local
jspm install

# back
jspm set-mode remote
```

### Working with local copies of dependencies

[Read about](https://github.com/jspm/jspm-cli/wiki/Linking) `jspm link`. You have to re-link each time you make a change. [This gulp task](https://github.com/djindjic/generator-jspm-lib/blob/master/app/templates/gulpfile.js) provides a way to automate it.



## Tests

[![Build Status](https://secure.travis-ci.org/edrex/hello-component.png?branch=master)](https://travis-ci.org/edrex/hello-systemjs)

To run the tests: 

```
karma start
```

Setup is cribbed from the [jspm-lib generator](https://github.com/djindjic/generator-jspm-lib), and uses 

 - Karma test runner
 - Mocha specs, Chai assertions
 - [karma-jspm](https://github.com/Workiva/karma-jspm) to load test/app code using SystemJS.

SystemJS [can](https://github.com/systemjs/systemjs/issues/366) inject [mocked modules](https://github.com/edrex/babel-test). 

## Bundle

While I am most interested in deploying without bundling (using the CDN), jspm can also create *factor* and *self-executing* bundles just like with Browserify and Webpack. 

Create a self-executing bundle starting from the `app/main` entry point:

```
jspm bundle-sfx app/main bundle/main.js --minify
```

**Future:** Rename `bundle` &rarr; `dist` and use [html-dist](https://github.com/jackfranklin/html-dist) to create `dist/index.html`.
