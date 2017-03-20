/*
    登录验证案例
*/
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.js');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('www'));

app.post('/login',(req,res) => {
    let param = req.body;
    let sql = 'select count(*) as cc from user where username=? and password=?';
    let data = [param.username,param.password];
    db.base(sql,data,(ret) => {
        console.log(ret);
        if(ret[0].cc == 1){
            res.send('登录成功');
        }else{
            res.send('登录失败');
        }
    });
});

app.listen(3000,() => {
    console.log('running...');
});