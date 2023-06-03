# Full-stack template using JS/TS

A full-stack template, based on Turborepo + pnpm workspace.

## Workspace

- `web`: Vue-based frontend project
- `server`: Koa-based server side project
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```shell
cd ts-fullstack
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```shell
cd ts-fullstack
pnpm run dev
```
