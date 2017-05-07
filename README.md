# Folf Iceland application

# Getting started

### Installing ReasonML

The following instructions will only be applicable for MacOS

+ `brew install opam`
+ `opam init`
+ Follow it's instructions on getting setup
+ `opam update`
+ `opam switch 4.02.3+buckle-master` // This is done for bucklescript support
+ `opam install reason`
+ `opam install merlin`
+ `npm -g install git://github.com/reasonml/reason-cli.git`


### Starting application
Until bs-react-native gets released to NPM we need to have it as a submodule in our project.
Before starting the application make sure to run

`git submodule update --init --recursive`

### Running application

You'll need two terminals to run the app and run the following commands in separate terminals

+ `yarn start`
+ `yarn run reason:watch`

### Using Reason components from JS

Make sure to have `yarn run reason:watch` running since this compiles your ReasonML code to JS.

Bucklescript will compile the code to `FolfApp/lib/js/src` so you need to require the code from there. This will be valid javascript.`
