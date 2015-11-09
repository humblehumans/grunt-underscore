# grunt-underscore

[Grunt](http://gruntjs.com/) javascript task runner configured for [Wordpress](https://wordpress.org/) using [Automattic](https://github.com/automattic/) starter theme [Underscore](http://underscores.me/). Clone this repo into your theme folder and build locally. Theme will compile as 'humble-humans'.

```
$ npm install
$ bower install
$ grunt
```

- To update the theme with a new instance of [Underscore](http://underscores.me/) replace the contents of repo src folder

- Find and replace all instances of default theme slug in Gruntfile.js

[ Find ]
```
../humble-humans
```

[ Replace ]
```
../your-new-theme-slug
```

- If not using SASS, remove exclude statement from Gruntfile.js copy task

[ Remove ]
```
!style.css
```

- When enabling theme make sure to activate the compiled version, both will appear in WP Admin. You can differentiate the two by changing the name of your pre-compiled theme via src/style.css

[ Example ]
```
Theme Name: Humble Humans - Uncompiled
```