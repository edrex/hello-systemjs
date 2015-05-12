# Hello, System.js

This project is about validating a browser app development workflow using [JSPM](http://jspm.io/), [System.js](https://github.com/systemjs/systemjs), [es6-module-loader](https://github.com/ModuleLoader/es6-module-loader), and [Babel](https://babeljs.io/).

Some benefits of this approach:

- Use ES6 features right now, with support back to IE8
- Use real module systems in the browser, with **frictionless** interop between ES6, NPM (CommonJS), and AMD modules.
- A flexible palette of dependency loading [strategies](https://github.com/jspm/jspm-cli/wiki/Production-Workflows) to fit your project's requirements:
  - individually, with external dependencies loading either from a same origin cache (`jspm_modules`) or from jspm.io HTTP/2 CDN, which proxies Github and NPM
  - as local factor bundles with [arithmetic](https://github.com/jspm/jspm-cli/wiki/Production-Workflows#creating-a-bundle-with-arithmetic) (`jspm bundle`)
  - as a monolithic/standalone bundle (`jspm bundle-sfx`)
- `config.js` is a single place to describe your current dependency tree, like `Gemfile.lock` in Ruby's [Bundler](http://bundler.io/). It allows locking/overriding versions and even mapping dependencies from other registries/module systems as needed. It's enormously useful. Unless you want to override something, JSPM will smartly manage this file for you.

## Task list

- [x] React components defined as ES6 classes
- [x] Hello component is in a [separate repo](https://github.com/edrex/hello-component) and  injects its own CSS via the loader.
- [x] Testing. See [hello-component](https://github.com/edrex/hello-component) for more test goodness.

## Run

[View the demo online ](https://edrex.github.io/hello-systemjs/) or fire up an HTTP server to try it locally.

```
npm install -g http-server && http-server
```


## Local development

You only need `jspm` to manipulate dependencies in `config.js` and download packages. Otherwise you can just edit files and reload your browser.

To install jspm:
```
export PATH=./node_modules/bin:$PATH
npm install
```

Download dependencies to `jspm_packages`
```
jspm install
```

This will switch the dependency loading mode from remote to local. To switch it back, run:

```
jspm setmode remote
```

### Working with local copies of dependencies

`jspm link` (each time you make a change to the dependency)

To run automatically on each change, see my comment [here](https://github.com/jspm/jspm-cli/issues/481#issuecomment-95681248).

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
 - [karma-jspm](https://github.com/Workiva/karma-jspm) to enable loading test/app code using SystemJS. Another very similar option is [rolaveric/karma-systemjs](https://github.com/rolaveric/karma-systemjs).

It's possible to use SystemJS to mock modules. 

- https://github.com/systemjs/systemjs/issues/366
- https://github.com/micahasmith/babel-test (and [my fork](https://github.com/edrex/babel-test) made some small changes to get it working).

## Future questions

### How hackable is the loader?

It seems to be very extensible, via [hooks](https://github.com/ModuleLoader/es6-module-loader/wiki/Extending-the-ES6-Loader).
