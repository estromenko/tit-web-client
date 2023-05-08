# tit-web-client

## Dependencies

### Mandatory

- Node.js version 16 and up. Recommended use [Node Version Manager](https://github.com/nvm-sh/nvm) for installation.

### Optional

- To manage client dependencies it is recommended to use [Yarn](https://yarnpkg.com). In order to install it, you need to run:

```bash
$ npm install --global yarn
```

## Getting started

### Development

You need to install dependencies and run the client

```bash
$ yarn install
$ yarn dev
```

### Production

To deploy the app in production environment you should use werf
(Installation instruction [link](https://werf.io/documentation/v1.2/#installing-werf)).

To build and deploy app use command below:
```bash
$ werf converge --repo registry.tutorin.tech/tit-web-client --env prod
```

To override default configuration you can use `--set` flags or custom `values.yaml` file:
```bash
$ werf converge --repo registry.tutorin.tech/tit-web-client --env prod \
    --set PUBLIC_TIT_BACKEND=https://api.tutorin.tech
$ # Alternatively
$ werf converge --repo registry.tutorin.tech/tit-web-client --env prod \
    --values /path/to/custom/values.yaml
```
