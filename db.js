/*
    封装通用的方法
*/
const mysql = require('mysql');

exports.base = (sql, data, callback) => {
    // 创建数据库连接
    let connection = mysql.createConnection({
        host: 'localhost', //数据库所在的服务器域名或者IP
        user: 'root', //用户名
        password: '', //密码
        database: 'book' //数据库名称
    });
    // 执行连接动作
    connection.connect();
    // 执行数据库操作
    connection.query(sql, data, (err, rows, fields) => {
        if (err) throw err;
        callback(rows);
    });
    // 关闭数据库
    connection.end();
}
