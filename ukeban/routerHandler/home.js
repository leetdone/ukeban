const fs = require('fs')

exports.home = function (req, res, next) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.send(data.home)
    })
    console.log('home')
    // next();
}

exports.product = function (req, res, next) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.send('product')
        console.log(data.product)
    })
    // next();
}

exports.personal = function (req, res, next) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.render('index', {
            title: data.personal
        })
    })
    next();
}

exports.newsc = function (req, res, next) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.render('index', {
            title: data.newsc
        })
    })
    next();
}

exports.merchant = function (req, res, next) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.render('index', {
            title: data.merchant
        })
    })
    next();
}

exports.helpercenter = function (req, res, next) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.render('index', {
            title: data.helpercenter
        })
    })
    next();
}
