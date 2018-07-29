var express = require('express');
var router = express.Router();

//首页数据
var index = require('../data/index.json')
//评论数据
var comment = require('../data/comment.json')
// 每一项数据
var item = require('../data/item.json')
//服务页数据
var service = require('../data/service.json')

router.get('/msite',function (req,res) {
  res.get(index)
})

router.get('/',function (req,res) {
  res.get(comment)
})



module.exports=router



/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


