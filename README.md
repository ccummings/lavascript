# LavaScript is Literate JavaScript.

## Installation

```shell
# install locally for your project
$ npm install --save-dev lavascript
```

```shell
# install globally to execute on .js.md files anywhere
$ npm install -g lavascript
```

## Usage

```shell
$ lavascript [input file, dir] [output dir]
```

Once installed, you should have access to the `lavascript` command, which can execute scripts and compile `.js.md` files into JavaScript files of the same name.

## Examples

* Compile all `.js.md` files in `src` directory and write the JavaScript files to the `dist` directory.

```shell
$ lavascript src dist
```