# grunt-underscore

[Grunt](http://gruntjs.com/) javascript task runner configured for [Wordpress](https://wordpress.org/) using the [Automattic](https://github.com/automattic/) starter theme [Underscore](http://underscores.me/). Clone this repo into your theme folder and build locally. Theme will compile as 'humble-humans'.

```
$ npm install
$ bower install
$ grunt
```

To update the theme with a new instance of [Underscore](http://underscores.me/) replace the contents of the 'src' folder. Find and replace all instances of '../humble-humans' in 'Gruntfile.js' and replace with '../your-new-theme-slug'. If not using SASS, remove '!style.css' from the 'copy' task.

When activating theme make sure to active the compiled version, both will appear in admin panel. If using SASS you can differentiate the two by changing the name of your pre-compiled theme via 'src/style.css'.
