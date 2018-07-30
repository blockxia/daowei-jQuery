var express = require('express')
//默认找routes下面的index.js文件
var router = require('./routes/route.js')
var app=express()

//const cors=require('cors')
//app.use(cors())
app.use(express.static("dist"))
app.use(router)

app.listen(4000,function (req,res) {
  console.log('项目启动成功，端口号4000');

})