class NewsController {
    // [get] /news
    index(req, res){
        res.render('news');
    }
    //[get] /news/:slug
    show(req, res){
        res.send('quang thọ');
    }
}
module.exports= new NewsController;