var express = require('express')
//默认找routes下面的index.js文件
var router = require('./routes')
var app=express()


app.use(express.static('public'))
app.use(router)

app.listen(4000,function (req,res) {
  console.log('项目启动成功，端口号4000');

})