var express = require('express');
var router = express.Router();

//首页数据
var index = require('../data/index.json')

//热门评论数据
var city = require('../data/city.json')
//评论数据
var comments = require('../data/comment.json')
// 每一项数据
var item = require('../data/item.json')
//服务页数据
var service = require('../data/service.json')

router.get('/index',function (req,res) {
  res.send(index)
})
router.get('/city',function (req,res) {
  res.send(city)
})

router.get('/service',function (req,res) {
  res.send(service)
})

router.get('/comment',function (req,res) {
  res.send(comments)
})



module.exports=router



/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


