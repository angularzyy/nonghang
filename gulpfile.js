var gulp = require('gulp');
var webserver = require('gulp-webserver');
var fs = require('fs');
var url = require('url');
gulp.task('webserver',function(){
    gulp.src('./').pipe(webserver({
        port:8888,
        host:'localhost',
        livereload:true,
        middleware:function(req,res,next){
           res.setHeader('Access-Control-Allow-Origin',"*");
           res.setHeader('content-type','application/json;charset=utf-8;')
           if(req.method === 'GET'){                   
              res.end(fs.readFileSync('./json/data.json'))           
           }
        }
    }))
})