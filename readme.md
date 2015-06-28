# Docs Boilerplate

This is a command line tool for creating basic repository documentation. Running it will create a `reamde.md`, `contributing.md` and `license.md` file in your working directory. Each file will contain standard content to get you started. You can also customize this default content to your liking as well as creating multiple sets of basic docs for different kinds of projects (i.e. a Node project set and a Ruby project set).

This also includes tests that make sure you have included these basic files and that your `readme` contains these basic elements: x, y and z.

To **contribute to this project**, see the [contributing documentation](./contributing.md).

## To Use

This is a [Node.js]() program that you'll install with [npm](). You'll need to download [Node.js](), if you don't already have it, which includes [npm](). Then you'll run the commands below in your terminal using the specified commands. Learn about [bash commands]().

- Install this program _globally_ so that you can use it from anywhere on your computer.

```bash
$ npm install -g docs-boilerplate
```

- Use with default settings from within a project.

```bash
# 'change directory' to go into your project
$ cd my-project-folder
# run the program without any options for the defaults.
$ docboil
# a `reamde.md`, `contributing.md` and `license.md` will be created
```

You can then open the directory in your text editor to polish off the files :sparkles:

---

## To Customize

You can customize `docs-boilerplate` to:
- use a different license
- change the content of files to better fit your needs
- add additional sets of docs for different types of projects

### Change Default License

### Customize Default Content

### Create Additional Sets

---

## Future Things

- Test for `readme.md` headers?
- JSON of all common licenses?
- In config, specify directory _or_ files.
- Build test dir? Always if in config, sometimes if passed as option.
