var http = require('http');
var express = require('express');
var mysql = require('mysql');

var router = express.Router();

router.post('/', function(req, res){
    console.log('Sign up button 클릭');
    
    var username = req.body.username || req.query.username;
    var id = req.body.id || req.query.id;
    var password = req.body.password || req.query.password;
    var phone = req.body.phone || req.query.phone;
    console.log('ID : ' + id + ' / Password : ' + password + ' / Name : ' + username + ' / Phone : ' + phone);
    
    var strsql = "insert into users (user_name, user_id, user_password, user_phone) values ('" + username+ "', '" + id + "', '" + password + "', '" + phone + "')";
    
    var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rkdvnd52',
    database: 'face_recognition'
    });
    connection.connect()
    
    connection.query(strsql, function(err, rows, fields) {
        if (err) throw err;
        
        connection.end();        
    });
    
    res.redirect('/Main');
});

module.exports = router;