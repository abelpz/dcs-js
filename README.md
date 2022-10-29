<!-- markdownlint-disable -->
<p align="center">
  <a href="https://dcs-js.netlify.app/" rel="noopener" target="_blank"><img src="https://socialify.git.ci/unfoldingWord/dcs-js/image?description=1&descriptionEditable=A%20javascript%20client%20for%20Door43%20Content%20Service&font=Raleway&issues=1&language=1&logo=https%3A%2F%2Fgit.door43.org%2Fassets%2Fimg%2Flogo.svg&owner=1&pattern=Plus&pulls=1&theme=Light" alt="dcs-js" />
</a>
</p>
<h1 align="center">DCS JS</h1>

A [Door43 Content Service](https://git.door43.org/) API client that makes it easier to use [DCS API](https://git.door43.org/api/swagger).

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/unfoldingWord/dcs-js/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/dcs-js/latest.svg)](https://www.npmjs.com/package/dcs-js)
[![npm next package](https://img.shields.io/npm/v/dcs-js/next.svg)](https://www.npmjs.com/package/dcs-js)
[![npm downloads](https://img.shields.io/npm/dm/dcs-js.svg)](https://www.npmjs.com/package/dcs-js)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/unfoldingWord/dcs-js.svg)](http://isitmaintained.com/project/unfoldingWord/dcs-js "Percentage of issues still open")
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=flat&logo=discord&logoColor=white)](https://discord.com/channels/867746700390563850/931543389223145562)

[![Open Components Ecosystem](https://img.shields.io/badge/OCE-component-green?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNjQuMTkgMzYyLjIxIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzJmNWM2ZTt9LmNscy0ye2ZpbGw6I2NjYzUzZjt9LmNscy0ze2ZpbGw6I2YxNWU1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPtCg0LXRgdGD0YDRgSAxPC90aXRsZT48ZyBpZD0i0KHQu9C+0LlfMiIgZGF0YS1uYW1lPSLQodC70L7QuSAyIj48ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik04OC40OCw4NC41YS43Ny43NywwLDAsMSwxLC41NGw5Ljg5LDM3czEuNDYsNyw3LjY0LDYuMjlhOS41LDkuNSwwLDAsMCw2LjEtNS4xMXMuOS0xLjYsMi4wOS0zLjhhNS4zOCw1LjM4LDAsMCwxLDEuODUtMiw4Ljc4LDguNzgsMCwwLDEsNS0xLjRzMy40Ni0uNjQsNy40Myw4LjdjMCwwLDQuMDUsMTAuMzYsMCwxNS4wNywwLDAtMiwzLjQtOC4xNSwyLjA5YS42OS42OSwwLDAsMS0uMjUtLjEsNDEuNiw0MS42LDAsMCwwLTctMy43N2wtLjA2LDBjLS40Ni0uMTItNi4zOS0xLjYtOC4xOCw0LjQ5YTQuODksNC44OSwwLDAsMC0uMjEsMS40NywzMi42OSwzMi42OSwwLDAsMCwuMzUsNCwuMzYuMzYsMCwwLDAsMCwuMWwxMi40NCw0OC4xYS43Ny43NywwLDAsMCwxLC41NWw0MS0xMS4zNHMyLjM3LS44NywyLjQ3LDEuMDdjMCwwLC40NSwxLjU3LTIuNTMsOC4yMXYwYy0uMDYuMTYtMS44NCw1LjEyLDEuMjUsMTMuNDh2MGMuMTEuMjEsMi42OSw1LjUzLDcuMTcsNi42OSwwLDAsNC4yNiwyLjA1LDEwLjcyLDAsMCwwLDktMS4zMSwxMi41OC05YTUuODksNS44OSwwLDAsMCwuMjQtLjU4Yy42Mi0xLjc1LDMtMTAuMTQtNC40Mi0xOC4zbC0uMDktLjA4LTUuNTktNC42NHMtMS43NC0yLjMxLjIxLTMuMWMwLDAsMjMuMDgtNy4zMiwzNS41OS0xMC4zMWEuNzUuNzUsMCwwLDEsLjkuNTJsMjIuNjksNzEuOTFzMy43OSwxMi04LDE1LjE1TDgzLjg3LDI5Ny4xM2wtLjEsMGMtMSwuNDYtMTguMjcsOC40MS0xMy4xNCwzMS45MiwwLDAsNC42LDIxLjcyLDMyLjA1LDE4Ljk1bC4xNCwwLDE1MS4wNi00MC43LjEsMGMuNjItLjA3LDcuNTYtLjc3LDkuNTYsNC4yOCwwLDAsMi42NCw0LjY0LTIuNzEsOC43OGEuODUuODUsMCwwLDEtLjMuMTVMMTAzLjU4LDM2Mi4wOGwtLjEzLDBjLTEuNTguMTItMzEuNTIsMi4yLTQyLjU0LTIwbC0uMDYtLjE0TDEsMTQ0LjYzUy03LDExNC43LDIzLjI1LDEwM2wuMDgsMFoiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0yNTYuNDQsMTA0LjY2QTEuMjQsMS4yNCwwLDAsMCwyNTcsMTAzTDIwOS41Myw5LjI2UzIwNC4yOS0zLjksMTg5LDEuMTZhLjk0Ljk0LDAsMCwwLS4yMy4xTDExNS40Myw0MC44OGE1LjEzLDUuMTMsMCwwLDAtMi4zLDcuMzlsMTkuNTIsMzguMjRzMi4wNiw0LjI2LDUuMTgsM2MwLDAsMi4zOC0uMzYsMy41NS01LjgxQTI0LDI0LDAsMCwxLDE0My4xOSw3OWE1Ljg3LDUuODcsMCwwLDEsLjQzLS42N0ExMSwxMSwwLDAsMSwxNTIuNTEsNzRzNS43NS0uMjYsMTEuMzUsMTAuNjFjMCwwLDUuNDIsOS42MywxLjkzLDE1LjY1LDAsMC0yLjQsNS05LjM4LDUsMCwwLS40NS40NC03LTEuODYsMCwwLTMuNzMtMS4yMy01LjI1LDEsMCwwLTEuOTQsMS4xOS45MSw3TDE2My41NiwxNDhzMi4xMiw0Ljc1LDcuNTYsMi4zOGwyOC40Mi0xNS4yMi4wNSwwYy4zMS0uMTUsNC4zLTIsNS0yLDAsMCwyLjkzLS40LDQuMTYsMy42NiwwLDAsLjYzLDEuNjktLjY4LDguMzRhLjMxLjMxLDAsMCwwLDAsLjFjLS4wNi42OS0uNTksOC41Miw1LjU4LDEzLjU2LDAsMCw0LjU0LDQuODksMTMuODktLjM1LDAsMCw4LjY4LTMuOCw4LjIzLTExLjUzLDAsMC0uNC03LjA5LTUuNjQtMTEuMTJhNS4wNiw1LjA2LDAsMCwwLTItMS4zMyw2My40NCw2My40NCwwLDAsMS02LjQ0LTMuNTcsNS4xNSw1LjE1LDAsMCwxLTEuNTEtNS44czAtLjc1LDIuNTQtMi4yOVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik05My4wOCwzMTcuMDhzLTUuMTQsMy45NC0zLDEwLjJhNy45Miw3LjkyLDAsMCwwLDguMTMsMi4zMmwxNDUuNDYtNDAuMDlzNS4xMy0yLjU0LDMuNzMtOWMwLDAtLjIzLTUuNzktOC40LTQuNjNaIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjcyLjE3IDEzOS42OCA1MC4zOSAxMjguNzEgMzguNzkgMTUwLjE2IDIyLjU5IDk4LjU3IDU1Ljk3IDg4LjA5IDcyLjE3IDEzOS42OCIvPjwvZz48L2c+PC9zdmc+&style=flat&labelColor=ffffff)](https://opencomponents.io/component/unfoldingWord/dcs-js)

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
