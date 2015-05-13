# Hello, System.js

[![Build Status](https://secure.travis-ci.org/edrex/hello-component.png?branch=master)](https://travis-ci.org/edrex/hello-component) | [Demo](https://edrex.github.io/hello-systemjs/)

In this project, I validate a browser app development workflow using [JSPM](http://jspm.io/), [System.js](https://github.com/systemjs/systemjs), [es6-module-loader](https://github.com/ModuleLoader/es6-module-loader), and [Babel](https://babeljs.io/).

The pitch:

- Use ES6 features is current browsers
- Leverage modules in the browser, with **frictionless** interop between ES6, CommonJS, and AMD modules.
- Several dependency-loading [strategies](https://github.com/jspm/jspm-cli/wiki/Production-Workflows) to fit your project's requirements:
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

### Tests

```
karma start
```

Download dependencies to `jspm_packages`
```
jspm install
```

This will switch the dependency loading mode from remote to local. To switch it back, run:

```
jspm setmode remote
```

## Bundle

To bundle all deps into a single, standalone file, run:

```
jspm bundle-sfx main bundle/main.js --minify
```

`bundle/index.html` loads the bundle.

## Testing

Testing setup is cribbed from the yo [jspm-lib](https://github.com/djindjic/generator-jspm-lib) generator, and uses 

 - Karma test runner
 - Mocha specs, Chai assertions
 - [karma-jspm](https://github.com/Workiva/karma-jspm) to load test/app code using SystemJS.

It's [possible](https://github.com/systemjs/systemjs/issues/366) to use SystemJS to [mock modules](https://github.com/edrex/babel-test). 

## Q&A

### How to work with local copies of dependencies?

Read up on [jspm link](https://github.com/jspm/jspm-cli/wiki/Linking). You have to re-run `jspm link` each time you make a change. [This gulp task](https://github.com/djindjic/generator-jspm-lib/blob/master/app/templates/gulpfile.js) provides a way to automate it.

### How hackable is the loader?

It seems to be very extensible, via [hooks](https://github.com/ModuleLoader/es6-module-loader/wiki/Extending-the-ES6-Loader).
