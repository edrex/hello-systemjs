# Hello, System.js

React hello world, with [jspm](http://jspm.io/) / [System.js](https://github.com/systemjs/systemjs) and [Babel](https://babeljs.io/).

Demo at https://edrex.github.io/hello-systemjs/

## What's the intention here?

Test out a development workflow down using System.js, react/jsx, and... other stuff.

This workflow promises a number of benefits:

 - use es6, JSX, Jade, etc without needing to run a build every time I make a change (WIN WIN WIN WIN)
 - Multiple options for prod deployment, including a deps CDN (even more win!) and pretty flexible bundling.


## Run


Start an `http` server and open `index.html`. To use browser-sync with live reload support:

```
npm install -g browser-sync
npm start
```

Dependencies are loaded from the jspm.io CDN. The nice thing about this workflow is it doesn't require any local build tooling to do development. Just fire up an HTTP server, a browser, and a text editor and start writing ES6 and JSX.

## Using JSPM to install deps locally

```
export PATH=./node_modules/bin:$PATH
npm install
jspm install
```

This will switch the dependency loading mode from remote to local. To switch it back, run:

```jspm setmode remote```

## Bundle

To bundle all deps into a single, standalone file, run:

```
npm run bundle
```

This creates main.js in the bundle dir, which you can then ship off to a server.

## Resources

 - [jspm-cli/Getting-Started](https://github.com/jspm/jspm-cli/wiki/Getting-Started)
 - [jspm-cli/Production-Workflows](https://github.com/jspm/jspm-cli/wiki/Production-Workflows)

## Takeaways 

- Everything except `config.js` mutation (by jspm) happens **client-side**.
- Loads dependencies
  - individually, for dev or **http/2** prod
    - from same origin (`jspm install`)
    - or from a CDN (`jspm setmode remote`, `inject`)
    - optionally with flat load order, to keep the number of round trips constant (`jspm depcache main`)
  - as bundles, for http/1.1 prod
    - with [arithmetic](https://github.com/jspm/jspm-cli/wiki/Production-Workflows#creating-a-bundle-with-arithmetic)
    - and on-demand loading.
- Also supports standalone bundles.
- Pretty easy to use

## Followup questions

 - Curious whether the functions of config.js could be made to run in the browser, to allow a pure client-side IDE acting on a REST document store.
 - How "hackable" is the loader? It seems to be very extensible, via [hooks](https://github.com/ModuleLoader/es6-module-loader/wiki/Extending-the-ES6-Loader)
