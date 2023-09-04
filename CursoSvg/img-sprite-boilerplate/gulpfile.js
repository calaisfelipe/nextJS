var gulp = require('gulp')
var svgSprite = require('gulp-svg-sprite')

var config = {
   mode:{
    symbol:{
        dest:'sprite',
        sprite:'sprite.svg',
        example: true,
        svg:{
            xmlDeclaration:false,
            doctypeDeclaration:false
        }

    }
   } 
}

gulp.src('icons/**/*.svg')
  .pipe(svgSprite(config))
  .pipe(gulp.dest('out'));

//gulp-task('sprites', function(){
   // return gulp.src('icons/**/*.svg').pipe(svgSprite(config)).pipe(gulp.dest('.'))


//})