var express = require('express');
var router = express.Router();

let book = require('../fewbooks.json');
console.log(book);

router.get('/books', function(req, res, next){
    res.render('book', {title: 'Nouha', data: ['a', 'b', 'c']});
    //res.json(books);
});

router.get('/mybook', function(req, res, next){
    res.render('ebook', {
        book,
    });
    //res.json(books);
});

router.get('/:id', function(req, res, next){
    const id = req.params.id;

    res.render('ebook', {
        mybook: book[id],
    });

});
module.exports = router;
// Create a server to listen at port 8080
/*var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})*/