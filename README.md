<!-- markdownlint-disable -->
<p align="center">
  <a href="https://dcs-js.netlify.app/" rel="noopener" target="_blank"><img src="https://socialify.git.ci/unfoldingWord/dcs-js/image?description=1&descriptionEditable=A%20javascript%20client%20for%20Door43%20Content%20Service&font=Raleway&issues=1&language=1&logo=https%3A%2F%2Fgit.door43.org%2Fassets%2Fimg%2Flogo.svg&owner=1&pattern=Plus&pulls=1&theme=Light" alt="dcs-js" />
</a>
</p>
<h1 align="center">dcs-js</h1>
<p align="center">
A <a href="https://git.door43.org/" rel="noopener" target="_blank">Door43 Content Service</a> API client that makes it easier to use <a href="https://git.door43.org/api/swagger" rel="noopener" target="_blank">DCS API</a>.
</p>
<hr/>

## Consuming

### Installation

dcs-js is available as an npm package.

npm:

`npm install dcs-js`
yarn:

`yarn add dcs-js`
pnpm:

`pnpm add dcs-js`

### API

dcs-js exposes a set of functions, factories and classes that should be instantiated to gain access to request methods.

A list of these exported modules can be found in: [/documentation/modules.md](/documentation/modules.md) or [dcs-js.netlify.app](https://dcs-js.netlify.app)

### Usage

#### Object-oriented interface

dcs-js exposes each of the DCS API operations as methods organized into javascript classes.

To use this object-oriented modules first import one of the exposed Classes:

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

Then instantiate the class and call it's requester methods as required. Each method from this class will make a request to one of the DCS API endpoints operations.

**Example:**

```js
/* Import the required DCS client class. */
import { OrganizationApi } from "dcs-js";

async function dcsJsExample() {
  /* Instantiate the required DCS client class. */
  const organizationClient = new OrganizationApi({
    /* Set the desired DCS server path */
    basePath: "https://qa.door43.org/api/v1",
  });
  /* Make a call to required client requester method */
  const organizationRequest = await organizationClient.orgGet({
    org: "test_org",
  });

  /* Use the results */
  console.log(organizationRequest);
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dcs-js-classes-playground-u26eyp)

#### Functional programming interface

dcs-js also exposes each of the DCS API operations as functions organized in javascript function generators. User will be able to use a function for each specific request.

To use this functional programming modules first import one of the exposed generators:

- AdminApiFp
- CatalogApiFp
- IssueApiFp
- MiscellaneousApiFp
- NotificationApiFp
- OrganizationApiFp
- PackageApiFp
- RepositoryApiFp
- SettingsApiFp
- UserApiFp

```js
import { OrganizationApiFp } from "dcs-js";
```

Then use the generator to generate a requester function generators. Each requester function generator will generate a specific requester function that will allow the user to make a new request to one of the DCS API endpoints operations with the same params on each use.

**Example:**

```js
/* Import the required DCS function generator. */
import { OrganizationApiFp } from "dcs-js";

async function dcsJsExample() {
  /* Get required requester generator from dcs-js */
  const { orgGet } = OrganizationApiFp({
    /* Set the desired DCS server path */
    basePath: "https://qa.door43.org/api/v1",
  });

  /* Generate a specific request function */
  const getTestOrg = await orgGet("test_org");

  /**
   * Reuse this request function to make this same request
   * to DCS API on each call as many times as needed.
   */
  console.log(await getTestOrg());
  setTimeOut(() => console.log(await getTestOrg()), 2000);
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dcs-js-functional-playground-nsrlr5)

#### Factory interface

dcs-js also exposes each of the DCS API operations as functions organized in javascript factories. User will be able to use a function for each specific request.

Unlike the functional programming interface, which generate functions that, given the needed params for a specific request,
generate a function that makes that very specific request to a DCS API endpoint operation o each call 😵‍💫; the factory interface generate functions that, given the needed params for a specific request, are able to make that request to a DCS API endpoint operation.

To use this factory modules first import one of the exposed generators:

- AdminApiFactory
- CatalogApiFactory
- IssueApiFactory
- MiscellaneousApiFactory
- NotificationApiFactory
- OrganizationApiFactory
- PackageApiFactory
- RepositoryApiFactory
- SettingsApiFactory
- UserApiFactory

```js
import { OrganizationApiFactory } from "dcs-js";
```

Then use the generator to generate the requester function. Each requester function will allow the user to make a new request.

**Example:**

```js
/* Import the required DCS function generator. */
import { OrganizationApiFp } from "dcs-js";

async function dcsJsExample() {
  /* Get required requester from a dcs-js factory */
  const { orgGet } = OrganizationApiFactory({
    /* Set the desired DCS server path */
    basePath: "https://qa.door43.org/api/v1",
  });

  /* Make a call to the client requester */
  const organizationRequest = await orgGet("test_org");

  /* Use the results */
  console.log(organizationRequest);
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/dcs-js-factories-playground-xjkc2y)

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
