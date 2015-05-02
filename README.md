# Hello, System.js

Browser app development workflow testbed, dressed  as [Hello World](https://edrex.github.io/hello-systemjs/). The core technologies are [JSPM](http://jspm.io/), [System.js](https://github.com/systemjs/systemjs), es6-module-loader, and [Babel](https://babeljs.io/).

- [x] A real module system for the browser.
- [x] compile es6, JSX, Jade, etc clientside
- [x] Load external modules from an HTTP/2 CDN that proxies Github and NPM.
- [x] ES6 and JSX => ES5 syntax transform (Babel)
- [x] React components defined as ES6 classes
- [x] Hello component is in a separate repo and  injects its own CSS via the loader.
- [ ] Testing. Karma, Jasmine?

[Multiple workflows](https://github.com/jspm/jspm-cli/wiki/Production-Workflows) allow loading of dependencies
  - [x] individually, from local `jspm_modules`
  - [x] from an HTTP/2 CDN
    - [x] optionally with flat load order via `jspm depcache main`, to keep the number of round trips constant
  - [x] as factor bundles with [arithmetic](https://github.com/jspm/jspm-cli/wiki/Production-Workflows#creating-a-bundle-with-arithmetic), via `jspm bundle`
  - [x] as a standalone bundle, via `jspm bundle-sfx`


## Run

Since external dependencies are loaded from a CDN, you can just expose this directory via HTTP. e.g:

```
npm install -g http-server && http-server
```

or

```
browser-sync start --server --files **/*
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

```jspm setmode remote```

## Bundle

To bundle all deps into a single, standalone file, run:

```
jspm bundle-sfx main bundle/main.js --minify
```

`bundle/index.html` loads the bundle.

## Resources

 - [jspm-cli/Getting-Started](https://github.com/jspm/jspm-cli/wiki/Getting-Started)

## Followup questions

 - **How hackable is the loader?** It seems to be very extensible, via [hooks](https://github.com/ModuleLoader/es6-module-loader/wiki/Extending-the-ES6-Loader).
