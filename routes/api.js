var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const Response = require('../util/response');
const path = require('path');
const fs = require('fs');
let fspath = __dirname.substring(0, __dirname.length - 7);

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'chinavis',
    post: '3306',
    multipleStatements: true    // 多语句查询
});


/* GET users listing. */
router.get('/getMeans', function(req, res, next) {
    let file = fspath + '/public/json/means4.json';
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            Response.ResponseMessage(res, false, '获取数据失败', '');
        } else {
            Response.ResponseMessage(res, true, '获取数据成功', data);
        }
    })
    // pool.getConnection((err, conn) => {
    //
    //     let sql = 'select * from test';
    //     conn.query(sql, (err, result) => {
    //         if (err) {
    //             Response.ResponseMessage(res, false, '获取数据失败', '');
    //         }
    //         Response.ResponseMessage(res, true, '获取数据成功', result);
    //     });
    //     conn.release();
    // });
});

router.get('/getConnect', function(req, res, next) {
    let file = fspath + '/public/json/connect.json';
    fs.readFile(file, 'utf-8', (err, data) => {
        if (err) {
            Response.ResponseMessage(res, false, '获取数据失败', '');
        } else {
            Response.ResponseMessage(res, true, '获取数据成功', data);
        }
    })
    // pool.getConnection((err, conn) => {
    //
    //     let sql = 'select * from test';
    //     conn.query(sql, (err, result) => {
    //         if (err) {
    //             Response.ResponseMessage(res, false, '获取数据失败', '');
    //         }
    //         Response.ResponseMessage(res, true, '获取数据成功', result);
    //     });
    //     conn.release();
    // });
});

module.exports = router;
