angular.module('MallorcaJsDemoClientConfig', [])

.constant('env', {api:{endpoint:'http://localhost:3000/'}})

.constant('package', {name:'client',private:true,devDependencies:{'autoprefixer-core':'^5.2.1',grunt:'^0.4.5','grunt-angular-templates':'^0.5.7','grunt-aws':'^0.6.2','grunt-concurrent':'^1.0.0','grunt-contrib-clean':'^0.6.0','grunt-contrib-compass':'^1.0.0','grunt-contrib-concat':'^0.5.0','grunt-contrib-connect':'^0.9.0','grunt-contrib-copy':'^0.7.0','grunt-contrib-cssmin':'^0.12.0','grunt-contrib-htmlmin':'^0.4.0','grunt-contrib-imagemin':'^1.0.0','grunt-contrib-jshint':'^0.11.0','grunt-contrib-uglify':'^0.7.0','grunt-contrib-watch':'^0.6.1','grunt-filerev':'^2.1.2','grunt-google-cdn':'^0.4.3','grunt-jscs':'^1.8.0','grunt-karma':'^0.12.2','grunt-newer':'^1.1.0','grunt-ng-annotate':'^0.9.2','grunt-ng-constant':'^2.0.1','grunt-postcss':'^0.5.5','grunt-svgmin':'^2.0.0','grunt-usemin':'^3.0.0','grunt-wiredep':'^2.0.0','jasmine-core':'^2.4.1','jit-grunt':'^0.9.1','jshint-stylish':'^1.0.0',karma:'^0.13.22','karma-jasmine':'^0.3.8','karma-phantomjs-launcher':'^1.0.0','phantomjs-prebuilt':'^2.1.7','time-grunt':'^1.0.0'},engines:{node:'>=0.10.0'},scripts:{test:'grunt test'}})

;