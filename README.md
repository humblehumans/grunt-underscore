# grunt+underscore

[Grunt](http://gruntjs.com/) javascript task automation configured for [Wordpress](https://wordpress.org/) using the [Automattic](https://github.com/automattic/) starter theme [Underscore](http://underscores.me/).

Clone this repo into your theme folder and build locally. Theme will compile as 'humble-humans' by default. 

```
$ npm install
$ bower install
$ grunt
```

To update the theme with a new instance of Underscore replace the contents of the 'src' folder. Find and replace all instances of '../humble-humans' in 'Gruntfile.js' and replace with your '../you-new-theme-slug'. If not using SASS (shame on you), remove '!style.css' from the 'copy' task.

When activating theme make sure to active the compiled version, both will appear as theme options. To differentiate change the theme name in your pre-compiled 'src/style.css' i.e. 'Theme Name: Humble Humans - Uncompiled'. 
