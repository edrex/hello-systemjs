# Hello, System.js

React hello world, with [jspm](http://jspm.io/) / [System.js](https://github.com/systemjs/systemjs) and [Babel](https://babeljs.io/).

## Install

```
export PATH=./node_modules/bin:$PATH
npm install
jspm install
```

## Run

```
npm start
```

## Bundle

```
npm run bundle
```

This creates main.js in the bundle dir, which you can then ship off to a server.

## Resources

 - [jspm-cli/Getting-Started](https://github.com/jspm/jspm-cli/wiki/Getting-Started)
 - [jspm-cli/Production-Workflows](https://github.com/jspm/jspm-cli/wiki/Production-Workflows)

## Takeaways / Followup questions

 - It seems crazy complicated, but it works.
 - Use it unbundled in production, with a CDN? I would love to be able to deploy unmodified source to production, without including deps.
