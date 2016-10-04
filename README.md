# es6boiler
+me
+and me
+love you
## Getting Started

### Dependencies
Make sure these are installed first.

* [Node.js](http://nodejs.org)
* [Gulp](http://gulpjs.com) `sudo npm install -g gulp`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files.
3. When it's done installing, run one of the task runners to get going:
	* `gulp` to compile files, serve, watch and livereload project on [localhost:3000](http://localhost:3000)
	* `gulp watch` automatically compiles files on change
	
## File Structure
```
es6boiler/
|—— dist/
|   |—— style.css     # minified styles
|   |—— style.css.map # sourcemap for the styles
|   |—— bundle.js     # babelified and minified scripts
|   |—— bundle.js.map # sourcemap for the scrips
|—— sass/
|   |—— style.scss    # your entrypoint stylesheet
|—— src/
|   |—— script.es6    # your entrypoint script
|   |—— module.es6    # your first es6 module script
|—— .eslintrc
|—— .gitignore
|—— gulfile.js
|—— index.html        # your main html
|—— package.json
|—— README.md
```
