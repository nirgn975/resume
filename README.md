# Resume

> This is a website to showcase my resume.

## To get started

```sh
$ npm install
$ gulp
```

And you'll have a new Jekyll site generated for you and displayed in your
browser.

## Usage

This command is identical to the gulp command, the only difference is that it doesn't create a BrowserSync session in your browser.

When you run the command with --prod you are changing into production settings. It's mostly the same as the default, however all your CSS and JS are minifed, gzipped, cache busted and your HTML is minified as well and source maps are disabled. Use when you're done developing locally to verify that nothing is broken and that everything works.
```sh
$ gulp build [--prod]
```


When you're done developing and have built your site with either gulp --prod or gulp build --prod you can deploy your site to Github Pages. 
```sh
$ gulp deploy
```

## Owner

> [Nir Galon](https://github.com/nirgn975)

## License
The code of the website itself is licensed under the Apache 2.0 License, and the pictures under Fair use.
