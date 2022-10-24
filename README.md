## dcs-js

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment

- Node.js
- Webpack
- Browserify

Language level

- ES5 - you must have a Promises/A+ library installed
- ES6

Module system

- CommonJS
- ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:

```
yarn
yarn build
```

### Publishing

First build the package then run `yarn publish`

For beta versions use the beta tag:
`yarn publish --tag beta`

**Other available tags:**

- next: for release candidates

> check: [How to work with npm tags](https://dev.to/andywer/how-to-use-npm-tags-4lla)

> Create an issue on this repo to suggest new tags.

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
yarn add dcs-js --save
```

_unPublished (not recommended):_

```
yarn add PATH_TO_GENERATED_PACKAGE --save
```

## Regenerate the library

To regenerate the library run the `generate` script defined in `package.json`.

```

yarn generate

```

To regenearate from a different source add the source url argument:

```

yarn generate url.to/swagger-source.json

```

Then build the library.

## Regenearate the documentation

To regenerate docs use the `docmd` and `dochtml` scripts defined in `package.json`

```
yarn docmd
```

```
yarn dochtml
```
