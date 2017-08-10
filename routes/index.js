var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/stories/latest", function (req, res, next) {
  request('http://news-at.zhihu.com/api/3/stories/latest', function (error, response, body) {
    res.json(JSON.parse(body));
  });
});

router.get("/news/latest", function (req, res, next) {
  request('http://news-at.zhihu.com/api/3/news/latest', function (error, response, body) {
    res.json(JSON.parse(body));
  });
});


router.get("/news/before/:date", function (req, res, next) {
  request('http://news-at.zhihu.com/api/3/news/before/'+req.params.date, function (error, response, body) {
    res.json(JSON.parse(body));
  });
});

router.get("/news/before/:id", function (req, res, next) {
  request('http://news-at.zhihu.com/api/3/news/'+req.params.id, function (error, response, body) {
    res.json(JSON.parse(body));
  });
});


module.exports = router;
