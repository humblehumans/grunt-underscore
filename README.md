# grunt-underscore

[Grunt](http://gruntjs.com/) javascript task runner configured for [Wordpress](https://wordpress.org/) using [Automattic](https://github.com/automattic/) starter theme [Underscores](http://underscores.me/). Clone this repo into your theme folder and build locally. Theme will compile as 'humble-humans'. 

```
$ npm install
$ bower install
$ grunt
```

- To update the theme with a new instance replace the contents of src

- Find and replace all instances of default theme slug in Gruntfile.js

[ Find ]
```
../humble-humans
```

[ Replace ]
```
../your-new-theme-slug
```

- If not using SASS remove exclude statement from Gruntfile.js copy task

[ Remove ]
```
!style.css
```

- When enabling theme make sure to activate the compiled version, both will appear in WP Admin. You can differentiate the two by changing the name of your pre-compiled theme via src/style.css

[ Example ]
```
Theme Name: Humble Humans - Uncompiled
```

This repo does not version control Wordpress or Underscores thanks to the wisdom of [Sarah Gooding](http://wptavern.com/git-and-wordpress-3-tips-to-do-it-better).

Continually and originally inspired by [Craig Phares](https://github.com/craigphares) of [Six Overground](https://github.com/sixoverground)
