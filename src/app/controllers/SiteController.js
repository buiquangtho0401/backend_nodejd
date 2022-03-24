const Course = require('../models/course');
const { mutipleMongooseToObject }=require('../../util/mongoose');

class SiteController {
    // [get] /
    index(req, res, next){

        // Course.find({}, function(err, courses){
        //     if(!err) {
        //         res.json(courses);
        //     }
        //   else{
        //     next(err);
        // }
        // });
        // cách 2
        Course.find({})
        .then(courses =>{
            
            res.render('home', {
                courses : mutipleMongooseToObject(courses)
            });
        })      
        .catch(next);
        // res.render('home');
    }
    //[get] /search
    search(req, res){
       res.render('search');
    }
}
module.exports= new SiteController;