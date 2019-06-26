# Hacksaw

Zero-config Laravel-powered static site generation with utility-first CSS.

## What's included

- Webpack / Laravel Mix
- Babel
- PostCSS with Tailwind + PurgeCSS
- Jigsaw static site generation

## Requirements

- PHP 7
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com/en/)

## Getting Started

### Option 1 - CLI

Install the CLI globally with npm or yarn.

```shell
npm i -g @sambeevors/hacksaw
```

```shell
yarn global add @sambeevors/hacksaw
```

Then run hacksaw command, passing the desired directory name.

```shell
hacksaw my-app
```

### Option 2 - Clone

Clone this repository and run the following commands to install any dependencies.

```shell
yarn
```

```shell
composer install
```

You can now use any of the commands in `package.json`. To start a development server and watch for changes use `yarn watch`.
