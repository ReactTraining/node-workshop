# Node and NPM Commands

When you install Node, it comes with NPM (Node Package Manager)

```sh
# Get the node version (or use `node --version`)
# Also use this just to check if node is installed
node -v

# Get the npm version or check to see if installed
npm -v
```

You can install node from source, but if you're able to, we recommend using NVM (see below).

By the way, Even numbers are LTS in Node. It's probably best to install the latest LTS active version. See https://nodejs.org/en/about/releases/ for more details.

## NVM (Node Version Manager)

This is an unofficial tool to help install and manage different versions of Node on one machine. From their docs:

> nvm is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

If you need help installing nvm on Windows, you'll need WSL. See our main [Readme](./README.md) and https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2

For how to install and use nvm: https://github.com/nvm-sh/nvm

```sh
# List out the node versions you have, and see which one is currently being used:
nvm list
```

# Starting a new project

These are the bare minimum things you'll need for a Node project

- `node_modules`: Where your third party packages (modules) will be installed.
- `package.json`: A manifest file that knows about all dependencies (and their versions) you need for this project.
- `package-lock.json`: An automatically generated lock file to help npm manage your dependency tree.

If you were starting a brand new project with an empty folder as your starting point. The first thing you'd do is `npm init` which will walk you through creating your `package.json` file.

```sh
# Skip the walk-through, create with default options:
npm init -y

# -> makes `package.json`
```

Then you would install third party modules, like `date-fns`:

```sh
npm install date-fns
```

Doing an `npm install <package-name>` will add the package to your `package.json` and will create your `node_modules` folder with that package and all the dependencies that it depends on. Since this is your first `npm install`, it will also automatically create the `package-lock.json` file which you will NEVER EDIT BY HAND.

# Using an existing project

If you've just cloned an existing project, it will have `package.json` and `package-lock.json` already since these are committed in git. You won't have a `node_modules` folder though since we don't typically commit those to git (since they're big).

Run `npm install` without adding a package name and it will seek through all the packages listed in `package.json` and it will make your `node_modules` folder.

# Installing Packages

```sh
# Docs for `npm install`
# https://docs.npmjs.com/cli/v6/commands/npm-install

# This command will install all dev and production dependencies found in
# package.json. It's typically used when you've just cloned a repo. The
# repo will come with a #package.json but not a node_modules folder, so
# this command will install all files in node_modules:
npm install

# Alias for `npm install`
npm i

# Install a specific package into node_modules. It also adds the package
# to the dependencies property of package.json:
npm i <package-name>

# Same as above but adds to devDependencies section of package.json. You
# can also use `--save-dev`
npm i <package-name> -D

# Install a package globally (outside of your project in npm's global
# folder on your machine). This is typically used when the package is
# going to add a binary for you to use in CLI.
npm i -g <package-name>

# For example
npm i -g http-server

# Now you can navigate to any path on your computer and run this command
http-server

# http-server will run the local path as a web server, using the files
# as static assets.

# List NPM modules installed in the current path's node_modules folder
npm list --depth=0

# List  NPM modules installed globally on machine
npm list -g --depth=0
```

# Installing at specific versions (Upgrading or Downgrading versions)

If you need to upgrade/downgrade version numbers, or install a specific version for any reason use `@` after the package name:

```sh
# Install React at the major version 16. Npm will install the highest
# available minor version, so 16.14.0 will be installed
npm i react@16

# This will install React at 16.0.x (with the highest available patch)
npm i react@16.9
```

## Removing packages

It's always best to remove packages with `npm uninstall <package-name>` which will remove the package from `package.json` `package-lock.json` and `node_modules`.
