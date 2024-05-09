# ritro-ui-components
Ritro UI monorepo

### initialize lerna
npx lerna init

## updating yarn 
[docs ref link](https://yarnpkg.com/getting-started/install)
yarn set version stable
yarn install

## Creating packages
npm install --global lerna
lerna create <package_name>

# setup storybook
yarn dlx storybook@latest init


### adding dependencies

#### adding depencies
yarn add <package_name>

#### adding peer dependencies
yarn add -P <package_name>

#### adding dev dependencies
yarn add -D <package_name>

### adding dependencies to workspaces
yarn workspace <workspace_name> add <package_name>

### adding dev depencies to workspaces
yarn workspace <workspace_name> add -D <package_name>

### adding peer depencies to workspaces
yarn workspace <workspace_name> add -P <package_name>

### by default yarn uses pnp, but that can be changed by configuring .yarnrc.yml 

[Yarn config](https://yarnpkg.com/features/pnp)