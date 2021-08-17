# Welcome to the ReactTraining.com's Node Workshop

Before attending the training, please make sure you install the code (not just clone) and run it to make sure it works. The most common problems for not being able to install and run are related to network configurations at the workshop venue like proxies. If your having these or other issues see the Troubleshooting section below.

## The "What do I need to do before attending the workshop" Checklist:

- [ ] Bring a laptop (don't forget a long power cord).
- [ ] Install and run this code. If doing `npm start` after installing shows a welcome message, you're all set.
- [ ] [Become familiar with basic Node and NPM CLI ahead of time](./cli.md)
- [ ] [Learn the JavaScript syntax that matters the most to React](https://reacttraining.com/blog/javascript-the-react-parts/). Even though this is a "Node" workshop, all the material in that article still applies since it's trying to bring you up to speed with modern JS syntax.
- [ ] WAIT! Does your company or computer use a VPN or any sort of proxy? That might cause some issues. Someome on your team probably knows how to get around the issues. We can't really help out because the issues surrounding VPN's and Proxies are so diverse and out of our control.

## Install Git, Node, and NPM

If you have any problems with these steps, make sure you see the [Troubleshooting](#troubleshooting) section below.

**Need to install Git?** - http://git-scm.com/downloads

**Need to install Node?** We recommend using [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) instead of installing from source. Installing from source works, but it's difficult to maintain your node version later on (which is why `nvm` exists). Please see the Windows section for a different install process.

**Windows Users!** Please read the [Windows Users](#windows-users) section below for installing NVM, Node, and WSL.

If you need to verify that you have NVM installed: `nvm --version`. Then install Node:

```sh
# Installs latest LTS version of node
# See this page for more install options: https://github.com/nvm-sh/nvm#usage
$ nvm install node

# lists out the versions of node that you're managing with nvm including
# which one is the current one in your CLI
$ nvm list
```

Verify you have Git, Node, and NPM installed. Installing Node will install NPM.

```sh
$ git --version
$ node --version
$ npm --version
```

You don't necessarily need the latest version of Node for this workshop.

## Install Workshop Code

Then **clone**, **install**, and **run** the app:

```sh
# Clone the repo to your local machine (This just clones, it does not "install")
$ git clone https://github.com/ReactTraining/node-workshop.git

# Whichever directory you run the above command from, that directory should
# now have a folder called `node-workshop`.

# Change directory to the `node-workshop` folder:
$ cd node-workshop

# Install and run. Make sure you do these two commands from within the `node-workshop` folder:
$ npm install
$ npm start

# If you have issues, read below.
```

You should be able to run `npm start` and see a welcome message. If you do, you're all set for the workshop.

If something goes wrong, you may need to see the [Troubleshooting](#troubleshooting) section below. We even have a special section for [Windows Users](#windows-users)

## Troubleshooting

A few common problems:

- **You're having problems cloning the repository.** Some corporate networks block port 22, which git uses to communicate with GitHub over SSH. Instead of using SSH, clone the repo over HTTPS. Use the following command to tell git to always use `https` instead of `git`:

```sh
$ git config --global url."https://".insteadOf git://

# This adds the following to your `~/.gitconfig`:
[url "https://"]
  insteadOf = git://
```

- **You're having trouble installing Node.** We recommend using [nvm](https://github.com/creationix/nvm). nvm makes it really easy to use multiple versions of node on the same machine painlessly. After you install nvm, install the latest stable version of node with the following command:

```sh
$ nvm use default stable
```

- **You don't have permissions to install stuff.** You might see an error like `EACCES` during the `npm install` step. If that's the case, it probably means that at some point you did an `sudo npm install` and installed some stuff with root permissions. To fix this, you need to forcefully remove all files that npm caches on your machine and re-install without sudo.

```sh
$ sudo rm -rf node_modules

# If you installed node with nvm (suggested):
$ sudo rm -rf ~/.npm

# If you installed node with Homebrew:
$ sudo rm -rf /usr/local/lib/node_modules

# Then (look ma, no sudo!):
$ npm install
```

- **You can't run node with `npm start`.** Make sure you can see a `node_modules` folder at the root. If you can't you need to run `npm install` from the root of the repo.

## Windows Users

There are two days to get NVM (Node Version Manager) -- the "Windows" way and the "Linux" way. Lots of open source command-line tools are written for Linux (Unix) systems so they might be problematic when we try to use their Windows way to do it. But if you can get it to work, it's probably the most simple approach. To use NVM for Windows, follow their instructions here: https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

### Or...

You can use use Windows Subsystem for Linux (WSL) instead of GitBash or PowerShell and essentially host a Linux environment on Windows. This way is a little more involved but we've had lots of success with our Windows audience in our workshop when they do the WSL approach.

- WSL 2 Installation: https://docs.microsoft.com/en-us/windows/wsl/install-win10
- Node on Windows: https://docs.microsoft.com/en-us/windows/nodejs/setup-on-wsl2

From their docs:

> "There are multiple ways to install Node.js. We recommend using a version manager as versions change very quickly. You will likely need to switch between multiple versions based on the needs of different projects you're working on"

They will recommend you install `nvm` (Node Version Manager). We agree!

<hr />

Not using WSL can have a few problems that might arise in a Windows Environment:

- Permissions issues when attempting to clone the repo. If you are using WSL but usually use another shell, you may want to copy your SSH keys where WSL can access them. [This article explains why this is necessary and how to do it.](https://devblogs.microsoft.com/commandline/sharing-ssh-keys-between-windows-and-wsl-2/)
- Error after install. Chances are the `npm install` went well but we also do a `postinstall` script to create the `database.json` file. See the [Database](#database) section above for details.
- If you're able to successfully run the app once but it doesn't start on the subsequent runs, chances are the database port didn't shut down when you recently stopped the app. See the [Database](#database) section above for details.
- If you do `npm run app` or `npm start` and you get weird errors instead of our menu system, we don't know what that is yet but the only reporters have been using GitBash instead of PowerShell.

<hr />

If you're a Windows user who already does active JS/Node development then you should be good-to-go. Otherwise this section might be able to help.

Consider using [VSCode](https://code.visualstudio.com/download) (A lightweight version of Visual Studio) for our workshops as it is probably more appropriately suited for modern JavaScript development than Visual Studio, Eclipse, IntelliJ, etc. It has a terminal built-in which uses PowerShell by default, but you can configure it to use WSL which is what we recommend.

If you want, you can go into Windows' settings to turn on file extensions. In JavaScript projects, it's common to have a filename like `.gitignore` which would be difficult to see without extensions turned on. It's not required though.

If these instructions for Windows users can be improved, please let us know or make a PR!

## License

This material is available for private, non-commercial use under the [GPL version 3](http://www.gnu.org/licenses/gpl-3.0-standalone.html). If you would like to use this material to conduct your own workshop, please contact us at [hello@reacttraining.com](mailto:hello@reacttraining.com).
