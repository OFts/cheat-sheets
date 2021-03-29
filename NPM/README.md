# NPM

**npm** is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.

npm is installed with Node.js npm is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer.

## Check Node and npm

To check if you have Node.js installed, run this command in your terminal:
```bash
node -v
```

To confirm that you have npm installed you can run this command in your terminal:
```bash
npm -v
```

## npm version

npm is a separate project from Node.js, and tends to update more frequently. As a result, even if you’ve just downloaded Node.js (and therefore npm), you’ll probably need to update your npm. Luckily, npm knows how to update itself! To update your npm, type this into your terminal:
```bash
npm install npm@latest -g
```

Software is always changing, and so it’s often a good practice to use a version manager to help account for this change. That's why it's recommended implementing a node version manager like NVM, nodist, etc.

## npm install

```bash
npm install (with no args, in package dir)
npm install [<@scope>/]<name>
npm install [<@scope>/]<name>@<tag>
npm install [<@scope>/]<name>@<version>
npm install [<@scope>/]<name>@<version range>
npm install <alias>@npm:<name>
npm install <git-host>:<git-user>/<repo-name>
npm install <git repo url>
npm install <tarball file>
npm install <tarball url>
npm install <folder>

aliases: npm i, npm add
common options: [-P|--save-prod|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [-B|--save-bundle] [--no-save] [--dry-run]
```

This command installs a package, and any packages that it depends on. If the package has a package-lock or shrinkwrap file, the installation of dependencies will be driven by that, with an `npm-shrinkwrap.json` taking precedence if both files exist. See `package-lock.json` and `npm shrinkwrap`. ([more info](https://docs.npmjs.com/cli/v6/commands/npm-install))

## Useful commands

List globally installed packages
```bash
npm list -g --depth 0
```