<!-- markdownlint-disable -->
<p align="center">
  <a href="https://dcs-js.netlify.app/" rel="noopener" target="_blank"><img src="https://socialify.git.ci/unfoldingWord/dcs-js/image?description=1&descriptionEditable=A%20javascript%20client%20for%20Door43%20Content%20Service&font=Raleway&issues=1&language=1&logo=https%3A%2F%2Fgit.door43.org%2Fassets%2Fimg%2Flogo.svg&owner=1&pattern=Plus&pulls=1&theme=Light" alt="dcs-js" />
</a>
</p>
<h1 align="center">dcs-js</h1>
<p align="center">
A Door43 Content Service API client that makes it easier to use DCS API.
</p>

## Usage

### Consuming

dcs-js is available as an npm package.

npm:

`npm install dcs-js`
yarn:

`yarn add dcs-js`
pnpm:

`pnpm add dcs-js`

### API

dcs-js exposes a set of classes that should be instantiated to gain access to request methods.

A list of these classes can be found in: [/documentation/modules.md](/documentation/modules.md) or [dcs-js.netlify.app](https://dcs-js.netlify.app)

### Usage

First import one of the exposed Classes:

- AdminApi
- CatalogApi
- IssueApi
- MiscellaneousApi
- NotificationApi
- OrganizationApi
- PackageApi
- RepositoryApi
- SettingsApi
- UserApi

```js
import { OrganizationApi } from "dcs-js";
```

Then instantiate the class and call it's methods as required. Each method from this class will make a call to one of the DCS API endpoints operations.

**Example:**

```js
import { OrganizationApi } from "dcs-js";

async function dcsJsExample() {
  /* Instantiate the required DCS client. */
  const organizationClient = new OrganizationApi({
    /* Set the desired DCS server path */
    basePath: "https://qa.door43.org/api/v1",
  });
  /* Make a call to required client method */
  const organization = await organizationClient.orgGet("test_org");
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dcs-js-playground-u26eyp)

## Contributing

This library is generated using `@openapitools/openapi-generator-cli` package, which creates a _Door43 Content Service_ TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios).

### Regenerating the library

To regenerate the library run the `generate` script defined in `package.json`.

```
yarn generate
```

To regenearate from a different source add the source url argument:

```
yarn generate url.to/swagger-source.json
```

Then build the library.

### Regenearating the documentation

To regenerate docs use the `docmd` and `dochtml` scripts defined in `package.json`

```
yarn docmd
```

```
yarn dochtml
```

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

_check: [How to work with npm tags](https://dev.to/andywer/how-to-use-npm-tags-4lla)_

_Create an issue on this repo to suggest new tags._
